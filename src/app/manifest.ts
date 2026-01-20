import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'منصة سباكك | سباك محترف في خدمتك',
    short_name: 'سباكك',
    description: 'اطلب سباك محترف وموثوق في دقائق. خدمتنا سريعة، أسعارنا شفافة، وضماننا أكيد.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F172A',
    theme_color: '#0F172A',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
