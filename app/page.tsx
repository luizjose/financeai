import Image from "next/image";
import { Button } from "./_components/ui/button";

export default function Home() {
  return (
    <div className="flex w-screen items-center justify-center">
      <h1 className="text-red-500 ">Finance AI</h1>
      <Button>Click me</Button>
    </div>
  );
}
