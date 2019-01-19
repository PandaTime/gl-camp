import React, { Suspense } from 'react';
import { SimpleLoadingText } from 'client/components/Loading';

const MovieEdit = React.lazy(() => import('./MovieEdit'));

export default function MovieEditLazy(props) {
  return (
    <Suspense fallback={<SimpleLoadingText />}>
      <MovieEdit {...props} />
    </Suspense>
  )
}