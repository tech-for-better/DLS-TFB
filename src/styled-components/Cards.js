import styled from 'styled-components';

export const QuizContainer = styled.div`
  margin-top: 5rem;
  padding: 0 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center; 

  @media (max-width: 720px) {
    flex-direction: column;
    margin-top: 1rem;
  }
`;

export const ImgCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 35vw;
  margin: 0 1rem;
  background: #2b2a2a;
  padding: 1rem 2rem;
  border-radius: 30px;
  color: #70bf81;
  /* border: red solid 3px; */
  @media (max-width: 720px) {
    width: 100%;
    margin: 0;
    paddin: 0;
  }
`;

export const ChoiceCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || '25vw'};
  margin: 0 5rem;
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 720px) {
    width: 100%;
    margin: 0.5rem;
  }
`;

export const QuestionBtn = styled.button`
  border: 5px solid #2b2a2a;
  display: block;
  width: ${(props) => props.width || '70%'};
  /* height: auto; */
  margin: 0.7rem;
  background: ${(props) => props.background || 'transparent'};
  padding: 1.2rem;
  border-radius: 7px;
  border: dashed 1px #70bf81;
  box-shadow: 6px 6px #70bf81;
  font-size: 1rem;
  color: #70bf81;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
    box-shadow: 1px 1px #70bf81;
  }
  @media screen and (max-width: 720px) {
    margin: 0.4rem;
    padding: 0.7rem;
    font-size: 0.9rem;
  }
`;

export const Img = styled.img`
  width: 100%;
  margin: 1rem;
  border-radius: 7px;
  box-shadow: 5px 5px #70bf81;
  background-color: white;
  border: dashed 1px black;
`;

export const QuestionText = styled.div`
  width: 90%;
  margin: 1.5rem;
  font-size: 1.5rem;
  @media screen and (max-width: 720px) {
    font-size: 1rem;
  }
`;

export const DscCont = styled.div`  
  width: 65%;
  height: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9px;
  /* box-shadow: 1px 3px 6px gray; */
  @media screen and (max-width: 720px) {
    flex-direction: column;
    width: 95%;
    height: auto;
    padding: 1.7rem 0;
  }
`;

export const ContentCont = styled.div`
  width: 70%;
  margin: 0 1.5rem;
`;

export const Heading = styled.p`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 0px 1px 2px gray;
`;

export const NextBtn = styled.button`
  width: 100%;
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 7px;
  box-shadow: 1px 3px 6px gray;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  &:hover {
    opacity: 0.8;
  }
`;

export const Description = styled.p`
  font-size: 1.3rem;
`;

export const ResultImg = styled.img`
  display: block;
  height: 70%;
  @media screen and (max-width: 720px) {
    width: 100%;
    height: auto;
  }
`;

export const ResultCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  justify-content: start;
  align-items: center;
  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

export const AccountBtn = styled.button`
  padding: 1rem 3rem;
  margin-top: 2rem;
  background-color: #79cf98;
  border: none;
  box-shadow: 1px 3px 6px gray;
  border-radius: 10px;
  font-size: 1rem;
  &:hover {
    opacity: 0.8;
  }
`;
