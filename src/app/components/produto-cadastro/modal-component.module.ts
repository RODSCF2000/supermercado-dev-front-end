import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdModalComponent, NgbdModalContent } from './produto-cadastro.component';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbdModalComponent, NgbdModalContent],
  exports: [NgbdModalComponent],
  bootstrap: [NgbdModalComponent],
  entryComponents: [NgbdModalContent]
})
export class NgbdModalComponentModule {}
