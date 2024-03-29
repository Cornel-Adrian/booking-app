import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ChatService } from './chats.service';
import { CreateChatDto } from './dto/create-chat.dto';

@Controller('chats')
export class ChatsController {
  constructor(private readonly chatsService: ChatService) { }

  @Post("sendMessage")
  create(@Body() createChatDto: CreateChatDto) {
    console.log("are we there yet ?");
    return this.chatsService.createMessage(createChatDto.orderId, createChatDto.sender, createChatDto.content);
  }

  @Get("/getChat/:orderId")
  getChat(@Param('orderId') orderId: string) {
    return this.chatsService.getMessagesByOrderId(orderId);
  }

}
