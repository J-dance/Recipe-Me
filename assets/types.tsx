export type GlobalUserContent = {
  userData: User
  setUserData:(data: User) => void
}

export type Recipe = {
  id: string
  title: string
  description: string
  categories: string[]
  instructions: string[]
};

export interface User {
  name: string,
  id: string,
  authenticated: boolean,
  recipes: Recipe[]
};