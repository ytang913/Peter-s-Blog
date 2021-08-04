import React from 'react';
//import { AbInfoSection } from '../../components';
import { homeObjOne} from './about';
import AbInfoSection from '../../components/InfoSection/AbInfoSection';

function AboutNav() {
  return (
    <>
      <AbInfoSection {...homeObjOne} />
    </>
  );
}

export default AboutNav;
