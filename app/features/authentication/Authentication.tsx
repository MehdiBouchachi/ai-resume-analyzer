import { usePuterStore } from "~/lib/puter";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import Button from "~/ui/Button";

export default function Authentication() {
  const { isLoading, auth } = usePuterStore();

  const location = useLocation();
  const next = location.search.split("next=")[1];
  const navigate = useNavigate();
  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate(next);
    }
  }, [auth.isAuthenticated, next]);

  return (
    <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
      <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-8 bg-white rounded-2xl p-10 ">
          <div className="flex flex-col items-center gap-2 text-center">
            <h1>Welcome to Resumind</h1>
            <h2>Log In to Continue Your Job Journey</h2>
          </div>
          <div>
            {isLoading ? (
              <Button buttonType="secondary" disabled>
                Signing you in...
              </Button>
            ) : (
              <>
                {auth.isAuthenticated ? (
                  <Button onClick={auth.signOut}>Log Out</Button>
                ) : (
                  <Button onClick={auth.signIn}>Log In</Button>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
