import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Button from '@mui/material/Button';
function CardContent() {
  return (
    <div className='container'>
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div className="mx-auto max-w-md">
            {/* <img src="/img/logo.svg" className="h-6" alt="Tailwind Play" /> */}
            <Player
              autoplay
              speed={1.5}
              loop
              src="https://assets5.lottiefiles.com/packages/lf20_4qkb4ywv.json"
              style={{ height: "300px", width: "300px" }}
              > </Player>
      
              <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                <p className="text-justify">For optimal performance, this webapp is designed to run on Safari 15 or Chrome v102 and above. Running the webapp on other browsers may result in compatibility issues.</p>
                <p className="text-justify">To ensure the best experience, make sure you have Safari version 15 or higher installed on iOS 15 or above. If you encounter any issue, kindly run the webapp with the latest Google Chrome browser with the link below.</p>
              </div>
              {/* <div className="pt-8 text-base font-semibold leading-7">
                <p className="text-gray-900">Want to dig deeper into Tailwind?</p>
                <p>
                  <a href="https://tailwindcss.com/docs" className="text-sky-500 hover:text-sky-600">Read the docs &rarr;</a>
                </p>
              </div> */}
              <div className="justify-center">
                <Button variant="contained">OKAY</Button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardContent