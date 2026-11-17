
import React from 'react'
import { img_300 } from '../utils'

export const MediaCard = ({ media }) => {
  return (
    <div className="h-full transition-all duration-300 hover:-translate-y-2">

      <div className="card w-full h-full overflow-hidden bg-gradient-to-b from-[#200d0d] via-[#130909] to-[#080808] text-gray-200 border border-red-900/40 shadow-[0_5px_25px_rgba(120,0,0,0.2)] hover:border-red-500/70 hover:shadow-[0_0_35px_rgba(220,0,0,0.4)] transition-all duration-500">

        <figure className="relative overflow-hidden">
          <img
            src={img_300 + media.poster_path}
            alt={media.title || media.name}
            className="w-full h-[350px] object-cover transition-transform duration-500 hover:scale-110"
          />

          {/* Sötétvörös árnyék a plakáton */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#100505]/90 via-transparent to-transparent"></div>
        </figure>

        <div className="card-body bg-gradient-to-b from-[#170909] to-[#080808]">

          <h2 className="card-title text-white font-bold tracking-wide drop-shadow-[0_0_8px_rgba(255,0,0,0.25)]">
            {media.title || media.name}
          </h2>

          <p className="flex justify-between pt-2 gap-2 text-sm text-gray-400">
            <span className="text-red-400 font-semibold">
              {media.media_type}
            </span>

            <span>
              {media.release_date || media.first_air_date}
            </span>
          </p>

          <div className="card-actions justify-end mt-3">
            <button className="btn bg-gradient-to-r from-red-900 to-red-700 text-white border border-red-500/40 hover:from-red-700 hover:to-red-600 hover:border-red-400 hover:shadow-[0_0_20px_rgba(255,0,0,0.5)] transition-all duration-300">
              Buy Now
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
