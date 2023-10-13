import {Suspense} from "react";
import {CookieGuard} from "@/components/test-suspense-redirect/guards/cookieGuard";

export default function Home() {
  return <>
    <p>
      Not secure information
    </p>
    <CookieGuard delay={5000} redirectTo={"/auth/login2"}>
      <h1>Secure information2</h1>
    </CookieGuard>

    <CookieGuard delay={1000} redirectTo={"/auth/login1"}>
      <h1>Secure information1</h1>
    </CookieGuard>
  </>
}
