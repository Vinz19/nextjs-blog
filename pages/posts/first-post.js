import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function FirstPost() {
   
    return (
        <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
        <Image
          src="/images/profile.jpg"
          height={150}
          width={150}
          alt="Vinz Starfoullah"
        />
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
