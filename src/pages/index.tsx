
// import Ticket from "@/components/Ticket";
import Borrow from "@/components/Header/Borrow";
import Header from "@/components/Header/Header";
import { Inter } from "next/font/google";
import TableContent from "@/modules";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Ghostie | Home</title>
      </Head>
      <div>Index</div>
      <Header/>
      <div>
        <TableContent />
      </div>
    </main>
  );
}
