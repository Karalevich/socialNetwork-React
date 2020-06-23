import React, {useState} from 'react';
import classes from "./Paginator.module.css";


const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChange, portionSize = 15}) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const pieceCount = Math.ceil(pagesCount / portionSize);
    const [numberPiece, setNumberPiece] = useState(1)
    const leftBorderPiece = (numberPiece - 1) * portionSize + 1;
    const rightBorderPiece = numberPiece  * portionSize;

    return <div>
        {numberPiece > 1 && <button onClick={ () => {setNumberPiece(numberPiece - 1)}}>PREV</button>}
        {    pages
            .filter(page => (page >= leftBorderPiece) && (page <= rightBorderPiece))
            .map(page => {
            return <button className={currentPage === page ? classes.selectedPage : undefined}
                           onClick={() => {
                               onPageChange(page)
                           }}>{page}</button>
        })}
        { pieceCount > numberPiece && <button onClick={ () => {setNumberPiece(numberPiece + 1)}}>NEXT</button>}
    </div>
}

export default Paginator;