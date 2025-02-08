import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

const seedProducts = async () => {
  try {
    const count = await prisma.product.count();
    if (count === 0) {
      await prisma.product.createMany({
        data: [
          { name: "Product 1", price: 500, description: "Description 1" },
          { name: "Product 2", price: 700, description: "Description 2" },
          { name: "Product 3", price: 900, description: "Description 3" },
        ],
      });
      console.log("Products seeded successfully!");
    } else {
      console.log("Products already exist, skipping seeding.");
    }
  } catch (error) {
    throw new Error(`Error seeding products: ${error}`);
  } finally {
    await prisma.$disconnect();
  }
};

await seedProducts();

export async function getProducts() {
  // await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.product.findMany()
};

export async function getProduct(id: number) {
  return prisma.product.findUnique({
    where: { id },
  })
};

export async function addProduct(
  name: string,
  price: number,
  description: string
) {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return prisma.product.create({
    data: { name, price, description },
  });
}

export async function updateProduct(
  id: number,
  name: string,
  price: number,
  description: string | null
) {
  return prisma.product.update({
    where: { id },
    data: { name, price, description }
  });
}

export async function deleteProduct(id: number) {
  return prisma.product.delete({
    where: { id },
  });
}
