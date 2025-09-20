import styled from "styled-components";
import aboutme from "../assets/aboutme.png";

const AboutContainer = styled.div`
min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;

  @media(max-width: 1024px) {
    text-align: center;
     padding: 0 15px;
  }

   @media(max-width: 670px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Image = styled.img`
  @media (min-width: 1025px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 1024px) {
        display: none;
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
    font-size: 16px;
  }
`;


function About() {
  return (
    <AboutContainer id="about" data-aos="fade-right" data-aos-delay="500">
      <Image src={aboutme} alt="Yordalina image" />
      <div>
        <PurpleBlurCircle />
        <Title>About Me</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sequi a quibusdam libero error tempora quo illo delectus est accusantium quisquam dolor aut, voluptate officiis dolorum alias maiores culpa explicabo?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consectetur nemo non eveniet ipsum laboriosam voluptates repellat asperiores id ullam. Esse deserunt similique fuga at nobis neque excepturi deleniti expedita.
          osam voluptates repellat asperiores id ullam. Esse deserunt similique fuga at nobis neque excepturi deleniti expedita.
        </Paragraph>
      </div>
    </AboutContainer>
  );
}

export default About;
