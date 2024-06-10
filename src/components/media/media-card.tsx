"use client";

import { Media } from '@prisma/client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

type Props={
    file:Media
}

const MediaCard = ({file}:Props) => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
  return (
    <div>MediaCard</div>
  )
}

export default MediaCard