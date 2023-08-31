"use client";

import { deletePost, fetchPosts } from "@/Lib/Posts";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function PostList() {
  const {
    isLoading,
    isError,
    error,
    data: posts,
  } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const router = useRouter();
  const queryClient = useQueryClient();

  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const handleDeletePost = (id: number) => {
    deletePostMutation.mutate(id);
  };

  if (isLoading) return "Loading...";
  if (isError) return (error as Error).message;

  return (
    <div>
      {posts.map((post) => (
        <div
          key={post.id}
          className="w-full hover:scale-105 overflow-hidden duration-300 ease-linear cursor-pointer  bg-slate-400 rounded py-4 px-5 mt-6 mb-3"
        >
          <h3
            onClick={() => router.push(`/post/${post.id}`)}
            className="font-medium hover:underline hover:text-blue-700 "
          >
            {post.title}
          </h3>
          <div className="mt-4  flex gap-3 ">
            <button
              onClick={() => handleDeletePost(post.id)}
              className=" px-3 py-2 bg-red-500 rounded "
            >
              <FaTrash className="text-white" />
            </button>
            <button
              onClick={() => router.push(`/post/edit/${post.id}`)}
              className=" px-3 py-2 bg-purple-500 rounded "
            >
              <FaEdit className="text-white" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
