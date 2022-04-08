import { Module } from '@nestjs/common';
import { UserModule } from './controller/user.module';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
