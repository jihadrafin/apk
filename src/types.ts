export interface Post {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  apkSize: string;
  version: string;
  category: string;
  publishDate: string;
  downloads: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}