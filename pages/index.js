import React from 'react';

const Home = (props) => {
    return (
    <div className="bg-gray-100 flex">
        <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
            
            <div className="xl:max-w-lg xl:ml-auto">
                <img className="h-10" src="/static/logo.svg" alt="Workcation"/>
                <img className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden" src="/static/beach-work.jpg" alt="woman workcationing"/>
                <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:text-4xl sm:mt-8 lg:text-3xl lg:text-4xl">You can work from anywhere. 
                    <br className="hidden lg:inline"/><span className="text-indigo-500">Take advantage of it.</span>
                </h1>
                <p className="mt-2 text-gray-600 sm:text-xl sm:mt-4">
                    Workcation helps you find work-friendly rentals in beautiful locations so you can enhoy some nice weather even when you are not on vacation.
                </p>
                <div className="mt-4 sm:mt-6">
                    <a href="#" className="inline-block bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:shadow-outline active:bg-indigo-600 md:hover:bg-green-400 text-white px-4 py-3 rounded shadow-lg uppercase tracking-wider font-semibold text-sm sm:text-base">Book your escape</a>
                </div>
            </div>
            
        </div>
        <div className="hidden lg:block lg:w-1/2 lg:relative">
            <img className="absolute inset-0 h-full w-full object-cover object-center" src="/static/beach-work.jpg" alt="woman workcationing"/>
        </div>
    </div>
    );
}

export default Home;