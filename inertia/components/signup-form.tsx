import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SocialButtons } from '@/components/ui/social-buttons'
import { DotPattern } from '@/components/ui/dot-pattern'
import { Check } from 'lucide-react'
import PasswordInput from '@/components/ui/password-input'
import { Link } from '@inertiajs/react'

export function SignupForm({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Create your free account</h1>
                <p className="text-balance text-sm text-muted-foreground">
                  Insert your email and password to create your account
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@acme.com" required />
              </div>
              <PasswordInput />
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
          <div className="relative border-l bg-muted/40 dark:bg-muted md:block p-8 flex flex-col justify-center">
            <DotPattern
              className={cn(
                '[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]'
              )}
            />
            <div className="relative z-10 h-full flex flex-col justify-center">
              <h2 className="text-lg font-bold mb-8 text-center text-foreground">
                What you'll get after signing up:
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-foreground">
                  <div className="h-6 w-6 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-emerald-500" aria-hidden="true" />
                  </div>
                  <span className="text-sm">Try out features instantly in the Playground</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <div className="h-6 w-6 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-emerald-500" aria-hidden="true" />
                  </div>
                  <span className="text-sm">Create custom widgets - no coding needed</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <div className="h-6 w-6 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-emerald-500" aria-hidden="true" />
                  </div>
                  <span className="text-sm">Work together with your team members</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <div className="h-6 w-6 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-emerald-500" aria-hidden="true" />
                  </div>
                  <span className="text-sm">Get access to our extensive library of widgets</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <div className="h-6 w-6 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-emerald-500" aria-hidden="true" />
                  </div>
                  <span className="text-sm">Install our SDK and integrate with your app</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By clicking continue, you agree to our <a href="#">Terms of Service</a> and{' '}
        <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}
