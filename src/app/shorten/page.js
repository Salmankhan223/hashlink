"use client"                     
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState("")

    const generate = ()=>{
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      const raw = JSON.stringify({
        "url": url,
        "shorturl": shorturl
      });
    
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      fetch("/api/generate", requestOptions)
      .then((response)=> response.json())
      .then((result)=>{
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        seturl("")
        setshorturl("")
        console.log(result)
        alert(result.message)
    })
      .catch((error)=> console.error(error));
    }


  return (
    <div className='bg-indigo-900'>
    <div className='mx-3 md:mx-auto max-w-lg bg-white/50 my-40 p-8 rounded-lg flex flex-col gap-4 '>
        <h1 className='font-bold text-2xl '>Generate your short URLs</h1>
        <div className='flex flex-col gap-3'>
        <input type="text" 
        className='bg-white rounded-md p-2 focus:outline-purple-600 '
        url={url}
        placeholder='Enter your URL' 
        onChange={e=>{seturl(e.target.value)}}/>
        <input type="text" 
        className='p-2 focus:outline-purple-600 bg-white rounded-md'
        url={shorturl}
        placeholder='Enter your  preferred short URL text'
        onChange={e=>{setshorturl(e.target.value)}} />
        <button onClick={generate} className='bg-purple-500 rounded-lg shadow-lg p-3 font-bold py-2 text-white my-3'>Generate</button>
        </div>
        {generated && <> <span className='font-bold text-lg'>Your Link: </span> <code><Link target="_blank" href={generated}>{generated}</Link>
          </code></>}
    </div>
    
          {/* Mini Footer */}
      <footer className="border-t border-gray-200 bg-white py-8 text-center text-sm text-gray-500">
               <Link 
            href="/" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-10 py-3 rounded-lg transition-colors duration-200 inline-block"
          >
            Go to Dashboard
          </Link>
        <p className='mt-5'>&copy; {new Date().getFullYear()} HashLink. All rights reserved.</p>
        
      </footer>
      
    </div>
  )
}

export default Shorten