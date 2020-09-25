import React from 'react';

function About(props) {
    return (
        <main>
            <div className='about'>
                <div className='about-me'>
                    <h1> Pre-MEST Weather App Project </h1>
                    <p> designed by <br/> <span> Moses Gameli </span> </p>
                    <p> +233 240 695 050 <br/> connect with Moses on Twitter and Facebook <span> @MosesGameli </span> </p>
                </div>
                <div className='about-app'>
                    <h4> Pre-MEST is a program run by MEST Africa. You can <a href='https://meltwater.org/' target='_blank' rel="noopener noreferrer"> read more here </a>.</h4>
                </div>
            </div>
        </main>
    );
}

export default About;