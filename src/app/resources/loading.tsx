import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Loader size={64} className="text-zinc-800 animate-pulse" />
    </div>
  );
}
