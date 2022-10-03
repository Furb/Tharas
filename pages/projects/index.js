import { gql } from "@apollo/client";
import Link from "next/link";
import client from "../../apolloClient";
import { FiArrowDownRight } from "react-icons/fi";
import Image from "next/image";
import ProjectCard from "../../components/ProjectCard";
import Card from "../../components/Card";

const Stories = ({ stories }) => {
  console.log(stories);
  return (
    <section className="stories big_container desktop:my-44">
      <h1 className="m_space">
        Nullam quis risus eget urna mollis ornare vel eu leo sed posuere.
      </h1>

      <div className="grid desktop:grid-cols-2 gap-16 m_space">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
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
