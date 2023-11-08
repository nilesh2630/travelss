// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-headings',
//   templateUrl: './headings.component.html',
//   styleUrls: ['./headings.component.css']
// })
// export class HeadingsComponent {

// }


import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-headings',
  templateUrl: './headings.component.html',
  styleUrls: ['./headings.component.css']
})
export class HeadingsComponent implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.animateText();
  }

  animateText() {
    const titleElement = this.el.nativeElement.querySelector('.titlep');

   let name="Discover."
   let index=1;

   const typeWriter=()=>{
    let newtitle=name.slice(0,index);
    titleElement.innerText=newtitle;
    index>name.length?index=1: index++;
    setTimeout(()=>typeWriter(),600);

   }
   typeWriter();


    // if (titleElement) {
    //   const text = titleElement.innerText;
    //   titleElement.innerText = '';

    //   let index = 0;
    //   const interval = 100; // Adjust the animation speed

    //   function typeText() {
    //     if (index < text.length) {
    //       titleElement.innerText += text.charAt(index);
    //       index++;
    //       setInterval(typeText, 1000);
    //     }
    //     else{
    //       titleElement.innerText="";
    //       index=0;
    //       setTimeout(typeText, 1000);
    //     }
    //   }

    //   typeText();
    // }

  }
}
