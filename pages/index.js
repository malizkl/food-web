import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import landingimage from '../public/images/delivery.webp'


export default function Home() {
  return (

    <div className="min-h-screeen flex flex-col">
      <div className="min-h-screen grid grid-cols-12" >

        <div className="col-span-6" >

          <h1 className="px-12 font-bold text-8xl">The fastest <br></br> Delivery <h1>in</h1> <h1 className="text-orange-500">Your City</h1></h1>
          
        </div>
        <div className="col-span-6">
        <Image
        src={landingimage}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
        </div>
      </div>


    </div>

  )
}
