import { Head } from '@inertiajs/react'
import { Button, Title } from '@mantine/core'

export default function Home() {
  return (
    <>
      <Head title="Home" />

      <Title order={1}>Home</Title>
      <Button>Click me</Button>
    </>
  )
}
