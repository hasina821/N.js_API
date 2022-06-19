import { Controller } from "@nestjs/common";
import {


@Controller('auth')
export class BookMarkController{
  constructor(private readonly auth:){}
  
  @get('/signin')
  signin(){
  }
  
  @get('/signup')
  signup(){
  }
}

