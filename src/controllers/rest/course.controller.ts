import { Controller, Get, Logger, Param, ParseUUIDPipe, Req, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { CourseService } from 'src/service/course.service';
import { CourseDTO } from 'src/service/dto/course.dto';
import { LoggingInterceptor } from 'src/shared/interceptors/logging.interceptor';
import { HeaderUtil } from 'src/shared/utils/header-util';

import { Page, PageRequest } from '../../domain/base/pagination.entity';

@Controller('courses')
@UseInterceptors(LoggingInterceptor)
@ApiBearerAuth()
@ApiTags('course-resource')
export class CourseController {
    logger = new Logger('CourseController');

    constructor(private readonly courseService: CourseService) { }

    @Get('/')
    @ApiOperation({ description: 'Get the list of courses' })
    @ApiResponse({
        status: 200,
        description: 'List all courses',
        type: CourseDTO,
    })
    async getAllCourses(@Req() req: Request): Promise<CourseDTO[]> {
        const sortField = req.query.sort;
        const pageRequest: PageRequest = new PageRequest(req.query.page, req.query.size, sortField);
        const [results, count] = await this.courseService.findAndCount({
            skip: +pageRequest.page * pageRequest.size,
            take: +pageRequest.size,
            order: pageRequest.sort.asOrder(),
        });
        HeaderUtil.addPaginationHeaders(req.res, new Page(results, count, pageRequest));
        return results;
    }

    @Get('/:id')
    @ApiOperation({ description: 'Get the list of courses' })
    @ApiResponse({
        status: 200,
        description: 'get CourseName By Id',
        type: CourseDTO,
    })
    async getCourseById(@Param('id', ParseUUIDPipe) id: string): Promise<{ givenName: string; }> {
        return this.courseService.findById(id);
    }

}
