

export class OeisLink {
  name: string;
  link: string;
  description: string;

  arxivLink: OeisLink | null = null;

  constructor(name: string, link: string, description: string, arxivLink: OeisLink | null = null) {
    this.name = name;
    this.link = link;
    this.description = description;
    this.arxivLink = arxivLink;
  }
}