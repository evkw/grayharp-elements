import {
  Directive,
  ElementRef,
  HostListener,
  Output,
  EventEmitter
} from '@angular/core';

@Directive({
  selector: '[libCellSelection]'
})
export class CellSelectionDirective {
  @Output()
  selectionChange = new EventEmitter();

  private mouseDown = false;
  private firstCell: number;
  private currentCell: number;
  private selectedCells: number[];

  @HostListener('mousedown', ['$event.target'])
  onMoseDown(event) {
    const cellAttr = !!event ? event.getAttribute('cell-number') : null;
    if (cellAttr != null) {
      const cellNumber = +cellAttr;
      this.mouseDown = true;
      this.firstCell = cellNumber;
      this.currentCell = cellNumber;
      this.selectedCells = [cellNumber];
      this.selectionChange.emit(this.selectedCells);
    }
  }

  @HostListener('mouseup')
  onMouseUp() {
    this.mouseDown = false;
  }

  @HostListener('mouseover', ['$event.target'])
  onMoseOver(event) {
    if (!this.mouseDown) {
      return;
    }
    const cellAttr: number = !!event
      ? +event.getAttribute('cell-number')
      : null;
    const cellNumber = +cellAttr;
    if (cellAttr != null && this.currentCell !== cellNumber) {
      this.currentCell = cellNumber;
      this.selectedCells =
        this.firstCell < cellNumber
          ? this.generateRange(this.firstCell, cellNumber)
          : this.generateRange(cellNumber, this.firstCell);
      this.selectionChange.emit(this.selectedCells);
    }
  }

  private generateRange(start, end) {
    return Array(end - start + 1)
      .fill(null)
      .map((n, i) => start + i);
  }
}
