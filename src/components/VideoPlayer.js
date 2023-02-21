//import ".styles.css"

import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

function VideoPlayer() {
  return (
    <>
    <Player
autoplay
speed={1.5}
loop
src="https://assets5.lottiefiles.com/packages/lf20_4qkb4ywv.json"
style={{ height: "300px", width: "300px" }}
> </Player>
</>
  )
}

export default VideoPlayer

