import {Component} from '@angular/core';
import {MatActionList, MatListItem} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {FlexLayoutModule} from "@angular/flex-layout";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MatActionList,
    MatListItem,
    MatIcon,
    FlexLayoutModule,
    RouterLink,
    AsyncPipe,
    RouterLinkActive
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  constructor(private router: Router) {
    router.url
  }


}
