
import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-pager',
  standalone: true,
  templateUrl: './pager.html',
  styleUrl: './pager.css'
})
export class Pager
{
  page = input<number>(1);

  totalPages = input<number>(1);

  pageSize = input<number>(10);

  pageChange = output<number>();

  pageSizeChange = output<number>();

  next()
  {
    if (this.page() < this.totalPages())
    {
      this.pageChange.emit(this.page() + 1);
    }
  }

  prev()
  {
    if (this.page() > 1)
    {
      this.pageChange.emit(this.page() - 1);
    }
  }

  changeSize(value: string)
  {
    const size = Number(value);

    this.pageSizeChange.emit(size);
  }
}