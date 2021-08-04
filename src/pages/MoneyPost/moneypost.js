import React from 'react';
import { homeObjOne } from './Data';
import MoneyInfoSection from '../../components/InfoSection/MoneyInfoSection';


function MoneyPost() {
  return (
    <>
      <MoneyInfoSection {...homeObjOne} />
    </>
  );
}

export default MoneyPost;
