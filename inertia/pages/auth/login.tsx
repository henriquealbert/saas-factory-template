import { Head } from '@inertiajs/react'
import { LoginForm } from '@/components/auth/LoginForm'
import { AuthLayout } from '@/components/auth/AuthLayout'

export default function Login() {
  return (
    <>
      <Head title="Login" />

      <AuthLayout title="Sign in" description="Sign in to use Your SaaS">
        <LoginForm />
      </AuthLayout>
    </>
  )
}
