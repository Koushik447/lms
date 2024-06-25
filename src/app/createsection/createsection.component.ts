import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

export interface SectionElement {
  name: string;
  symbol: string;
}
const SECTION_DATA: SectionElement[] = [
  { name: 'Section 1', symbol: 'hi' },
  { name: 'Section 2', symbol: 'edit' },
  { name: 'Section 3', symbol: 'edit' },
  { name: 'Section 4', symbol: 'edit' },
  { name: 'Section 5', symbol: 'edit' },
  { name: 'Section 6', symbol: 'edit' },
  { name: 'Section 7', symbol: 'edit' },
  { name: 'Section 8', symbol: 'edit' },
  { name: 'Section 9', symbol: 'edit' },
  { name: 'Section 10', symbol: 'edit' },
];

@Component({
  selector: 'app-createsection',
  standalone: true,
  imports: [RouterModule, MatListModule, MatIconModule, MatTableModule],
  templateUrl: './createsection.component.html',
  styleUrls: ['./createsection.component.scss']
})
export class CreatesectionComponent {
  displayedColumns: string[] = ['name', 'symbol'];
  dataSource = SECTION_DATA;

  editSection(section: SectionElement) {
    // Add logic to handle the edit action, e.g., open a dialog to edit the section name
    console.log('Edit section:', section.name);
  }
}
