import { FC } from 'react';
import 'twin.macro';
import { Box, Heading } from '@chakra-ui/react';

interface DefaultLongButtonProps extends ButtonProps {
  isActive: boolean;
  setIsActive: any;
  index: number;
  content?: string;
}

export const DefaultLongButton: FC<DefaultLongButtonProps> = (props) => {
  const { children, width, height, index, isActive, setIsActive, content, ...rest } = props;
  return (
    <Box
      p={'16px'}
      bg="transparent"
      zIndex="2"
      borderRadius={20}
      height={height ? height : { base: '80px', md: '62px' }}
      width={width}
      transition="all 0.3s ease-out"
      onClick={() => setIsActive(index)}
      _before={{
        content: "''",
        display: 'inline-block',
        position: 'absolute',
        height: '30px',
        left: '10px',
        right: '10px',
        zIndex: '-1',
        color: '#ABAEB8',
        transition: 'all 0.3s ease-out',
        transform: isActive ? 'scale(1.03)' : '',
        ':before': {
          bottom: '3px',
          filter: 'blur(6px) brightness(1)',
        },
      }}
      _hover={{
        filter: 'brightness(0.9) contrast(1.2)',
        color: '#262626',
        transform: 'scale(1.03)',
        ':before': {
          bottom: '3px',
        },
      }}
      _focus={{
        outline: 'none',
      }}
      justifyContent={'flex-start'}
      {...rest}
    >
      <Heading
        as="h5"
        color={isActive ? '#262626' : '#ABAEB8'}
        fontWeight={700}
        textAlign={'start'}
        fontSize={{ md: '20px', base: '16px' }}
      >
        {children}
      </Heading>
      {isActive && (
        <p tw="mt-0 md:mt-2.5 text-left text-xs md:text-sm font-normal text-black ml-0.5">
          {content}
        </p>
      )}
    </Box>
  );
};
