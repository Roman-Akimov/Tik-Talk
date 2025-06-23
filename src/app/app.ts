import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProfileCard} from './common-ui/profile-card/profile-card';
import {Profile} from './data/interfaces/profile.interface';
import {CommonModule} from '@angular/common';
import { ProfileService } from './data/services/profile'; // сервис

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, ProfileCard],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  profileService = inject(ProfileService);
  profiles: Profile[] = [];

  constructor() {
    this.profileService.getTestAccounts()
      .subscribe(val => {
        this.profiles = val;
      });
  }
  protected title = 'tik-talk';
}
