import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-activity-1',
  templateUrl: './activity-1.component.html',
  styleUrls: ['./activity-1.component.scss']
})
export class Activity1Component {
  title = signal('Activity 1');
}