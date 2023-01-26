import React from 'react'
import s from './mainPage.module.css'
import backOne from '../../assets/images/main/back-one.jpg'
import backTwo from '../../assets/images/main/back-two.jpg'
import backThree from '../../assets/images/main/back-three.jpg'

function MainPage() {
    return (
        <div className={s.main}>
            <div style={{background: `url(${backOne})`}} className={`${s.home} ${s.block}`}>
                <div className={s.backShadow}></div>
                <h1>Русский язык</h1>
                <span>Кожоев Абдулазим</span>
                <span>OK 10-22</span>
            </div>
        </div>
    )
}

export default MainPage