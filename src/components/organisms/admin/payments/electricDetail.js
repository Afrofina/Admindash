import { Button, Image, Text } from '@/components/atoms'
import React from 'react'

export default function ElectricDetail() {
    return (
        <div className='pr-12'>
            <div className='flex space-x-5 items-center'>
                <Image src={'/admin/payments/profile.svg'} width={118} />
                <Text className="text-[#333333] !tracking-widest !text-[18px] custom-font">
                    Jenny William
                </Text>
            </div>
            <Text className="text-[#333333] !tracking-widest !text-[18px] custom-font py-4" align="left">
                Meter details
            </Text>
            <div className='shadow-md p-4 space-y-4'>
                <div className='flex justify-between items-center'>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        Meter ID
                    </Text>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        1548421s5
                    </Text>
                </div>
                <div className='flex justify-between items-center'>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        Name on meter
                    </Text>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        Julian
                    </Text>
                </div>
            </div>
            <Text className="text-[#333333] !tracking-widest !text-[18px] custom-font py-4" align="left">
            Meter Address
            </Text>
            <div className='shadow-md p-4 space-y-4'>
              
                <div className='flex justify-between items-center'>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        Address
                    </Text>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        Pantang junction 23
                    </Text>
                </div>
                <div className='flex justify-between items-center'>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        City
                    </Text>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        Adenta pantang
                    </Text>
                </div>
                <div className='flex justify-between items-center'>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        State
                    </Text>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        Greater accra
                    </Text>
                </div>
                <div className='flex justify-between items-center'>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        Zip code
                    </Text>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        2545
                    </Text>
                </div>
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
                        Contact
                    </Text>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        +1 (365) 545-4561
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
