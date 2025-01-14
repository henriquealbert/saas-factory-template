import { LoginForm } from '@/components/login-form'
import { Head } from '@inertiajs/react'

export default function Login() {
  return (
    <>
      <Head title="Login" />

      <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
        <div className="w-full max-w-md md:max-w-md">
          <LoginForm />
        </div>
      </div>
    </>
  )
}
