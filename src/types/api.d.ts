declare module "api" {
  export type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
}
