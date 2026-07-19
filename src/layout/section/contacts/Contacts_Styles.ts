import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";

const Contact = styled.section`
  padding-block: 72px 28px;

  @media ${theme.media.mobile} {
    padding-block: 40px 28px;
  }
`

const Form = styled.form`
  margin: 0 auto;
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  textarea {
    resize: none;
    height: 160px;
  }

  button {
    align-self: flex-end;
  }
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 16px;
  color: ${theme.colors.fontText};
`;

const Field = styled.input`
  margin-top: 8px;
  padding: 7px 15px;
  border: 1px solid ${theme.colors.borderColor};
  border-radius: 8px;
  width: 100%;
  background: ${theme.colors.secondaryBg};
`

export const S = {
  Contact,
  Form,
  Label,
  Field,
}