import React from 'react';
import classes from "./Paginator.module.css";


const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChange}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return pages.map(page => {
        return <button className={currentPage === page ? classes.selectedPage : undefined}
                       onClick={() => {
                           onPageChange(page)
                       }}>{page}</button>
    });
}

export default Paginator;