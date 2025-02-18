import React from 'react'
import { CardShipping } from '../..'
export default function cardOrganism() {
  return (
    <div className='grid grid-cols-3 gap-6 p-8'>
        <CardShipping iconSrc="/admin/shipping/ship.svg" cardColor="!bg-[#82D87F]" title={'Successful Deliveries'} value={'40,000'} isGraph={true}/>
        <CardShipping iconSrc="/admin/shipping/flight.svg" cardColor="!bg-[#FFF980]" title={'On Route Shippings'} value={'$40,000'} isGraph={true}/>
   
        <CardShipping iconSrc="/admin/shipping/wallet.svg" cardColor="border !border-[#333333]" title={'Returned Packages'} value={'40,000'} isGraph={false}/>
   
    </div>
  )
}
