import React, { useEffect } from 'react';
import Header from '../components/Header';
import Landing from '../components/Landing';
import WhyChooseUs from '../components/WhyChooseUs';
import HomeFooter from '../components/HomeFooter';
function Home() {
  useEffect(() => {}, []);
  return (
    <main>
      <Header />
      <Landing />
      <WhyChooseUs />
      <HomeFooter />
    </main>
  );
}
export default Home;
