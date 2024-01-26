import { NestApplication, NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder, OpenAPIObject } from "@nestjs/swagger";
async function bootstrap() {
  const app: NestApplication = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("API Docs")
    .setDescription("API Documentation for default routes in application")
    .setVersion("1.0")
    .build();

  const document: OpenAPIObject = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document);

  app.enableCors({
    origin: "*",
    methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE"],
  });

  await app.listen(3000);
}
bootstrap();
