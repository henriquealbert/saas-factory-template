import { Text, Anchor } from '@mantine/core'

export function AuthFooter() {
  return (
    <Text size="xs" c="dimmed" ta="center">
      By clicking continue, you agree to our{' '}
      <Anchor href="#" underline="hover">
        Terms of Service
      </Anchor>{' '}
      and{' '}
      <Anchor href="#" underline="hover">
        Privacy Policy
      </Anchor>
      .
    </Text>
  )
}
