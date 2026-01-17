import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobApplicationsController } from './job-applications/job-applications.controller';

@Module({
  imports: [],
  controllers: [AppController, JobApplicationsController],
  providers: [AppService],
})
export class AppModule {}
