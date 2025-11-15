// Spanish vocabulary data for iHola learning app

export const vocabularyCategories = {
  basics: {
    name: "Basics",
    words: [
      { spanish: "Hola", english: "Hello", category: "basics" },
      { spanish: "Adiós", english: "Goodbye", category: "basics" },
      { spanish: "Por favor", english: "Please", category: "basics" },
      { spanish: "Gracias", english: "Thank you", category: "basics" },
      { spanish: "Sí", english: "Yes", category: "basics" },
      { spanish: "No", english: "No", category: "basics" },
      { spanish: "Perdón", english: "Sorry", category: "basics" },
      { spanish: "Excusa", english: "Excuse me", category: "basics" }
    ]
  },
  family: {
    name: "Family",
    words: [
      { spanish: "Familia", english: "Family", category: "family" },
      { spanish: "Madre", english: "Mother", category: "family" },
      { spanish: "Padre", english: "Father", category: "family" },
      { spanish: "Hermano", english: "Brother", category: "family" },
      { spanish: "Hermana", english: "Sister", category: "family" },
      { spanish: "Hijo", english: "Son", category: "family" },
      { spanish: "Hija", english: "Daughter", category: "family" },
      { spanish: "Abuelo", english: "Grandfather", category: "family" },
      { spanish: "Abuela", english: "Grandmother", category: "family" }
    ]
  },
  food: {
    name: "Food",
    words: [
      { spanish: "Comida", english: "Food", category: "food" },
      { spanish: "Agua", english: "Water", category: "food" },
      { spanish: "Pan", english: "Bread", category: "food" },
      { spanish: "Leche", english: "Milk", category: "food" },
      { spanish: "Carne", english: "Meat", category: "food" },
      { spanish: "Pescado", english: "Fish", category: "food" },
      { spanish: "Fruta", english: "Fruit", category: "food" },
      { spanish: "Verdura", english: "Vegetable", category: "food" },
      { spanish: "Arroz", english: "Rice", category: "food" }
    ]
  },
  friends: {
    name: "Friends & Relationships",
    words: [
      { spanish: "Amigo", english: "Friend", category: "friends" },
      { spanish: "Amiga", english: "Friend (female)", category: "friends" },
      { spanish: "Novio", english: "Boyfriend", category: "friends" },
      { spanish: "Novia", english: "Girlfriend", category: "friends" },
      { spanish: "Compañero", english: "Companion", category: "friends" },
      { spanish: "Vecino", english: "Neighbor", category: "friends" }
    ]
  },
  colors: {
    name: "Colors",
    words: [
      { spanish: "Rojo", english: "Red", category: "colors" },
      { spanish: "Azul", english: "Blue", category: "colors" },
      { spanish: "Verde", english: "Green", category: "colors" },
      { spanish: "Amarillo", english: "Yellow", category: "colors" },
      { spanish: "Negro", english: "Black", category: "colors" },
      { spanish: "Blanco", english: "White", category: "colors" },
      { spanish: "Rosa", english: "Pink", category: "colors" },
      { spanish: "Naranja", english: "Orange", category: "colors" }
    ]
  },
  numbers: {
    name: "Numbers",
    words: [
      { spanish: "Uno", english: "One", category: "numbers" },
      { spanish: "Dos", english: "Two", category: "numbers" },
      { spanish: "Tres", english: "Three", category: "numbers" },
      { spanish: "Cuatro", english: "Four", category: "numbers" },
      { spanish: "Cinco", english: "Five", category: "numbers" },
      { spanish: "Seis", english: "Six", category: "numbers" },
      { spanish: "Siete", english: "Seven", category: "numbers" },
      { spanish: "Ocho", english: "Eight", category: "numbers" },
      { spanish: "Nueve", english: "Nine", category: "numbers" },
      { spanish: "Diez", english: "Ten", category: "numbers" }
    ]
  }
};

// Get all words as a flat array
export const getAllWords = () => {
  return Object.values(vocabularyCategories).flatMap(category => category.words);
};

// Get words by category
export const getWordsByCategory = (categoryKey) => {
  return vocabularyCategories[categoryKey]?.words || [];
};

// Get random words for daily practice
export const getDailyWords = (count = 3) => {
  const allWords = getAllWords();
  const shuffled = [...allWords].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Get a random word for quiz
export const getRandomWord = () => {
  const allWords = getAllWords();
  return allWords[Math.floor(Math.random() * allWords.length)];
};

// Export default for easy import
export default {
  vocabularyCategories,
  getAllWords,
  getWordsByCategory,
  getDailyWords,
  getRandomWord
};
