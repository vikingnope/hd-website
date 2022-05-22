import React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navlinks from './Navlinks';
// import Link from 'next/link';
import Container from './Container';


const Nav: React.FC = () => {

    const [isOpen, setOpen] = useState(false);

    const handleClick = () => {
        if (isOpen) {
            setOpen(!isOpen);
        }
    }

    return (
        <nav className="fixed min-w-full h-24 z-10 bg-transparent flex">
            <Container className="p-4">
            <div className="flex justify-between space-x-5">
                <Image className="cursor-pointer" src="/hdbanner.svg" width={300} height={50} />
                <Navlinks className="md:flex md:flex-row" />
            </div>
            </Container>
        </nav>

    )
};

export default Nav;
