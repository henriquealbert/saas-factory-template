import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SocialButtons } from '@/components/ui/social-buttons'
import { Link, router } from '@inertiajs/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, LoginSchema } from '@/schemas/login_schema'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormMessage,
  FormLabel,
  FormField,
  FormItem,
  FormControl,
} from '@/components/ui/form'

export function LoginForm() {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function onSubmit(values: LoginSchema) {
    router.post('/api/v1/auth/login', values)
  }

  return (
    <Form {...form}>
      <form className="p-6 md:p-8" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="text-balance text-muted-foreground">Login to your Acme Inc account</p>
          </div>
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john@acme.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Password</FormLabel>
                    <Link
                      href="/forgot-password"
                      className="text-sm underline-offset-2 hover:underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
          <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
            <span className="relative z-10 bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
          <SocialButtons />
          <div className="text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="underline underline-offset-4">
              Sign up
            </Link>
          </div>
        </div>
      </form>
    </Form>
  )
}
