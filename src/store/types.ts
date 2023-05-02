export interface User {
  id: number;
  name: string;
}

export interface UsersState {
  users: User[];
}

export interface Post {
  id: number;
  title: string;
  content: string;
}

export interface PostsState {
  posts: Post[];
}

export interface StoreState {
  users: UsersState;
  posts: PostsState;
}
