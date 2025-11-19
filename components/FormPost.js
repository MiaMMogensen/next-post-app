// Client Component - needed for useState to manage image preview
"use client"; // Mark as client component

import Image from "next/image";
import { useState } from "react";

export default function FormPost({ action, post }) {
  // Local state for image preview
  const [image, setImage] = useState(post?.image);

  return (
    // Form uses Server Action passed as prop
    <form
      action={action}
      className="grid grid-cols-1 gap-4 items-start max-w-[800px] my-5 mx-0 md:grid-cols-[1fr_2fr]"
    >
      <label className="font-medium pt-3" htmlFor="caption">
        Caption
      </label>
      <input
        className="w-full py-3 border border-white rounded-lg text-base font-sans bg-white text-black"
        id="caption"
        name="caption"
        type="text"
        aria-label="caption"
        placeholder="Write a caption..."
        defaultValue={post?.caption}
      />
      <label htmlFor="image">Image</label>
      <input
        type="url"
        name="image"
        id="image"
        defaultValue={post?.image}
        aria-label="image"
        placeholder="Paste an image URL"
        onChange={(event) => setImage(event.target.value)}
      />
      <label htmlFor="image-preview"></label>
      {/* Live image preview */}
      <Image
        id="image-preview"
        className="w-full h-auto rounded-lg col-2"
        src={
          image
            ? image
            : "https://placehold.co/600x400.webp?text=Paste+image+URL"
        }
        width={600}
        height={400}
        alt={post?.caption || "Image preview"}
      />
      <div className="col-2 flex gap-4 mt-5 px-6 py-3 border-none rounded-lg text-base font-medium cursor-pointer transition-all duration-200 bg-white text-black">
        <button>{post?.caption ? "Update" : "Create"}</button>
      </div>
    </form>
  );
}
