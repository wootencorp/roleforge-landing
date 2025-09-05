'use client'

import { useState, useEffect, useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Dungeon Master',
    avatar: 'SC',
    rating: 5,
    content: 'RoleForge has completely transformed how I run my campaigns. The AI assistance helps me create rich NPCs and storylines on the fly, making every session feel dynamic and engaging.',
    campaign: 'Curse of Strahd'
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    role: 'Player',
    avatar: 'MR',
    rating: 5,
    content: 'The character creation tools are incredible. I was able to build a complex warlock with a detailed backstory in minutes, complete with AI-generated artwork that perfectly captured my vision.',
    campaign: 'Tomb of Annihilation'
  },
  {
    id: 3,
    name: 'Emily Watson',
    role: 'Game Master',
    avatar: 'EW',
    rating: 5,
    content: 'As someone who runs multiple campaigns, the organization tools are a lifesaver. I can track everything from player progression to world events seamlessly.',
    campaign: 'Homebrew Campaign'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Player',
    avatar: 'DK',
    rating: 5,
    content: 'The real-time collaboration features are amazing. Our group spans three time zones, and RoleForge makes it feel like we\'re all sitting around the same table.',
    campaign: 'Dragon Heist'
  },
  {
    id: 5,
    name: 'Jessica Taylor',
    role: 'Dungeon Master',
    avatar: 'JT',
    rating: 5,
    content: 'The AI game master assistance is like having a co-DM who never gets tired. It helps me improvise when players go off-script and keeps the story flowing naturally.',
    campaign: 'Out of the Abyss'
  },
  {
    id: 6,
    name: 'Alex Thompson',
    role: 'Player',
    avatar: 'AT',
    rating: 5,
    content: 'I love how intuitive everything is. Even as a new player, I was able to jump in and start playing immediately. The digital character sheet makes tracking everything so much easier.',
    campaign: 'Lost Mine of Phandelver'
  }
]

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground'
        }`}
      />
    ))
  }

  return (
    <section id="testimonials" ref={sectionRef} className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Loved by
            <span className="text-primary block">Players & DMs Worldwide</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of adventurers who have discovered the magic of AI-enhanced tabletop gaming.
          </p>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
            <div className="flex justify-center mt-2">
              {renderStars(5)}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10K+</div>
            <div className="text-sm text-muted-foreground">Happy Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">Sessions Played</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-semibold">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex items-center mb-3">
                {renderStars(testimonial.rating)}
              </div>

              <Quote className="h-6 w-6 text-primary/40 mb-3" />
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {testimonial.content}
              </p>

              <div className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full inline-block">
                {testimonial.campaign}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join the Adventure?
            </h3>
            <p className="text-muted-foreground mb-6">
              Start your free trial today and experience the future of tabletop gaming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Start Free Trial
              </button>
              <button className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-muted/50 transition-colors">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

