import { ActionIcon, Group } from '@mantine/core'
import { IconBrandGithub, IconBrandGoogle, IconBrandX } from '@tabler/icons-react'

export function SocialButtons() {
  return (
    <Group grow gap="xs">
      <ActionIcon
        variant="outline"
        aria-label="Login with Google"
        color="gray.2"
        size="xl"
        h="52px"
        radius="md"
      >
        <IconBrandGoogle color="#DB4437" size={18} stroke={1.3} />
      </ActionIcon>
      <ActionIcon
        variant="outline"
        aria-label="Login with X"
        color="gray.2"
        size="xl"
        h="52px"
        radius="md"
      >
        <IconBrandX color="#14171a" size={18} stroke={1.3} />
      </ActionIcon>
      <ActionIcon
        variant="outline"
        aria-label="Login with GitHub"
        color="gray.2"
        size="xl"
        h="52px"
        radius="md"
      >
        <IconBrandGithub color="#000000" size={18} stroke={1.3} />
      </ActionIcon>
    </Group>
  )
}
