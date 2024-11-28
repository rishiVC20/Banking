import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Mobilenav from "@/components/Mobilenav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn={firstname:'Rishikesh',lastname:'Chaudhari'}
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn}/>
        <div className="flex size-full flex-col">
          <div className="root-layout ">
            <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon"/>
            <Mobilenav user={loggedIn}/>
          </div>
          <div >
            
            {children}
          </div>
          
        </div>

        
    </main>
  );
}
