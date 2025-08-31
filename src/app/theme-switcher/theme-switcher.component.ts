import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent {
  isOpen = false;
  mode = 'light';
  primaryColor = '#4099ff';
  headerColor = '#4099ff';
  sidebarColor = '#4099ff';
  navHeaderColor = '#4099ff';
  colors = [
    '#fff', '#673ab7', '#3f51b5', '#1e88e5', '#2196f3', '#03a9f4', '#00bcd4', '#9c27b0',
    '#4caf50', '#2ed8b6', '#ffb64d', '#ff5370', '#263238', '#1976d2', '#388e3c', '#8bc34a'
  ];
  modes = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' }
  ];
  btnVisible = true;

  togglePanel() {
    this.isOpen = !this.isOpen;
    this.btnVisible = !this.isOpen;
  }

  hideBtn() {
    this.btnVisible = false;
    this.isOpen = false;
  }
  setMode(mode: string) {
    this.mode = mode;
    document.body.classList.toggle('dark-mode', mode === 'dark');
  }

  setColor(type: string, color: string) {
    if (type === 'primary') this.primaryColor = color;
    if (type === 'header') this.headerColor = color;
    if (type === 'sidebar') {
      this.sidebarColor = color;
      document.documentElement.style.setProperty('--sidebar-color', color);
      // Auto-contrast for sidebar text
      const isLight = this.isColorLight(color);
      document.documentElement.style.setProperty('--sidebar-text-color', isLight ? '#222' : '#fff');
      return;
    }
    if (type === 'navHeader') this.navHeaderColor = color;
    document.documentElement.style.setProperty(`--${type}-color`, color);
  }

  // Utility: check if color is light
  isColorLight(hex: string): boolean {
    hex = hex.replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(x => x + x).join('');
    const r = parseInt(hex.substr(0,2),16);
    const g = parseInt(hex.substr(2,2),16);
    const b = parseInt(hex.substr(4,2),16);
    // Perceived brightness formula
    return (r*0.299 + g*0.587 + b*0.114) > 186;
  }
}
