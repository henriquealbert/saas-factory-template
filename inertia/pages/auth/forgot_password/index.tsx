import { useForm } from '@inertiajs/react'
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
  isSent: boolean
}

export default function ForgotPassword({ isSent }: Props) {
  const form = useForm({
    email: '',
  })

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    form.post('/forgot-password', {
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
                  <Title order={2}>Forgot Your Password?</Title>
                  <Text size="sm" c="dimmed">
                    No worries! Enter your email below and, if we found a matching account, we will
                    send you a password reset link.
                  </Text>
                </Stack>

                {isSent && (
                  <Alert
                    color="blue"
                    title="Please Check Your Email"
                    icon={<IconAlertCircle size={16} />}
                  >
                    We have sent a password reset link to your email. Please check your email and
                    click on the link to reset your password.
                  </Alert>
                )}

                <form onSubmit={onSubmit}>
                  <Stack gap="md">
                    <TextInput
                      label="Email"
                      type="email"
                      required
                      value={form.data.email}
                      onChange={(e) => form.setData('email', e.target.value)}
                      error={form.errors.email}
                    />

                    <Button type="submit" disabled={form.processing}>
                      {form.processing && <IconLoader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Email Reset Link
                    </Button>
                  </Stack>
                </form>
              </Stack>
            </Box>
          </Paper>
        </Stack>
      </Container>
    </Flex>
  )
}
