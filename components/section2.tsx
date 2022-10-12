import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Author from './_child/author'

const Section2 = () => {
    return (
        <section className='container mx-auto md:px-20 py-10'>
            <h1 className='font-bold text-4xl py-12 text-center'>
                Latest Posts
            </h1>
            {/* grid columns */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-14'>
                    {Post()}
                    {Post()}
                    {Post()}
                    {Post()}
                    {Post()}
                    {Post()}
              
            </div>
        </section>
    )
}
export default Section2

function Post() {
    return (
        <div className='item' >
            <div className='images' >
                <Link href={"/"}>
                    <Image src={"/images/1.jpeg"} width={500} height={350}
                        className="rounded-none"
                    />
                </Link>
            </div>
            <div className='info flex justify-center flex-col py-4' >
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
                <p className="text-gray-500 py-3">
                    我司推出的以中国108星宿为基础并以中国古典人物命名的玄幻机甲IP 已经在漫画前期阶段，目前故事大纲、漫画场景、人物设定、主题音乐已经在全力制作过程中。以故事内相应的动漫合金成品超可动模型“白起”“曹仁”等系列产品，已经成功推向市场。
                </p>
           

            </div>
        </div>
    )
}