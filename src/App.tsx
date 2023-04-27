import { Suspense } from "solid-js";
import ClerkProvider, { useClerk } from "./ClerkProvider";

const SignInButton = () => {
  const clerk = useClerk();

  return <>{JSON.stringify(clerk().loaded)}</>;
}

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClerkProvider>
        <SignInButton />
      </ClerkProvider>
    </Suspense>
  );
};

export default App;
