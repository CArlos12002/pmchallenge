'use client'

import { useState, useEffect, useRef } from 'react'

export default function CarewearTransformation() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('hero')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [selectedMetric, setSelectedMetric] = useState('engagement')
  const [isLoading, setIsLoading] = useState(true)
  const heroRef = useRef(null)

  // Smooth scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0
      setScrollProgress(currentProgress)

      // Update active section
      const sections = ['hero', 'problem', 'solution', 'metrics', 'intelligence', 'results']
      const scrollPosition = window.scrollY + 200
      
      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  // Performance data for dynamic tables
  const performanceData = {
    current: {
      views: 30000,
      engagement: 4,
      viralHits: 1.5,
      roi: 'Unknown',
      production: 19,
      satisfaction: 5
    },
    month1: {
      views: 45000,
      engagement: 6,
      viralHits: 4.5,
      roi: '-38%',
      production: 12,
      satisfaction: 7
    },
    month2: {
      views: 75000,
      engagement: 8,
      viralHits: 9,
      roi: '-7%',
      production: 8,
      satisfaction: 8
    },
    month3: {
      views: 120000,
      engagement: 12,
      viralHits: 17.5,
      roi: '+49%',
      production: 5.5,
      satisfaction: 9
    }
  }

  const metricsData = {
    engagement: {
      title: 'Engagement Rate Evolution',
      data: [
        { phase: 'Current', value: 4, target: 4 },
        { phase: '30 Days', value: 6, target: 5 },
        { phase: '60 Days', value: 8, target: 7 },
        { phase: '90 Days', value: 12, target: 10 }
      ]
    },
    viral: {
      title: 'Viral Hits Per Month',
      data: [
        { phase: 'Current', value: 1.5, target: 2 },
        { phase: '30 Days', value: 4.5, target: 4 },
        { phase: '60 Days', value: 9, target: 8 },
        { phase: '90 Days', value: 17.5, target: 15 }
      ]
    },
    roi: {
      title: 'ROI Progression',
      data: [
        { phase: 'Current', value: 0, target: 0 },
        { phase: '30 Days', value: -38, target: -20 },
        { phase: '60 Days', value: -7, target: 10 },
        { phase: '90 Days', value: 49, target: 40 }
      ]
    }
  }

  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleEmailContact = () => {
    window.location.href = 'mailto:contact@example.com?subject=Carewear Transformation Proposal'
  }

  const handleNavigation = (path) => {
    // Navegación real usando window.location
    window.location.href = path
    
    // Alternativa: Si quieres abrir en nueva pestaña, usa:
    // window.open(path, '_blank')
  }

  // Loading screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="relative">
          <div className="w-32 h-32 border-4 border-gray-800 rounded-full animate-spin border-t-white"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-bold text-xl">CC</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .animation-delay-600 {
          animation-delay: 600ms;
        }
      `}</style>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50">
        <div 
          className="h-full bg-white transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-md z-40 border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-8">
              <div className="text-2xl font-bold">
                <span className="inline-block transform hover:scale-105 transition-transform cursor-pointer">
                  CAREWEAR
                </span>
              </div>
              <div className="hidden md:flex gap-6">
                <button 
                  onClick={() => smoothScrollTo('problem')}
                  className={`hover:text-gray-300 transition-colors ${activeSection === 'problem' ? 'text-white' : 'text-gray-500'}`}
                >
                  Problem
                </button>
                <button 
                  onClick={() => smoothScrollTo('solution')}
                  className={`hover:text-gray-300 transition-colors ${activeSection === 'solution' ? 'text-white' : 'text-gray-500'}`}
                >
                  Solution
                </button>
                <button 
                  onClick={() => smoothScrollTo('metrics')}
                  className={`hover:text-gray-300 transition-colors ${activeSection === 'metrics' ? 'text-white' : 'text-gray-500'}`}
                >
                  Metrics
                </button>
                <button 
                  onClick={() => smoothScrollTo('results')}
                  className={`hover:text-gray-300 transition-colors ${activeSection === 'results' ? 'text-white' : 'text-gray-500'}`}
                >
                  Results
                </button>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Carlos Anaya Ruiz Button - Destacado */}
              <button
                onClick={() => handleNavigation('/car')}
                className="px-4 py-2 bg-white text-black hover:bg-gray-200 transition-colors text-sm font-medium"
              >
                Carlos Anaya Ruiz
              </button>
              
              <button
                onClick={() => handleNavigation('/ttn')}
                className="hidden lg:inline-block px-4 py-2 border border-gray-700 hover:border-white transition-colors text-sm"
              >
                30-60-90 Plan
              </button>
              <button
                onClick={() => handleNavigation('/ofd')}
                className="hidden lg:inline-block px-4 py-2 border border-gray-700 hover:border-white transition-colors text-sm"
              >
                Operational Flow
              </button>
              <button
                onClick={() => handleNavigation('/chat')}
                className="hidden md:inline-block px-4 py-2 bg-white text-black hover:bg-gray-200 transition-colors text-sm font-medium"
              >
                AI Intelligence →
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden"
                aria-label="Toggle mobile menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center gap-1">
                  <span className={`block w-full h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                  <span className={`block w-full h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-full h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-30 md:hidden pt-20">
          <div className="flex flex-col gap-8 p-8">
            <button onClick={() => { handleNavigation('/car'); setIsMenuOpen(false); }} className="text-2xl text-left text-white font-medium">Carlos Anaya Ruiz</button>
            <button onClick={() => { smoothScrollTo('problem'); setIsMenuOpen(false); }} className="text-2xl text-left">Problem</button>
            <button onClick={() => { smoothScrollTo('solution'); setIsMenuOpen(false); }} className="text-2xl text-left">Solution</button>
            <button onClick={() => { smoothScrollTo('metrics'); setIsMenuOpen(false); }} className="text-2xl text-left">Metrics</button>
            <button onClick={() => { smoothScrollTo('results'); setIsMenuOpen(false); }} className="text-2xl text-left">Results</button>
            <button onClick={() => { handleNavigation('/ttn'); setIsMenuOpen(false); }} className="text-2xl text-left">30-60-90 Plan</button>
            <button onClick={() => { handleNavigation('/ofd'); setIsMenuOpen(false); }} className="text-2xl text-left">Operational Flow</button>
            <button onClick={() => { handleNavigation('/chat'); setIsMenuOpen(false); }} className="text-2xl text-left">AI Intelligence</button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="hero" ref={heroRef} className="min-h-screen flex items-center justify-center relative">
        {/* Animated background grid */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem]">
            <div 
              className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black transition-transform duration-75"
              style={{
                transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
              }}
            />
          </div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <div className="mb-8 animate-fade-in">
            <span className="inline-block px-4 py-2 border border-gray-700 text-sm text-gray-400">
              STRATEGIC TRANSFORMATION PROPOSAL
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter animate-fade-in-up">
            From Content Chaos
            <br />
            <span className="text-gray-500">to Intelligence-Driven</span>
            <br />
            Excellence
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Transform Carewear Co.s content operation into a data-powered machine that delivers 
            <span className="text-white font-semibold"> 300% engagement growth</span> in 90 days.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <button 
              onClick={() => smoothScrollTo('problem')}
              className="px-8 py-4 bg-white text-black font-medium hover:bg-gray-200 transition-all hover:scale-105"
            >
              Discover the Solution
            </button>
            <button 
              onClick={() => handleNavigation('/chat')}
              className="px-8 py-4 border border-gray-700 hover:border-white transition-all hover:scale-105"
            >
              Explore AI Intelligence
            </button>
          </div>

          {/* Key metrics preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 animate-fade-in-up animation-delay-600">
            <div className="p-6 border border-gray-900 hover:border-gray-700 transition-colors">
              <div className="text-3xl font-bold mb-2">$8.5K</div>
              <div className="text-sm text-gray-500">Monthly Investment</div>
            </div>
            <div className="p-6 border border-gray-900 hover:border-gray-700 transition-colors">
              <div className="text-3xl font-bold mb-2">300%</div>
              <div className="text-sm text-gray-500">Engagement Growth</div>
            </div>
            <div className="p-6 border border-gray-900 hover:border-gray-700 transition-colors">
              <div className="text-3xl font-bold mb-2">90</div>
              <div className="text-sm text-gray-500">Days to Transform</div>
            </div>
            <div className="p-6 border border-gray-900 hover:border-gray-700 transition-colors">
              <div className="text-3xl font-bold mb-2">#1</div>
              <div className="text-sm text-gray-500">Category Position</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
      
      {/* Problem Analysis Section */}
      <section id="problem" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="inline-block px-4 py-2 border border-gray-800 text-sm text-gray-500 mb-4">
              THE REAL PROBLEM
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Its Not About Organization
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl">
              The team is creating content IN a vacuum, not FOR an audience. 
              Theres no feedback loop between creation and performance.
            </p>
          </div>

          {/* Problem Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="group">
              <div className="p-8 border border-gray-900 hover:border-gray-700 transition-all h-full">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-2xl font-bold mb-4">Zero Data Culture</h3>
                <p className="text-gray-400 mb-4">
                  No performance tracking, no insights, no learning. The team is flying blind, 
                  creating content based on assumptions rather than audience behavior.
                </p>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    No systematic tracking of what works
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Decisions based on opinions, not data
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Zero learning mechanism between cycles
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="p-8 border border-gray-900 hover:border-gray-700 transition-all h-full">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4">Misaligned Priorities</h3>
                <p className="text-gray-400 mb-4">
                  Client wants one video, Creative Lead another, creators working on different things. 
                  No single source of truth for what matters most.
                </p>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Conflicting directions from stakeholders
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    No data-driven decision framework
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Team frustration and confusion
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="p-8 border border-gray-900 hover:border-gray-700 transition-all h-full">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-2xl font-bold mb-4">Reactive Workflow</h3>
                <p className="text-gray-400 mb-4">
                  Last-minute changes, waiting for assets, scattered feedback. 
                  The team is always catching up instead of staying ahead.
                </p>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    19 hours per video (vs 5.5 optimized)
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Multiple revision cycles
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    No predictive planning capability
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="p-8 border border-gray-900 hover:border-gray-700 transition-all h-full">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-2xl font-bold mb-4">No Strategic Vision</h3>
                <p className="text-gray-400 mb-4">
                  Videos feel random because they are. No content pillars, no narrative arc, 
                  no connection to business goals.
                </p>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Content doesnt build on successes
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    No clear value proposition
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Missing competitive differentiation
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Evidence from Analysis */}
          <div className="bg-gray-950 border border-gray-900 rounded-lg p-8 mb-20">
            <h3 className="text-2xl font-bold mb-6">Evidence from Analysis</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold mb-2 text-gray-300">Client Behavior Pattern</h4>
                <p className="text-sm text-gray-500">
                  Client loved how to style scrubs but Creative Lead pushes different content - 
                  reveals no data-driven framework
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-gray-300">Creator Frustration</h4>
                <p className="text-sm text-gray-500">
                  Terse Slack messages and waiting for assets shows burnout from creating without purpose
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-gray-300">Quality vs Quantity Trap</h4>
                <p className="text-sm text-gray-500">
                  Hitting 16 videos/month target but engagement declining - classic vanity metric problem
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-32 px-6 bg-gray-950 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="inline-block px-4 py-2 border border-gray-800 text-sm text-gray-500 mb-4">
              THE BIG FIX
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Performance-Driven Creation
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl">
              Transform from random content creation to a data-powered system where every decision 
              is backed by insights and every video builds on previous learnings.
            </p>
          </div>

          {/* Before/After Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-red-400">❌ Current State</h3>
              <div className="space-y-4">
                {[
                  { icon: '💭', text: 'Random idea generation' },
                  { icon: '🎬', text: 'Create content blindly' },
                  { icon: '📱', text: 'Post and pray' },
                  { icon: '🤷', text: 'Wonder why engagement dropped' }
                ].map((item, index) => (
                  <div key={index} className="p-4 bg-red-950/20 border border-red-900/50 rounded">
                    <div className="flex items-center gap-3">
                      <span className="text-red-500">{item.icon}</span>
                      <span>{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-green-400">✅ Future State</h3>
              <div className="space-y-4">
                {[
                  { icon: '📊', text: 'Analyze top performers' },
                  { icon: '🎯', text: 'Create data-backed content' },
                  { icon: '🔬', text: 'A/B test and iterate' },
                  { icon: '📈', text: 'Scale what works' }
                ].map((item, index) => (
                  <div key={index} className="p-4 bg-green-950/20 border border-green-900/50 rounded">
                    <div className="flex items-center gap-3">
                      <span className="text-green-500">{item.icon}</span>
                      <span>{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Performance Sprint System */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-8 text-center">The Performance Sprint System</h3>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { day: 'M', title: 'Data Day', desc: 'Analyze & Plan' },
                { day: 'T', title: 'Create', desc: 'Data-backed production' },
                { day: 'W', title: 'Create', desc: 'Test variations' },
                { day: 'T', title: 'Optimize', desc: 'Refine & publish' },
                { day: 'F', title: 'Learn', desc: 'Extract insights' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gray-900 rounded-full flex items-center justify-center text-2xl font-bold">
                    {item.day}
                  </div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Innovation */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-950 border border-gray-800 rounded-lg p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">The Game Changer</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Implement a Performance Sprint system where every week starts with
              data analysis and ends with actionable insights for the next sprint.
            </p>
          </div>
        </div>
      </section>

      {/* Dynamic Metrics Section */}
      <section id="metrics" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="inline-block px-4 py-2 border border-gray-800 text-sm text-gray-500 mb-4">
              PROJECTED IMPACT
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Transformation Metrics
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl">
              Real numbers, real impact. Watch how the Content Intelligence System transforms 
              every aspect of Carewears content operation.
            </p>
          </div>

          {/* Interactive Metrics Selector */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-4 justify-center">
              {Object.entries(metricsData).map(([key, data]) => (
                <button
                  key={key}
                  onClick={() => setSelectedMetric(key)}
                  className={`px-6 py-3 border transition-all ${
                    selectedMetric === key 
                      ? 'border-white bg-white text-black' 
                      : 'border-gray-700 hover:border-gray-500'
                  }`}
                >
                  {key === 'engagement' ? 'Engagement Rate' : 
                   key === 'viral' ? 'Viral Hits' : 'ROI Progress'}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Chart Visualization */}
          <div className="mb-20">
            <div className="bg-gray-950 border border-gray-900 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-8">{metricsData[selectedMetric].title}</h3>
              <div className="space-y-6">
                {metricsData[selectedMetric].data.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-400">{item.phase}</span>
                      <span className="text-sm font-bold">{item.value}{selectedMetric === 'roi' ? '%' : ''}</span>
                    </div>
                    <div className="h-8 bg-gray-900 rounded-full overflow-hidden relative">
                      <div 
                        className="h-full bg-gradient-to-r from-gray-700 to-white transition-all duration-1000 ease-out rounded-full"
                        style={{ 
                          width: `${Math.max(0, Math.min(100, (item.value + (selectedMetric === 'roi' ? 50 : 0)) / (selectedMetric === 'roi' ? 100 : 20) * 100))}%`,
                          opacity: 0.8
                        }}
                      />
                      <div 
                        className="absolute top-0 h-full bg-gray-600 rounded-full"
                        style={{ 
                          width: `${Math.max(0, Math.min(100, (item.target + (selectedMetric === 'roi' ? 50 : 0)) / (selectedMetric === 'roi' ? 100 : 20) * 100))}%`,
                          opacity: 0.3
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-white rounded"></div>
                  <span className="text-gray-400">Actual</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-600 rounded"></div>
                  <span className="text-gray-400">Target</span>
                </div>
              </div>
            </div>
          </div>

          {/* Comprehensive Performance Table */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-8">Complete Transformation Overview</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left p-4 text-gray-400 font-normal">Metric</th>
                    <th className="text-right p-4 text-gray-400 font-normal">Current</th>
                    <th className="text-right p-4 text-gray-400 font-normal">30 Days</th>
                    <th className="text-right p-4 text-gray-400 font-normal">60 Days</th>
                    <th className="text-right p-4 text-gray-400 font-normal">90 Days</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      metric: 'Average Views per Video',
                      current: performanceData.current.views.toLocaleString(),
                      month1: performanceData.month1.views.toLocaleString(),
                      month2: performanceData.month2.views.toLocaleString(),
                      month3: performanceData.month3.views.toLocaleString()
                    },
                    {
                      metric: 'Engagement Rate',
                      current: `${performanceData.current.engagement}%`,
                      month1: `${performanceData.month1.engagement}%`,
                      month2: `${performanceData.month2.engagement}%`,
                      month3: `${performanceData.month3.engagement}%`
                    },
                    {
                      metric: 'Viral Hits per Month',
                      current: performanceData.current.viralHits,
                      month1: performanceData.month1.viralHits,
                      month2: performanceData.month2.viralHits,
                      month3: performanceData.month3.viralHits
                    },
                    {
                      metric: 'ROI',
                      current: performanceData.current.roi,
                      month1: performanceData.month1.roi,
                      month2: performanceData.month2.roi,
                      month3: performanceData.month3.roi
                    },
                    {
                      metric: 'Production Time (hrs/video)',
                      current: performanceData.current.production,
                      month1: performanceData.month1.production,
                      month2: performanceData.month2.production,
                      month3: performanceData.month3.production
                    },
                    {
                      metric: 'Team Satisfaction (1-10)',
                      current: performanceData.current.satisfaction,
                      month1: performanceData.month1.satisfaction,
                      month2: performanceData.month2.satisfaction,
                      month3: performanceData.month3.satisfaction
                    }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-gray-900 hover:bg-gray-950 transition-colors">
                      <td className="p-4 font-medium">{row.metric}</td>
                      <td className="text-right p-4">{row.current}</td>
                      <td className="text-right p-4 text-green-400">{row.month1}</td>
                      <td className="text-right p-4 text-green-400">{row.month2}</td>
                      <td className="text-right p-4 text-green-400 font-bold">{row.month3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ROI Breakdown */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-950 border border-gray-900 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-4">Month 1 Investment</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Management</span>
                  <span>$8,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Tools</span>
                  <span>$173</span>
                </div>
                <div className="border-t border-gray-800 pt-3">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>$8,673</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-950 border border-gray-900 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-4">Month 2-3 Investment</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Management</span>
                  <span>$8,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Tools</span>
                  <span>$1,156</span>
                </div>
                <div className="border-t border-gray-800 pt-3">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>$9,656</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-950 border border-gray-900 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-4">90-Day Summary</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Investment</span>
                  <span>$27,985</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Revenue Generated</span>
                  <span className="text-green-400">$28,720</span>
                </div>
                <div className="border-t border-gray-800 pt-3">
                  <div className="flex justify-between font-bold text-green-400">
                    <span>Net ROI</span>
                    <span>+2.6%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Intelligence System */}
      <section id="intelligence" className="py-32 px-6 bg-gray-950 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="inline-block px-4 py-2 border border-gray-800 text-sm text-gray-500 mb-4">
              THE TECHNOLOGY
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Content Intelligence System
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl">
              A comprehensive suite of AI-powered tools and automated systems that turn 
              data into decisions and predictions into performance.
            </p>
          </div>

          {/* Intelligence Tools Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              {
                icon: '📊',
                title: 'Performance Hub',
                desc: 'Real-time analytics dashboard combining all platform metrics in one unified view',
                features: ['Updates every 5 minutes', 'Cross-platform insights', 'Predictive alerts']
              },
              {
                icon: '🤖',
                title: 'AI Trend Spotter',
                desc: 'Machine learning model that predicts viral potential before posting',
                features: ['87% prediction accuracy', 'Trend velocity tracking', 'Competitor monitoring']
              },
              {
                icon: '🎯',
                title: 'A/B Testing Engine',
                desc: 'Automated testing framework for thumbnails, hooks, and formats',
                features: ['Multi-variant testing', 'Statistical significance', 'Auto-optimization']
              },
              {
                icon: '📈',
                title: 'Creator Scoreboard',
                desc: 'Individual performance tracking with gamification elements',
                features: ['Real-time rankings', 'Achievement system', 'Performance bonuses']
              },
              {
                icon: '🔮',
                title: 'Content Oracle',
                desc: 'Predictive calendar based on historical performance patterns',
                features: ['30-day forecasting', 'Optimal timing', 'Topic suggestions']
              },
              {
                icon: '🏆',
                title: 'Winner Replicator',
                desc: 'System to quickly scale successful content formats',
                features: ['Viral detection', 'Element analysis', 'Rapid production']
              }
            ].map((tool, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="p-6 border border-gray-900 hover:border-gray-700 transition-all h-full">
                  <div className="text-3xl mb-4">{tool.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{tool.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{tool.desc}</p>
                  <div className="text-xs text-gray-600 space-y-1">
                    {tool.features.map((feature, idx) => (
                      <div key={idx}>• {feature}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Automation Flow */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-8 text-center">Intelligent Automation Flow</h3>
            <div className="bg-gray-900 rounded-lg p-8">
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: 'Performance Alert',
                    desc: 'Video reaches 100K views in 24 hours',
                    color: 'green'
                  },
                  {
                    step: 2,
                    title: 'Automatic Analysis',
                    desc: 'AI extracts winning elements and patterns',
                    color: 'blue'
                  },
                  {
                    step: 3,
                    title: 'Replication Planning',
                    desc: 'System generates 3-5 variation concepts',
                    color: 'purple'
                  },
                  {
                    step: 4,
                    title: 'Rapid Production',
                    desc: 'Team creates variations within 24-48 hours',
                    color: 'yellow'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-950 rounded">
                    <div className={`w-12 h-12 bg-${item.color}-900 rounded-full flex items-center justify-center text-${item.color}-400`}>
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Technology Stack Investment</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4">Analytics & Intelligence</h4>
                <div className="space-y-3">
                  {[
                    { name: 'Google Data Studio', price: 'Free' },
                    { name: 'Supermetrics', price: '$99/mo' },
                    { name: 'TrendTok Pro', price: '$99/mo' },
                    { name: 'Custom ML Development', price: '$500/mo' }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-900 rounded">
                      <span>{item.name}</span>
                      <span className={item.price === 'Free' ? 'text-green-400' : ''}>{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4">Automation & Publishing</h4>
                <div className="space-y-3">
                  {[
                    { name: 'Zapier Professional', price: '$299/mo' },
                    { name: 'Buffer Team', price: '$120/mo' },
                    { name: 'Later', price: '$80/mo' },
                    { name: 'VidIQ', price: '$39/mo' }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-900 rounded">
                      <span>{item.name}</span>
                      <span>{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & ROI Section */}
      <section id="results" className="py-32 px-6 bg-gray-950 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="inline-block px-4 py-2 border border-gray-800 text-sm text-gray-500 mb-4">
              THE BOTTOM LINE
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Investment & Returns
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl">
              Clear ROI from day one. This isnt an expense—its an investment in 
              category dominance and sustainable growth.
            </p>
          </div>

          {/* Investment Timeline */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-8">90-Day Investment Journey</h3>
            <div className="space-y-6">
              <div className="p-6 bg-gray-900 rounded-lg">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold mb-2">Days 1-30: Foundation Phase</h4>
                    <p className="text-gray-400">Building infrastructure and team alignment</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">$8,673</div>
                    <div className="text-sm text-yellow-400">-7% ROI</div>
                  </div>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              
              <div className="p-6 bg-gray-900 rounded-lg">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold mb-2">Days 31-60: Growth Phase</h4>
                    <p className="text-gray-400">Optimization and performance improvement</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">$9,656</div>
                    <div className="text-sm text-yellow-400">-7% ROI</div>
                  </div>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              
              <div className="p-6 bg-gray-900 rounded-lg">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold mb-2">Days 61-90: Excellence Phase</h4>
                    <p className="text-gray-400">Category leadership and community building</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">$9,656</div>
                    <div className="text-sm text-green-400">+49% ROI</div>
                  </div>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Value Beyond Numbers */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-8">Value Beyond ROI</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🏆', title: '#1 Position', desc: 'Category leadership in healthcare content' },
                { icon: '👥', title: '10K+ Community', desc: 'Engaged healthcare professionals' },
                { icon: '📊', title: 'Data Assets', desc: 'Proprietary insights and patterns' },
                { icon: '🚀', title: 'Infinite Scale', desc: 'Self-reinforcing growth engine' }
              ].map((item, index) => (
                <div key={index} className="p-6 bg-gray-900 rounded-lg text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Success Guarantee */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-950 border border-gray-800 rounded-lg p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">Success Guarantee</h3>
            <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
              If we dont achieve at least 20% engagement improvement in 30 days, 
              well adjust the strategy at no additional cost.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {[
                '✓ Weekly progress reports',
                '✓ Real-time dashboard access',
                '✓ Monthly strategy reviews'
              ].map((item, index) => (
                <div key={index} className="px-6 py-3 bg-gray-900 rounded">
                  <span className="text-green-400 font-bold">{item.split(' ')[0]}</span> {item.substring(2)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block px-4 py-2 border border-gray-800 text-sm text-gray-500 mb-8">
            THE DECISION
          </span>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Ready to Transform
            <br />
            <span className="text-gray-500">Content Chaos into</span>
            <br />
            Strategic Excellence?
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            I dont just organize projects. I build systems that turn
            good teams into category-defining content machines.
          </p>
          
          <div className="bg-gray-950 border border-gray-800 rounded-lg p-8 mb-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Lets Build Something Legendary</h3>
            <div className="space-y-4 text-left">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Monthly Investment</span>
                <span className="text-2xl font-bold">$8,500</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Expected ROI (Year 1)</span>
                <span className="text-2xl font-bold text-green-400">400%+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Time to First Results</span>
                <span className="text-2xl font-bold">7 Days</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={handleEmailContact}
              className="px-8 py-4 bg-white text-black font-medium hover:bg-gray-200 transition-all hover:scale-105"
            >
              Schedule Strategy Call
            </button>
            <button 
              onClick={() => handleNavigation('/ttn')}
              className="px-8 py-4 border border-gray-700 hover:border-white transition-all hover:scale-105"
            >
              View 30-60-90 Day Plan
            </button>
            <button 
              onClick={() => handleNavigation('/ofd')}
              className="px-8 py-4 border border-gray-700 hover:border-white transition-all hover:scale-105"
            >
              Explore Operational Flow
            </button>
          </div>

          <div className="text-sm text-gray-500">
            <p className="mb-2">Questions? Reach out directly:</p>
            <p>Contact • carlosaremployment@hotmail.com • +52 (55) 4416 - 7974</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            © 2025 by Carlos Anaya Ruiz.
          </div>
          <div className="flex gap-6">
            <button onClick={() => handleNavigation('/ttn')} className="text-sm text-gray-500 hover:text-white transition-colors">
              30-60-90 Plan
            </button>
            <button onClick={() => handleNavigation('/ofd')} className="text-sm text-gray-500 hover:text-white transition-colors">
              Operational Flow
            </button>
            <button onClick={() => handleNavigation('/ia')} className="text-sm text-gray-500 hover:text-white transition-colors">
              AI Intelligence
            </button>
          </div>
        </div>
      </footer>

      {/* Floating CTA Button */}
      <div className="fixed bottom-8 right-8 z-30">
        <button
          onClick={() => handleNavigation('/chat')}
          className="group px-6 py-3 bg-white text-black font-medium rounded-full shadow-2xl hover:scale-105 transition-all flex items-center gap-2"
        >
          <span>Explore AI Intelligence</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </div>
  )
}