import { Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>) { }

    async getUserById(userId: string): Promise<User> {
        return this.userRepository.findOneBy({ userId });
    }

    async getUserByEmail(email: string): Promise<User> {
        return this.userRepository.findOneBy({ email });
    }


    async createUser(email: string, password: string, name: string): Promise<User> {
        return this.userRepository.create({
            email: email,
            password: password,
            name: name,
        })
    }


    async getUsers(): Promise<User[]> {
        return this.userRepository.find({});
    }
}

