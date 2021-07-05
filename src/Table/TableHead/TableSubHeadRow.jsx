import React from 'react'
import s from './TableHead.module.css'
import iconsInfo24 from './../../Img/iconsInfo24.png'
import arrowBottom from './../../Img/arrowBottom.png'

const TableSubHeadRow = ({ sortTopName, sortDownName, sortDataId, sortDown, sortTop }) => {
    return (
        <tr className={s.tableSubHeadRow}>
            <th onClick={() => { sortDataId !== 'name' ? sortTopName('name') : sortDownName('') }}>
                <span>Название</span>
            </th>
            <td >
                <div className={s.subTitle}>
                    <div>
                        <span onClick={() => { sortDataId !== 'impressions' ? sortDown('traffic', 'impressions') : sortTop('traffic', 'impressions') }}>
                            Показы
                        </span>
                        <span ><a href="/"><img src={iconsInfo24} alt="/" /></a></span>
                    </div>
                    <div>
                        <span onClick={() => {sortDataId !== 'clicks' ? sortDown('traffic', 'clicks') : sortTop('traffic', 'clicks')}}>
                            Клики
                        </span>
                    </div>
                    <div>
                        <span onClick={() => {sortDataId !== 'sessions' ? sortDown('traffic', 'sessions') : sortTop('traffic', 'sessions')}}>
                            Сеансы
                        </span>
                        <span ><a href="/"><img src={arrowBottom} alt="/" /></a></span>
                    </div>
                    <div>
                        <span onClick={() => {sortDataId !== 'CTR' ? sortDown('traffic', 'CTR') : sortTop('traffic', 'CTR')}}>
                            CTR,%
                        </span>
                        <span ><a href="/"><img src={iconsInfo24} alt="/" /></a></span>
                    </div>
                    <div>
                        <span onClick={() => {sortDataId !== 'costClick' ? sortDown('traffic', 'costClick') : sortTop('traffic', 'costClick')}}>
                            Цена клика
                        </span>
                    </div>
                    <div className={s.subTitleItem}>
                        <span onClick={() => {sortDataId !== 'Expenses' ? sortDown('traffic', 'Expenses') : sortTop('traffic', 'Expenses')}}>
                            Затраты
                        </span>
                        <div>
                            <span ><a href="/">Настроить</a></span>
                            <span><img src={iconsInfo24} alt="/" /></span>
                        </div>
                    </div>

                </div>
            </td>
            <td >
                <div className={s.subTitle}>
                    <div>
                        <span onClick={() => {sortDataId !== 'quantity' ? sortDown('sales', 'quantity') : sortTop('sales', 'quantity')}}>
                            Кол-во
                        </span>
                    </div>
                    <div>
                        <span onClick={() => {sortDataId !== 'CPA' ? sortDown('sales', 'CPA') : sortTop('sales', 'CPA')}}>
                            CPA
                        </span>
                    </div>
                    <div>
                        <span onClick={() => {sortDataId !== 'profit' ? sortDown('sales', 'profit') : sortTop('sales', 'profit')}}>
                            Выручка
                        </span>
                    </div>
                </div>
            </td>
            <td>
                <div className={s.subTitle}>
                    <div>
                        <span onClick={() => {sortDataId !== 'quantity' ? sortDown('target', 'quantity') : sortTop('target', 'quantity')}}>
                            Кол-во
                        </span>
                    </div>
                    <div>
                        <span onClick={() => {sortDataId !== 'CPA' ? sortDown('target', 'CPA') : sortTop('target', 'CPA')}}>
                            CPA
                        </span>
                    </div>
                    <div>
                        <span onClick={() => {sortDataId !== 'CR' ? sortDown('target', 'CR') : sortTop('target', 'CR')}}>
                            CR,%
                        </span>
                    </div>

                </div>
            </td>
        </tr>
    )

}

export default TableSubHeadRow;