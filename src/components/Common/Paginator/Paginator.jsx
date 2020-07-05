import React, {useState} from 'react';
import classes from "./Paginator.module.css";
import cn from 'classnames'


const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChange, portionSize = 4}) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const pieceCount = Math.ceil(pagesCount / portionSize);
    const [numberPiece, setNumberPiece] = useState(1)
    const leftBorderPiece = (numberPiece - 1) * portionSize + 1;
    const rightBorderPiece = numberPiece  * portionSize;

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
        {numberPiece > 1 &&
        <li className="page-item" onClick={ () => {setNumberPiece(numberPiece - 1)}}>
            <a className="page-link bg-light" >Previous</a>
        </li>}
        {    pages
            .filter(page => (page >= leftBorderPiece) && (page <= rightBorderPiece))
            .map((page, index) => {
            return <li className="page-item" key={index}
                       onClick={() => {
                           onPageChange(page)
                       }}><a  className={cn("page-link bg-light", {[classes.selectedPage]:currentPage === page })}>{page}</a></li>
        })}
        { pieceCount > numberPiece && <li className="page-item">
            <a className="page-link bg-light" onClick={ () => {setNumberPiece(numberPiece + 1)}}>Next</a></li>}
            </ul>
    </nav>
    )
}

export default Paginator;