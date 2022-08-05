import React from 'react';
import Container from './Container';
import Button from './Button';
import {featuresRef} from "./Features";

const B787Hero = () => {
    const handleClick = () => {
        if (featuresRef.current) {
            featuresRef.current.scrollIntoView({ behavior: 'smooth' });
        }

    }
        return (
            <section id="B787Hero">
                <video
                    className="object-cover fixed -z-10 w-screen h-screen opacity-30"
                    src="https://media.istockphoto.com/videos/aerial-view-of-london-skyline-hyperlapse-video-id1196816851"
                    playsInline
                    autoPlay
                    muted
                    loop
                />
                <Container className="min-h-screen max-w-6xl">
                        <Button className="absolute h-14 w-36 top-3/4 left-1/3 hover:text-blue-sky border-2 p-5">
                            <a href="">Download</a>
                        </Button>
                        <Button onClick={handleClick} className="absolute h-14 w-36 top-3/4 left-2/3 hover:text-blue-sky border-2 p-5">
                            <a href="">About</a>
                        </Button>


                    <header>
        </header>
                </Container>
            </section>
    )
};

export default B787Hero;

