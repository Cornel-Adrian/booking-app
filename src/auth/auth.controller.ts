import { Body, Controller, Delete, Get, Ip, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import RefreshTokenDto from './dto/refresh-token.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Get('login')
  async login(@Req() request, @Ip() ip: string, @Body() body: LoginDto) {

    try {
      return this.authService.login(body.email, body.password, {
        ipAddress: ip,
        userAgent: request.headers['user-agent'],
      });
    }
    catch (error) {
      console.log(error);
    }


  }

  @Post('refresh')
  async refreshToken(@Body() body: RefreshTokenDto) {
    return this.authService.refresh(body.refreshToken);
  }

  @Delete('logout')
  async logout(@Body() body: RefreshTokenDto) {
    return this.authService.logout(body.refreshToken);
  }
}