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
import axios from 'axios'


type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const LoginPage = () => {


  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await axios.post('https://exam.elevateegy.com/api/v1/auth/signup', {
        username: `${data.firstName} ${data.lastName}`,
        firstName : data.firstName,
        lastName : data.lastName,
        email: data.email,
        password: data.password,
        rePassword: data.confirmPassword,
        // gender: 'Male',
        // dateOfBirth: "01/15/2002",
        phone : '01099104410'
      })
      toast({
        title: "Account registered"
      })
      setTimeout(() => {
        redirect('/login')

      }, 2000)
    } catch (error: Error | unknown) {
      toast({
        title: 'Error',
        description: error?.response?.data?.error,
        variant: 'destructive'
      })
    }
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
        <div className='w-full md:w-3/5 mx-auto mt-10'>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
            <h2 className='text-xl mb-5 font-bold'>Register</h2>
            <Input
              placeholder='First Name'
              className='p-2 bg-gray-100'
              type='text'
              {...register("firstName", {
                required: "First name is required", minLength: {
                  value: 3,
                  message: "First name must be at least 3 characters long"
                }
              })}
            />
            {errors.firstName && <p className="text-red-500 -mt-2">{errors.firstName.message}</p>}

            <Input
              placeholder='Last Name'
              className='p-2 bg-gray-100'
              type='text'
              {...register("lastName", { required: "Last name is required" })}

            />
            {errors.lastName && <p className="text-red-500 -mt-2">{errors.lastName.message}</p>}

            <Input
              placeholder='Enter Email'
              className='p-2 bg-gray-100 focus:outline-none ring-inset focus:ring-4 focus:ring-blue-400 '
              // name='email'
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please enter a valid email address"
                }
              })}
              type='text'
            />
            {errors.email && <p className="text-red-500 -mt-2">{errors.email.message}</p>}

            <Input
              placeholder='Password'
              className='p-2 bg-gray-100'
              type='password'
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/,
                  message: "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
                },
              })}
            />
            {errors.password && <p className="text-red-500 -mt-2">{errors.password.message}</p>}

            <Input
              placeholder='Confirm Password'
              className='p-2 bg-gray-100'
              // name='ConfirmPassword'
              type='password'
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) => value === watch("password") || "Passwords do not match"
              })} />
            {errors.confirmPassword && <p className="text-red-500 -mt-2">{errors.confirmPassword.message}</p>}

            <p className='text-center -mt-1'>
              Already have an account? <Link className='text-blue-500 hover:underline' href='/login'>Login</Link>
            </p>
            <Button type='submit' className='bg-blue-500 hover:bg-blue-400' >Register</Button>
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


