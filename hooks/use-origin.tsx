import { useEffect, useState } from "react";

export const useOrigin = () => {
  const [Mounted, setIsMounted] = useState(false);
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if(!Mounted) return '';

  return origin
};
