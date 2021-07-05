import React from 'react';
import TableHeadRow from './TableHeadRow';
import TableSubHeadRow from './TableSubHeadRow';

const TableHead = ({...props}) => {
    return (
        <thead>
            <TableHeadRow />
            <TableSubHeadRow {...props}/>
        </thead>
    )

}

export default TableHead;