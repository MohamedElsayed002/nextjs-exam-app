import Image from "next/image"
import { signIn } from 'next-auth/react'

const Icons = () => {
    return (
        <>
            <div className='flex justify-center items-center gap-5'>
                <div className='border p-2 rounded-md cursor-pointer'>
                    <Image src='/Vector.png' width={20} height={20} alt='apple' />
                </div>
                <div className='border p-2 rounded-md cursor-pointer'>
                    <Image src='/Apple.png' width={20} height={20} alt='apple' />

                </div>
                <div className='border p-2 rounded-md cursor-pointer'>
                    <Image src='/Google2.png' width={20} height={20} alt='Google' />

                </div>
                <div className='border p-2 rounded-md cursor-pointer'>
                    <Image src='/Twitter.png' className='object-contain' width={20} height={20} alt='apple' />
                </div>
            </div>
        </>
    )
}

export default Icons