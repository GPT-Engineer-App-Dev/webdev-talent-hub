import { Box, Container, HStack, Image, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box as="nav" bg="white" borderBottomWidth="1px" py={4}>
      <Container maxW="container.lg">
        <HStack justify="space-between">
          <Image src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMGxvZ298ZW58MHx8fHwxNzEzMDI3MDAwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Particles logo" h={8} />
          <HStack spacing={8}>
            <Link as={RouterLink} to="/">
              Home
            </Link>
            <Link as={RouterLink} to="/developers">
              Developers
            </Link>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navigation;
