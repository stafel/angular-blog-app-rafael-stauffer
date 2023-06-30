import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { BlogComponentComponent } from '../blog-component/blog-component.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [OverviewComponent, BlogComponentComponent],
  imports: [CommonModule, OverviewRoutingModule, MatProgressSpinnerModule],
})
export class OverviewModule {}
