import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'


const Section3 = () => {
  return (
    <section className='container mx-auto md:px-20 py-10' >
      <h1 className='font-bold text-4xl py-12 text-center' >Most Popular</h1>
      {/* swiper */}
      <Swiper
        slidesPerView={2}
      >
        <SwiperSlide >
          {Post()}
        </SwiperSlide>
        <SwiperSlide >
          {Post()}
        </SwiperSlide>
        <SwiperSlide >
          {Post()}  
        </SwiperSlide>
        <SwiperSlide >
          {Post()}   
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
export default Section3
function Post() {
  return (
    <div className='grid' >
      <div className='images' >
        <Link href={"/"}>
          <Image src={"/images/1.jpeg"} width={600} height={400}
           
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
          <Link href={"/"}><a className="text-3xl font-bold text-gray-800 hover:text-gray-500">Alloy finished product
          </a></Link>
        </div>
        <p className="text-gray-500 py-3">
          我司推出的以中国108星宿为基础并以中国古典人物命名的玄幻机甲IP 已经在漫画前期阶段，目前故事大纲、漫画场景、人物设定、主题音乐已经在全力制作过程中。以故事内相应的动漫合金成品超可动模型“白起”“曹仁”等系列产品，已经成功推向市场。
        </p>


      </div>
    </div>
  )
}