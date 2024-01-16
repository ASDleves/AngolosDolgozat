import React, { useState } from 'react';
import Mondat from './mondatkiegeszit';

function Kiegeszit(props) {
    const [pont, setpont] = useState(0);

    const pontnoveles = () => {
        setpont(pont + 1);
    };

    return (
        <div>
            <h2>Gépeld be!</h2>
            <p>{props.model.cim}</p>
            <Mondat model={props.model} onCorrectAnswer={pontnoveles} />
            <p>Aktuális pontszám: {pont}</p>
        </div>
    );
}

export default Kiegeszit;
