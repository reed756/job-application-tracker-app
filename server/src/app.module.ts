import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobApplicationsController } from './job-application/job-application.controller';
import { UserController } from './user/user.controller';

@Module({
  imports: [],
  controllers: [AppController, JobApplicationsController, UserController],
  providers: [AppService],
})
export class AppModule {}
