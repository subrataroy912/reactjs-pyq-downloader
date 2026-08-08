const defaultContent = {
  Branches: {
    intro: 'Explore diploma branches, their syllabus structure, and question paper availability.',
    items: [
      'Computer Science & Technology',
      'Electrical Engineering',
      'Mechanical Engineering',
      'Civil Engineering',
      'Electronics & Telecommunication',
    ],
  },
  Syllabus: {
    intro: 'Official subject-wise syllabus and academic structure for each semester.',
    items: [
      'Semester 1: English, Mathematics, Physics',
      'Semester 2: Chemistry, Engineering Graphics, Workshop',
      'Semester 3: Core engineering subjects',
      'Semester 4: Applied mathematics and lab work',
    ],
  },
  'Important Questions': {
    intro: 'High-priority questions frequently repeated in semester exams.',
    items: ['Short answer type questions', 'Long answer type questions', 'Numerical problem sets'],
  },
  Notes: {
    intro: 'Quick revision notes, definitions, formula sheets, and summary guides.',
    items: ['Concept maps', 'Exam shortcuts', 'Lab viva notes'],
  },
  'Model Papers': {
    intro: 'Solution-based sample papers to prepare for your real examinations.',
    items: ['Previous year model tests', 'Internal exam patterns', 'Mock papers'],
  },
  'PYQ Analysis': {
    intro: 'Track paper trends, frequently asked concepts, and marks distribution.',
    items: ['High-weightage chapters', 'Repeated questions', 'Marking pattern'],
  },
  Discussion: {
    intro: 'Join subject discussions and clarify doubts with peers and mentors.',
    items: ['Doubt threads', 'Exam strategy guides', 'Peer discussions'],
  },
  About: {
    intro: 'A digital archive made for students to access diploma exam resources quickly.',
    items: ['Student-first archive', 'Semester-wise collection', 'Fast searches and downloads'],
  },
  Contact: {
    intro: 'Get in touch for support, suggestions, or missing question paper requests.',
    items: ['Email support', 'Report missing paper', 'Feedback form'],
  },
  FAQ: {
    intro: 'Common questions about downloads, availability, and paper access.',
    items: ['How do I download?', 'Are papers updated regularly?', 'Can I request a missing paper?'],
  },
}

function InfoPage({ title, description }) {
  const content = defaultContent[title] || {
    intro: description || 'Useful information and study resources for your diploma journey.',
    items: ['Course details', 'Academic notes', 'Question resources'],
  }

  return (
    <main className="page-shell">
      <section className="page-card feature-card">
        <div className="page-header">
          <div>
            <p className="section-kicker">Information</p>
            <h1>{title}</h1>
          </div>
          <span className="pill-badge">Updated</span>
        </div>

        {description && <p className="page-lead">{description}</p>}
        {!description && <p className="page-lead">{content.intro}</p>}

        <div className="info-grid">
          {content.items.map((item) => (
            <div key={item} className="mini-card">
              <div className="mini-card-icon">✓</div>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default InfoPage
