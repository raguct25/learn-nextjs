import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex h-screen justify-center items-center">
        <div className="text-center text-2xl text-rose-500">
          ReactJs
          <h1 className="text-3x">Welcome NextJs Project!</h1>
          <p className="text-sm italic">Learn PoC</p>
          <div className="mt-4">
            <Link
              href="/poc1"
              className="rounded-full bg-slate-600 px-4 py-2 text-white text-sm"
            >
              PoC-1
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
