import Image from "next/image"
import { Progress } from "@/components/ui/progress"
import { Flag, Clock4 , CircleCheck } from "lucide-react"

const Icons = [
    {  
        id : 1,
        icon : Flag,
        title : 27,
        desc : 'Quiz Passed'
    },
    {
        id : 2,
        icon : Clock4,
        title : '10 min',
        desc : 'Total Time Spent'
    },
    {
        id : 3,
        icon : CircleCheck,
        title : 9,
        desc : 'Correct Answers'
    }
]


const UserInfo = () => {
    return (
        <div className="bg-gray-100 w-4/5 mx-auto p-2 md:p-3 rounded-md md:flex md:gap-5  ">
            <Image 
                src='/bird.jpg'
                alt='bird'
                className=""
                width={350}
                height={100}

            />
            <div className="flex mx-12 md:mx-0 flex-col gap-6">
            <h1 className="text-2xl text-blue-600 font-bold mt-5">Mohamed Elsayed</h1>
            <p>Front End Developer</p>
            <Progress className="text-blue-500 mt-2" value={70} />
            <div className="flex">
            {Icons.map((item) => {
                return (
                        <div key={item.id} className="flex flex-col md:flex-row text-center p-2 md:p-1 gap-3 items-center ">
                        <item.icon className="text-blue-400 bg-white text-4xl p-1 rounded-md" size={36} />
                        <div className="flex flex-col">
                        <span>{item.title}</span>
                        <span>{item.desc}</span>
                        </div>
                        </div>
                )
            })}
            </div>
            </div>
        </div>
    )
}

export default UserInfo


