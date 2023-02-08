export type GlobalUserContent = {
  userData: User
  setUserData:(data: User) => void
}

export type Recipe = {
  id: string
  title: string
  description: string
  prepTime: number; // unit: [mins]
  cookTime: number; // unit: [mins]
  category: string[]
  instructions: string[]
  image?: string | undefined;  // not sure..
  difficulty: "easy" | "medium" | "hard";
};

export interface User {
  name: string,
  id: string,
  authenticated: boolean,
  recipes: Recipe[]
};