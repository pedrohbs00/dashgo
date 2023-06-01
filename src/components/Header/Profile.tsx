import { Flex, Avatar, Box, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Pedro Batista</Text>
          <Text color="gray.300" fontSize="small">
            peuhbs@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Pedro Batista"
        src="https://github.com/pedrohbs00.png"
      />
    </Flex>
  );
}
