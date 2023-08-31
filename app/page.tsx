import PostList from "@/components/PostList";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h3 className="text-3xl font-bold mt-7">Awesome Blog</h3>
      <PostList />
    </main>
  );
}
