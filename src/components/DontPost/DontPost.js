import React from 'react';
import { homeObjOne } from './Data';
import PostIIInfoSection from '../InfoSection/PostIIInfoSection';


function DontPost() {
  return (
    <>
      <PostIIInfoSection {...homeObjOne} />
    </>
  );
}

export default DontPost;
