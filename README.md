# Nest.js GCP Logger



### Module Parameters

| Property              | Default | Description |
| ---                   | ---     | --- |
| `gcpErrorReporting`   | `false` | If set to `true` all error messages are recognized by GCP Error Reporting by wrapping the provided message in a stack trace |



### How to use

```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggingModule } from '@pzwik/nestjs-gcp-logger'; // <-- Import the module

@Module({
  imports: [
    LoggingModule.forRoot({ // <-- Initialize the module
      gcpErrorReporting: false // default is 'false'
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
```


```typescript
// main.ts
import { NestFactory } from '@nestjs/core';
import { LoggingService } from '@pzwik/nestjs-gcp-logger'; // <-- Import here
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.useLogger(app.get(LoggingService));

  await app.listen(3000);
}
bootstrap();
```

```typescript
import { Injectable, Logger } from '@nestjs/common'; // <-- Import Logger from Nest.js

@Injectable()
export class AppService {
  private readonly logger = new Logger('AppService');

  getHello(): string {
    this.logger.error('Some Error happened!'); // <-- Calls the logger
    // {"severity":"ERROR","message":"Some Error happened!"}
    return 'Hello World!';
  }
}
````
