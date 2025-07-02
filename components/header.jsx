import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { checkUser } from '@/lib/checkUser'
import { Calendar, CreditCard, ShieldCheck, Stethoscope, User } from 'lucide-react'
import { checkAndAllocateCredits } from '@/actions/credits'
import { Badge } from './ui/badge'

const Header = async () => {

    const user = await checkUser();
    if (user?.role === "PATIENT") {
        await checkAndAllocateCredits(user);
    }

    return (
        <header className='fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-10 supports-[backdrop-filter]:bg-background/60'>
            <nav className='container mx-auto px-4 h-16 flex items-center justify-between'>
                <Link href='/'>
                    {/* Logo for large screens */}
                    <div className="hidden sm:block">
                        <Image
                            src="/logo1.png"
                            alt="MediLink Logo"
                            width={300}
                            height={120}
                            className='h-10 w-auto object-contain'
                        />
                    </div>

                    {/* Logo for small screens */}
                    <div className="block sm:hidden">
                        <Image
                            src="/logo2.png"
                            alt="MediLink Small Logo"
                            width={300}
                            height={120}
                            className='h-15 w-auto object-contain'
                        />
                    </div>
                </Link>

                <div className='flex items-center space-x-2'>
                    <SignedIn>
                        {/* ADMIN */}
                        {user?.role === "ADMIN" && (
                            <Link href={"/admin"}>
                                <Button
                                    variant={"outline"}
                                    className={"hidden md:inline-flex items-center gap-2"}
                                >
                                    <ShieldCheck className='h-4 w-4' />
                                    Admin Dashboard
                                </Button>
                                <Button
                                    variant={"ghost"}
                                    className={"md:hidden w-10 h-10 p-0"}
                                >
                                    <ShieldCheck className='h-4 w-4' />
                                </Button>

                            </Link>
                        )}

                        {/* DOCTOR */}
                        {user?.role === "DOCTOR" && (
                            <Link href={"/doctor"}>
                                <Button
                                    variant={"outline"}
                                    className={"hidden md:inline-flex items-center gap-2"}
                                >
                                    <Stethoscope className='h-4 w-4' />
                                    Doctor Dashboard
                                </Button>
                                <Button
                                    variant={"ghost"}
                                    className={"md:hidden w-10 h-10 p-0"}
                                >
                                    <Stethoscope className='h-4 w-4' />
                                </Button>

                            </Link>
                        )}

                        {/* PATIENT */}
                        {user?.role === "PATIENT" && (
                            <Link href={"/appointments"}>
                                <Button
                                    variant={"outline"}
                                    className={"hidden md:inline-flex items-center gap-2"}
                                >
                                    <Calendar className='h-4 w-4' />
                                    My Appointments
                                </Button>
                                <Button
                                    variant={"ghost"}
                                    className={"md:hidden w-10 h-10 p-0"}
                                >
                                    <Calendar className='h-4 w-4' />
                                </Button>

                            </Link>
                        )}

                        {/* UNASSIGNED */}
                        {user?.role === "UNASSIGNED" && (
                            <Link href={"/onboarding"}>
                                <Button
                                    variant={"outline"}
                                    className={"hidden md:inline-flex items-center gap-2"}
                                >
                                    <User className='h-4 w-4' />
                                    Complete Profile
                                </Button>
                                <Button
                                    variant={"ghost"}
                                    className={"md:hidden w-10 h-10 p-0"}
                                >
                                    <User className='h-4 w-4' />
                                </Button>

                            </Link>
                        )}
                    </SignedIn>

                    {(!user || user?.role === "PATIENT") && (
                        <Link href="/pricing">
                            <Badge
                                variant="outline"
                                className='h-9 bg-emerald-900/20 border-emerald-700/30 px-3 py-1 flex items-center gap-2'
                            >
                                <CreditCard className='h-3.5 w-3.5 text-emerald-400' />
                                <span className="text-emerald-400">
                                    {user && user?.role === "PATIENT" ? (
                                        <>
                                            {user.credits}{" "}
                                            <span className='hidden md:inline'>Credits</span>
                                        </>
                                    ) : (
                                        <>Pricing</>
                                    )}
                                </span>
                            </Badge>
                        </Link>
                    )}

                    <SignedOut>
                        <SignInButton>
                            <Button variant={"secondary"}>Sign In</Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "w-10 h-10",
                                    userButtonPopoverCard: "shadow-xl",
                                    userPreviewMainIdentifier: "font-semibold"
                                }
                            }}
                        />
                    </SignedIn>
                </div>
            </nav>
        </header>
    )
}

export default Header;
