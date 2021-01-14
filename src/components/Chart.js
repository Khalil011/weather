import React from 'react';
import _ from 'lodash';
import { SparkLines , SparkLinesLine , SparklinesReferenceLine } from 'react-sparklines';

function average(data){
    return _.round(_.sum(data)/data.length); 
}
export default (props) => {
    return(
        <div>
        <SparkLines height={120} width={100} data={props.data}>
            <SparkLinesLine color={props.color}></SparkLinesLine>
            <SparklinesReferenceLine type="avg"/> 
        </SparkLines>
        <div>{average(props.data)}</div>
        </div>
    );
}