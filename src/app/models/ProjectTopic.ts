import { ProjectLink } from "./ProjectLink"


export class ProjectTopic {
  name: string 
  projectLinkList: ProjectLink[]

  constructor(name: string, projectLinkList: ProjectLink[]) {
    this.name = name
    this.projectLinkList = projectLinkList
  }
}