import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Contact, Mail, Pen } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import AppliedJobTable from './AppliedJobTable';
import UpdateProfileDialog from './UpdateProfileDialog';

const skills = ["javascript", "React js", "Node js", "Mongodb"]
const isResume = true;

const Profile = () => {
    const [open,setOpen] =useState(false)

    return (
        <div>
            <Navbar />
            <div className='max-w-4xl bg-white border border-gray-200 mx-auto rounded-2xl my-5 p-8'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-4'>
                        <Avatar className="h-24 w-24">
                            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScuQGyYbgV9HFyiunO9mF6_lnB6MYwcx6t3w&s" />
                        </Avatar>
                        <div>
                            <h1>Full Name</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid inventore laboriosam mollitia.</p>
                        </div>
                    </div>
                    <Button onClick={()=> setOpen} className='text-right' variant='outline'><Pen /></Button>
                </div>
                <div className='my-5'>
                    <div className='flex items-center gap-3 my-2'>
                        <Mail />
                        <span>Nk@gmail.com</span>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <Contact />
                        <span>9768747582</span>
                    </div>
                </div>
                <div>
                    <h1>Skills</h1>
                    <div className='flex items-center gap-1'>
                        {
                            skills.length !== 0 ? skills.map((item, index) => <Badge key={index}>{item}</Badge>) : <span>NA</span>
                        }
                    </div>
                </div>
                <div className='grid w-full max-w-sm'>
                    <Label className='text-md font-bold'>Resume</Label>
                    {
                        isResume ? <a target='blank' href="https://www.youtube.com/watch?v=F5EYXc91Cpo&t=21370s" className='text-blue-500 w-full hover:underline cursor-pointer'>Youtube Resume</a> : <span>NA</span>
                    }
                </div>
               
            </div>
            <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                    <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
                    <AppliedJobTable/>
                </div>
                <UpdateProfileDialog open={open} setOpen={setOpen}/>
        </div>
    )
}

export default Profile