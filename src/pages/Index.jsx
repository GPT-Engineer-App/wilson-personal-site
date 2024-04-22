// Personal website for Woodrow Wilson
import { Box, Flex, Heading, Text, Image, Link, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaBirthdayCake, FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" align="center" maxW={{ xl: "1200px" }} m="0 auto" p={5}>
      <Box textAlign="center" py={10}>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1580128637001-1399bb876889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxXb29kcm93JTIwV2lsc29ufGVufDB8fHx8MTcxMzc2ODM0OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Woodrow Wilson" mb={4} />
        <Heading as="h1" size="xl">
          Woodrow Wilson
        </Heading>
        <Text fontSize="lg" color="gray.500">
          Historian, Educator, and Politician
        </Text>
      </Box>

      <Box py={5}>
        <VStack spacing={3} alignItems="flex-start">
          <HStack>
            <Icon as={FaBirthdayCake} w={5} h={5} />
            <Text>December 28, 1856</Text>
          </HStack>
          <HStack>
            <Icon as={FaMapMarkerAlt} w={5} h={5} />
            <Text>Staunton, Virginia, USA</Text>
          </HStack>
          <HStack>
            <Icon as={FaEnvelope} w={5} h={5} />
            <Link href="mailto:woodrow.wilson@example.com" isExternal>
              woodrow.wilson@example.com
            </Link>
          </HStack>
        </VStack>
      </Box>

      <Box py={5}>
        <Heading as="h2" size="lg" mb={3}>
          Connect with me
        </Heading>
        <HStack spacing={5}>
          <Link href="https://www.linkedin.com/in/woodrowwilson" isExternal>
            <Icon as={FaLinkedin} w={6} h={6} />
          </Link>
          <Link href="https://twitter.com/woodrowwilson" isExternal>
            <Icon as={FaTwitter} w={6} h={6} />
          </Link>
          <Link href="https://github.com/woodrowwilson" isExternal>
            <Icon as={FaGithub} w={6} h={6} />
          </Link>
        </HStack>
      </Box>

      <Box py={5}>
        <Heading as="h2" size="lg" mb={3}>
          Biography
        </Heading>
        <Text fontSize="md">Woodrow Wilson was the 28th President of the United States, serving from 1913 to 1921. Before his presidency, he was a leading academic and the president of Princeton University. His presidency was marked by significant reforms in the areas of social welfare and foreign policy, with his most notable achievement being the establishment of the League of Nations post-World War I, for which he was awarded the Nobel Peace Prize in 1919.</Text>
      </Box>
    </Flex>
  );
};

export default Index;
