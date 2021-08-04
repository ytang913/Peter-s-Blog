import React from 'react';
import { useForm } from '@formspree/react';
import { Button } from '../../globalStyles';
import {
    Form,
    FormInput
} from './Footer.elements';

function ContactForm() {
  const [state, handleSubmit] = useForm("xayapeov");
  if (state.succeeded) {
      return <p>Thanks for subscribing!</p>;
  }
  return (
    <Form onSubmit={handleSubmit}>
       <FormInput
        id="email"
        type="email" 
        name="email"
      />
 
       <Button type="submit" disabled={state.submitting}>
        Subscribe
      </Button> 
    </Form>
  );
}
function App() {
    return (
      <ContactForm />
    );
  }
  export default App;