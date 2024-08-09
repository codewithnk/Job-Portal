import React, { useState } from 'react'
import Navbar from '../shared/Navbar';
import { Button } from '../ui/button';
import CompaniesTable from './CompaniesTable';
import { useNavigate } from 'react-router-dom';

const Companies = () => {
    const [input,setInput] = useState("")
    const navigate = useNavigate();
  return (
    <div>
        <Navbar/>
        <div className='max-w-6xl mx-auto my-10'>
            <div className='flex items-center justify-between my-5'>
                <input
                className='w-fit'
                placeholder='Filter by name'
                onChange={(e) =>setInput(e.target.value)}
                 />
                 <Button onClick={() => navigate("/admin/companies/create")}>New Company</Button>
            </div>
            <CompaniesTable/>
        </div>
    </div>
  )
}

export default Companies;