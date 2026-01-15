"use client";

import styled from "styled-components";
import Image from "next/image";
import { PageHeader } from "@/app/components/PageHeader";
import { SearchBar } from "../../components/SearchBar";
import BaseLayout from "../../components/BaseLayout";
import backgroundImage from "../../../../public/assets/hero-background.jpg";
import family_house from "../../../../public/assets/family_house.jpg";
import guest_house from "../../../../public/assets/guest_house.jpg";
import villa from "../../../../public/assets/villa.jpg";
import apartment from "../../../../public/assets/apartment.jpg";
import cta_bg from "../../../../public/assets/cta_bg.jpg";

export default function Properties() {
  const pageHeader = {
    heading: "Properties",
    description:
      "Dive into the realm of excellence with our tailored services, meticulously crafted for every space and vision. Discover the unparalleled quality of our offerings.",
  };

  const properties = [
    {
      id: 1,
      title: "Family House",
      price: "Start from ₹75L",
      image: family_house,
    },
    {
      id: 2,
      title: "Apartment",
      price: "Start from ₹65L",
      image: apartment,
    },
    {
      id: 3,
      title: "Guest House",
      price: "Start from ₹75L",
      image: guest_house,
    },
    {
      id: 4,
      title: "villa House",
      price: "Start from ₹95L",
      image: villa,
    },
    {
      id: 5,
      title: "Family House",
      price: "Start from ₹75L",
      image: cta_bg,
    },
    {
      id: 6,
      title: "Apartment",
      price: "Start from ₹65L",
      image: backgroundImage,
    },
  ];

  return (
    <BaseLayout>
      <PageHeader pageHeader={pageHeader} />
      <SectionWrapper>
        <SearchBar />
        <CardsWrapper>
          {properties.map((item) => (
            <Card key={item.id}>
              <ImageWrapper>
                <Image src={item.image} alt={item.title} />
              </ImageWrapper>

              <CardFooter>
                <div>
                  <h4>{item.title}</h4>
                  <span>{item.price}</span>
                </div>
                <SlantedArrowButton>
                  <span className="transition" />→
                </SlantedArrowButton>
              </CardFooter>
            </Card>
          ))}
        </CardsWrapper>
      </SectionWrapper>
    </BaseLayout>
  );
}

const SectionWrapper = styled.section`
  width: 100%;
  padding: 0px 5% 50px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  background: #ffffff;
  transition: all 0.5s ease-in-out;
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.08);
  transition: transform 0.5s ease, box-shadow 0.5s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: none;
    border-bottom: 1.5px solid #cc1e15;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${Card}:hover & img {
    transform: scale(1.05);
  }
`;

const CardFooter = styled.div`
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 4px;
    color: #111827;
  }

  span {
    font-size: 14px;
    color: #6b7280;
  }
`;

const SlantedArrowButton = styled.div`
  width: 44px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(135deg, #cc1e15, #c01209ff);
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  position: relative;

  clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);

  transition: transform 0.5s ease;
  overflow: visible;

  &:hover {
    transform: translateY(-2px);
  }

  &::after {
    content: "";
    position: absolute;
    left: 1%;
    bottom: 1px;
    width: 0;
    height: 2px;
    background-color: #fff;
    transition: width 0.3s ease-in-out, background-color 0.3s ease-in-out;
  }

  &:hover::after {
    width: 60%;
  }
`;
