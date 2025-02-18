import React from 'react'
import { Image, Text } from '@/components/atoms'
export default function chatLog() {
    return (
        <div className='border-r border-black h-full flex flex-col '>
            <div className='flex items-center space-x-3 py-5 px-5 w-full'>
                <Text className="!text-[16px] custom-font !tracking-widest text-[#333333]">
                    Vendors
                </Text>
                <Image src={'/admin/support/down.svg'} width={20} />
            </div>
            <div className='flex-grow overflow-scroll space-y-5 px-5'>
                {[0, 2, 33, 3, 33, 3, 33, 3, 3, 3, 33, 3, 3, 3, 3, 3, 33, 33, 3, 3, 3, 3, 3, 3, 33, 3, 3, 3, 3].map(() => (
                    <div className='flex space-x-4'>
                        <Image src={"/admin/support/avatar.svg"} width={42} />
                        <div>
                            <Text className="!text-[14px] custom-font !tracking-widest text-[#333333]" align="left">
                            Erica Terrey
                            </Text>
                            <Text className="!text-[14px] sf-pro text-[#575757]" align="left">
                            Support requests from users and vendors 
                            </Text>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
