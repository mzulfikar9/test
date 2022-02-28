import 'twin.macro';
import { Image } from '@chakra-ui/react';
import { OrangeButton } from 'components/Buttons';

const HealthCheckFooter = () => {
  return (
    <div tw="flex flex-col md:flex-row items-start justify-start bg-[#EDF9F6] w-full mt-10 md:mt-0 h-[390px] md:h-[330px]">
      <Image
        alt="health check footer"
        src="/employee-health-check/images/health-check-footer.png"
        height={{ md: '330px', base: '175px' }}
        width={{ md: '648px', base: '100%' }}
      />
      <div tw="flex flex-col items-start justify-center md:ml-[60px] py-6 md:py-12 max-w-full md:max-w-[496px] px-4 md:px-0">
        <h1 tw="text-4xl md:text-5xl text-[#FF6112] font-bold">Lets Get Started</h1>
        <p tw="text-sm md:text-base text-black font-normal mt-4 md:mt-5 mb-6 md:mb-10">
          {' '}
          And you&apos;ll get personalised diet plan by our Registered Dietitian/Nutritionist.
        </p>
        <a href={'/employee-health-check/assessment'} rel="noreferrer">
          <OrangeButton
            width={{ md: '392px', base: '242px' }}
            height={{ md: '62px', base: '38px' }}
          >
            Get Your First Assessment
          </OrangeButton>
        </a>
      </div>
    </div>
  );
};

export default HealthCheckFooter;
