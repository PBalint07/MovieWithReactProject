import React from 'react'
import { useState } from 'react'
import { getTv } from '../utils';
import { MediaList } from '../components/MediaList';
import { Loading } from '../components/Loading';
import { useEffect } from 'react';

export const TvShows = () => {
  const [tvs, setTvs] = useState(null)

  tvs && console.log(tvs);

  useEffect(() => {
    getTv().then(setTvs)
  }, [])
  
  return (
    <div>
      {tvs ? <MediaList data={tvs} type='tv'/> : <Loading/>}
    </div>
  )
}

