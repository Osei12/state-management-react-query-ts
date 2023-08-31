"use client";
import { fetchPost } from "@/Lib/Posts";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

export default function Post({ params }: Params) {
  const { id } = params;

  const {
    isLoading,
    isError,
    error,
    data: post,
  } = useQuery<PostData>({
    queryKey: ["posts", id],
    queryFn: () => fetchPost(id),
  });

  if (isLoading) return "Loading ....";
  if (isError) return (error as Error).message;

  console.log(post);
  return (
    <main>
      <div>
        <Link className="mb-6 underline text-blue-500" href="/">
          Go back to post
        </Link>
      </div>
      <h4 className="mt-6 text-2xl font-medium mb-5">Read Content</h4>
      <div className="container">
        <h3 className="font-bold text-xl">{post?.title}</h3>
        <p>{post?.body}</p>
      </div>
    </main>
  );
}
