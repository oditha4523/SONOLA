import './HeroSection.css'
import HeroImage from '../assets/Hero.png'

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1>Getting started in Sonola</h1>
        <p>Create intriguing marketing contents with ease!</p>
        <button className="start-btn">Start creating now</button>
        <img src={HeroImage} alt="Hero" className="hero-image" />
      </div>
    </section>
  )
}

export default HeroSection
