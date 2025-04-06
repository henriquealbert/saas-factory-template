import { ActionIcon, Group } from '@mantine/core'
import { IconBrandGithub, IconBrandGoogle, IconBrandX } from '@tabler/icons-react'

export function SocialButtons() {
  return (
    <Group grow gap="xs">
      <ActionIcon variant="default" aria-label="Login with Google" size="xl" h="72px" radius="md">
        <IconBrandGoogle color="#DB4437" size={24} stroke={1.3} />
      </ActionIcon>
      <ActionIcon variant="default" aria-label="Login with X" size="xl" h="72px" radius="md">
        <IconBrandX color="#14171a" size={24} stroke={1.3} />
      </ActionIcon>
      <ActionIcon variant="default" aria-label="Login with GitHub" size="xl" h="72px" radius="md">
        <IconBrandGithub color="#000000" size={24} stroke={1.3} />
      </ActionIcon>
    </Group>
  )
}
