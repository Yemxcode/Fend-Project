import React from 'react';


export default function PaginationNav ({maxPage, page, changePage}) {

 const pageNumbers = [];

 for(let i = 1; i <= maxPage; i++) {
  pageNumbers.push(i)
 }
 return (
  <nav>
   {pageNumbers.map(number => <button disabled={page === number} key={number} onClick={() => changePage(number)} >{number}</button>)}
  
  </nav>
 )
}