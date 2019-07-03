import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {AlgoliaService} from '../shared/algolia.service';
import { interval } from 'rxjs/internal/observable/interval';
import { startWith, switchMap } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../shared/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   title = 'engineer-ai';
   serviceRes = [];
    showModel: boolean = false;
    titleSearch: string;

  private serviceResObservable: Observable<any[]>;

  constructor(private algoliaService: AlgoliaService, private modalService: NgbModal){

  }

  ngOnInit() {
    interval(10000)
      .pipe(
        startWith(0),
        switchMap(() => this.algoliaService.getData())
      )
      .subscribe(res => {
        this.serviceRes = res.hits;
      });
  }

  openModel(row) {
    this.showModel = true;
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.data = JSON.stringify(row);
  }

  closeModel() {
    this.showModel = false;
  }
}
