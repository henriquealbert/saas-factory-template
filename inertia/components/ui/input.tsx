import { cn } from '@/lib/utils'
import * as React from 'react'
import { Label } from './label'

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'> & {
    error?: string
    label?: string | React.ReactNode
  }
>(({ className, type, error, label, ...props }, ref) => {
  const inputClassNames = cn(
    'flex h-9 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50',
    type === 'search' &&
      '[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none',
    type === 'file' &&
      'p-0 pr-3 italic text-muted-foreground/70 file:me-3 file:h-full file:border-0 file:border-r file:border-solid file:border-input file:bg-transparent file:px-3 file:text-sm file:font-medium file:not-italic file:text-foreground',
    !!error &&
      'border-destructive/80 text-destructive focus-visible:border-destructive/80 focus-visible:ring-destructive/20',
    className
  )

  return (
    <div className="space-y-2">
      {label && <Label htmlFor={props.id}>{label}</Label>}
      <input type={type} className={inputClassNames} ref={ref} {...props} />
      {!!error && (
        <p className="mt-2 text-xs text-destructive" role="alert" aria-live="polite">
          {error}
        </p>
      )}
    </div>
  )
})
Input.displayName = 'Input'

export { Input }
