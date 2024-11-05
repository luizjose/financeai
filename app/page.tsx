import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-screen items-center justify-center">
      <h1 className="text-red-500 ">Finance AI</h1>
      <p>
        Finance AI is a project that uses machine learning to predict stock
        prices.
      </p>
      <Image
        src="/stock-market.jpg"
        alt="Stock Market"
        width={500}
        height={300}
      />
    </div>
  );
}
