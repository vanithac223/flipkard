'use client'
import React, { useState } from 'react'
import { data } from '../data/data'
let nextid=1;
export default function Table() {
    const [items]=useState(data)
    const[change, setchange]=useState([])
  return (
    <div className='container mx-auto px-40 '>
      <table>
        <thead className='bg-red-600 text-white'>
             <tr>
                <th>id</th>
                <th className='pl-3'>productName</th>
                <th className='pl-3'>productprice</th>
                <th className='pl-3'>image</th>
                <th className='pl-3'>btn</th>
             </tr>
        </thead>
        <tbody className='bg-red-400 text-white'>
               {
                items.map((val)=>{
                    return(
                        <tr key={val.id}>
                            <td>{val.id}</td>
                            <td className='pl-3'>{val.productName}</td>
                            <td className='pl-3'>{val.productprice}</td>
                            <td className='pl-3 w-[10px] h-[15px]'><img src={val.img}/></td>
                            <td className='pl-3'> <button className='hover:text-yellow-400' onClick={()=>{setchange([...change, {id:nextid ++,productName:val.productName,productprice:val.productprice,img:val.img}])}}>{val.btn}</button></td>


                        </tr>
                    )
                }

                )
               }
        </tbody>
      </table>
      <div className='my-11'>
<h3>Add to card</h3>
      </div>
      <table >
        <thead className='bg-red-600 text-white'>
             <tr>
                <th>id</th>
                <th className='pl-3'>productName</th>
                <th className='pl-3'>productprice</th>
                <th className='pl-3'>img</th>
                <th className='pl-3'>btn</th>
             </tr>
        </thead>
        <tbody className='bg-red-400 text-white'>
               {
                change.map((val)=>{
                    return(
                        <tr key={val.id}>
                            <td>{val.id}</td>
                            <td className='pl-3'>{val.productName}</td>
                            <td className='pl-3'>{val.productprice}</td>
                            <td className='pl-3 w-[10px] h-[15px]'><img src={val.img}/></td>
                            <td className='pl-3'> <button className='hover:text-yellow-400'onClick={()=>{setchange(change.filter(a=>a.id !== val.id))}}>Delete</button></td>


                        </tr>
                    )
                }

                )
               }
        </tbody>
      </table>
    </div>
  )
}
