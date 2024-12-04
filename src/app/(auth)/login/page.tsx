'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import { SubmitForm } from '@/actions/action'
import { signIn } from 'next-auth/react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useToast } from '@/hooks/use-toast'
import { redirect } from 'next/navigation'
import { useFormStatus } from 'react-dom'


const SubmitBtn = () => {
  const {pending} = useFormStatus()
  
  return (
    <Button type='submit' className='bg-blue-500 hover:bg-blue-400' disabled={pending}>
    {pending ? 'please wait..' : 'Sign in'}
  </Button>
  )
}


type Inputs = {
  email: string;
  password: string
}

const LoginPage = () => {


  const {toast} = useToast()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data
    const res = await signIn("credentials", { email, password, callbackUrl: '/', redirect: false })
    if (res?.error) {
      toast({
        title: "Error",
        description: res.error,
        variant : 'destructive'
      })
      return
    }
    toast({
      title : 'Logged in successfully',
      variant : 'default'
    })

    setTimeout(() => {
      redirect('/')
    },2000)

  }

  return (
    <div className='min-h-screen grid p-10 md:p-0 md:grid-cols-2'>
      <div className='hidden  rounded-r-[100px] md:flex flex-col gap-4  items-center justify-center bg-[#F0F4FC]'>
        <h1 className='text-5xl font-bold'>Welcome to <br /> <span className='text-blue-400'>Next.js</span></h1>
        <p className='max-w-xl'>Lorem ipsum, dolor sit amet conseestias libero ut esse.</p>
        <Image src='/bro.png' width={408} height={434} alt='Login Image' priority />
      </div>
      <div className=''>
        <div className='flex md:justify-end gap-5  items-center  p-5 md:p-10 md:gap-10'>
          <h1 className=''>English</h1>
          <Button variant='ghost'>
            <Link href='/login'>Sign In</Link>
          </Button>
          <Button variant='outline'>
            <Link href='register'>Register</Link>
          </Button>
        </div>
        <div className='w-full md:w-3/5 mx-auto mt-20'>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
            <h2 className='text-xl mb-5 font-bold'>Sign in</h2>
            <Input
              autoFocus={true}
              placeholder='Enter Email'
              // name='email'
              className='p-2 bg-gray-100 focus:outline-none ring-inset focus:ring-4 focus:ring-blue-400 '
              type='text'
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format"
                }
              })}
            />
            {errors.email && <p className='text-red-500 text-xs -mt-2'>{errors.email.message}</p>}
            <Input
              // name='password'
              placeholder='Password'
              className='p-2 bg-gray-100'
              type='password'
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/,
                  message: "Password must include at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character."
                }
              })}
            />
            {errors.password && <p className="text-red-500 text-xs -mt-2">{errors.password.message}</p>}
            <p className='text-blue-500 text-end -mt-1 hover:underline'>
              <Link href='/forgot-password'>Recover Password?</Link>
            </p>
            {/* <Button type='submit' className='bg-blue-500 hover:bg-blue-400' >Sign in</Button> */}
            <SubmitBtn/>
          </form>
          <div className='relative flex py-5 items-center'>
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400">Or Continue with</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <div className='flex justify-center items-center gap-5'>
            <div onClick={() => signIn('github', { callbackUrl: "/" })} className='border p-2 rounded-md cursor-pointer'>
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
        </div>
      </div>
    </div>
  )
}

export default LoginPage


