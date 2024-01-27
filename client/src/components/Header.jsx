import React from 'react';
import Projects from '../pages/Projects';
import About from '../pages/About';
import Home from '../pages/Home';
import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'

function Header() {

    const path = useLocation().pathname;

  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center font-bold whitespace-nowrap text-sm sm:text-xl dark:text-white'>
            <span className=' rounded-md px-2 py-1 bg-gradient-to-r from-black via-purple-900 to-indigo-800 text-white'>Saksham's</span>Blog
        </Link>
        <form action="">
            <TextInput type='text' placeholder='Search' rightIcon={AiOutlineSearch} className='hidden lg:inline'/>
        </form>
        <Button className='w-10 h-12 lg:hidden' color='gray' pill>
            <AiOutlineSearch/>
        </Button>
        <div className='flex gap-2 md:order-2'>
            <Button className='w-12 h-12 hidden sm:inline' color='gray' pill>
                <FaMoon/>
            </Button>
            <Link to='/signIn'>
                <Button className='w-15 h-12 bg-gradient-to-r  from-black via-purple-900 to-indigo-800 text-white' outline>
                    SignIn
                </Button>
            </Link>
            <Navbar.Toggle/>
        </div>
            <Navbar.Collapse>
                <Navbar.Link active = {path==='/'} as={'div'}>
                    <Link to='/'>Home</Link>                   
                </Navbar.Link>
                <Navbar.Link active = {path==='/about'} as={'div'}>
                <Link to='/about'>About</Link>                  
                </Navbar.Link>
                <Navbar.Link active = {path==='/projects'} as={'div'}>
                <Link to='/projects'>Projects</Link>                  
                </Navbar.Link>                
            </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;