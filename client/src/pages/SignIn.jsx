import {Link, useNavigate} from 'react-router-dom';
import { Label, TextInput, Button, Alert, Spinner } from 'flowbite-react';
import { useState } from 'react';

function SignIn() {

  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()});
    // console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // this doesn't refresh the page on submit
    if(!formData.email || !formData.password)
      return setErrorMessage('Please fill out all fields');

    try{
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if(data.success === false)
        return setErrorMessage(data.message);

      setLoading(false);

      if(res.ok)
        navigate('/');
      

    } catch(error){
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        
        {/* Left */}
        <div className='flex-1'>
        <Link to='/' className='font-bold text-sm sm:text-4xl dark:text-white'>
            <span className=' rounded-md px-2 py-1 bg-gradient-to-l from-black via-purple-900 to-indigo-800 text-white'>Saksham's</span>Blog
        </Link>

        <p className='mt-4'>
          This is a demo project. You can signin using email or with Google
        </p>
        </div>

        {/* Right */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Your email'/>
              <TextInput type='email' placeholder='Email' id='email' onChange={handleChange}></TextInput>
            </div>
            <div>
              <Label value='Your password'/>
              <TextInput type='password' placeholder='********' id='password' onChange={handleChange}></TextInput>
            </div>
            <Button className='bg-gradient-to-l from-black via-purple-900 to-indigo-800 mt-3' type='submit' disabled={loading}>
              {
                loading ? (
                  <>
                  <Spinner size='sm'/>
                  <span className='pl-3'>Loading..</span>
                  </>
                ) : ('SignIn')
              }
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Don't have an account?</span>
            <Link to='/signup' className='text-blue-700'>
              Sign Up
            </Link>
          </div>
          {errorMessage && (
              <Alert className='mt-5' color='failure'>
                {errorMessage}
              </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignIn;