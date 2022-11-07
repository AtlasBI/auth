import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { SignModule } from './sign/sign.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: '127.0.0.1',
        port: 5432,
        username: 'atlas',
        password: '123',
        database: 'auth',
        entities: entities,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UserModule,
    SignModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
