import {Link} from 'react-router-dom';
import { Label, TextInput, Button } from 'flowbite-react';

function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        
        {/* Left */}
        <div className='flex-1'>
        <Link to="/" className='font-bold text-sm sm:text-4xl dark:text-white'>
            <span className=' rounded-md px-2 py-1 bg-gradient-to-l from-black via-purple-900 to-indigo-800 text-white'>Saksham's</span>Blog
        </Link>

        <p className='mt-4'>
          This is a demo project. You can signUp using email or with Google
        </p>
        </div>

        {/* Right */}
        <div className='flex-1'>
          <form>
            <div>
              <Label value='Your username'/>
              <TextInput type='text' placeholder='Username' id='username'></TextInput>
            </div>
            <div>
              <Label value='Your email'/>
              <TextInput type='text' placeholder='Email' id='email'></TextInput>
            </div>
            <div>
              <Label value='Your password'/>
              <TextInput type='text' placeholder='Password' id='username'></TextInput>
            </div>
            <Button className='bg-gradient-to-l from-black via-purple-900 to-indigo-800 mt-3' type='submit'>SignUp</Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/signIn' className='text-blue-700'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;