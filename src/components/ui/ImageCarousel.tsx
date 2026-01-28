"use client";

import {motion} from "framer-motion";
import Image from 'next/image';

export type CarouselImage = {
    src: string;
    alt: string;
};

type ImageCarouselProps = {
    images: CarouselImage[];
    className?: string;
};

export default function ImageCarousel({
    images,
    className = "",
}: ImageCarouselProps) {

    // avoid errors if no images
    if (!images || images.length === 0) return null;

    // duplicate for "infinite" loop
    const loopImages = [...images, ...images, ...images];
    
    return (
        <div className={`w-full relative overflow-hidden ${className}`}>
            <motion.div 
                className='flex gap-1'
                animate={{
                    x: ['0%', '-200%'],
                    transition:{
                        ease: "linear",
                        duration: 23,
                        repeat: Infinity
                    }
                }}
            >
            {loopImages.map((img,index)=>{
                return <div key={index} className='relative flex-shrink-0 w-[450px] h-[400px] gap-6 rounded-xl' >
                    <div className='flex items-center justify-center text-6xl'>
                        <Image 
                            src={img.src} 
                            alt={img.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 1200px"
                            className="object-cover"
                        />
                    </div>
                </div>
            })}
            </motion.div>
        </div>
    )
}