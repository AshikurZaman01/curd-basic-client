import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateUser = () => {

    const data = useLoaderData()

    const {_id ,name , email , password , photo} = data || {}


    const handleUpdateForm = (e) => {
        e.preventDefault();

        const formData = (e.target);
        const name = formData.name.value;
        const email = formData.email.value;
        const password = formData.password.value;
        const photo = formData.photo.value;

        const newUser = {
            name,
            email,
            password,
            photo
        }

       fetch(`http://localhost:3000/users/${_id}` , {
        method  : 'PUT',
        headers : {
            'Content-Type' : 'application/json'
        },
        body    : JSON.stringify(newUser)

       })
       .then(res => res.json())
       .then(data => {
        console.log(data);
        if(data.acknowledged)
        {
            alert('User Updated Successfully');
        }
       })
       .catch(err => console.log(err))

    }

    return (
        <div>
            <h1 className='text-center text-4xl font-bold mb-5'>Update User </h1>

            <form onSubmit={handleUpdateForm} className='w-[50%] mx-auto border-blue-400 border px-10 py-16 rounded' >
                <div className='flex flex-col md:flex-row mb-5 md:mb-0'>
                    <label className='mb-2 md:mb-0' htmlFor='name'>Name</label>
                    <input type='text' defaultValue={name} name='name' id='name' className='w-full p-2 rounded-md border border-red-300' />
                </div><br />
                <div className='flex flex-col md:flex-row mb-5 md:mb-0'>
                    <label className='mb-2 md:mb-0' htmlFor='email'>Email</label>
                    <input type='email' defaultValue={email} name='email' id='email' className='w-full p-2 rounded-md border border-red-300' />
                </div><br />
                <div className='flex flex-col md:flex-row mb-5 md:mb-0'>
                    <label className='mb-2 md:mb-0' htmlFor='password'>Password</label>
                    <input type='text' defaultValue={password} name='password' id='password' className='w-full p-2 rounded-md border border-red-300' />
                </div><br />
                <div className='flex flex-col md:flex-row mb-5 md:mb-0'>
                    <label className='mb-2 md:mb-0' htmlFor='role'>Photo URL</label>
                    <input type='text' defaultValue={photo} name='photo' id='role' className='w-full p-2 rounded-md border border-
                    red-300' />
                </div>
                <button type='submit' className='w-full p-2 rounded-md bg-blue-500 hover:bg-blue-700 text-white'>Create</button>
            </form>
        </div>
    );
};

export default UpdateUser;