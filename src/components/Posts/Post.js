import React from 'react';
import { Button } from '../../globalStyles';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';

import { IconContext } from 'react-icons/lib';
import {
  PostSection,
  PostWrapper,
  PostHeading,
  PostContainer,
  PostCard,
  PostCardInfo,
  PostCardIcon,
  PostCardPlan,
  PostCardCost,
  PostCardLength,
  PostCardFeatures,
  PostCardFeature
} from './Post.elements';

function Post() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PostSection>
        <PostWrapper>
          <PostHeading>My Blog Posts</PostHeading>
          <PostContainer>
            <PostCard to='/newpost'>
              <PostCardInfo>
                <PostCardIcon>
                  <GiRock />
                </PostCardIcon>
                <PostCardPlan>Don't be</PostCardPlan>
                <PostCardCost>Afraid</PostCardCost>
                <PostCardLength>to be seen trying</PostCardLength>
                <PostCardFeatures>
                  <PostCardFeature>A Philosophy</PostCardFeature>
                  <PostCardFeature>of trying things</PostCardFeature>
                  <PostCardFeature>without being afraid</PostCardFeature>
                </PostCardFeatures>
                <Button primary>View Post</Button>
              </PostCardInfo>
            </PostCard>
            <PostCard to='/edupost'>
              <PostCardInfo>
                <PostCardIcon>
                  <GiCrystalBars />
                </PostCardIcon>
                <PostCardPlan>Academia: </PostCardPlan>
                <PostCardCost>Struggle </PostCardCost>
                <PostCardLength>of Pursuing Higher Education</PostCardLength>
                <PostCardFeatures>
                  <PostCardFeature>A Philosophy</PostCardFeature>
                  <PostCardFeature>of academia</PostCardFeature>
                  <PostCardFeature>and its purposes</PostCardFeature>
                </PostCardFeatures>
                <Button primary>View Post</Button>
              </PostCardInfo>
            </PostCard>
            <PostCard to='/moneypost'>
              <PostCardInfo>
                <PostCardIcon>
                  <GiCutDiamond />
                </PostCardIcon>
                <PostCardPlan>Money:</PostCardPlan>
                <PostCardCost>Monetary</PostCardCost>
                <PostCardLength>of currency</PostCardLength>
                <PostCardFeatures>
                  <PostCardFeature>A Philosophy</PostCardFeature>
                  <PostCardFeature>of Budgeting</PostCardFeature>
                  <PostCardFeature>and Making Money</PostCardFeature>
                </PostCardFeatures>
                <Button primary>View Post</Button>
              </PostCardInfo>
            </PostCard>
          </PostContainer>
        </PostWrapper>
      </PostSection>
    </IconContext.Provider>
  );
}
export default Post;
