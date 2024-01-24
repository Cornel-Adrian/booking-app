import { Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Role } from 'src/roles/role.enum';

@Injectable()
export class UsersService {
    User: any;

    constructor(
        @InjectRepository(User)
        private entityManager: EntityManager) { }

    async getUserById(userId: string): Promise<User> {
        return this.entityManager.findOneBy(User, { userId: userId })
    }

    async getUserByEmail(email: string): Promise<User | null> {

        const user = await this.entityManager.findOneBy(User, { email: email });
        return user;

    }


    async createUser(email: string, password: string, name: string): Promise<User> {
        return this.entityManager.create(User, { email: email, password: password, name: name, role: Role.User })
    }

}

