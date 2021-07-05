import React from 'react';
import s from './TableRow.module.css';



const AllRow = ({sources}) => {

  let allSources = []

  for(let i = 0; i < sources.length; i++) {
    allSources.push(...sources[i])
  }
  return (

    <tbody className={`${s.tableRow} ${s.allRow}`}>
      <tr >
        <th className={s.sourceColumn}>
          <span>Итого</span>
        </th>
        <td className={s.trafficColumn}>
          <div className={s.tableItem}>
            <span>{allSources.reduce((p, b) => p + b.traffic.impressions, 0)}</span>
            <span>{allSources.reduce((p, b) => p + b.traffic.clicks, 0)}</span>
            <span>{allSources.reduce((p, b) => p + b.traffic.sessions, 0)}</span>
            <span>{allSources.reduce((p, b) => p + b.traffic.CTR, 0)}</span>
            <span>{allSources.reduce((p, b) => p + b.traffic.costClick, 0)}</span>
            <span >{allSources.reduce((p, b) => p + b.traffic.Expenses, 0)}</span>
          </div>
        </td>
        <td className={s.salesColumn}>
          <div className={s.tableItem}>
            <span><a href="/">{allSources.reduce((p, b) => p + b.sales.quantity, 0)}</a></span>
            <span>{allSources.reduce((p, b) => p + b.sales.CPA, 0)}</span>
            <span>{allSources.reduce((p, b) => p + b.sales.profit, 0)}</span>
          </div>
        </td>
        <td className={s.targetColumn}>
          <div className={s.tableItem}>
            <span>{allSources.reduce((p, b) => p + b.target.quantity, 0)}</span>
            <span>{allSources.reduce((p, b) => p + b.target.CPA, 0)}</span>
            <span>{allSources.reduce((p, b) => p + b.target.CR, 0)}</span>
          </div>
        </td>
      </tr>
      </tbody>
  )
}
export default AllRow;