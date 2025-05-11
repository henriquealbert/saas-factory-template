import { Group, Avatar, Text, Button, Menu, Box, TextInput } from '@mantine/core'
import { Link } from '@inertiajs/react'

interface User {
  fullName?: string | null
  email: string
}

export function Header() {
  // In a real app, this would come from auth context or props
  const user: User = {
    email: 'henrique@meteor.com',
    fullName: 'Henrique',
  }

  // You should get the initials from the user's name
  const initial = user.fullName?.charAt(0) || user.email.charAt(0).toUpperCase()

  return (
    <Box px="md" h={60}>
      <Group h="100%" justify="space-between">
        {/* Left section */}
        <Group>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <img src="/logo.svg" alt="Logo" width={24} height={24} />
          </Link>
          <Text>{user.fullName}</Text>
        </Group>

        {/* Center section */}
        <Group>
          <TextInput
            placeholder="Search"
            rightSection={
              <Box p={4} style={{ background: '#f1f3f5', borderRadius: 4 }}>
                <Text size="xs" c="gray.6">
                  ⌘K
                </Text>
              </Box>
            }
            styles={{
              input: {
                minWidth: '300px',
                background: 'transparent',
                border: '1px solid #e9ecef',
              },
            }}
          />
        </Group>

        {/* Right section */}
        <Group>
          <Text component={Link} href="/docs" c="gray.6" style={{ textDecoration: 'none' }}>
            Docs
          </Text>
          <Text component={Link} href="/help" c="gray.6" style={{ textDecoration: 'none' }}>
            Help
          </Text>
          <Button component={Link} href="/subscribe" variant="filled" leftSection={<span>↑</span>}>
            Subscribe
          </Button>
          <Menu>
            <Menu.Target>
              <Avatar radius="xl" color="blue">
                {initial}
              </Avatar>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item component={Link} href="/account">
                Account
              </Menu.Item>
              <Menu.Item component={Link} href="/logout" method="post" as="button">
                Sign out
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Group>
    </Box>
  )
}
