import { Head } from '@inertiajs/react'
import { AuthFooter } from '@/components/auth/AuthFooter'
import { RegisterForm } from '@/components/auth/RegisterForm'
import { RegisterSection } from '@/components/auth/RegisterSection'
import { Container, Paper, Stack, Flex, Grid } from '@mantine/core'

export default function Register() {
  return (
    <>
      <Head title="Register" />

      <Flex h="100vh" p={{ base: 'md', md: 'xl' }} bg="gray.0" align="center" justify="center">
        <Container size="lg" px={0}>
          <Stack gap="md">
            <Paper radius="md" withBorder p={0}>
              <Grid p={0} gutter={0}>
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <RegisterForm />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <RegisterSection />
                </Grid.Col>
              </Grid>
            </Paper>
            <AuthFooter />
          </Stack>
        </Container>
      </Flex>
    </>
  )
}
