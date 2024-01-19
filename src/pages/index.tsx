
// import Ticket from "@/components/Ticket";
import Borrow from "@/components/borrow";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Head>
        <title>Ghostie | Home</title>
      </Head>
      <div>Index</div>
      {/* <Ticket /> */}
      <Borrow />
    </main>
  );
}
