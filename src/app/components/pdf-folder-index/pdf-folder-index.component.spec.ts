import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfFolderIndexComponent } from './pdf-folder-index.component';

describe('PdfFolderIndexComponent', () => {
  let component: PdfFolderIndexComponent;
  let fixture: ComponentFixture<PdfFolderIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfFolderIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfFolderIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
