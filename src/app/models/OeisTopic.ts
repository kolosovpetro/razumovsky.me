import { OeisLink } from "./OeisLink"


export class OeisTopic {
  name: string 
  oeisLinkList: OeisLink[]

  constructor(name: string, oeisLinkList: OeisLink[]) {
    this.name = name
    this.oeisLinkList = oeisLinkList
  }
}