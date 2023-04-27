import Clerk from "@clerk/clerk-js";
import {
  JSX,
  Resource,
  createContext,
  createResource,
  useContext,
} from "solid-js";

const ClerkContext = createContext<Resource<Clerk>>();

const loadClerk = async () => {
  const clerk = new Clerk(
    "pk_test_ZWFzeS1tb29zZS0xNC5jbGVyay5hY2NvdW50cy5kZXYk"
  );
  await clerk.load();
  return clerk;
};

const ClerkProvider = (props: { children: JSX.Element }) => {
  const [clerk] = createResource(loadClerk);

  return (
    <ClerkContext.Provider value={clerk}>
      {clerk() && (
        props.children
      )}
    </ClerkContext.Provider>
  );
};

export const useClerk = () => useContext(ClerkContext);

export default ClerkProvider;
