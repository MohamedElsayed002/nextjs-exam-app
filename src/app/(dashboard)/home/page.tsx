'use client'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { useState } from "react"
import UserInfo from "@/components/UserInfo"
const HomePage = () => {


    const [search, setSearch] = useState('')

    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log(search)
    }

    return (
        <>

            <div className="max-w-3xl md:mx-56  p-10">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-[3fr,1fr] items-center gap-4 w-full max-w-screen-lg">
                        <div className="flex items-center rounded-md  bg-white pl-3 border border-gray-200">
                            <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
                                <Search />
                            </div>
                            <input
                                id="price"
                                name="price"
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search Quiz"
                                className="py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                            />
                        </div>
                        <div className="flex gap-4 items-center">
                            <Button className="bg-blue-600 hover:bg-blue-400">
                                Start Quiz
                            </Button>
                            <div>
                                <Image className="rounded-full w-8 h-8 object-cover" width={32} height={32} src='/bird.jpg' alt='dsd' />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <UserInfo/>
            <div className="w-4/5 rounded-md px-6 py-5 my-10 mx-auto bg-gray-100 ">
                <div className="flex justify-between">
                    <h1 className="text-blue-600">Exams</h1>
                    <h2 className="text-blue-600">View All</h2>
                </div>

            </div>
        </>
    )
}

export default HomePage