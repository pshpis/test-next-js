import {cookies} from "next/headers";

export function cookieServerLogic() {
    const cookieStore = cookies();
    return cookieStore.get('content')?.value
}
