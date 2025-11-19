import Image from "next/image";
import UserAvatar from "./UserAvatar";

export default function PostCard({ post }) {
  return (
    <article className="flex flex-col gap-3 p-5 rounded-xl bg-[#2a2a2a] cursor-pointer shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      {/* Async Server Component */}
      <UserAvatar uid={post.uid} />

      <Image
        src={post.image}
        alt={post.caption}
        width={500}
        height={500}
        className="w-full h-[250px] object-cover rounded-lg"
      />

      <h3 className="text-[16px] font-medium text-textPrimary mt-1 leading-snug">
        {post.caption}
      </h3>
    </article>
  );
}
