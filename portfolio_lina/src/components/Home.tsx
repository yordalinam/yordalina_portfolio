import styled from "styled-components";
import Navbar from "./Navbar";
import sticker2 from "../assets/sticker2.png";

const HomeWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 10;
padding-top: 5rem;
 

   @media (max-width: 670px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center ;
    } 
`;

const HomeElement = styled.div`
  position: absolute;
  right: 0.5rem;
  top: 7rem;
  height: 18rem;
  width: 32rem;
  border-radius: 1.5rem;
  z-index: 0;
  background: linear-gradient(to right, #5f1e87, #826bc8, #c661d1);
  transform: rotate(45deg);

 
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; 
`;

const HomeContent = styled.section`
  position: relative;
    @media (max-width: 840px) {
    padding: 0 35px } 
`

const BlurCircle = styled.div`
  position: absolute;
  top: 1.25rem;
  left: -3rem;
  width: 15rem;
  height: 15rem;
  background-color: #cd3cf5;
  border-radius: 9999px;
  filter: blur(3rem);
  opacity: 0.5;
  z-index: -10;
`;

const Header = styled.header`
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #d9aae6;

  @media (max-width: 408px) {
    font-size: 22px
  }
`;

const Subtitle = styled.h2`
  font-size: 26px;
  font-weight: 700;
  color: #b324d7;

   @media (max-width: 771px) {
    color: #320b3c;
  }
    @media (max-width: 408px) {
      color: #5c1570;
    font-size: 18px
  }
`;

const Paragraph = styled.p`
  font-size: 20px;
  color: #e5e7eb;
 // margin-bottom: 1.5rem;
  max-width: 500px;

   @media (max-width: 400px) {
    font-size: 16px;
  }
`;

const Image = styled.img`
    @media (min-width: 671px) {
   max-width: 18rem;
   max-height: 18rem  }

  @media (max-width: 670px) {
        display: none;
  }
`;

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeWrap id="home" data-aos="fade-up" data-aos-delay="500">
        <HomeElement />
        <HomeContent >
          <BlurCircle />
          <Header>
            <Title>Yordalina Metodieva</Title>
            <Subtitle>Frontend Developer</Subtitle>
          </Header>
          <ContentWrapper>
            <Paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
              voluptates deleniti a quam sapiente, autem repellat quibusdam vero
              similique placeat, animi officia incidunt veritatis amet quia
              doloribus, enim dolorum quisquam! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Autem animi incidunt tempore minus
              eveniet itaque deserunt laborum ipsum excepturi. Libero, dolor
              dolorem temporibus quae maiores consequatur necessitatibus aut
              velit ad?
            </Paragraph>
            <Image src={sticker2} alt="Yordalina image" />
          </ContentWrapper>
        </HomeContent>
      </HomeWrap>
    </>)
}


