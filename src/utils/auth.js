import { useAuth } from "@clerk/nextjs";

export const useSignOut = () => {
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      window.location.href = "/sign-in";
    } catch (err) {
      console.error("Error signing out:", err);
    }
  };

  return handleSignOut;
};