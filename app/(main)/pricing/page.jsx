import Pricing from '@/components/pricing';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const PricingPage = () => {
  return (
    <div className='container mx-auto px-4 py-12'>
      {/* Back Link */}
      <div className='flex justify-start mb-2'>
        <Link
          href='/'
          className='flex items-center text-muted-foreground hover:text-white transition-colors'
        >
          <ArrowLeft className='h-4 w-4 mr-2' />
          Back to Home
        </Link>
      </div>

      {/* Pricing Header */}
      <div className='max-w-full mx-auto mb-12 text-center'>
        <Badge
          variant='outline'
          className='bg-emerald-900/30 border-emerald-700/30 px-4 py-1 text-emerald-400 text-sm font-medium mb-4'
        >
          Smart Pricing Plans
        </Badge>

        <h1 className='text-4xl md:text-5xl font-bold gradient-title mb-4'>
          Fair Rates. No Surprises.
        </h1>

        <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
          Pick the right plan for your medical needs. Flexible, affordable, and built to support your health without unnecessary expenses.
        </p>
      </div>

      <Pricing />

      <div className='max-w-3xl mx-auto mt-16 text-center'>
        <h2 className='text-2xl font-bold text-white mb-2'>Need Assistance? Let's Get You Answers</h2>
        <p className='text-muted-foreground mb-4'>
          Reach out to our support team anytime at support@medilink.com
        </p>
      </div>
    </div>
  );
};

export default PricingPage;
