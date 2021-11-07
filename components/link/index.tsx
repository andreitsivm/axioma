import { FC, ReactNode } from 'react';
import NextLink from 'next/link';
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';

interface Props extends LinkProps {
  children: ReactNode;
  href: string;
  isExternal?: boolean;
}

const Link: FC<Props> = ({ isExternal, href, children, ...rest }) => {
  return isExternal ? (
    <ChakraLink isExternal href={href} {...rest}>
      {children}
    </ChakraLink>
  ) : (
    <NextLink href={href}>
      <ChakraLink {...rest}>{children}</ChakraLink>
    </NextLink>
  );
};

export default Link;
