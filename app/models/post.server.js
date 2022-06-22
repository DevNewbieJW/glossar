import { prisma } from "~/db.server.js";

export const fetchPosts = async () => {
  return prisma.post.findMany({ include: { Category: true } });
};

export const fetchPostById = async (id) => {
  return prisma.post.findUnique({
    where: {
      id,
    },
    include: { Category: true },
  });
};

export const fetchPostsByCategory = async (id) => {
  return prisma.post.findMany({ where: { categoryId: id } });
};

export const createPost = async ({ postTitle, categoryId, postContent }) => {
  return prisma.post.create({
    data: {
      title: postTitle,
      content: postContent,
      categoryId,
    },
  });
};

export const createPostCategory = async ({
  postTitle,
  postCategory,
  postContent,
}) => {
  return prisma.post.create({
    data: {
      title: postTitle,
      content: postContent,
      Category: { create: { name: postCategory } },
    },
  });
};
