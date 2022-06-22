import { prisma } from "~/db.server.js";

export const fetchCategories = async () => {
  return prisma.category.findMany({});
};

export const fetchCategoriesByName = async (category) => {
  return prisma.category.findMany({
    where: { name: category },
  });
};

export const fetchCategory = async (category) => {
  return prisma.category.findUnique({
    where: {
      name: category,
    },
  });
};
