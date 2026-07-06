export async function getCurrentUser(cookie: string) {
  try {
    const res = await fetch(
      `${process.env.INTERNAL_API_BASE_URL}/auth/me`,
      {
        headers: {
          cookie,
        },
        cache: "no-store",
      }
    );

    if (!res.ok) return null;

    const data = await res.json();

    return data.user;
  } catch (err) {
    console.error(err);
    return null;
  }
}