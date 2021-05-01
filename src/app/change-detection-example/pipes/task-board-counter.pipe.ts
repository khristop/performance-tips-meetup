import { Pipe, PipeTransform } from '@angular/core';
import { Board } from '../task.service';

@Pipe({
  name: 'taskBoardCounter'
})

export class TaskBoardCounterPipe implements PipeTransform {
  transform(boards: Board[]): number {
    console.log('TaskBoardCounterPipe called')
    return boards.reduce(
      (acc, board) => board.tasks.length + acc,
      0
    );
  }
}