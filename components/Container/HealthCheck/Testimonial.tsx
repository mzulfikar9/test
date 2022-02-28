import 'twin.macro';
import { useState } from 'react';
import { HStack } from '@chakra-ui/react';
import { NextButton, PrevButton } from 'components/Buttons';
import { TestimonialCarousel } from 'components/Carousel/HealthCheck';
import { TESTIMONIAL_DATA as DATA } from 'constants/HealthCheck';

const Testimonial = () => {
  const [stateActive, setStateActive] = useState<number>(0);
  return (
    <div tw="flex flex-col md:flex-row items-center w-full">
      <div tw="flex flex-row md:flex-col w-full md:w-[20%] justify-between md:justify-center mb-7 md:mb-0 items-center md:items-start md:mr-5">
        <h2 tw="text-[#FF6112] md:mb-4 md:mt-5 font-bold md:text-4xl text-2xl "> Testimonial</h2>
        <HStack spacing={'8px'}>
          <PrevButton
            lastIndex={DATA.length}
            stateActive={stateActive}
            setStateActive={setStateActive}
            size={{ md: '32px', base: '32px' }}
            border={'1px solid #FF6112'}
          />
          <NextButton
            lastIndex={DATA.length}
            stateActive={stateActive}
            setStateActive={setStateActive}
            size={{ md: '32px', base: '32px' }}
            border={'1px solid #FF6112'}
          />
        </HStack>
      </div>
      <div tw="flex flex-row w-full md:w-[80%]">
        <TestimonialCarousel isActive={stateActive} setIsActive={setStateActive} DATA={DATA} />
      </div>
    </div>
  );
};

export default Testimonial;
