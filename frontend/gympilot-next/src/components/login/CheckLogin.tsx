import { ReactNode } from "react";
import React, { useEffect } from 'react';
import { useRouter } from "next/navigation";
import { checkAuth } from "@/libs/data";

export default function CheckLogin({ children }: { children: ReactNode }) {
    const router = useRouter();

    useEffect(() => {
        const verifyAuth = async () => {
            try {
                const isAuth = await checkAuth();
                if (!isAuth) {
                    router.push('/login');
                }
            } catch (error) {
                router.push("/error")
            }
        };

        verifyAuth();
    }, [router]);

    return (children);
}