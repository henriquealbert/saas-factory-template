// import { Button } from '@/components/ui/button'
// import { FormItem, FormLabel, FormMessage } from '@/components/ui/form'
// import { Input } from '@/components/ui/input'
// import { SocialButtons } from '@/components/ui/social-buttons'
// import { Link, useForm } from '@inertiajs/react'
// import { CircleAlert } from 'lucide-react'

// export function LoginForm() {
//   const form = useForm({
//     email: '',
//     password: '',
//     remember: false,
//   })

//   function onSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault()
//     form.post('/login')
//   }

//   const alertError =
//     (form.errors as Record<string, string>)?.['E_INVALID_CREDENTIALS'] ||
//     (form.errors as Record<string, string>)?.['E_TOO_MANY_REQUESTS']

//   return (
//     <form className="p-6 md:p-8" onSubmit={onSubmit}>
//       <div className="flex flex-col gap-6">
//         <div className="flex flex-col items-center text-center">
//           <h1 className="text-2xl font-bold">Welcome back</h1>
//           <p className="text-balance text-muted-foreground">Login to your Acme Inc account</p>
//         </div>
//         {alertError && (
//           <div className="rounded-lg border border-red-500/50 px-4 py-3 text-red-600">
//             <p className="text-sm">
//               <CircleAlert
//                 className="-mt-0.5 me-3 inline-flex opacity-60"
//                 size={16}
//                 strokeWidth={2}
//                 aria-hidden="true"
//               />
//               {alertError}
//             </p>
//           </div>
//         )}
//         <div className="grid gap-2">
//           <FormItem>
//             <FormLabel htmlFor="email">Email</FormLabel>
//             <Input
//               id="email"
//               type="email"
//               value={form.data.email}
//               onChange={(e) => form.setData('email', e.target.value)}
//             />
//             {form.errors.email && <FormMessage>{form.errors.email}</FormMessage>}
//           </FormItem>
//         </div>
//         <div className="grid gap-2">
//           <FormItem>
//             <div className="flex items-center justify-between">
//               <FormLabel htmlFor="password">Password</FormLabel>
//               <Link href="/forgot-password" className="text-sm underline-offset-2 hover:underline">
//                 Forgot your password?
//               </Link>
//             </div>
//             <Input
//               id="password"
//               type="password"
//               value={form.data.password}
//               onChange={(e) => form.setData('password', e.target.value)}
//             />
//             {form.errors.password && <FormMessage>{form.errors.password}</FormMessage>}
//           </FormItem>
//         </div>
//         <Button type="submit" className="w-full">
//           Login
//         </Button>
//         <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
//           <span className="relative z-10 bg-background px-2 text-muted-foreground">
//             Or continue with
//           </span>
//         </div>
//         <SocialButtons />
//         <div className="text-center text-sm">
//           Don&apos;t have an account?{' '}
//           <Link href="/register" className="underline underline-offset-4">
//             Sign up
//           </Link>
//         </div>
//       </div>
//     </form>
//   )
// }
