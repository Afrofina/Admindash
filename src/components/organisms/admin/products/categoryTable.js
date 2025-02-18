import { Image, Input, Button } from '@/components/atoms';
import React from 'react';
import { TextIcon } from '@/components/molecules';
import Link from 'next/link';

export default function Table() {
    return (
        <div className='border border-black rounded-xl relative w-[1200px] lg:w-full overflow-x-auto'>
            <div className="flex flex-col p-3 border-b border-[#333333]">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-[#333333] !text-[18px] custom-font !tracking-widest rounded-xl overflow-hidden">
                        <tr className='bg-[#FFEF8B]'>
                            <th scope="col" className="pl-3  py-5">
                                <div className='flex items-center space-x-3'>
                                    <Input type="checkbox" className="mr-2" />
                                    Product image
                                </div>
                            </th>
                            <th scope="col" className="pr-16 py-5">
                                <p>Vendor</p>
                            </th>
                            <th scope="col" className="pr-6 py-5">
                                <p>Category</p>
                            </th>
                            <th scope="col" className="pr-24 pl-4 py-5">
                                <p>Sub-category</p>
                            </th>
                            <th scope="col" className=" pl-6 pr-4 py-5">
                                <p>Tags</p>
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="flex flex-col">
                <table className="w-full text-sm text-gray-500 dark:text-gray-400">
                    <tbody>
                        {[0, 1, 2, 3, 4, 5, 6, 8, 9].map((index) => (
                            <tr key={index} className="border-b border-black text-black !text-[20px]">
                                <td className="pl-3 py-4 flex items-center space-x-3">
                                    <Input type="checkbox" className="" />
                                    <Image src={'/admin/products/product.svg'} width={80} />
                                </td>
                                <td className="pr-6 py-4">
                                    Jo-Jewelry
                                </td>
                                <td className="px-6 py-4">
                                    Jewelry
                                </td>
                                <td className="pr-8 py-4">
                                    Watches
                                </td>
                                <td className="px-6 py-4">
                                    <Link href={`/partners/vendors/requests/${index}`} className='flex items-center justify-end space-x-2'>
                                        <span>
                                            <p>watch</p>
                                            <p>watches</p>
                                            <p>Rolex</p>
                                        </span>
                                        <Image src={'/admin/products/right.svg'} width={24} />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='flex items-center space-y-4 justify-between px-5 py-12 w-full'>
                    <Button className="bg-dark px-5 text-white rounded-full py-2 flex flex-row-reverse items-center"
                        isIcon="true"
                        iconSrc="/explore/left.svg">
                        Previous
                    </Button>
                    <div className='flex'>
                        <Button className="bg-white text-black py-1.5 rounded-lg">1</Button>
                        <Button className="bg-black py-1.5 rounded-lg">2</Button>
                        <Button className="bg-white text-black py-1.5 rounded-lg">3</Button>
                        <Image src={'/explore/dots.svg'} width={24} />
                        <Button className="bg-white text-black py-1.5 rounded-lg">4</Button>
                        <Button className="bg-white text-black py-1.5 rounded-lg">5</Button>
                        <Button className="bg-white text-black py-1.5 rounded-lg">6</Button>
                    </div>
                    <Button className="bg-dark px-5 text-white rounded-full py-2 flex items-center"
                        isIcon="true"
                        iconSrc="/explore/right.svg">
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}
6