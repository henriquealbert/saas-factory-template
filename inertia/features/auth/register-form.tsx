import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SocialButtons } from '@/components/ui/social-buttons'
import { Link, useForm } from '@inertiajs/react'
import { FormItem, FormLabel, FormMessage } from '@/components/ui/form'

export function RegisterForm() {
  const form = useForm({
    email: '',
    password: '',
  })

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    form.post('/register')
  }

  return (
    <form className="p-6 md:p-8" onSubmit={onSubmit}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold">Create your free account</h1>
          <p className="text-balance text-sm text-muted-foreground">
            Insert your email and password to create your account
          </p>
        </div>
        <div className="grid gap-2">
          <FormItem>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              value={form.data.email}
              onChange={(e) => form.setData('email', e.target.value)}
            />
            {form.errors.email && <FormMessage>{form.errors.email}</FormMessage>}
          </FormItem>
        </div>
        <FormItem>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            type="password"
            value={form.data.password}
            onChange={(e) => form.setData('password', e.target.value)}
          />
          {form.errors.password && <FormMessage>{form.errors.password}</FormMessage>}
        </FormItem>
        <Button type="submit" className="w-full">
          Create your account
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
        <SocialButtons />
        <div className="text-center text-sm">
          Already have an account?{' '}
          <Link href="/login" className="underline underline-offset-4">
            Sign in
          </Link>
        </div>
      </div>
    </form>
  )
}
