import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {


    constructor(private userService: UsersService) { }



    async validateUser(email: string, password: string): Promise<any> {

        const user = await this.userService.getUserByEmail(email);

        if (user && user.password == password) {
            const { password, ...results } = user;

            return results;
        }
        return null;
    }




}
