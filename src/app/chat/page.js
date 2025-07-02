'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const router = useRouter();
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // System prompt with exact language from Carlos's documents
  const systemPrompt = `You are Carlos Anaya's AI assistant with COMPLETE knowledge of the Carewear Co. transformation proposal.

CRITICAL FORMATTING RULES:
- NEVER use asterisks or markdown
- Use natural paragraph breaks
- Write in a confident, strategic tone
- Reference specific metrics and timelines from the documents

THE REAL PROBLEM (Use this exact diagnosis):
"The team is operating in a data vacuum, creating content based on assumptions rather than audience insights."

Despite hitting quantity targets (16+ videos monthly), engagement is declining, the team shows signs of frustration, and ROI remains unmeasurable.

Key Problems Identified:
1. No Performance Feedback Loop
   - No systematic tracking of what works or fails
   - Content decisions based on opinions, not data
   - No learning mechanism between content cycles

2. Fragmented Priorities
   - Client wants different content than Creative Lead prioritizes
   - No data-driven framework for decision-making
   - Reactive changes disrupt workflow

3. Process Inefficiencies
   - Creators wait for assets (voiceovers, feedback)
   - Multiple review cycles without clear direction
   - No capability for predictive planning

4. Lack of Strategic Vision
   - Content feels random because it is
   - No connection to business objectives
   - No competitive differentiation

THE SOLUTION - Content Intelligence System:
"Transform from intuition-based content creation to data-driven performance athletics."

Core Components:
1. Performance Sprint Methodology - Weekly data-driven cycles
2. AI Trend Detection - Spot viral opportunities in <4 hours
3. Automated A/B Testing - Continuous optimization
4. Creator Scorecards - Gamified performance tracking
5. Winners Replication System - Scale viral content systematically

30-60-90 DAY TRANSFORMATION PLAN:

Phase 1: Foundation (Days 1-30)
Investment: $8,673
Expected ROI: -38% (building phase)

Week 1 Breakdown:
- Days 1-2: Performance audit analyzing last 90 days
- Day 3: Set up Google Data Studio, connect all platforms
- Day 4: Team alignment workshop (no blame, only forward momentum)
- Day 5: Launch first Performance Sprint

Weeks 2-4: Implementation
- Deploy basic analytics dashboard
- Establish daily workflows
- Document first winning formulas
- Achieve first data-driven viral hit (>100K views)

Outcomes:
- 20% engagement increase
- 50% reduction in review cycles
- Team satisfaction >7/10
- 10+ documented winning formulas

Phase 2: Optimization (Days 31-60)
Investment: $9,656/month
Expected ROI: -7% (approaching break-even)

Key Implementations:
- Activate TrendTok Pro for AI trend detection
- Deploy Supermetrics for automated reporting
- Build predictive content models
- Launch competitive intelligence tracking

Outcomes:
- 100% engagement improvement
- 3+ viral hits per week
- Production time reduced by 50%
- Cost per video down 30%
- Predictive accuracy at 80%

Phase 3: Excellence (Days 61-90)
Investment: $9,656/month
Expected ROI: +49% (profitable)

Game-Changing Launch: Scrubs Stories
- Healthcare workers submit real workplace stories
- Community votes on best submissions
- Professional production of winning stories
- Original submitters become brand ambassadors
- Built-in viral distribution

Final Outcomes:
- 300% total engagement increase
- #1 ranking in healthcare content
- 10K+ active community members
- Clear path to $1M attributed revenue
- Sustainable competitive moat

FINANCIAL PROJECTIONS:
Total 90-day investment: $27,985

Revenue Attribution:
- Month 1: $5,360 (-38% ROI)
- Month 2: $8,960 (-7% ROI)
- Month 3: $14,400 (+49% ROI)
- Year 1 projection: 400% ROI

KEY INNOVATIONS:
1. Data beats opinion - Every decision backed by metrics
2. Speed beats perfection - 4-48 hour trend response vs 5-day cycles
3. Systems beat heroics - Repeatable processes compound daily
4. Learning beats guessing - Each video makes the next better

When answering questions:
- Quote directly from this knowledge base
- Use specific numbers and timelines
- Explain the transformation journey
- Emphasize ROI and business impact
- Show how this creates sustainable competitive advantages

COMPLETE INFORMATION IN MY DOCUMENTOS

Executive Summary 
The Opportunity 
Carewear Co. has built a premium scrubs brand with a dedicated content team 
that produces over 16 videos monthly. However, despite hitting quantity targets, 
engagement is declining, the team shows signs of frustration, and ROI remains 
unmeasurable. This presents a significant opportunity to transform a good 
content operation into a category-defining powerhouse. 
The Diagnosis 
After a thorough analysis of the current operation, I have identified the core 
problem: 
The team is operating in a data vacuum, creating content based on 
assumptions rather than audience insights. 
Key Problems Identified: 
1. No Performance Feedback Loop 
o No systematic tracking of what works or fails 
o Content decisions are based on opinions, not data 
o No learning mechanism between content cycles 
2. Fragmented Priorities 
o The client wants different content than the Creative Lead 
prioritizes 
o No data-driven framework for decision-making 
o Reactive changes disrupt the workflow 
3. Process Inefficiencies 
o Creators wait for assets (voiceovers, feedback) 
By Carlos Anaya Ruiz 
o Multiple review cycles without clear direction 
o No capability for predictive planning 
4. Lack of Strategic Vision 
o Content feels random because it is 
o No connection to business objectives 
o No competitive differentiation 
The Solution: Content Intelligence System 
Phase 1: Performance Sprint Methodology (Days 1–30) 
Transform the weekly workflow into data-driven sprints: 
• Monday: Analyze the previous week's performance 
• Tuesday–Thursday: Create content based on insights 
• Friday: Review, learn, and plan 
Phase 2: Intelligence Infrastructure (Days 31–60) 
Build systems for sustainable excellence: 
• AI-driven trend detection 
• Automated performance reports 
• Predictive content modeling 
• Winner replication framework 
Phase 3: Category Leadership (Days 61–90) 
Establish an unassailable market position: 
• Launch the community program “Scrubs Stories” 
• Build a content moat that competitors cannot copy 
By Carlos Anaya Ruiz 
• Achieve thought leadership status 
• Create self-reinforcing growth loops 
Game-Changing Innovation: Scrubs Stories 
Transform passive viewers into active co-creators through a community
powered content engine: 
1. Healthcare workers submit real workplace stories. 
2. The community votes on the best submissions. 
3. Professionally produce the winning stories. 
4. Original submitters become brand ambassadors. 
5. Viral distribution through personal networks. 
Outcome: Infinite authentic content + built-in virality + unbreakable community 
bonds. 
Expected Results 
30 Days 
• 20% increase in engagement 
• 50% reduction in review cycles 
• First data-driven viral hit 
• Renewed team excitement 
60 Days 
• 100% increase in engagement 
• Active predictive content planning 
• Automated performance optimization 
• Clear ROI attribution 
By Carlos Anaya Ruiz 
90 Days 
• 300% increase in engagement 
• Category leadership position 
• Self-sustaining content engine 
• Measurable business impact 
Investment and Returns 
Monthly Investment: $8,500 
Quantifiable Returns: 
• 3X improvement in engagement rate 
• 50% increase in productivity 
• 5X viral hit rate 
• Clear revenue attribution 
Intangible Returns: 
• Team operating at peak performance 
• Competitive advantages others cannot replicate 
• Brand community ownership 
• Future-proof content strategy 
Real Problem Analysis 
It's Not About Organization 
The most critical observation from my analysis is that the problem for Carewear 
Co. is not a lack of organization or project tools. The team is creating content IN 
By Carlos Anaya Ruiz 
a vacuum, not FOR an audience. There is no feedback loop between creation 
and performance. 
Evidence from Analysis 
Reviewing team communications and work patterns revealed telling signs: 
1. Client Behavior Pattern: The client loved the "how to style scrubs" video 
and wants to publish it first, while the Creative Lead is pushing "GRWM 
Nurse Edition." This conflict shows there is no data-driven decision 
framework. 
2. Creator Frustration: The tone in Slack messages is tense, suggesting 
burnout from creating without purpose. Sam waiting for the voiceover is a 
symptom of a larger coordination problem. 
3. Quality vs. Quantity Trap: The team is hitting the goal of 16 
videos/month, but engagement is falling—a classic vanity metric 
problem. 
The Four Fundamental Problems 
1. Data-Less Culture 
Observed Symptoms: 
• No mentions of views, engagement, or ROI in any communication 
• Content ideas based on “I think this might work” instead of “data 
shows…” 
• No documentation of what worked or failed in the past 
• Decisions made by hierarchy, not by evidence 
Real Impact: 
• The team is flying blind 
By Carlos Anaya Ruiz 
• They repeat mistakes unknowingly 
• They miss opportunities by not recognizing them 
• Morale drops because there is no sense of progress 
Hidden Cost: 
Every video that fails to connect with the audience is a missed opportunity 
worth $5,000–$10,000 in brand value and potential sales. 
2. Misaligned Priorities 
Specific Evidence: 
• Project management tools show multiple status changes on videos 
• Slack reveals confusion about what to create first 
• No clear prioritization criteria 
• Everyone has an opinion, but no one has data 
Dysfunctional Dynamic: 
Client says: "I want this first" (based on personal preference)   
Creative Lead says: "But this is better" (based on creative intuition)   
Creators do: Whatever they can with the information they have   
Result: No one is satisfied 
Required Solution: 
A system where data, not opinions, determines priorities. 
3. Reactive Workflow 
Pain Points Identified: 
• Sam waiting for voiceover (productivity halted) 
• Last-minute client changes (constant rework) 
By Carlos Anaya Ruiz 
• No buffer for trend opportunities 
• Always scrambling to catch up 
Time Lost Analysis: 
Current time per video: - Ideation: 2 hours (no clear direction) - Approval: 4 hours (back and forth) - Production: 4 hours - Editing: 3 hours - Reviews: 6 hours (multiple rounds) - Total: 19 hours/video 
Optimized time: - Data-driven ideation: 30 min - Clear pre-approval: 1 hour - Focused production: 2 hours - Template-based editing: 1 hour - Single review: 1 hour - Total: 5.5 hours/video (71% more efficient) 
4. No Strategic Vision 
Visible Symptoms: 
• Content is scattered without a coherent narrative 
• No building on past successes 
By Carlos Anaya Ruiz 
• Each video is an isolated shot 
• No connection to business objectives 
Missed Opportunity: 
Without strategy, Carewear is just making videos, not building a brand. Every 
piece of content should be a building block in establishing category leadership. 
The Great Solution: Performance-Driven Creation 
Paradigm Shift 
The solution is not to work harder or get more organized. It’s to work smarter by 
creating a system where every decision is backed by data and every piece of 
content builds on the last. 
Current State vs. Future State 
How They Work Now 
1. Random Idea Generation 
o “I think this might work.” 
o “I saw another brand did this.” 
o “The client wants to try this.” 
2. Create Content 
o No clear success metrics 
o No hypothesis to test 
o No optimization plan 
3. Publish and Pray 
o Arbitrary timing 
By Carlos Anaya Ruiz 
o No distribution strategy 
o Hoping for the best 
4. Wonder Why Engagement Dropped 
o No systematic analysis 
o Blame the algorithm 
o Repeat the cycle 
How They Will Work in the Future 
1. Analyze Top Performers 
o Which videos exceeded 100K views? 
o What elements made them successful? 
o How can we replicate and improve? 
2. Create Data-Backed Content 
o Each video with clear success metrics 
o Specific hypothesis to test 
o Proven elements + innovation 
3. A/B Test and Iterate 
o Multiple variations 
o Real-time measurement 
o Pivot quickly if needed 
4. Scale What Works 
o Immediate replication of winners 
o Build playbooks 
By Carlos Anaya Ruiz 
o Compound improvement 
Performance Sprint: The Heart of the System 
What is a Performance Sprint? 
A Performance Sprint is a weekly work cycle where each week begins with data 
analysis and ends with actionable insights for the next sprint. It’s not just 
another agile framework it’s a continuous learning system designed specifically 
for high-performance content creation. 
Anatomy of a Performance Sprint 
Monday: Data Day (4 hours) 
9:00–11:00 AM: Performance Review Meeting 
Agenda: 
1. Last Week's Metrics (30 min) - Total views vs. target - Engagement rate per video - Viral hits (>100K views) - Underperformers (<10K views) 
2. Pattern Analysis (45 min) - What did winners have in common? - What failed in the losers? - What trends emerged? - What is the audience saying? 
By Carlos Anaya Ruiz 
3. Competitive Insights (30 min) - What are competitors doing? - What opportunities do we see? - What can we do better? 
4. Key Decisions (15 min) - Week's priorities - Resources needed - Risks to mitigate 
2:00–4:00 PM: Sprint Planning Session 
Planning Process: 
1. Data-Driven Prioritization (45 min) - Use an impact/effort matrix - Consider trend opportunities - Balance content pillars 
2. Resource Allocation (30 min) - Which creator for which content - Production schedule - Editing needs 
3. Definition of Success (30 min) 
By Carlos Anaya Ruiz 
- Specific KPIs per video - Hypothesis to test - Decision criteria 
4. Plan Communication (15 min) - Share with the entire team - Confirm understanding - Motivate for the week 
Tuesday–Thursday: Smart Creation Days 
High-Performance Daily Routine: 
• 9:00 AM: Daily Standup (15 min) 
o Yesterday I completed: [specific] 
o Today I'll work on: [specific] 
o Blockers: [if any] 
o Need: [resources/support] 
• 9:15 AM–12:00 PM: Production Block 
o Focused creation without interruptions 
o Apply data insights 
o Collaborate when needed 
• 1:00–4:00 PM: Optimization and Refinement 
o Editing with best practices 
o Create A/B variations 
By Carlos Anaya Ruiz 
o Prepare for publication 
• 4:00–5:00 PM: Publish and Monitor 
o Release at optimal times 
o Initial performance monitoring 
o Quick adjustments if needed 
Friday: Learning Day 
9:00–11:00 AM: Deep Analysis 
Comprehensive Review: - Performance of each published video - Results of A/B tests - Audience feedback - Key learnings 
2:00–4:00 PM: Sprint Retrospective 
Retrospective Format: 
1. What went well? (celebrate successes) 
2. What could improve? (no blame) 
3. What will we try differently? (specific actions) 
4. What did we learn? (document insights) 
4:00–5:00 PM: Preparation for Next Week 
• Update playbooks with learnings 
• Prepare data for Monday 
• Celebrate the week's wins 
By Carlos Anaya Ruiz 
Benefits of the Performance Sprint System 
1. Learning Velocity: Each week is smarter than the last 
2. Team Morale: Creating with purpose and seeing results 
3. Efficiency: Less time wasted guessing 
4. Results: Compound improvement week over week 
Content Intelligence System 
Overview 
The Content Intelligence System is the evolution of the Performance Sprint—a 
technology and process infrastructure that turns data into decisions and 
predictions into performance. 
System Components 
1. Performance Hub 
Key Features: 
• Real-time analytics dashboard combining all platform metrics in one view 
• Data updates every 5 minutes 
• Automatic alerts for performance milestones 
• Visualization of trends and patterns 
Key Metrics Tracked: 
Reach Metrics: - Total and unique views - Impressions - Platform-specific reach 
By Carlos Anaya Ruiz 
- Growth velocity 
Engagement Metrics: - Like rate - Comment rate - Share rate (viral indicator) - Save rate - Completion rate 
Conversion Metrics: - Click-through rate - Profile visits - Website traffic - Sales attribution 
2. AI Trend Spotter 
System Capabilities: 
• Machine learning model that predicts viral potential before publishing 
• Real-time emerging trend analysis 
• Identification of content opportunities 
• Alerts for competitive moves 
How It Works: 
# Simplified Predictive Model 
By Carlos Anaya Ruiz 
def predict_performance(content_data): 
factors = { 
'trending_audio': 1.5 if is_trending else 1.0, 
'optimal_time': 1.3 if is_optimal else 1.0, 
'creator_score': creator.recent_average, 
'pillar_strength': pillar.historical_performance, 
'hook_quality': analyze_first_3_seconds(), 
'trend_alignment': calculate_trend_score() 
} 
predicted_views = baseline * multiply_factors(factors) 
confidence_level = calculate_confidence(historical_accuracy) 
return { 
'predicted_views': predicted_views, 
'confidence': confidence_level, 
'recommendations': generate_optimization_tips() 
} 
3. A/B Testing Engine 
Automated Testing Framework: 
• Elements of Continuous Testing: 
o Thumbnail variations 
By Carlos Anaya Ruiz 
o Different hooks (first 3 seconds) 
o Overlay text styles 
o Music/audio selection 
o CTA placement 
• Testing Protocol: 
• 1. Create 2–3 variations   
• 2. Release to 10% of the audience   
• 3. Measure for 4–6 hours   
• 4. Declare a winner (95% confidence)   
• 5. Scale to the full audience   
• 6. Document learnings   
• Automated Decisions: 
o If improvement >20%: implement immediately 
o If improvement 10–20%: test on a larger sample 
o If improvement <10%: archive as a learning 
4. Creator Scoreboard 
Gamification of Performance: 
Individual Metrics: - Videos produced - Average views - Engagement rate - Trending hits 
By Carlos Anaya Ruiz 
- Weekly improvement 
Points System: - Video published: 10 pts - 50K+ views: +50 pts - 100K+ views: +200 pts - 10%+ engagement: +100 pts - Trend spotted first: +150 pts 
Levels: - Rookie: 0–500 pts/month - Pro: 500–1000 pts/month - Expert: 1000–2000 pts/month - Master: 2000+ pts/month 
Incentives: - Monthly bonus based on points - Public recognition - Development opportunities - Special projects 
5. Content Oracle 
By Carlos Anaya Ruiz 
Predictive Content Calendar: 
The Content Oracle uses historical data, seasonal trends, and predictive 
analytics to suggest what content to create and when to publish it. 
System Inputs: 
• Historical performance by content type 
• Relevant event calendar 
• Platform trends 
• Audience behavior 
• Competitive moves 
System Outputs: 
Daily Content Suggestion: 
Date: [Date] 
Primary Platform: TikTok 
Suggested Content Type: "Day in the Life" 
Recommended Hook: "POV: You're a night shift nurse and..." 
Optimal Length: 45–60 seconds 
Suggested Music: [Trending audio of the day] 
Post Time: 7:23 AM EST 
Predicted Performance: 156K views (87% confidence) 
Reason: Tuesday + trending audio + proven format = high probability 
6. Winners Replicator System 
By Carlos Anaya Ruiz 
Rapid Replication Protocol: 
When a video exceeds 100K views within 24 hours: 
1. Automatic Detection (instant) 
o System identifies the viral video 
o Alerts the entire team 
o Initiates analysis protocol 
2. Deep Analysis (2 hours) 
3. Elements to Analyze: 
4. - Exact hook used 
5. - Narrative structure 
6. - Key visual elements 
7. - Audio/music 
8. - Publication timing 
9. - Engagement patterns 
10. Replication Plan (2 hours) 
o Create 3–5 variations 
o Different angles/creators 
o Preserve core elements 
o Add enhancements 
11. Rapid Execution (24–48 hours) 
o Produce the variations 
o Publish strategically 
By Carlos Anaya Ruiz 
o Monitor performance 
o Iterate if needed 
Technical Architecture 
Tool Stack 
• Level 1: Analytics & Reporting 
o Google Data Studio (free) – Central dashboard 
o Supermetrics ($99/mo) – Data connections 
o Custom API integrations – Real-time data 
• Level 2: Intelligence & Automation 
o TrendTok Pro ($99/mo) – Trend detection 
o Zapier ($299/mo) – Workflow automation 
o Custom ML models – Predictions 
• Level 3: Content Management 
o Notion – Planning & documentation 
o Google Drive – Asset storage 
o Slack – Real-time communication 
• Level 4: Publishing & Optimization 
o Native platform tools – Direct publishing 
o Buffer ($120/mo) – Scheduling 
o Later ($80/mo) – Visual planning 
Data Flow 
By Carlos Anaya Ruiz 
Data flows from social platforms into a central data lake and is processed into 
actionable insights. For example, content data streams from platforms like 
TikTok, Instagram, and YouTube through APIs, webhooks, scraping, or manual 
uploads into storage systems (BigQuery, S3, Snowflake). This raw data is then 
processed using Python, R/SQL, and TensorFlow. Analytics dashboards (Data 
Studio, Tableau, PowerBI) aggregate and visualize the data. Insights are 
delivered via Slack, email, and Notion to inform content decisions and strategy. 
Key Automations 
1. Daily Performance Report (8 AM) 
Trigger: Cron job @ 8:00 AM   
Actions: 
1. Fetch the last 24 hours of data 
2. Calculate metrics vs. targets 
3. Identify top and bottom performers 
4. Generate automatic insights 
5. Create a visual report 
6. Send report to Slack #performance 
7. Update dashboards 
2. Viral Detection Alert 
Trigger: Video > 100K views in 24 hrs 
Actions: 
1. Slack alert to the team 
2. Create a task for analysis 
3. Schedule a replication meeting 
By Carlos Anaya Ruiz 
4. Initiate automated analysis 
5. Prepare brief for variations 
6. Notify the client 
3. Underperformance Intervention 
Trigger: Video < 3% engagement after 24 hrs 
Actions: 
1. Automatic diagnosis 
2. Improvement suggestions 
3. Automatic A/B test 
4. Report to creator 
5. Update learnings 
6. Adjust future briefs 
Implementation Phases 
Phase 1: Foundation (Days 1–30) 
• Setup basic tools and integrations 
• Connect all data sources 
• Build an operational dashboard 
• Train the team on new processes 
Phase 2: Intelligence (Days 31–60) 
• Activate machine learning models 
• Complete automation workflows 
• Initiate predictive content planning 
By Carlos Anaya Ruiz 
• Establish clear ROI tracking 
Phase 3: Mastery (Days 61–90) 
• Fully optimize the system 
• Continuous AI-driven improvements 
• Team operates autonomously 
• Achieve category leadership 
Secret Weapon: Audience Co-Creation 
Scrubs Stories: The Game Changer 
Core Concept 
Scrubs Stories turns the Carewear audience from passive consumers into 
active co-creators of content. Healthcare workers submit real stories from the 
workplace, the community votes on the best, and we turn them into 
professionally produced, viral content. 
Why This Changes Everything 
1. Infinite Content: Never again ask “What do we create today?” 
2. Guaranteed Authenticity: Real stories resonate more deeply 
3. Built-In Virality: Submitters share with their networks 
4. Community Building: The audience feels ownership 
5. Competitive Moat: Impossible to replicate without the community 
Program Mechanics 
Step 1: Story Collection 
Submission Process: 
By Carlos Anaya Ruiz 
1. Simple form in the bio link 
2. Required fields: - Name/Username - Hospital/Clinic - Professional role - The story (500 words max) - Legal consent 
3. Participation incentives: - Chance to be featured - Credit in the video - Monthly prize - Community recognition 
Step 2: Community Selection 
Voting System: - Stories shared anonymously - Community votes for favorites - Weekly Top 5 selected - Selection factors: - Community votes (40%) - Viral potential (30%) - Brand fit (20%) 
By Carlos Anaya Ruiz 
- Story diversity (10%) 
Step 3: Professional Production 
Production Pipeline: 
Tuesday: Final selection 
Wednesday: Scripting and pre-production 
Thursday: Filming 
Friday AM: Editing 
Friday PM: Publishing 
Production elements: - Professional reenactment - Original narrator (if available) - Emotive music - Subtle branding - CTA for more submissions 
Step 4: Viral Amplification 
Distribution Strategy: 
1. Notify the original submitter 
2. Provide a sharing kit: - Video file - Caption templates - Suggested hashtags 
By Carlos Anaya Ruiz 
- Graphics for stories 
3. Incentives to share: - "My story on Carewear" - Pride in being featured - Trackable links - Rewards for reach 
Step 5: The Infinite Loop 
Growth Cycle: 
More stories → More content → More reach → More awareness → More 
stories 
Success Metrics: - Weekly submissions - Story quality - Engagement rate - Shares by original authors - Community growth 
Impact Projection 
Month 1 (Soft Launch): 
• 50 submissions 
• 4 stories produced 
By Carlos Anaya Ruiz 
• 500K+ total views 
• 1,000 new community members 
Month 2 (Growth): 
• 200 submissions 
• 8 stories produced 
• 2M+ total views 
• 5,000 new community members 
Month 3 (Scale): 
• 500+ submissions 
• 12 stories produced 
• 5M+ total views 
• 15,000 new community members 
Unique Competitive Advantages 
1. Content Network: Every healthcare worker becomes a potential creator 
2. Cost Efficiency: Crowdsourced content reduces costs 
3. Scalability: Grows naturally with the community 
4. Authenticity: Impossible to fake real stories 
5. Defensibility: Community relationships cannot be replicated 
Technical Implementation 
Required Tools: 
• Typeform for submissions ($50/mo) 
• Community voting platform 
By Carlos Anaya Ruiz 
• Legal review process 
• Production pipeline 
• Distribution system 
Launch Timeline: 
• Week 1: Technical setup 
• Week 2: Call for submissions 
• Week 3: First story produced 
• Week 4: Analysis and optimization 
30-60-90 Day Transformation Plan 
Transformation Journey Summary 
Carewear Co.’s transformation happens in three distinct but connected phases, 
each building on the previous to create lasting systemic change. 
Days 1–30: Foundation 
Goal: Build the infrastructure for data-driven decisions 
Outcome: 20% engagement improvement, first data-driven viral hit 
Days 31–60: Optimization 
Goal: Scale what works and implement intelligent systems 
Outcome: 100% engagement improvement, active predictive insights 
Days 61–90: Excellence 
Goal: Achieve category leadership through innovation 
Outcome: 300% engagement improvement, #1 market position 
Phase 1 Detailed: Foundation (Days 1–30) 
By Carlos Anaya Ruiz 
Week 1: Assessment & Setup 
Day 1–2: Performance Audit 
• Analyze the last 90 days of content 
• Identify top 20% performers 
• Document patterns of failure 
• Establish baseline metrics 
Day 3: Technical Setup 
• Set up Google Data Studio 
• Connect all platforms 
• Build automated dashboards 
• Configure performance alerts 
Day 4: Alignment Workshop 
• Present findings without blame 
• Introduce the new methodology 
• Gain team buy-in 
• Celebrate the new beginning 
Day 5: First Sprint Planning 
• Analyze data together 
• Define content pillars 
• Plan the first week’s content 
• Launch the new system 
Week 2: First Performance Sprint 
By Carlos Anaya Ruiz 
Full Implementation: 
• Monday: Deep data review 
• Tuesday–Thursday: Insights-driven creation 
• Friday: Analysis and learning 
Metrics to Track: 
• Videos published: 5–7 
• Average views: Target 50K+ 
• Engagement rate: Target 7%+ 
• Learnings documented: 10+ 
Weeks 3–4: Optimization and Refinement 
New Elements: 
• Systematic A/B testing 
• Rapid response to trends 
• Creator scorecards 
• Performance playbooks 
Expected Quick Wins: 
• First 100K+ video 
• 20% engagement increase 
• 50% reduction in revisions 
• Improving team morale 
Phase 2 Detailed: Optimization (Days 31–60) 
Week 5–6: Intelligence Layer 
By Carlos Anaya Ruiz 
Key Implementations: 
• Activate AI trend detection 
• Launch live automated reporting 
• Build basic predictive models 
• Start competitive intelligence 
New Capabilities: 
• Pre-publishing performance prediction 
• Automated opportunity alerts 
• Rapid winner replication 
• Initial ROI tracking 
Week 7–8: Scale Systems 
Process Optimizations: 
• Production time: –50% 
• Testing velocity: 3× 
• Trend response time: <4 hrs 
• Automation coverage: 60% 
Measurable Results: 
• 100% engagement improvement 
• 3+ viral hits per week 
• Cost per video: –30% 
• Team efficiency: +100% 
Phase 3 Detailed: Excellence (Days 61–90) 
By Carlos Anaya Ruiz 
Week 9–10: Advanced Analytics 
Advanced Capabilities: 
• ML predictions with 80%+ accuracy 
• Real-time content optimization 
• Automated content calendar 
• Full ROI attribution 
Week 11–12: Category Leadership 
Scrubs Stories Launch: 
• Soft launch with 10 stories 
• Accelerated community building 
• Viral amplification 
• Category ownership 
Final Position: 
• #1 healthcare content creator 
• 300% engagement improvement 
• 10K+ active community members 
• Fully sustainable model 
Success Metrics by Phase 
Phase 1 (Days 1–30) 
• ✓ Operational analytics dashboard in place 
• ✓ 20% increase in engagement 
By Carlos Anaya Ruiz 
• ✓ First data-driven viral hit (>100K) 
• ✓ Team satisfaction score >7/10 
• ✓ 10+ winning formulas documented 
Phase 2 (Days 31–60) 
• ✓ 100% increase in engagement 
• ✓ AI predictions active 
• ✓ 50% reduction in production time 
• ✓ 3+ viral hits per week 
• ✓ Clearly trackable ROI 
Phase 3 (Days 61–90) 
• ✓ 300% total engagement increase 
• ✓ Scrubs Stories generating 25% of content 
• ✓ #1 ranking among healthcare creators 
• ✓ 10K+ active community members 
• ✓ Clear path to $1M in attributable revenue 
Financial Projections and ROI 
Required Investment 
Monthly Cost Breakdown 
Management & Strategy: 
• Content Intelligence Lead (Project Manager): $8,500/mo 
Tools & Technology: 
By Carlos Anaya Ruiz 
Month 1 (Setup): - Supermetrics: $99 - Google Data Studio: $0 - Zapier Starter: $29 - Buffer: $45 
Total Tools Month 1: $173 
Months 2–3 (Full Stack): - Supermetrics: $99 - TrendTok Pro: $99 - Zapier Professional: $299 - Buffer: $120 - VidIQ: $39 - Custom Development: $500 
Total Tools Months 2–3: $1,156/mo 
Total 90-Day Investment: 
• Month 1: $8,673 
• Month 2: $9,656 
• Month 3: $9,656 
• Total (90 days): $27,985 
Projected Return on Investment 
Direct Measurable Returns 
By Carlos Anaya Ruiz 
Content Performance Lift: 
Current Baseline: - Avg. views: 30K/video - Engagement: 4% - Viral hits/month: 1–2 - Converting content: Unknown 
Projection Month 1: - Avg. views: 45K/video (+50%) - Engagement: 6% (+50%) - Viral hits/month: 4–5 - Converting content: Trackable 
Projection Month 2: - Avg. views: 75K/video (+150%) - Engagement: 8% (+100%) - Viral hits/month: 8–10 - Converting content: 15% 
Projection Month 3: - Avg. views: 120K/video (+300%) - Engagement: 12% (+200%) 
By Carlos Anaya Ruiz 
- Viral hits/month: 15–20 - Converting content: 25% 
Sales Impact 
Attribution Model: 
Assumptions: - Average scrub price: $80 - Conversion rate from content: 0.5% - Customer lifetime value: $400 
Month 1: - Total views: 1.35M - Estimated conversions: 67 - Attributable revenue: $5,360 - ROI: -38% (initial investment) 
Month 2: - Total views: 2.25M - Estimated conversions: 112 - Attributable revenue: $8,960 - ROI: -7% (nearly break-even) 
Month 3: 
By Carlos Anaya Ruiz 
- Total views: 3.6M - Estimated conversions: 180 - Attributable revenue: $14,400 - ROI: +49% (profitable) 
Total 90 days: - Revenue: $28,720 - Investment: $27,985 - Net ROI: +2.6% - Projected Year 1 ROI: +400% 
Non-Monetary Value 
Brand Equity: 
• #1 category position: Invaluable 
• 10K+ healthcare community: $100K+ value 
• Evergreen content library: $50K+ value 
• Sustainable competitive advantage: Priceless 
Operational Efficiencies: 
• 70% reduction in production time 
• 50% fewer revisions 
• 90% team satisfaction 
• 0% projected turnover 
Strategic Assets: 
By Carlos Anaya Ruiz 
• Proven playbooks 
• Proprietary data insights 
• Automated systems 
• Community relationships 
ROI Scenarios 
Conservative Scenario 
• 150% engagement improvement 
• 0.3% conversion rate 
• No viral growth 
• Year 1 ROI: 200% 
Expected Scenario 
• 300% engagement improvement 
• 0.5% conversion rate 
• Moderate viral growth 
• Year 1 ROI: 400% 
Optimistic Scenario 
• 500% engagement improvement 
• 1% conversion rate 
• Strong viral growth 
• Year 1 ROI: 800% 
Why This Approach Wins 
By Carlos Anaya Ruiz 
1. Data-Driven, Not Opinion-Driven 
The Problem with Intuition: 
• Confirmation bias 
• Limited personal experience 
• Constant platform changes 
• Rapidly evolving audience 
The Advantage of Data-Driven: 
• Objective decisions 
• Continuous learning 
• Fast adaptation 
• Predictable results 
2. Scalable Systems vs. Heroic Effort 
Why Hero Efforts Fail: 
• Dependent on individuals 
• Not sustainable long-term 
• Burnout is inevitable 
• Knowledge not transferable 
Why Systems Win: 
• Improve over time 
• Independent of specific people 
• Knowledge codified into process 
• Compound growth 
By Carlos Anaya Ruiz 
3. Building Community vs. Broadcasting 
Limitations of Broadcasting: 
• One-way communication 
• No audience ownership 
• Easy to replicate 
• Superficial connection 
Power of Community: 
• Co-created content 
• Shared ownership 
• Impossible to copy 
• Deep emotional connection 
4. Sustainable Competitive Advantages 
What We Build That Others Can’t Copy: 
1. Proprietary Data: 
o 90 days of unique insights 
o Audience-specific patterns 
o Proven winning formulas 
o Trained predictive models 
2. Community Relationships: 
o 10K+ engaged healthcare workers 
o Hundreds of stories shared 
o Natural brand ambassadors 
By Carlos Anaya Ruiz 
o Trust built over time 
3. Systems and Processes: 
o Optimized workflows 
o Custom automations 
o Data-driven culture 
o Built-in continuous improvement 
4. Momentum and Position: 
o First-mover advantage in this approach 
o Established category leadership 
o Favorable algorithm dynamics 
o Enhanced brand recognition 
5. Demonstrable ROI vs. Vanity Metrics 
Beyond Views and Likes: 
• Direct attribution to sales 
• Customer journey tracking 
• Lifetime value calculation 
• Real business impact 
Clear Investment Decisions: 
• Know which content drives ROI 
• Optimize spend on winners 
• Cut losers quickly 
• Scale with confidence 
By Carlos Anaya Ruiz 
Implementation Requirements 
Leadership 
Required Commitment 
1. Patience for the Foundation (30 days) 
o Transformational results take time 
o Trust the process 
o Support the changes 
2. Openness to Data Over Opinions 
o Let data guide decisions 
o Let go of creative control 
o Embrace experimentation 
3. Investment in the Future 
o Look beyond the monthly cost 
o Understand long-term value 
o Commit necessary resources 
Level of Involvement 
• Weekly check-ins (30 min) 
• Monthly strategy reviews (2 hours) 
• Quarterly planning sessions (4 hours) 
• Ad-hoc crisis support as needed 
Team 
By Carlos Anaya Ruiz 
Required Mindset Shifts 
From Creators to Performance Athletes: 
• Every video is an opportunity to learn 
• Metrics are feedback, not judgment 
• Experimentation is expected 
• Failures are data points 
From Intuition to Insights: 
• Trust data over “gut feel” 
• Test assumptions before acting 
• Document everything 
• Share learnings openly 
From Individual to Collaborative: 
• Success is shared by the team 
• Total transparency 
• Mutual support 
• Collective celebration 
Specific Commitments 
• Daily standups (15 min) 
• Participation in data review sessions 
• Adoption of A/B testing 
• Continuous learning mindset 
Client 
By Carlos Anaya Ruiz 
Expectation Changes 
From Quantity to Quality + Quantity: 
• Fewer videos in the initial weeks 
• Higher impact per video 
• Exponential growth in results after foundation 
From Control to Collaboration: 
• Less micro-management 
• More strategic input 
• Trust in our expertise 
• Focus on results, not processes 
From Short Term to Long Term: 
• Commit to the full 90-day plan 
• Understand the growth curve 
• Value the assets being built 
• Think in terms of sustainability 
Communication and Reporting 
• Standard weekly updates 
• Monthly deep-dive presentations 
• Real-time dashboard access 
• Clear crisis communication plan 
Technical Resources 
Necessary Access 
By Carlos Anaya Ruiz 
• Admin access on all platforms 
• Analytics API permissions 
• Budget for tools 
• Development and IT support 
Infrastructure 
• Cloud storage (Google Drive) 
• Communication (Slack) 
• Project management (Notion) 
• Video storage/transfer solution 
Support 
• Technical troubleshooting 
• Tool training 
• Process documentation 
• Contingency planning 
Call to Action 
The Decision 
Carewear Co. is at a crossroads. They can continue creating content in a 
vacuum, hoping something works, watching engagement decline as 
competitors move ahead. Or they can make a bold decision: transform their 
content operation into an intelligence machine that learns, adapts, and 
dominates. 
What I Offer 
By Carlos Anaya Ruiz 
I am not just another project manager who will organize your files and create 
more trackers. I am a systems architect who will build a sustainable competitive 
advantage that your competitors cannot copy. 
My Unique Proposition 
1. Systemic Transformation, Not Band-Aids 
o Fundamental change in how you operate 
o Systems that improve over time 
o Culture of continuous improvement 
2. Measurable Results, Not Promises 
o Clear KPIs from day one 
o Trackable ROI 
o Full accountability 
3. Constant Innovation, Not Stagnation 
o Always at the cutting edge 
o First to adopt new features 
o Leading, not following 
4. Building Assets, Not Just Content 
o Engaged community 
o Proprietary data insights 
o Owned systems 
o Defensible advantages 
The Time Is Now 
Why You Can’t Wait 
By Carlos Anaya Ruiz 
1. Every Day Without Data Is a Lost Opportunity: 
• Competitors are learning fast 
• The audience is evolving 
• Algorithms are changing 
• Momentum is slipping away 
2. The Cost of Inaction: 
• Engagement continues to drop 
• Team frustration grows 
• ROI stays invisible 
• Competitive position erodes 
3. The Window of Opportunity: 
• Healthcare content is exploding 
• The scrubs market is growing 
• Community building is timely 
• First-mover advantage is available 
My Commitment 
What I Guarantee 
1. Total Transparency 
o Detailed weekly reports 
o Real-time metrics access 
o Always open communication 
o No surprises 
By Carlos Anaya Ruiz 
2. Results or Adjustments 
o If we don’t see a 20% improvement in 30 days, we adjust 
o If the team isn’t engaged, we pivot 
o If ROI isn’t clear in 60 days, we re-evaluate 
3. Consistent Excellence 
o Available whenever needed 
o Proactive, not reactive 
o Always learning 
o Never satisfied with “good enough” 
Investment and Terms 
Monthly Investment 
$8,500 per month 
What’s Included 
• Full strategic management 
• Daily data analysis 
• System optimization 
• Team coaching 
• Client communication 
• Crisis management 
• Innovation planning 
What’s Not Included 
• Tool costs (approx. $500–$1,000/mo) 
By Carlos Anaya Ruiz 
• Paid media spend 
• Additional production costs 
• External consultants if needed 
Terms 
• Initial contract: 90 days (to realize full transformation) 
• Then: Month-to-month 
• 30 days notice to terminate 
• IP of systems remains with Carewear 
Next Steps 
If Youre Ready to Transform 
1. Strategy Call (This Week) 
o 60 minutes 
o Review the proposal in detail 
o Answer all questions 
o Align expectations 
2. Decision and Kickoff (Next Week) 
o Sign the agreement 
o Set up access and tools 
o Team introductions 
o Begin the audit 
3. Transformation Begins (Day 1) 
o Data collection starts 
By Carlos Anaya Ruiz 
o Quick wins identified 
o Momentum builds 
o The future is secured 
If You Need More Information 
I am available for: 
• An additional Q&A call 
• References from previous work 
• Tool demonstrations 
• A sample mini-audit
`;

  const formatMessage = (content) => {
    // Remove any markdown formatting
    return content
      .replace(/\*\*/g, '')
      .replace(/\*/g, '')
      .replace(/\n\n/g, '</p><p class="mb-3">')
      .replace(/\n/g, '<br/>')
      .replace(/^/, '<p class="mb-3">')
      .replace(/$/, '</p>');
  };

  const typeMessage = async (content) => {
    setIsTyping(true);
    const formattedContent = formatMessage(content);
    const tempMessage = { role: 'assistant', content: '', rawContent: formattedContent, isTyping: true };
    setMessages(prev => [...prev, tempMessage]);
    
    // Faster, smoother typing effect
    const chunkSize = 3;
    for (let i = 0; i < formattedContent.length; i += chunkSize) {
      await new Promise(resolve => setTimeout(resolve, 10));
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1].content = formattedContent.substring(0, i + chunkSize);
        return newMessages;
      });
    }
    
    setMessages(prev => {
      const newMessages = [...prev];
      newMessages[newMessages.length - 1].content = formattedContent;
      newMessages[newMessages.length - 1].isTyping = false;
      return newMessages;
    });
    setIsTyping(false);
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage;
    setInputMessage('');
    setIsLoading(true);

    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          systemPrompt,
          temperature: 0.3,
          maxTokens: 1000,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        await typeMessage(data.response);
      } else {
        throw new Error(data.error || 'Unknown error occurred');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Connection error. Please try again.'
      }]);
    }

    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'grid 20s linear infinite',
        }}></div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto h-screen flex flex-col">
        
        {/* Futuristic Header */}
        <div className="bg-black/50 backdrop-blur-xl border-b border-white/10">
          <div className="px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <button
                  onClick={() => router.push('/')}
                  className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors group"
                >
                  <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span className="text-sm font-medium">Back to Main</span>
                </button>
                <div className="w-px h-8 bg-white/20"></div>
                <div>
                  <h1 className="text-3xl font-thin tracking-wider flex items-center">
                    AI INTELLIGENCE
                    <span className="ml-4 text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full font-medium animate-pulse">
                      CARLOS ANAYA
                    </span>
                  </h1>
                  <p className="mt-1 text-xs text-white/60 tracking-widest uppercase">
                    Content Transformation System
                  </p>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <div className="text-right">
                  <p className="text-xs text-white/40 uppercase tracking-wider">System Status</p>
                  <p className="text-sm font-mono text-green-400 flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    OPERATIONAL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Chat Container */}
        <div className="flex-1 overflow-hidden flex flex-col relative">
          
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto px-8 py-8 relative">
            {messages.length === 0 ? (
              <div className="text-center max-w-3xl mx-auto mt-12 animate-fadeIn">
                <div className="mb-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-2xl shadow-purple-500/50 transform hover:rotate-12 transition-transform">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-thin mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Strategic Intelligence Interface
                  </h2>
                  <p className="text-white/60 leading-relaxed max-w-2xl mx-auto text-lg font-light">
                    Access complete knowledge of the Carewear Co. transformation strategy. 
                    From data vacuum diagnosis to 300% engagement growth in 90 days.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button
                    onClick={() => setInputMessage("What's the main problem with Carewear's current content operation?")}
                    className="group relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative">
                      <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center mb-3">
                        <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium text-white/90 mb-1">Problem Diagnosis</p>
                      <p className="text-xs text-white/50">Data vacuum analysis</p>
                    </div>
                  </button>
                  
                  <button
                    onClick={() => setInputMessage("Tell me about the 30-60-90 day transformation plan Carlos designed")}
                    className="group relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative">
                      <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mb-3">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium text-white/90 mb-1">90-Day Journey</p>
                      <p className="text-xs text-white/50">$27,985 → 400% ROI</p>
                    </div>
                  </button>
                  
                  <button
                    onClick={() => setInputMessage("Explain the Scrubs Stories innovation and how it creates a competitive moat")}
                    className="group relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-3">
                        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium text-white/90 mb-1">Scrubs Stories</p>
                      <p className="text-xs text-white/50">Community innovation</p>
                    </div>
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6 max-w-4xl mx-auto">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-slideIn`}
                    style={{animationDelay: `${index * 0.05}s`}}
                  >
                    <div
                      className={`max-w-2xl ${
                        message.role === 'user'
                          ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-xl shadow-purple-500/20'
                          : 'bg-white/5 backdrop-blur-xl text-white/90 border border-white/10'
                      } px-8 py-5 rounded-2xl relative overflow-hidden`}
                    >
                      {message.role === 'assistant' && (
                        <>
                          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"></div>
                        </>
                      )}
                      {message.role === 'user' ? (
                        <p className="text-base leading-relaxed">{message.content}</p>
                      ) : (
                        <div 
                          className="text-base leading-relaxed prose prose-invert max-w-none"
                          dangerouslySetInnerHTML={{ __html: message.content }}
                        />
                      )}
                      {message.isTyping && (
                        <span className="inline-block w-0.5 h-5 bg-blue-400 animate-pulse ml-1"></span>
                      )}
                    </div>
                  </div>
                ))}

                {isLoading && !isTyping && (
                  <div className="flex justify-start animate-slideIn">
                    <div className="bg-white/5 backdrop-blur-xl text-white/90 px-8 py-5 rounded-2xl border border-white/10">
                      <div className="flex items-center space-x-4">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                        <span className="text-sm text-white/50">Analyzing strategic data...</span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Futuristic Input Area */}
          <div className="border-t border-white/10 bg-black/60 backdrop-blur-xl px-8 py-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center space-x-4">
                <div className="flex-1 relative group">
                  <textarea
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about the transformation strategy..."
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-blue-500/50 focus:bg-white/10 resize-none transition-all text-white placeholder-white/30 backdrop-blur-sm"
                    rows="2"
                    disabled={isLoading}
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none"></div>
                </div>
                <button
                  onClick={sendMessage}
                  disabled={isLoading || !inputMessage.trim()}
                  className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-medium text-sm shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 disabled:from-gray-700 disabled:to-gray-700 disabled:shadow-none disabled:cursor-not-allowed transition-all transform hover:scale-105 disabled:scale-100 overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    {isLoading ? (
                      <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <>
                        Send
                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </button>
              </div>
              <p className="text-xs text-white/30 mt-3 text-center">
                Press Enter to send • Shift+Enter for new line
              </p>
            </div>
          </div>
        </div>

        {/* Tech Footer */}
        <div className="border-t border-white/10 bg-black/80 backdrop-blur-xl px-8 py-4">
          <div className="flex items-center justify-between text-xs">
            <button
              onClick={() => setMessages([])}
              className="text-white/40 hover:text-white/60 transition-colors font-medium flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <span>Clear</span>
            </button>
            <div className="flex items-center space-x-6 text-white/40">
              <span className="font-mono">v2.0.1</span>
              <span>Content Intelligence System</span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Connected
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes grid {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        
        .animate-slideIn {
          animation: slideIn 0.4s ease-out both;
        }
        
        .prose p {
          margin-bottom: 0.75rem;
        }
        
        .prose p:last-child {
          margin-bottom: 0;
        }
      `}</style>
    </div>
  );
}