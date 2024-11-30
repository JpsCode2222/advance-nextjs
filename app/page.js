import Link from "next/link";
import React from "react";

function page(){
  return(
    <>
    <h1>Home Page</h1>
    <Link href="/contact" className="text-blue-500"> go to contact page</Link>
    </>
  )
}

export default page;