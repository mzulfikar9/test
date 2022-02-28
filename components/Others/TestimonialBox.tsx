import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react';
import 'twin.macro';
import { FC } from 'react';

interface TestimonialBoxProps extends ContainerProps {
  data: {
    index: number;
    name: string;
    title: string;
    stars: number;
    imgPath: string;
    content: string;
  };
}

export const TestimonialBox: FC<TestimonialBoxProps> = (props) => {
  const { data, ...rest } = props;
  return (
    <div tw="flex flex-col items-start justify-between w-full md:w-[392px]">
      <div tw="flex flex-row items-start justify-start mb-9 md:mb-10">
        <Image
          src={data.imgPath}
          alt="testi img"
          w={{ md: '82px', base: '68px' }}
          h={{ md: '82px', base: '68px' }}
        />
        <div tw="ml-4 md:ml-6">
          <h4 tw="font-bold text-[#FF6112] mb-1 md:text-2xl text-xl">{data.name}</h4>
          <h6 tw="mb-2 font-bold text-sm md:text-base">{data.title}</h6>
          <HStack>
            {[0, 1, 2, 3, 4].map((index) => (
              <Image src="/employee-health-check/icons/star.svg" alt="stars testi" key={index} />
            ))}
          </HStack>
        </div>
      </div>
      <Image
        alt="quote img"
        src="/employee-health-check/icons/double-quote.svg"
        position={'absolute'}
        mt={{ md: '107px', base: '100px' }}
        ml={'18px'}
      />
      <div tw="px-4 py-5 md:px-5 md:px-7 h-[184px] md:h-[200px] flex flex-col items-center justify-center border-[1px] border-solid border-[#FF6112] rounded-[20px 20px 20px 0px] shadow-[0px 2px 30px rgba(0, 0, 0, 0.05)]">
        <p tw="text-xs md:text-sm font-light md:font-normal text-[#262626]">{data.content}</p>
      </div>
    </div>
  );
};
