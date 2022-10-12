import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Section1 = () => {

    const bg = {
        background: "gray",
        backgroundPosition: "right"
    }

    return (
        <section className="py-16" style={bg}>
            <div className="container mx-auto md:px-20">
                <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>{Slide()}</SwiperSlide>
                    <SwiperSlide>{Slide()}</SwiperSlide>
                    <SwiperSlide>{Slide()}</SwiperSlide>
                    <SwiperSlide>{Slide()}</SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}
function Slide() {
    return (
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Link href={"/"}>
                    <Image src={"/images/1.jpeg"} width={600} height={600} />
                </Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat" >
                    <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">
                        <b >Ao Bing</b>
                    </a></Link>-
                    <Link href={"/"}><a className="text-gray-800 hover:text-orange-600">
                        MNM-01
                    </a></Link>
                </div>
                <div className="title" >
                    <Link href={"/"}><a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-500">Alloy finished product
                    </a></Link>
                </div>
                <p className="text-gray-500 py-3">
                    我司推出的以中国108星宿为基础并以中国古典人物命名的玄幻机甲IP 已经在漫画前期阶段，目前故事大纲、漫画场景、人物设定、主题音乐已经在全力制作过程中。以故事内相应的动漫合金成品超可动模型“白起”“曹仁”等系列产品，已经成功推向市场。
                </p>
                <Author />

            </div>
        </div>
    )
}
export default Section1