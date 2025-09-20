import styled from "styled-components";
import DatingLogo from '../assets/png/logo_dating.jpg';
import WriteLogo from '../assets/png/writecraft.png';

const ProjectTitleLogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const ProjectTitle = styled.h1`
  color: #9e22bd;
`;

const ProjectsWrap = styled.div`
padding: 64px 15px 0 15px;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #d9aae6;
  overflow: hidden;
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
    font-size: 22px;
  }
`;

const ProjectsContainer = styled.div`
  margin: 30px 0;
  display: flex;
  gap: 2rem;
  width: 90%;
  z-index: 10;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;

  @media (max-width: 850px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;

const ProjectCard = styled.div`
  position: relative;
  background: rgba(95, 30, 135, 0.3);
  border-radius: 1rem;
  padding: 1.5rem;
  color: #e5e7eb;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 300px;
  border: solid 1px #8727a1;;

  @media (max-width: 930px) {
    width: 100%;
    height: 100%;
  }
`;

const ProjectLogo = styled.div`
  height: 5rem;
  width: 5rem;
  margin-bottom: 1rem;
  margin-right: 0.5rem;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    border-radius: 1rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  flex-grow: 1;
  min-height: 120px;
  max-height: 120px;
  overflow-y: auto;

  scrollbar-width: thin;
  scrollbar-color: #b324d7 transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #b324d7;
    border-radius: 3px;
  }
`;

const Technologies = styled.div`
  font-size: 0.9rem;
  margin-bottom: 2rem;
  color: #b324d7;
  font-weight: 600;
`;

const LinkWrapper = styled.a`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  color: #b324d7;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    color: #d84be8;
  }
`;

interface Project {
    logo: string;
    title: string;
    description: string;
    technologies: string;
    link: string;
    linkText: string;
}

const projects: Project[] = [
    {
        logo: `${WriteLogo}`,
        title: 'WriteCraft',
        description:
            "Writecraft is a gamified social network for writers on which I worked (and currently still work), with friends. It has a questing system, an in-game economy and tons of other features for writers and readers.",
        technologies: "React, TypeScript, Styled-components, Express.JS, MongoDB",
        link: "https://writecraft.io/",
        linkText: "View Project",
    },
    {
        logo: `${DatingLogo}`,
        title: 'Shushumushu',
        description:
            "Shushumushu is an anonymous chat website I made with friends - It allows users to share stories and interests and chat anonymously with strangers who share those interests. It keeps usernames and profiles anonymous unless both chatters agree to share them, during the conversation.",
        technologies: "Svelte.js, Tailwind CSS, MongoDB, socket.io",
        link: "https://shushumushu.io/",
        linkText: "View Project",
    },
];

export default function MyProjects() {
    return (
        <ProjectsWrap id="projects" data-aos="fade-right" data-aos-delay="500">
            <BackgroundShape />
            <BlurCircle />
            <Title>My Projects</Title>
            <ProjectsContainer>
                {projects.map(({ logo, title, description, technologies, link, linkText }) => (
                    <ProjectCard key={link}>
                        <ProjectTitleLogoWrapper>
                            <ProjectLogo>
                                <img src={logo} alt="Project logo" />
                            </ProjectLogo>
                            <ProjectTitle>{title}</ProjectTitle>
                        </ProjectTitleLogoWrapper>

                        <ProjectDescription>
                            {description}
                        </ProjectDescription>

                        <Technologies>Technologies: {technologies}</Technologies>
                        <LinkWrapper href={link} target="_blank" rel="noopener noreferrer">
                            {linkText}
                        </LinkWrapper>
                    </ProjectCard>
                ))}
            </ProjectsContainer>
        </ProjectsWrap>
    );
}
