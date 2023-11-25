'use client'

import {
  HomeIcon,
  QueueListIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';

import { Button } from '@nextui-org/react';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';

const links = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: HomeIcon
  },
  {
    name: 'Library',
    href: '/dashboard/media-library',
    icon: BookOpenIcon
  },
  {
    name: 'Lists',
    href: '/dashboard/user-lists',
    icon: QueueListIcon
  }
];

export default function NavLinks({ isNavMinimized }: { isNavMinimized: boolean }) {
  const router = useRouter();
  const pathname = usePathname();
  const handleClick = (href: string): void => {
    router.push(href);
  }

  return (
    <>
      {links.map(link => {
        return (
          <li key={link.name}>
            <Button
              onClick={() => handleClick(link.href)}
              href={link.href}
              radius="sm"
              className={clsx(
                "justify-start p-[10px] bg-transparent text-1xl text-slate-400 hover:bg-slate-700 w-full",
                {
                  "bg-slate-700 text-white": pathname === link.href,
                  "md:min-w-0 md:justify-start": isNavMinimized
                }
              )}
            >
              <link.icon className='min-w-[1.25rem] w-5' />
              <span className={clsx(
                {
                  "md:hidden": isNavMinimized
                }
              )}
              >
                {link.name}
              </span>
            </Button>
          </li>
        )
      })}
    </>
  )
}