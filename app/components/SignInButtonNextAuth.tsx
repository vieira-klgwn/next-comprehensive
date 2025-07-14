
import { signIn } from "@/auth"
 
export default function SignIn() {
  return <button onClick={() => signIn("google")}></button>
}
