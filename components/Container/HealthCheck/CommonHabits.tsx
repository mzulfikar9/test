import 'twin.macro';
import { useState } from 'react';
import { Circle, Image } from '@chakra-ui/react';
import { COMMON_HABITS_DATA as DATA } from 'constants/HealthCheck';
import { CommonHabitsCarousel } from 'components/Carousel/HealthCheck';

const CommonHabits = () => {
  const [stateActive, setStateActive] = useState<number>(0);
  const [showMore, setShowMore] = useState<boolean>(false);
  function nextImg() {
    setStateActive(stateActive - 1);
  }
  function prevImg() {
    setStateActive(stateActive + 1);
  }

  return (
    <div tw="flex flex-col items-center justify-start w-full">
      <h2 tw="md:text-4xl text-2xl font-bold text-center text-[#FF6112] mb-5 md:mb-10">
        3 Common Habits That We Often Do
      </h2>
      <div tw="flex flex-col md:flex-row items-center justify-start w-full">
        <CommonHabitsCarousel isActive={stateActive} setIsActive={setStateActive} DATA={DATA} />
        <div tw="flex flex-row self-start md:self-end mb-7 mt-5 w-full md:hidden">
          <Circle
            size={{ md: '48px', base: '24px' }}
            mr={'16px'}
            as="button"
            onClick={() => nextImg()}
          >
            <Image src="/referral/icons/ChevronLeft.svg" alt="button left" />
          </Circle>
          <Circle size={{ md: '48px', base: '24px' }} as="button" onClick={() => prevImg()}>
            <Image src="/referral/icons/ChevronRight.svg" alt="button right" />
          </Circle>
        </div>
        <div tw="md:w-[40%] md:min-h-[380px] flex flex-col items-start md:ml-[72px]">
          {DATA.filter((dataFiltered) => dataFiltered.index === stateActive).map((data) => (
            <div key={data.index}>
              <h4 tw="md:text-2xl text-lg font-bold md:text-[#000000] text-[#FF6112] mb-4 ">
                {data.title}
              </h4>
              <p tw="font-medium text-sm md:text-base mb-6 md:mb-[72px]">{data.desc}</p>
              <p tw="font-bold text-xs">Source</p>
              <div>
                {showMore ? (
                  <p tw="font-normal text-xs">
                    {data.source}{' '}
                    <button
                      onClick={() => setShowMore(false)}
                      tw="font-bold text-xs text-[#FF6112]"
                    >
                      Show less
                    </button>
                  </p>
                ) : (
                  <p tw="font-normal text-xs">
                    {data.sourceLess}...{' '}
                    <button onClick={() => setShowMore(true)} tw="font-bold text-xs text-[#FF6112]">
                      Show more
                    </button>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div tw="md:flex flex-row self-end mt-5 w-[55%] hidden ">
        <Circle
          size={{ md: '30px', base: '40px' }}
          mr={'16px'}
          as="button"
          onClick={() => nextImg()}
        >
          <Image src="/referral/icons/ChevronLeft.svg" alt="button left" />
        </Circle>
        <Circle size={{ md: '30px', base: '40px' }} as="button" onClick={() => prevImg()}>
          <Image src="/referral/icons/ChevronRight.svg" alt="button right" />
        </Circle>
      </div>
    </div>
  );
};

export default CommonHabits;
