import { Component, computed, input, linkedSignal, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagination',
  imports: [RouterLink],
  templateUrl: './pagination.html',
  styleUrl: './pagination.css'
})
export class Pagination {


  currentPage = input<number>(4)
  pages = input(0)

  activePage = linkedSignal(this.currentPage)

  getPagesList = computed(()=>{
    return Array.from({ length: this.pages() },(_,i)=> i + 1 )
  })

}
