import React from 'react';
import{ Link } from 'react-router-dom';

const HomePage = () => (
    <div className='jumbotron'>
    <h1> pluralsight </h1>
        <p> React, Redux  and React  Router  </p>
        <Link to='about' className='btn btn-primary btn-lg'>
        Learn More
        </Link>
    </div>
);

export default HomePage;

//react router handles clicks on any link component so the page wont post back 