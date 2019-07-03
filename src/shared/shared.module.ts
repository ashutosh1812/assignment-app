import { NgModule, ModuleWithProviders } from '@angular/core';
import { AlgoliaService } from './algolia.service';
import { FilterPipe } from './pipes/filter.pipe';
import { ModalComponent } from './modal/modal.component';


@NgModule({
    declarations:[
        FilterPipe,
        ModalComponent
    ],
    exports:[
        FilterPipe,
        ModalComponent
    ],
    entryComponents: [ModalComponent],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
      return {
        ngModule: SharedModule,
        providers: [ AlgoliaService,
         ]
      };
    }
  }