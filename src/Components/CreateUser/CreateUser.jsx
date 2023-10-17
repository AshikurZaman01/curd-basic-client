import React from 'react';

const CreateUser = () => {

    

    const handleCreateForm = (e)=>{
        e.preventDefault(); // prevent page reload

        const formData = (e.target);
        const name = formData.name.value;
        const email = formData.email.value;
        const password = formData.password.value;
        const photo = formData.photo.value;

        const user = {
            name,
            email,
            password,
            photo
        }
        console.log(user); 

        fetch('http://localhost:3000/users',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => 
            {
                console.log(data);
                if(data.acknowledged === true)
                {
                    alert('Data Added Successfully');
                    formData.reset();
                }
            })
        .catch(err => console.log(err))

    }

    return (
        <div>
            <h1 className='text-center text-4xl font-bold mb-5'>Create User </h1>

            <form onSubmit={handleCreateForm} className='w-[50%] mx-auto border-blue-400 border px-10 py-16 rounded' >
                <div className='flex flex-col md:flex-row mb-5 md:mb-0'>
                    <label className='mb-2 md:mb-0' htmlFor='name'>Name</label>
                    <input type='text' name='name' id='name' className='w-full p-2 rounded-md border border-red-300' />
                </div><br />
                <div className='flex flex-col md:flex-row mb-5 md:mb-0'>
                    <label className='mb-2 md:mb-0' htmlFor='email'>Email</label>
                    <input type='email' name='email' id='email' className='w-full p-2 rounded-md border border-red-300' />
                </div><br />
                <div className='flex flex-col md:flex-row mb-5 md:mb-0'>
                    <label className='mb-2 md:mb-0' htmlFor='password'>Password</label>
                    <input type='text' name='password' id='password' className='w-full p-2 rounded-md border border-red-300' />
                </div><br />
                <div className='flex flex-col md:flex-row mb-5 md:mb-0'>
                    <label className='mb-2 md:mb-0' htmlFor='role'>Photo URL</label>
                    <input type='text' name='photo' id='role' className='w-full p-2 rounded-md border border-
                    red-300' />
                </div>
                <button type='submit' className='w-full p-2 rounded-md bg-blue-500 hover:bg-blue-700 text-white'>Create</button>
            </form>
        </div>
    );
};

export default CreateUser;