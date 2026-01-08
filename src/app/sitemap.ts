import { MetadataRoute } from 'next';
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";

/**
 * ESSIMU UGANDA - B118 Unit Registry Sitemap
 * Logic: Everyone can view products, but only owners can edit. 
 * This file maps all public viewable units for Google indexing.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://essimu-ug.vercel.app';

  // 1. Core Static Routes (The major pillars of Essimu)
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0, // Primary entry point
    },
    {
      url: `${baseUrl}/smartphones`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9, // High value category
    },
    {
      url: `${baseUrl}/laptops`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9, 
    },
    {
      url: `${baseUrl}/tv`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/accessories`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];

  // 2. Dynamic Hardware Routes (Individual Verified Units)
  let productRoutes: MetadataRoute.Sitemap = [];

  try {
    const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);

    productRoutes = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        url: `${baseUrl}/products/${doc.id}`,
        // Sync lastModified with your Firestore timestamps
        lastModified: data.updatedAt?.toDate() || data.createdAt?.toDate() || new Date(),
        changeFrequency: 'weekly',
        priority: 0.8, // Individual units are highly valuable for "Model Name" searches
      };
    });
  } catch (error) {
    console.error("Sitemap Generation Error:", error);
  }

  // Combine public routes. /admin routes are intentionally excluded to protect Owner-only paths.
  return [...staticRoutes, ...productRoutes];
}