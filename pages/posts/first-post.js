import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Layout from "../../components/layout.js";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      {/*This is just an example how and were to add a script in Nextjs*/}
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
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
    </Layout>
  );
}
