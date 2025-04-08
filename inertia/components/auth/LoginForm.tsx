import { Link, useForm } from '@inertiajs/react'
import {
  TextInput,
  PasswordInput,
  Button,
  Stack,
  Text,
  Alert,
  Anchor,
  Group,
  Checkbox,
} from '@mantine/core'
import { IconAlertCircle, IconChevronRight } from '@tabler/icons-react'

export function LoginForm() {
  const form = useForm<{
    email: string
    password: string
    remember: boolean
  }>({
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
    <form onSubmit={onSubmit}>
      <Stack gap="xl">
        {alertError && (
          <Alert color="red" title="Error" icon={<IconAlertCircle size={16} />} variant="light">
            {alertError}
          </Alert>
        )}

        <TextInput
          label="Email"
          placeholder="your@email.com"
          type="email"
          value={form.data.email}
          onChange={(e) => form.setData('email', e.target.value)}
          error={form.errors.email}
        />

        <PasswordInput
          labelProps={{
            style: {
              width: '100%',
            },
          }}
          label={
            <Group justify="space-between" w="100%">
              <Text component="label" htmlFor="password" size="sm" fw={500}>
                Password{' '}
              </Text>
              <Anchor component={Link} href="/forgot-password" size="sm" underline="hover">
                Forgot your password?
              </Anchor>
            </Group>
          }
          placeholder="Your password"
          value={form.data.password}
          onChange={(e) => form.setData('password', e.target.value)}
          error={form.errors.password}
        />
        <Checkbox
          label="Remember me"
          checked={form.data.remember}
          onChange={(e) => form.setData('remember', e.currentTarget.checked)}
        />

        <Button type="submit" fullWidth mt="md">
          Login <IconChevronRight size={16} />
        </Button>

        <Text size="sm" mt="md" c="dimmed">
          Don&apos;t have an account?{' '}
          <Anchor component={Link} href="/register" underline="hover">
            Create account
          </Anchor>
        </Text>
      </Stack>
    </form>
  )
}
