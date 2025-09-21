import styled from "styled-components";
import aboutme from "../assets/aboutme2.png";


const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
      text-align: center;
      padding-top: 64px;

  @media(max-width: 1024px) {
    text-align: center;
     padding: 0 35px;
  }

   @media(max-width: 670px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 80px;
    padding-left: 35px;
    padding-right: 35px;
  }

`;

const PurpleBlurCircle = styled.div`
  position: absolute;
  z-index: 0;
  width: 10rem;
  height: 10rem;
  background-color: #cd3cf5;
  border-radius: 9999px;
  filter: blur(3rem);
  opacity: 0.5;
  top: 8rem;
  right: 8rem;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #d9aae6;

  @media (max-width: 408px) {
    font-size: 22px
  }
`;

const Paragraph = styled.p`
  font-size: 20px;
  color: #e5e7eb;
  max-width: 500px;

   @media (max-width: 400px) {
    font-size: 18px;
  }
`;

const TextTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

function About() {
  return (
    <AboutContainer id="about" data-aos="fade-right" data-aos-delay="500">
 
      
               <PurpleBlurCircle />
           <Title>About Me</Title>
          <Paragraph>
I first discovered programming as a hobby, but my excitement quickly turned it into a career — one of the best decisions I’ve ever made.
<br></br>
<br></br>
What I love most is the process: solving problems piece by piece, like assembling a puzzle, until something bigger comes to life. That same passion shows up in my hobbies too — from LEGO and board games to puzzles and painting by numbers. I’m consistent, focused, and dedicated, qualities that help me thrive as a developer and push projects through to completion.        </Paragraph>
   
    </AboutContainer>
  );
}

export default About;
