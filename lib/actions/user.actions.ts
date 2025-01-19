'use server'

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async ({email,password}:signInProps) => {
    try {
        //Mutation/database/fetch

        const { account } = await createAdminClient();

        const response = await account.createEmailPasswordSession(email,password)
        
        return parseStringify(response); 

    } catch (error) {
        console.error('Error',error);
    }
}
export const signUp = async (userData:SignUpParams) => {
    const {email,password,firstName,lastName} = userData;
    try {
        //Mutation/database/fetch
        const { account } = await createAdminClient();

        const newUserAccount = await account.create(ID.unique(), email, password, `${firstName} ${lastName}`);
        const session = await account.createEmailPasswordSession(email, password);
      
        (await cookies()).set("appwrite-session", session.secret, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          secure: true,
        });

        return parseStringify(newUserAccount)

    } catch (error) {
        console.error('Error',error);
    }
}

// ... your initilization functions

// export async function getLoggedInUser() {
//     try {
//       const { account } = await createSessionClient();
//       const user =  await account.get();

//       console.log("Fetched user:", user); 

//       return parseStringify(user);
//     } catch (error) {
//       console.log(error);
//       return null;
//     }
//   }
// export async function getLoggedInUser() {
//   try {
//     const { account } = await createSessionClient();
//     const user = await account.get();
//     console.log("Fetched user:", user); // Inspect the structure here
//     return parseStringify(user);
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// }

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const user = await account.get();
    return parseStringify(user);
  } catch (error) {
    // console.error("Error fetching user:", error.message);
    // if (error.message.includes("No session")) {
    //   // Redirect to login page or prompt reauthentication
    // }
    return null;
  }
}


  

export const logoutAccount = async () =>{
  try{
    const {account} = await createSessionClient();

    (await cookies()).delete('appwrite-session');

    await account.deleteSession('current')
  }
  catch(error){
    return null;
  }
}  