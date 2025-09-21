import styled from "styled-components";
import HtmlSvg from "../assets/svgs/Html.tsx";
import JavaScript from '../assets/svgs/Javascript.tsx';
import TypeScript from '../assets/svgs/TypeScript.tsx';
import Docker from '../assets/svgs/Docker.tsx';
import Gatsby from '../assets/svgs/Gatsby.tsx';
import Redux from '../assets/svgs/Redux.tsx';
import MaterialUI from '../assets/svgs/MaterialUI.tsx';
import Git from '../assets/svgs/Git.tsx';
import NextJS from '../assets/svgs/NextJS.tsx';
import Tailwind from '../assets/svgs/Tailwind.tsx';
import CSS from '../assets/svgs/CSS.tsx';
import MongoDB from '../assets/svgs/MongoDB.tsx';

const SkillsWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  color: #d9aae6;
padding: 80px 35px 0 35px;
`;

const BackgroundShape = styled.div`
  position: absolute;
  right: 1rem;
  top: 20%;
  width: 28rem;
  height: 16rem;
  border-radius: 1.5rem;
  background: linear-gradient(to right, #5f1e87, #826bc8, #c661d1);
  transform: rotate(45deg);
  z-index: 0;
  opacity: 0.4;
`;

const BlurCircle = styled.div`
  position: absolute;
  top: 40%;
  left: 3rem;
  width: 14rem;
  height: 14rem;
  background-color: #cd3cf5;
  border-radius: 9999px;
  filter: blur(3rem);
  opacity: 0.5;
  z-index: -10;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #d9aae6;
    font-weight: 700;
  margin-bottom: 2rem;
  z-index: 10;
   @media (max-width: 408px) {
    font-size: 22px
  }
`;

const SkillsContainer = styled.div`
    margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 2rem;
  justify-items: center;
  align-items: center;
  max-width: 900px;
  width: 100%;
  position: relative;
  z-index: 10;
    margin-bottom: 30px;

  @media (max-width: 670px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }
`;

const IconContainer = styled.div`
  width: 130px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #d9aae6;
  transition: color 0.3s ease, filter 0.3s ease;

  &:hover {
    cursor: auto;
    color: #c661d1;
    filter: drop-shadow(0 0 8px #c661d1aa);
  }

  @media (max-width: 400px){
    width: 100px;
height: 100px  }
`;


const TechName = styled.span`
  margin-top: 0.75rem;
  font-size: 1.1rem;
  font-weight: 600;
`;

function Skills() {
    const technologies = [

        { name: "JavaScript", Icon: JavaScript },
        { name: "TypeScript", Icon: TypeScript },
        { name: "Next.js", Icon: NextJS },
        { name: "Tailwind", Icon: Tailwind },
        { name: "CSS", Icon: CSS },
        { name: "HTML", Icon: HtmlSvg },
        { name: "Docker", Icon: Docker },
        { name: "Gatsby", Icon: Gatsby },
        { name: "Redux", Icon: Redux },
        { name: "Material UI", Icon: MaterialUI },
        { name: "Git", Icon: Git },
        { name: "MongoDB", Icon: MongoDB },
    ];

    return (
        <SkillsWrap id='skills' data-aos="fade-right" data-aos-delay="500">
            <BackgroundShape />
            <BlurCircle />
            <Title>Technical Skills</Title>
            <SkillsContainer>
                {technologies.map(({ name, Icon }) => (
                    <IconContainer key={name}>
                        <Icon />
                        <TechName>{name}</TechName>
                    </IconContainer>
                ))}
            </SkillsContainer>
        </SkillsWrap>
    );
}

export default Skills;
