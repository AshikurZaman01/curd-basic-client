import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({user}) => {

    const {_id ,name , email , password , photo} = user || {}

    const handleDelete = (id) => {

        fetch(`http://localhost:3000/users/${id}` , {
            method: 'DELETE',
           
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount === 1){
                    alert('Delete Success');
                    setTimeout(() => {
                        window.location.reload(true);
                    }, 100);
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Password</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          <br/>
          <span className="badge badge-ghost badge-sm">{password}</span>
        </td>
        <td>{email}</td>
        <th>
            <Link to={`/updateuser/${user._id}`}>
                <button className="btn btn-ghost btn-xs">Edit</button>
            </Link>
          <button onClick={()=>handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
        </th>
      </tr>
    </tbody> 
  </table>
</div>
            </div>
        </div>
    );
};

export default UserCard;