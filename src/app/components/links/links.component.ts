import { Component } from '@angular/core';
import { LinksItem } from 'src/app/models/LinksItem';
import {animate, query, stagger, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
  animations: [
    trigger('linkAnimation', [
      transition(':enter', [
        query(':enter', style({ top: '-5px', opacity: 0 }), { optional: true }),
        query(':enter', stagger('40ms', [
          animate('200ms', style({ top: '0px', opacity: 1 }))
        ]), { optional: true })
      ])
    ])
  ]
})
export class LinksComponent {
  links: LinksItem[] = [
    new LinksItem("Academia Algebrae", "assets/pdf/faulhaber_academia_algebrae.pdf", "by Johann Faulhaber, 1631"),
    new LinksItem("Cheat Sheet", "assets/pdf/cs_cheat_sheet.pdf", "on Theoretical Computer Science"),
    new LinksItem("MathOverflow", "https://mathoverflow.net/q/297900", "discussion on A(m,r) coefficients, 2018"),
    new LinksItem("Patterns in Pascal's Triangle", "https://www.cut-the-knot.org/arithmetic/combinatorics/PascalTriangleProperties.shtml", "by Alexander Bogomolny"),
    new LinksItem("Studien Uber die Bernoullischen und Eulerschen Zahlen", "http://eudml.org/doc/148532", "by J. Worpitzky, 1883"),
    new LinksItem("MathOverflow", "https://mathoverflow.net/q/304130", "discussion on U(m,n,k) coefficients, 2018"),
    new LinksItem("arXiv:1011.0076", "https://arxiv.org/abs/1011.0076", "— The Pascal's identity"),
    new LinksItem("Sums of powers of positive integers and their recurrence relations", "assets/pdf/Sums_of_powers_of_positive_integers_and_their_recurrence_relations.pdf", ""),
    new LinksItem("J. L. Gross, Combinatorial Methods with Computer Applications, 2008. [Chapter 4]", "assets/pdf/CM4.pdf", ""),
    new LinksItem("How to write the sum of binomial coefficients in terms of polynomials in (n, k)", "https://math.stackexchange.com/questions/3091598", ""),
    new LinksItem("arXiv:math/9207222", "https://arxiv.org/abs/math/9207222", "— D. E. Knuth, Johann Faulhaber and sums of powers"),
    new LinksItem("Albert Tkaczyk", "https://www.linkedin.com/pulse/problem-triangle-developing-polynomial-function-fn-nm-albert-tkaczyk/", "— About the problem of a triangle developing the polynomial function f(n)= n^m, 2018.",
      new LinksItem("Google Drive", "https://drive.google.com/file/d/1DfP4ED3sNsQlzaNEHoXRxWhr-b3lkPxK/view", "")),
    new LinksItem("Albert Tkaczyk", "https://www.linkedin.com/pulse/problem-triangle-developing-polynomial-function-f-n-m-albert-tkaczyk/", "— On the problem of a triangle developing the polynomial function f (n) = n ^ m - continuation, 2018.",
      new LinksItem("Google Drive", "https://drive.google.com/file/d/1OYR7A7M4LIsRxjOEiuJtrUl8Xjw6C1bj/view", "")),
    new LinksItem("arXiv:2002.00550", "https://arxiv.org/abs/2002.00550", "— A two-sided Faulhaber-like formula involving Bernoulli polynomials"),
    new LinksItem("Mathoverflow", "https://mathoverflow.net/a/293396/113033", "— Discussion about generalization of sequence A287326 in OEIS, 2018")
  ];
}
