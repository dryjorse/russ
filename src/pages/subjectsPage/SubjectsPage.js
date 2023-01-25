import React from 'react'
import s from './subjectsPage.module.css'
import back from '../../assets/images/subjects/back.jpg'
import { subjects } from '../../data/data'
import { Link } from "react-router-dom";

function SubjectsPage() {
    return (
        <div className={s.main}>
            <div className={s.module}>
                <h2>II Модуль</h2>
            </div>
            <div className={s.content} style={{background: `url(${back})`}}>
                <div className={`container ${s.container}`} >
                    <ul>
                        {
                            subjects.map((e, key) => <li key={key}><Link to={`/subjects/${e.url}`}>{e.name}</Link></li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SubjectsPage