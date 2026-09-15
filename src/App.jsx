import { useEffect } from 'react'

const config = {
  tngntWebsite: 'https://www.tngntclothing.in/',
  tngntInstagram: 'https://www.instagram.com/tngnt.in?igsh=MTkwMjl4OG5rYXY1aA%3D%3D',
  allPlayOdds: 'https://play-all-odds.lovable.app/',
}

const NAV_LINKS = [
  ['about', 'About'],
  ['work', 'Work'],
  ['experience', 'Experience'],
  ['writing', 'Writing'],
  ['beyond', 'Beyond work'],
  ['contact', 'Contact'],
]

const FACTS = [
  { count: '50', prefix: '₹', suffix: 'L+', initial: '₹50L+', label: 'Monthly revenue scaled at Exly' },
  { count: '18', suffix: ' mo', initial: '18 mo', label: 'To senior manager, from individual contributor' },
  { count: '5000', suffix: '+', group: true, initial: '5,000+', label: 'Leads engaged across sales and retention' },
  { count: '10000', suffix: '+', group: true, initial: '10,000+', label: 'Member community built from scratch' },
]

const MARQUEE_ITEMS = [
  '₹50L+ monthly revenue scaled',
  'Top 4 globally, Enactus World Cup 2022',
  '10,000+ member fan community',
  'Senior manager in 18 months',
  '₹1.2Cr quarterly profit',
  "Delhi's Best Football Fan, 2018",
  'TNGNT founder, zero marketing spend',
]

const IMPACT = [
  { count: '1.2', decimals: '1', prefix: '₹', suffix: 'Cr+', initial: '₹1.2Cr+', label: 'Quarterly profit generated' },
  { count: '2000', suffix: '+', group: true, initial: '2,000+', label: 'Partner network scaled' },
  { count: '70', suffix: '%', initial: '70%', label: 'Reduction in manual operations' },
  { count: '30', suffix: '%', initial: '30%', label: 'Faster query resolution' },
  { count: '15', initial: '15', label: 'Person team led at Exly' },
]

const ROLES = [
  {
    title: 'Senior Manager, Revenue Operations',
    org: 'Exly (YC W19), Gurugram',
    dates: 'Nov 2024 - Jun 2026',
    notes: 'Scaled coach and creator accounts, led a fifteen person cross-functional team, and automated sales, retention and community workflows across 5,000+ leads.',
  },
  {
    title: 'Founder',
    org: 'TNGNT Clothing, New Delhi',
    dates: 'Mar 2026 - Present',
    notes: 'Built a D2C apparel brand for sports communities from product to distribution, with zero paid marketing spend.',
  },
  {
    title: 'Business Development Associate',
    org: 'Urban Company, Remote',
    dates: 'Feb 2024 - Oct 2024',
    notes: 'Scaled and stabilized a 2,000+ partner network across Punjab and Uttar Pradesh, improving service delivery and partner experience.',
  },
  {
    title: 'Business Development Intern',
    org: 'Urban Company, Remote',
    dates: 'Aug 2021 - Nov 2021',
    notes: 'Generated 2,000+ qualified leads and onboarded 150+ partners, then was promoted to lead a team of five interns after being recognized as best intern within two months.',
  },
]

const SKILLS = [
  'Revenue & GMV growth',
  'Funnel analytics',
  'Process automation',
  'Stakeholder management',
  'CRM systems',
  'SQL',
  'Google Workspace',
  'Canva',
  'WhatsApp Business API',
]

const EDUCATION = [
  {
    school: "Masters' Union, Gurugram",
    deg: 'PGP in Technology & Business Management',
    yrs: '2026 - Present',
  },
  {
    school: 'Dyal Singh Evening College, University of Delhi',
    deg: 'Bachelor of Arts, Economics and Operational Research. CGPA 7.4/10, first division.',
    yrs: '2020 - 2023',
  },
  {
    school: "Bharatiya Vidya Bhavan's Mehta Vidyalaya, New Delhi",
    deg: 'CBSE Class XII, 86 percent, PCM. CBSE Class X, 86 percent.',
    yrs: '2018 - 2020',
  },
]

const ACHIEVEMENTS = [
  'Promoted to senior manager at Exly within eighteen months, after leading a fifteen member cross-functional team through a revenue turnaround.',
  'Finished top 4 globally in Race to Rethink Plastic at the Enactus World Cup 2022, leading an eighty person team across four live ventures.',
  'Built Dynamos Ultras into a 10,000 plus member football fan community between 2015 and 2019, helping revive football culture in Delhi NCR.',
  "Recognized as Delhi's Best Football Fan by Reliance and ISL, and felicitated live on Star Sports in 2018.",
  'Secured 3rd position leading the school football team at the Zonal Football Tournament, Central Zone, New Delhi.',
]

const PROJECT_GROUPS = [
  {
    title: 'Professional',
    projects: [
      {
        title: 'Revenue operations at scale, Exly',
        oneline: 'Diagnosing and closing revenue gaps for coach and creator businesses on a YC backed platform.',
        fields: [
          ['Problem', 'Coach and creator accounts on the platform were leaving revenue on the table because of unoptimized funnels, manual operations and slow retention response.'],
          ['What I did', 'Diagnosed revenue gaps across accounts, restructured webinars, cross-sells and retention campaigns, optimized website and payment operations, and automated lead nurturing using AiSensy, WATI and CRM systems. Led a fifteen member cross-functional team through the execution.'],
          ['What it showed', 'Scaled multiple accounts past ₹50L in monthly revenue, optimized ₹10L to ₹30L in monthly marketing spend, and generated over ₹1.2Cr in quarterly profit, including a quarter where the team beat a ₹90L target by roughly a third. Automation cut manual operations by 70 percent and engagement reached over 5,000 leads.'],
          ['My contribution', 'I owned the diagnosis and the operating plan, and was promoted to senior manager within eighteen months on the back of it, while the execution was carried out with my team.'],
        ],
      },
      {
        title: 'Category and partner growth, Urban Company',
        oneline: 'Growing and stabilizing a partner network across Punjab and Uttar Pradesh.',
        fields: [
          ['Problem', 'Partner supply was thin and unevenly spread across the region, and query resolution was slow enough to hurt partner experience.'],
          ['What I did', 'Led onboarding and reactivation drives using demographic and market analysis, restructured city wise workforce allocation, and strengthened escalation channels to resolve field level bottlenecks faster.'],
          ['What it showed', 'Grew the partner network past 2,000, onboarded over 200 new professionals and reactivated over 100 more, cut query resolution time by 30 percent, and reduced lost requests by 10 percent, without adding headcount.'],
        ],
      },
    ],
  },
  {
    title: 'Founding & building',
    projects: [
      {
        title: 'AllPlay Bets',
        oneline: 'A multi-sport virtual betting platform built with AI, letting users bet with virtual credits across live and upcoming markets.',
        fields: [
          ['Problem', 'I wanted to explore whether I could ship a full stack product end to end using AI as the primary development tool, and pick a domain that would make the product fun to actually use.'],
          ['What I did', 'Built AllPlay Bets using Lovable, an AI app builder, designing and iterating on the product through natural language prompts. The platform covers football, cricket, NBA, NHL, F1, UFC, MLB and rugby, with live and upcoming markets, virtual credit betting, and real time odds.'],
          ['What it showed', 'Shipped a working multi sport betting experience from idea to live product, validating that AI assisted development can move fast enough to prototype and launch a feature rich consumer app.'],
        ],
        artefacts: [
          ['allPlayOdds', 'Visit app'],
        ],
      },
      {
        title: 'TNGNT Clothing',
        oneline: 'A D2C apparel brand for sports communities, built with zero marketing spend.',
        fields: [
          ['Problem', "Sports communities didn't have apparel built specifically around them, and I wanted to test whether a bootstrapped D2C brand could work without paid marketing."],
          ['What I did', 'Ran competitor analysis and customer surveys inside sports communities, priced the product at ₹999 against ₹560 in production, shipping and packaging costs, and drove demand through college team partnerships, dropshipping channels and organic Instagram.'],
          ['What it showed', 'A margin of over ₹430 per unit, more than ₹60K in revenue with zero marketing spend, and a target of ₹1L or more by the end of the current quarter.'],
        ],
        artefacts: [
          ['tngntWebsite', 'Visit website'],
          ['tngntInstagram', 'Instagram'],
        ],
      },
      {
        title: 'D-Street DSC, founding president',
        oneline: 'A stock market community built from scratch on campus.',
        fields: [
          ['Problem', 'Financial literacy, and especially female participation in investing, had little presence on campus.'],
          ['What I did', 'Founded and built the community from zero members, organizing events and education focused on financial literacy and investing.'],
          ['What it showed', 'Grew to over 120 members, and the community organized a fundraising drive that raised over ₹2.5L for underprivileged communities in 2023.'],
        ],
      },
      {
        title: 'Dynamos Ultras, founding core member',
        oneline: 'A football fan club, grown from nothing between 2015 and 2019.',
        fields: [
          ['Problem', 'Football culture in Delhi NCR had faded, and fans had no organized community to rally around.'],
          ['What I did', 'Helped build the fan club from the ground up as a founding core member, organizing around match days and shared identity.'],
          ['What it showed', "Grew the club to over 10,000 members and helped revive football culture in the city. The experience taught me that you don't need a perfect plan to start something, only a first step and a few people as invested as you are."],
        ],
      },
    ],
  },
  {
    title: 'Social impact',
    projects: [
      {
        title: 'Enactus DSC, business development executive',
        oneline: 'Four live social entrepreneurship ventures, taken to a global final.',
        fields: [
          ['Problem', 'Marginalized communities needed sustainable livelihoods, not one time aid, and that meant ventures with a real business model.'],
          ['What I did', 'Led an eighty person team across four live social entrepreneurship projects, including Race to Rethink Plastic, and contributed to fundraising for COVID-19 relief alongside the venture work.'],
          ['What it showed', 'Finished top 4 globally in Race to Rethink Plastic at the Enactus World Cup 2022, and helped raise over ₹5L in COVID-19 relief funds through campaigns and competitions.'],
        ],
      },
      {
        title: 'Girl Up, UN Foundation, editor',
        oneline: 'Content and direct action on gender equality and menstrual health.',
        fields: [
          ['Problem', 'Gender equality and menstrual health awareness needed both visibility and direct, practical action.'],
          ['What I did', 'Curated and optimized social media content to drive awareness, and organized donation drives across Delhi NCR.'],
          ['What it showed', 'Over 1,000 sanitary pads donated across marginalized communities, supporting menstrual hygiene and health awareness directly, not just online.'],
        ],
      },
    ],
  },
]

function Project({ project }) {
  return (
    <details className="project" name="projects" data-reveal="true">
      <summary>
        <div className="proj-title-wrap">
          <h3>{project.title}</h3>
          <p className="proj-oneline">{project.oneline}</p>
        </div>
        <span className="proj-toggle" aria-hidden="true"></span>
      </summary>
      <div className="proj-body">
        {project.fields.map(([label, text]) => (
          <div className="proj-field" key={label}>
            <p className="flabel">{label}</p>
            <p>{text}</p>
          </div>
        ))}
        {project.artefacts && (
          <div className="proj-artefacts">
            {project.artefacts.map(([key, label]) => (
              <a key={key} data-key={key} href="#" target="_blank" rel="noopener">{label}</a>
            ))}
          </div>
        )}
      </div>
    </details>
  )
}

function HobbyIcon({ children }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  )
}

export default function App() {
  useEffect(() => {
    // Config: any optional field left empty removes its own block, so the
    // site never shows a broken link.
    document.querySelectorAll('[data-key]').forEach((el) => {
      const key = el.getAttribute('data-key')
      const value = config[key]
      if (!value) {
        el.remove()
      } else {
        el.setAttribute('href', value)
      }
    })

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // ---------- Toast ----------
    const toast = document.getElementById('toast')
    let toastTimer = null
    function showToast(msg) {
      if (!toast) return
      toast.textContent = msg
      toast.classList.add('show')
      clearTimeout(toastTimer)
      toastTimer = setTimeout(() => toast.classList.remove('show'), 2200)
    }

    // ---------- Emoji burst ----------
    function burstEmojis(x, y, emojis) {
      if (reduceMotion) return
      emojis.forEach((emoji, i) => {
        const el = document.createElement('span')
        el.className = 'burst-emoji'
        el.textContent = emoji
        el.style.left = x + 'px'
        el.style.top = y + 'px'
        const angle = (Math.PI * 2 * i) / emojis.length + Math.random() * 0.6
        const dist = 60 + Math.random() * 60
        el.style.setProperty('--bx', Math.cos(angle) * dist + 'px')
        el.style.setProperty('--by', Math.sin(angle) * dist - 40 + 'px')
        document.body.appendChild(el)
        setTimeout(() => el.remove(), 1100)
      })
    }

    // ---------- Scroll reveal ----------
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          revealObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    document.querySelectorAll('[data-reveal]').forEach((el, i) => {
      el.style.transitionDelay = Math.min(i % 4, 3) * 90 + 'ms'
      if (reduceMotion) {
        el.classList.add('revealed')
      } else {
        revealObserver.observe(el)
      }
    })

    // ---------- Count-up numbers ----------
    const fmt = (n, dec, group) => n.toLocaleString('en-IN', {
      minimumFractionDigits: dec,
      maximumFractionDigits: dec,
      useGrouping: group,
    })

    function animateCount(el) {
      const target = parseFloat(el.dataset.count)
      const dec = parseInt(el.dataset.decimals || '0', 10)
      const group = el.dataset.group === 'true'
      const prefix = el.dataset.prefix || ''
      const suffix = el.dataset.suffix || ''
      const dur = 1400
      const start = performance.now()

      if (reduceMotion) {
        el.textContent = prefix + fmt(target, dec, group) + suffix
        return
      }

      function tick(now) {
        const t = Math.min((now - start) / dur, 1)
        const eased = 1 - Math.pow(1 - t, 3)
        el.textContent = prefix + fmt(target * eased, dec, group) + suffix
        if (t < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target)
          countObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.5 })

    document.querySelectorAll('[data-count]').forEach((el) => countObserver.observe(el))

    // ---------- Bar chart animation ----------
    let vizObs = null
    const viz = document.querySelector('.compare-viz')
    if (viz) {
      vizObs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            viz.classList.add('animated')
            vizObs.unobserve(viz)
          }
        })
      }, { threshold: 0.5 })
      vizObs.observe(viz)
    }

    // ---------- Scroll progress bar ----------
    const progressBar = document.getElementById('progressBar')
    function updateProgress() {
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0
      progressBar.style.width = pct + '%'
    }

    // ---------- Scrollspy ----------
    const spySections = ['about', 'work', 'experience', 'writing', 'beyond', 'contact']
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    const navAs = document.querySelectorAll('.nav-links a, .pill-row a')

    function updateSpy() {
      const pos = window.scrollY + 120
      let currentId = ''
      spySections.forEach((sec) => {
        if (sec.offsetTop <= pos) currentId = sec.id
      })
      navAs.forEach((a) => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + currentId)
      })
    }

    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('scroll', updateSpy, { passive: true })
    updateProgress()
    updateSpy()

    // ---------- Accordion open animation ----------
    document.querySelectorAll('details.project').forEach((d) => {
      d.addEventListener('toggle', () => {
        if (d.open) {
          const body = d.querySelector('.proj-body')
          if (body && !reduceMotion) {
            body.classList.remove('animating')
            void body.offsetWidth // restart animation
            body.classList.add('animating')
          }
        }
      })
    })

    // ---------- Magnetic buttons ----------
    document.querySelectorAll('.magnetic').forEach((btn) => {
      if (reduceMotion) return
      btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect()
        const dx = e.clientX - (r.left + r.width / 2)
        const dy = e.clientY - (r.top + r.height / 2)
        btn.style.transform = 'translate(' + dx * 0.15 + 'px,' + dy * 0.15 + 'px)'
      })
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = ''
      })
    })

    // ---------- Hobby card 3D tilt + emoji easter eggs ----------
    document.querySelectorAll('.hobby').forEach((card) => {
      if (reduceMotion) return
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect()
        const px = (e.clientX - r.left) / r.width - 0.5
        const py = (e.clientY - r.top) / r.height - 0.5
        card.style.transform = 'perspective(600px) rotateY(' + px * 6 + 'deg) rotateX(' + -py * 6 + 'deg)'
      })
      card.addEventListener('mouseleave', () => {
        card.style.transform = ''
      })
    })

    const footballCard = document.querySelector('.hobby[data-emoji="⚽"]')
    if (footballCard) {
      footballCard.style.cursor = 'pointer'
      footballCard.setAttribute('title', 'Play the penalty shoot-out 🥅')
      footballCard.addEventListener('click', (e) => {
        openPenalty()
        burstEmojis(e.clientX, e.clientY, ['⚽', '⚽', '🥅', '🎉'])
      })
    }
    document.querySelectorAll('.hobby[data-emoji]:not([data-emoji="⚽"])').forEach((card) => {
      card.addEventListener('click', (e) => {
        const emoji = card.getAttribute('data-emoji')
        burstEmojis(e.clientX, e.clientY, [emoji, emoji, emoji])
      })
    })

    // ---------- Copy email ----------
    document.querySelectorAll('[data-copy-email]').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const email = btn.getAttribute('data-copy-email')
        try {
          await navigator.clipboard.writeText(email)
          showToast('Email copied to clipboard ✓')
        } catch (err) {
          showToast(email)
        }
      })
    })

    // ---------- Penalty shoot-out mini game ----------
    const overlay = document.getElementById('penaltyOverlay')
    const keeper = document.getElementById('penaltyKeeper')
    const ball = document.getElementById('penaltyBall')
    const scoreEl = document.getElementById('penaltyScore')
    const msgEl = document.getElementById('penaltyMsg')
    const zoneBtns = document.querySelectorAll('.penalty-zones button')
    const closeBtn = document.getElementById('penaltyClose')

    const zones = {
      left: { x: 26, y: 32 },
      center: { x: 50, y: 26 },
      right: { x: 74, y: 32 },
    }

    let you = 0, gk = 0, shot = 0, busy = false
    let lastKeeperZone = null

    function updateScore() {
      scoreEl.textContent = 'You ' + you + ' — ' + gk + ' Keeper'
    }

    function resetBall() {
      ball.style.transition = 'none'
      ball.style.top = 'auto'
      ball.style.bottom = '10%'
      ball.style.left = '50%'
      ball.style.opacity = '1'
      void ball.offsetWidth
      ball.style.transition = ''
    }

    function keeperPick() {
      // Keeper avoids repeating the same dive twice in a row.
      const options = ['left', 'center', 'right'].filter((z) => z !== lastKeeperZone)
      const pick = options[Math.floor(Math.random() * options.length)]
      lastKeeperZone = pick
      return pick
    }

    function shoot(playerZone) {
      if (busy || shot >= 5) return
      busy = true
      zoneBtns.forEach((b) => { b.disabled = true })

      const kz = keeperPick()
      const kp = zones[kz]
      const pp = zones[playerZone]

      keeper.style.left = kp.x + '%'
      keeper.style.top = kp.y + 3 + '%'

      // Ball flies to the chosen spot.
      ball.style.bottom = 'auto'
      ball.style.top = pp.y + '%'
      ball.style.left = pp.x + '%'

      const saved = kz === playerZone
      setTimeout(() => {
        if (saved) {
          gk++
          msgEl.innerHTML = '<span class="lose">Saved by the keeper!</span>'
          const r = ball.getBoundingClientRect()
          burstEmojis(r.left + r.width / 2, r.top, ['🧤'])
        } else {
          you++
          msgEl.innerHTML = '<span class="win">GOAL! ⚽</span>'
          const r = ball.getBoundingClientRect()
          burstEmojis(r.left + r.width / 2, r.top, ['🎉', '⚽', '✨'])
        }
        updateScore()
        shot++

        setTimeout(() => {
          if (shot >= 5) {
            if (you > gk) {
              msgEl.innerHTML = '<span class="win">Full time: you win ' + you + '–' + gk + '! Like Rahul after a ₹90L target.</span>'
            } else if (you < gk) {
              msgEl.innerHTML = '<span class="lose">Full time: keeper wins ' + gk + '–' + you + '. Rematch?</span>'
            } else {
              msgEl.textContent = 'Full time: ' + you + '–' + gk + '. Honours even — play again!'
            }
          } else {
            resetBall()
            keeper.style.left = '50%'
            keeper.style.top = '35%'
            zoneBtns.forEach((b) => { b.disabled = false })
            msgEl.textContent = 'Shot ' + (shot + 1) + ' of 5. Pick your spot.'
          }
          busy = false
        }, 1300)
      }, 480)
    }

    zoneBtns.forEach((b) => b.addEventListener('click', () => shoot(b.dataset.zone)))

    function openPenalty() {
      overlay.classList.add('open')
      document.body.style.overflow = 'hidden'
    }
    function closePenalty() {
      overlay.classList.remove('open')
      document.body.style.overflow = ''
    }

    closeBtn.addEventListener('click', closePenalty)
    const overlayClick = (e) => {
      if (e.target === overlay) closePenalty()
    }
    const escapeKey = (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) closePenalty()
    }
    overlay.addEventListener('click', overlayClick)
    document.addEventListener('keydown', escapeKey)

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('scroll', updateSpy)
      document.removeEventListener('keydown', escapeKey)
      overlay.removeEventListener('click', overlayClick)
      revealObserver.disconnect()
      countObserver.disconnect()
      if (vizObs) vizObs.disconnect()
    }
  }, [])

  return (
    <>
      <div className="noise" aria-hidden="true"></div>

      <header className="nav">
        <div className="nav-inner">
          <a className="nav-name" href="#top">Rahul Rawat</a>
          <ul className="nav-links">
            {NAV_LINKS.map(([id, label]) => (
              <li key={id}><a href={'#' + id}>{label}</a></li>
            ))}
          </ul>
        </div>
        <div className="progress-bar" id="progressBar" aria-hidden="true"></div>
        <nav className="pill-row" aria-label="Section navigation">
          <div className="pill-row-inner">
            {NAV_LINKS.map(([id, label]) => (
              <a key={id} href={'#' + id}>{label}</a>
            ))}
          </div>
        </nav>
      </header>

      <main id="top">

        {/* HERO */}
        <section className="hero">
          <div className="hero-inner">
            <svg className="hero-motif" viewBox="0 0 300 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path className="motif-path" d="M6 140 C 60 138, 70 110, 100 108 S 150 60, 175 58 S 220 20, 290 12" stroke="#516B34" strokeWidth="2" strokeLinecap="round" />
              <circle cx="290" cy="12" r="4" fill="#C08A34" />
            </svg>

            <p className="hero-eyebrow">Gurugram &amp; New Delhi</p>
            <h1>Rahul Rawat</h1>
            <p className="hero-pitch">Eighteen months scaling revenue operations at a YC backed startup. Now building my own brand and aiming for founder's office, program management and B2B sales roles.</p>
            <p className="hero-sub">PGP student in Technology &amp; Business Management at Masters' Union, Gurugram, and founder at TNGNT Clothing.</p>

            <div className="hero-actions">
              <a className="btn btn-primary magnetic" href="#work">View work</a>
              <a className="btn btn-ghost magnetic" href="resume.pdf" target="_blank" rel="noopener">Resume</a>
              <a className="btn btn-ghost magnetic" href="https://www.linkedin.com/in/rahulrawat022" target="_blank" rel="noopener">LinkedIn</a>
            </div>

            <div className="hero-line"></div>

            <div className="facts-strip">
              {FACTS.map((f) => (
                <div className="fact" key={f.label}>
                  <div className="num" data-count={f.count} data-prefix={f.prefix} data-suffix={f.suffix} data-group={f.group ? 'true' : undefined}>{f.initial}</div>
                  <div className="label">{f.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee-section" aria-hidden="true">
          <div className="marquee">
            {[0, 1].map((track) => (
              <div className="marquee-track" key={track}>
                {MARQUEE_ITEMS.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <section className="section cv" id="about">
          <div className="wrap">
            <div className="section-head section-head--center" data-reveal="true">
              <p className="kicker">About</p>
              <h2>Before, now, next</h2>
            </div>
            <div className="about-grid">
              <div className="about-block" data-reveal="true">
                <p className="tag">Before</p>
                <h3>Learning outside the classroom</h3>
                <p>Some of my biggest lessons in leadership and problem solving came from activities, not textbooks. In college, I found social entrepreneurship through Enactus and D-Street DSC, and around the same time, I helped build a football fan community from scratch. Both taught me the same thing: you rarely need a perfect plan to start, you need to take the first step and figure out the rest with people who care as much as you do.</p>
              </div>
              <div className="about-block" data-reveal="true">
                <p className="tag">Now</p>
                <h3>Building on both sides</h3>
                <p>I spent eighteen months in revenue operations at Exly, moving from individual contributor to senior manager leading a fifteen person team. In parallel, I'm doing the PGP in Technology &amp; Business Management at Masters' Union and founded TNGNT Clothing, a D2C apparel brand for sports communities. Masters' Union stood out because it treats real projects and industry exposure as the curriculum, not an add on to it.</p>
              </div>
              <div className="about-block" data-reveal="true">
                <p className="tag">Next</p>
                <h3>Strategy, and something of my own</h3>
                <p>I want to keep taking on ambiguous problems, get sharper at strategy and how businesses actually work, and eventually build something of my own at a bigger scale than TNGNT. In the near term, that means founder's office, program management or B2B sales roles, where the job is to walk into unclear situations and find the one thing worth fixing first.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SELECTED WORK */}
        <section className="section section-soft cv" id="work">
          <div className="wrap">
            <div className="section-head" data-reveal="true">
              <p className="kicker">Selected work</p>
              <h2>Seven things I'd want to be asked about</h2>
              <p className="dek">Grouped into paid work, things I built from nothing, and work aimed outward at other people's problems.</p>
            </div>

            {PROJECT_GROUPS.map((group) => (
              <div className="work-group" key={group.title}>
                <p className="work-group-title" data-reveal="true">{group.title}</p>
                {group.projects.map((p) => (
                  <Project key={p.title} project={p} />
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section section-ink" id="experience">
          <div className="wrap">
            <div className="section-head section-head--center" data-reveal="true">
              <p className="kicker">Experience</p>
              <h2 style={{ color: 'var(--paper)' }}>Where the numbers came from</h2>
            </div>

            <div className="exp-impact" data-reveal="true">
              {IMPACT.map((cell) => (
                <div className="exp-impact-cell" key={cell.label}>
                  <div className="num" data-count={cell.count} data-decimals={cell.decimals} data-prefix={cell.prefix} data-suffix={cell.suffix} data-group={cell.group ? 'true' : undefined}>{cell.initial}</div>
                  <div className="label">{cell.label}</div>
                </div>
              ))}
            </div>

            <div className="exp-roles" data-reveal="true">
              {ROLES.map((role) => (
                <div className="exp-role-card" key={role.title + role.dates}>
                  <div className="exp-role-card-inner">
                    <div className="exp-role-header">
                      <div>
                        <div className="exp-role-title">{role.title}</div>
                        <div className="exp-role-org">{role.org}</div>
                      </div>
                      <span className="exp-role-dates">{role.dates}</span>
                    </div>
                    <p className="exp-role-notes">{role.notes}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="exp-skills" data-reveal="true">
              <p className="flabel">Skills &amp; tools</p>
              <div className="skills-tags">
                {SKILLS.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section tight cv" id="education">
          <div className="wrap">
            <div className="section-head section-head--center" data-reveal="true">
              <p className="kicker">Education</p>
              <h2>Formal, and hands on</h2>
            </div>
            <div data-reveal="true">
              {EDUCATION.map((edu) => (
                <div className="edu-item" key={edu.school}>
                  <div>
                    <h3>{edu.school}</h3>
                    <p className="deg">{edu.deg}</p>
                  </div>
                  <div className="yrs">{edu.yrs}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="section tight section-soft cv" id="achievements">
          <div className="wrap">
            <div className="section-head section-head--center" data-reveal="true">
              <p className="kicker">Achievements</p>
              <h2>A few that say something about how I work</h2>
            </div>
            <div className="ach-list" data-reveal="true">
              {ACHIEVEMENTS.map((ach, i) => (
                <div className="ach-item" key={i}>
                  <div className="ach-mark">{String(i + 1).padStart(2, '0')}</div>
                  <p>{ach}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WRITING */}
        <section className="section cv" id="writing">
          <div className="wrap">
            <div className="section-head section-head--center" data-reveal="true">
              <p className="kicker">Writing</p>
              <h2>One thing I actually think about</h2>
            </div>
            <div className="writing-card" data-reveal="true">
              <h3>Beating a stretch target while learning to lead</h3>
              <p className="writing-meta">A short account of Q1 2025 at Exly.</p>

              <div className="compare-viz" role="img" aria-label="Target of 90 lakh rupees versus actual result of 1.2 crore rupees, a 33 percent overachievement">
                <div className="bar-col">
                  <div className="bar-track"><div className="bar-fill target"></div></div>
                  <div className="bar-num">₹90L</div>
                  <div className="bar-label">Target</div>
                </div>
                <div className="bar-col">
                  <div className="bar-track"><div className="bar-fill actual"></div></div>
                  <div className="bar-num">₹1.2Cr</div>
                  <div className="bar-label">Actual, +33%</div>
                </div>
              </div>

              <p>In Q1 2025, my team was given a target of ₹90 lakh in profit for the quarter. I had also just been promoted into a managerial role for the first time. So I was responsible for delivering the number and for overseeing a team of twelve or more people, without a clear roadmap for how to get there.</p>

              <p>My immediate priority was to understand what was holding the team back. Since I had recently been in a junior role myself, I had a good sense of the operational challenges the team was facing, and I wanted to use that to make the team more efficient while keeping everyone motivated toward a shared goal.</p>

              <p>I started by speaking with the team individually and collectively about the problems they were facing across our processes. We found several small inefficiencies and repetitive manual tasks eating into the team's time. I worked with the team to simplify these processes and automate the most repetitive ones. The idea was simple. If we saved collective hours on operational work, we could redirect that time toward activities that drove sales and revenue directly.</p>

              <p>It became a mini revamp of processes that had been followed for a long time. Alongside the process changes, I focused on keeping the team motivated. Since it was my first managerial role too, I tried to lead from the front, stay involved in execution, and build a sense that we were figuring this out together rather than simply chasing a number.</p>

              <p>We ultimately delivered ₹1.2 crore in profit against a ₹90 lakh target, beating it by roughly a third. The bigger takeaway for me wasn't the number itself. It was learning how to lead a team through an ambiguous situation, find problems from the ground up, and turn small process improvements into business impact that mattered. It was also my first real lesson that a manager's job isn't to do the work better yourself. It's to build an environment where the whole team can perform better.</p>
            </div>
          </div>
        </section>

        {/* BEYOND WORK */}
        <section className="section section-soft cv" id="beyond">
          <div className="wrap">
            <div className="section-head section-head--center" data-reveal="true">
              <p className="kicker">Beyond work</p>
              <h2>What I do when I'm not working</h2>
              <p className="dek">The football community wasn't a one off. Most of what I care about outside work still involves people, movement, or both.</p>
            </div>

            <div className="hobby-grid" data-reveal="true">
              <div className="hobby hobby--flagship" data-emoji="⚽">
                <HobbyIcon>
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7.5l3 2.2-1.1 3.6h-3.8L9 9.7z" />
                  <path d="M12 3v4.5M12 20.5V17M4 9.5l3.1 1M20 9.5l-3.1 1M4.6 16.5l3.5-2.2M19.4 16.5l-3.5-2.2" />
                </HobbyIcon>
                <h3>Football, and Barca</h3>
                <p>Been a fan for years, helped build a 10,000 plus member fan community, and I still don't miss a matchday.</p>
                <span className="hobby-badge">🎮 Play the penalty shoot-out</span>
              </div>

              <div className="hobby" data-emoji="🏔️">
                <HobbyIcon>
                  <path d="M3 19h18" />
                  <path d="M4 19l5-9 3 4 2-3 6 8" />
                  <path d="M9 10l-1.5 3M18 13l1.5 2" />
                </HobbyIcon>
                <h3>Trekking &amp; mountains</h3>
                <p>Led five plus multi-day Himalayan expeditions as a trip captain, and I still look for reasons to get back up there.</p>
              </div>

              <div className="hobby" data-emoji="🎱">
                <HobbyIcon>
                  <rect x="2.5" y="6" width="19" height="12" rx="1.5" />
                  <circle cx="7" cy="12" r="1.1" fill="currentColor" stroke="none" />
                  <circle cx="17" cy="9" r="1.1" fill="currentColor" stroke="none" />
                  <circle cx="17" cy="15" r="1.1" fill="currentColor" stroke="none" />
                </HobbyIcon>
                <h3>Snooker</h3>
                <p>Slow, precise, and the closest thing I have to a reset button after a long week.</p>
              </div>

              <div className="hobby" data-emoji="🚗">
                <HobbyIcon>
                  <path d="M3 16l1.5-5A2 2 0 0 1 6.4 9.5h11.2a2 2 0 0 1 1.9 1.5L21 16" />
                  <path d="M3 16h18v2.5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V17H6v1.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
                  <circle cx="7.5" cy="16" r="1" />
                  <circle cx="16.5" cy="16" r="1" />
                </HobbyIcon>
                <h3>Long drives</h3>
                <p>No destination required. Some of my best thinking happens on the road.</p>
              </div>

              <div className="hobby" data-emoji="🍜">
                <HobbyIcon>
                  <path d="M6 3v7a3 3 0 0 0 3 3v8" />
                  <path d="M6 3v7M9 3v7" />
                  <path d="M17 3c-2 1-2 5-2 7a2 2 0 0 0 2 2v9" />
                </HobbyIcon>
                <h3>Food</h3>
                <p>Always up for trying somewhere new, and always willing to argue about where has the best food.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section cv" id="contact">
          <div className="wrap">
            <div className="section-head section-head--center" data-reveal="true">
              <p className="kicker">Contact</p>
              <h2>Let's talk about the role.</h2>
              <p className="dek">Open to conversations on founder's office, program management, revenue operations and B2B sales roles. The fastest way to reach me is email.</p>
            </div>
            <div className="contact-icons" data-reveal="true">
              <a className="contact-icon-card" href="mailto:rahul.rawat2027@mastersunion.org">
                <span className="ci-emoji">📧</span>
                <span className="ci-label">Send email</span>
              </a>
              <button className="contact-icon-card" type="button" data-copy-email="rahul.rawat2027@mastersunion.org">
                <span className="ci-emoji">📋</span>
                <span className="ci-label">Copy email</span>
              </button>
              <a className="contact-icon-card" href="https://www.linkedin.com/in/rahulrawat022" target="_blank" rel="noopener">
                <span className="ci-emoji">💼</span>
                <span className="ci-label">LinkedIn</span>
              </a>
              <a className="contact-icon-card" href="resume.pdf" target="_blank" rel="noopener">
                <span className="ci-emoji">📄</span>
                <span className="ci-label">View resume</span>
              </a>
              <a className="contact-icon-card" href="resume.pdf" download>
                <span className="ci-emoji">⬇️</span>
                <span className="ci-label">Download</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer>
        <div className="wrap footer-inner">
          <span>Rahul Rawat, 2026</span>
          <span>Built for AI in Business, Masters' Union</span>
        </div>
      </footer>

      <div className="toast" id="toast" role="status" aria-live="polite"></div>

      {/* PENALTY SHOOT-OUT EASTER EGG */}
      <div className="penalty-overlay" id="penaltyOverlay">
        <div className="penalty-modal" role="dialog" aria-modal="true" aria-labelledby="penaltyTitle">
          <button className="penalty-close" id="penaltyClose" aria-label="Close game">✕</button>
          <h3 id="penaltyTitle">Penalty shoot-out</h3>
          <p className="penalty-sub">Pick a corner. Beat the keeper. Best of five.</p>
          <div className="penalty-score" id="penaltyScore">You 0 — 0 Keeper</div>
          <div className="penalty-pitch">
            <div className="penalty-goal"></div>
            <div className="penalty-keeper" id="penaltyKeeper"></div>
            <div className="penalty-ball" id="penaltyBall"></div>
          </div>
          <div className="penalty-zones">
            <button data-zone="left">Left</button>
            <button data-zone="center">Center</button>
            <button data-zone="right">Right</button>
          </div>
          <div className="penalty-msg" id="penaltyMsg">Pick your spot.</div>
        </div>
      </div>
    </>
  )
}
