type Project = {
  id: string;
  name: string;
  description: string;
  group: string;
  release?: {
    tag: string;
    title: string;
    description: string;
    date: string;
  };
  commit?: {
    branch: string;
    hash: string;
    message: string;
    author: string;
  };
}
