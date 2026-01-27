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

import type { SlideshowImage } from "@/components/ui/ImageSlideshow";
import type { CarouselImage } from "@/components/ui/ImageCarousel";

export const homeSliderImages: Record<string, SlideshowImage[]> = {
    homePage: [
        {src: "/images/gallery/MikeM-IEEESpeaker-Photo-Fall2025.jpg", alt: "RAS First Meeting Group Photo"},
        {src: "/images/gallery/IEEE-OPS-Room-Photo3.jpg", alt: "RAS First Meeting Group Photo"},
        {src: "/images/events/Tesla-IEEETour-Photo-Fall2025.jpg", alt: "RAS First Meeting Group Photo"},
        {src: "/images/gallery/IEEE-Volunteer-Photo.jpg", alt: "IEEE Volunteer Event Photo"},
        {src: "/images/events/Dell-IEEETour-Photo-Spring2025.jpg", alt: "RAS First Meeting Group Photo"},
        {src: "/images/gallery/ras/RAS-Group-Photo.jpeg", alt: "RAS Group Photo"},
        {src: "/images/gallery/hkn/HKN-AppliedMaterials-Group-Photo.jpg", alt: "RAS First Meeting Group Photo"},
        {src: "/images/gallery/IEEE-Volunteer-Group-Photo.jpg", alt: "IEEE Volunteer Event Group Photo"},
    ],
};

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
        {src: "/images/gallery/hkn/HKN-AppliedMaterials-Group-Photo.jpg", alt: "HKN Applied Materials Group Photo"},
        {src: "/images/gallery/hkn/HKN-AppliedMaterials-Group-Photo2.jpg", alt: "HKN Applied Materials Group Photo2"},
        {src: "/images/gallery/hkn/HKN-VDURA-Group-Photo.jpg", alt: "HKN VDURA Group Photo"},
        {src: "/images/gallery/hkn/HKN-YP-Group-Photo.jpg", alt: "HKN Young Professionals Group Photo"},
        {src: "/images/gallery/hkn/HKN-Inauguration-Group-Photo.jpg", alt: "HKN Inauguration Group Photo"},
    ],
};