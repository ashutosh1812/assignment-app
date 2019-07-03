import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {AlgoliaService} from '../shared/algolia.service';
import { ModalComponent } from '../shared/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../shared/pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [AlgoliaService],
  entryComponents: [ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
