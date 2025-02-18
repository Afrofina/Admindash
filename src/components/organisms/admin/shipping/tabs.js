'use client'
import { Text } from '@/components/atoms'
import React, { useState } from 'react'

export default function Tabs({ tabs }) {
    const [selectedItem, setSelectedItem] = useState(tabs[0])
    return (
        <div className='flex space-x-4 pb-6 px-8'>
            {tabs?.map((val) => (
                <div className='flex flex-col items-start cursor-pointer' onClick={()=>setSelectedItem(val)}>
                    <Text className={`${selectedItem===val?'!text-[#63257B]':'!text-[#333333]'} custom-font !tracking-widest !text-[18px] pb-2`}>
                        {val}
                    </Text>
                    <div className={`w-10 pb-1 ${selectedItem===val?'bg-[#63257B]':'bg-transparent'}`}>

                    </div>
                </div>
            ))}
        </div>
    )
}
