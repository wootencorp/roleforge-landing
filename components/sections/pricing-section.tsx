'use client'

import { useState, useEffect, useRef } from 'react'
import { Check, Zap, Crown, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const plans = [
  {
    name: 'Adventurer',
    description: 'Perfect for casual players and small groups',
    price: 0,
    period: 'month',
    icon: Sparkles,
    features: [
      'Up to 3 characters',
      'Join unlimited campaigns',
      'Basic character creation',
      'Standard dice rolling',
      'Community support',
      'Mobile app access'
    ],
    limitations: [
      'No AI assistance',
      'Limited asset library',
      'Basic character sheets'
    ],
    cta: 'Start Free',
    popular: false
  },
  {
    name: 'Hero',
    description: 'Ideal for regular players and small groups',
    price: 9.99,
    period: 'month',
    icon: Zap,
    features: [
      'Unlimited characters',
      'Create & manage campaigns',
      'AI character generation',
      'Advanced dice system',
      'Asset library access',
      'Real-time collaboration',
      'Custom character sheets',
      'Priority support'
    ],
    limitations: [],
    cta: 'Start Trial',
    popular: true
  },
  {
    name: 'Legend',
    description: 'For serious DMs and large gaming groups',
    price: 19.99,
    period: 'month',
    icon: Crown,
    features: [
      'Everything in Hero',
      'AI Game Master assistance',
      'Advanced campaign tools',
      'Custom asset uploads',
      'Voice & video integration',
      'Advanced analytics',
      'White-label options',
      'Dedicated support'
    ],
    limitations: [],
    cta: 'Start Trial',
    popular: false
  }
]

const faqs = [
  {
    question: 'Can I change my plan at any time?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'We offer a 14-day free trial for all paid plans. No credit card required to start your trial.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers for annual subscriptions.'
  },
  {
    question: 'Can I use RoleForge offline?',
    answer: 'RoleForge requires an internet connection for real-time features, but you can access your characters and campaign notes offline through our mobile app.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use enterprise-grade encryption and security measures to protect your data. We\'re SOC 2 compliant and never share your information with third parties.'
  }
]

export function PricingSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnnual, setIsAnnual] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const getPrice = (price: number) => {
    if (price === 0) return 0
    return isAnnual ? Math.round(price * 12 * 0.8) : price
  }

  const getPeriod = () => {
    return isAnnual ? 'year' : 'month'
  }

  return (
    <section id="pricing" ref={sectionRef} className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Choose Your
            <span className="text-primary block">Adventure Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start free and upgrade as your campaigns grow. All plans include our core features.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center bg-muted rounded-lg p-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                !isAnnual ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                isAnnual ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground'
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`pricing-card ${plan.popular ? 'featured' : ''} transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">
                    ${isAnnual && plan.price > 0 ? getPrice(plan.price) : plan.price}
                  </span>
                  <span className="text-muted-foreground ml-1">
                    /{getPeriod()}
                  </span>
                </div>
                {isAnnual && plan.price > 0 && (
                  <p className="text-sm text-muted-foreground mt-1">
                    ${plan.price}/month billed annually
                  </p>
                )}
              </div>

              <Button 
                className={`w-full mb-6 ${plan.popular ? '' : 'variant-outline'}`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                {plan.cta}
              </Button>

              <div className="space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
                {plan.limitations.map((limitation) => (
                  <div key={limitation} className="flex items-center opacity-50">
                    <div className="h-4 w-4 mr-3 flex-shrink-0 flex items-center justify-center">
                      <div className="h-0.5 w-3 bg-muted-foreground" />
                    </div>
                    <span className="text-sm text-muted-foreground">{limitation}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className={`max-w-3xl mx-auto transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-border rounded-lg">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <span className="font-medium">{faq.question}</span>
                  <div className={`transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

