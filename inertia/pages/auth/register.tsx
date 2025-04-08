import { Head } from '@inertiajs/react'
import { useForm } from '@inertiajs/react'
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
  Container,
  Flex,
  Image,
  Group,
} from '@mantine/core'
import { Link } from '@inertiajs/react'
import { SocialButtons } from '@/components/auth/SocialButtons'
import { IconArrowRight, IconChevronRight } from '@tabler/icons-react'

export default function Register() {
  const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    form.post('/register')
  }

  return (
    <>
      <Head title="Register" />

      <Flex h="100vh" align="stretch">
        {/* Left side - Form */}
        <Flex direction="column" w="50%" p="xl">
          <Stack gap="xl">
            {/* Logo */}
            <Title order={4} fw="bolder" mb="xl">
              Your SaaS
            </Title>

            <Box mt="xl">
              <Title order={3} fw={300} mb={0}>
                Create account
              </Title>

              <Text c="dimmed">Experience the future of shipping with Your SaaS</Text>
            </Box>

            <form onSubmit={onSubmit}>
              <Stack gap="xl">
                <TextInput
                  label="Name"
                  placeholder="Your name"
                  value={form.data.name}
                  onChange={(e) => form.setData('name', e.target.value)}
                  error={form.errors.name}
                  withAsterisk
                />

                <TextInput
                  label="Email"
                  placeholder="your@email.com"
                  type="email"
                  value={form.data.email}
                  withAsterisk
                  onChange={(e) => form.setData('email', e.target.value)}
                  error={form.errors.email}
                />

                <PasswordInput
                  label="Password"
                  placeholder="Your password"
                  description="Must be at least 12 characters in length"
                  withAsterisk
                  value={form.data.password}
                  onChange={(e) => form.setData('password', e.target.value)}
                  error={form.errors.password}
                />

                <PasswordInput
                  label="Confirm password"
                  placeholder="Confirm your password"
                  withAsterisk
                  value={form.data.password_confirmation}
                  onChange={(e) => form.setData('password_confirmation', e.target.value)}
                  error={form.errors.password_confirmation}
                />

                <Button type="submit" fullWidth mt="md">
                  Continue <IconChevronRight size={16} />
                </Button>

                <Text size="sm" mt="md">
                  By creating an account you agree to our{' '}
                  <Anchor component={Link} href="/terms" underline="hover">
                    Terms of Service
                  </Anchor>{' '}
                  and{' '}
                  <Anchor component={Link} href="/privacy" underline="hover">
                    Privacy Policy
                  </Anchor>
                </Text>

                <Text size="sm" mt="md">
                  Already have an account?{' '}
                  <Anchor component={Link} href="/login" underline="hover">
                    Sign in
                  </Anchor>
                </Text>
              </Stack>
            </form>
          </Stack>

          <Group align="center" mt="auto" justify="space-between">
            <Text size="sm" c="dimmed" ta="center" mt="auto">
              © Your SaaS {new Date().getFullYear()}
            </Text>

            <Group gap="xs">
              <Anchor size="sm" fw={500} component={Link} href="/status" underline="hover">
                Status
              </Anchor>
              <Anchor size="sm" fw={500} component={Link} href="/docs" underline="hover">
                Docs
              </Anchor>
              <Anchor size="sm" fw={500} component={Link} href="/help" underline="hover">
                Help
              </Anchor>
              <Anchor size="sm" fw={500} component={Link} href="/legal" underline="hover">
                Legal
              </Anchor>
            </Group>
          </Group>
        </Flex>

        {/* Right side - Dashboard Preview */}
        <Flex w="50%" bg="gray.1" align="center" justify="center">
          Image
        </Flex>
      </Flex>
    </>
  )
}
