import React from 'react';
import { homeObjOne } from './Data';
import MoneyInfoSection from '../InfoSection/MoneyInfoSection';


function MoneyPost() {
  return (
    <>
      <MoneyInfoSection {...homeObjOne} />
    </>
  );
}

export default MoneyPost;
