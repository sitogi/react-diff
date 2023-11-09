import { JSX } from 'react';

import { DiffViewer } from '~/components/DiffViewer';

export function App(): JSX.Element {
  return (
    <div
      style={{ display: 'grid', placeContent: 'center', width: '100vw', height: '100vh', backgroundColor: '#363636' }}
    >
      <div style={{ width: 1000, height: 600 }}>
        <DiffViewer />
      </div>
    </div>
  );
}
