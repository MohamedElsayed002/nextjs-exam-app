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
                width={350}
                height={100}

            />
            <div className="flex flex-col gap-6">
            <h1 className="text-2xl text-blue-600 font-bold mt-5">Mohamed Elsayed</h1>
            <p>Front End Developer</p>
            <Progress className="text-blue-500 mt-2" value={33} />
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


{/* <div className="md:max-w-4xl w-4/5 mx-auto px-5 py-5 bg-gray-100 rounded-md">
<div className="flex flex-col md:flex-row">
    <Image   src='/bird.jpg' alt='bird'width={200} height={150}/>
    <div className="flex flex-col px-5">
        <h1 className="text-xl text-blue-500 font-bold">Mohamed Elsayed</h1>
    </div>
</div>
</div> */}