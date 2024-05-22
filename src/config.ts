import type { Config } from './types'

export const config: Config = {
  settings: {
    title: 'URL Monitor Pro',
    url: 'https://cf-worker-status-page-pro-production.yunsii.workers.dev',
    displayDays: 90,
    collectResponseTimes: true,
  },
  monitors: [
    {
      id: 'montalti.win',
      url: 'https://montalti.win',
      description: 'Monitoraggio in corso 90gg check ogni 8 min.',
      followRedirect: false,
    },
    {
      id: 'www.montalti.eu',
      url: 'https://www.montalti.eu',
      description: 'Monitoraggio in corso 90gg check ogni 8 min.',
    },

  ],
  monitorsCsvUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSnewwW9OuXgtuutyYSfFJ_AZdI-UpkUjP2wWi-zZWM3MKa8IzBceWCe9qB_-Lmk-S7mSFgqKVnokam/pub?gid=0&single=true&output=csv',
}
