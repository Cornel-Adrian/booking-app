import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { UsersRepository } from './users.repository';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class UsersService {


    constructor(private readonly userRepository: UsersRepository) { }

    async getUserById(userId: string): Promise<User> {
        return this.userRepository.findOne({ userId });
    }

    async getUserByEmail(email: string): Promise<User> {
        return this.userRepository.findOne({ email });
    }


    async createUser(email: string, password: string, name: string, role: string): Promise<User> {
        return this.userRepository.create({
            userId: uuidv4(),
            email: email,
            password: password,
            name: name,
            role: role,
        })
    }


    async getUsers(): Promise<User[]> {
        return this.userRepository.find({});
    }
}

