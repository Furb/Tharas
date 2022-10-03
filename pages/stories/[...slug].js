import { gql } from "@apollo/client";
import client from "../../apolloClient";

const StoryPage = ({ story }) => {
  console.log(story);
  return (
    <section className="stories big_container desktop:my-44">
      <div className="flex flex-col min-h-[60vh] bg-light mb-56 justify-end pb-24 pl-24">
        <h1 className="text-darkBlue text-xl">{story.title}</h1>
      </div>

      <h2 className="text-light font-extralight mb-32">{story.intro}</h2>

      <p>{story.postContent.text}</p>
    </section>
  );
};

export default StoryPage;

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query {
        stories {
          slug
        }
      }
    `,
  });
  const { stories } = data;

  const paths = stories.map((story) => ({
    params: { slug: [story.slug] },
  }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug[0];
  const { data } = await client.query({
    query: gql`
      query Story($slug: String!) {
        stories(where: { slug: $slug }) {
          slug
          title
          intro
          postContent {
            text
          }
        }
      }
    `,
    variables: { slug },
  });
  const { stories } = data;
  const story = stories[0];
  console.log(story);
  return {
    props: { story },
  };
}
