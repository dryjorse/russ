import React from 'react'
import s from './footer.module.css'

function Footer() {
    return (
        <div className={s.main}>
            <ul>
                <li>Исполнитель: Кожоев Абдулазим</li>
                <li>Дизайнер: Нуркасымов Бекзат</li>
            </ul>
        </div>
    )
}

export default Footer