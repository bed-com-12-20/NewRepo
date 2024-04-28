"use client";

import { useRouter } from "next/navigation";
import LoginForm from "./LoginForm";

export default function Login() {
  const router = useRouter();
  const HandleLoginSuccess = () => {
    console.log("Login Successfully");
    alert("login successfully")
  };

  const redirectToAdmin = () => {
    router.push("/Finance/Dashboard");
  };
  const redirectToDepartment = (departmentId: string) => {
    router.push(`/department/${departmentId}`);
  };

  return (
    <div>
      <LoginForm
        onLoginSucess={HandleLoginSuccess}
        redirectToAdmin={redirectToAdmin}
        redirectToDepartment={redirectToDepartment}
      />
    </div>
  );
}
