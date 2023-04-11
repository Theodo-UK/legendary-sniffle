'use client';
import { Table } from '@/types';
import Link from 'next/link';
import { useItems } from './utils/react-query-hooks';

export const ItemsList = ({
  initialItems,
}: {
  initialItems: Table<'items'>[];
}) => {
  const { data: items } = useItems(initialItems);
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-baseline">
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Items
        </h1>
        <div>
          <Link
            className="text-white bg-blue-600 rounded px-3 py-2"
            href="/new"
          >
            New Item
          </Link>
        </div>
      </div>
      {items.length ? (
        <div className="list-none space-y-2 m-0 pb-3 divide-y divide-gray-200 bg-white shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          {items.map((item) => (
            <Link
              href={`/item/${item.id}`}
              className="px-3 block cursor-pointer pt-4 pb-3 text-left text-sm font-semibold text-gray-900"
              key={item.id}
            >
              <div className="space-y-2">
                <p className="text-blue-600 text-lg">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>No Items</p>
      )}
    </div>
  );
};
