import {
  Controller,
  Get,
  HttpStatus,
  Res,
  UseGuards,
  Request,
  Post,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}
  //@UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() { body }) {
    try {
      const { data } = await this.authService.loginWithCredentials(body);
      return data;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
  @Get('/favicon.ico')
  renderFavicon(@Req() req: Request, @Res() res: Response) {
    res.status(204);
  }
  @UseGuards(JwtAuthGuard)
  @Get('user-info')
  getUserInfo(@Request() req) {
    return req.user;
  }
  @Get()
  getHello(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(this.appService.getHello());
  }
}
