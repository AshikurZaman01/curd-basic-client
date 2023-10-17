import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UserCard from '../CreateUser/UserCard';

const Home = () => {
    const usersData = useLoaderData();

    console.log(usersData);

    return (
        <div>
            <div className='text-center text-4xl'>User : {usersData.length}</div>

            <div>
                {
                    usersData.map((user) => <UserCard key={user._id} user={user}></UserCard>)
                }
            </div>
        </div>
    );
};

export default Home;