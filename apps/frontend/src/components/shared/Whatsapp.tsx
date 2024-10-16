import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Whatsapp() {
  return (
    <Link href="https://wa.me/558592833518?text=Olá!%20vim%20do%20site%20e%20gostaria%20de%20atendimento" className='fixed bottom-5 right-5 w-16 h-16' target='__blank' >
      <Image src="/whatsapp.png" alt='whatsapp' width={180} height={180}/>
    </Link>
  )
}
