import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'stream-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'broadcasting_portals';
  name = 'Yash';

  constructor(private router: Router) { }

}
