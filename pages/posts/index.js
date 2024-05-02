import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a React Framework for production - it makes building fullstack react apps and sites a breeze and ships it with build-it SSR",
    date: "2024-05-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a React Framework for production - it makes building fullstack react apps and sites a breeze and ships it with build-it SSR",
    date: "2024-05-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a React Framework for production - it makes building fullstack react apps and sites a breeze and ships it with build-it SSR",
    date: "2024-05-10",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a React Framework for production - it makes building fullstack react apps and sites a breeze and ships it with build-it SSR",
    date: "2024-05-10",
  },
];

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
