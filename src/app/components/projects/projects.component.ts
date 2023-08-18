import { Component, OnInit } from '@angular/core';
import { ProjectLink } from 'src/app/models/ProjectLink';
import { ProjectTopic } from 'src/app/models/ProjectTopic';
import {animate, query, stagger, state, style, transition, trigger} from "@angular/animations";
import { Meta, Title } from '@angular/platform-browser';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('projectLinkAnimation', [
      transition(':enter', [
        query(':enter', style({ top: '-5px', opacity: 0 }), { optional: true }),
        query(':enter', stagger('40ms', [
          animate('200ms', style({ top: '0px', opacity: 1 }))
        ]), { optional: true })
      ])
    ])
  ]
})
export class ProjectsComponent {
  constructor(titleService: Title, metaService: Meta, configService: ConfigService) {
    const url = configService.getConfig()?.url;

    titleService.setTitle("@razumovsky_r (Petro Kolosov) -- Projects");
    metaService.updateTag({property: "og:type", content: "profile"});
    metaService.updateTag({property: "og:title", content: "Projects of @razumovsky_r (Petro Kolosov)"});
    metaService.updateTag({property: "og:description", content: "Azure, dotnet, devops projects done by @razumovsky_r (Petro Kolosov)"});
    metaService.updateTag({property: "og:url", content: `${url}`});
    metaService.updateTag({property: "og:image", content: `${url}/assets/img/razumovsky_site_card.png`});
  }

  public topics: ProjectTopic[] = [
    new ProjectTopic("Bachelor project", [
      new ProjectLink("Mango Messenger API", "https://github.com/MangoInstantMessenger/MangoMessengerAPI"),
      new ProjectLink("Bachelor Thesis", "https://github.com/MangoInstantMessenger/MangoMessengerBachelorThesis")
    ]),
    new ProjectTopic("Azure", [
      new ProjectLink("Roadmap.AZ204", "https://github.com/kolosovpetro/Roadmap.AZ204"),
      new ProjectLink("ACR Practice", "https://github.com/kolosovpetro/ACRPractice.AZ204"),
      new ProjectLink("ServiceBus Topics", "https://github.com/kolosovpetro/ServiceBusTopics.AZ204"),
      new ProjectLink("AzureAD Auth", "https://github.com/kolosovpetro/QuickAndSimpleApiAuth"),
      new ProjectLink("OIDC API", "https://github.com/kolosovpetro/OpenIDConnect.AZ204.API"),
      new ProjectLink("EventGrid Demo", "https://github.com/kolosovpetro/EventGridDemo.AZ204"),
      new ProjectLink("Storage SDK", "https://github.com/kolosovpetro/AzureStorageSDKTraining.AZ204"),
      new ProjectLink("CosmosDB Demo", "https://github.com/kolosovpetro/CosmosDBDemo.AZ204"),
      new ProjectLink("Storage Queue Demo", "https://github.com/kolosovpetro/StorageQueue.AZ204"),
      new ProjectLink("Monitoring & Logging", "https://github.com/kolosovpetro/MonitoringAndLogging.AZ204"),
      new ProjectLink("AppService Logging", "https://github.com/kolosovpetro/AppServiceLogging.AZ204"),
    ]),
    new ProjectTopic("DevOps", [
      new ProjectLink("Terraform & GHA", "https://github.com/kolosovpetro/terraform-gameplay"),
      new ProjectLink("Deploy to Ubuntu VM", "https://github.com/kolosovpetro/AzureUbuntuVMDeploy"),
      new ProjectLink("SonarCloud & GHA", "https://github.com/kolosovpetro/SonarCloudViaGithubActions"),
      new ProjectLink("Azure Pipelines KeyVault", "https://github.com/kolosovpetro/AzurePipelinesKeyVault"),
      new ProjectLink("NET Framework IIS Deploy", "https://github.com/kolosovpetro/NetFrameworkDeployIIS"),
      new ProjectLink("Release Flow Proposal", "assets/pdf/ReleaseFlowProposal.pdf"),
      new ProjectLink("AzDo Best Practices", "assets/pdf/AzurePipelinesBestPractices.pdf"),
    ]),
    new ProjectTopic("Algorithms", [
      new ProjectLink("Monty Hall Problem", "https://github.com/kolosovpetro/MontyHallProblem"),
      new ProjectLink("Dynamic Coin Change", "https://github.com/TheAlgorithms/C-Sharp/pull/280"),
      new ProjectLink("Dijkstra Algorithm", "https://github.com/TheAlgorithms/C-Sharp/pull/278"),
      new ProjectLink("Enigma Machine", "https://github.com/kolosovpetro/Enigma"),
      new ProjectLink("Knapsack Problem", "https://github.com/kolosovpetro/KnapsackProblem"),
      new ProjectLink("Classical Algorithms", "https://github.com/kolosovpetro/Classical-Algorithms"),
      new ProjectLink("Sort Algorithms", "https://github.com/kolosovpetro/Sort-Algorithms"),
      new ProjectLink("Search Algorithms", "https://github.com/kolosovpetro/Search-Algorithms"),
      new ProjectLink("RPN Calculator", "https://github.com/kolosovpetro/RpnCalculator"),
      new ProjectLink("Bit Converter", "https://github.com/kolosovpetro/Bit-Converter"),
    ]),
    new ProjectTopic("Data structures & Patterns", [
      new ProjectLink("Linear Structures", "https://github.com/kolosovpetro/Data-Structures"),
      new ProjectLink("Trees", "https://github.com/kolosovpetro/Tree-Algorithms"),
      new ProjectLink("Graphs", "https://github.com/kolosovpetro/Graph-Algorithms"),
      new ProjectLink("Graphs via Matrix", "https://github.com/TheAlgorithms/C-Sharp/pull/233"),
      new ProjectLink("Design Patterns", "https://github.com/kolosovpetro/Design-Patterns"),
    ]),
    new ProjectTopic("Web Backend", [
      new ProjectLink("CQRS API", "https://github.com/kolosovpetro/CQRS-Api"),
      new ProjectLink("Blockchain API", "https://github.com/kolosovpetro/Blockchain-Api"),
      new ProjectLink("Gadget Store MVC", "https://github.com/kolosovpetro/Gadget-Store-MVC"),
      new ProjectLink("Bank MVC Test Task", "https://github.com/kolosovpetro/BankMVC"),
      new ProjectLink("REST API", "https://github.com/kolosovpetro/Rest-Api"),
    ]),
    new ProjectTopic("C#", [
      new ProjectLink("Delegates in LINQ", "https://github.com/kolosovpetro/DelegatesInLINQ"),
      new ProjectLink("Covariant Factory", "https://github.com/kolosovpetro/CovariantFactory"),
      new ProjectLink("Contravariant List", "https://github.com/kolosovpetro/ContravariantList"),
      new ProjectLink("IoC Container", "https://github.com/kolosovpetro/IoC-Container"),
      new ProjectLink("Computer Science", "https://github.com/kolosovpetro/Computer-Science"),
    ])
  ];
}
