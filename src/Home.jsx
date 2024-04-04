import React, { useState, useEffect } from 'react';

const Home = () => {
    const [item, setItem] = useState(null);

    useEffect(() => {
        callApi(setItem);
    }, []);

    return (
    <>
        <div className='flex justify-center mt-6'>
            <h1 className='text-6xl'>Welcome to Warframe Tracker!</h1>
            
        </div>
        <div className='justify-items-start mt-6'>
            <h1 className='text-2xl'>The nightwave started at {item}</h1>
            <br />
            <h1 className='text-2xl'>The nightwave ends at {item}</h1>
        </div>
    </>
    );
};

function callApi(setItem) {
    fetch('https://api.warframestat.us/pc/nightwave/', { method: 'GET' })
        .then(response => response.json())
        .then(data => {
            const firstItem = data['expiry'];
            let displayed = firstItem.split("T")[0]
            data['asd'] = data['expiry'].split("T")[0]
            setItem(displayed);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

export default Home;