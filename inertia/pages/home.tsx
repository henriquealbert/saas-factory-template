import { Input } from '@/components/input'
import { Head } from '@inertiajs/react'
import { motion } from 'framer-motion'
import { HeroHighlight, Highlight } from '@/components/hero-highlight'
import { Button } from '@/components/button'
import { FeatureSectionCard } from '@/components/feature-section-card'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Head title="Your Growth Engine" />

      <div className="flex flex-col justify-between">
        <HeroHighlight>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-xl md:text-2xl lg:text-4xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
          >
            <h1 className="pt-8 text-center max-w-4xl mx-auto">
              Drive adoption. Reduce churn. Boost revenue.
              <br /> With AI-powered insights for your SaaS.
            </h1>

            <div className="max-w-2xl mx-auto p-4 mt-10 mb-28">
              <h2 className="text-xl px-4 md:text-2xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto">
                <Highlight className="text-black dark:text-white">Join the waitlist</Highlight>
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-base py-1 font-normal relative z-20">
                Get early access to the next generation of user onboarding analytics. <br />{' '}
                Launching beta access early 2025.
              </p>
              <div className="flex items-start gap-2 mt-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-4 relative bg-white z-10 font-normal"
                />

                <Button className="mt-4 relative z-10 group">
                  Join the waitlist{' '}
                  <ArrowRight
                    className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </Button>
              </div>
              <p className="text-neutral-600 mt-1 dark:text-neutral-400 text-xs font-normal relative z-20 text-left">
                We'll send you an email when we launch. No spam, promise.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 2,
              ease: [0.4, 0.0, 0.2, 1],
            }}
          >
            <FeatureSectionCard />
          </motion.div>
        </HeroHighlight>
      </div>
    </>
  )
}
