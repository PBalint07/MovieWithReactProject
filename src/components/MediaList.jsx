
import React from 'react'
import { MediaCard } from './MediaCard'

export const MediaList = ({ data, type }) => {

  return (
    <div className="relative min-h-screen">

      {/* Sötétvörös háttérvilágítás */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_0%,rgba(130,0,0,0.12),transparent_65%)]"></div>

      <div className="relative grid grid-cols-[repeat(auto-fit,minmax(200px,300px))] gap-6 justify-center px-4 py-8">
        {data && data.map(obj => <MediaCard key={obj.id} media={obj} />)}
      </div>

    </div>
  )
}
