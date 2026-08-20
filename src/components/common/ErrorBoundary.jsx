import { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="mx-auto flex min-h-screen max-w-3xl items-center px-4 py-12 sm:px-6 lg:px-8">
          <section className="rounded-3xl border border-red-100 bg-white p-8 text-center shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-red-600">Something went wrong</p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">We could not load this page safely.</h1>
            <p className="mt-4 text-slate-600">Refresh the page or return later while we recover from the error.</p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-8 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Reload page
            </button>
          </section>
        </main>
      )
    }

    return this.props.children
  }
}
