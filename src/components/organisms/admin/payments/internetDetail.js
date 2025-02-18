import { Button, Image, Text } from '@/components/atoms'
import React from 'react'

export default function InternetDetail() {
    return (
        <div className='pr-12'>
            <div className='flex space-x-5 items-center'>
                <Image src={'/admin/payments/profile.svg'} width={118} />
                <Text className="text-[#333333] !tracking-widest !text-[18px] custom-font">
                    Jenny William
                </Text>
            </div>
            <Text className="text-[#333333] !tracking-widest !text-[18px] custom-font py-4" align="left">
            Internet
            </Text>
            <div className='shadow-md p-4 space-y-4'>
                <div className='flex justify-between items-center'>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                    Network
                    </Text>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                    Mtn
                    </Text>
                </div>
                <div className='flex justify-between items-center'>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                    Network Id/ Number
                    </Text>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                    +233559216045
                    </Text>
                </div>
            </div>
            
            <Text className="text-[#333333] !tracking-widest !text-[18px] custom-font py-4" align="left">
                Amount
            </Text>
            <div className='shadow-md p-4 space-y-4'>
                <div className='flex justify-between items-center'>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        Amount to pay
                    </Text>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        $500
                    </Text>
                </div>
            </div>
            <Button className="w-full bg-black text-white sf-pro text-[16px] py-4 rounded-md mt-8">
                Record Payment
            </Button>
        </div>
    )
}
