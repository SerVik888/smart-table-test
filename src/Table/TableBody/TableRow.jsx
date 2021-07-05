import React from 'react';
import { useState } from 'react';
import SourceTableRow from './SourceTableRow';
import s from './TableRow.module.css';
import iconMinus from './../../Img/iconMinus.png'
import iconPlus from './../../Img/iconPlus.png'


const TableRow = ({ object, sources }) => {

  let [change, changeCheck] = useState(false)

  return (
    <tbody className={s.tableRow}>
      <tr className={change ? s.bgcDarkGrey : null}>
        <th className={s.sourceColumn}>
          {sources.length === 1 && 
            <div className={s.sourceColumnTitle}>
              <div className={s.btn}></div>
              <div>
                <span className={s.icon}><img src={object.icon} alt="" /></span>
              </div>
              <div>
                <div>{object.name}</div>
                <div className={s.titleItem}>{object.source}</div>
              </div>
            </div>
          } 
          {sources.length > 1 && change &&
            <div className={s.sourceColumnTitle}>
              <div>
                <span className={s.btn} onClick={() => { changeCheck(false) }}><img src={iconMinus} alt='/' /></span>
                <span className={s.icon}><img src={object.icon} alt="" /></span>
              </div>
              <div>
                <div>{object.name}</div>
                <div className={s.titleItem}>Количество источников {sources.length}</div>
              </div>
            </div>
          }
          {sources.length > 1 && !change &&
            <div className={s.sourceColumnTitle}>
              <div >
                <span className={s.btn} onClick={() => { changeCheck(true) }}><img src={iconPlus} alt='/' /></span>
                <span className={s.icon}><img src={object.icon} alt="" /></span>
              </div>
              <div>
                <div>{object.name}</div>
                <div className={s.titleItem}>Количество источников {sources.length}</div>
              </div>
            </div>
          }

        </th>
        <td className={s.trafficColumn}>
          <div className={s.tableItem}>
            <span>{sources.reduce((p, b) => p + b.traffic.impressions, 0) || '-'} </span>
            <span>{sources.reduce((p, b) => p + b.traffic.clicks, 0)}</span>
            <span>{sources.reduce((p, b) => p + b.traffic.sessions, 0)}</span>
            <span>{sources.reduce((p, b) => p + b.traffic.CTR, 0) || '-'}</span>
            <span>{sources.reduce((p, b) => p + b.traffic.costClick, 0)}</span>
            <span >{sources.reduce((p, b) => p + b.traffic.Expenses, 0)}</span>
          </div>
        </td>
        <td className={s.salesColumn}>
          <div className={s.tableItem}>
            <span><a href="/">{sources.reduce((p, b) => p + b.sales.quantity, 0)}</a></span>
            <span>{sources.reduce((p, b) => p + b.sales.CPA, 0)}</span>
            <span>{sources.reduce((p, b) => p + b.sales.profit, 0)}</span>
          </div>
        </td>
        <td className={s.targetColumn}>
          <div className={s.tableItem}>
            <span>{sources.reduce((p, b) => p + b.target.quantity, 0)}</span>
            <span>{sources.reduce((p, b) => p + b.target.CPA, 0)}</span>
            <span>{sources.reduce((p, b) => p + b.target.CR, 0)}</span>
          </div>
        </td>
      </tr>

      {sources.length > 1 && change && sources.map(d =>
        <SourceTableRow key={d.trafficSource.id} source={d} />)}

    </tbody>
  )
}
export default TableRow;