import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService{
     signin(){
          return {message:"Signing in"}
     }
     signup(){
          return {message:"signing up"}
     }
}