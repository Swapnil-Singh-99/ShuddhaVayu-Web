import React from 'react';

const LandingPage = () => {


  return (
    <div className="bg-Main min-h-screen flex items-center justify-center">
      <div className="text-white text-center justify-center flex flex-col">
        {/* <img className="text-5xl font-bold mb-4 py-5 w-0" src="https://i.postimg.cc/CLpt6K0y/SIH2023-logo-1.png" alt="My Image" /> */}
        <h1 className="text-5xl font-bold mb-4 py-5">Shuddhavayu</h1>

        <h1 className="text-4xl font-bold mb-4">Making a pollution free Bharat</h1>
        <p className="text-lg mb-8">#PradushanRahitBharat</p>
        <div className='flex justify-center'>
          {/* <div>
        <a
          href="#"
          className="bg-white text-Main hover:bg-Main hover:text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out"
        >
          User Login
        </a>

        </div> */}
          <div>
            <a
              href="/adminlogin"
              className="bg-white text-Main hover:bg-Main hover:text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out"
            >
              Admin Login
            </a>
          </div>

        </div>


      </div>
    </div>
  );
};

export default LandingPage;
