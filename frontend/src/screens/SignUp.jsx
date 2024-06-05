import VideoComponent from '../components/sideVideo.jsx';
import InputField from '../components/InputComponent.jsx';
import { Link } from 'react-router-dom';
import { useState } from 'react';




const SignUp = () => {

  const videoSource = './assets/sideVideo.mp4'
  const logo = 'https://assets-global.website-files.com/64d0758245286f4d631b681c/64d08bbef0fc228ea4df9205_breathe-esg-logo.webp'

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('submit');
  }



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className="relative flex flex-col space-y-6  md:flex-row md:space-y-0 w-full h-screen"
      >
        <div className="flex flex-col justify-center p-8 w-2/4 max-md:w-full">
          <img src={logo} alt="logo" width={250} />
          <br />
          <span className="font-light text-gray-400 text-sm mb-2">
            We help you track your organisations <br /> metrics as per the ESG Guidelines
          </span>

          {/* <span className="font-light text-gray-400 text-sm mb-8">
            Sound Interesting? <p className='text-[#2E9844]'>Learn More</p>
          </span> */}
         
          <form onSubmit={submitHandler}>
          <InputField 
            label = "Full Name"
            type = "text"
            name = "name"
            id = "name"
            value = {name}
            placeholder = "Enter your full name"
            onChange={(e) => setName(e.target.value)}
          />

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

          <InputField
            label = "Confirm Password"
            type = "password"
            name = "pasconfirmPasswordsword"
            id = "confirmPassword"
            value = {confirmPassword}
            placeholder = "Enter your password again"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type='submit'
            className="w-full mt-4 bg-[#2E9844] text-white p-2 rounded-lg mb-6 hover:bg-[#21453c] hover:text-[#fff] hover:border hover:border-gray-300">Sign in
          </button>
         
          <div className="text-center text-gray-400">
            Have an account?
            <span className="font-bold text-[#2E9844]"> 
              <Link to="/login"> Login</Link>
            </span>
          </div>
          </form>

          
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

export default SignUp;