import { Component } from '@angular/core';
import { QuoteItem } from 'src/app/models/QuoteItem';
import { QuoteTopic } from 'src/app/models/QuoteTopic';
import { animate, query, stagger, state, style, transition, trigger } from "@angular/animations";
import { Meta, Title } from '@angular/platform-browser';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
  animations: [
    trigger('quoteItemAnimation', [
      transition(':enter', [
        query(':enter', style({ top: '-5px', opacity: 0 }), { optional: true }),
        query(':enter', stagger('40ms', [
          animate('200ms', style({ top: '0px', opacity: 1 }))
        ]), { optional: true })
      ])
    ])
  ]
})
export class QuotesComponent {
  constructor(titleService: Title, metaService: Meta, configService: ConfigService) {
    const url = configService.getConfig()?.url;

    titleService.setTitle('@razumovsky_r (Petro Kolosov) -- Quotes');
    metaService.updateTag({property: 'og:type', content: 'profile'});
    metaService.updateTag({property: "og:title", content: "Quotes that inspire me"});
    metaService.updateTag({property: "og:description", content: "Quotes that inspire me"});
    metaService.updateTag({property: "og:url", content: `${url}/quotes/`});
    metaService.updateTag({property: "og:image", content: `${url}/assets/img/razumovsky_site_card.png`});
  }

  topics: QuoteTopic[] = [
    new QuoteTopic("Favourite quotes that inspire me", [
      new QuoteItem('"I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times." — Bruce Lee.'),
      new QuoteItem('"Mathematics is the language where lie does not exist."'),
      new QuoteItem('"Chaos is the highest measure of order."')
    ])
  ]
}