import AllStateCard from '../components/common/AllStateCard'

export default function HomePage() {
  const stateBoards = [
    {
      id: 1,
      title: 'WBSCTE',
      stateName: 'West Bengal',
      logoSrc: 'https://webscte.co.in/assets/image/logo.png',
      linkTo: '/wb',
    },
    {
      id: 2,
      title: 'Coming Soon',
      stateName: '',
      linkTo: '#',
      disabled: true,
    },
  ]

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      
      {/* Hero / Header Section */}
      <header className="mb-10 max-w-3xl md:mb-14">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
          Ace Your Exams with <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Previous Year Papers
          </span>
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg md:mt-6 md:text-xl">
          Select your <b>State Board</b> below to instantly download past question papers. Practice effectively and boost your exam preparation today.
        </p>
      </header>

      {/* State Boards Grid */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:gap-8">
        {stateBoards.map((board) => (
          <AllStateCard key={board.id} {...board} />
        ))}
      </section>
      
    </main>
  )
}