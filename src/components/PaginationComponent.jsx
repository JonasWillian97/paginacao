import React from 'react'

function PaginationComponent ({pages, currentPage,  setCurrentPage}) {
  return (
    <div>
        {Array.from(Array(pages), (itens, index) => {
          return <button 
          style={ index === currentPage ? {backgroundColor :'grey'} : null}
          className='paginationButton' 
          value={index}
           onClick={(e) => setCurrentPage(Number(e.target.value))}>{index+1}</button>
        })}
      </div>
  )
}

export default PaginationComponent;