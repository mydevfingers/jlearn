import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';

import {
    JlearningSharedLibsModule,
    JlearningSharedCommonModule,
    CSRFService,
    AuthServerProvider,
    AccountService,
    UserService,
    StateStorageService,
    LoginService,
    LoginModalService,
    JhiLoginModalComponent,
    Principal,
    HasAnyAuthorityDirective,
} from './';

@NgModule({
    imports: [
        JlearningSharedLibsModule,
        JlearningSharedCommonModule
    ],
    declarations: [
        JhiLoginModalComponent,
        HasAnyAuthorityDirective
    ],
    providers: [
        LoginService,
        LoginModalService,
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        AuthServerProvider,
        UserService,
        DatePipe
    ],
    entryComponents: [JhiLoginModalComponent],
    exports: [
        JlearningSharedCommonModule,
        JhiLoginModalComponent,
        HasAnyAuthorityDirective,
        DatePipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class JlearningSharedModule {}
