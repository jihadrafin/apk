import { Post } from '../types';

export const posts: Post[] = [
  {
    id: '1',
    title: 'WhatsApp Messenger',
    description: 'The official WhatsApp messaging app. Send messages, make voice and video calls, share photos and documents.',
    thumbnail: 'https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?auto=format&fit=crop&q=80&w=400',
    apkSize: '48.5 MB',
    version: '2.24.3.12',
    category: 'Communication',
    publishDate: '2024-02-15',
    downloads: 158942
  },
  {
    id: '2',
    title: 'Instagram',
    description: 'Share photos and videos, follow friends and celebrities, discover trending content.',
    thumbnail: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=400',
    apkSize: '52.3 MB',
    version: '314.0.0.48',
    category: 'Social',
    publishDate: '2024-02-14',
    downloads: 145723
  },
  {
    id: '3',
    title: 'Minecraft',
    description: 'Create, explore, and survive in a blocky, procedurally-generated 3D world.',
    thumbnail: 'https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?auto=format&fit=crop&q=80&w=400',
    apkSize: '155.8 MB',
    version: '1.20.51.01',
    category: 'Games',
    publishDate: '2024-02-13',
    downloads: 98456
  }
];