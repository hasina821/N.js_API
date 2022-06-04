import { Controller, Get } from "@nestjs/common";
import { AuthService } from "./auth.service";


@Controller('auth')
export class AuthController{
     constructor(private authService:AuthService){}

     @Get('signin')
     signin():any{
          return this.authService.signin();
     }

     @Get('signup')
     signup():any{
          return this.authService.signup();
     }
}