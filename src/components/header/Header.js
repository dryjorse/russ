import React, { useState, useEffect } from 'react'
import s from './header.module.css'
import logo from '../../assets/images/common/logo.svg'
import burgerIcon from '../../assets/images/header/menu.svg'
import backIcon from '../../assets/images/header/arrow-back.svg'
import Menu from '../menu/Menu'

function Header() {
    const [isHideMenu, handleHideMenu] = useState(true)

    const handlMenu = () => {
        handleHideMenu(!isHideMenu)
    }

    useEffect(() => {
        if(!isHideMenu) document.body.style.overflow = 'hidden'
        else document.body.style.overflow = ''
    }, [isHideMenu])

    return (
        <div className={s.header}>
            <div className={s.main}>
                <div className={`container ${s.container}`}>
                    <img src={logo} alt="logo" />
                    <button onClick={handlMenu} className={s.burgerBtn}>
                        <img src={!isHideMenu ? backIcon : burgerIcon} alt="icon" />
                    </button>
                </div>
            </div>
            <Menu isHide={isHideMenu}/>
            {!isHideMenu && <div className={s.coverBody}></div>}
        </div>
    )
}

export default Header