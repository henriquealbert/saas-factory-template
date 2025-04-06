// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css'

import { MantineProvider } from '@mantine/core'
import { shadcnCssVariableResolver } from './css_variable_resolver'
import { shadcnTheme } from './theme'
import './style.css'

export function StylesProvider({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={shadcnTheme} cssVariablesResolver={shadcnCssVariableResolver}>
      {children}
    </MantineProvider>
  )
}
