import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'select-block-puzzle';
  empty = { isActive: false };

  grid = [
    [ 
      this.empty, { isActive: true, value: '1' }, 
      { isActive: true, value: '2' }, { isActive: true, value: '3' } 
    ],
    [ 
      { isActive: true, value: '4' }, { isActive: true, value: '5' }, 
      { isActive: true, value: '6' }, { isActive: true, value: '7' } 
    ],
    [ 
      { isActive: true, value: '8' }, { isActive: true, value: '9' }, 
      { isActive: true, value: '10' }, { isActive: true, value: '11' } 
    ],
    [ 
      { isActive: true, value: '12' }, { isActive: true, value: '13' }, 
      { isActive: true, value: '14' }, { isActive: true, value: '15' } 
    ]
  ];

  move(row: number, col: number) {
    let isImage = this.grid[row][col].isActive;

    if(isImage) {
      let canMove = this.isNextToBlankSpace(row, col);
      if(canMove) {
        let toMove = this.grid[row][col];
        this.grid[canMove.row][canMove.col] = toMove;
        this.grid[row][col] = this.empty;
      }
    }
  }

  isNextToBlankSpace(row: number, col: number) {
    let isTop = this.findCol(row - 1, col);
    let isBottom = this.findCol(row + 1, col);
    let isRight = this.findCol(row, col + 1);
    let isLeft = this.findCol(row, col - 1);
    return isTop || isBottom || isRight || isLeft;
  }

  findCol(row: number, col: number) {
    if(this.grid[row]) {
      if(this.grid[row][col]) {
        if(this.grid[row][col].isActive === false) {
          return { row, col };
        }
      }
    }
    return null;
  }
}
