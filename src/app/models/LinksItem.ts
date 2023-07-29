

export class LinksItem {
  name: string;
  link: string;
  description: string;
  
  googleLink: LinksItem | null;

  constructor(name: string, link: string, description: string, googleLink: LinksItem | null = null) {
    this.name = name;
    this.link = link;
    this.description = description;
    this.googleLink = googleLink;
  }  
}