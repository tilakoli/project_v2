import React from "react";
import { ScatterBoxLoader } from "react-awesome-loaders";
import { useRouter } from "next/router";
import { useState, useEfect } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(false);

  const Loading = () => {
    const router = useRouter();
    useEfect(() => {
      const handleStart = () => url !== router.asPath && setLoading(true);
      const handleComplete = () => url !== router.asPath && setLoading(false);

      router.events.on("routeChangeStart", handleStart);
      router.events.on("routeChangeComplete", handleComplete);
      router.events.on("routeChangeError", handleComplete);

      return () => {
        router.events.off("routeChangeStart", handleStart);
        router.events.off("routeChangeComplete", handleComplete);
        router.events.off("routeChangeError", handleComplete);
      };
    });

    return (
      loading && (
        <div className="fixed z-50 flex flex-col items-center w-screen h-screen bg-black justify-evenly">
          <p className="text-4xl text-white underline">
            Under Development...!!!
          </p>
          <ScatterBoxLoader primaryColor={"#6366F1"} background={"#000"} />
        </div>
      )
    );
  };
  return <Loading />;
};

export default Loader;
