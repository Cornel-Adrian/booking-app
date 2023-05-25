import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from './schemas/message.schema';

@Injectable()
export class ChatService {
  constructor(@InjectModel('Message') private readonly messageModel: Model<Message>) {}

  async createMessage(orderId: string, sender: string, recipient: string, content: string): Promise<Message> {
    const message = new this.messageModel({ orderId, sender, recipient, content });
    return message.save();
  }

  async getMessagesByOrderId(orderId: string): Promise<Message[]> {
    return this.messageModel.find({ orderId }).exec();
  }
}
