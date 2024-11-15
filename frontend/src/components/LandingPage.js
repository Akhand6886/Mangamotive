import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LandingPage.css';

const LandingPage = () => {
    const [trendingItems, setTrendingItems] = useState([]);

    useEffect(() => {
        // Fetch trending items from the backend
        axios.get('/api/trending')
            .then(response => setTrendingItems(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="landing-page">
            <header className="header">
                <div className="logo">Gates</div>
                <nav className="nav">
                    <a href="/">Home</a>
                    <a href="/connect">Connect</a>
                    <a href="/signup" className="sign-up">Sign up</a>
                    <a href="/login">Login</a>
                </nav>
            </header>

            <section className="hero">
                <h1>Welcome to Gates</h1>
                <p>Get the latest news on your favourite mangas, anime, and manhwa around the world!</p>
                <div className="subscribe">
                    <button className="subscribe-btn">Subscribe</button>
                    <input type="email" placeholder="Enter your email" />
                </div>
            </section>

            <section className="new-trendy">
                <h2>New & Trendy</h2>
                <div className="trending-items">
                    {trendingItems.map(item => (
                        <div key={item._id} className="trending-item">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <footer>
                <p>&copy; 2024 Gates. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
