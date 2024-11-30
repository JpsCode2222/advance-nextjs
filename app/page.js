'use client'
import axios from "axios";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { ContextData } from "./Helper/Context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function page(){
  const [user,setUser] = useState([]);
  const getUsersData = async()=>{
    let {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUser(data);
  }

  useEffect(()=>{
    getUsersData();
  },[])

  let userName = useContext(ContextData);
  console.log('userName : ',userName)

  let renderJs = <p className="text-black">Users not found !</p>
  if(user.length > 0){
    renderJs = user.map((user,id)=>{
      return <li className="mb-5 text-black" key={id}>{user.username} -: <Link href={`/${user.id}`} className="px-4 py-2 rounded bg-slate-300 text-black">Explore</Link></li>
    })
  }

  const notify = ()=>{
    toast.success('Login Success!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  return(
    <>
    <div className="p-3">
    <h1>Home Page</h1>
    <Link href="/contact" className="text-blue-500"> go to contact page</Link>

    <br/>
    {/* getting user data */}
    <button onClick={getUsersData} className="mt-3 px-4 py-2 bg-slate-300 rounded text-black">Get Data</button>
    <div className="bg-slate-400 p-5 mt-5">
      <ul className="text-black">
        {
         renderJs
        }
      </ul>
    </div>
    <hr/>
    <p>{userName}</p>
    <hr/>
    <br/>
    <button className="px-4 py-2 bg-slate-300 rounded mt-5" onClick={notify}>Toaster</button>
    <ToastContainer/>
    </div>
    </>
  )
}

export default page;