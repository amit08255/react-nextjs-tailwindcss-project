import React from 'react';

const Home = (props) => {
    return (
        <div className="px-8 py-12">
            <img className="h-10" src="/static/logo.svg" alt="Workcation"/>
            <img className="mt-6 rounded-lg shadow-xl" src="/static/beach-work.jpg" alt="woman workcationing"/>
            <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight">You can work from anywhere. 
                <span className="text-indigo-500">Take advantage of it.</span>
            </h1>
            <p className="mt-2 text-gray-600">
                Workcation helps you find work-friendly rentals in beautiful locations so you can enhoy some nice weather even when you are not on vacation.
            </p>
            <div className="mt-4">
                <a href="#" className="inline-block bg-indigo-500 text-white px-4 py-2 rounded shadow-lg uppercase tracking-wider font-semibold text-sm">Book your escape</a>
            </div>
        </div>
    );
}

export default Home;