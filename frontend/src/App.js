import React, { useState } from 'react';
import { Container, Row, Col, Card, Navbar, Nav } from 'react-bootstrap';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../src/components/LandingPage/LandingPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                {/* Add other routes if necessary */}
            </Routes>
        </Router>
    );
}

export default App;

