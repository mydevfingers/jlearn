import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JlearningSharedModule } from '../../shared';
import {
    ResourceService,
    ResourcePopupService,
    ResourceComponent,
    ResourceDetailComponent,
    ResourceDialogComponent,
    ResourcePopupComponent,
    ResourceDeletePopupComponent,
    ResourceDeleteDialogComponent,
    resourceRoute,
    resourcePopupRoute,
} from './';

const ENTITY_STATES = [
    ...resourceRoute,
    ...resourcePopupRoute,
];

@NgModule({
    imports: [
        JlearningSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        ResourceComponent,
        ResourceDetailComponent,
        ResourceDialogComponent,
        ResourceDeleteDialogComponent,
        ResourcePopupComponent,
        ResourceDeletePopupComponent,
    ],
    entryComponents: [
        ResourceComponent,
        ResourceDialogComponent,
        ResourcePopupComponent,
        ResourceDeleteDialogComponent,
        ResourceDeletePopupComponent,
    ],
    providers: [
        ResourceService,
        ResourcePopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JlearningResourceModule {}
