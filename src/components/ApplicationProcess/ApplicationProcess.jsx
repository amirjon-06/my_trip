import React from 'react';
import { useT } from '../../i18n';
function ApplicationProcess() {
 const t=useT('process');
 return <section className='section process reveal' id='application-process' aria-labelledby='process-title'><p className='section-kicker'>{t[0]}</p><h2 id='process-title'>{t[1]}</h2><ol className='process-steps'>{[0,1,2,3].map(i=><li key={i}><span className='step-number'>0{i+1}</span><h3>{t[2+i*2]}</h3><p>{t[3+i*2]}</p></li>)}</ol></section>;
}
export default ApplicationProcess;
