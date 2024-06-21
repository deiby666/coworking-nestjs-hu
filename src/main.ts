import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors()
  
  const options = new DocumentBuilder()
    .setTitle('Coworking API')
    .setDescription('API para sistema de reserva de espacios de coworking')
    .setVersion('1.0')
    .addServer('http://localhost:3000', 'coworking')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/', app, document);
  
  await app.listen(3000);
}
bootstrap();
