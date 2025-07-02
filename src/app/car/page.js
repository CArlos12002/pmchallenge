'use client'

import { useState, useEffect, useRef, useMemo } from 'react'

export default function CarlosProfile() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('hero')
  const [selectedSkill, setSelectedSkill] = useState('technical')
  const [isLoading, setIsLoading] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showCV, setShowCV] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const typedTexts = useMemo(() => [
    "Strategic Project Leader",
    "Technology Innovation Expert", 
    "PMP Certified Professional",
    "Problem Solving Architect"
  ], [])

  // Typing animation effect
  useEffect(() => {
    const text = typedTexts[currentTextIndex]
    let index = 0
    const timer = setInterval(() => {
      if (index <= text.length) {
        setTypedText(text.slice(0, index))
        index++
      } else {
        setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % typedTexts.length)
          setTypedText('')
        }, 2000)
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [currentTextIndex, typedTexts])

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0
      setScrollProgress(currentProgress)

      const sections = ['hero', 'expertise', 'experience', 'cv', 'challenge', 'contact']
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

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleNavigation = (path) => {
    window.location.href = path
  }

  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const skillSets = {
    technical: {
      title: 'Technical Mastery',
      icon: '⚡',
      skills: [
        { name: 'Python, C++, Swift, Java', level: 98, specialty: 'Backend & Mobile Development' },
        { name: 'Django, .NET, ASP.NET', level: 95, specialty: 'Full-Stack Architecture' },
        { name: 'AWS, Azure Cloud Solutions', level: 92, specialty: 'Cloud Infrastructure' },
        { name: 'SQL, NoSQL, Database Design', level: 94, specialty: 'Data Management' },
        { name: 'API Development & Integration', level: 96, specialty: 'System Integration' }
      ]
    },
    management: {
      title: 'Project Leadership',
      icon: '🎯',
      skills: [
        { name: 'PMP Certified Leadership', level: 98, specialty: 'Strategic Planning' },
        { name: 'Scrum & Agile Methodologies', level: 96, specialty: 'Team Coordination' },
        { name: 'Cross-functional Team Management', level: 94, specialty: 'People Leadership' },
        { name: 'Power BI & Advanced Analytics', level: 93, specialty: 'Data-Driven Decisions' },
        { name: 'Risk Mitigation & Strategy', level: 91, specialty: 'Crisis Management' }
      ]
    },
    strategic: {
      title: 'Innovation & Strategy',
      icon: '🚀',
      skills: [
        { name: 'AI & Automation Implementation', level: 95, specialty: 'Digital Transformation' },
        { name: 'Process Optimization', level: 97, specialty: 'Operational Excellence' },
        { name: 'Business Intelligence Systems', level: 89, specialty: 'Strategic Analytics' },
        { name: 'Supply Chain Management', level: 93, specialty: 'Logistics Optimization' },
        { name: 'Cybersecurity & Compliance', level: 88, specialty: 'Security Architecture' }
      ]
    }
  }

  const achievements = [
    {
      metric: '4+ Years',
      description: 'Elite Project Management',
      icon: '🏆',
      highlight: 'Industry Excellence'
    },
    {
      metric: '75+ Projects',
      description: 'Successfully Delivered',
      icon: '🎯',
      highlight: 'Perfect Track Record'
    },
    {
      metric: '100%',
      description: 'On-time Delivery Rate',
      icon: '⚡',
      highlight: 'Zero Delays'
    },
    {
      metric: 'PMP',
      description: 'Certified Professional',
      icon: '📜',
      highlight: 'Global Standard'
    }
  ]

  const experiences = [
    {
      company: 'Unilever',
      position: 'Food Solution Manager',
      period: 'Oct 2023 – Apr 2025',
      type: 'Current Role',
      companyLogo: '🏢',
      highlights: [
        'Revolutionized supply chain processes achieving 99.8% HACCP compliance',
        'Led digital transformation using Scrum/Lean methodologies (+35% efficiency)',
        'Spearheaded expansion into 12 new distribution channels',
        'Implemented AI-driven analytics reducing decision-making time by 60%',
        'Managed $2M+ budget with zero cost overruns'
      ],
      technologies: ['Scrum Master', 'Lean Six Sigma', 'AI Analytics', 'Process Automation', 'Supply Chain'],
      impact: '+35% Operational Efficiency'
    },
    {
      company: 'Master Loyalty Group',
      position: 'Senior Project Manager (PMP)',
      period: 'Sep 2022 – Aug 2023',
      type: 'Leadership Role',
      companyLogo: '💼',
      highlights: [
        'Orchestrated 25+ high-value client accounts simultaneously ($5M+ portfolio)',
        'Pioneered Power BI implementation for real-time project intelligence',
        'Led cross-functional teams of 15+ members using advanced agile frameworks',
        'Achieved industry-leading 100% milestone completion with proactive risk management',
        'Delivered 300% client satisfaction improvement through strategic communication'
      ],
      technologies: ['Power BI', 'Advanced Agile', 'Risk Management', 'Client Relations', 'Team Leadership'],
      impact: '100% Success Rate'
    },
    {
      company: 'Wan Hai Lines',
      position: 'Technology Manager & Systems Architect',
      period: 'Dec 2020 - Aug 2022',
      type: 'Technical Leadership',
      companyLogo: '🚢',
      highlights: [
        'Architected enterprise-grade EDI, SAP, and Jenkins ecosystem integration',
        'Optimized data workflows achieving 85% reduction in processing time',
        'Implemented military-grade security using FortiGate, Cisco, UniFi systems',
        'Led technical teams delivering $1.5M infrastructure projects on time/budget',
        'Facilitated seamless IT-business collaboration driving 40% adoption rate'
      ],
      technologies: ['SAP Architecture', 'Jenkins CI/CD', 'FortiGate Security', 'Network Engineering', 'DevOps'],
      impact: '85% Process Optimization'
    }
  ]

  const certifications = [
    { name: 'Project Management Professional (PMP)', org: 'PMI', year: '2025', level: 'Advanced' },
    { name: 'Cybersecurity Specialist', org: 'Coderhouse', year: '2022', level: 'Expert' },
    { name: 'Advanced AI & Deep Learning', org: 'Udemy', year: '2024', level: 'Advanced' },
    { name: 'Scrum Master Certified', org: 'Udemy', year: '2025', level: 'Professional' },
    { name: 'AWS Cloud Solutions', org: 'Amazon', year: '2024', level: 'Advanced' },
    { name: 'Full Stack Developer', org: 'Dr. Angela Yu', year: '2025', level: 'Expert' }
  ]

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="relative">
          <div className="w-32 h-32 border-4 border-gray-800 rounded-full animate-spin border-t-white"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-bold text-xl">CAR</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
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

        .typing-cursor::after {
          content: '|';
          animation: blink 1s infinite;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
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
                  CARLOS ANAYA RUIZ
                </span>
              </div>
              <div className="hidden md:flex gap-6">
                {['expertise', 'experience', 'cv', 'challenge', 'contact'].map((section) => (
                  <button 
                    key={section}
                    onClick={() => smoothScrollTo(section)}
                    className={`capitalize hover:text-gray-300 transition-colors ${
                      activeSection === section ? 'text-white' : 'text-gray-500'
                    }`}
                  >
                    {section === 'cv' ? 'Resume' : section}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleNavigation('/')}
                className="px-4 py-2 border border-gray-700 hover:border-white transition-colors text-sm"
              >
                ← Back
              </button>
              <button
                onClick={() => handleNavigation('/ia')}
                className="px-4 py-2 bg-white text-black hover:bg-gray-200 transition-colors text-sm font-medium"
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
            <button onClick={() => { smoothScrollTo('expertise'); setIsMenuOpen(false); }} className="text-2xl text-left">Expertise</button>
            <button onClick={() => { smoothScrollTo('experience'); setIsMenuOpen(false); }} className="text-2xl text-left">Experience</button>
            <button onClick={() => { smoothScrollTo('cv'); setIsMenuOpen(false); }} className="text-2xl text-left">Resume</button>
            <button onClick={() => { smoothScrollTo('challenge'); setIsMenuOpen(false); }} className="text-2xl text-left">Challenge</button>
            <button onClick={() => { smoothScrollTo('contact'); setIsMenuOpen(false); }} className="text-2xl text-left">Contact</button>
            <button onClick={() => { handleNavigation('/ia'); setIsMenuOpen(false); }} className="text-2xl text-left">AI Intelligence</button>
          </div>
        </div>
      )}

      {/* Hero Section - FIXED: Added proper padding-top and adjusted sizing */}
      <section id="hero" className="pt-24 pb-16 min-h-screen flex items-center justify-center relative">
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
          <div className="mb-6 animate-fade-in">
            <span className="inline-block px-3 py-1 border border-gray-700 text-xs md:text-sm text-gray-400">
              🎯 COMPUTER TECHNOLOGIES ENGINEER • PMP CERTIFIED • INNOVATION LEADER
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tighter animate-fade-in-up">
            Elite
            <br />
            <span className="typing-cursor text-gray-500">{typedText}</span>
            <br />
            Excellence
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Transforming impossible challenges into 
            <span className="text-white font-semibold"> breakthrough solutions </span>
            through next-generation project management, cutting-edge technology, and 
            <span className="text-white font-semibold"> visionary leadership</span>.
          </p>

          {/* Achievement Metrics - Made more compact */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 mb-8 animate-fade-in-up animation-delay-600">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="p-4 border border-gray-900 hover:border-gray-700 transition-all hover:scale-105">
                <div className="text-2xl mb-2">{achievement.icon}</div>
                <div className="text-2xl font-bold mb-1">{achievement.metric}</div>
                <div className="text-xs text-gray-400 mb-1">{achievement.description}</div>
                <div className="text-xs text-gray-500">{achievement.highlight}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons - Made more compact */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
            <button 
              onClick={() => smoothScrollTo('challenge')}
              className="px-6 py-3 bg-white text-black font-medium hover:bg-gray-200 transition-all hover:scale-105 text-sm"
            >
              🚀 See My Carewear Solution
            </button>
            <button 
              onClick={() => setShowCV(true)}
              className="px-6 py-3 border border-gray-700 hover:border-white transition-all hover:scale-105 text-sm"
            >
              📄 View Complete Resume
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* CV Viewer Modal - Updated Design */}
      {showCV && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-gray-950 border border-gray-800 rounded-lg w-full max-w-4xl h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-gray-800">
              <h3 className="text-2xl font-bold">Carlos Anaya Ruiz - Resume</h3>
              <button 
                onClick={() => setShowCV(false)}
                className="text-3xl text-gray-400 hover:text-white transition-colors"
              >
                ×
              </button>
            </div>
            <div className="p-8 h-full overflow-y-auto max-h-[calc(90vh-120px)]">
              {/* CV Content */}
              <div className="space-y-8">
                {/* Header */}
                <div className="text-center border-b border-gray-800 pb-6">
                  <h1 className="text-3xl font-bold mb-2">CARLOS ANAYA RUIZ</h1>
                  <p className="text-xl text-gray-400 mb-4">COMPUTER TECHNOLOGIES ENGINEER</p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                    <span>📧 carlosaremployment@hotmail.com</span>
                    <span>📱 +52 55 4416 7974</span>
                    <span>💻 github.com/CArlos12002</span>
                  </div>
                </div>

                {/* Professional Summary */}
                <div>
                  <h2 className="text-xl font-bold mb-3">PROFESSIONAL SUMMARY</h2>
                  <p className="text-gray-400 leading-relaxed">
                    Computer Technologies Engineer with 4+ years of experience in creating functional, user-centered solutions. 
                    Specialized in project management, software development, and process optimization. Proven ability to 
                    collaborate effectively with multidisciplinary teams to design intuitive, scalable experiences aligned 
                    with business objectives.
                  </p>
                </div>

                {/* Technical Skills */}
                <div>
                  <h2 className="text-xl font-bold mb-3">TECHNICAL SKILLS</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold mb-2">Programming Languages</h3>
                      <p className="text-gray-400">Python • C++ • Swift • Java</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Frameworks & Platforms</h3>
                      <p className="text-gray-400">Django • .NET • ASP.NET</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Databases</h3>
                      <p className="text-gray-400">SQL • NoSQL • MySQL</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Cloud & Tools</h3>
                      <p className="text-gray-400">AWS • Azure • Jira • Monday • Notion • Power BI</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Methodologies</h3>
                      <p className="text-gray-400">Scrum • Waterfall • Agile • Lean</p>
                    </div>
                  </div>
                </div>

                {/* Professional Experience */}
                <div>
                  <h2 className="text-xl font-bold mb-4">PROFESSIONAL EXPERIENCE</h2>
                  
                  {experiences.map((exp, idx) => (
                    <div key={idx} className="mb-6 border-l-2 border-gray-700 pl-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-bold">{exp.position}</h3>
                          <p className="text-gray-400 font-semibold">{exp.company}</p>
                        </div>
                        <span className="text-gray-500 text-sm">{exp.period}</span>
                      </div>
                      <ul className="space-y-1 text-gray-400 text-sm">
                        {exp.highlights.slice(0, 4).map((highlight, hidx) => (
                          <li key={hidx}>• {highlight}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Education */}
                <div>
                  <h2 className="text-xl font-bold mb-3">ACADEMIC BACKGROUND</h2>
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold">Bachelors Degree in Computer Technologies Engineering</h3>
                      <p className="text-gray-400 text-sm">Tecnológico de Monterrey, School of Engineering | 2019 – 2023</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Specialization in Advanced Artificial Intelligence for Data Science</h3>
                      <p className="text-gray-400 text-sm">Tecnológico de Monterrey, School of Engineering | 2023 – 2024</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Specialization in Cybersecurity</h3>
                      <p className="text-gray-400 text-sm">Tecnológico de Monterrey, School of Engineering | 2024 – Ongoing</p>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h2 className="text-xl font-bold mb-3">CERTIFICATIONS & COURSES</h2>
                  <div className="grid md:grid-cols-2 gap-2 text-sm">
                    {certifications.map((cert, idx) => (
                      <div key={idx} className="text-gray-400">
                        • {cert.name} - {cert.org} ({cert.year})
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <h2 className="text-xl font-bold mb-3">LANGUAGES</h2>
                  <div className="flex gap-6 text-gray-400">
                    <span>Spanish: Native (C2)</span>
                    <span>English: Professional (C1)</span>
                    <span>French: Beginner (A2)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Expertise Section */}
      <section id="expertise" className="py-32 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="inline-block px-4 py-2 border border-gray-800 text-sm text-gray-500 mb-4">
              ELITE EXPERTISE
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Technical Mastery
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl">
              Four years of proven excellence in transforming complex challenges into 
              breakthrough solutions through strategic leadership and cutting-edge technology.
            </p>
          </div>

          {/* Skill Category Selector */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            {Object.entries(skillSets).map(([key, skillSet]) => (
              <button
                key={key}
                onClick={() => setSelectedSkill(key)}
                className={`px-6 py-3 border transition-all hover:scale-105 ${
                  selectedSkill === key
                    ? 'border-white bg-white text-black'
                    : 'border-gray-700 hover:border-gray-500'
                }`}
              >
                <span className="text-xl mr-2">{skillSet.icon}</span>
                {skillSet.title}
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">
              {skillSets[selectedSkill].icon} {skillSets[selectedSkill].title}
            </h3>
            <div className="space-y-6">
              {skillSets[selectedSkill].skills.map((skill, idx) => (
                <div key={idx} className="group">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h4 className="font-bold text-lg">{skill.name}</h4>
                      <p className="text-sm text-gray-500">{skill.specialty}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold">{skill.level}%</span>
                      <div className="text-xs text-gray-500">Proficiency</div>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-white transition-all duration-1000 ease-out rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="inline-block px-4 py-2 border border-gray-800 text-sm text-gray-500 mb-4">
              PROFESSIONAL LEGACY
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Track Record
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl">
              From complex technical implementations to strategic business transformations, 
              my experience spans diverse industries with consistent excellence.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="border border-gray-900 hover:border-gray-700 transition-all p-8 group">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-center gap-4 mb-4 lg:mb-0">
                    <div className="text-3xl">{exp.companyLogo}</div>
                    <div>
                     <h3 className="text-2xl font-bold">{exp.position}</h3>
                     <p className="text-xl text-gray-400 font-semibold">{exp.company}</p>
                     <span className="inline-block px-3 py-1 bg-gray-900 text-gray-400 text-sm rounded mt-2">
                       {exp.type}
                     </span>
                   </div>
                 </div>
                 <div className="text-right">
                   <span className="text-gray-500 font-medium">{exp.period}</span>
                   <div className="text-white font-bold text-lg">{exp.impact}</div>
                 </div>
               </div>

               <div className="grid lg:grid-cols-3 gap-8">
                 <div className="lg:col-span-2">
                   <h4 className="text-xl font-bold mb-6">🎯 Key Achievements</h4>
                   <ul className="space-y-3">
                     {exp.highlights.map((highlight, hidx) => (
                       <li key={hidx} className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0" />
                         <span className="text-gray-400 leading-relaxed">{highlight}</span>
                       </li>
                     ))}
                   </ul>
                 </div>

                 <div>
                   <h4 className="text-xl font-bold mb-6">⚡ Technologies</h4>
                   <div className="flex flex-wrap gap-2">
                     {exp.technologies.map((tech, tidx) => (
                       <span key={tidx} className="px-3 py-1 bg-gray-900 border border-gray-800 text-gray-400 text-sm rounded">
                         {tech}
                       </span>
                     ))}
                   </div>
                 </div>
               </div>
             </div>
           ))}
         </div>
       </div>
     </section>

     {/* Challenge Solution Section */}
     <section id="challenge" className="py-32 px-6 bg-gray-950">
       <div className="max-w-7xl mx-auto">
         <div className="mb-16">
           <span className="inline-block px-4 py-2 border border-gray-800 text-sm text-gray-500 mb-4">
             THE CAREWEAR TRANSFORMATION
           </span>
           <h2 className="text-5xl md:text-6xl font-bold mb-6">
             Strategic Solution
           </h2>
           <p className="text-xl text-gray-400 max-w-3xl">
             My revolutionary approach to the Carewear Co. content challenge demonstrates 
             precisely why you need a visionary, data-driven PM who delivers transformational results.
           </p>
         </div>

         <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 mb-16">
           <div className="text-center mb-8">
             <h3 className="text-2xl font-bold mb-4">🏆 Why Im Your Elite Project Manager</h3>
           </div>

           <div className="grid md:grid-cols-3 gap-8 mb-8">
             <div className="text-center group">
               <div className="w-16 h-16 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                 🔍
               </div>
               <h4 className="text-xl font-bold mb-3">Deep Analysis</h4>
               <p className="text-gray-400 text-sm leading-relaxed">
                 Diagnosed the real problem: fragmented workflow, lack of data intelligence, 
                 and absence of systematic optimization
               </p>
             </div>

             <div className="text-center group">
               <div className="w-16 h-16 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                 ⚡
               </div>
               <h4 className="text-xl font-bold mb-3">Revolutionary Solution</h4>
               <p className="text-gray-400 text-sm leading-relaxed">
                 Architected complete operational transformation with AI-powered intelligence 
                 and automated workflows
               </p>
             </div>

             <div className="text-center group">
               <div className="w-16 h-16 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                 📈
               </div>
               <h4 className="text-xl font-bold mb-3">Guaranteed Results</h4>
               <p className="text-gray-400 text-sm leading-relaxed">
                 Projected 300% engagement growth, 50% efficiency improvement, 
                 and market leadership in 90 days
               </p>
             </div>
           </div>

           <div className="text-center">
             <button 
               onClick={() => handleNavigation('/ia')}
               className="px-8 py-4 bg-white text-black font-medium hover:bg-gray-200 transition-all hover:scale-105"
             >
               🚀 Explore My Complete AI Solution
             </button>
           </div>
         </div>

         <div className="grid md:grid-cols-2 gap-8">
           <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
             <h3 className="text-xl font-bold mb-6">💎 Solution Highlights</h3>
             <ul className="space-y-4">
               {[
                 'Complete operational intelligence redesign with real-time analytics',
                 'AI-powered content optimization and predictive trend analysis',
                 'Comprehensive 30-60-90 day transformation roadmap',
                 'Advanced automation reducing manual work by 70%',
                 'Team performance optimization with data-driven insights',
                 'ROI tracking and attribution systems'
               ].map((highlight, idx) => (
                 <li key={idx} className="flex items-start gap-3">
                   <span className="text-white text-sm">✓</span>
                   <span className="text-gray-400 text-sm">{highlight}</span>
                 </li>
               ))}
             </ul>
           </div>

           <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
             <h3 className="text-xl font-bold mb-6">🎯 Why Choose Elite Leadership</h3>
             <ul className="space-y-4">
               {[
                 'Proven 100% on-time delivery across 75+ complex projects',
                 'Technical expertise to implement cutting-edge solutions',
                 'Strategic visionary thinking that transforms operations',
                 'Data-driven methodology with measurable ROI outcomes',
                 'PMP certification with advanced agile mastery',
                 'Innovation leadership in AI and automation integration'
               ].map((reason, idx) => (
                 <li key={idx} className="flex items-start gap-3">
                   <span className="text-white text-sm">→</span>
                   <span className="text-gray-400 text-sm">{reason}</span>
                 </li>
               ))}
             </ul>
           </div>
         </div>

         {/* Portfolio Links */}
         <div className="mt-16">
           <h3 className="text-2xl font-bold mb-8 text-center">📋 Complete Solution Portfolio</h3>
           <div className="grid md:grid-cols-3 gap-6">
             <button 
               onClick={() => handleNavigation('/ttn')}
               className="p-6 border border-gray-800 hover:border-gray-600 transition-all hover:scale-105 group text-left"
             >
               <div className="text-2xl mb-3">📅</div>
               <h4 className="font-bold text-lg mb-2">30-60-90 Day Plan</h4>
               <p className="text-gray-500 text-sm">Strategic transformation roadmap</p>
             </button>
             <button 
               onClick={() => handleNavigation('/ofd')}
               className="p-6 border border-gray-800 hover:border-gray-600 transition-all hover:scale-105 group text-left"
             >
               <div className="text-2xl mb-3">⚙️</div>
               <h4 className="font-bold text-lg mb-2">Operational Flow Design</h4>
               <p className="text-gray-500 text-sm">Complete workflow optimization</p>
             </button>
             <button 
               onClick={() => handleNavigation('/ia')}
               className="p-6 border border-gray-800 hover:border-gray-600 transition-all hover:scale-105 group text-left"
             >
               <div className="text-2xl mb-3">🤖</div>
               <h4 className="font-bold text-lg mb-2">AI Intelligence System</h4>
               <p className="text-gray-500 text-sm">Advanced automation & analytics</p>
             </button>
           </div>
         </div>
       </div>
     </section>

     {/* Contact Section */}
     <section id="contact" className="py-32 px-6">
       <div className="max-w-5xl mx-auto">
         <div className="mb-16">
           <span className="inline-block px-4 py-2 border border-gray-800 text-sm text-gray-500 mb-4">
             THE DECISION
           </span>
           <h2 className="text-5xl md:text-6xl font-bold mb-6">
             Lets Create The Future
           </h2>
           <p className="text-xl text-gray-400 max-w-3xl">
             Ready to revolutionize your projects with elite strategic leadership, 
             cutting-edge technical expertise, and guaranteed exceptional results? 
             Lets architect your next transformation.
           </p>
         </div>

         <div className="grid md:grid-cols-3 gap-6 mb-16">
           <div className="p-6 border border-gray-900 hover:border-gray-700 transition-all hover:scale-105 group text-center">
             <div className="text-3xl mb-4">📧</div>
             <h3 className="font-bold text-lg mb-3">Direct Contact</h3>
             <p className="text-gray-400 text-sm">carlosaremployment@hotmail.com</p>
           </div>
           
           <div className="p-6 border border-gray-900 hover:border-gray-700 transition-all hover:scale-105 group text-center">
             <div className="text-3xl mb-4">📱</div>
             <h3 className="font-bold text-lg mb-3">Immediate Response</h3>
             <p className="text-gray-400 text-sm">+52 55 4416 7974</p>
           </div>
           
           <div className="p-6 border border-gray-900 hover:border-gray-700 transition-all hover:scale-105 group text-center">
             <div className="text-3xl mb-4">💼</div>
             <h3 className="font-bold text-lg mb-3">Portfolio</h3>
             <p className="text-gray-400 text-sm">github.com/CArlos12002</p>
           </div>
         </div>

         <div className="bg-gray-950 border border-gray-800 rounded-lg p-8 text-center">
           <h3 className="text-2xl font-bold mb-6">🚀 Ready to Transform Your Success?</h3>
           <div className="grid md:grid-cols-2 gap-6 mb-6 text-left">
             <div>
               <h4 className="text-lg font-bold mb-3">✅ Availability</h4>
               <p className="text-gray-400 text-sm mb-1">Full-time roles in US Time Zones</p>
               <p className="text-gray-400 text-sm mb-1">Immediate start available</p>
               <p className="text-gray-400 text-sm">Remote/Hybrid flexibility</p>
             </div>
             <div>
               <h4 className="text-lg font-bold mb-3">💰 Investment</h4>
               <p className="text-gray-400 text-sm mb-1">Competitive salary expectations</p>
               <p className="text-gray-400 text-sm mb-1">Performance-based bonuses</p>
               <p className="text-gray-400 text-sm">Long-term growth partnership</p>
             </div>
           </div>
           <a 
             href="mailto:carlosaremployment@hotmail.com?subject=Elite Project Manager Opportunity"
             className="inline-block px-8 py-4 bg-white text-black font-medium hover:bg-gray-200 transition-all hover:scale-105"
           >
             🎯 Lets Connect Now
           </a>
         </div>
       </div>
     </section>

     {/* Footer */}
     <footer className="py-8 px-6 border-t border-gray-900">
       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
         <div className="text-sm text-gray-500 mb-4 md:mb-0">
           © 2025 Carlos Anaya Ruiz - Elite Computer Technologies Engineer & Strategic Project Management Leader
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
   </div>
 )
}