export interface Store {
  userStore: UserStore
}

export interface UserStore {
  user: User
  token: string
}

export interface User {
  name: string
  email: string
}