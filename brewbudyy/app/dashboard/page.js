"use client"
import React from 'react'
import {useSession, signIn, signOut} from "next-auth/react"
import {useRouter} from 'next/navigation'

const Dashboard = () => {
    const { data: session } = useSession()
    if(!session){
        const router = useRouter()
        router.push('/dashboard')
    }
  return (
    <div>Dashboard</div>
  )
}
export default Dashboard