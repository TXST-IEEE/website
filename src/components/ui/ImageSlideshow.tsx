'use client'

import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export type SlideshowImage = {
    src: string;
    alt: string;
};

type ImageSlideshowProps = {
    images: SlideshowImage[];
    className?: string;
};

export default function ImageSlideshow({
    images,
    className = "",
}: ImageSlideshowProps) {

    // avoid errors if no images
    if (!images || images.length === 0) return null;

    return (
        <div className={`${className}`}>
            <Swiper
                navigation
                pagination={{ type: 'fraction' }}
                modules={[Navigation, Pagination]}
                // onSwiper={swiper => console.log(swiper)}
                className='relative w-full h-[420px] md:h-[580px] [--swiper-pagination-fraction-color:#2563eb]
                [--swiper-navigation-sides-offset:4rem]'
            >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className='relative h-full w-full bg-slate-100'>
                        <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className='object-contain'
                        />
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    )
}