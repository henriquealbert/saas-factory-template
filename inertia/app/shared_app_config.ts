const appName = import.meta.env.VITE_APP_NAME || 'AdonisJS'

export const sharedAppConfig = {
  title: (title: string) => `${appName} | ${title}`,
}
