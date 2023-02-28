import React from 'react'
import { Card } from 'flowbite-react'

function Cards() {
  return (
    <div >
        <h1 className='ml-20 mt-28 mb-14 text-2xl font-normal text-gray-800'>What type of space do you want ?</h1>
        <div className='flex gap-16 items-center justify-center'>
            
        <div className="w-[200px]">
  <Card
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1500&q=80"
  >
    <p>Apartment</p>
  </Card>
</div>

<div className="w-[200px]">
  <Card
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc="https://images.unsplash.com/photo-1580894896813-652ff5aa8146?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAzfHxvZmZpY2UlMjBzZXR1cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  >
    <p>Office</p>
  </Card>
</div>

<div className="w-[200px]">
  <Card
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  >
    <p>Hotel</p>
  </Card>
</div>

<div className="w-[200px]">
  <Card
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc="https://images.unsplash.com/photo-1617463874381-85b513b3e991?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHN0dWRpb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  >
    <p>Studio</p>
  </Card>
</div>

<div className="w-[200px]">
  <Card
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  >
    <p>Restaurant</p>
  </Card>
</div>
        </div>
    </div>
  )
}

export default Cards