/**
 * SLIDER IMAGES CAROUSEL DATA
 *
 * HOW TO ADD/MODIFY AN ARRAY:
 * 1. Add the slider image to: /public/images/slider/
 * 2. Add the slider image path to respective array
 * 3. Save this file
 *
 * Note: homeSliderImages is the slider image carousel for the home page
 *       and the committeeSliderImages for the committee pages. 
 */

import type { CarouselImage } from "@/components/ui/ImageCarousel";

export const homeSliderImages = [
    "",
]

export const committeeSliderImages: Record<string, CarouselImage[]> = {
    computerSoc: [
        {src: "/images/gallery/ras/RAS-Room-Photo.jpg", alt: "RAS Room Photo"},
    ],
    robotics: [
        {src: "/images/gallery/ras/RAS-FirstMeeting-Group-Photo.jpeg", alt: "RAS First Meeting Group Photo"},
        {src: "/images/gallery/ras/RAS-Group-Photo.jpeg", alt: "RAS Group Photo"},
        {src: "/images/gallery/ras/RAS-FirstMeeting-Photo.jpeg", alt: "RAS First Meeting Photo"},
        {src: "/images/gallery/ras/RAS-DianeWelker-Robot-Photo.jpeg", alt: "RAS Diane Welker Holding Robot Photo"},
        {src: "/images/gallery/ras/RAS-Room-Photo.jpg", alt: "RAS Room Photo"},
        {src: "/images/gallery/ras/RAS-MrWelker-Robot-Photo.jpeg", alt: "RAS Mr Welker Holding Robot Photo"},
    ],
    hkn: [
        {src: "/images/gallery/ras/RAS-Room-Photo.jpg", alt: "RAS Room Photo"},
    ],
};