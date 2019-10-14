import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { RowScheduledAppointment, CalendarMode } from '../../grid.models';

@Directive({
  selector: '[libEventCell]'
})
export class EventCellDirective {
  @Input() resizableGrabWidth = 8;
  @Input() resizableMinWidth = 10;
  @Input() mode: CalendarMode;
  @Input() set data(value: RowScheduledAppointment) {
    if (!!value) {
      // Offset since grid css doesn't start count from zero
      if (this.mode === 'month') {
        const week = Math.floor(value.rowStart / 7);
        this.renderer.setStyle(
          this.el.nativeElement,
          'grid-row',
          `${week + 1}`
        );
      } else {
        this.renderer.setStyle(
          this.el.nativeElement,
          'grid-row',
          `${value.rowStart + 1}/${value.rowEnd + 2}`
        );
      }

      if (this.mode !== 'day') {
        this.renderer.setStyle(
          this.el.nativeElement,
          'grid-column',
          `${value.column}`
        );
      }
    }
  }

  dragging = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  // private el: ElementRef, @Inject(DOCUMENT) doc,
  // @Optional() public parent: TritonDayGridComponent,
  // private renderer: Renderer2) {
  // function preventGlobalMouseEvents() {
  //     document.body.style['pointer-events'] = 'none';
  // }

  // function restoreGlobalMouseEvents() {
  //     document.body.style['pointer-events'] = 'auto';
  // }

  // const newHeight = (wid) => {
  //     const h = Math.max(this.resizableMinWidth, wid);
  //     el.nativeElement.style.height = (h) + 'px';
  // };

  // const mouseMoveG = (evt) => {
  //     if (!this.dragging) {
  //         return;
  //     }

  //     newHeight(evt.clientY - el.nativeElement.offsetTop  - parent.getTopOffset());
  //     evt.stopPropagation();
  // };

  // const mouseUpG = (evt) => {
  //     if (!this.dragging) {
  //         return;
  //     }

  //     restoreGlobalMouseEvents();
  //     this.dragging = false;
  //     evt.stopPropagation();
  // };

  // const mouseDown = (evt) => {
  //     if (this.inDragRegion(evt)) {
  //         this.dragging = true;

  //         preventGlobalMouseEvents();
  //         evt.stopPropagation();
  //     }
  // };

  // const mouseMove = (evt) => {
  //     if (this.inDragRegion(evt) || this.dragging) {
  //         el.nativeElement.style.cursor = 'n-resize';
  //     } else {
  //         el.nativeElement.style.cursor = 'default';
  //     }
  // };

  // document.addEventListener('mousemove', mouseMoveG, true);
  // document.addEventListener('mouseup', mouseUpG, true);
  // el.nativeElement.addEventListener('mousedown', mouseDown, true);
  // el.nativeElement.addEventListener('mousemove', mouseMove, true);

  // }

  // inDragRegion(evt) {
  //     return this.el.nativeElement.clientHeight - evt.clientY + this.el.nativeElement.offsetTop < this.resizableGrabWidth;
  // }
}
