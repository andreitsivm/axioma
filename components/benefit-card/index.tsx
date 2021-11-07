import { FC, ReactNode } from 'react';
import { Flex, Text, CSSObject } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
  sx?: CSSObject;
};

const BenefitCard: FC<Props> = ({ children, sx, ...rest }) => (
  <Flex
    width={{ base: '100%', md: '30%' }}
    align="center"
    justify="center"
    flexDirection="column"
    {...rest}
    sx={{
      mb: '22px',
      px: '70.5px',
      py: '22px',
      boxShadow:
        ' 0px 4px 8px rgba(0, 0, 0, 0.12), 0px 8px 16px rgba(0, 0, 0, 0.12), 0px 16px 24px rgba(0, 0, 0, 0.12);',
      ...sx,
    }}
  >
    <Text my={0} as="h3" textAlign="center" fontWeight={600} fontSize="24px" lineHeight="24px">
      {children}
    </Text>
  </Flex>
);

export default BenefitCard;
