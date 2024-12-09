'use client'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { redirect } from "next/navigation";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import LeftLayout from "../components/LeftLayout";
import Icons from "../components/Icons";
import ButtonIcons from "../components/ButtonsIcons";

type Inputs = {
  email: string;
  newPassword: string;

}
const RecoverPasswordPage = () => {


  const { toast } = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  // Email
  const [email, setEmail] = useState<string | undefined>('')

  //  Code
  const [verify, setVerify] = useState<string | undefined>('')

  // Email Send
  const [recoverEmail, setRecoverEmail] = useState<boolean>(true)

  // Code Send
  const [recover, setResetPassword] = useState(true)

  const handleSubmitEmail = async (e: any) => {
    e.preventDefault()
    try {
      const response = await axios.post('https://exam.elevateegy.com/api/v1/auth/forgotPassword', { email })
      console.log(response)
      toast({ title: 'Success!' })
      setRecoverEmail(false)
    } catch (error) {
      toast({ title: 'Error', variant: 'destructive', description: error?.response?.data?.message })
    }
  }

  const handleVerify = async (e: any) => {
    e.preventDefault()
    try {

      const response = await axios.post('https://exam.elevateegy.com/api/v1/auth/verifyResetCode', {
        resetCode: verify
      })
      setResetPassword(false)
      toast({ title: 'Success!' })
    } catch (error) {
      toast({ title: 'Error', variant: 'destructive', description: error?.response?.data?.message })
    }

  }



  const handleResetPassword: SubmitHandler<Inputs> = async (data) => {
    const { email, newPassword } = data
    try {
      const response = await axios.put('https://exam.elevateegy.com/api/v1/auth/resetPassword', {
        email,
        newPassword
      },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        })
      toast({ title: 'Password Changed Successfully', description: 'Please Login' })

      setTimeout(() => {
        redirect('/login')
      }, 2000)
    } catch (error) {
      console.log(error)
      toast({ title: 'Error', variant: 'destructive', description: error?.response?.data?.message })
    }
  }


  return (
    <>
      <div className='min-h-screen grid p-10 md:p-0 md:grid-cols-2'>
        {/* Left Side */}
        <LeftLayout/>

        {/* Right Side */}
        <div>

          {/* Drop down and Signin and Register Buttons */}
          <ButtonIcons/>

          <div className='w-full md:w-3/5 mx-auto mt-20'>
            {/* Step 1- Enter Email */}

            {
              recoverEmail && (
                <form onSubmit={handleSubmitEmail}>
                  <h1 className="text-xl font-bold mb-5">Forgot your password?</h1>
                  <Input
                    autoFocus={true}
                    placeholder='Enter Email'
                    name='email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='p-2 bg-gray-100 focus:outline-none ring-inset focus:ring-4 focus:ring-blue-400 '
                    type='text'
                  />
                  <Button
                    type='submit'
                    className='bg-blue-500 hover:bg-blue-400 w-full my-5'
                  >
                    Recover Email
                  </Button>

                </form>
              )
            }

            
            {/* Step 2 - Enter Code  */}
            {
              !recoverEmail && recover && (
                <form onSubmit={handleVerify}>
                  <h1 className="text-xl font-bold mb-5">Verify Code</h1>
                  <Input
                    autoFocus={true}
                    placeholder='Enter Code'
                    name='verify'
                    required
                    value={verify}
                    onChange={(e) => setVerify(e.target.value)}
                    className='p-2 bg-gray-100 focus:outline-none ring-inset focus:ring-4 focus:ring-blue-400 '
                    type='text'
                  />
                  <Button
                    type='submit'
                    className='bg-blue-500 hover:bg-blue-400 w-full my-5'
                  >
                    Recover Email
                  </Button>

                </form>
              )}

              {/* Step 3 Reset Password */}
            {
              !recover && (
                <form onSubmit={handleSubmit(handleResetPassword)}>
                  <h1 className="text-xl font-bold mb-5">Set a Password</h1>
                  <Input
                    placeholder='Enter Email'
                    required
                    {...register('email', {
                      required: "Email is required",
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email format"
                      }
                    })}
                    className='p-2 bg-gray-100 focus:outline-none ring-inset focus:ring-4 focus:ring-blue-400 '
                    type='text'
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}

                  <Input
                    placeholder="Enter New Password"
                    required
                    type='password'
                    className="p-2 bg-gray-100 my-2"
                    {...register('newPassword', {
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/,
                        message: "Password must include at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character."
                      }
                    })}
                  />
                  {errors.newPassword && <p className="text-red-500 text-xs mt-1">{errors.newPassword.message}</p>}

                  <Button
                    type='submit'
                    className='bg-blue-500 hover:bg-blue-400 w-full my-5'
                  >
                    Sign In
                  </Button>

                </form>
              )
            }

            <div className='relative flex py-5 items-center'>
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-gray-400">Or Continue with</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>

            {/* Social Media Icons */}
            <Icons/>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecoverPasswordPage;