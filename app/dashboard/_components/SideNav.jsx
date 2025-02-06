"use client"    
import React from 'react'
import Image from 'next/image'
import { Gem, HandCoins, LayoutGrid, Receipt } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
import {  usePathname } from 'next/navigation'
import Link from 'next/link'
import DarkModeToggle from './DarkModeToggle'
const SideNav = () => {

    const menuList = [
        {
            id: 1,
            name: 'Dashboard',
            icon: LayoutGrid,
            path: '/dashboard'
        },
        {
            id: 2,
            name: 'Budget',
            icon: HandCoins,
            path: '/dashboard/budget'

        },
         {
            id: 3,
            name: 'Expenses',
            icon: Receipt,
            path: '/dashboard/expenses'

        },
        //   {
        //     id: 4,
        //     name: 'Pro Version',
        //     icon: Gem,
        //     path: '/dashboard/pro'

        // }
    ]
        const path = usePathname()
        
  return (
      <div className='h-screen p-5  bg-[#D7CCC8]'>
          <div className='ml-16'>
              <Image src={'logo2.svg'}
              alt='logo'
              width={80}
              height={200}
          />
          </div>
          <div className='mt-5 '>
              {menuList.map((menu) => (
                <Link key={menu.id} href={menu.path}>
                  <h2 className={`text-[#3E2723] mb-2
                  flex gap-2 items-center  p-5 cursor-pointer rounded-md
                  ${path == menu.path && ''}
                  `}>
                      <menu.icon/>
                      {menu.name}
                  </h2>
                </Link>
              ))}
          </div>
          <div>
              <DarkModeToggle/>
          </div>
          <div className='fixed bottom-10 p-5 flex gap-2 items-center'>
              <UserButton text-[#3E2723]/>
              Profile
          </div>
     </div>
  )
}

export default SideNav