'use client'

import { useState, useEffect, useRef } from 'react'

export default function ThirtyNinetyPlan() {
  const [activePhase, setActivePhase] = useState(1)
  const [expandedWeek, setExpandedWeek] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [completedTasks, setCompletedTasks] = useState(new Set())
  const [hoveredMetric, setHoveredMetric] = useState(null)
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

  const toggleTask = (taskId) => {
    const newCompleted = new Set(completedTasks)
    if (newCompleted.has(taskId)) {
      newCompleted.delete(taskId)
    } else {
      newCompleted.add(taskId)
    }
    setCompletedTasks(newCompleted)
  }

  // Phase data
  const phases = {
    1: {
      title: 'Foundation',
      subtitle: 'Building Infrastructure for Data-Driven Success',
      days: '1-30',
      color: 'blue',
      description: 'Establish analytics, align team, and achieve first quick wins',
      keyObjectives: [
        'Set up real-time analytics dashboard',
        'Launch Performance Sprint methodology',
        'Achieve 20% engagement improvement',
        'Document 10+ winning formulas'
      ],
      metrics: {
        engagement: { current: 4, target: 6, actual: null },
        production: { current: 19, target: 12, actual: null },
        viralHits: { current: 1.5, target: 4.5, actual: null },
        satisfaction: { current: 5, target: 7, actual: null }
      }
    },
    2: {
      title: 'Optimization',
      subtitle: 'Scaling What Works & Building Intelligence',
      days: '31-60',
      color: 'purple',
      description: 'Implement AI systems, automate processes, scale successes',
      keyObjectives: [
        'Deploy AI trend detection',
        'Automate reporting workflows',
        '50% reduction in production time',
        'Launch winner replication system'
      ],
      metrics: {
        engagement: { current: 6, target: 8, actual: null },
        production: { current: 12, target: 8, actual: null },
        viralHits: { current: 4.5, target: 9, actual: null },
        satisfaction: { current: 7, target: 8, actual: null }
      }
    },
    3: {
      title: 'Excellence',
      subtitle: 'Achieving Category Leadership',
      days: '61-90',
      color: 'green',
      description: 'Launch community programs, establish dominance, build moats',
      keyObjectives: [
        'Launch Scrubs Stories program',
        'Achieve #1 healthcare creator status',
        '300% total engagement improvement',
        'Build sustainable growth engine'
      ],
      metrics: {
        engagement: { current: 8, target: 12, actual: null },
        production: { current: 8, target: 5.5, actual: null },
        viralHits: { current: 9, target: 17.5, actual: null },
        satisfaction: { current: 8, target: 9, actual: null }
      }
    }
  }

  // Detailed weekly breakdown
  const weeklyBreakdown = {
    // Phase 1: Foundation
    week1: {
      phase: 1,
      title: 'Assessment & Setup',
      tasks: [
        {
          id: 'w1-1',
          day: 'Day 1-2',
          title: 'Performance Audit',
          description: 'Analyze 90 days of content, identify patterns',
          deliverables: ['Performance baseline report', 'Content analysis spreadsheet'],
          critical: true
        },
        {
          id: 'w1-2',
          day: 'Day 3',
          title: 'Technical Infrastructure',
          description: 'Set up analytics dashboard and tracking',
          deliverables: ['Google Data Studio dashboard', 'Automated alerts'],
          critical: true
        },
        {
          id: 'w1-3',
          day: 'Day 4',
          title: 'Team Alignment Workshop',
          description: 'Present findings, get buy-in, celebrate new start',
          deliverables: ['Team charter', 'Role definitions'],
          critical: true
        },
        {
          id: 'w1-4',
          day: 'Day 5',
          title: 'First Sprint Planning',
          description: 'Launch Performance Sprint methodology',
          deliverables: ['Content pillars', 'Sprint backlog'],
          critical: false
        }
      ],
      quickWins: ['Analytics dashboard live', 'Team excitement renewed']
    },
    week2: {
      phase: 1,
      title: 'First Performance Sprint',
      tasks: [
        {
          id: 'w2-1',
          day: 'Monday',
          title: 'Data Review Meeting',
          description: 'Analyze weekend performance, identify patterns',
          deliverables: ['Performance insights', 'Action items'],
          critical: false
        },
        {
          id: 'w2-2',
          day: 'Tuesday-Thursday',
          title: 'Data-Driven Creation',
          description: 'Create content based on insights',
          deliverables: ['5-7 videos', 'A/B test variants'],
          critical: true
        },
        {
          id: 'w2-3',
          day: 'Friday',
          title: 'Sprint Retrospective',
          description: 'Review, learn, plan next sprint',
          deliverables: ['Learning documentation', 'Process improvements'],
          critical: false
        }
      ],
      quickWins: ['First data-driven viral hit', '20% engagement boost']
    },
    week3_4: {
      phase: 1,
      title: 'Optimization & Refinement',
      tasks: [
        {
          id: 'w34-1',
          day: 'Week 3',
          title: 'A/B Testing Framework',
          description: 'Systematic testing of content elements',
          deliverables: ['Testing protocols', 'Winner documentation'],
          critical: true
        },
        {
          id: 'w34-2',
          day: 'Week 3',
          title: 'Creator Scorecards',
          description: 'Individual performance tracking',
          deliverables: ['Scorecard system', 'Incentive structure'],
          critical: false
        },
        {
          id: 'w34-3',
          day: 'Week 4',
          title: 'Performance Playbook v1',
          description: 'Document winning formulas',
          deliverables: ['Playbook document', 'Template library'],
          critical: true
        },
        {
          id: 'w34-4',
          day: 'Week 4',
          title: 'Month 1 Review',
          description: 'Comprehensive performance analysis',
          deliverables: ['Executive report', 'Phase 2 plan'],
          critical: false
        }
      ],
      quickWins: ['50% reduction in revision cycles', '10+ documented winning formulas']
    },
    // Phase 2: Optimization
    week5_6: {
      phase: 2,
      title: 'Intelligence Layer Implementation',
      tasks: [
        {
          id: 'w56-1',
          day: 'Week 5',
          title: 'AI Trend Detection',
          description: 'Deploy predictive analytics tools',
          deliverables: ['TrendTok Pro setup', 'Alert system'],
          critical: true
        },
        {
          id: 'w56-2',
          day: 'Week 5',
          title: 'Automated Reporting',
          description: 'Zapier workflows for efficiency',
          deliverables: ['5+ automations', 'Time savings report'],
          critical: false
        },
        {
          id: 'w56-3',
          day: 'Week 6',
          title: 'Predictive Modeling',
          description: 'ML model for content performance',
          deliverables: ['Prediction algorithm', '80% accuracy'],
          critical: true
        },
        {
          id: 'w56-4',
          day: 'Week 6',
          title: 'Competitive Intelligence',
          description: 'Automated competitor tracking',
          deliverables: ['Monitoring system', 'Response protocols'],
          critical: false
        }
      ],
      quickWins: ['3+ viral hits per week', 'Predictive accuracy achieved']
    },
    week7_8: {
      phase: 2,
      title: 'Scale Systems',
      tasks: [
        {
          id: 'w78-1',
          day: 'Week 7',
          title: 'Winner Replication',
          description: 'System to scale successful content',
          deliverables: ['Replication framework', 'Speed metrics'],
          critical: true
        },
        {
          id: 'w78-2',
          day: 'Week 7',
          title: 'Advanced A/B Testing',
          description: 'Multi-variant optimization',
          deliverables: ['Testing matrix', 'Decision trees'],
          critical: false
        },
        {
          id: 'w78-3',
          day: 'Week 8',
          title: 'Content Templates',
          description: 'Proven formats for rapid production',
          deliverables: ['Template library', 'Production guides'],
          critical: true
        },
        {
          id: 'w78-4',
          day: 'Week 8',
          title: 'Workflow Optimization',
          description: 'Remove all friction points',
          deliverables: ['Optimized processes', 'Time study results'],
          critical: false
        }
      ],
      quickWins: ['Production time cut 50%', 'ROI tracking active']
    },
    // Phase 3: Excellence
    week9_10: {
      phase: 3,
      title: 'Advanced Analytics',
      tasks: [
        {
          id: 'w910-1',
          day: 'Week 9',
          title: 'ROI Attribution Model',
          description: 'Connect content to revenue',
          deliverables: ['Attribution system', 'Revenue reports'],
          critical: true
        },
        {
          id: 'w910-2',
          day: 'Week 9',
          title: 'Predictive Planning',
          description: 'AI-powered content calendar',
          deliverables: ['Smart calendar', '30-day forecasts'],
          critical: false
        },
        {
          id: 'w910-3',
          day: 'Week 10',
          title: 'Performance API',
          description: 'Real-time data access',
          deliverables: ['API documentation', 'Integration guides'],
          critical: true
        },
        {
          id: 'w910-4',
          day: 'Week 10',
          title: 'Custom Analytics',
          description: 'Proprietary insights tools',
          deliverables: ['Custom dashboards', 'Unique metrics'],
          critical: false
        }
      ],
      quickWins: ['Clear ROI demonstrated', 'Predictive accuracy 85%+']
    },
    week11_12: {
      phase: 3,
      title: 'Category Leadership',
      tasks: [
        {
          id: 'w1112-1',
          day: 'Week 11',
          title: 'Scrubs Stories Launch',
          description: 'Community-driven content program',
          deliverables: ['Submission system', 'First stories produced'],
          critical: true
        },
        {
          id: 'w1112-2',
          day: 'Week 11',
          title: 'Thought Leadership',
          description: 'Share insights publicly',
          deliverables: ['Blog posts', 'Speaking opportunities'],
          critical: false
        },
        {
          id: 'w1112-3',
          day: 'Week 12',
          title: 'Content Moat',
          description: 'Build unreplicable advantages',
          deliverables: ['Community assets', 'Proprietary data'],
          critical: true
        },
        {
          id: 'w1112-4',
          day: 'Week 12',
          title: 'Future Planning',
          description: 'Next quarter strategy',
          deliverables: ['Q2 roadmap', 'Growth projections'],
          critical: false
        }
      ],
      quickWins: ['#1 healthcare creator', '10K+ community members']
    }
  }

  // Loading screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="relative">
          <div className="w-32 h-32 border-4 border-gray-800 rounded-full animate-spin border-t-white"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-bold text-xl">30|60|90</span>
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
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .phase-gradient-1 {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
        }
        
        .phase-gradient-2 {
          background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
        }
        
        .phase-gradient-3 {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
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
              <div className="text-2xl font-bold">30-60-90 Day Plan</div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => handleNavigation('/ofd')}
                className="px-4 py-2 border border-gray-700 hover:border-white transition-colors text-sm"
              >
                Operational Flow
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
              TRANSFORMATION ROADMAP
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
            90 Days to
            <br />
            <span className="text-gray-500">Content</span> Excellence
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            A day-by-day roadmap transforming Carewear from content chaos 
            to data-driven dominance with measurable milestones.
          </p>

          {/* Phase Selector */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
            {Object.entries(phases).map(([key, phase]) => (
              <button
                key={key}
                onClick={() => setActivePhase(parseInt(key))}
                className={`px-8 py-4 rounded-lg font-medium transition-all ${
                  activePhase === parseInt(key)
                    ? `phase-gradient-${key} text-white scale-105`
                    : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
                }`}
              >
                <div className="text-3xl font-bold">{phase.days.split('-')[1]}</div>
                <div className="text-sm">Days {phase.days}</div>
                <div className="text-xs mt-1">{phase.title}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-20 px-6 bg-gray-950" ref={timelineRef}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Complete Journey Overview</h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-800"></div>
            
            {/* Timeline Items */}
            <div className="space-y-20">
              {Object.entries(phases).map(([key, phase], index) => (
                <div
                  key={key}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className={`animate-slide-in ${index % 2 === 0 ? '' : 'text-left'}`}>
                      <h3 className={`text-3xl font-bold mb-2 phase-gradient-${key} bg-clip-text text-transparent`}>
                        {phase.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{phase.subtitle}</p>
                      <ul className={`space-y-2 text-sm text-gray-500 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        {phase.keyObjectives.map((obj, idx) => (
                          <li key={idx}>{obj}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold phase-gradient-${key} animate-pulse`}>
                      {phase.days.split('-')[1]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Active Phase Details */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-5xl font-bold mb-4">
              Phase {activePhase}: {phases[activePhase].title}
            </h2>
            <p className="text-xl text-gray-400">{phases[activePhase].description}</p>
          </div>

          {/* Phase Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {Object.entries(phases[activePhase].metrics).map(([metric, values]) => (
              <div
                key={metric}
                className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-all cursor-pointer"
                onMouseEnter={() => setHoveredMetric(metric)}
                onMouseLeave={() => setHoveredMetric(null)}
              >
                <h4 className="text-sm text-gray-400 mb-2 capitalize">{metric.replace(/([A-Z])/g, ' $1')}</h4>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-2xl font-bold">{values.current}</span>
                  <span className="text-gray-500">→</span>
                  <span className={`text-2xl font-bold phase-gradient-${activePhase} bg-clip-text text-transparent`}>
                    {values.target}
                  </span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full phase-gradient-${activePhase} transition-all duration-1000`}
                    style={{ 
                      width: hoveredMetric === metric ? '100%' : '0%'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Weekly Breakdown */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold mb-6">Weekly Execution Plan</h3>
            
            {Object.entries(weeklyBreakdown)
              .filter(([_, week]) => week.phase === activePhase)
              .map(([weekKey, week]) => (
                <div key={weekKey} className="bg-gray-950 rounded-lg border border-gray-800">
                  <button
                    onClick={() => setExpandedWeek(expandedWeek === weekKey ? null : weekKey)}
                    className="w-full p-6 flex items-center justify-between hover:bg-gray-900 transition-colors"
                  >
                    <div className="text-left">
                      <h4 className="text-2xl font-bold mb-2">{week.title}</h4>
                      <p className="text-gray-400">
                        {week.tasks.length} key tasks • {week.quickWins.length} quick wins expected
                      </p>
                    </div>
                    <svg 
                      className={`w-6 h-6 transition-transform ${expandedWeek === weekKey ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {expandedWeek === weekKey && (
                    <div className="px-6 pb-6">
                      {/* Tasks */}
                      <div className="space-y-4 mb-6">
                        {week.tasks.map((task) => (
                          <div key={task.id} className="bg-gray-900 rounded-lg p-4">
                            <div className="flex items-start gap-4">
                              <button
                                onClick={() => toggleTask(task.id)}
                                className={`w-6 h-6 rounded border-2 flex-shrink-0 mt-1 transition-all ${
                                  completedTasks.has(task.id)
                                    ? `phase-gradient-${activePhase} border-transparent`
                                    : 'border-gray-600'
                                }`}
                              >
                                {completedTasks.has(task.id) && (
                                  <svg className="w-full h-full p-1" fill="white" viewBox="0 0 20 20">
                                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                  </svg>
                                )}
                              </button>
                              
                              <div className="flex-1">
                                <div className="flex items-start justify-between mb-2">
                                  <div>
                                    <h5 className="font-bold text-lg">{task.title}</h5>
                                    <p className="text-sm text-gray-400">{task.day}</p>
                                  </div>
                                  {task.critical && (
                                    <span className="px-2 py-1 bg-red-900/50 text-red-400 text-xs rounded">
                                      CRITICAL
                                    </span>
                                  )}
                                </div>
                                <p className="text-gray-400 mb-3">{task.description}</p>
                                <div className="flex flex-wrap gap-2">
                                  {task.deliverables.map((deliverable, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-gray-800 text-sm rounded">
                                      {deliverable}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Quick Wins */}
                      <div className="bg-gradient-to-r from-gray-900 to-gray-950 rounded-lg p-4">
                        <h5 className="font-bold mb-3 flex items-center gap-2">
                          <span className="text-yellow-400">⚡</span>
                          Expected Quick Wins
                        </h5>
                        <div className="flex flex-wrap gap-3">
                          {week.quickWins.map((win, idx) => (
                            <span key={idx} className="px-4 py-2 bg-gray-800 rounded-full text-sm">
                              {win}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Success Metrics Dashboard */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Success Metrics Dashboard</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Phase 1 Card */}
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Phase 1</h3>
                <div className="w-16 h-16 rounded-full phase-gradient-1 flex items-center justify-center text-2xl font-bold">
                  30
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Analytics Dashboard</span>
                    <span className="text-green-400">✓</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-green-400 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">20% Engagement Boost</span>
                    <span className="text-green-400">✓</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-green-400 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Team Alignment</span>
                    <span className="text-green-400">✓</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-green-400 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 Card */}
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Phase 2</h3>
                <div className="w-16 h-16 rounded-full phase-gradient-2 flex items-center justify-center text-2xl font-bold">
                  60
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">AI Systems Active</span>
                    <span className="text-yellow-400">In Progress</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-400 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">50% Production Reduction</span>
                    <span className="text-yellow-400">75%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-400 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">ROI Tracking</span>
                    <span className="text-yellow-400">Pending</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-400 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3 Card */}
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Phase 3</h3>
                <div className="w-16 h-16 rounded-full phase-gradient-3 flex items-center justify-center text-2xl font-bold">
                  90
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Scrubs Stories Launch</span>
                    <span className="text-gray-500">Planned</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-500 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">#1 Healthcare Creator</span>
                    <span className="text-gray-500">Target</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-500 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">300% Total Growth</span>
                    <span className="text-gray-500">Goal</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-500 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Transform
            <br />
            Your Content Strategy?
          </h2>
          
          <p className="text-xl text-gray-400 mb-12">
            This isnt just a plan—its a complete transformation system designed 
            to take Carewear from content chaos to category leadership in 90 days.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button
              onClick={() => handleNavigation('/ia')}
              className="px-8 py-4 bg-white text-black hover:bg-gray-200 transition-colors text-lg font-medium rounded-lg"
            >
              Start with AI Intelligence →
            </button>
            <button
              onClick={() => handleNavigation('/ofd')}
              className="px-8 py-4 border border-gray-700 hover:border-white transition-colors text-lg rounded-lg"
            >
              View Operational Flow
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 mb-4">
            Built for Carewear Co. by Carlos Anaya Ruiz
          </p>
          <p className="text-sm text-gray-600">
            A comprehensive 90-day transformation roadmap for content excellence
          </p>
        </div>
      </footer>
    </div>
  )
}