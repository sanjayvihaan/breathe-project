import VideoComponent from '../components/sideVideo.jsx';
import InputField from '../components/InputComponent.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../slices/usersApiSlice.js';
import { setCredentials } from '../slices/authSlice.js';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import Spinner from '../components/Loader.jsx';


const Login = () => {

  const videoSource = './assets/sideVideo.mp4'
  const logo = 'https://assets-global.website-files.com/64d0758245286f4d631b681c/64d08bbef0fc228ea4df9205_breathe-esg-logo.webp'

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    const token = Cookies.get('jwt');
    if (!token) {
      navigate('/login'); // Redirect to login if no token found
    }
  }, [navigate]);



  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("The email is: ", email)
    console.log("The password is: ", password)
    
    if(email && password == '') {
      toast.error("Email and Password are required", {
        position: "bottom-left"
      });
      return;
    } else {
      try {
        const res = await login({ email, password}).unwrap();
        dispatch(setCredentials({ ...res }));
        Cookies.set('jwt', res.token); // save token to local storage
        navigate('/');
      } catch (err) {
        console.log(err.data.message || err.error.message);
        toast.error(err.data.message || err.error.message, {
          position: "bottom-left"
        });
      }
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className="relative flex flex-col space-y-6  md:flex-row md:space-y-0 w-full h-screen"
      >
        <div className="flex flex-col justify-center p-8 w-2/4 max-md:w-full">
          {/*<img src={logo} alt="logo" width={250} /> */}
          <h2 className='text-4xl'>Login to your Account</h2>
          <br />
          <span className="font-light text-gray-400 text-sm mb-2">
            We help you track your organisations <br /> metrics as per the ESG Guidelines
          </span>

          {/* <span className="font-light text-gray-400 text-sm mb-8">
            Sound Interesting? <p className='text-[#2E9844]'>Learn More</p>
          </span> */}
         
          <form onSubmit={submitHandler}>

          <InputField
            label = "Email"
            type = "email"
            name = "email"
            id = "email"
            value = {email}
            placeholder = "Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputField
            label = "Password"
            type = "password"
            name = "password"
            id = "password"
            value = {password}
            placeholder = "Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" disabled={isLoading} className="w-full mt-4 bg-[#2E9844] text-white p-2 rounded-lg mb-6 hover:bg-[#21453c] hover:text-[#fff] hover:border hover:border-gray-300">Sign in</button>
          
          { isLoading && <Spinner /> }

          </form>
         
          <div className="text-center text-gray-400">
            Don't have an account?
            <span className="font-bold text-[#2E9844]"> 
              <Link to="/signup"> Sign Up</Link>
            </span>
          </div>


          
        </div>
        {/* right side  */}
        <div className="relative width-1/2">
          <VideoComponent SideImage={videoSource} className="width-full"/>
        </div>

        {/* <div
            className="absolute hidden top-[10%] right-10 p-6 bg-gray-400  bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"
          >
            <span className="text-white text-xl"
              >Enterprise SaaS for end-to-end <br /> sustainability management
            </span>
          </div> */}
      </div>
    </div>
  );
};

export default Login;