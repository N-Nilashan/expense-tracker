import { UserButton } from '@clerk/nextjs'
import React from 'react'

const DashboardHeader = () => {
  return (
      <div className='p-5 flex justify-between shadow-sm border-b'>
          <div>
              
          </div>
          <div>
              <UserButton/>
          </div>
    </div>
  )
}

export default DashboardHeader