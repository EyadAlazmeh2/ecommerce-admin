import { UserButton, auth } from "@clerk/nextjs";
import MainNavbar from "./MainNavbar";
import StoreSwichter from "./StoreSwichter";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
import { ThemeToggle } from "./ThemeToggle";

const NavBar = async () => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    }
  })

  return (
    <div className="flex items-center h-16 px-4 border-b-2">
      <StoreSwichter items={stores} />
      <MainNavbar className="mx-6" />
      <div className="ml-auto flex items-center space-x-4">
        <ThemeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default NavBar;
