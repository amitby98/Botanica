const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  light: {
    type: String,
    required: true,
  },
});

const ProductModel = mongoose.model("products", productSchema);

module.exports = { ProductModel };

const products = [
  {
    id: 1,
    name: "Calathea Concinnas",
    category: "Indoor",
    price: 20,
    image: "src/indoor1.png",
    size: "Small",
    light: "Shade",
  },
  {
    id: 2,
    name: "Snake Vine",
    category: "Indoor",
    price: 25,
    image: "src/indoor2.png",
    size: "Small",
    light: "Partial Shade",
  },
  {
    id: 3,
    name: "Peace Lily",
    category: "Indoor",
    price: 14,
    image: "src/indoor3.png",
    size: "Small",
    light: "Sunny",
  },
  {
    id: 4,
    name: "Spider Ivy",
    category: "Indoor",
    price: 30,
    image: "src/indoor5.png",
    size: "Small",
    light: "Partial Shade",
  },
  {
    id: 5,
    name: "Rubber Tree",
    category: "Indoor",
    price: 45,
    image: "src/indoor4.png",
    size: "Medium",
    light: "Shade",
  },
  {
    id: 6,
    name: "Pothos Vine",
    category: "Indoor",
    price: 35,
    image: "src/indoor6.png",
    size: "Medium",
    light: "Sunny",
  },
  {
    id: 7,
    name: "Dragon Tail",
    category: "Indoor",
    price: 100,
    image: "src/indoor7.png",
    size: "Medium",
    light: "Sunny",
  },
  {
    id: 8,
    name: "Money Tree",
    category: "Indoor",
    price: 85,
    image: "src/indoor8.png",
    size: "Medium",
    light: "Partial Shade",
  },
  {
    id: 9,
    name: "Prayer Palm",
    category: "Indoor",
    price: 10,
    image: "src/indoor9.png",
    size: "Large",
    light: "Shade",
  },
  {
    id: 10,
    name: "Bamboo Palm",
    category: "Indoor",
    price: 17,
    image: "src/indoor10.png",
    size: "Large",
    light: "Sahde",
  },
  {
    id: 11,
    name: "String Pearls",
    category: "Indoor",
    price: 31,
    image: "src/indoor11.png",
    size: "Large",
    light: "Sunny",
  },
  {
    id: 12,
    name: "Lace Fern",
    category: "Indoor",
    price: 55,
    image: "src/indoor12.png",
    size: "Large",
    light: "Partial Shade",
  },
  {
    id: 13,
    name: "Parlor Palm",
    category: "Indoor",
    price: 60,
    image: "src/indoor13.png",
    size: "Small",
    light: "Shade",
  },
  {
    id: 14,
    name: "Jade Plant",
    category: "Indoor",
    price: 38,
    image: "src/indoor14.png",
    size: "Small",
    light: "Partial Shade",
  },
  {
    id: 15,
    name: "Ponytail Palm",
    category: "Indoor",
    price: 87,
    image: "src/indoor15.png",
    size: "Small",
    light: "Sunny",
  },
  {
    id: 16,
    name: "Elephant Ear",
    category: "Indoor",
    price: 73,
    image: "src/indoor16.png",
    size: "Small",
    light: "Partial Shade",
  },
  {
    id: 17,
    name: "Silver Sword",
    category: "Indoor",
    price: 92,
    image: "src/indoor17.png",
    size: "Medium",
    light: "Shade",
  },
  {
    id: 18,
    name: "Umbrella Tree",
    category: "Indoor",
    price: 35,
    image: "src/indoor18.png",
    size: "Medium",
    light: "Sunny",
  },
  {
    id: 19,
    name: "Rose Bush",
    category: "Outdoor",
    price: 12,
    image: "src/outdoor1.png",
    size: "Medium",
    light: "Sunny",
  },
  {
    id: 20,
    name: "Palm Tree",
    category: "Outdoor",
    price: 29,
    image: "src/outdoor2.png",
    size: "Medium",
    light: "Partial Shade",
  },
  {
    id: 21,
    name: "Maple Tree",
    category: "Outdoor",
    price: 50,
    image: "src/outdoor3.png",
    size: "Large",
    light: "Shade",
  },
  {
    id: 22,
    name: "Sunflower Patch",
    category: "Outdoor",
    price: 46,
    image: "src/outdoor4.png",
    size: "Large",
    light: "Sahde",
  },
  {
    id: 23,
    name: "Daisy Meadow",
    category: "Outdoor",
    price: 99,
    image: "src/outdoor5.png",
    size: "Large",
    light: "Sunny",
  },
  {
    id: 24,
    name: "Lavender Field",
    category: "Outdoor",
    price: 28,
    image: "src/outdoor6.png",
    size: "Large",
    light: "Partial Shade",
  },
  {
    id: 25,
    name: "Tulip Garden",
    category: "Outdoor",
    price: 20,
    image: "src/outdoor7.png",
    size: "Small",
    light: "Shade",
  },
  {
    id: 26,
    name: "Iris Bed",
    category: "Outdoor",
    price: 25,
    image: "src/outdoor8.png",
    size: "Small",
    light: "Partial Shade",
  },
  {
    id: 27,
    name: "Lily Pond",
    category: "Outdoor",
    price: 14,
    image: "src/outdoor9.png",
    size: "Small",
    light: "Sunny",
  },
  {
    id: 28,
    name: "Cactus Garden",
    category: "Outdoor",
    price: 30,
    image: "src/outdoor10.png",
    size: "Small",
    light: "Partial Shade",
  },
  {
    id: 29,
    name: "Succulent Rockery",
    category: "Outdoor",
    price: 45,
    image: "src/outdoor11.png",
    size: "Medium",
    light: "Shade",
  },
  {
    id: 30,
    name: "Peony Border",
    category: "Outdoor",
    price: 35,
    image: "src/outdoor12.png",
    size: "Medium",
    light: "Sunny",
  },
  {
    id: 31,
    name: "Azalea Path",
    category: "Outdoor",
    price: 84,
    image: "src/outdoor13.png",
    size: "Medium",
    light: "Sunny",
  },
  {
    id: 32,
    name: "Hydrangea Hedge",
    category: "Outdoor",
    price: 73,
    image: "src/outdoor14.png",
    size: "Medium",
    light: "Partial Shade",
  },
  {
    id: 33,
    name: "Bamboo Grove",
    category: "Outdoor",
    price: 62,
    image: "src/outdoor15.png",
    size: "Large",
    light: "Shade",
  },
  {
    id: 34,
    name: "Fern Forest",
    category: "Outdoor",
    price: 50,
    image: "src/outdoor16.png",
    size: "Large",
    light: "Sahde",
  },
  {
    id: 35,
    name: "Wildflower Meadow",
    category: "Outdoor",
    price: 14,
    image: "src/outdoor17.png",
    size: "Large",
    light: "Sunny",
  },
  {
    id: 36,
    name: "Pine Forest",
    category: "Outdoor",
    price: 35,
    image: "src/outdoor18.png",
    size: "Large",
    light: "Partial Shade",
  },
];
async function fillDatabase() {
  // await ProductModel.deleteMany({});
  // return;
  const dbItems = await ProductModel.find();
  if (dbItems.length === 0) {
    for (const product of products) {
      ProductModel.create({
        name: product.name,
        category: product.category,
        price: product.price,
        imageUrl: product.image,
        size: product.size,
        light: product.light,
      });
    }
  }
}

fillDatabase();

async function getPlantCounts() {
  try {
    const aggregationResult = await ProductModel.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 },
        },
      },
    ]);

    console.log(aggregationResult);
  } catch (error) {
    console.error(error);
  }
}

getPlantCounts();
