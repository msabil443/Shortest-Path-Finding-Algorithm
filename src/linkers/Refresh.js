import React from 'react';

function RefreshButton() {
  const handleRefreshClick = () => {
    window.location.reload();
  };

  return (
    <button onClick={handleRefreshClick}>Refresh</button>
  );
}

export default RefreshButton;
