import { trigger, transition, state, style, animate } from '@angular/animations';

export let fade = trigger('fade', [
    state('void', style({opacity:0})),
    transition(':enter, :leave', [
      animate(500)
    ])
  ]);

 export let slideToLeft = trigger('slideToLeft', [
    state('void', style({transform: 'translateX(25px)'})),
    transition(':enter, :leave', [
      animate(500)
    ])
  ]); 

  export let slideToRight = trigger('slideToRight', [
    state('void', style({transform: 'translateX(-25px)'})),
    transition(':enter, :leave', [
      animate(500)
    ])
  ]); 

  export let zoomOutMural = trigger('zoomOutMural', [
    state('void', style({maxHeight: '1080px'})),
    transition(':enter, :leave', [
      animate(500)
    ])
  ]); 