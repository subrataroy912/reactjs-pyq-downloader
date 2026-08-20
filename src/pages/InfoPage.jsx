import { Link } from 'react-router-dom'

const pageDetails = {
  'Privacy Policy': [
    'We only use the information you voluntarily share to improve the PYQ library and respond to requests.',
    'Downloads are served directly from the listed resources. We do not sell personal data or require an account to browse papers.',
  ],
  'Terms of Use': [
    'Use this site for exam preparation and educational reference only.',
    'Question papers remain the property of their respective boards or institutions. Please report any incorrect or problematic listing.',
  ],
  'Report Missing Paper': [
    'Tell us the board, branch, semester, subject, and exam year that should be added.',
    'We will review submissions before publishing links so students do not land on broken or incorrect downloads.',
  ],
}

export default function InfoPage({ title, description }) {
  const details = pageDetails[title] ?? []

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">WB Diploma PYQ</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{title}</h1>
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>

        {details.length > 0 && (
          <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600 sm:text-base">
            {details.map((detail) => (
              <li key={detail} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" aria-hidden="true" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        )}

        <Link
          to="/"
          className="mt-8 inline-flex items-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Back to home
        </Link>
      </section>
    </main>
  )
}
