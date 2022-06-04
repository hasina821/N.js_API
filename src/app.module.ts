import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BookMarkModule } from './bookmark/bookmark.module';

@Module({
  imports: [AuthModule,BookMarkModule],
})
export class AppModule {}
