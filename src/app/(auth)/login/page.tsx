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
import LeftLayout from '../components/LeftLayout'
import Icons from '../components/Icons'
import Dropdown from '../components/dropdown'
import ButtonIcons from '../components/ButtonsIcons'
import { useAppDispatch } from '@/app/hook'
import { loginUser } from '@/features/user/userSlice'
import axios from 'axios'
const SubmitBtn = () => {
  const { pending } = useFormStatus()

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


  const { toast } = useToast()
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>()

  // const onSubmit: SubmitHandler<Inputs> = async (data) => {
  //   const { email, password } = data
  //   const res = await signIn("credentials", { email, password, callbackUrl: '/', redirect: false })
  //   if (res?.error) {
  //     toast({
  //       title: "Error",
  //       description: res.error,
  //       variant: 'destructive'
  //     })
  //     return
  //   }
  //   // dispatch(loginUser(res))
  //   toast({
  //     title: 'Logged in successfully',
  //     variant: 'default'
  //   })

  //   setTimeout(() => {
  //     redirect('/home')
  //   }, 2000)

  // }

  const onSubmit : SubmitHandler<Inputs> = async (data) => {
    const {email , password} = data
    try {
      const response = await axios.post('https://exam.elevateegy.com/api/v1/auth/signin',{
        email,password
      })
      dispatch(loginUser(response.data))
    }catch(error) {
      console.log(error)
    }
  }

  return (
    <div className='min-h-screen grid p-10 md:p-0 md:grid-cols-2'>
      {/* Left Side */}
      <LeftLayout />

      {/* Right Side */}
      <div>

        {/* Drop down and Signin and Register Buttons */}
        <ButtonIcons />

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
            <SubmitBtn />
          </form>

          <div className='relative flex py-5 items-center'>
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400">Or Continue with</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>

          {/* Social Media Icons */}
          <Icons />

        </div>
      </div>
    </div>
  )
}

export default LoginPage


