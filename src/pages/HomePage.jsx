import React from 'react'
import AllStateCard from '../components/common/AllStateCard'

export default function HomePage() {

  const stateBoards = [
    {
      id: 1,
      title: "WBSCTE",
      stateName: "West Bengal",
      logoSrc: "https://webscte.co.in/assets/image/logo.png",
      linkTo: "/wb"
    },
    {
      id: 2,
      title: "Coming Soon",
      stateName: "_",
      logoSrc: "#",
      linkTo: "#"
    },
  ];

  return (
    <main>
      <div className="shadow-sm p-5">
        <h1>Welcome to the HomePage</h1>
        <h2>Download and see previous year question papers</h2>
      </div>

      <div className="p-6 md:p-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stateBoards.map((board) => (
            <AllStateCard
              key={board.id}
              title={board.title}
              stateName={board.stateName}
              logoSrc={board.logoSrc}
              linkTo={board.linkTo}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
