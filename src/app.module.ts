import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { RegistryModule } from './controller/registry.module';
import { UserModule } from './controller/user.module';
import { HttpExceptionFilter } from './filter/exception.filter';
import { LocalDataBaseModule } from './local-data-base-users/local-db.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://node_challenge_devops:devops_123@cluster0.vlh0o.mongodb.net/resgistrysDatabase?retryWrites=true&w=majority'),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb://admin:secret@172.17.0.1:27017/registry?authSource=admin',
        useNewUrlParser: true
      }),
      connectionName: 'registryUsers'
    }),
    UserModule,
    RegistryModule,
    LocalDataBaseModule,
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
