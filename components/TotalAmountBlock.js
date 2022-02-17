import React, { Fragment } from 'react';
import { EachAmountBlock } from './EachAmountBlock';


const TotalAmountBlock = ({amountData}) => {
  return (
    <Fragment>
      {amountData.map((amountBlock) => (
        <EachAmountBlock key={amountBlock.id} 
          amountBlock={amountBlock} />
      ))}
    </Fragment>
  )
}



export default TotalAmountBlock;
