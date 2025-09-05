'use client'

import { useState, useEffect, useRef } from 'react'
import { 
  Bot, 
  Users, 
  Dice6, 
  Map, 
  Palette, 
  Shield, 
  Zap, 
  Globe,
  MessageSquare,
  FileText,
  Camera,
  Music
} from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: 'AI Game Master Assistant',
    description: 'Intelligent AI helps create NPCs, generate storylines, and provide real-time game assistance.',
    category: 'AI-Powered'
  },
  {
    icon: Users,
    title: 'Real-time Multiplayer',
    description: 'Play with friends across the globe with seamless real-time synchronization.',
    category: 'Collaboration'
  },
  {
    icon: Dice6,
    title: 'Advanced Dice System',
    description: 'Comprehensive dice rolling with advantage, disadvantage, and custom modifiers.',
    category: 'Gaming'
  },
  {
    icon: Map,
    title: 'Interactive Maps',
    description: 'Upload and share battle maps with fog of war, tokens, and dynamic lighting.',
    category: 'Visual'
  },
  {
    icon: Palette,
    title: 'Character Creation',
    description: 'Create detailed characters with AI-generated backstories and custom artwork.',
    category: 'Creation'
  },
  {
    icon: Shield,
    title: 'Campaign Management',
    description: 'Organize campaigns, track progress, and manage player groups effortlessly.',
    category: 'Organization'
  },
  {
    icon: MessageSquare,
    title: 'In-Game Chat',
    description: 'Rich text chat with dice rolling, character voices, and action descriptions.',
    category: 'Communication'
  },
  {
    icon: FileText,
    title: 'Digital Character Sheets',
    description: 'Interactive character sheets that automatically calculate stats and abilities.',
    category: 'Tools'
  },
  {
    icon: Camera,
    title: 'Asset Library',
    description: 'Vast library of tokens, maps, music, and sound effects for immersive gameplay.',
    category: 'Content'
  },
  {
    icon: Music,
    title: 'Ambient Audio',
    description: 'Set the mood with background music and environmental sound effects.',
    category: 'Immersion'
  },
  {
    icon: Globe,
    title: 'Cross-Platform',
    description: 'Play on any device - desktop, tablet, or mobile with full feature support.',
    category: 'Accessibility'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance ensures smooth gameplay even with large groups.',
    category: 'Performance'
  }
]

const categories = ['All', 'AI-Powered', 'Collaboration', 'Gaming', 'Visual', 'Creation', 'Organization']

export function FeaturesSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')
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

  const filteredFeatures = selectedCategory === 'All' 
    ? features 
    : features.filter(feature => feature.category === selectedCategory)

  return (
    <section id="features" ref={sectionRef} className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need for
            <span className="text-primary block">Epic Adventures</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            RoleForge combines cutting-edge AI technology with intuitive design to create 
            the most powerful virtual tabletop experience available.
          </p>
        </div>

        {/* Category filter */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={`feature-card group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-4">
                <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  {feature.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg text-muted-foreground mb-6">
            Ready to experience the future of tabletop gaming?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Start Free Trial
            </button>
            <button className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-muted/50 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

