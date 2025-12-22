import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`flex items-center justify-center rounded border-2 p-3 font-bold text-white transition-all 
        ${
          pending
            ? "cursor-not-allowed bg-gray-400 opacity-70"
            : "bg-blue-600 hover:bg-blue-700 active:translate-y-[1px]"
        }`}
    >
      {pending ? (
        <span className="flex items-center gap-2">
          <span className="animate-spin text-lg">⏳</span> Uploading...
        </span>
      ) : (
        "Upload Project"
      )}
    </button>
  );
}
