import React from 'react'
import { useState } from 'react'
import { getTrendings} from '../utils'
import { useEffect } from 'react'
import { img_300 } from '../utils'
import { MediaList } from '../components/MediaList'
import { Loading } from '../components/Loading'

export const Home = () => {
  const [trendings, setTrendings] = useState(null)

  trendings && console.log(trendings);
  
  useEffect(() => {
    getTrendings().then(setTrendings)
  }, [])
  
  return (
    <div className='min-h-screen'>
      {trendings ? <MediaList data={trendings} type='trending' /> : <Loading/>}
    </div>
  )
}


