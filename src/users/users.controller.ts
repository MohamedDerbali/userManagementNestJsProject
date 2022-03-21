import { UsersService } from './users.service';
import {
  Controller,
  Get,
  Post,
  Req,
  //   HttpCode,
  Param,
  HttpStatus,
  Res,
  Body,
  //   Redirect,
} from '@nestjs/common';
import { Response } from 'express';
import { usersDto } from './users.interface';
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  checkValidUser(obj: any): obj is usersDto {
    return (
      typeof obj.firstName === 'string' &&
      typeof obj.lastName === 'string' &&
      typeof obj.isActive === 'boolean'
    );
  }
  @Get()
  async getUsersList(@Res() res: Response) {
    try {
      const userList = await this.usersService.findAll();
      res.status(HttpStatus.OK).json(userList);
    } catch (err) {
      throw err;
    }
  }
  @Get('/:id')
  async getUserById(@Param() params, @Res() res: Response) {
    const { id } = params;
    try {
      const user = await this.usersService.findOne(id);
      res.status(HttpStatus.OK).json(user);
    } catch (err) {
      throw err;
    }
  }
  @Post()
  async addUser(@Res() res: Response, @Req() { body }) {
    try {
      if (!this.checkValidUser(body)) {
        throw new Error('invalid request');
      }
      const user = <usersDto>body;
      const userAdded = await this.usersService.add(user);
      res.status(HttpStatus.OK).json({ data: userAdded });
    } catch (err) {
      throw err;
    }
  }
}
