import { CHAT_GROUP_URL, CHAT_GROUP_USERS_URL } from "@/lib/apiEndPoints";

export const fetchChatGroups = async (token: string) => {
  if (!token) {
    throw new Error("Authentication token is required");
  }
  const response = await fetch(CHAT_GROUP_URL, {
    headers: {
      Authorization: token,
    },
    next: { revalidate: 60 * 60, tags: ["dashboard"] },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch chat groups");
  }

  const responseData = await response.json();

  return responseData.data ?? [];
};

export const fetchChatGroup = async (id: string) => {
  const response = await fetch(`${CHAT_GROUP_USERS_URL}/${id}`, {
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch chat");
  }

  const responseData = await response.json();

  return responseData.data ?? null;
};
