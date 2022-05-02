import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { RegistryModule } from './controller/registry.module';
import { UserModule } from './controller/user.module';
import { HttpExceptionFilter } from './filter/exception.filter';
import { LocalDataBaseModule } from './local-data-base-users/local-db.module';

require('dotenv').config()
@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_REMOTE_STRING_CONNECTION),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb://'+process.env.DATABASE_LOCAL_USER+':'+process.env.DATABASE_LOCAL_PASSWORD+
        '@'+process.env.DATABASE_LOCAL_CONTAINER_CONECTION+':'+process.env.DATABASE_LOCAL_CONTAINER_PORT+
        '/'+process.env.DATABASE_LOCAL_NAME+'?authSource=admin',
        useNewUrlParser: true
      }),
      connectionName: process.env.DATABASE_LOCAL_CONNECTION_NAME
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
