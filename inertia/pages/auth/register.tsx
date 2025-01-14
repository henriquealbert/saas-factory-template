import { SignupForm } from '@/components/signup-form'
import { Head } from '@inertiajs/react'

export default function Register() {
  return (
    <>
      <Head title="Register" />

      <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
        <div className="w-full max-w-md md:max-w-4xl">
          <SignupForm />
        </div>
      </div>
    </>
  )
}
