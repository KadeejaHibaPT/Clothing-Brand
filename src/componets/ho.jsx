import React from "react";
import './ho.css'
import { useState } from 'react';
function Ho() {
    const [count, setCount] = useState(0);
    
    return (
        <>
        <div className='container'>
            <h1 className="text-3xl font-bold underline">
            Hello world!
            </h1>
            <table className="table-auto border w-full bg-[url('../src/assets/c.jpg')] bg-cover bg-center">
            <thead>
                <tr>
                <th className="border px-4 py-2">#</th>
                <th className="border px-4 py-2">First</th>
                <th className="border px-4 py-2">Last</th>
                <th className="border px-4 py-2">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">Mark</td>
                <td className="border px-4 py-2">Otto</td>
                <td className="border px-4 py-2">@mdo</td>
                </tr>
                <tr>
                <td className="border px-4 py-2">2</td>
                <td className="border px-4 py-2">Jacob</td>
                <td className="border px-4 py-2">Thornton</td>
                <td className="border px-4 py-2">@fat</td>
                </tr>
                <tr>
                <td className="border px-4 py-2">3</td>
                <td className="border px-4 py-2">Larry</td>
                <td className="border px-4 py-2">the Bird</td>
                <td className="border px-4 py-2">@twitter</td>
                </tr>
            </tbody>
            </table>
            <div >
                <h2 className="text-2xl font-semibold text-center mb-4 mt-">Counter</h2>
                            <form className="form space-y-4 max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
                <label className="label text-lg font-medium">
                    <span className="label-text ">Count: 0</span>
                </label>

                <div className="btn-group flex space-x-2 items-center">
                    <button type="button" className="btn btn-primary ml-3">Increment</button>
                    <button type="button" className="btn btn-secondary">Decrement</button>
                </div>

                <div>
                    <label className="label">Name</label>
                    <input type="text" className="input input-bordered w-full" placeholder="Type your name" />
                </div>

                <div>
                    <label className="label">Email</label>
                    <input type="email" className="input input-bordered w-full" placeholder="Type your email" />
                </div>

                <div>
                    <label className="label">Password</label>
                    <input type="password" className="input input-bordered w-full" />
                </div>

                <div>
                    <label className="label">Confirm Password</label>
                    <input type="password" className="input input-bordered w-full" />
                </div>

                <button type="submit" className="btn btn-success w-full mt-4">Submit</button>
                </form>

                </div>   
        </div>
        </>
    );
    }
    export default Ho;