import { getLoggedInUser, logoutAccount } from "@/lib/actions/user.actions";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer = async ({ user, type = "desktop" }: FooterProps) => {
  // const loggedIn = await getLoggedInUser();
  // console.log("@@@@@@@");
  // console.log(loggedIn);
  const router = useRouter();
  // const handleLogOut = async () => {
  //   const loggedOut = await logoutAccount();

  //   if (loggedOut) router.push("/sign-in");
  // };
  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
        <p className="text-xl font-bold text-gray-700">{user.name[0]}</p>
      </div>

      <div
        className={type == "mobile" ? "footer_email-mobile" : "footer-email"}
      >
        <h1 className="text-14 truncate  text-gray-700 font-semibold">
          {user.name}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          {user.email}
        </p>
      </div>

      <div className="footer_image">
        <Image src="icons/logout.svg" fill alt="jsm" />
      </div>
    </footer>
  );
};

export default Footer;
