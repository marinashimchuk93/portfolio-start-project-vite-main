import React, {ElementRef, useRef} from 'react';
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Button} from "../../../components/Button.ts";
import {Container} from "../../../components/Container.ts";
import {S} from "./Contacts_Styles.ts";
import emailjs from '@emailjs/browser';


export const Contact: React.FC = () => {
  const form = useRef<ElementRef<'form'>>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return

    emailjs
      .sendForm('service_g9ophfl', 'template_q4b52fo', form.current, {
        publicKey: 'AlknMqFi7SZPIuaQD',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    e.target.reset();
  };

  return (
    <S.Contact id="contact">
      <Container>
        <SectionTitle>Contact me</SectionTitle>
        <S.Form
          ref={form}
          onSubmit={sendEmail}
        >
          <S.Label>Name
            <S.Field
              required
              type="text"
              name="name"
            />
          </S.Label>
          <S.Label>Email
            <S.Field
              required
              type="email"
              name="email"
            />
          </S.Label>
          <S.Label>Message
            <S.Field
              required
              as={'textarea'}
              name="message"
            />
          </S.Label>
          <Button type={'submit'}>Send</Button>
        </S.Form>
      </Container>
    </S.Contact>
  );
};


