import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from 'src/controllers/rest/health-check.controllers';

@Module({
    imports: [TerminusModule, HttpModule],
    controllers: [HealthController],
})
export class HealthModule { }