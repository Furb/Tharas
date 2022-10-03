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
      <div className="big_container desktop:flex my-44 desktop:my-72">
        <div className="big_left">
          <h4>Working on it</h4>
        </div>

        <div className="big_right">
          <p>
            Currently devoted on a React.js learning path. Javascript has been a
            slow and steady progress for me. React.js and Next.js gives it
            purpose, and the aim for continually working with headless cms gives
            the learning process context.
          </p>
        </div>
      </div>
    </>
  );
}
