import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { BlogComponentComponent } from '../blog-component/blog-component.component';

@NgModule({
  declarations: [OverviewComponent, BlogComponentComponent],
  imports: [CommonModule, OverviewRoutingModule],
})
export class OverviewModule {}
