
import Image from "next/image"
const LeftLayout = () => {
    return (
        <>
            <div className='hidden  rounded-r-[100px] md:flex flex-col gap-4 items-center text-left   justify-center bg-[#F0F4FC]'>
                <h1 className='text-5xl font-bold -ml-32 p-0'>Welcome to <br /> <span className='text-blue-400'>Next.js</span></h1>
                <p className='max-w-xl'>Lorem ipsum, dolor sit amet conseestias libero ut esse.</p>
                <Image src='/bro.png' width={408} height={434} alt='Login Image' priority />
            </div></>
    )
}

export default LeftLayout