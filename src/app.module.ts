import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { UserModule } from './controller/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RegistryModule } from './controller/registry.module';
import { HttpExceptionFilter } from './filter/exception.filter';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://node_challenge_devops:devops_123@cluster0.vlh0o.mongodb.net/resgistrysDatabase?retryWrites=true&w=majority'),
    UserModule,
    RegistryModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter
    }
  ],
})
export class AppModule { }
