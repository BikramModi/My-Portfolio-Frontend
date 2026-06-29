// export default function DashboardPage() {
//   return (
//     <div>
//       <h1>User Dashboard</h1>
//     </div>
//   );
// }

"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { user, logout, loading } = useAuth();
  const router = useRouter();

    const handleLogout = async () => {
    await logout();

    router.replace("/");
    router.refresh();
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{user?.name}</h1>

      <button onClick={handleLogout}>
        Logout
      </button>
    </>
  );
}