import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPdfJsonItem } from "../../models/interfaces/IPdfJsonItem";

@Component({
  selector: 'app-pdf-folder-index',
  templateUrl: './pdf-folder-index.component.html',
  styleUrls: ['./pdf-folder-index.component.scss']
})
export class PdfFolderIndexComponent implements OnInit {
  public pdfJsonItems: IPdfJsonItem[] = [];

  constructor(private httpClient: HttpClient) { };

  ngOnInit(): void {
    this.httpClient.get<IPdfJsonItem[]>("../../../assets/pdf/DirectoryList.json")
      .subscribe({
        next: (data) => {
          this.pdfJsonItems = data;
        }
      })
  }
}
