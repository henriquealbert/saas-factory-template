import { cn } from '@/lib/utils'
import { DotPattern } from '@/components/ui/dot-pattern'
import { Check } from 'lucide-react'

export function RegisterSection() {
  return (
    <div className="relative border-l bg-muted/40 dark:bg-muted md:block p-8 flex flex-col justify-center">
      <DotPattern
        className={cn('[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]')}
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
  )
}
