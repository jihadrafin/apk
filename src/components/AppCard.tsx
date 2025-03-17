import React from 'react';
import { Download } from 'lucide-react';
import type { Post } from '../types';

interface AppCardProps {
  post: Post;
}

export default function AppCard({ post }: AppCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img 
        src={post.thumbnail} 
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span>{post.version}</span>
          <span>{post.apkSize}</span>
          <span>{post.category}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {post.downloads.toLocaleString()} downloads
          </span>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-purple-700 transition-colors">
            <Download className="w-4 h-4" />
            <span>Download</span>
          </button>
        </div>
      </div>
    </div>
  );
}