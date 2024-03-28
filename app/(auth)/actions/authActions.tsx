"use server"
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";
import prisma from "@/lib/prismadb";

export const createUser = async (formData: FormData)=>{
    try {
        const name = formData.get('name') as string;
        const email = formData.get("email") as string;
        const password = formData.get('password') as string;
        try {
            const existingUser = await prisma.user.findUnique({
                where:{email}
            })
            if(existingUser){
                 throw new Error(`User ${existingUser.email} already exists`)
            }
            const hashedPassword = await bcrypt.hash(password,10);
            await prisma.user.create({
                data:{
                    name,
                    email,
                    hashedPassword:hashedPassword
                }
            });
            revalidatePath('/');        
        } catch (existingUser) {
            return {
                existingUser:"you are already member, please sign-In"
            }
        }
    
    } catch (error) {
        console.error(error);
    }

}