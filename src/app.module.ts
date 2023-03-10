import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, ConfigModule.forRoot(), MongooseModule.forRoot('mongodb+srv://db_user_admin:fX7xY6TitbC00OIJ@cluster0.8svqnlc.mongodb.net/test')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }