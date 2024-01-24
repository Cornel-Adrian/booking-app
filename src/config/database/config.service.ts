import { Injectable } from "@nestjs/common";
import { ConfigService, ConfigModule } from "@nestjs/config";
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from "@nestjs/typeorm";


@Injectable()
export class PostgresConfigService implements TypeOrmOptionsFactory {
    constructor(private configService: ConfigService) { }


    createTypeOrmOptions(): TypeOrmModuleOptions {
        const dbHost = this.configService.get<string>('database.host');
        const dbPort = this.configService.get<any>('database.port');
        const dbUsername = this.configService.get<string>('database.username');
        const dbPassword = this.configService.get<string>('database.password');
        const dbDatabase = this.configService.get<any>('database.database');

        return {
            type: 'postgres',
            host: dbHost,
            port: dbPort,
            username: dbUsername,
            password: dbPassword,
            database: dbDatabase,
            entities: ['dist/**/**/*.entity{.ts,.js}'],
            synchronize: true,
            autoLoadEntities: true,
            logging: 'all',
        }
    }
}