import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Mobilenav from "@/components/Mobilenav";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const loggedIn = { firstname: "Rishikesh", lastname: "Chaudhari" };
  // const router = useRouter();
  const loggedIn = await getLoggedInUser();

  if (!loggedIn) redirect("/sign-in");
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout ">
          <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon" />
          <Mobilenav user={loggedIn} />
        </div>
        <div>{children}</div>
      </div>
    </main>
  );
}
