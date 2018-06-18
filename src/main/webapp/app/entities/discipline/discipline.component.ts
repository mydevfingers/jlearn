import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Discipline } from './discipline.model';
import { DisciplineService } from './discipline.service';
import { Principal } from '../../shared';

@Component({
    selector: 'jhi-discipline',
    templateUrl: './discipline.component.html'
})
export class DisciplineComponent implements OnInit, OnDestroy {
disciplines: Discipline[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private disciplineService: DisciplineService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.disciplineService.query().subscribe(
            (res: HttpResponse<Discipline[]>) => {
                this.disciplines = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInDisciplines();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: Discipline) {
        return item.id;
    }
    registerChangeInDisciplines() {
        this.eventSubscriber = this.eventManager.subscribe('disciplineListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
