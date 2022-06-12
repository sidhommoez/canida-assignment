import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesModule } from 'src/module/courses.module';
import { HealthModule } from 'src/module/health-check.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

console.log(__dirname);
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule, CoursesModule, HealthModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: "postgres",
        url: configService.get<string>("DATABASE_URL"),
        synchronize: true,
        autoLoadEntities: true,
        // i prefer to implement this section in another way so i can switch between dev/prod env
        entities: [__dirname + '/domain/*.entity{.ts,.js}'],
        migrations: ["dist/migrations/*{.ts,.js}"],
        migrationsTableName: "migrations_typeorm",
        migrationsRun: true,
        cli: {
          migrationsDir: 'src/migrations',
        },
        logging: true,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
