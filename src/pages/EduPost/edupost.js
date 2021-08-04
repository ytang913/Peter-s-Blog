import React from 'react';
import { homeObjOne } from './Data';
import EduInfoSection from '../../components/InfoSection/EduInfoSection';


function EduPost() {
  return (
    <>
      <EduInfoSection {...homeObjOne} />
    </>
  );
}

export default EduPost;
