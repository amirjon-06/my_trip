import React from 'react';
import { useT } from '../../i18n';
function VisaCard({ visaData, index, onOpen }) {
 const t=useT('visa');
 return <article className='visa-card'><p className='card-label'>{t[10]} <span>0{index+1}</span></p><h3>{t[4+index*2]}</h3><p className='visa-description'>{t[5+index*2]}</p><strong className='visa-price'>{visaData.price}</strong><small className='visa-unit'>{t[11]}</small><ul className='visa-includes'><li>{t[12]}</li><li>{t[13]}</li><li>{t[14]}</li></ul><button className='button primary card-button' type='button' onClick={()=>onOpen({...visaData,title:t[4+index*2],description:t[5+index*2]})}>{t[15]} <span aria-hidden='true'>→</span></button></article>;
}
export default VisaCard;
