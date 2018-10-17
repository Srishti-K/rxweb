import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HighlightModule } from 'ngx-highlightjs';
import { ClipboardModule } from 'ngx-clipboard';
import { LESS_THAN_EQUAL_TO_ROUTING } from './lessThanEqualTo.routing';
import { LessThanEqualToComponent } from './lessThanEqualTo.component';
import { LessThanEqualToExtendedModule } from 'src/assets/examples/reactive-form-validators/decorators/lessThanEqualTo/lessThanEqualTo.module';
import { DisqusSharedModule } from "src/app/components/shared/disqus/disqus-shared.module";
import { RightSideBarSharedModule } from "src/app/components/shared/right-sidebar/right-sidebar-shared.module";
import { TitleCasePipe } from "@angular/common";

@NgModule({
  imports: [
    LESS_THAN_EQUAL_TO_ROUTING,
    CommonModule, FormsModule, ReactiveFormsModule, HighlightModule, LessThanEqualToExtendedModule, ClipboardModule,DisqusSharedModule,RightSideBarSharedModule],
  declarations: [LessThanEqualToComponent],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers:[TitleCasePipe]
})
export class LessThanEqualToDecoratorsModule { }
