import { Button, Image, Text } from '@/components/atoms'
import React from 'react'

export default function SchoolDetail() {
    return (
        <div className='pr-12'>
            <div className='flex space-x-5 items-center'>
                <Image src={'/admin/payments/profile.svg'} width={118} />
                <Text className="text-[#333333] !tracking-widest !text-[18px] custom-font">
                    Jenny William
                </Text>
            </div>
            <Text className="text-[#333333] !tracking-widest !text-[18px] custom-font py-4" align="left">
                Utility (School)
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
                        Institution type
                    </Text>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        University
                    </Text>
                </div>
                <div className='flex justify-between items-center'>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        Institution name
                    </Text>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        University of Ghana
                    </Text>
                </div>
                <div className='flex justify-between items-center'>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        Institution email
                    </Text>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        Admin@UG.com
                    </Text>
                </div>
                <div className='flex justify-between items-center'>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        Institution contact
                    </Text>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        +1 (365) 545-4561
                    </Text>
                </div>
            </div>
            <Text className="text-[#333333] !tracking-widest !text-[18px] custom-font py-4" align="left">
                Institution Address
            </Text>
            <div className='shadow-md p-4 space-y-4'>
                <div className='flex justify-between items-center'>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        Address
                    </Text>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        Mends street 23
                    </Text>
                </div>
                <div className='flex justify-between items-center'>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        City
                    </Text>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        Accra
                    </Text>
                </div>
                <div className='flex justify-between items-center'>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        State or region
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
                        2456
                    </Text>
                </div>
            </div>
            <Text className="text-[#333333] !tracking-widest !text-[18px] custom-font py-4" align="left">
                Student Details
            </Text>
            <div className='shadow-md p-4 space-y-4'>
                <div className='flex justify-between items-center'>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        Student name
                    </Text>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        Mends street 23
                    </Text>
                </div>
                <div className='flex justify-between items-center'>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        Student Id
                    </Text>
                    <Text className="text-[#575757]  !text-[16px] sf-pro " align="left">
                        Accra
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
