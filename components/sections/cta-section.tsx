'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Users, Zap } from 'lucide-react'

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Main CTA */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
              Your Epic Adventure
              <span className="text-primary block">Starts Here</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of players and DMs who have discovered the magic of AI-enhanced tabletop gaming. 
              Start your free trial today and experience the future of TTRPGs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/auth/signup">
                <Button size="lg" className="text-lg px-8 py-4 group">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/auth/login">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                  Sign In
                </Button>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>

          {/* Feature highlights */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI-Powered</h3>
              <p className="text-muted-foreground">
                Intelligent assistance for character creation, storytelling, and world-building
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Real-time Collaboration</h3>
              <p className="text-muted-foreground">
                Play with friends anywhere in the world with seamless synchronization
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Optimized performance ensures smooth gameplay for groups of any size
              </p>
            </div>
          </div>

          {/* Social proof */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-muted-foreground mb-6">
              Trusted by over 10,000 players and DMs worldwide
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* Placeholder for partner/user logos */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-muted rounded-full" />
                <span className="text-sm font-medium">D&D Beyond</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-muted rounded-full" />
                <span className="text-sm font-medium">Roll20</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-muted rounded-full" />
                <span className="text-sm font-medium">Fantasy Grounds</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-muted rounded-full" />
                <span className="text-sm font-medium">Foundry VTT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

