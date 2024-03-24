'use client'
import React, { useState } from 'react'
import Child from '../child/child'

export default function Parent() {
    const change="Sundar"
    const [items, setitems]=useState(change)
  return (
    <div>
      <Child change={change} items={items} onchange={()=>{setitems("amma")}}/>
    </div>
  )
}
