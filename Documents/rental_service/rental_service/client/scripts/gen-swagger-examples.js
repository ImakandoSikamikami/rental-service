function genOfferExample() {
  return {
    title: faker.lorem.words(3),
    description: faker.lorem.paragraph(),
    publishDate: faker.date.recent().toISOString().slice(0, 10),
    city: faker.helpers.arrayElement(["Paris", "Cologne", "Brussels", "Amsterdam", "Hamburg", "Dusseldorf"]),
    isPremium: faker.datatype.boolean(),
    isFavorite: faker.datatype.boolean(),
    rating: Number(faker.number.float({ min: 1, max: 5, fractionDigits: 1 })),
    type: faker.helpers.arrayElement(["apartment", "house", "room", "hotel"]),
    rooms: faker.number.int({ min: 1, max: 5 }),
    guests: faker.number.int({ min: 1, max: 8 }),
    price: faker.number.int({ min: 50, max: 500 }),
    features: JSON.stringify(["Breakfast", "Air conditioning", "Laptop friendly workspace", "Baby seat", "Washer", "Towels", "Fridge"]),
    commentsCount: faker.number.int({ min: 0, max: 50 }),
    latitude: Number(faker.location.latitude()),
    longitude: Number(faker.location.longitude()),
    userId: faker.number.int({ min: 1, max: 10 })
  };
}

// Add this after the login example generation
const offerContent = doc?.paths?.["/offer"]?.post?.requestBody?.content?.["multipart/form-data"];
if (offerContent) {
  offerContent.examples = {
    generated: {
      summary: "Сгенерированный пример (только текстовые поля)",
      value: genOfferExample(),
    },
  };
}