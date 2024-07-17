import React from 'react';
import ReactPaginate from 'react-paginate';
import "./Pagination.css"
const Paginations = ({ pageCount, handlePageClick }) => {
    return (
        <div className='d-flex justify-content-end'>
            <ReactPaginate
                // previousLabel={"previous"}
                // nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
            />
        </div>
       
    );
};

export default Paginations;
