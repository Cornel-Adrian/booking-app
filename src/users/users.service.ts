import { Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    User: any;

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly entityManager: EntityManager) { }

    async getUserById(userId: string): Promise<User> {
        return this.entityManager.findOneBy(User, { userId: userId })
    }

    async getUserByEmail(email: string): Promise<User | null> {

        const user = await this.userRepository.findOneBy({ email: email });
        console.log("The user is:", user);
        return user;

    }


    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const user = new User(createUserDto);
        user.role = 'user';
        return await this.entityManager.save(user)
    }

}

