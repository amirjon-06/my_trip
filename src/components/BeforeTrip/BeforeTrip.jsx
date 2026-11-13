import React from 'react';
import {useT} from '../../i18n';
function BeforeTrip(){const t=useT('before');return <section className='section before reveal' aria-labelledby='before-title'><p className='section-kicker'>{t[0]}</p><h2 id='before-title'>{t[1]}</h2><p className='section-intro'>{t[2]}</p><div className='before-grid'>{[0,1].map(group=><article key={group}><p className='card-label'>{t[group===0?3:8]}</p><h3>{t[group===0?4:9]}</h3><ul>{[0,1,2].map(i=><li key={i}><span aria-hidden='true'>✓</span>{t[(group===0?5:10)+i]}</li>)}</ul></article>)}</div><p className='section-note'>{t[13]}</p></section>}
export default BeforeTrip;
