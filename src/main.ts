import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  require('dotenv').config()

  const config = new DocumentBuilder()
    .setTitle('Coding Challenge API')
    .setDescription('Consulta a um  usuário GitHub')
    .setVersion('1.0.1')
    .setContact('Suport', 'https://docs.google.com/document/d/1p8uCCKS2vgpbgy5MAZ6pB9U7tns1NQjsiuZWu1yilrk/edit', 'fulano@mail.com')
    .setLicense('GPL Licence', 'http://www.gnu.org/licenses/gpl.html')
    .setExternalDoc('READ-ME', 'https://github.com/dferrari-cit/node-challenge/tree/TIME-DOS-MAIS-QUE-LEGAIS#readme')
    .addTag('gitHub-User')
    .addTag('Search-Registry')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.API_PORT);
}
bootstrap();
