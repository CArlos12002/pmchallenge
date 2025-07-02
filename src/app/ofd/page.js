'use client'

import { useState, useEffect, useRef } from 'react'

export default function OperationalFlowPage() {
  const [activeSection, setActiveSection] = useState('overview')
  const [expandedWorkflow, setExpandedWorkflow] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [hoveredMetric, setHoveredMetric] = useState(null)
  const [selectedRole, setSelectedRole] = useState('pm')
  const timelineRef = useRef(null)

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0
      setScrollProgress(currentProgress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigation = (path) => {
    window.location.href = path
  }

  // System sections data
  const systemSections = {
    overview: {
      title: 'System Overview',
      icon: '🎯',
      color: 'blue',
      description: 'Data-driven operational philosophy and architecture'
    },
    organization: {
      title: 'Organization',
      icon: '👥',
      color: 'purple',
      description: 'Redefined roles and team structure'
    },
    workflows: {
      title: 'Daily Workflows',
      icon: '⚡',
      color: 'green',
      description: 'Optimized production and monitoring processes'
    },
    intelligence: {
      title: 'Data Intelligence',
      icon: '🤖',
      color: 'orange',
      description: 'Analytics, automation, and AI systems'
    },
    communication: {
      title: 'Communication',
      icon: '💬',
      color: 'pink',
      description: 'Protocols and collaboration systems'
    },
    technology: {
      title: 'Tech Stack',
      icon: '🛠️',
      color: 'cyan',
      description: 'Complete tools and automation setup'
    }
  }

  // Team roles data
  const teamRoles = {
    pm: {
      title: 'Project Manager',
      subtitle: 'Content Intelligence Lead',
      responsibilities: [
        'Daily performance analysis',
        'Data-driven strategic direction',
        'Performance Sprint coordination',
        'Client communication',
        'System optimization'
      ],
      kpis: [
        { metric: 'Monthly Engagement Growth', target: '20%+', current: '15%' },
        { metric: 'Trend Response Time', target: '<4 hours', current: '3.2h' },
        { metric: 'Team Satisfaction', target: '8/10+', current: '8.5/10' },
        { metric: 'ROI Demonstration', target: '300%+', current: '285%' }
      ],
      tools: ['Google Data Studio', 'Supermetrics', 'TrendTok', 'Slack']
    },
    creative: {
      title: 'Creative Lead',
      subtitle: 'Data-Driven Strategist',
      responsibilities: [
        'Trending topics analysis',
        'Performance-based content pillar development',
        'Creator coaching with data insights',
        'Constant innovation in content formats'
      ],
      kpis: [
        { metric: 'Content Pillar Performance', target: '50K+ avg', current: '48K' },
        { metric: 'Innovation Rate', target: '2 new formats/week', current: '1.8' },
        { metric: 'Creator Development', target: '10% monthly growth', current: '12%' },
        { metric: 'Trend Adoption Speed', target: '<6 hours', current: '4.5h' }
      ],
      tools: ['TrendTok Dashboard', 'Analytics Suite', 'Competitor Tracker', 'AI Calendar']
    },
    creators: {
      title: 'Content Creators',
      subtitle: 'Performance Athletes',
      responsibilities: [
        'Data-driven content creation',
        'Individual performance optimization',
        'A/B testing execution',
        'Audience engagement management'
      ],
      kpis: [
        { metric: 'Sam - Relatable Content', target: '100K+ views', current: '95K' },
        { metric: 'Jen - Educational/Style', target: '80K+ views', current: '85K' },
        { metric: 'Engagement Rate', target: '10%+', current: '9.2%' },
        { metric: 'Posting Consistency', target: '3-4/week', current: '3.5/week' }
      ],
      tools: ['TikTok Creator Tools', 'CapCut', 'Canva', 'Performance Dashboards']
    },
    editors: {
      title: 'Video Editors',
      subtitle: 'Optimization Partners',
      responsibilities: [
        'A/B testing implementation',
        'Retention curve analysis',
        'Rapid iteration based on data',
        'Template library maintenance'
      ],
      kpis: [
        { metric: 'Edit Turnaround Time', target: '<2 hours', current: '1.8h' },
        { metric: 'A/B Test Execution', target: '5+ tests/week', current: '6' },
        { metric: 'Quality Score', target: '95%+', current: '97%' },
        { metric: 'Template Usage', target: '80% efficiency', current: '85%' }
      ],
      tools: ['Premiere Pro', 'Frame.io', 'Template Library', 'Analytics Tools']
    },
    strategist: {
      title: 'Intelligence Analyst',
      subtitle: 'Data Strategist',
      responsibilities: [
        'Deep data analysis and competitive intelligence',
        'Predictive modeling and ROI tracking',
        'Performance insights reports',
        'Strategic recommendations'
      ],
      kpis: [
        { metric: 'Prediction Accuracy', target: '80%+', current: '78%' },
        { metric: 'Competitive Insights', target: 'Daily reports', current: '100%' },
        { metric: 'ROI Attribution', target: '100% visibility', current: '95%' },
        { metric: 'Strategic Impact', target: 'Measurable growth', current: '✓' }
      ],
      tools: ['Advanced Analytics', 'ML Models', 'Competitor Tools', 'ROI Dashboards']
    }
  }

  // Daily workflow data
  const dailyWorkflows = {
    morning: {
      time: '8:00 AM - 12:00 PM',
      title: 'Morning Intelligence & Production',
      activities: [
        {
          time: '8:00-8:30',
          title: 'Automated Data Collection',
          description: 'Overnight performance data, trending topics, competitor activity',
          participants: ['System Automation'],
          deliverables: ['Performance Report', 'Trend Alerts', 'Competitor Summary']
        },
        {
          time: '8:30-9:00',
          title: 'Dashboard Review',
          description: 'PM reviews exceptions, opportunities, and crisis alerts',
          participants: ['Project Manager'],
          deliverables: ['Daily Priorities', 'Action Items', 'Risk Assessment']
        },
        {
          time: '9:00-9:15',
          title: 'Daily Standup',
          description: 'Team alignment on progress, plans, and blockers',
          participants: ['All Team'],
          deliverables: ['Daily Commitments', 'Resource Allocation', 'Priority Confirmation']
        },
        {
          time: '9:15-12:00',
          title: 'Morning Production Block',
          description: 'Content creation, filming, and initial editing',
          participants: ['Creators', 'Editors'],
          deliverables: ['Raw Footage', 'Rough Cuts', 'Production Assets']
        }
      ]
    },
    afternoon: {
      time: '1:00 PM - 5:00 PM',
      title: 'Afternoon Optimization & Publishing',
      activities: [
        {
          time: '1:00-2:30',
          title: 'Editing Sprint',
          description: 'Rapid editing cycle with creative review and refinements',
          participants: ['Editors', 'Creative Lead'],
          deliverables: ['Final Cuts', 'A/B Variations', 'Optimized Assets']
        },
        {
          time: '2:30-3:30',
          title: 'A/B Test Preparation',
          description: 'Create testing variations and prepare optimization protocols',
          participants: ['Editors', 'Strategist'],
          deliverables: ['Test Variants', 'Success Metrics', 'Testing Schedule']
        },
        {
          time: '3:30-4:00',
          title: 'Publishing Preparation',
          description: 'Final quality checks, captions, hashtags, and scheduling',
          participants: ['Creative Lead', 'PM'],
          deliverables: ['Publish-Ready Content', 'Optimized Captions', 'Publishing Schedule']
        },
        {
          time: '4:00-5:00',
          title: 'Publishing & Monitoring',
          description: 'Content deployment and initial performance tracking',
          participants: ['All Team'],
          deliverables: ['Published Content', 'Initial Metrics', 'Engagement Monitoring']
        }
      ]
    },
    evening: {
      time: '5:00 PM - 6:00 PM',
      title: 'Evening Analysis & Planning',
      activities: [
        {
          time: '5:00-5:30',
          title: 'Performance Analysis',
          description: 'First-hour metrics review and optimization decisions',
          participants: ['PM', 'Strategist'],
          deliverables: ['Performance Summary', 'Optimization Actions', 'Alert Responses']
        },
        {
          time: '5:30-6:00',
          title: 'Next Day Planning',
          description: 'Brief creation, resource allocation, and trend identification',
          participants: ['Creative Lead', 'PM'],
          deliverables: ["Tomorrow's Briefs", 'Resource Plan', 'Priority Queue']
        }
      ]
    }
  }

  // Weekly sprint system
  const sprintPhases = [
    {
      phase: 'Data Analysis',
      day: 'Monday AM',
      duration: '4 hours',
      objective: 'Extract insights from previous week\'s performance',
      activities: [
        'Performance review of top/bottom content',
        'Competitive analysis and gap identification',
        'Audience behavior pattern analysis',
        'ROI calculation and trend identification'
      ],
      deliverables: ['Performance Report', 'Competitive Intelligence', 'Audience Insights', 'Strategic Recommendations']
    },
    {
      phase: 'Planning',
      day: 'Monday PM',
      duration: '3 hours',
      objective: 'Plan week\'s content based on data insights',
      activities: [
        'Priority content identification',
        'Resource allocation and scheduling',
        'Success criteria definition',
        'Risk assessment and mitigation'
      ],
      deliverables: ['Content Calendar', 'Creator Assignments', 'Success Metrics', 'Risk Plan']
    },
    {
      phase: 'Execution',
      day: 'Tuesday-Thursday',
      duration: '3 days',
      objective: 'Create, optimize, and publish data-driven content',
      activities: [
        'Daily standup coordination',
        'Content production and editing',
        'A/B testing implementation',
        'Real-time optimization'
      ],
      deliverables: ['Published Content', 'Performance Data', 'Test Results', 'Optimization Insights']
    },
    {
      phase: 'Learning',
      day: 'Friday',
      duration: '4 hours',
      objective: 'Extract learnings and plan improvements',
      activities: [
        'Sprint results analysis',
        'Team retrospective session',
        'Process improvement identification',
        'Next sprint preparation'
      ],
      deliverables: ['Learning Documentation', 'Process Updates', 'Team Feedback', 'Improvement Plan']
    }
  ]

  // Automation levels
  const automationLevels = {
    basic: {
      title: 'Basic Automations',
      description: 'Essential automated workflows for daily operations',
      automations: [
        {
          name: 'Daily Performance Reports',
          trigger: 'Every day at 8:00 AM',
          actions: ['Pull metrics', 'Calculate vs goals', 'Generate visual report', 'Send to team'],
          impact: 'Saves 2 hours daily'
        },
        {
          name: 'Performance Alerts',
          trigger: 'Content reaches milestones',
          actions: ['Slack notification', 'Create replication task', 'Update databases', 'Notify client'],
          impact: 'Instant opportunity capture'
        }
      ]
    },
    intelligent: {
      title: 'Intelligent Automations',
      description: 'Smart systems that adapt and respond to performance',
      automations: [
        {
          name: 'Underperformance Response',
          trigger: 'Content below threshold',
          actions: ['Generate diagnostic', 'Create A/B variants', 'Schedule optimization', 'Update coaching'],
          impact: 'Automated recovery protocols'
        },
        {
          name: 'Trend Detection & Response',
          trigger: 'Trend velocity threshold',
          actions: ['Alert team', 'Generate concepts', 'Check resources', 'Create brief'],
          impact: 'Sub-4-hour trend response'
        }
      ]
    },
    advanced: {
      title: 'Advanced Automations',
      description: 'AI-powered systems for predictive optimization',
      automations: [
        {
          name: 'Predictive Content Calendar',
          trigger: 'Daily analysis cycle',
          actions: ['Analyze patterns', 'Predict performance', 'Optimize timing', 'Assign creators'],
          impact: 'Proactive content planning'
        },
        {
          name: 'Automated A/B Testing',
          trigger: 'Content publishing',
          actions: ['Create variants', 'Deploy to sample', 'Monitor significance', 'Scale winner'],
          impact: 'Continuous optimization'
        }
      ]
    }
  }

  // Tech stack data
  const techStack = {
    platforms: {
      title: 'Core Platforms',
      tools: [
        { name: 'TikTok Business', cost: 'Free', purpose: 'Creator tools, analytics, ads manager' },
        { name: 'Instagram Professional', cost: 'Free', purpose: 'Creator studio, insights API, shopping' },
        { name: 'YouTube Studio', cost: 'Free', purpose: 'Analytics, copyright tools, Shorts shelf' }
      ]
    },
    analytics: {
      title: 'Analytics & Intelligence',
      tools: [
        { name: 'Google Data Studio', cost: 'Free', purpose: 'Custom dashboards, automated reports' },
        { name: 'Supermetrics', cost: '$99/month', purpose: 'API connections, data pipeline' },
        { name: 'TrendTok Pro', cost: '$99/month', purpose: 'Trend detection, competitor tracking' },
        { name: 'Custom ML Model', cost: 'Development', purpose: 'Performance prediction, content scoring' }
      ]
    },
    production: {
      title: 'Production Tools',
      tools: [
        { name: 'Adobe Creative Suite', cost: '$52.99/month', purpose: 'Video editing, graphics, effects' },
        { name: 'Frame.io', cost: '$15/month', purpose: 'Video review and collaboration' },
        { name: 'Canva Pro', cost: '$12.99/month', purpose: 'Graphics, templates, brand assets' },
        { name: 'Google Workspace', cost: '$12/month', purpose: 'Storage, docs, collaboration' }
      ]
    },
    automation: {
      title: 'Automation & Optimization',
      tools: [
        { name: 'Zapier', cost: '$299/month', purpose: '5000 tasks, 20+ integrations' },
        { name: 'Buffer', cost: '$120/month', purpose: 'Scheduling, analytics, optimization' },
        { name: 'Later', cost: '$80/month', purpose: 'Visual calendar, hashtag suggestions' },
        { name: 'Custom Scripts', cost: 'Development', purpose: 'Performance alerts, data processing' }
      ]
    }
  }

  // Loading screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="relative">
          <div className="w-32 h-32 border-4 border-gray-800 rounded-full animate-spin border-t-white"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-bold text-xl">OFD</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .animate-slide-in {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        
        .section-gradient-blue {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
        }
        
        .section-gradient-purple {
          background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
        }
        
        .section-gradient-green {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        }
        
        .section-gradient-orange {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
        }
        
        .section-gradient-pink {
          background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);
        }
        
        .section-gradient-cyan {
          background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
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
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleNavigation('/')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ← Back
              </button>
              <div className="text-2xl font-bold">Operational Flow Design</div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => handleNavigation('/30-60-90')}
                className="px-4 py-2 border border-gray-700 hover:border-white transition-colors text-sm"
              >
                90-Day Plan
              </button>
              <button
                onClick={() => handleNavigation('/ia')}
                className="px-4 py-2 bg-white text-black hover:bg-gray-200 transition-colors text-sm font-medium"
              >
                AI Intelligence →
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 border border-gray-700 text-sm text-gray-400">
              COMPLETE OPERATIONAL SYSTEM
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
            Content Intelligence
            <br />
            <span className="text-gray-500">Operations</span> Guide
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            A comprehensive operational system transforming content creation 
            from chaos to intelligent, data-driven excellence.
          </p>

          {/* System Overview Cards */}
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {Object.entries(systemSections).map(([key, section]) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`p-6 rounded-lg transition-all ${
                  activeSection === key
                    ? `section-gradient-${section.color} text-white scale-105`
                    : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
                }`}
              >
                <div className="text-3xl mb-2">{section.icon}</div>
                <div className="text-sm font-medium">{section.title}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* System Principles */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Operational Philosophy</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <div className="w-16 h-16 rounded-full section-gradient-blue flex items-center justify-center text-2xl mb-6">
                📊
              </div>
              <h3 className="text-xl font-bold mb-4">Data-Driven Decisions</h3>
              <p className="text-gray-400">Every creative decision backed by real data, not intuition or guesswork.</p>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <div className="w-16 h-16 rounded-full section-gradient-green flex items-center justify-center text-2xl mb-6">
                ⚡
              </div>
              <h3 className="text-xl font-bold mb-4">Rapid Iteration</h3>
              <p className="text-gray-400">Short creation-measurement-learning cycles for continuous improvement.</p>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <div className="w-16 h-16 rounded-full section-gradient-orange flex items-center justify-center text-2xl mb-6">
                📈
              </div>
              <h3 className="text-xl font-bold mb-4">Scalable Systems</h3>
              <p className="text-gray-400">Processes that improve with growth rather than breaking under pressure.</p>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <div className="w-16 h-16 rounded-full section-gradient-purple flex items-center justify-center text-2xl mb-6">
                👥
              </div>
              <h3 className="text-xl font-bold mb-4">Team Empowerment</h3>
              <p className="text-gray-400">Autonomy with accountability, enabling both creativity and performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Organization */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Redefined Team Structure</h2>
          
          {/* Role Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(teamRoles).map(([key, role]) => (
              <button
                key={key}
                onClick={() => setSelectedRole(key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedRole === key
                    ? 'bg-white text-black'
                    : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
                }`}
              >
                {role.title}
              </button>
            ))}
          </div>

          {/* Selected Role Details */}
          <div className="bg-gray-950 rounded-lg p-8 border border-gray-800">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Role Info */}
              <div>
                <h3 className="text-3xl font-bold mb-2">{teamRoles[selectedRole].title}</h3>
                <p className="text-xl text-gray-400 mb-6">{teamRoles[selectedRole].subtitle}</p>
                
                <h4 className="text-lg font-semibold mb-4">Key Responsibilities</h4>
                <ul className="space-y-2 mb-6">
                  {teamRoles[selectedRole].responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">{responsibility}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="text-lg font-semibold mb-4">Primary Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {teamRoles[selectedRole].tools.map((tool, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-800 rounded text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* KPIs */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Performance KPIs</h4>
                <div className="space-y-4">
                  {teamRoles[selectedRole].kpis.map((kpi, idx) => (
                    <div key={idx} className="bg-gray-900 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{kpi.metric}</span>
                        <span className="text-sm text-gray-400">{kpi.current}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all"
                            style={{ width: '85%' }}
                          />
                        </div>
                        <span className="text-sm font-medium">{kpi.target}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Workflows */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Daily Operational Workflows</h2>
          
          <div className="space-y-8">
            {Object.entries(dailyWorkflows).map(([period, workflow]) => (
              <div key={period} className="bg-gray-900 rounded-lg border border-gray-800">
                <button
                  onClick={() => setExpandedWorkflow(expandedWorkflow === period ? null : period)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-800 transition-colors"
                >
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-2">{workflow.title}</h3>
                    <p className="text-gray-400">{workflow.time} • {workflow.activities.length} key activities</p>
                  </div>
                  <svg 
                    className={`w-6 h-6 transition-transform ${expandedWorkflow === period ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {expandedWorkflow === period && (
                  <div className="px-6 pb-6">
                    <div className="space-y-6">
                      {workflow.activities.map((activity, idx) => (
                        <div key={idx} className="border-l-4 border-blue-500 pl-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="text-lg font-bold text-blue-400">{activity.time}</h4>
                              <h5 className="text-xl font-semibold">{activity.title}</h5>
                            </div>
                            <div className="flex gap-2">
                              {activity.participants.map((participant, pidx) => (
                                <span key={pidx} className="px-2 py-1 bg-blue-900/50 text-blue-300 text-xs rounded">
                                  {participant}
                                </span>
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-400 mb-4">{activity.description}</p>
                          <div className="mb-3">
                            <h6 className="text-sm font-semibold text-white mb-2">Deliverables:</h6>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                              {activity.deliverables.map((deliverable, didx) => (
                                <span key={didx} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-700">
                                  {deliverable}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sprint System */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Performance Sprint System</h2>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {sprintPhases.map((phase, idx) => (
              <div key={idx} className="bg-gray-950 rounded-lg p-8 border border-gray-800 relative">
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                </div>
                
                <div className="pt-4">
                  <h3 className="text-2xl font-bold mb-2">{phase.phase}</h3>
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <span>{phase.day}</span>
                    <span>•</span>
                    <span>{phase.duration}</span>
                  </div>
                  
                  <p className="text-gray-400 mb-6">{phase.objective}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3">Key Activities</h4>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, aidx) => (
                        <li key={aidx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-300">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold mb-3">Deliverables</h4>
                    <div className="space-y-2">
                      {phase.deliverables.map((deliverable, didx) => (
                        <div key={didx} className="px-3 py-2 bg-gray-900 rounded text-xs text-gray-300 border border-gray-800">
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation System */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Intelligence Automation</h2>
          
          <div className="space-y-8">
            {Object.entries(automationLevels).map(([level, data]) => (
              <div key={level} className="bg-gray-900 rounded-lg p-8 border border-gray-800">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                    level === 'basic' ? 'section-gradient-green' :
                    level === 'intelligent' ? 'section-gradient-orange' :
                    'section-gradient-purple'
                  }`}>
                    {level === 'basic' ? '🔧' : level === 'intelligent' ? '🤖' : '🧠'}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{data.title}</h3>
                    <p className="text-gray-400">{data.description}</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {data.automations.map((automation, idx) => (
                    <div key={idx} className="bg-gray-950 rounded-lg p-6 border border-gray-800">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-lg font-bold text-white">{automation.name}</h4>
                        <span className="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs rounded font-medium">
                          {automation.impact}
                        </span>
                      </div>
                      
                      <p className="text-gray-400 mb-4">
                        <span className="font-semibold text-green-400">Trigger:</span> {automation.trigger}
                      </p>
                      
                      <div>
                        <h5 className="text-sm font-semibold mb-2">Automated Actions:</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {automation.actions.map((action, aidx) => (
                            <div key={aidx} className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-green-400"></div>
                              <span className="text-sm text-gray-300">{action}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Complete Technology Stack</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {Object.entries(techStack).map(([category, data]) => (
              <div key={category} className="bg-gray-950 rounded-lg p-8 border border-gray-800">
                <h3 className="text-2xl font-bold mb-6">{data.title}</h3>
                
                <div className="space-y-4">
                  {data.tools.map((tool, idx) => (
                    <div key={idx} className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-white">{tool.name}</h4>
                        <span className={`px-2 py-1 text-xs rounded font-medium ${
                          tool.cost === 'Free' ? 'bg-green-900/50 text-green-300' :
                          tool.cost === 'Development' ? 'bg-purple-900/50 text-purple-300' :
                          'bg-blue-900/50 text-blue-300'
                        }`}>
                          {tool.cost}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">{tool.purpose}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KPI Metrics */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Success Metrics & KPIs</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Tier 1: Business Impact */}
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full section-gradient-blue flex items-center justify-center text-2xl">
                  💰
                </div>
                <div>
                  <h3 className="text-xl font-bold">Tier 1: Business Impact</h3>
                  <p className="text-gray-400 text-sm">Revenue & Growth Metrics</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  { metric: 'Revenue Attribution', target: '300%+ ROI', status: 'tracking' },
                  { metric: 'Brand Growth', target: '20%+ monthly', status: 'on-track' },
                  { metric: 'Market Position', target: 'Category leader', status: 'improving' },
                  { metric: 'Customer LTV', target: '+40% increase', status: 'exceeded' }
                ].map((kpi, idx) => (
                  <div key={idx} className="bg-gray-950 rounded p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{kpi.metric}</span>
                      <span className={`px-2 py-1 text-xs rounded ${
                        kpi.status === 'exceeded' ? 'bg-green-900/50 text-green-300' :
                        kpi.status === 'on-track' ? 'bg-blue-900/50 text-blue-300' :
                        kpi.status === 'improving' ? 'bg-yellow-900/50 text-yellow-300' :
                        'bg-gray-800 text-gray-300'
                      }`}>
                        {kpi.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{kpi.target}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tier 2: Performance */}
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full section-gradient-green flex items-center justify-center text-2xl">
                  📈
                </div>
                <div>
                  <h3 className="text-xl font-bold">Tier 2: Performance</h3>
                  <p className="text-gray-400 text-sm">Content & Engagement</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  { metric: 'Engagement Rate', target: '10%+ average', status: 'on-track' },
                  { metric: 'Viral Hit Rate', target: '5x improvement', status: 'exceeded' },
                  { metric: 'Content Efficiency', target: '50% cost reduction', status: 'improving' },
                  { metric: 'Trend Response', target: '<4 hours', status: 'on-track' }
                ].map((kpi, idx) => (
                  <div key={idx} className="bg-gray-950 rounded p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{kpi.metric}</span>
                      <span className={`px-2 py-1 text-xs rounded ${
                        kpi.status === 'exceeded' ? 'bg-green-900/50 text-green-300' :
                        kpi.status === 'on-track' ? 'bg-blue-900/50 text-blue-300' :
                        kpi.status === 'improving' ? 'bg-yellow-900/50 text-yellow-300' :
                        'bg-gray-800 text-gray-300'
                      }`}>
                        {kpi.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{kpi.target}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tier 3: Operational */}
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full section-gradient-orange flex items-center justify-center text-2xl">
                  ⚡
                </div>
                <div>
                  <h3 className="text-xl font-bold">Tier 3: Operational</h3>
                  <p className="text-gray-400 text-sm">Team & Process Efficiency</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  { metric: 'Production Speed', target: '50% faster', status: 'exceeded' },
                  { metric: 'Team Satisfaction', target: '9/10 average', status: 'on-track' },
                  { metric: 'Quality Score', target: '95%+ consistency', status: 'on-track' },
                  { metric: 'Innovation Rate', target: '2 formats/week', status: 'improving' }
                ].map((kpi, idx) => (
                  <div key={idx} className="bg-gray-950 rounded p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{kpi.metric}</span>
                      <span className={`px-2 py-1 text-xs rounded ${
                        kpi.status === 'exceeded' ? 'bg-green-900/50 text-green-300' :
                        kpi.status === 'on-track' ? 'bg-blue-900/50 text-blue-300' :
                        kpi.status === 'improving' ? 'bg-yellow-900/50 text-yellow-300' :
                        'bg-gray-800 text-gray-300'
                      }`}>
                        {kpi.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{kpi.target}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">90-Day Implementation Roadmap</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                phase: 'Foundation',
                days: 'Days 1-30',
                color: 'blue',
                goals: [
                  'Implement core tracking systems',
                  'Establish daily workflows',
                  'Train team on new processes',
                  'Set up automation tools',
                  'Create initial documentation'
                ],
                milestones: [
                  'All team members trained',
                  'Daily workflows operational',
                  'Basic automation implemented',
                  'Performance tracking active',
                  'Client satisfaction maintained'
                ]
              },
              {
                phase: 'Optimization',
                days: 'Days 31-60',
                color: 'green',
                goals: [
                  'Refine processes based on data',
                  'Implement advanced analytics',
                  'Scale automation systems',
                  'Develop predictive models',
                  'Enhance team skills'
                ],
                milestones: [
                  '50% improvement in key metrics',
                  'Predictive analytics functional',
                  'Advanced automation deployed',
                  'Team efficiency gains realized',
                  'Competitive advantages visible'
                ]
              },
              {
                phase: 'Scale',
                days: 'Days 61-90',
                color: 'purple',
                goals: [
                  'Full system operation',
                  'Advanced optimization protocols',
                  'Competitive advantage establishment',
                  'Innovation pipeline activation',
                  'Market leadership positioning'
                ],
                milestones: [
                  'Full system optimization achieved',
                  'Market leadership established',
                  'Scalability proven',
                  'Innovation pipeline active',
                  'ROI targets exceeded'
                ]
              }
            ].map((roadmap, idx) => (
              <div key={idx} className="bg-gray-950 rounded-lg p-8 border border-gray-800">
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 rounded-full section-gradient-${roadmap.color} flex items-center justify-center text-2xl mx-auto mb-4`}>
                    {idx + 1}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{roadmap.phase}</h3>
                  <p className="text-gray-400">{roadmap.days}</p>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4">Key Goals</h4>
                  <ul className="space-y-2">
                    {roadmap.goals.map((goal, gidx) => (
                      <li key={gidx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-300">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4">Success Milestones</h4>
                  <div className="space-y-3">
                    {roadmap.milestones.map((milestone, midx) => (
                      <div key={midx} className="px-3 py-2 bg-gray-900 rounded text-sm text-gray-300 border border-gray-800">
                        {milestone}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Summary */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Investment & ROI Analysis</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-6">Investment Requirements</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-800">
                  <span className="text-gray-300">Initial Setup</span>
                  <span className="font-bold text-white">$15,000 - $20,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-800">
                  <span className="text-gray-300">Monthly Operating</span>
                  <span className="font-bold text-white">$2,000 - $3,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-800">
                  <span className="text-gray-300">Payback Period</span>
                  <span className="font-bold text-green-400">45 - 60 days</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-300">Expected ROI</span>
                  <span className="font-bold text-green-400">300 - 500%</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-6">Expected Outcomes</h3>
              <div className="space-y-4">
                {[
                  { metric: 'Production Time Reduction', value: '50%', color: 'green' },
                  { metric: 'Cost Per Video Reduction', value: '30%', color: 'blue' },
                  { metric: 'Videos Per Week Increase', value: '100%', color: 'purple' },
                  { metric: 'Engagement Rate Increase', value: '300%', color: 'orange' },
                  { metric: 'Viral Hit Rate Improvement', value: '5x', color: 'pink' },
                  { metric: 'Quality Consistency', value: '95%', color: 'cyan' }
                ].map((outcome, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2">
                    <span className="text-gray-300 text-sm">{outcome.metric}</span>
                    <span className={`font-bold text-${outcome.color}-400`}>{outcome.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vision Statement */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Long-term Vision</h3>
            <p className="text-lg text-blue-100 mb-6">
              Position Carewear Co. as the undisputed leader in healthcare professional content marketing through 
              data-driven decision making, rapid execution, continuous optimization, and intelligent automation.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">🚀</div>
                <div className="text-sm text-blue-200">Market Leadership</div>
              </div>
              <div>
                <div className="text-2xl font-bold">🎯</div>
                <div className="text-sm text-blue-200">Predictive Excellence</div>
              </div>
              <div>
                <div className="text-2xl font-bold">🔄</div>
                <div className="text-sm text-blue-200">Scalable Growth</div>
              </div>
              <div>
                <div className="text-2xl font-bold">💡</div>
                <div className="text-sm text-blue-200">Continuous Innovation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            Operational Flow Design by Carlos Anaya Ruiz
          </p>
          <p className="text-gray-500 text-sm">
            Transforming content creation from chaos to intelligent, data-driven excellence
          </p>
        </div>
      </footer>
    </div>
  )
}