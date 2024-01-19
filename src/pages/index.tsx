import TableContent from "@/modules";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Ghostie | Home</title>
      </Head>
      <div>
        <TableContent />
      </div>
    </main>
  );
}
