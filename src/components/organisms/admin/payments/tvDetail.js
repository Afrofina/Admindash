import { Button, Image, Text } from '@/components/atoms'
import React from 'react'

export default function tvDetail() {
    return (
        <div className='pr-12'>
            <div className='flex space-x-5 items-center'>
                <Image src={'/admin/payments/profile.svg'} width={118} />
                <Text className="text-[#333333] !tracking-widest !text-[18px] custom-font">
                    Jenny William
                </Text>
            </div>
            <Text className="text-[#333333] !tracking-widest !text-[18px] custom-font py-4" align="left">
                Utility (TV)
            </Text>
            <div className='shadow-md p-4 space-y-4'>
                <div className='flex justify-between items-center'>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        Country
                    </Text>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        Ghana
                    </Text>
                </div>
                <div className='flex justify-between items-center'>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        Date
                    </Text>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        07 July 2023
                    </Text>
                </div>
                <div className='flex justify-between items-center'>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        Network
                    </Text>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        Jennifer williams
                    </Text>
                </div>
                <div className='flex justify-between items-center'>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        Name on account
                    </Text>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        Jennifer williams
                    </Text>
                </div>
                <div className='flex justify-between items-center'>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        Account ID
                    </Text>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        2547781115
                    </Text>
                </div>
                <div className='flex justify-between items-center'>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        Amount  paid
                    </Text>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        $10
                    </Text>
                </div>
            </div>
            <Text className="text-[#333333] !tracking-widest !text-[18px] custom-font py-4" align="left">
                Note
            </Text>
            <div className='shadow-md p-4'>
                <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                    Please give this number a call letting them him know that Tv utility has
                    been paid
                </Text>
            </div>
            <Button className="w-full bg-black text-white sf-pro text-[16px] py-4 rounded-md mt-8">
                Record Payment
            </Button>
        </div>
    )
}
