"use client"
import Input from "@/components/ui/Input"
import Button from "@/components/ui/Button"
import React, { useState, useEffect, useRef } from "react"
import { useSession } from "next-auth/react"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { FiShoppingCart } from "react-icons/fi"
import Link from "next/link"
import { createUser } from "../actions/authActions"



const SignUpForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formref = useRef<HTMLFormElement>(null)
  const session = useSession()
  const router = useRouter();

  useEffect(()=>{
    if(session.status === "authenticated"){
      toast.success("you are already Signed in! ")
      router.push('/')
    }
  },[session.status, router])

  const handleSubmit = async(e: React.FormEvent)=>{
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(formref.current!);
    const result = await createUser(formData);
    if(result?.existingUser){
      toast.error(result.existingUser)
      formref.current?.reset()
    }else{
      toast.success("Welcome please Sign-In!");
      formref.current?.reset();
      router.push('/sign-in')
    }
    setIsSubmitting(false)
  }
  return (
    <div className="mt-8 sm:mx-auto sm:max-w-2xl sm:w-full md:outline outline-1 outline-gray-200">
      <div className="px-4 py-8 sm:rounded-md sm:px-10">
        <div className="flex items-center justify-center w-full gap-2 py-4 mb-5 font-normal text-white uppercase bg-gray-700 rounded-md sm:text-2xl md:text-4xl">
          <h1>SignUp Form E-Commerce</h1>
          <FiShoppingCart/>
        </div>
        <form className="mb-5 space-y-6"
        ref={formref}
        onSubmit={handleSubmit}
        >
          <Input
          type="text"
          id="name"
          label="name"
          disabled={isSubmitting}
          />
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
          <Button type="submit">Create an Account</Button>
        </form>
        <Link href={'/sign-in'}>
        <span className="mt-3 hover:underline">
            Already have an account? Sign In &#8594;
          </span>
        </Link>
      </div>
    </div>
  )
}

export default SignUpForm
