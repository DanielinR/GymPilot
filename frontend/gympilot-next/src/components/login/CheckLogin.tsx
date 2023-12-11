import { ReactNode } from "react";
import React, { useEffect } from 'react';
import { useRouter } from "next/navigation";
import { checkAuth } from "@/libs/data";

export default function CheckLogin({ children }: { children: ReactNode }) {
    const router = useRouter();

    useEffect(() => {
        const verifyAuth = async () => {
            const isAuth = await checkAuth();
            if (!isAuth) {
                router.push('/login');
            }
        };

        verifyAuth();
    }, [router]);

    return (children);
}