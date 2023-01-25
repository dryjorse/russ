import React, {useEffect, useState} from 'react'
import s from './subjectPage.module.css'
import { useMatch } from "react-router-dom";
import { subjectsInfo } from '../../data/data';

function SubjectPage() {
    const match = useMatch('subjects/:subject')
    const [sbj, setSbj] = useState({})
    const [status, setStatus] = useState('')

    useEffect(() => {
        setSbj(subjectsInfo.find(e => e.url === match.params.subject))
        setStatus('finish')
    }, [match])

    if(status === 'finish'){
        return (
            <div className={s.main}>
                <div className={`container`}>
                    <h1>{sbj.title}</h1>
                    {
                        sbj.subtopics.map((sbt, key) => <div key={key} className={s.sbt}>
                            <h2>{sbt.title}</h2>
                            {
                                sbt.structure.map((cont, key) => {
                                    if(cont.type === 'text') return <p key={key}>{cont.content}</p>
                                    else if(cont.type === 'image') return <div className={s.picture} key={key}>
                                        <img src={cont.content} alt={`image${key}`} />
                                        <span>Рис. <strong>{cont.description.number}.</strong> {cont.description.title}</span>
                                    </div>
                                })
                            }
                        </div>)
                    }
                </div>
            </div>
        )
    }
}

export default SubjectPage