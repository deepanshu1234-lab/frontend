import React from 'react';
import Header from './Header.jsx';
import Articles from './Articles.jsx';
import Tutorials from './Tutorials.jsx';
import Footer from './Footer.jsx';
import Newsletter from './Newsletter.jsx';




export default function App() {
return (
<div className="app-wrapper">

<main className="app-main">
<Header />
<Articles />
<Tutorials />
<Newsletter/>
</main>
<Footer />
</div>
);
}