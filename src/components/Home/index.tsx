import React, { useState, useEffect } from 'react'
import { Card, Button } from 'flowbite-react'
import { RiArrowRightSLine } from 'react-icons/ri'
import { isLoggedIn } from 'stores/authStore';
import { useStore } from '@nanostores/react';


function Home() {

  const $isLoggedIn = useStore(isLoggedIn)
 
  return (
    <>
      {$isLoggedIn && <div className='container mx-auto px-10 pt-32'>
        <h4 className='font-medium	text-lg text-gray-700'>Welcome to MSK India</h4>
        <div className="grid grid-cols-3 gap-10 mt-5 mb-12">
          <Card className='h-16 '>
            <div className='flex items-center justify-between'>
              <p className='font-normal	'>
                You have received a new message
              </p>
              <Button>
                View
              </Button>
            </div>
          </Card>
          <Card className='h-16 '>
            <div className='flex items-center justify-between'>
              <p className='font-normal	'>
                A file upload has been requested
              </p>
              <Button>
                Upload
              </Button>
            </div>
          </Card>
          <div className='flex items-center'>
            <div className='bg-blue-100 hover:bg-blue-200 rounded-full cursor-pointer	 flex	items-center justify-center h-10 w-10'>
              <RiArrowRightSLine className="text-xl  text-gray-800" />
            </div>
          </div>

        </div>
        <hr />
      </div>}

    </>
  )
}

export default Home