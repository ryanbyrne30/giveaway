import { useAuth } from "@clerk/nextjs";
import { useRedirect } from "./useRedirect";

export function useSession(input?: { required?: boolean }) {
  const auth = useAuth();
  if (input?.required) useRedirect(!auth.userId, "/auth/signIn");
  return auth;
}
