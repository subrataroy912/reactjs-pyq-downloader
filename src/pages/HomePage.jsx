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
    <main className="px-5 py-12 md:px-11">
      <section className="mb-11">
        <h2 className="text-4xl font-extrabold tracking-tight text-black md:text-5xl">Welcome to the HomePage</h2>
        <p className="mt-5 text-2xl text-slate-700">Download and see previous year question papers</p>
      </section>

      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:gap-10">
        {stateBoards.map((board) => (
          <AllStateCard key={board.id} {...board} />
        ))}
      </section>
    </main>
  )
}
