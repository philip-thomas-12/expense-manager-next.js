import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function header() {
  return (
    <div className="p-6 flex justify-between items-center border shadow-md">
      <Image src={'./logo.svg'}
      alt='logo'
      width={160}
      height={100}
      /> 
      <Button> Get Started</Button>
    </div>
  )
}

export default header