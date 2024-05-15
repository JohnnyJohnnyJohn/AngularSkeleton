import {Component, OnInit} from '@angular/core';
import {user$} from "../../../auth/state/auth.store";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  user$ = user$;

  ngOnInit(): void {
    user$.subscribe(user => {

    })
  }
}
