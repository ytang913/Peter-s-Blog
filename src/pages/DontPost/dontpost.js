import React from 'react';
import { homeObjOne} from './Data';
import DontPostInfoSection from '../../components/InfoSection/DontPostInfoSection';


function DontPost() {
  return (
    <>
      <DontPostInfoSection {...homeObjOne} />
    </>
  );
}

export default DontPost;
