import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/login'], // Protect your private registry portal
    },
    sitemap: 'https://essimu-ug.vercel.app/sitemap.xml',
  };
}