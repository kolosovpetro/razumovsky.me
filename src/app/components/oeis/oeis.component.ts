import { Component } from '@angular/core';
import { OeisLink } from 'src/app/models/OeisLink';
import { OeisTopic } from 'src/app/models/OeisTopic';
import {animate, query, stagger, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-oeis',
  templateUrl: './oeis.component.html',
  styleUrls: ['./oeis.component.scss'],
  animations: [
    trigger('oeisLinkAnimation', [
      transition(':enter', [
        query(':enter', style({ transform: 'translateY(-5px)', opacity: 0 }), { optional: true }),
        query(':enter', stagger('40ms', [
          animate('200ms', style({ transform: 'translateY(0)', opacity: 1 }))
        ]), { optional: true })
      ])
    ])
  ]
})
export class OeisComponent {
  topics: OeisTopic[] = [
    new OeisTopic("Contributed", [
      new OeisLink("A306548", "https://oeis.org/A306548", "— Table of the convolutions of positive integer powers"),
      new OeisLink("A287326", "https://oeis.org/A287326", "— Numerical triangle, row sums give the cubes"),
      new OeisLink("A300656", "https://oeis.org/A300656", "— Numerical triangle, row sums give fifth powers"),
      new OeisLink("A300785", "https://oeis.org/A300785", "— Numerical triangle, row sums give seventh powers"),
      new OeisLink("A302971", "https://oeis.org/A302971", "— Numerators of the coefficient A(m, r) from",
        new OeisLink("arXiv:1603.02468", "https://arxiv.org/abs/1603.02468", "")),
      new OeisLink("A304042", "https://oeis.org/A304042", "— Denominators of the coefficient A(m, r) from",
        new OeisLink("arXiv:1603.02468", "https://arxiv.org/abs/1603.02468", "")),
      new OeisLink("A303675", "https://oeis.org/A303675", "— Coefficients involved in central factorial numbers of the Faulhaber's formula"),
      new OeisLink("A320047", "https://oeis.org/A320047", "— The coefficients U(m, l, k), m = 1 defined by the identity"),
      new OeisLink("A316349", "https://oeis.org/A316349", "— The coefficients U(m, l, k), m = 2 defined by the identity"),
      new OeisLink("A316387", "https://oeis.org/A316387", "— The coefficients U(m, l, k), m = 3 defined by the identity"),
    ]),
    new OeisTopic("Edited", [
      new OeisLink("A007318", "https://oeis.org/A007318", "— Pascal's triangle read by rows"),
      new OeisLink("A003215", "https://oeis.org/A003215", "— Hex (or centered hexagonal) numbers"),
      new OeisLink("A000584", "https://oeis.org/A000584", "— Fifth powers"),
      new OeisLink("A002457", "https://oeis.org/A002457", "— Sequence dedined by a(n) = (2n+1)!/n!^2"),
      new OeisLink("A001015", "https://oeis.org/A001015", "— Seventh powers"),
      new OeisLink("A013609", "https://oeis.org/A013609", "— Triangle of coefficients in expansion of (1+2*x)^n"),
      new OeisLink("A001093", "https://oeis.org/A001093", "— Sequence dedined by a(n) = n^3 + 1"),
      new OeisLink("A028896", "https://oeis.org/A028896", "— 6 times triangular numbers: a(n) = 3*n*(n+1)"),
      new OeisLink("A013610", "https://oeis.org/A013610", "— Triangle of coefficients in expansion of (1+3*x)^n"),
      new OeisLink("A033455", "https://oeis.org/A033455", "— Convolution of nonzero squares A000290 with themselves"),
      new OeisLink("A227776", "https://oeis.org/A227776", "— Sequence dedined by a(n) = 6*n^2 + 1"),
      new OeisLink("A258806", "https://oeis.org/A258806", "— Sequence dedined by a(n) = n^7 + 1"),
      new OeisLink("A275709", "https://oeis.org/A275709", "— Sequence dedined by a(n) = 2*n^3 + 3*n^2"),
    ])
  ];
}
