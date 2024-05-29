import { SideBar } from '@/components/SideBar'
import React, { useState } from 'react'
import { Section } from './Section'
import { ChatList } from './ChatList'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'


const HomePage = () => {
    const [isTrue , setIsTrue] = useState(false)
    return (
        <div className=' py-2 px-4 bg-gradient-to-tr from-[#d6c4f8] to-[#9785BA33] h-[100vh] overflow-y-auto' >
            <main className=' flex items-center gap-3'>
                <div className='lg:hidden block mt-2'>
                    <SideBar  />
                </div>
                <h1 className='text-[1.8rem] font-medium text-[#9785BA] '>Bot AI</h1>
            </main>
            {isTrue ? (
                <Section/>
            ) : (
                <ChatList/>
            )}
            <div className='h-[10%] flex items-center gap-2'>
                <Input/>
                <Button variant = "pink" size = "sm" className = "shadow-lg border-b-slate-500" >
                    Ask
                </Button>
                <Button variant = "pink" size = "sm" className = "shadow-lg border-b-slate-500" >
                    Save
                </Button>
            </div>
        </div>
    )
}

export default HomePage