import React from 'react';
import './styles/HeroSection';

const HeroSection = () => {
  return (
    <section className="hero">
      <h1>Welcome to Gates</h1>
      <p>Get the latest news on your favorite mangas, anime, and manhwa around the world!</p>
      <form>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </form>
    </section>
  );
};

export default HeroSection;
