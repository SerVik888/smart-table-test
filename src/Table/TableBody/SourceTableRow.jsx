import React from 'react';
import s from './TableRow.module.css';


const SourceTableRow = ({ source }) => {

  return (
    <tr className={s.bgcDarkGrey}>
      <th className={s.sourceColumn}>
        <div className={s.sourceColumnTitle}>
          <div className={s.btn}></div>
          <span className={s.icon}><img src={source.trafficSource.icon} alt="/" /></span>
          <span>{source.trafficSource.sourceName}</span>
        </div>
      </th>
      <td className={s.trafficColumn}>
        <div className={s.tableItem}>
          <span>{source.traffic.impressions || '-'}</span>
          <span>{source.traffic.clicks}</span>
          <span>{source.traffic.sessions}</span>
          <span>{source.traffic.CTR || '-'}</span>
          <span>{source.traffic.costClick}</span>
          <span >{source.traffic.Expenses}</span>
        </div>
      </td>
      <td className={s.salesColumn}>
        <div className={s.tableItem}>
          <span>{source.sales.quantity}</span>
          <span>{source.sales.CPA}</span>
          <span>{source.sales.profit}</span>
        </div>
      </td>
      <td className={s.targetColumn}>
        <div className={s.tableItem}>
          <span>{source.target.quantity}</span>
          <span>{source.target.CPA}</span>
          <span>{source.target.CR}</span>
        </div>
      </td>
    </tr>
  )
}
export default SourceTableRow;