"use client";
import { fetchPost, updatePost } from "@/Lib/Posts";
import PostForm from "@/components/PostForm";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";

export default function EditPost({ params }: Params) {
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

  const queryClient = useQueryClient();
  const router = useRouter();

  const updatePostMutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      router.push("/");
    },
  });

  const handleAddPost = (updatedPost: any) => {
    updatePostMutation.mutate({
      id,
      ...updatedPost,
    });
  };

  if (isLoading) return "Loading ....";
  if (isError) return (error as Error).message;

  return (
    <main>
      <div className="mb-6">
        <h1 className="text-2xl font-medium">Edit Post</h1>
      </div>

      <PostForm InitialValue={post} onSubmit={handleAddPost} />
    </main>
  );
}
