import 'twin.macro';
import { HOW_IT_WORKS_DATA as DATA } from 'constants/HealthCheck';
import { Box, Circle } from '@chakra-ui/react';
import { useState } from 'react';
import { DefaultLongButton, SliderButton } from 'components/Buttons';
import { HowItWorksCarousel } from 'components/Carousel/HealthCheck';

const HowItWorks = () => {
  const [stateActive, setStateActive] = useState<number>(0);

  return (
    <div tw="flex flex-col-reverse md:flex-row w-full items-center">
      <div tw="flex flex-col w-full md:w-6/12 md:min-h-[363px]">
        <h2 tw="text-[#FF6112] mb-6 md:mb-7 font-bold md:text-4xl text-2xl">How It Works</h2>
        {DATA.map((data, index) => (
          <div tw="flex flex-row w-full justify-start items-start ml-0.5 md:ml-2" key={index}>
            <div tw="mr-2.5 md:mr-5">
              <Circle
                size={'10px'}
                bgColor={data.index == stateActive ? 'sirkaSecondary.500' : 'sirkaSecondary.300'}
                as={'button'}
                onClick={() => (data.index !== stateActive ? setStateActive(data.index) : '')}
              >
                {data.index === stateActive && (
                  <Circle size={'24px'} border={'1px solid #5CA898'} />
                )}
              </Circle>
              {data.index < DATA[DATA.length - 1].index && (
                <Box
                  width={'1px'}
                  height={{
                    md:
                      data.index === 0
                        ? stateActive === 0
                          ? '100px'
                          : '60px'
                        : data.index === 2
                        ? '70px'
                        : '60px',
                    base:
                      data.index === 0
                        ? stateActive === 0
                          ? '80px'
                          : '47px'
                        : data.index === 2
                        ? '70px'
                        : '47px',
                  }}
                  bgColor={'#5CA898'}
                  ml={'4px'}
                />
              )}
            </div>
            <div>
              <DefaultLongButton
                width={{ md: '556px', base: '100%' }}
                fontSize={{ md: '20px' }}
                mt={{ md: '-26px', base: '-23px' }}
                height={{
                  md: data.index === 2 ? '85px' : '62px',
                  base: data.index === 2 ? '85px' : '62px',
                }}
                index={data.index}
                isActive={data.index === stateActive ? true : false}
                setIsActive={setStateActive}
                content={data.content}
              >
                {data.title}
              </DefaultLongButton>
            </div>
          </div>
        ))}
      </div>
      <div tw="flex flex-col items-center justify-center w-full md:w-6/12 md:ml-[110px]">
        <div tw="w-full">
          <HowItWorksCarousel setIsActive={setStateActive} isActive={stateActive} DATA={DATA} />
        </div>
        <SliderButton
          mt={{ md: '24px', base: '8px' }}
          mb={{ md: '0px', base: '24px' }}
          stateActive={stateActive}
          setStateActive={setStateActive}
          DATA={DATA}
        />
      </div>
    </div>
  );
};

export default HowItWorks;
