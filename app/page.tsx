import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Finance AI</h1>
      <p>Finance AI is a project that uses machine learning to predict stock prices.</p>
      <Image src="/stock-market.jpg" alt="Stock Market" width={500} height={300} />
    </div>
  );
}
