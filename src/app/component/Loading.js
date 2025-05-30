import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[65vh] w-full">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-orange-500 border-opacity-70"></div>
    </div>
  );
};

export default Loading;
