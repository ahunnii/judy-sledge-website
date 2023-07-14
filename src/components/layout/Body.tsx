import type { FC } from "react";

interface IProps {
  children: React.ReactNode;
}

const Body: FC<IProps> = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {children}
    </main>
  );
};

export default Body;
