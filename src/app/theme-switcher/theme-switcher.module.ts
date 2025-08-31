import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeSwitcherComponent } from './theme-switcher.component';

@NgModule({
  declarations: [ThemeSwitcherComponent],
  imports: [CommonModule, FormsModule],
  exports: [ThemeSwitcherComponent]
})
export class ThemeSwitcherModule {}
