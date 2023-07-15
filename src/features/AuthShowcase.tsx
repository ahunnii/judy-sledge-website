import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";

const AuthShowcase = () => {
  const { data: sessionData } = useSession();
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex">
      <p className="text-white text-2xl">
        {hello.data ? hello.data.greeting : "Loading tRPC query..."}
      </p>
      <p className="text-white text-center text-2xl">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="bg-white/10 text-white hover:bg-white/20 rounded-full px-10 py-3 font-semibold no-underline transition"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
export default AuthShowcase;
