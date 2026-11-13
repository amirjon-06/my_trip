import React from 'react';
import {useT} from '../../i18n';
function StatCard({statData}){const t=useT('stats');return <div className='stat'><strong>{statData.value}</strong><p>{t[statData.id===1?2:3]}</p></div>}
export default StatCard;
