import React from "react";
import Hero from "../../components/home/Hero";
import GoldMarquee from "../../components/ui/GoldMarquee";
import StudioIntro from "../../components/home/StudioIntro";
import ServicesPreview from "../../components/home/ServicesPreview";
import SignatureBand from "../../components/home/SignatureBand";
import Testimonials from "../../components/home/Testimonials";
import GalleryTeaser from "../../components/home/GalleryTeaser";
import BookingBand from "../../components/home/BookingBand";

const Home = () => (
  <>
    <Hero />
    <GoldMarquee />
    <StudioIntro />
    <ServicesPreview />
    <SignatureBand />
    <Testimonials />
    <GalleryTeaser />
    <BookingBand />
  </>
);

export default Home;
