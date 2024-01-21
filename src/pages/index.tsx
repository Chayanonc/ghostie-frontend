import Borrow from "@/components/Header/Borrow";
// import Header from "@/components/Header/Header";
import TableContent from "@/modules";
import dynamic from "next/dynamic";
import Head from "next/head";
const Header = dynamic(() => import("@/components/Header/Header"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <Head>
        <title>Ghostie | Home</title>
      </Head>
      <Header />
      <div className="my-10">
        <TableContent />
      </div>
    </main>
  );
}
