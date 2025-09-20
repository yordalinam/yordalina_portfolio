import styled from "styled-components";


const ContactFooter = styled.footer`
  background: linear-gradient(
    to top,
    rgba(76, 12, 116, 0.8),
    rgba(95, 30, 135, 0)    
  );
  color: #d9aae6;

  @media (max-width: 700px) {
    padding: 35px;
    font-size: 0.9rem;
  }
`;

const DarkerColorContainer = styled.span`
    color: #9240a9;
`
const WrapperInfo = styled.div`
text-align: center;
  font-weight: 600;
  font-size: 1rem;
  border-top: 2px solid #b324d7;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
      padding: 1.5rem;

    @media(max-width: 700px){
        justify-content: center;
        align-items: center;

    }

    @media(max-width: 400px){
      font-size: 0.9rem;
      white-space: nowrap;
    }
`

const ContactTitle = styled.h2`
padding-left: 20px;
  color: #9e22bd;
  font-weight: 700;
  margin-bottom: 1rem;
    @media(max-width: 700px){
        text-align: center;
        padding:0

    }
`;

const ContactInfo = styled.p`
  margin: 0;
`;

export default function Contact() {
    return (
        <>
            <ContactFooter id='contact'>
                <ContactTitle>Contact</ContactTitle>
                <WrapperInfo>
                    <DarkerColorContainer>Front-End Developer</DarkerColorContainer>
                    <ContactInfo><DarkerColorContainer>Address:</DarkerColorContainer> Geo Milev, Sofia, Bulgaria</ContactInfo>
                    <ContactInfo><DarkerColorContainer>Email: </DarkerColorContainer>yordalina.metodieva@gmail.com</ContactInfo>
                    <ContactInfo><DarkerColorContainer>Phone: </DarkerColorContainer> +359 88 777 8321</ContactInfo>
                </WrapperInfo>

            </ContactFooter></>

    );
}
