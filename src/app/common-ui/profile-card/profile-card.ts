import {Component, Input} from '@angular/core';
import {Profile} from '../../data/interfaces/profile.interface';
import {CommonModule} from '@angular/common';
import {ImgUrlPipe} from '../../helpers/pipes/img-url-pipe';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonModule, ImgUrlPipe],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.scss'
})
export class ProfileCard {
  @Input() profile!: Profile;
}
