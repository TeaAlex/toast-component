import React from "react";
export const useEscapeKey = (callback) => {
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        callback()
      }
    }
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown)

  }, [callback])
}