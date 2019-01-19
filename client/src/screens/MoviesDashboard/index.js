import React, { Suspense } from 'react';
import { SimpleLoadingText } from 'client/components/Loading';

const MoviesDashboard = React.lazy(() => import('./MoviesDashboard'));

export default function MoviesDashboardLazy(props) {
  return (
    <Suspense fallback={<SimpleLoadingText />}>
      <MoviesDashboard {...props} />
    </Suspense>
  )
}