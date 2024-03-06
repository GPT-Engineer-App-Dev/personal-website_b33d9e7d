// Personal website page component
import { Box, Container, Stack, Heading, Text, Button, Image, Flex, Link, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Box textAlign="center" py={10} px={6}>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1641893588018-b958a5845cab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmYW1vdXMlMjBzY2llbnRpc3QlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MDk3MzMzOTJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Famous Person" mb={4} mx="auto" />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Marie Curie
        </Heading>
        <Text fontSize="xl">Pioneer in the field of radioactivity, two-time Nobel laureate, and an inspiration to scientists everywhere.</Text>
      </Box>

      <Stack as={Box} textAlign={"center"} spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
        <Heading fontWeight={600} fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }} lineHeight={"110%"}>
          Making Science <br />
          <Text as={"span"} color={"green.400"}>
            Accessible
          </Text>
        </Heading>
        <Text color={"gray.500"}>Marie Curie believed in the power of science to change the world and worked tirelessly to bring its wonders to the public. Explore her legacy, her discoveries, and her impact on the scientific community.</Text>
        <Stack direction={"column"} spacing={3} align={"center"} alignSelf={"center"} position={"relative"}>
          <Button
            colorScheme={"green"}
            bg={"green.400"}
            rounded={"full"}
            px={6}
            _hover={{
              bg: "green.500",
            }}
          >
            Learn More
          </Button>
          <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
            View Publications
          </Button>
        </Stack>
      </Stack>

      <Flex align="center" justify="center" my={10}>
        <VStack spacing={5}>
          <Text fontSize="2xl" fontWeight="bold">
            Connect with Marie
          </Text>
          <HStack spacing={5}>
            <Link href="#" isExternal>
              <Icon as={FaTwitter} w={8} h={8} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaInstagram} w={8} h={8} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaLinkedin} w={8} h={8} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaEnvelope} w={8} h={8} />
            </Link>
          </HStack>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;
