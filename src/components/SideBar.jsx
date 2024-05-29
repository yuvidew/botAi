import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import { Header } from '@/Header/Header'


export const SideBar = () => {
    return (
        <Sheet>
        <SheetTrigger>
            <Menu className = "font-bold h-8 w-8 text-[#9785BA]" />
        </SheetTrigger>
        <SheetContent side = {'left'} className = "pt-[2rem] pb-[2rem]">
            <Header height={'h-[96vh]'} />
        </SheetContent>
        </Sheet>
    )
}
