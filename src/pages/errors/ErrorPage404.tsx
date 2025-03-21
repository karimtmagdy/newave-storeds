import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import {
  useRouteError,
  isRouteErrorResponse,
  ErrorResponse,
} from "react-router";
const ErrorPage404 = () => {
  const navigate = useNavigate();
  const error: any = useRouteError();
  let errorStatus: number;
  let errorStatusText: string;
  const err = error as ErrorResponse;
  if (isRouteErrorResponse(err)) {
    errorStatus = err.status;
    errorStatusText = err.statusText;
  }

  return (
    <section className="fixed inset-0 flex items-center justify-center p-4">
      <div className="flex flex-col items-start justify-center space-y-2">
        <small className="rounded-lg bg-zinc-300 px-2 py-1 select-none">
          Oops!
        </small>
        <h2 className="text-xl leading-none font-medium select-none lg:text-3xl">
          page not found {errorStatus!} {errorStatusText!}
        </h2>
        <p className="text-zinc-500 select-none md:whitespace-nowrap">
          It seems the page you're looking for doesn't exist.
        </p>
        <div className="space-x-3 font-bold select-none *:text-4xl *:uppercase *:lg:text-6xl">
          <span>error</span>
          <span className="text-red-600">404</span>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-x-1 rounded-lg bg-black px-2 py-1 font-medium text-white transition-colors hover:bg-black/80 lg:gap-x-2 lg:px-4 lg:py-2"
        >
          <ArrowLeft size={18} /> go back
        </button>
      </div>
    </section>
  );
};

export default ErrorPage404;
