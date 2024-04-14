import { Box, Button, Container, Heading, HStack, Input, SimpleGrid, Tag, TagLabel, Text } from "@chakra-ui/react";
import { useState } from "react";

const developers = [
  {
    id: 1,
    name: "John Smith",
    location: "New York, NY",
    specialties: ["React", "Node.js", "JavaScript"],
  },
  {
    id: 2,
    name: "Sarah Johnson",
    location: "San Francisco, CA",
    specialties: ["Python", "Data Science", "Machine Learning"],
  },
];

const DeveloperList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const filterDevelopers = () => {
    let filtered = developers;

    if (searchTerm) {
      filtered = filtered.filter((dev) => dev.name.toLowerCase().includes(searchTerm.toLowerCase()) || dev.location.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    if (specialtyFilter) {
      filtered = filtered.filter((dev) => dev.specialties.includes(specialtyFilter));
    }

    return filtered;
  };

  const paginateDevelopers = () => {
    const filtered = filterDevelopers();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filtered.slice(startIndex, endIndex);
  };

  const handleSpecialtyClick = (specialty) => {
    setSpecialtyFilter(specialty);
    setCurrentPage(1);
  };

  const visibleDevelopers = paginateDevelopers();
  const totalPages = Math.ceil(filterDevelopers().length / itemsPerPage);

  return (
    <Box bg="gray.50" minH="100vh" py={8}>
      <Container maxW="container.lg">
        <Heading mb={8}>Hire Top Software Developers</Heading>

        <HStack mb={8}>
          <Input placeholder="Search by name or location" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          {specialtyFilter && (
            <Tag colorScheme="blue" cursor="pointer" onClick={() => setSpecialtyFilter(null)}>
              <TagLabel>{specialtyFilter}</TagLabel>
            </Tag>
          )}
        </HStack>

        <SimpleGrid columns={[1, 2, 3]} spacing={8} mb={8}>
          {visibleDevelopers.map((dev) => (
            <Box key={dev.id} bg="white" p={4} shadow="md" rounded="md">
              <Heading as="h3" size="md" mb={2}>
                {dev.name}
              </Heading>
              <Text fontSize="sm" color="gray.600" mb={4}>
                {dev.location}
              </Text>
              <HStack mb={4}>
                {dev.specialties.map((spec, i) => (
                  <Tag key={i} size="sm" colorScheme="blue" cursor="pointer" onClick={() => handleSpecialtyClick(spec)}>
                    <TagLabel>{spec}</TagLabel>
                  </Tag>
                ))}
              </HStack>
              <Button as="a" href={`/developers/${dev.id}`} colorScheme="blue">
                Contact
              </Button>
            </Box>
          ))}
        </SimpleGrid>

        {totalPages > 1 && (
          <HStack justify="center">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button key={page} onClick={() => setCurrentPage(page)} variant={page === currentPage ? "solid" : "ghost"}>
                {page}
              </Button>
            ))}
          </HStack>
        )}
      </Container>
    </Box>
  );
};

export default DeveloperList;
