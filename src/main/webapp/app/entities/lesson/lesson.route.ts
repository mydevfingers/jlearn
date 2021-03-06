import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { LessonComponent } from './lesson.component';
import { LessonDetailComponent } from './lesson-detail.component';
import { LessonPopupComponent } from './lesson-dialog.component';
import { LessonDeletePopupComponent } from './lesson-delete-dialog.component';

export const lessonRoute: Routes = [
    {
        path: 'lesson',
        component: LessonComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jlearningApp.lesson.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'lesson/:id',
        component: LessonDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jlearningApp.lesson.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const lessonPopupRoute: Routes = [
    {
        path: 'lesson-new',
        component: LessonPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jlearningApp.lesson.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'lesson/:id/edit',
        component: LessonPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jlearningApp.lesson.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'lesson/:id/delete',
        component: LessonDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jlearningApp.lesson.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
