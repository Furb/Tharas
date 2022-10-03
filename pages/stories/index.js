import { gql } from "@apollo/client";
import Link from "next/link";
import client from "../../apolloClient";
import { FiArrowDownRight } from "react-icons/fi";
import Image from "next/image";

const Stories = ({ stories }) => {
  console.log(stories);
  return (
    <section className="stories big_container desktop:my-44">
      <h1 className="mb-32">Stories</h1>

      {stories.map((story) => (
        <div
          key={story.slug}
          className="hover:translate-x-4 trans duration-500"
        >
          <Link href={"/stories/" + story.slug}>
            <a className="group py-16 big:py-24 inline-flex items-end trans relative">
              <h2 className="group-hover:opacity-50 z-10">
                {story.title}
                <FiArrowDownRight className="h3 inline trans group-hover:rotate-45 group-hover:opacity-50 ml-8" />
              </h2>
              <div className="absolute trans bottom-0 hover:-left-4 left-0 group-hover:translate-x-[5vw] group-hover:right-0 invisible group-hover:visible z-0">
                <figure className="relative w-104 h-80 flex-1">
                  <Image
                    src="https://images.unsplash.com/photo-1657299170937-3c87404f01c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    layout="fill"
                    objectFit="contain"
                    alt=""
                  />
                </figure>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Stories;

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        stories {
          title
          slug
        }
      }
    `,
  });
  const { stories } = data;

  return {
    props: {
      stories,
    },
  };
}
