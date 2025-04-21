import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-8">The page you are looking for does not exist.</p>
        <Link to="/" className="text-primary hover:underline">
          Return to Home
        </Link>
      </div>
    </div>
  )
}
