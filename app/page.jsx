import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Stethoscope } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { creditBenefits, features, testimonials } from "@/lib/data";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <div className="bg-background">

      {/* Hero Section */}
      <section className="relative overflow-hidden py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="outline" className="bg-emerald-900/30 border-emerald-700/30 px-4 py-2 text-emerald-400 text-sm font-medium">
                Your Digital Health Partner
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Access Quality <br />
                Medical Care <br />
                <span className="gradient-title">from anywhere</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-md">
                Instantly connect with verified doctors, manage prescriptions, and stay in charge of your wellness—all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-emerald-600 text-white hover:bg-emerald-700">
                  <Link href="/onboarding">
                    Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-emerald-700/30 hover:bg-muted/80">
                  <Link href="/doctors">Explore Doctors</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/banner1.png"
                alt="Online Health Consultation"
                width={600}
                height={500}
                priority
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              Seamless Healthcare Access
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover how our platform makes managing your health convenient and efficient.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card border-emerald-900/20 hover:border-emerald-800/40 transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="bg-emerald-900/20 p-3 rounded-lg w-fit mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-900/30 border-emerald-700/30 px-4 py-1 text-emerald-400 text-sm font-medium mb-4">
              Flexible Plans
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              Choose a Plan That Works for You
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Affordable consultation credits tailored for individuals and families alike.
            </p>
          </div>

          <Pricing />

          <Card className="mt-12 bg-muted/20 border-emerald-900/30">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white flex items-center">
                <Stethoscope className="h-5 w-5 mr-2 text-emerald-400" />
                Understanding Credit Usage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {creditBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1 bg-emerald-900/20 p-1 rounded-full flex">
                      <Check className="h-4 w-4 text-emerald-400" />
                    </div>
                    <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: benefit }} />
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-900/30 border-emerald-700/30 px-4 py-1 text-emerald-400 text-sm font-medium mb-4">
              Community Voices
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              Trusted by Users Nationwide
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real experiences from people who rely on our platform every day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-emerald-900/20 hover:border-emerald-800/40 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-900/20 flex items-center justify-center mr-4">
                      <span className="text-emerald-400 font-bold">{testimonial.initials}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-emerald-900/30 to-emerald-950/20 border-emerald-800/20">
            <CardContent className="p-8 md:p-12 lg:p-16 relative overflow-hidden">
              <div className="max-w-2xl relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                  Start Your Health Journey Today
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join our growing network of users and experience hassle-free, expert-led healthcare. No long queues. No paperwork.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-emerald-600 text-white hover:bg-emerald-700">
                    <Link href="/sign-up">Join Now</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-emerald-700/30 hover:bg-muted/80">
                    <Link href="/pricing">See Our Plans</Link>
                  </Button>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-emerald-800/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="absolute left-0 bottom-0 w-[200px] h-[200px] bg-emerald-700/10 rounded-full blur-3xl -ml-10 -mb-10"></div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
