import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Section4 = () => {
    return (
        <section className='container mx-auto md:px-20 py-16' >
            <div className="grid lg:grid-cols-2">
                <div className="item">
                    <h1 className='font-bold text-4xl py-12' >Business</h1>
                    <div className="flex flex-col gap-6" >
                        {/* post */}
                        {Post()}
                        {Post()}
                        {Post()}
                        {Post()}
                    </div>
                </div>
                <div className="item">
                    <h1 className='font-bold text-4xl py-12' >travel</h1>
                    <div className="flex flex-col gap-6" >
                        {/* post */}
                        {Post()}
                        {Post()}
                        {Post()}
                        {Post()}
                    </div>
                </div>

            </div>

        </section>
    )
}
export default Section4

function Post() {
    return (
        <div className='flex gap-5'>
            <div className='image flex flex-col justify-start'>
                <Link href={"/"}>
                    <Image src={"/images/1.jpeg"} className='rounded' width={300} height={250}
                    />
                </Link>
            </div>
            <div className='info flex justify-center flex-col' >
                <div className="cat" >
                    <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">
                        <b >Ao Bing</b>
                    </a></Link>-
                    <Link href={"/"}><a className="text-gray-800 hover:text-orange-600">
                        MNM-01
                    </a></Link>
                </div>
                <div className="title" >
                    <Link href={"/"}><a className="text-xl font-bold text-gray-800 hover:text-gray-500">Alloy finished product
                    </a></Link>
                </div>
            </div>
        </div>
    )
}