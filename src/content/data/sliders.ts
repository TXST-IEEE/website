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
import type { CarouselImage } from "@/components/ui/ImageCarouselReverse";

export const sliderImages: Record<string, SlideshowImage[]> = {
    homePage: [
        {src: "/images/gallery/mikem-ieeespeaker-photo-fall2025.jpg", alt: "Mike M Meeting Room Photo"},
        {src: "/images/gallery/ieee-ops-room-photo3.jpg", alt: "OPS Meeting Photo"},
        {src: "/images/events/tesla-ieeetour-photo-fall2025.jpg", alt: "Tesla Gigafactory Tour Group Photo"},
        {src: "/images/gallery/ieee-destinationimagination-group-photo.jpg", alt: "Destination Imagination Group Photo"},
        {src: "/images/events/dell-ieeetour-photo-spring2025.jpg", alt: "Dell Tour Group Photo"},
        {src: "/images/gallery/ras/ras-group-photo.jpeg", alt: "RAS Group Photo"},
        {src: "/images/gallery/hkn/hkn-appliedmaterials-group-photo.jpg", alt: "Applied Materials Group Photo"},
        {src: "/images/gallery/ieee-volunteer-photo.jpg", alt: "IEEE Volunteer Event Photo"},
        {src: "/images/gallery/ieee-destinationimagination-photo.png", alt: "Destination Imagination Photo"},
        {src: "/images/gallery/ieee-volunteer-group-photo.jpg", alt: "IEEE Volunteer Event Group Photo"},
    ],
    roboticsPage: [
        {src: "/images/gallery/ras/ras-r5robotics-2ndplace-group-photo.png", alt: "R5 Spring 2026 Group Photo"},
        {src: "/images/gallery/ras/ras-r5conference-2ndplace-trophy-photo.png", alt: "R5 Spring 2026 2nd Place Trophy Photo"},
        {src: "/images/gallery/ras/ras-r5conference-groupdinner-photo.png", alt: "R5 Spring 2026 Group Dinner Photo"},
        {src: "/images/gallery/ras/ras-r5robotics-pico-photo.png", alt: "R5 Spring 2026 Pico Robot Photo"},
        {src: "/images/gallery/ras/ras-r5robotics-2ndplace-group-photo2.png", alt: "R5 Spring 2026 Group Photo 2"},
        {src: "/images/gallery/ras/ras-r5robotics-queso-group-photo.png", alt: "R5 Spring 2025 Queso Robot Photo"},
        {src: "/images/gallery/ras/ras-queso-photo.png", alt: "R5 Spring 2025 Queso Robot Photo"},
        {src: "/images/gallery/ras/ras-sumobot-photo.png", alt: "RAS Spring 2025 Sumobot Robot Photo"},
        {src: "/images/gallery/ras/ras-r5robotics-2ndplace-group-photo3.png", alt: "R5 Spring 2026 Group Photo 3"},
    ],
};

export const carouselImages: Record<string, CarouselImage[]> = {
    computerSoc: [
        {src: "/images/gallery/ras/ras-room-photo.jpg", alt: "RAS Room Photo"},
    ],
    robotics: [
        {src: "/images/gallery/ras/ras-group-photo.jpeg", alt: "RAS Group Photo"},
        {src: "/images/gallery/ras/ras-intromeet-photo2.JPG", alt: "RAS Intro Meeting Photo 2"},
        {src: "/images/gallery/ras/ras-intromeet-photo.JPG", alt: "RAS Intro Meeting Photo"},
        {src: "/images/gallery/ras/ras-dianewelker-robot-photo.jpeg", alt: "RAS Diane Welker Robot Photo"},
        {src: "/images/gallery/ras/ras-mrwelker-robot-photo.jpeg", alt: "RAS Mr Welker Robot Photo"},
        {src: "/images/gallery/ras/ras-presentations-photo.png", alt: "RAS Presentations Photo"},
        {src: "/images/gallery/ras/ras-firstmeeting-photo.jpeg", alt: "RAS First Meeting Photo"},
        {src: "/images/gallery/ras/ras-firstmeeting-group-photo.jpeg", alt: "RAS First Meeting Group Photo"},
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