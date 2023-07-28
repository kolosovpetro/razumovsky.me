import { QuoteItem } from "./QuoteItem";

export class QuoteTopic {
  name: string;
  quoteList: QuoteItem[];

  constructor(name: string, quoteList: QuoteItem[]) {
    this.name = name;
    this.quoteList = quoteList;
  }
}