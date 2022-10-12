import Image from "next/image"
import Link from "next/link"


const Author = () => {
  return (
    <div className="auhor flex py-5">
            <Image  src={"/images/1.jpeg"} className="rounded-full"width={300} height={300} />
            <div > 
                <Link href={"/"}><a className="text-md font-bold text-gray-800 hover:text-orange-900" >MNM-01 aobing</a></Link>
                <span className="text-sm text-gray-500">【产品中心】</span>
            </div>
    </div>
  )
}
export default Author