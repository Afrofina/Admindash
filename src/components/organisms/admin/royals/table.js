import { Image, Input, Button } from '@/components/atoms'
import React from 'react'
import { TextIcon } from '@/components/molecules'
import Link from 'next/link'
export default function Table() {
    return (

        <div>
            <div class="relative w-[1200px] lg:w-full overflow-x-auto flex flex-col">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="  text-[#333333]  !text-[18px] custom-font border-y border-[#333333] !tracking-widest">
                        <tr>
                            <th scope="col" class="px-6 py-5 flex items-center space-x-3">
                                <Input type="checkbox" class="" />
                                <p>
                                    User
                                </p>
                            </th>
                            <th scope="col" class="px-6 py-5">
                                Subscription Date
                            </th>
                            <th scope="col" class="px-6 py-5 text-center">
                                Next billing
                            </th>
                            <th scope="col" class="px-6 py-5 text-center">
                                Billing amount
                            </th>
                            <th scope="col" class="px-6 py-5 text-center">
                                Status
                            </th>
                            <th scope="col" class="px-6 py-5 text-right">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {[0, 1, 2, 3, 4, 5, 6, 8, 9].map((index) => (
                            <tr class=" border- text-black !text[14px]">
                                <td class="px-6 py-4 flex items-center space-x-3 ">
                                    <Input type="checkbox" class="" />
                                    <p>
                                        Jennifer Lawrence
                                    </p>
                                </td>
                                <td class="px-6 py-4">
                                    07 July, 2023
                                </td>
                                <td class="pl-12 py-4">
                                    07 July, 2023
                                </td>
                                <td class="pl-20 py-4 text-[#039A00]">
                                    $25.44
                                </td>
                                <td class="px-6 py-4">
                                    {index === 0 ? <p className='bg-[#CCCFEB] text-center rounded-full py-1 text-[#000F9A]'>
                                        Ongoing
                                    </p> : <p className='bg-[#CDEBCC] text-center rounded-full py-1 text-[#039A00]'>
                                        Completed
                                    </p>}
                                </td>
                                <td class="px-6 py-4 ">
                                    <Link href={`/royals/detail/${index}`} className='flex items-center justify-end space-x-2'>
                                        <p className='text-[#0028FB] sf-pro !tracking-normal '>View</p>
                                        <Image src={'/admin/shipping/right.svg'} width={18} />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className='flex items-center space-y-4 justify-between px-5 py-12 w-full'>
                    <Button className="bg-dark px-5 text-white rounded-full py-2 flex flex-row-reverse items-center"
                        isIcon="true"
                        iconSrc="/explore/left.svg"
                    >
                        Previous
                    </Button>
                    <div className='flex '>
                        <Button className="bg-white text-black py-1.5 rounded-lg">
                            1
                        </Button>
                        <Button className="bg-black py-1.5 rounded-lg">
                            2
                        </Button>
                        <Button className="bg-white text-black py-1.5 rounded-lg">
                            3
                        </Button>
                        <Image src={'/explore/dots.svg'} width={24} />
                        <Button className="bg-white text-black py-1.5 rounded-lg">
                            4
                        </Button>
                        <Button className="bg-white text-black py-1.5 rounded-lg">
                            5
                        </Button>
                        <Button className="bg-white text-black py-1.5 rounded-lg">
                            6
                        </Button>
                    </div>
                    <Button className="bg-dark px-5 text-white rounded-full py-2 flex items-center"
                        isIcon="true"
                        iconSrc="/explore/right.svg"
                    >
                        Next
                    </Button>
                </div>
            </div>

        </div>
    )
}
