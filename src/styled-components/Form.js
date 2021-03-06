import styled from 'styled-components';

export const FormCont = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;  
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
  padding: 3rem;
`;

export const Form = styled.form`  
  width: 500px;
  padding-bottom: 10%; 
`;

export const Title = styled.h1`
   margin-bottom: 3rem;
   font-size: 2rem;
   @media screen and (max-width: 720px) {
    margin-bottom: 1.2rem;
    font-size: 1.5rem;
  }
`;

export const Input = styled.input`
  border: 0px solid black;
  border-bottom: 2px solid #79CF98;
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem 0 0.3rem 0;
  font-size: 1.2rem;
  @media screen and (max-width: 720px) {
    margin-bottom: 0.7rem;
    font-size: 1rem;
  }
`;

export const Label = styled.label`
   display: block;
   width: 100%;
   padding: 0.7rem 1rem 0.5rem 0;  
`;

export const SubmitButton = styled.input`
  background-color: #79CF98;
  color: white;
  padding: 0.7rem;
  width: 100%;  
  border: none;
  border-radius: 15px;
  font-size: 1.3rem;
  margin: 1.5rem auto 0.5rem;
  box-shadow: 2px 2px 3px gray;
  cursor: pointer;
  @media screen and (max-width: 720px) {
    margin: 1rem auto 0.5rem;
    font-size: 1rem;
  }
`;

export const BtnDisabled = styled.input`
  background-color: #E4EBE6;
  color: white;
  padding: 0.7rem;
  width: 100%;  
  border: none;
  border-radius: 15px;
  font-size: 1.3rem;
  margin: 1.5rem auto 0.5rem;  
`;

export const Text = styled.p`
  text-align: right;    
`;

export const TextBottom = styled.p`
  text-align: center;
  padding-top: 0.7rem;
`;