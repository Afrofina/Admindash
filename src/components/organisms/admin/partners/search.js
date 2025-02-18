import React from 'react'
import { Image, Input } from '../../../atoms'
export default function Search({placeholder}) {
    return (
        <div className='flex bg-[#F9EAFF] px-6 py-2 rounded-lg'>
            <Image src={'/header/search.svg'} width={20} height={20} />
            <input className="bg-transparent border-0 focus:outline-none w-full placeholder-[#63257B] text-[#63257B] pl-3" placeholder={placeholder} />
        </div>
    )
}
