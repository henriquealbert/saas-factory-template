import { Link, useForm } from '@inertiajs/react'
import {
  TextInput,
  PasswordInput,
  Button,
  Stack,
  Title,
  Text,
  Box,
  Alert,
  Divider,
  Group,
  Anchor,
} from '@mantine/core'
import { IconAlertCircle } from '@tabler/icons-react'
import { SocialButtons } from '@/components/auth/SocialButtons'

export function LoginForm() {
  const form = useForm({
    email: '',
    password: '',
    remember: false,
  })

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    form.post('/login')
  }

  const alertError =
    (form.errors as Record<string, string>)?.['E_INVALID_CREDENTIALS'] ||
    (form.errors as Record<string, string>)?.['E_TOO_MANY_REQUESTS']

  return (
    <Box p={{ base: 'md', md: 'lg' }}>
      <form onSubmit={onSubmit}>
        <Stack gap="md">
          <Stack align="center" gap="xs">
            <Title order={2}>Welcome back</Title>
            <Text size="sm" c="dimmed" ta="center">
              Login to your Acme Inc account
            </Text>
          </Stack>

          {alertError && (
            <Alert color="red" title="Error" icon={<IconAlertCircle size={16} />} variant="light">
              {alertError}
            </Alert>
          )}

          <TextInput
            label="Email"
            placeholder="your@email.com"
            type="email"
            required
            value={form.data.email}
            onChange={(e) => form.setData('email', e.target.value)}
            error={form.errors.email}
          />

          <Box>
            <Group justify="space-between" mb={5}>
              <Text component="label" htmlFor="password" size="sm" fw={500}>
                Password
              </Text>
              <Anchor component={Link} href="/forgot-password" size="xs" underline="hover">
                Forgot your password?
              </Anchor>
            </Group>
            <PasswordInput
              id="password"
              placeholder="Your password"
              required
              value={form.data.password}
              onChange={(e) => form.setData('password', e.target.value)}
              error={form.errors.password}
            />
          </Box>

          <Button type="submit" fullWidth>
            Login
          </Button>

          <Divider label="Or continue with" labelPosition="center" />

          <SocialButtons />

          <Text ta="center" size="sm">
            Don&apos;t have an account?{' '}
            <Anchor component={Link} href="/register" underline="hover">
              Sign up
            </Anchor>
          </Text>
        </Stack>
      </form>
    </Box>
  )
}
