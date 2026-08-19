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
    <main className="mx-auto w-full max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 lg:px-12">
      <section className="mb-8 sm:mb-10 md:mb-11">
        <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl md:text-5xl">Welcome to the HomePage</h2>
        <p className="mt-3 text-lg text-slate-700 sm:mt-4 sm:text-xl md:mt-5 md:text-2xl">Download and see previous year question papers</p>
      </section>

      <section className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:gap-8 xl:gap-10">
        {stateBoards.map((board) => (
          <AllStateCard key={board.id} {...board} />
        ))}
      </section>
    </main>
  )
}
