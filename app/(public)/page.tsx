import React from 'react'
import { GradientButton } from "@/components/gradient-button"
const page = () => {
  return (
    <div className="flex gap-8">
      <GradientButton>Get Started</GradientButton>
      <GradientButton variant="variant">Get Started</GradientButton>
    </div>
  )
}

export default page
