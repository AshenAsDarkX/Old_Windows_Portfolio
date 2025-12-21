import clsx from "clsx";
import { login } from "./action";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <form className="flex w-full max-w-md flex-col gap-4 rounded-lg border p-8 shadow-sm">
        <h1 className="mb-4 text-2xl font-bold">Admin Login</h1>

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded border p-2 text-black"
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="rounded border p-2 text-black"
        />

        <button
          formAction={login}
          className={clsx(
            "oldButtonHover cursor-pointer items-center justify-center border-2 border-solid hover:border-b-gray-500 hover:border-l-white hover:border-r-gray-500 hover:border-t-white",
          )}
        >
          Log in
        </button>
      </form>
    </div>
  );
}
