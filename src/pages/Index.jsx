import { Box, Button, Container, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Box bg="gray.50" minH="100vh">
      <Container maxW="container.lg" py={20}>
        <Stack spacing={8} align="center" textAlign="center">
          <Heading as="h1" size="2xl">
            Hire Top Software Developers
          </Heading>
          <Text fontSize="xl" maxW="600px" color="gray.500">
            Particles is the best place to find and hire top software developers specializing in web technologies like React, Node, .NET, Go and JavaScript.
          </Text>
          <Button as={Link} to="/developers" size="lg" colorScheme="blue" fontWeight="bold" px={8}>
            View Developer Listings
          </Button>
          <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlcnMlMjB3b3JraW5nfGVufDB8fHx8MTcxMzA0ODY0Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Software developers" w="full" maxW="800px" mt={12} />
        </Stack>
      </Container>

      <Box as="footer" bg="gray.100" py={8}>
        <Container maxW="container.lg">
          <Text fontSize="sm">&copy; {new Date().getFullYear()} Particles. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
