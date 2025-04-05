/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import '../styles/app.css'
import { hydrateRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { sharedAppConfig } from './shared_app_config'

createInertiaApp({
  progress: { color: '#5468FF' },

  title: sharedAppConfig.title,

  resolve: (name) => {
    return resolvePageComponent(`../pages/${name}.tsx`, import.meta.glob('../pages/**/*.tsx'))
  },

  setup({ el, App, props }) {
    hydrateRoot(el, <App {...props} />)
  },
})
