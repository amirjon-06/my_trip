import React, { useState } from 'react';
import VisaCard from './VisaCard';
import TourModal from '../TourModal/TourModal';
import { useT } from '../../i18n';
export const visaPackages = [
 { id:1, title:'30-day tourist visa', days:'30 days', description:'A short stay. A big adventure.', price:'$120', kind:'visa' },
 { id:2, title:'60-day tourist visa', days:'60 days', description:'More time to make it yours.', price:'$190', kind:'visa' },
 { id:3, title:'90-day tourist visa', days:'90 days', description:'Settle in. Explore a little further.', price:'$280', kind:'visa' }
];
function VisaPackages() {
 const [selectedVisa,setSelectedVisa]=useState(null); const t=useT('visa');
 return <section className='section visa-section reveal' id='visa-packages' aria-labelledby='visa-title'><div className='section-kicker'>{t[0]}</div><div className='section-heading split'><h2 id='visa-title'>{t[1].split('\n').map((line,i)=><React.Fragment key={i}>{i>0&&<br/>}{line}</React.Fragment>)}</h2><p>{t[2]}<br/>{t[3]}</p></div><div className='visa-grid'>{visaPackages.map((visa,i)=><VisaCard key={visa.id} visaData={visa} index={i} onOpen={setSelectedVisa}/>)}</div><p className='section-note'>{t[16]}</p>{selectedVisa&&<TourModal tour={selectedVisa} onClose={()=>setSelectedVisa(null)}/>}</section>;
}
export default VisaPackages;
