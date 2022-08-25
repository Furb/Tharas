import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>Thabo Rasmussen</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Hero />
      <About />

      <section className="container mx-auto my-44">
        <h4>Working on it</h4>
        <h2 className="font-extralight">
          Currently devoted in learning more about React.js and Next.js. I'm on
          a javascript learning path. It's a slow and steady progress. React.js
          and Next.js gives it a purpose, and the aim for creating sites build
          on a headless cms gives the learning process context.
        </h2>
      </section>
    </>
  );
}
