// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div>
//       <main className="bg-purple-100">
//       <section className="grid grid-cols-2 h-[50vh]">
//       <div className=" flex flex-col gap-4 justify-center items-center ">
//      <p className="font-bold text-2xl">The best url shortener in the market</p>
//      <p className="px-38 text-center">We are the most straight forward url shortner in the world. Most of the url shortener can track your details and ask for login but This url shortener completely managed your privacy and do not ask any personel detail</p>
//       <div className='flex gap-10'>
//             <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 font-bold py-2 text-white'>Try now</button></Link>
//             <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 font-bold py-2 text-white'>Github</button></Link>
//         </div>
//       </div>
//       <div className=" flex justify-start relative">
//         <Image className="mix-blend-darken" alt="An image of a vector" src={"/vector.jpg"} fill={true}/>
//       </div>
//       </section>
//       </main>
//     </div>
//   );
// }

'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {


  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-sans">
      
      {/* Hero & Input Section */}
      <section className="bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-700 text-white py-24 px-4 relative overflow-hidden">
        {/* Background Decorative Circles */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob delay-2000"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="bg-indigo-500 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
            Free URL Shortener
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
            Shorten Your Links, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Expand Your Reach.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-indigo-200 max-w-2xl mx-auto mb-10">
            HashLink is a powerful tool to convert long, ugly URLs into clean, memorable, and trackable short links.
          </p>

          
        </div>
        <div className='flex gap-20 justify-center items-center'>
            <Link href="/shorten"><button className='bg-green-600 rounded-lg shadow-lg p-3 font-bold py-2 text-white cursor-pointer hover:bg-green-800  md:px-5'>Try now</button></Link>
            <Link href="/github"><button className='bg-green-600 rounded-lg shadow-lg p-3 font-bold py-2 text-white cursor-pointer hover:bg-green-800  md:px-5'>Github</button></Link>
        </div>
      </section>

      {/* Live Stats Tracker Counter Section */}
      <section className="max-w-5xl mx-auto -mt-10 px-4 relative z-20">
        <div className="bg-white rounded-xl shadow-xl grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 border border-gray-100 text-center py-6">
          <div className="p-4">
            <h3 className="text-3xl font-black text-indigo-600">10M+</h3>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mt-1">Links Shortened</p>
          </div>
          <div className="p-4">
            <h3 className="text-3xl font-black text-indigo-600">50M+</h3>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mt-1">Total Redirects</p>
          </div>
          <div className="p-4">
            <h3 className="text-3xl font-black text-indigo-600">99.9%</h3>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mt-1">MongoDB Uptime</p>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="max-w-6xl mx-auto py-24 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Everything you need to manage links
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Powerful features built to give you total control over your digital connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 font-bold text-2xl mb-6">
              🔗
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Custom Aliases</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Create neat, brandable custom back-halves for your links instead of random auto-generated characters.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 font-bold text-2xl mb-6">
              📊
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Analytics Ready</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Track real-time click counts and manage redirection states dynamically directly through our integrated database system.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 font-bold text-2xl mb-6">
              🚀
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Instant Redirect</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Zero latency routing. Built on Next.js server architecture combined with highly optimized MongoDB queries.
            </p>
          </div>
        </div>
      </section>

      {/* Mini Footer */}
      <footer className="border-t border-gray-200 bg-white py-8 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} HashLink. All rights reserved.</p>
      </footer>

    </div>
  );
}
