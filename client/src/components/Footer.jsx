import { Footer } from 'flowbite-react';
import {BsFacebook, BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs';

function FooterComponent() {
  return (
    // <Footer container className='border border-t-8 border-black'>
    //     <div>
    //         <div>
    //             <div>
    //                 <Link to="/" className='self-center font-bold whitespace-nowrap text-lg sm:text-xl dark:text-white'>
    //                     <span className=' rounded-md px-2 py-1 bg-gradient-to-r from-black via-purple-900 to-indigo-800 text-white'>Saksham's</span>Blog
    //                 </Link>
    //             </div>
    //             <div className='grid grid-cols-2 gap-3 sm:mt-4 sm:grid-cols-3 sm:gap-6'></div>
    //                 <Footer.Title title='About'/>
    //                 <Footer.LinkGroup col> </Footer.LinkGroup>
    //         </div>
    //     </div>
    // </Footer>
    <>
        <Footer container className='border mt-7'>
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
            <Footer.Copyright href='#' by="Saksham's Blog" year={new Date().getFullYear()}/>
        </div>
        <div className='flex gap-4 sm:mt-1 mt-2 sm:justify-center'>
            <Footer.Icon href='#' icon={BsFacebook}/>
            <Footer.Icon href='#' icon={BsInstagram}/>
            <Footer.Icon href='#' icon={BsTwitter}/>
            <Footer.Icon href='https://github.com/SakshamTewari' icon={BsGithub}/>
        </div>
        </Footer>
    </>
  );
}

export default FooterComponent;