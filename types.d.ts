interface childrenProps {
  children: React.ReactNode;
}
type Post = {
  id: number;
  title: String;
  body: String;
};

interface Params {
  params: {
    id: number;
  };
}

type formData = {
  title: string;
  body: string;
};
type PostData = {
  id: string;
  title: string;
  body: string;
};
