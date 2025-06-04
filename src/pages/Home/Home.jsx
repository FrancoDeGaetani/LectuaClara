import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom'

import HeroBanner from './HeroBanner/HeroBanner'
import GridHome from './GridHome.jsx/GridHome';
import RandomBook from './RandomBook/RandomBook'


function Home (){

    const generos = ['historia', 'fantasía', 'aventura', 'novela', 'ficción', 'misterio', 'suspenso', 'ciencia ficción', 'romance', 'biografía', 'autoayuda', 'historia real', 'ensayo', 'poesía', 'clásico', 'literatura contemporánea', 'thriller', 'drama', 'comedia'];

    return(
            <>
                <HeroBanner />
                <GridHome max = { 8 } />
                <div className='random-book-container'>
                    <RandomBook />
                    <Link className='random-book-link-biblioteca' to='biblioteca'>No te quedes con solo uno, explora nuestra biblioteca!</Link>
                </div>
            </>
    )
}


export default Home ;

