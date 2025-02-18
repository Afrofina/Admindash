import React from 'react'
import { Text, Button } from '@/components/atoms'
import Link from 'next/link'
import { TextIcon } from '@/components/molecules'
export default function Profile() {
    return (
        <div className='grid grid-cols-12 gap-4'>
            <div className='!h-[243px] rounded-md col-span-5' style={{ backgroundImage: `url('/ship/agent.png')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>

            </div>
            <div className='flex flex-col col-span-7 justify-between py-4'>
                <div className=' space-y-3'>
                    <div className='flex justify-between items-end'>
                    <Text className="text-black custom-font !text-[16px] !tracking-widest">
                        Jenny William
                    </Text>
                    <TextIcon text="Royal" iconSrc="/admin/shipping/royal.svg" textClass="text-[#B400FF] !text-[16px] sf-pro" mainClass="flex items-center space-x-2" />
                    
                    </div>
                    <TextIcon text="Johnrahul@gmail.com" iconSrc="/ship/message.svg" textClass="text-[#575757] !text-[16px] sf-pro" mainClass="flex items-center space-x-2" />
                    <TextIcon text="+233-559-256-3001" iconSrc="/ship/phone.svg" textClass="text-[#575757] !text-[16px] sf-pro" mainClass="flex items-center space-x-2 pt-1" />
                   
                </div>
                <div>
                    <Button className="w-full border border-black text-black  py-3 !text-[14px] rounded mt-4 ">
                        Chat
                    </Button>
                </div>
            </div>
        </div>
    )
}
