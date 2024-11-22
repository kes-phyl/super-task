import TodoCard from "@/components/TodoCard";


export default function Home() {
  return (
    <div className="grid grid-rows-[px_1fr_20px] gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="justify-self-center text-4xl">TODO LIST</h1>
      <TodoCard />
    </div>
  );
}
