import React from "react";
import { ItemProps } from "../../interfaces/interfaces";

type PostsListItemProps = { item: Pick<ItemProps, "title" | "body"> | null };

const PostsListItem: React.FC<PostsListItemProps> = ({ item }) => {
  return (
    <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <div>{item?.title}</div>
      </h2>
      <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
        {item?.body}
      </p>
    </article>
  );
};

export default PostsListItem;
