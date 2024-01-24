import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from "@nestjs/typeorm";


@Injectable()
export class PostgresConfigService implements TypeOrmOptionsFactory {
    constructor(private configService: ConfigService)  {}


    createTypeOrmOptions(): TypeOrmModuleOptions {
        return{
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'admin',
            database: 'booking-app',
            entities: ['dist/**/**/*.entity{.ts,.js}'],
            synchronize: false,
            autoLoadEntities: true,
        }
    }
}