import { memo } from 'react';

export default memo(function Frederika() {
  return <div className="bg-pink-300 border m-4 h-6">Frederika</div>;
});

// memo - защищает от ненужных рендеров
