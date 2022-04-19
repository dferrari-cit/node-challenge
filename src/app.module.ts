import { Module } from '@nestjs/common';
import { UserModule } from './controller/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RegistryModule } from './controller/registry.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://node_challenge_devops:devops_123@cluster0.vlh0o.mongodb.net/resgistrysDatabase?retryWrites=true&w=majority'),
    UserModule,
    RegistryModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
