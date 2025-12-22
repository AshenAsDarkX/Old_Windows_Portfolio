import { useFormStatus } from "react-dom";
import Image from "next/image";
import loading from "@/public/loading-icon.jpg";
import IconButton from "@/components/IconButton";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={` cursor-pointer items-center justify-center p-2
        ${pending ? "border-transparent" : "oldButtonHover border-2 border-solid border-black "}`}
    >
      {pending ? (
        <span className="flex items-center gap-2">
          <span className="animate-[spin_4s_linear_infinite] text-lg">
            <Image alt="loading..." src={loading} width={15} />
          </span>{" "}
          Uploading...
        </span>
      ) : (
        <span>Upload Project</span>
      )}
    </button>
  );
}
