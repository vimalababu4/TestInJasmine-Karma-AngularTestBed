import { CommonModule } from '@angular/common';
import { Component, Directive, HostBinding, HostListener } from '@angular/core';

/* 
@Component({
  selector: 'app-directives-testing',
 // standalone: true,
  imports: [CommonModule],
  templateUrl:'./directives-testing.component.html',
  styleUrl: './directives-testing.component.css'
}) */


    @Directive({
      selector: '.mytag' //'[hoverfocus]'
    })
    export class DirectivesTestingComponent {
    
      @HostBinding("style.background-color") backgroundColor: string | undefined;
    
      @HostListener('mouseover') onHover() {
        this.backgroundColor = 'green';
      }
    
      @HostListener('mouseout') onLeave() {
        this.backgroundColor = 'inherit';
      }
    }





