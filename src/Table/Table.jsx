import React, { useEffect } from 'react';
import TableHead from './TableHead/TableHead';
import s from './Table.module.css';
import { connect } from 'react-redux';
import { getData, sortTopName, sortDownName, sortDown, sortTop } from './../Redux/trafficTableReducer'
import AllRow from './TableBody/AllRow';
import TableRow from './TableBody/TableRow';


const Table = (props) => {

    useEffect(() => {
        props.getData()
    })

    return (
        <table className={s.table}>
            <TableHead data={props.data}
                sortTopName={props.sortTopName}
                sortDownName={props.sortDownName}
                sortDataId={props.sortDataId}
                sortDown={props.sortDown}
                sortTop={props.sortTop}
            />
            <AllRow sources={props.data.map(d => d.sources)} />
            {props.data.map(d => <TableRow
                key={d.object.id}
                object={d.object}
                sources={d.sources} />)}
        </table>
    )

}

const mapStateToProps = (state) => {
    return {
        data: state.trafficTable.data,
        sortDataId: state.trafficTable.sortDataId
    }
}

export default connect(mapStateToProps, { getData, sortTopName, sortDownName, sortDown, sortTop })(Table);
