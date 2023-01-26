import React, {useEffect, useState} from 'react'
import s from './subjectPage.module.css'
import back from '../../assets/images/common/back_acc.svg'
import { useMatch } from "react-router-dom";
import { subjectsInfo } from '../../data/data';
import { Accordion } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

function SubjectPage() {
    const match = useMatch('subjects/:subject')
    const [sbj, setSbj] = useState({})
    const [status, setStatus] = useState('')

    useEffect(() => {
        setSbj(subjectsInfo.find(e => e.url === match.params.subject))
        setStatus('finish')
    }, [match])

    const accordStyle = [{
        fontFamily: 'TT Travels',
        fontSixe: '14px',
        color: 'white',
        background: 'none',
        boxShadow: 'none',
        borderBottom: '1px solid #013D71'
    }]

    const accordSmStyle = [{
        borderTop: '1px solid #013D71',
        padding: '20px 0',
    }]

    if(status === 'finish'){
        return (
            <div className={s.main}>
                <div className={`container`}>
                    <h1>{sbj.title}</h1>
                    {sbj.definition?.main}
                    {sbj.definition.mainTwo}
                    {
                        sbj.subtopics.map((sbt, key) => <div key={key} className={s.sbt}>
                            <Accordion sx={accordStyle} className={s.accord}>
                                <AccordionSummary
                                    id='filter-panel1'
                                    aria-controls='panel1-content'
                                    expandIcon={<img src={back} alt="back" />}
                                    sx={accordSmStyle}
                                    className={s.accordionHead}
                                >
                                    <button className={s.sbtH}>
                                        <h2>{sbt.title}</h2>
                                    </button>
                                </AccordionSummary>
                                <AccordionDetails sx={accordSmStyle} className={s.sbtB}>
                                    {
                                        sbt.structure.map((cont, key) => {
                                            if(cont.type === 'text') return <p key={key}>{cont.content}</p>
                                            else if(cont.type === 'image') return <div className={s.picture} key={key}>
                                                <img src={cont.content} alt={`image${key}`} />
                                                <span>Рис. <strong>{cont.description.number}.</strong> {cont.description.title}</span>
                                            
                                            </div>
                                            else if(cont.type === 'list') return <div key={key} className={s.ulB}>
                                                <h3>{cont.title}</h3>
                                                <ul className={s.list}>
                                                    {cont.lists.map((list, key) => <li key={key}>{list.content}</li>)}
                                                </ul>
                                                
                                            </div>
                                            else if(cont.type === 'ol_list_main') return <ol key={key}>
                                                {cont.content.map((list, key) => <li key={key}>
                                                    <h3>{list.title}</h3>
                                                    <p><strong>{list.title}</strong> {list.text}</p>
                                                </li>)}
                                            </ol>
                                            else if(cont.type === 'table') return <div>
                                                <h3>{cont.title}</h3>
                                                <table key={key}>
                                                    <tbody>
                                                        <tr>
                                                            <td>Числительные</td>
                                                            <td>Как склоняются</td>
                                                            <td>Примеры</td>
                                                        </tr>
                                                        <tr>
                                                            <td>5-20, 30</td>
                                                            <td>Склоняются как сущ. 3-склонения</td>
                                                            <td>пяти, пятью, о пяти</td>
                                                        </tr>
                                                        <tr>
                                                            <td>40, 90, 100</td>
                                                            <td>Имеют две падежные формы</td>
                                                            <td>сорок, девяносто, сто, сорока, девяноста, ста</td>
                                                        </tr>
                                                        <tr>
                                                            <td>50, 60, 70, 80</td>
                                                            <td>Изменяются обе части как существительные 3-склонения. Имеют 3 падежные формы</td>
                                                            <td>пятьдесят, пятидесяти, пятьюдесятью</td>
                                                        </tr>
                                                        <tr>
                                                            <td>500, 600, 700, 800, 900</td>
                                                            <td>Изменяются обе части: <br/> 1 часть как ПЯТЬ <br/> 2 часть как сущ. во мн. числе </td>
                                                            <td>пятьсот, пятисот, пятистам, пятьюстами, о пятистах</td>
                                                        </tr>
                                                        <tr>
                                                            <td>200, 300, 400</td>
                                                            <td>Изменяются обе части: <br/> 1 часть как ДВА ТРИ ЧЕТЫРЕ <br/> 2 часть как сущ. во мн. числе </td>
                                                            <td>двести, двухсот, двумстам, двумстами, о двухстаз</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        })
                                    }
                                </AccordionDetails>
                            </Accordion>
                        </div>)
                    }
                </div>
            </div>
        )
    }
}

export default SubjectPage