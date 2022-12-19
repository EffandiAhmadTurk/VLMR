import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Blogs from './Blogs'
import nextSvg from "../public/next.svg"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-white py-1 cursor-pointer'>
     <div className='flex space-x-4 px-8 container mx-auto justify-end'>
<div className=''>
Home
</div>
<div className=''>
Write for us
</div>
<div className=''>
Privacy Policy
</div>
<div className=''>
  Contact us
</div>
     </div>
     <div className='bg-purple-300 flex items-center justify-between px-8 py-4'>
     <div>
<Image
src={nextSvg}
alt=""
/>
     </div>
     <div className='flex font-bold items-center space-x-4 justify-between'>
<div>
  <a href='/Blogs'>
  Business
  </a>
</div>
<div>
Decor
</div>
<div>
Home Decor
</div>
<div>
Health Tips
</div>
<div>
Life Style
</div>
<div>
Technology
</div>
<div>
Travel
</div>
     </div>
     <div className=''>
     <div className="relative z-0 mb-6 w-full group">
      <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Search</label>
  </div>
     </div>
     <div>

     </div>
     </div>
      </div>
    </>
  )
}
