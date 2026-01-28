/**
 * SLIDER IMAGES DATA
 *
 * HOW TO ADD/MODIFY AN ARRAY:
 * 1. Add the slider image to: /public/images/slider/
 * 2. Add the slider image path to respective array
 * 3. Save this file
 *
 * Note: homeSliderImages is the slider image carousel for the home page
 *       and the committeeSliderImages for the committee pages. 
 */

import type { SlideshowImage } from "@/components/ui/ImageSlideshow";
import type { CarouselImage } from "@/components/ui/ImageCarousel";

export const homeSliderImages: Record<string, SlideshowImage[]> = {
    homePage: [
        {src: "/images/gallery/mikem-ieeespeaker-photo-fall2025.jpg", alt: "Mike M Meeting Room Photo"},
        {src: "/images/gallery/ieee-ops-room-photo3.jpg", alt: "OPS Meeting Photo"},
        {src: "/images/events/tesla-ieeetour-photo-fall2025.jpg", alt: "Tesla Gigafactory Tour Group Photo"},
        {src: "/images/gallery/ieee-destinationimagination-group-photo.jpg", alt: "IEEE Volunteer Event Photo"},
        {src: "/images/events/dell-ieeetour-photo-spring2025.jpg", alt: "Dell Tour Group Photo"},
        {src: "/images/gallery/ras/ras-group-photo.jpeg", alt: "RAS Group Photo"},
        {src: "/images/gallery/hkn/hkn-appliedmaterials-group-photo.jpg", alt: "Applied Materials Group Photo"},
        {src: "/images/gallery/ieee-volunteer-photo.jpg", alt: "IEEE Volunteer Event Photo"},
        {src: "/images/gallery/ieee-destinationimagination-photo.jpg", alt: "IEEE Volunteer Event Group Photo"},
        {src: "/images/gallery/ieee-volunteer-group-photo.jpg", alt: "IEEE Volunteer Event Group Photo"},
    ],
};

export const committeeSliderImages: Record<string, CarouselImage[]> = {
    computerSoc: [
        {src: "/images/gallery/ras/ras-room-photo.jpg", alt: "RAS Room Photo"},
    ],
    robotics: [
        {src: "/images/gallery/ras/ras-firstmeeting-group-photo.jpeg", alt: "RAS First Meeting Group Photo"},
        {src: "/images/gallery/ras/ras-group-photo.jpeg", alt: "RAS Group Photo"},
        {src: "/images/gallery/ras/ras-firstmeeting-photo.jpeg", alt: "RAS First Meeting Photo"},
        {src: "/images/gallery/ras/ras-dianewelker-robot-photo.jpeg", alt: "RAS Diane Welker Robot Photo"},
        {src: "/images/gallery/ras/ras-room-photo.jpg", alt: "RAS Room Photo"},
        {src: "/images/gallery/ras/ras-mrwelker-robot-photo.jpeg", alt: "RAS Mr Welker Robot Photo"},
        {src: "/images/gallery/ras/ras-presentations-photo.png", alt: "RAS Presentations Photo"},
    ],
    hkn: [
        {src: "/images/gallery/hkn/hkn-appliedmaterials-group-photo.jpg", alt: "HKN Applied Materials Group Photo"},
        {src: "/images/gallery/hkn/hkn-appliedmaterials-group-photo2.jpg", alt: "HKN Applied Materials Group Photo 2"},
        {src: "/images/gallery/hkn/hkn-vdura-group-photo.jpg", alt: "HKN VDURA Group Photo"},
        {src: "/images/gallery/hkn/hkn-yp-group-photo.jpg", alt: "HKN Young Professionals Group Photo"},
        {src: "/images/gallery/hkn/hkn-inauguration-group-photo.jpg", alt: "HKN Inauguration Group Photo"},
        {src: "/images/gallery/hkn/orlandoa-hknspeaker-photo.jpg", alt: "HKN Dr Orlando Auciello Room Photo"},
        {src: "/images/gallery/hkn/renem-hknspeaker-photo.jpg", alt: "HKN Rene Molina Presentation Photo"},    ]
    ,
};