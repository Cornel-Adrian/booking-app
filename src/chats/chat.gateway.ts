import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatService } from './chats.service';

@WebSocketGateway({
    cors:{
        origin:['http://localhost:3100'],
    },
})
export class ChatGateway implements OnGatewayConnection {
    @WebSocketServer()
    server: Server;

    constructor(private readonly chatService: ChatService) { }

    async handleConnection(client: Socket) {
        const orderId = client.handshake.query.orderId as string;
        const messages = await this.chatService.getMessagesByOrderId(orderId);
        client.join(orderId);
        client.emit('messages', messages);
        console.log("we got here");
    }

    @SubscribeMessage('message')
    async handleMessage(client: Socket, messageDto: { sender: string; content: string }) {
        const { sender, content } = messageDto;
        const orderId = client.handshake.query.orderId as string;
        const message = await this.chatService.createMessage(orderId, sender, content);
        this.server.to(orderId).emit('newMessage', message);
    }
}
