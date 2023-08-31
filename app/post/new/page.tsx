"use client";
import { createPost } from "@/Lib/Posts";
import PostForm from "@/components/PostForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function CreatePost() {
  const queryClient = useQueryClient();
  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const handleAddPost = (formData: formData) => {
    createPostMutation.mutate({
      id: uuidv4(),
      ...formData,
    });
  };
  return (
    <>
      <h3 className="text-2xl font-medium mt-4">Add New Post</h3>
      <PostForm onSubmit={handleAddPost} InitialValue={undefined} />
    </>
  );
}
