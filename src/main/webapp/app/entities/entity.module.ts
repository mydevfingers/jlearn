import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JlearningDisciplineModule } from './discipline/discipline.module';
import { JlearningProgramModule } from './program/program.module';
import { JlearningCourseModule } from './course/course.module';
import { JlearningLessonModule } from './lesson/lesson.module';
import { JlearningResourceModule } from './resource/resource.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JlearningDisciplineModule,
        JlearningProgramModule,
        JlearningCourseModule,
        JlearningLessonModule,
        JlearningResourceModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JlearningEntityModule {}
