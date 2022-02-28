import { styled } from 'twin.macro';
import { WhiteButton } from 'components/Buttons/WhiteButton';
import { HeadlineText } from 'components/Texts';

const HealthCheckLanding = () => {
  return (
    <div tw="flex flex-col-reverse md:flex-row w-full">
      <div tw="flex flex-col justify-center items-start md:items-center bg-[#FF6112] h-[230px] md:h-[690px] rounded-bl-[30px] md:rounded-bl-[100px] w-[100%] md:w-[50%] px-4 md:px-0 pt-4 md:pt-0 pb-6 md:pb-0">
        <div tw="flex flex-col w-[100%] md:w-[70%]">
          <HeadlineText
            headLineFontSize={{ base: '28px', md: '48px' }}
            descFontSize={{ base: '16px', md: '20px' }}
            titleColor={'white'}
            descColor="white"
            spacing={{ md: '12px', base: '8px' }}
            mb={{ md: '24px', base: '24px' }}
            title="Become The Better Version Of Yourself"
            desc="Being health is one of the best investments for your life"
          />
          <a href={'/employee-health-check/assessment'} rel="noreferrer">
            <WhiteButton
              width={{ md: '392px', base: '242px' }}
              height={{ md: '60px', base: '38px' }}
            >
              Get Your First Assessment
            </WhiteButton>
          </a>
        </div>
      </div>
      <div>
        <LandingBackground />
      </div>
    </div>
  );
};

export default HealthCheckLanding;

const LandingBackground = styled.div`
  width: 100%;
  height: 241px;
  margin-top: 60px;
  background-image: url('/employee-health-check/images/landing-mobile.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 30% 40%;

  @media (min-width: 768px) {
    background-image: url('/employee-health-check/images/landing.png');
    width: 50%;
    position: absolute;
    padding: 0;
    margin-top: 0;
    background-position: 40% 20%;
    height: 720px;
    border-radius: 0px 0px 0px 30px;
  }
`;
