declare global {
  interface Window {
    dataLayer?: Object[]
    [key: string]: any
  }
}

export type GTMParams = {
  gtmId: string
  dataLayer?: string[]
  dataLayerName?: string
  auth?: string
  preview?: string
  url?: string
}
