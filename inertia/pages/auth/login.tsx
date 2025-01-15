import { LoginForm } from '@/features/auth/login-form'
import { Card, CardContent } from '@/components/ui/card'
import { AuthFooter } from '@/features/auth/auth-footer'
import { Head } from '@inertiajs/react'

export default function Login() {
  return (
    <>
      <Head title="Login" />

      <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
        <div className="w-full max-w-md md:max-w-md">
          <div className="flex flex-col gap-6">
            <Card className="overflow-hidden">
              <CardContent className="grid p-0">
                <LoginForm />
              </CardContent>
            </Card>
            <AuthFooter />
          </div>
        </div>
      </div>
    </>
  )
}
