import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatGateway } from './chat.gateway';
import { ChatService } from './chats.service';
import { MessageSchema } from './schemas/message.schema';
import { ChatsController } from './chats.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Message', schema: MessageSchema }])],
  controllers:[ChatsController],
  providers: [ChatGateway, ChatService],
})
export class ChatModule {}
