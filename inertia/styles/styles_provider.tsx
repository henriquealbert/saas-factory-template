// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css'
import '../styles/app.css'

import { MantineProvider } from '@mantine/core'

export function StylesProvider({ children }: { children: React.ReactNode }) {
  return <MantineProvider>{children}</MantineProvider>
}
