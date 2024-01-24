import { Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from 'src/roles/role.enum';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>) { }

    async getUserById(userId: string): Promise<User> {
        return this.userRepository.findOneBy({ userId: userId });
    }

    async getUserByEmail(email: string): Promise<User> {
        console.warn("Email:", email);
        const user = await this.userRepository.findOneBy({
            email: email,
        });
        console.warn("User is:", user);
        return user;
    }


    async createUser(email: string, password: string, name: string): Promise<User> {
        console.log("here ??")
        return this.userRepository.create({
            email: email,
            password: password,
            name: name,
            role: Role.User,
        })
    }


    async getUsers(): Promise<User[]> {
        return this.userRepository.find({});
    }
}

