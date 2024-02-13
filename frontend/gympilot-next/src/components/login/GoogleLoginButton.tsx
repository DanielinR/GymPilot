import { useEffect } from "react";
import GoogleIcon from "../svg/GoogleIcon";
import { useRouter, useSearchParams } from "next/navigation";
import { googleLogin } from "@/libs/data";

export default function GoogleLoginButton() {
    const router = useRouter()
    const searchParams = useSearchParams();

    useEffect(()=>{
        async function login() {
            const params = new URLSearchParams(searchParams);
            const code = params.get("code")?.toString() ?? "";
            const scope = params.get("scope");
            if(!code) return
            try {
                const response = await googleLogin(code);
                if (response) { router.push("/home") }
              } catch (error) {
                // setError(true)
              }
        }

        login()
    },[searchParams, router])

    const handlerGoogleAuth = async () => {
        const redirect_uri= window.location.href
        const client_id="482025679106-98agdrd1bd21dadpke34c9sog7agai95.apps.googleusercontent.com"
        router.push(`https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${redirect_uri}&prompt=consent&response_type=code&client_id=${client_id}&scope=openid%20email%20profile&access_type=offline`)
    }

    return(
        <button onClick={handlerGoogleAuth} type="button" className="flex items-center justify-center my-1 bg-neutral-700 px-12 py-2 rounded-full self-start border border-neutral-800 hover:bg-neutral-800 shadow-md">
            <GoogleIcon className="h-6 w-6"></GoogleIcon>
        </button>
    );
}