import { useForm } from '@inertiajs/react'
import { Link } from '@inertiajs/react'
import {
  TextInput,
  Button,
  Stack,
  Title,
  Text,
  Box,
  Alert,
  Container,
  Flex,
  Paper,
} from '@mantine/core'
import { IconAlertCircle, IconLoader2 } from '@tabler/icons-react'

interface Props {
  value: string
  isValid: boolean
  email: string | null
}

export default function PasswordReset({ value, isValid, email }: Props) {
  const form = useForm({
    value,
    password: '',
  })

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    form.post('/forgot-password/reset', {
      onSuccess: () => form.reset(),
      preserveScroll: true,
    })
  }

  return (
    <Flex h="100vh" p={{ base: 'md', md: 'xl' }} bg="gray.0" align="center" justify="center">
      <Container size="lg" px={0}>
        <Stack gap="md">
          <Paper radius="md" withBorder p={0}>
            <Box p={{ base: 'md', md: 'lg' }}>
              <Stack gap="md">
                <Stack gap="xs">
                  <Title order={2}>Reset Your Password?</Title>
                  <Text size="sm" c="dimmed">
                    Please enter your desired new password below
                  </Text>
                </Stack>

                {!isValid ? (
                  <>
                    <Alert
                      color="red"
                      title="Password Reset Link Invalid"
                      icon={<IconAlertCircle size={18} />}
                    >
                      This password reset link is invalid or has expired. Please try again.
                    </Alert>

                    <Button component={Link} href="/forgot-password">
                      Request New Password Reset Link
                    </Button>
                  </>
                ) : (
                  <form onSubmit={onSubmit}>
                    <Stack gap="md">
                      <TextInput label="Email" type="email" value={email || ''} disabled />

                      <TextInput
                        label="New Password"
                        type="password"
                        required
                        value={form.data.password}
                        onChange={(e) => form.setData('password', e.target.value)}
                        error={form.errors.password}
                      />

                      <Button type="submit" disabled={form.processing}>
                        {form.processing && <IconLoader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Reset Password
                      </Button>
                    </Stack>
                  </form>
                )}
              </Stack>
            </Box>
          </Paper>
        </Stack>
      </Container>
    </Flex>
  )
}
