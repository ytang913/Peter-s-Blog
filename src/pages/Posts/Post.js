import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';
import PostIIInfoSection from '../../components/InfoSection/PostIIInfoSection';
import Edu2InfoSection from '../../components/InfoSection/Edu2InfoSection';
import Money2InfoSection from '../../components/InfoSection/Money2InfoSection';

function Posts() {
  return (
    <>
      <PostIIInfoSection {...homeObjOne} />
      <Edu2InfoSection {...homeObjTwo} />
      <Money2InfoSection {...homeObjThree}/>
    </>
  );
}

export default Posts;
