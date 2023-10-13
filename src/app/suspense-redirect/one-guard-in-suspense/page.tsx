import {Suspense} from "react";
import {CookieGuard} from "@/components/test-suspense-redirect/guards/cookieGuard";

export default function Home() {
  return <>
    <p>
      Not secure information
    </p>
    <Suspense>
      <CookieGuard delay={5000} redirectTo={"/auth/login"}>
        <h1>Secure information</h1>
      </CookieGuard>
    </Suspense>
  </>
}
