import React from 'react';
import './App.css';

// Import all components (you'll create these separately)
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Categories from './components/Categories/Categories';
// import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
// import BrandLogos from './components/BrandLogos/BrandLogos';
// import RecommendedProducts from './components/RecommendedProducts/RecommendedProducts';
// import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
// import Testimonials from './components/Testimonials/Testimonials';
// import Newsletter from './components/Newsletter/Newsletter';
// import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* Header Navigation */}
      <Header />

      {/* Main Content Wrapper */}
      <main className="main-content">
        <Hero />
        <Categories />
        {/* <FeaturedProducts /> */}
        {/* <BrandLogos /> */}
        {/* <RecommendedProducts /> */}
        {/* <WhyChooseUs /> */}
        {/* <Testimonials /> */}
        {/* <Newsletter /> */}
      </main>

      {/* Uncomment when you create the Footer component */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;





// import React from 'react';
// import './App.css';

// // Import all components (you'll create these separately)
// import Header from './components/Header/Header';
// // import Hero from './components/Hero/Hero';
// // import Categories from './components/Categories/Categories';
// // import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
// // import BrandLogos from './components/BrandLogos/BrandLogos';
// // import RecommendedProducts from './components/RecommendedProducts/RecommendedProducts';
// // import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
// // import Testimonials from './components/Testimonials/Testimonials';
// // import Newsletter from './components/Newsletter/Newsletter';
// // import Footer from './components/Footer/Footer';

// function App() {
//   return (
//     <div className="App">
//       {/* Header Navigation */}
//       <Header />

//       {/* Main Content Wrapper */}
//       <main className="main-content">
//         {/* Hero Section */}
//         <Hero />

//         {/* Category Cards Section */}
//         <Categories />

//         {/* Featured Products Section */}
//         <FeaturedProducts />

//         {/* Brand Logos Section */}
//         <BrandLogos />

//         {/* Recommended Products Section */}
//         <RecommendedProducts />

//         {/* Why Choose Us Section */}
//         <WhyChooseUs />

//         {/* Testimonials Section */}
//         <Testimonials />

//         {/* Newsletter Section */}
//         <Newsletter />
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }

// export default App;