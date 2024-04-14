import { Box, Button, Container, Heading, HStack, Input, SimpleGrid, Tag, TagLabel, Text, Textarea } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const developers = [
  {
    id: 1,
    name: "John Smith",
    location: "New York, NY",
    specialties: ["React", "Node.js", "JavaScript"],
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus hendrerit nunc, in vehicula velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean euismod justo eget velit iaculis, a dictum est egestas.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    location: "San Francisco, CA",
    specialties: ["Python", "Data Science", "Machine Learning"],
    bio: "Praesent luctus erat eu tincidunt ultricies. Donec vitae faucibus dui. Donec condimentum nunc non eros bibendum, at tincidunt eros suscipit. Maecenas sed interdum sapien, ut vehicula quam. Nulla facilisi. Etiam id libero vel odio imperdiet rhoncus.",
  },
];

const DeveloperProfile = () => {
  const { id } = useParams();
  const developer = developers.find((dev) => dev.id === parseInt(id));

  if (!developer) {
    return <Text>Developer not found</Text>;
  }

  return (
    <Box bg="gray.50" minH="100vh" py={8}>
      <Container maxW="container.lg">
        <Heading mb={4}>{developer.name}</Heading>
        <Text fontSize="xl" mb={8}>
          {developer.location}
        </Text>
        <Text mb={8}>{developer.bio}</Text>
        <Heading as="h3" size="md" mb={4}>
          Specialties
        </Heading>
        <HStack mb={8}>
          {developer.specialties.map((spec, i) => (
            <Tag key={i} size="lg" colorScheme="blue">
              <TagLabel>{spec}</TagLabel>
            </Tag>
          ))}
        </HStack>
        <Heading as="h3" size="md" mb={4}>
          Contact {developer.name}
        </Heading>
        <SimpleGrid columns={1} spacing={4} mb={8} maxW="600px">
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" />
          <Textarea placeholder="Message" />
          <Button colorScheme="blue">Send Message</Button>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default DeveloperProfile;
