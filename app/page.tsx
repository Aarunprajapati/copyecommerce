import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Hero from '@/components/Hero'
import Info from '@/components/Info'
import TopProducts from '@/components/TopProducts'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Hero/>
    <Info/>
    <TopProducts/>
    </>
  )
}
