import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtTokenService: JwtService,
  ) {}

  async validateUserCredentials({ email, password }): Promise<any> {
    const user = await this.usersService.findUserByEmail(email);

    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async loginWithCredentials(body: any) {
    const user = await this.validateUserCredentials(body);
    return {
      data: {
        user,
        token: this.jwtTokenService.sign(user),
      },
    };
  }
}
