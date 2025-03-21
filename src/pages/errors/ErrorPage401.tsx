import { SIGNINAPI } from "@/services/api/api";
import { ArrowLeft } from "lucide-react";
import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router";

const ErrorPage401 = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
  useLayoutEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    const timeout = setTimeout(() => {
      navigate(SIGNINAPI);
    }, 5000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);
  return (
    <section className="fixed inset-0 flex items-center justify-center p-4">
      <div className="flex flex-col items-start justify-center space-y-2">
        <small className="rounded-lg bg-zinc-300 px-2 py-1 select-none">
          Oops!
        </small>
        <h2 className="text-xl leading-none font-extrabold select-none lg:text-3xl">
          Unauthorized
        </h2>
        <p className="text-zinc-500 select-none md:whitespace-nowrap">
          you are not unthorized to view this page.
        </p>
        <div className="space-x-3 font-bold select-none *:text-4xl *:uppercase *:lg:text-6xl">
          <span>error</span>
          <span className="text-red-600">401</span>
        </div>
        <div className="select-none">
          <p className="text-sm text-zinc-400">
            You’ll be redirected to the login page in 5 seconds...
          </p>
          <div className="mt-1 flex items-center gap-x-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-200">
              {countdown}
            </span>

            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-x-1 rounded-lg bg-black px-2 py-1 font-medium text-white capitalize transition-colors hover:bg-black/80"
            >
              <ArrowLeft size={18} /> go back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage401;
