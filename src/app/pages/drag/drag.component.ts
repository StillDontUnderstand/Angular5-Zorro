import { Component } from '@angular/core'

@Component({
    templateUrl:'./drag.html',
    styles:[`
      .drag-container>div{
        margin:30px 240px;
        padding:20px;
        border:1px solid #ccc;
        border-radius:5px;
      }
      .dnd-drag-start {
        -moz-transform:scale(0.8);
        -webkit-transform:scale(0.8);
        transform:scale(0.8);
        opacity:0.7;
        border: 2px dashed #000;
    }
    
    .dnd-drag-enter {
        opacity:0.7;
        border: 2px dashed #000;
    }
    
    .dnd-drag-over {
        border: 2px dashed #000;
    }
    
    .dnd-sortable-drag {
      -moz-transform:scale(0.9);
      -webkit-transform:scale(0.9);
      transform:scale(0.9);
      opacity:0.7;
      border: 1px dashed #000;
    }
    `]
})
export class DragComponent { }