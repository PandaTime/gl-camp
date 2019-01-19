import React, { Suspense } from 'react';
import { SimpleLoadingText } from 'client/components/Loading';

const MoviesList = React.lazy(() => import('./MoviesList'));

export default function MoviesIndexLazy(props) {
  return (
    <Suspense fallback={<SimpleLoadingText />}>
      <MoviesList {...props} />
    </Suspense>
  )
}