import Image from "next/image";
import styled from "styled-components";
import backgroundImage from "../../../public/assets/hero-background.jpg";

export const ComingSoon = () => {
  const sectionData = {
    heading: "Aarth Realtor, Coming Soon...",
    description:
      "We offer well-planned residential and commercial properties built with quality materials, thoughtful design, and long-term value for families and businesses.",
  };

  return (
    <DisplayWrapper>
      <BackgroundImageWrapper>
        <BackgroundImage src={backgroundImage} alt="Background Image" />
        <Overlay />
      </BackgroundImageWrapper>
      <ContentWrapper>
        <InnerContentWrapper data-aos="fade-right">
          <Heading>{sectionData.heading}</Heading>
          <Description>{sectionData.description}</Description>
        </InnerContentWrapper>
      </ContentWrapper>
    </DisplayWrapper>
  );
};
const DisplayWrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 850px;
  position: relative;
  transition: all 0.5s ease-in-out;
`;

const BackgroundImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease-in-out;
`;

const BackgroundImage = styled(Image)`
  width: 100%;
  height: 100vh;
  max-height: 850px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    object-fit: cover;
  }
`;

const Overlay = styled.div`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;
`;

const ContentWrapper = styled.div`
  max-width: 600px;
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  text-align: start;
  gap: 16px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    max-width: 90%;
    left: 5%;
  }
`;

const InnerContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  text-align: start;
  gap: 16px;
  transition: all 0.5s ease-in-out;
`;

const Heading = styled.h1`
  font-size: 45px;
  color: white;
  transition: all 0.5s ease-in-out;

  @media (max-width: 550px) {
    font-size: 40px;
  }
  @media (max-width: 490px) {
    font-size: 35px;
  }
  @media (max-width: 430px) {
    font-size: 30px;
  }
  @media (max-width: 366px) {
    font-size: 28px;
  }
  @media (max-width: 342px) {
    font-size: 26px;
  }
  @media (max-width: 300px) {
    font-size: 22px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  color: white;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 15px;
  }
  @media (max-width: 768px) {
    font-size: 13px;
  }
  @media (max-width: 426px) {
    font-size: 12px;
  }
`;
