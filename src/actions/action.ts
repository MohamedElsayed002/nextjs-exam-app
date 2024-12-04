import { FormEvent } from "react";
import { signIn } from 'next-auth/react'
import { redirect } from "next/navigation";



// muhammed_mokbel@1elevate.com
// Elevate@123

// export const SubmitForm = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget); // Create FormData from the form element
//     const email = formData.get('email')
//     const password = formData.get('password')
//     const res = await signIn("credentials",{email,password,callbackUrl:'/',redirect : false})
//     console.log('resulttt',res)
//     if(res?.error) {
//         console.log('errrrrrrrrrrrrrror',res)
//         return 
//     }
    
//     setTimeout(() => {
//         redirect('/')
//     },2000)
// }

