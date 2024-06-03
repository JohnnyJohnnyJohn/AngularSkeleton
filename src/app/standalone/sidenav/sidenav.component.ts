import { Component } from '@angular/core';
import {MatActionList, MatListItem} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {FlexLayoutModule} from "@angular/flex-layout";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MatActionList,
    MatListItem,
    MatIcon,
    FlexLayoutModule,
    RouterLink
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {


}
