'use client'
/* eslint-disable react/no-unescaped-entities */

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const Page = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('token')
        setIsAuthenticated(!!token) // Convert to boolean

        if (!token) {
            router.push('/adminLogin') // Redirect if not authenticated
        }
    }, [router]) // Add 'router' as a dependency

    if (isAuthenticated === null) return null // Prevent rendering during initial check

    return <div>Admin Page</div>
}

export default Page


