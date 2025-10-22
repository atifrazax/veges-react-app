
import { useEffect, useState } from "react";

export default function Loader() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoading = () => {
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
        if(document.readyState === 'complete') {
            handleLoading();
        }
        window.addEventListener('load' , handleLoading)

        return () => {
            window.removeEventListener('load' , handleLoading)
        }
    }, [])
    return loading && (
    <div className="fixed inset-0 flex justify-center items-center h-screen bg-secondary/95 z-[999] touch-none select-none overflow-hidden">
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 
        border-4 border-primary border-t-transparent rounded-full animate-spin">
      </span>
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 
        border-4 border-primary border-t-transparent rounded-full animate-anti-spin">
      </span>
    </div>
  );
}