export async function getCurrentUser(cookie: string) {
  console.log("INTERNAL:", process.env.INTERNAL_API_BASE_URL);
  console.log("COOKIE:", cookie);

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

    console.log("STATUS:", res.status);

    if (!res.ok) {
      console.log(await res.text());
      return null;
    }

    const data = await res.json();

    console.log(data);

    return data.user;
  } catch (e) {
    console.error(e);
    return null;
  }
}