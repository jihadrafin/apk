import React from 'react';
import { Smartphone, GamepadIcon, MessageCircle, Camera, Music, Book, Heart, Settings } from 'lucide-react';

const categories = [
  { icon: Smartphone, name: 'Apps', count: 2451 },
  { icon: GamepadIcon, name: 'Games', count: 1832 },
  { icon: MessageCircle, name: 'Communication', count: 543 },
  { icon: Camera, name: 'Photography', count: 421 },
  { icon: Music, name: 'Music', count: 312 },
  { icon: Book, name: 'Education', count: 289 },
  { icon: Heart, name: 'Lifestyle', count: 276 },
  { icon: Settings, name: 'Tools', count: 654 },
];

export default function CategoryList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map((category) => (
        <div
          key={category.name}
          className="bg-white rounded-lg p-4 flex items-center space-x-3 cursor-pointer hover:shadow-md transition-shadow"
        >
          <category.icon className="w-6 h-6 text-purple-600" />
          <div>
            <h3 className="font-medium text-gray-900">{category.name}</h3>
            <p className="text-sm text-gray-500">{category.count} apps</p>
          </div>
        </div>
      ))}
    </div>
  );
}