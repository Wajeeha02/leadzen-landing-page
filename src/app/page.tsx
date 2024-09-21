import { Suspense, lazy } from 'react';

// Lazy load components
const HeroSection = lazy(() => import("./components/HeroSection"));
const Reason = lazy(() => import("./components/Reason"));
const InfoSection = lazy(() => import("./components/InfoSection"));
const Solution = lazy(() => import("./components/Solution"));
const Blogs = lazy(() => import("./components/Blogs"));
const Team = lazy(() => import("./components/Team"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Footer = lazy(() => import("./components/Footer"));

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeroSection />
      <Reason />
      <InfoSection />
      <Solution />
      <Blogs />
      <Team />
      <ContactUs />
      <Footer />
    </Suspense>
  );
}
