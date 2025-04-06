import { Head } from '@inertiajs/react'
import { LoginForm } from '@/components/auth/LoginForm'
import { AuthFooter } from '@/components/auth/AuthFooter'
import { Container, Paper, Stack, Flex } from '@mantine/core'

export default function Login() {
  return (
    <>
      <Head title="Login" />

      <Flex
        h="100vh"
        p={{ base: 'md', md: 'xl' }}
        bg="var(--mantine-color-gray-0)"
        align="center"
        justify="center"
      >
        <Container size="lg" px={0}>
          <Stack gap="md">
            <Paper radius="md" withBorder p={0}>
              <LoginForm />
            </Paper>
            <AuthFooter />
          </Stack>
        </Container>
      </Flex>
    </>
  )
}
