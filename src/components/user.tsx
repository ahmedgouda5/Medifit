"use client";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";

const StoreUserId = () => {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      localStorage.setItem("userId", user.id);
    }
  }, [user]);

  return null;
};

export default StoreUserId;
