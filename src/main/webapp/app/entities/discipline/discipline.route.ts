import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { DisciplineComponent } from './discipline.component';
import { DisciplineDetailComponent } from './discipline-detail.component';
import { DisciplinePopupComponent } from './discipline-dialog.component';
import { DisciplineDeletePopupComponent } from './discipline-delete-dialog.component';

export const disciplineRoute: Routes = [
    {
        path: 'discipline',
        component: DisciplineComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jlearningApp.discipline.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'discipline/:id',
        component: DisciplineDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jlearningApp.discipline.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const disciplinePopupRoute: Routes = [
    {
        path: 'discipline-new',
        component: DisciplinePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jlearningApp.discipline.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'discipline/:id/edit',
        component: DisciplinePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jlearningApp.discipline.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'discipline/:id/delete',
        component: DisciplineDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jlearningApp.discipline.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
