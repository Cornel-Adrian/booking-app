import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { CompanyModule } from './company/company.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [UsersModule, AuthModule, ConfigModule.forRoot(), MongooseModule.forRoot('mongodb+srv://db_user_admin:fX7xY6TitbC00OIJ@cluster0.8svqnlc.mongodb.net/test'), OrdersModule, CompanyModule, ReviewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }