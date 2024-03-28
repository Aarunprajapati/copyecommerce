"use client"
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { FiShoppingCart } from 'react-icons/fi'

const SignInForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const FormRef = useRef<HTMLFormElement>(null)
  const router = useRouter();

  const handleSubmit = async (e:React.FormEvent)=>{
    e.preventDefault();
    setIsSubmitting(true)
    const formData = new FormData(FormRef.current!);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string

    try {
      const result = await signIn("credentials",{
        redirect:false,
        email,
        password

      });
      if(result?.error){
        throw new Error(result.error)
      }
      toast.success("Successfully signed in");
      router.push('/')
      setIsSubmitting(false)
    } catch (error) {
      toast.error("Invalid credentials")
    }
  }
  return (
    <div className="mt-8 sm:mx-auto sm:max-w-2xl sm:w-full md:outline outline-1 outline-gray-200">
    <div className="px-4 py-8 sm:rounded-md sm:px-10">
      <div className="flex items-center justify-center w-full gap-2 py-4 mb-5 font-normal text-white uppercase bg-gray-700 rounded-md sm:text-2xl md:text-4xl">
        <h1>SignIn Form E-Commerce</h1>
        <FiShoppingCart/>
      </div>
      <form className="mb-5 space-y-6"
      ref={FormRef}
      onSubmit={handleSubmit}
     
      >
        <Input
        type="email"
        id="email"
        label="email"
        disabled={isSubmitting}
        />
        <Input
        type="password"
        id="password"
        label="password"
        disabled={isSubmitting}
        />
        <Button type="submit">Login</Button>
      </form>
      <Link href={'/sign-up'}>
      <span className="mt-3 hover:underline">
          Don't have an account? Sign Up &#8594;
        </span>
      </Link>
    </div>
  </div>
  )
}

export default SignInForm
