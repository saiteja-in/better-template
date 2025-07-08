"use server";

import { currentUser } from "@/lib/user";

export async function checkUserHasName(email: string) {
  try {
    const user = await currentUser();
    
    // If user exists and has a name, return true
    if (user && user.name) {
      return { hasName: true, user };
    }
    
    // If user exists but no name, return false
    if (user && !user.name) {
      return { hasName: false, user };
    }
    
    // New user case
    return { hasName: false, user: null };
  } catch (error) {
    console.error("Error checking user:", error);
    return { hasName: false, user: null };
  }
}