import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Faq from '../components/Faq'
import Testimonials from '../components/Testimonials'
import Promo from '../components/Promo'
import Incentivi from '../components/Incentivi'
const Home = () => {
    return (<div>
        <Navbar />
        <Promo />
        <Incentivi />
        <Slider />
        <Categories />
        <Products />
        <Testimonials />
        <Faq />
        <Newsletter />
        <Footer />
    </div>

    )
}

export default Home