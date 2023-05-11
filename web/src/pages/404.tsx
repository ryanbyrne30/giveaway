import Link from "next/link";
import { Layout } from "src/layouts/Layout";

export default function NotFoundPage() {
  return (
    <Layout className="justify-center gap-10 pt-0">
      <header className="center">
        <h1 className="text-6xl">Whelp</h1>
        <p className="subtitle">looks like this page doesn't exist</p>
      </header>
      <Link href="/" className="font-medium underline hover:text-stone-200">
        <button className="primary">home</button>
      </Link>
    </Layout>
  );
}
