import React from 'react'
import s from './menu.module.css'
import {Link} from 'react-router-dom'
import homeIcon from '../../assets/images/header/home.svg'
import subjectsIcon from '../../assets/images/header/subjects.svg'

function Menu({isHide}) {
    return (
        <div className={`${s.main} ${isHide ? s.hideMenu : ''}`}>
            <div className={s.container}>
                <Link to={'/'} className={s.link}>
                    <img src={homeIcon} alt="homeIcon" />
                    <span>Главное</span>
                </Link>
                <Link to={'/subjects'} className={s.link}>
                    <img src={subjectsIcon} alt="subjectsIcon" />
                    <span>Темы</span>
                </Link>
            </div>
        </div>
    )
}

export default Menu