import React from "react";
import propTypes from "prop-types";
import NextLink from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";

const Link = ({ isExternal, href, children, ...rest }) => {
  return isExternal ? (
    <ChakraLink isExternal href={href} {...rest}>
      {children}
    </ChakraLink>
  ) : (
    <NextLink href={href}  passHref>
      <ChakraLink {...rest}>{children}</ChakraLink>
    </NextLink>
  );
};

Link.propTypes = {
  isExternal: propTypes.bool,
  children: propTypes.node,
  href: propTypes.string,

};
Link.defaultProps = {
  isExternal: false,
};
export default Link;
