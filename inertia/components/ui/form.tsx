import * as React from 'react'
import { cn } from '@/lib/utils'
import { Label } from './label'

const FormItem = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('space-y-2', className)} {...props} />
}

const FormLabel = React.forwardRef<HTMLLabelElement, React.ComponentProps<typeof Label>>(
  ({ className, ...props }, ref) => {
    return <Label ref={ref} className={cn('', className)} {...props} />
  }
)
FormLabel.displayName = 'FormLabel'

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
})
FormDescription.displayName = 'FormDescription'

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  if (!children) return null

  return (
    <p ref={ref} className={cn('text-sm font-medium text-destructive', className)} {...props}>
      {children}
    </p>
  )
})
FormMessage.displayName = 'FormMessage'

export { FormItem, FormLabel, FormDescription, FormMessage }
