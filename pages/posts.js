import React from "react";
import Link from "next/link";
import { getPosts } from "../ghost-config";

function Posts(props) {
  console.log(props, "posts");

  return (
    <main>
      <div className="flex flex-wrap">
        {props?.posts.map((post) => (
          <article>
            <div
              className="max-w-sm rounded overflow-hidden shadow-lg mt-3 bg-white my-3 mx-3 h-96"
              key={post.id}
            >
              <img
                src={post?.feature_image}
                alt={post?.title}
                className="w-full h-48 object-cover object-center"
              />

              <div className="px-6 py-4">
                <Link href={`/${post?.slug}`}>
                  <div className="font-bold text-xl mb-2">{post?.title}</div>
                </Link>

                <p className="text-gray-600 text-sm mb-4">
                  Published on{" "}
                  {new Date(post?.published_at).toLocaleDateString()} by{" "}
                  {post?.primary_author.name}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Posts;

export async function getStaticProps() {
  const posts = await getPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
  };
}
