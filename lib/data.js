import {
    Calendar,
    Video,
    CreditCard,
    User,
    FileText,
    ShieldCheck,
} from "lucide-react";


//  JSON data for features
export const features = [
    {
        icon: <User className="h-6 w-6 text-emerald-400" />,
        title: "Set Up Your Profile",
        description:
            "Register and personalize your profile to receive tailored health suggestions and support.",
    },
    {
        icon: <Calendar className="h-6 w-6 text-emerald-400" />,
        title: "Schedule Appointments",
        description:
            "Explore doctors, view their schedules, and book appointments that suit your availability.",
    },
    {
        icon: <Video className="h-6 w-6 text-emerald-400" />,
        title: "Online Video Visits",
        description:
            "Consult with licensed doctors via high-quality video — no need to step outside your home.",
    },
    {
        icon: <CreditCard className="h-6 w-6 text-emerald-400" />,
        title: "Easy Credit System",
        description:
            "Choose flexible credit plans to consult with doctors at your convenience — pay only when you need.",
    },
    {
        icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
        title: "Trusted Professionals",
        description:
            "All listed doctors are verified and approved to ensure you receive safe and reliable care.",
    },
    {
        icon: <FileText className="h-6 w-6 text-emerald-400" />,
        title: "Health Records Access",
        description:
            "Keep track of your past visits, prescriptions, and notes in one secure dashboard.",
    },
];


// JSON data for testimonials
export const testimonials = [
    {
        initials: "SJ",
        name: "Sneha J.",
        role: "Patient",
        quote:
            "Loved the video consultation feature — I didn’t have to travel or wait in long queues for expert advice!",
    },
    {
        initials: "AK",
        name: "Dr. Arjun K.",
        role: "Dermatologist",
        quote:
            "Using this platform has allowed me to reach more patients while maintaining excellent quality care.",
    },
    {
        initials: "RM",
        name: "Ravi M.",
        role: "Patient",
        quote:
            "The credit-based model is budget-friendly. I subscribed once and my whole family now consults with ease.",
    },
];


// JSON data for credit benifits
export const creditBenefits = [
    "Every consultation costs <strong class='text-emerald-400'>2 credits</strong> — regardless of the duration",
    "Credits <strong class='text-emerald-400'>don’t expire</strong>, so you can use them anytime",
    "Monthly plans include <strong class='text-emerald-400'>renewable credits</strong> every cycle",
    "You can upgrade, pause, or cancel your plan <strong class='text-emerald-400'>anytime</strong> with zero hassle",
];
