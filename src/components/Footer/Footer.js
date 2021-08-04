import React from 'react';
import ContactForm from '../../components/Footer/Form';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,

} from './Footer.elements';

function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Click here to subscribe to my blog!
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <ContactForm> </ContactForm>
      </FooterSubscription>
    </FooterContainer>
  );
}

export default Footer;
