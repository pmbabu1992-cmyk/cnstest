import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-device-configuration',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './device-configuration.component.html',
  styleUrls: ['./device-configuration.component.scss']
})
export class DeviceConfigurationComponent {
  devices = [
    {
      id: 'THX001',
      name: 'Zone A - Production Floor',
      type: 'Temperature Sensor',
      status: 'online',
      battery: 85,
      signal: 'Strong',
      signalStrength: 95,
      enabled: true,
      temperature: 28.5,
      lastUpdate: '2 min ago',
      firmware: 'v2.1.3'
    },
    {
      id: 'THX002',
      name: 'Zone B - Storage Area',
      type: 'Temperature Sensor',
      status: 'online',
      battery: 92,
      signal: 'Strong',
      signalStrength: 88,
      enabled: true,
      temperature: 22.1,
      lastUpdate: '1 min ago',
      firmware: 'v2.1.3'
    },
    {
      id: 'THX003',
      name: 'Zone C - Server Room',
      type: 'Temperature Sensor',
      status: 'online',
      battery: 78,
      signal: 'Medium',
      signalStrength: 65,
      enabled: true,
      temperature: 19.8,
      lastUpdate: '3 min ago',
      firmware: 'v2.1.2'
    },
    {
      id: 'THX004',
      name: 'Zone D - Laboratory',
      type: 'Temperature Sensor',
      status: 'warning',
      battery: 45,
      signal: 'Weak',
      signalStrength: 35,
      enabled: false,
      temperature: 24.7,
      lastUpdate: '15 min ago',
      firmware: 'v2.0.9'
    }
  ];

  getStatusIcon(status: string): string {
    switch (status) {
      case 'online': return 'check_circle';
      case 'warning': return 'warning';
      case 'offline': return 'wifi_off';
      default: return 'check_circle';
    }
  }

  getBatteryColor(battery: number): string {
    if (battery > 60) return 'success';
    if (battery > 30) return 'warning';
    return 'error';
  }

  get avgBattery(): number {
    if (!this.devices.length) return 0;
    return Math.round(this.devices.reduce((sum, d) => sum + d.battery, 0) / this.devices.length);
  }

  get onlineCount(): number {
    return this.devices.filter(d => d.status === 'online').length;
  }

  get warningCount(): number {
    return this.devices.filter(d => d.status === 'warning').length;
  }
}
