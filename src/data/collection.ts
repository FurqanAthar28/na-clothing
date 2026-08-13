export type CollectionProduct = {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  category: "Alif Handmade" | "Plain Stitched";
};

export const handmadeCollection: CollectionProduct[] = [
  {
    id: 1,
    name: "Floral Navy Maxi",
    image: "/images/products/floral-navy-maxi.jpg",
    price: 2800,
    description: "An elegant floral design with a classic silhouette.",
    category: "Alif Handmade",
  },
  {
    id: 2,
    name: "Taupe Black Embroidery",
    image: "/images/products/modern-taupe-black-embroidery.jpg",
    price: 3000,
    description: "A refined combination of subtle tones and handmade detail.",
    category: "Alif Handmade",
  },
  {
    id: 3,
    name: "Vibrant Mustard",
    image: "/images/products/vibrant-mustard.jpg",
    price: 2800,
    description: "A vibrant classic design with an elegant finish.",
    category: "Alif Handmade",
  },
];

export const plainStitchedCollection: CollectionProduct[] = [
  {
    id: 4,
    name: "Classic Black",
    image: "/images/products/classic-black-solo.jpg",
    price: 2500,
    description: "A simple and timeless stitched dress for everyday wear.",
    category: "Plain Stitched",
  },
  {
    id: 5,
    name: "Deep Burgundy Classic",
    image: "/images/products/deep-burgundy-classic.jpg",
    price: 2500,
    description: "A rich burgundy dress with a clean classic look.",
    category: "Plain Stitched",
  },
  {
    id: 6,
    name: "Mint Green Solo",
    image: "/images/products/mint-green-solo.jpg",
    price: 2500,
    description: "A soft and elegant everyday stitched dress.",
    category: "Plain Stitched",
  },
];