"use client"

import FuzzyText from '@/components/ui/FuzzyText'
import { Button } from '@heroui/react'
import Link from 'next/link'
import React from 'react'

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen gap-6 px-4'>
            <FuzzyText
                fontSize="8rem"
                fontWeight="900"
                fontFamily="inherit"
                color="#009FE3"
                baseIntensity={0.1}
                hoverIntensity={0.3}
                enableHover={true}
                className='font-ashigea'
            >
                500
            </FuzzyText>
            <p className="text-center max-w-xl">Une légère erreur est survenue lors du chargement de la page. Nous travaillons dessus, veuillez réessayer plus tard.</p>
            <Link href="/">
                <Button className="bg-primary">Revenir à la page d'accueil</Button>
            </Link>
        </div>
    )
}

export default ErrorPage