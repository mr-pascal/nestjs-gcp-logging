# Nest.js GCP Logger


### How to use

```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggingModule } from '@pzwik/logging'; // <-- Import the module

@Module({
  imports: [LoggingModule.register({})], // <-- Initialize the module
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
```


```typescript
// main.ts
import { NestFactory } from '@nestjs/core';
import { LoggingService } from '@pzwik/logging'; // <-- Import here
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { 
    logger: new LoggingService() // <-- Instantiate here
  });
  await app.listen(3000);
}
bootstrap();
```

```typescript
import { Injectable, Logger } from '@nestjs/common'; // <-- Import Logger from Nest.js

@Injectable()
export class AppService {
  getHello(): string {
    Logger.error('Some Error happened!'); // <-- Calls the logger
    // {"severity":"ERROR","message":"Some Error happened!"}
    return 'Hello World!';
  }
}
````
