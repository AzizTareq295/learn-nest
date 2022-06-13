import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/user/users.service';
import { JwtService } from '@nestjs/jwt'


@Injectable()
export class AuthService {

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.loginData(email);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

}
