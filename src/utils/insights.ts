export interface InsightArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  url: string;
  image: string;
  content?: string[];
  keyTakeaways?: string[];
}

export const PETIK_BLOG_URL = 'https://petiklimited.com/blog';

export const PETIK_INSIGHTS_ARTICLES: InsightArticle[] = [
  {
    id: 'nigerias-january-2027-election-is-closer-to-your-q1-strategy',
    title: 'Nigeria’s January 2027 Election Is Closer to Your Q1 Strategy',
    category: 'Project Management',
    date: 'November 17, 2026',
    readTime: '6 min read',
    excerpt:
      'January is usually a time when property buyers, developers and investors begin putting their plans into action. However, Nigeria’s 2027 election calendar makes the first quarter worth planning carefully.',
    url: 'https://petiklimited.com/nigerias-january-2027-election-is-closer-to-your-q1-strategy/',
    image:
      'https://petiklimited.com/wp-content/uploads/2026/11/Nigerias-January-2027-Election-Is-Closer-to-Your-Q1-Than-You-Think.-Build-in-flexibility-not-panic.jpeg',
  },
  {
    id: 'investing-in-nigeria-q4-2026-naira-yields-and-opportunities',
    title: 'Investing in Nigeria Q4 2026: Naira, Yields, and Opportunities',
    category: 'Property Investment',
    date: 'November 9, 2026',
    readTime: '6 min read',
    excerpt:
      'Nigeria’s investment landscape in the fourth quarter of 2026 presents opportunities alongside important risks. With changing monetary policy, attractive fixed-income yields and ongoing movements in the naira, investors are reconsidering where to put their money and how to protect its value.',
    url: 'https://petiklimited.com/investing-in-nigeria-q4-2026-naira-yields-and-opportunities/',
    image:
      'https://petiklimited.com/wp-content/uploads/2026/11/Investing-in-Nigeria-Q4-2026.jpeg',
  },
  {
    id: 'dangote-refinery-fuel-price-cuts-for-q4-what-you-need-to-know',
    title: 'Dangote Refinery Fuel Price Cuts For Q4: What Developers and Property Owners Need to Know',
    category: 'Construction',
    date: 'November 2, 2026',
    readTime: '10 min read',
    excerpt:
      'Changes in fuel prices can have a significant effect on Nigeria’s construction and property sectors. From transporting building materials to operating generators and construction equipment, fuel remains an important part of project expenditure.',
    url: 'https://petiklimited.com/dangote-refinery-fuel-price-cuts-for-q4-what-you-need-to-know/',
    image:
      'https://petiklimited.com/wp-content/uploads/2026/11/Dangote-Refinery-Fuel-Price-Cuts-For-Q4.jpeg',
  },
  {
    id: 'diaspora-guide-how-to-buy-property-in-nigeria-with-confidence',
    title: 'Diaspora Guide: How to Buy Property in Nigeria with Confidence',
    category: 'Real Estate',
    date: 'October 26, 2026',
    readTime: '10 min read',
    excerpt:
      'For many Nigerians living abroad, buying property back home represents an opportunity to build long-term wealth, secure a future residence or create an additional source of income. However, managing a property transaction from another country can be challenging when you cannot easily visit the site, meet the seller or inspect the documentation in person.',
    url: 'https://petiklimited.com/diaspora-guide-how-to-buy-property-in-nigeria-with-confidence/',
    image:
      'https://petiklimited.com/wp-content/uploads/2026/10/Diaspora-Guide.jpeg',
  },
];

export function getHomepageInsights(
  articles: readonly InsightArticle[] = PETIK_INSIGHTS_ARTICLES,
  limit = 3
): InsightArticle[] {
  return articles.slice(0, limit);
}
