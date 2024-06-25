import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-givefeedback',
  standalone: true,
  templateUrl: './givefeedback.component.html',
  styleUrls: ['./givefeedback.component.scss']
})
export class GivefeedbackComponent implements AfterViewInit {

  @ViewChild('btn', { static: false }) btn!: ElementRef;
  @ViewChild('post', { static: false }) post!: ElementRef;
  @ViewChild('widget', { static: false }) widget!: ElementRef;
  @ViewChild('editBtn', { static: false }) editBtn!: ElementRef;

  ngAfterViewInit() {
    this.btn.nativeElement.onclick = () => {
      this.widget.nativeElement.style.display = 'none';
      this.post.nativeElement.style.display = 'block';
      this.editBtn.nativeElement.onclick = () => {
        this.widget.nativeElement.style.display = 'block';
        this.post.nativeElement.style.display = 'none';
      };
      return false;
    };
  }
}
