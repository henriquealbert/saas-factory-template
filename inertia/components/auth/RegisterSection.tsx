import { Box, Title, List, ThemeIcon, Text, Stack } from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'

export function RegisterSection() {
  return (
    <Box
      pos="relative"
      bg="gray.0"
      h="100%"
      p="xl"
      style={{
        'borderLeft': '1px solid var(--mantine-color-gray-2)',
        '@media (max-width: 768px)': {
          borderLeft: 'none',
        },
      }}
    >
      {/* Dot pattern could be replaced with a Mantine component or custom implementation */}

      <Stack justify="center" h="100%" pos="relative" gap="xl">
        <Title order={3} ta="center" mb="lg">
          What you'll get after signing up:
        </Title>

        <List spacing="md">
          <List.Item
            icon={
              <ThemeIcon color="teal" size={24} radius="xl" bg="teal.0">
                <IconCheck size={14} stroke={3} color="var(--mantine-color-teal-6)" />
              </ThemeIcon>
            }
          >
            <Text size="sm">Try out features instantly in the Playground</Text>
          </List.Item>

          <List.Item
            icon={
              <ThemeIcon color="teal" size={24} radius="xl" bg="teal.0">
                <IconCheck size={14} stroke={3} color="var(--mantine-color-teal-6)" />
              </ThemeIcon>
            }
          >
            <Text size="sm">Create custom widgets - no coding needed</Text>
          </List.Item>

          <List.Item
            icon={
              <ThemeIcon color="teal" size={24} radius="xl" bg="teal.0">
                <IconCheck size={14} stroke={3} color="var(--mantine-color-teal-6)" />
              </ThemeIcon>
            }
          >
            <Text size="sm">Work together with your team members</Text>
          </List.Item>

          <List.Item
            icon={
              <ThemeIcon color="teal" size={24} radius="xl" bg="teal.0">
                <IconCheck size={14} stroke={3} color="var(--mantine-color-teal-6)" />
              </ThemeIcon>
            }
          >
            <Text size="sm">Get access to our extensive library of widgets</Text>
          </List.Item>

          <List.Item
            icon={
              <ThemeIcon color="teal" size={24} radius="xl" bg="teal.0">
                <IconCheck size={14} stroke={3} color="var(--mantine-color-teal-6)" />
              </ThemeIcon>
            }
          >
            <Text size="sm">Install our SDK and integrate with your app</Text>
          </List.Item>
        </List>
      </Stack>
    </Box>
  )
}
