// 'use client'
import axios from 'axios';
import React from 'react'

const page = async ({params}) => {
    // const { id } = React.use(params)
    const {id} = await params;

    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users/'+id)
  return (
    <div className='p-4'>
        <h1 className='font-bold text-2xl'>{data.name}</h1>
        <p>Company : {data.company.name}</p>
        <p>Email : {data.email}</p>
        <p>Website : <a className='text-blue-500' href={"/"+data.website}>{data.website}</a></p>
        <p>{JSON.stringify(data)}</p>
    </div>
  )
}

export default page