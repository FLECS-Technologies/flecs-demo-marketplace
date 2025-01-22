import { Hero } from "@/components/hero";
import StorySection from "@/components/story-section";
import { ProductJourney } from "@/components/product-journey";
import { FLECSelerator } from "@/components/flecselerator";

export default function Home() {
  return (
    <>
      <Hero />
      <StorySection />
      <ProductJourney />
      <FLECSelerator />
    </>
  );
}