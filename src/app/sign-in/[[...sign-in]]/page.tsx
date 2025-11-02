"use client";

import { useEffect } from "react";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="absolute inset-0 bg-black/60 pointer-events-auto"></div>

            <div className="relative z-10 bg-white p-6 rounded-2xl shadow-lg">
                <SignIn />
            </div>
        </div>
    );
}
