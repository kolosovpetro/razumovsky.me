import { MathLink } from "./MathLink"


export class MathTopic {
  name: string 
  mathLinkList: MathLink[]

  constructor(name: string, mathLinkList: MathLink[]) {
    this.name = name
    this.mathLinkList = mathLinkList
  }
}