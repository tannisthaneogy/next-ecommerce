"use client"

import Image from "next/image"
import { useState } from "react";

// const images = [
//     {
//         id: 1,
//         url: "https://images.pexels.com/photos/26729763/pexels-photo-26729763/free-photo-of-valldemosa-spain-mallorca.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
//     },
//     {
//         id: 2,
//         url: "https://images.pexels.com/photos/12222229/pexels-photo-12222229.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
//     },
//     {
//         id: 3,
//         url: "https://images.pexels.com/photos/17685561/pexels-photo-17685561/free-photo-of-a-surfer-is-in-the-ocean-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
//     },
//     {
//         id: 4,
//         url: "https://images.pexels.com/photos/26076625/pexels-photo-26076625/free-photo-of-man-in-white-t-shirt-walking-and-carrying-skateboard.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
//     },
// ];

const ProductImages = ({items}:{items:any}) => {

    const [index,setIndex] = useState(0)

    return (
        <div className="">
            <div className="h-[500px] relative">
                <Image src={items[index].image?.url} alt="" fill sizes="50vw" className="object-cover rounded-md"/>            
            </div>
            <div className="flex justify-between mt-8 gap-4">
                {items.map((item:any,i:number)=>(
                    <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={item._id} onClick={()=>setIndex(i)}>
                        <Image src={item.image?.url} alt="" fill sizes="30vw" className="object-cover rounded-md"/>
                    </div>
                ))}                
            </div>
        </div>
    )
}

export default ProductImages