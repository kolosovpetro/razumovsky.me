import { Component } from '@angular/core';
import { animate, query, stagger, state, style, transition, trigger } from "@angular/animations";
import { AboutMeLink } from 'src/app/models/AboutMeLink';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [
    trigger('nicknameAnimation', [
      transition(':enter', [
        style({ opacity: 0}),
        animate('.5s 100ms', style({opacity: 1}))
      ])
    ]),
    trigger('avatarAnimation', [
      transition(':enter', [
        style({ opacity: 0}),
        animate('.5s 400ms', style({opacity: 1}))
      ])
    ]),
    trigger('bioAnimation', [
      transition(':enter', [
        style({ opacity: 0}),
        animate('.5s 700ms', style({opacity: 1}))
      ])
    ]),
    trigger('aboutMeLinkAnimation', [
      transition(':enter', [
        query(':enter', style({ top: '-15px', opacity: 0 }), { optional: true }),
        query(':enter', stagger('100ms', [
          animate('200ms 1s', style({ top: '0px', opacity: 1 }))
        ]), { optional: true })
      ])
    ])
  ]
})
export class AboutMeComponent {
  links = [
    new AboutMeLink("../../../assets/img/github.png", "https://github.com/kolosovpetro"),
    new AboutMeLink("../../../assets/img/google-scholar.png", "https://scholar.google.com/citations?user=MpDEhEUAAAAJ&hl=en"),
    new AboutMeLink("../../../assets/img/orcid.png", "https://orcid.org/0000-0002-6544-8880"),
    new AboutMeLink("../../../assets/img/telegram.png", "https://t.me/razumovsky_r"),
    new AboutMeLink("../../../assets/img/credly.png", "https://www.credly.com/users/petro-kolosov"),
  ]
}
