import { Link, useForm } from '@inertiajs/react'
import {
  TextInput,
  PasswordInput,
  Button,
  Stack,
  Title,
  Text,
  Box,
  Divider,
  Anchor,
} from '@mantine/core'
import { SocialButtons } from '@/components/auth/SocialButtons'

export function RegisterForm() {
  const form = useForm({
    email: '',
    password: '',
  })

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    form.post('/register')
  }

  return (
    <Box p={{ base: 'md', md: 'lg' }}>
      <form onSubmit={onSubmit}>
        <Stack gap="md">
          <Stack align="center" gap="xs">
            <Title order={2}>Create your free account</Title>
            <Text size="sm" c="dimmed" ta="center">
              Insert your email and password to create your account
            </Text>
          </Stack>

          <TextInput
            label="Email"
            placeholder="your@email.com"
            type="email"
            required
            value={form.data.email}
            onChange={(e) => form.setData('email', e.target.value)}
            error={form.errors.email}
          />

          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            value={form.data.password}
            onChange={(e) => form.setData('password', e.target.value)}
            error={form.errors.password}
          />

          <Button type="submit" fullWidth>
            Create your account
          </Button>

          <Divider label="Or continue with" labelPosition="center" />

          <SocialButtons />

          <Text ta="center" size="sm">
            Already have an account?{' '}
            <Anchor underline="hover" component={Link} href="/login">
              Sign in
            </Anchor>
          </Text>
        </Stack>
      </form>
    </Box>
  )
}
