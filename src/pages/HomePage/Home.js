import React from 'react';
import { homeObjOne , homeObjThree } from './Data';
import { InfoSection } from '../../components';
import AboutInfoSection from '../../components/InfoSection/AboutInfoSection';
import Post from '../../components/Posts/Post';

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <AboutInfoSection {...homeObjThree} />
      <Post />

    </>
  );
}

export default Home;
