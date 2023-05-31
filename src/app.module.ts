import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        database: configService.get('DB_NAME'),
        host: configService.get('DB_HOST', '127.0.0.1'),
        port: configService.get('DB_PORT', 3306),
        username: configService.get('DB_USER', 'root'),
        password: configService.get('DB_PASSWORD', 'root'),
        timezone: '+08:00',
        synchronize: true,
        autoLoadEntities: true,
      }),
    }),
    ProductModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
