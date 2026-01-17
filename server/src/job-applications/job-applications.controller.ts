import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateJobApplicationDto } from 'src/dto/create-job-application.dto';
import { UpdateJobApplicationDto } from 'src/dto/update-job-application.dto';

@Controller('job-applications')
export class JobApplicationsController {
  @Post()
  @HttpCode(204)
  create(@Body() createJobApplicationDto: CreateJobApplicationDto) {
    return 'This action adds a new job application';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return 'This action returns the job application with id: ' + id;
  }

  @Get()
  findAll() {
    return 'This action returns all job applications';
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateJobApplicationDto: UpdateJobApplicationDto,
  ) {
    return `This action updates the job application with id: ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes the job application with id: ${id}`;
  }
}
