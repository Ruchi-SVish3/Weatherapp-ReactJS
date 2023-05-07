import React, { useEffect, useState } from 'react';
import { UseWeatherAPPContext } from '../../Context/Context';

import SingleCardComponents from '../SingleCard/Index';

const WeekInfoCardComponents = () => {
    // eslint-disable-next-line
    let {state:{daily}, dispatch} = UseWeatherAPPContext();

    const [selectedCard, setSelectedCard] = useState(0);
    console.log('daily', daily);
    const updateCurrent = () => {
        return(
            dispatch({
                type: 'SET_CURRENT',
                payload: daily[selectedCard]
            })
        )
    }
    useEffect(() => {
        updateCurrent();
        // eslint-disable-next-line
    },[daily, setSelectedCard]);

    return(
        <>
        <div className='cardWrap'>
            <ul className='cardList'>
                {
                    daily && daily.length > 0 ? daily.map((item, index)=> {
                        if(index<7){
                            return <SingleCardComponents key = {index} item={item} className={index === selectedCard ? 'active' : ''} onClick = {() => {
                            setSelectedCard(index);
                            updateCurrent();
                            }} />
                        }
                        
                    }) : ''
                }
            </ul>
        </div>
        </>
    )
}

export default WeekInfoCardComponents;