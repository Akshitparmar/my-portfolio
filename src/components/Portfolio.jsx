import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'

import machinelearing from '../assets/portfolio/machinelearning.png'

import myportfolio from '../assets/portfolio/myportfolio.jpeg'

import drinkit from '../assets/portfolio/drinkitfillit.png'


import taxidata from '../assets/portfolio/taxidata.png'

import upcoming from '../assets/portfolio/upcoming.jpeg'



const Portfolio = () => {

    const portfolios=[
        {
            id:1,
            src:machinelearing,
            link:'https://github.com/Akshitparmar/The-Spark-Foundation-Task-Data-Science-internship',
        },
        {
            id:2,
            src: myportfolio,
            link:'https://github.com/Akshitparmar/my-portfolio',
        },
        {
            id:3,
            src: navbar,
            link:'https://github.com/Akshitparmar/The-Spark-Foundation-Task-Data-Science-internship',
        },
        {
            id:4,
            src:drinkit,
            link:'https://github.com/Akshitparmar/drinkitFillit',
        },
        {
            id:5,
            src:taxidata,
            link:'https://github.com/Akshitparmar/taxi-pipeline-data-engineering-project',
        },
        {
            id:6,
            src:upcoming,
            link:'',
        },
    ]



  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>
                Check Out some of my work right here
                </p>
            </div>
             

             





            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

            {
                portfolios.map(({id,src,link})=>(
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>

                 <a href={link} >  <img src={src} alt=''  className='rounded-md duration-200 hover:scale-105 '/> </a>
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >Demo</button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                    </div>
                </div>
                ))
             }
                
            </div>
        </div>

    </div>
  )
}

export default Portfolio
