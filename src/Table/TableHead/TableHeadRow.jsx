import React from 'react';
import s from './TableHead.module.css';
import iconsInfo24 from './../../Img/iconsInfo24.png'
import icons8 from './../../Img/icons8.png'
import global_world from './../../Img/global_world_icon.png'
import iconsBox from './../../Img/iconsBox.png'
import settings from './../../Img/settingsTools.png'

const TableHeadRow = () => {
    return (
            <tr className={s.tableHeadRow}>
                <th className={s.sourceColumn}>
                    <span>Источник трафика</span>
                </th>
                <th className={s.trafficColumn}>
                    <span>Трафик</span>
                    <div className={s.settings}>
                        <span><a href="/"><img src={icons8} alt="/" /></a></span>
                        <span><a href="/"><img src={iconsInfo24} alt="/" /></a></span>
                    </div>
                </th>
                <th className={s.salesColumn}>
                    <div className={s.title}>
                        <span><img src={global_world} alt="" /></span>
                        <span>Продажи</span>
                    </div>
                    <div className={`${s.title} ${s.titleItem}`}>
                        <span><img src={iconsBox} alt="" /></span>
                        <span>Линейная модель</span>
                    </div>
                    <div className={s.settings}>
                        <span><a href="/"><img src={icons8} alt="/" /></a></span>
                        <span><a href="/"><img src={iconsInfo24} alt="/" /></a></span>
                    </div>
                </th>
                <th className={s.targetColumn}>
                    <div className={s.title}>
                        <span><img src={settings} alt="" /></span>
                        <span>Цель с осн. GA</span>
                    </div>
                    <div className={`${s.title} ${s.titleItem}`}>
                        <span><img src={iconsBox} alt="" /></span>
                        <span>Составная цель</span>
                    </div>
                    <div className={s.settings}>
                        <span><a href="/"><img src={icons8} alt="/" /></a></span>
                        <span><a href="/"><img src={iconsInfo24} alt="/" /></a></span>
                    </div>
                </th>
            </tr>
    )

}

export default TableHeadRow;