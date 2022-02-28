// @ts-nocheck
import { styled } from 'twin.macro';
import React, { FC, useEffect, useRef } from 'react';
import Slider from 'react-slick';

interface SlickCarouselProps {
  DATA: any[];
  setIsActive: any;
  isActive: number;
  [x: string]: any;
}

export const CommonHabitsCarousel: FC<SlickCarouselProps> = (props) => {
  const { DATA, setIsActive, isActive, ...rest } = props;
  const carouselRef = useRef(null);
  useEffect(() => {
    if (carouselRef.current?.slickGoTo) {
      carouselRef.current.slickGoTo(isActive);
    }
    setTimeout(() => 500);
  }, [isActive]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.15,
    centerMode: true,
    slidesToScroll: 1,
    cssEase: 'linear',
    rtl: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  function afterChangeHandler(currentSlide: any) {
    setIsActive(currentSlide);
  }

  return (
    <div tw="w-full md:w-[50%]">
      <Slider ref={carouselRef} {...settings} afterChange={afterChangeHandler}>
        {DATA.map((data, index) => (
          <CarouselContainer key={index}>
            <CarouselImage CarouselImg={data.imgPath} opacity={isActive !== index ? 0.6 : 1} />
          </CarouselContainer>
        ))}
      </Slider>
    </div>
  );
};

type CommonHabitsCarouselProps = {
  CarouselImg: string;
  opacity: number;
};

const CarouselImage = styled.div<CommonHabitsCarouselProps>`
  width: 100%;
  height: 296px;
  background-image: url(${(props) => props.CarouselImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  padding-right: 1px;
  padding-left: 1px;
  opacity: ${(props) => props.opacity};

  @media (min-width: 768px) {
    width: 100%;
    height: 456px;
    margin-left: -16px;
    background-position: 60% 50%;
    padding-right: 10px;
    padding-left: 10px;
  }

  @media (min-width: 1536px) {
    background-size: contain;
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  height: 296px;
  padding-left: 1px;
  padding-rigth: 1px @media (min-width: 768px) {
    width: 50%;
    height: 456px;
    margin-left: 10%;
    padding-left: 10px;
    padding-rigth: 10px;
  }

  @media (min-width: 800px) {
    width: 50%;
    height: 456px;
    margin-left: 3%;
    padding-left: 10px;
    padding-rigth: 10px;
  }

  @media (min-width: 1200px) {
    width: 50%;
    height: 456px;
    margin-left: 30%;
    padding-left: 10px;
    padding-rigth: 10px;
  }

  @media (min-width: 1400px) {
    width: 50%;
    height: 456px;
    margin-left: 41%;
    padding-left: 10px;
    padding-rigth: 10px;
  }

  @media (min-width: 1536px) {
    width: 50%;
    height: 456px;
    margin-left: 45%;
    padding-left: 10px;
    padding-rigth: 10px;
  }
`;
