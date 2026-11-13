import React from 'react';
import { useT } from '../../i18n';

function StatCard({ statData }) {
    const t = useT('stats');
    const labelIndex = statData.id === 1 ? 2 : 3;

    return (
        <div className='stat'>
            <strong>{statData.value}</strong>
            <p>{t[labelIndex]}</p>
        </div>
    );
}

export default StatCard;
