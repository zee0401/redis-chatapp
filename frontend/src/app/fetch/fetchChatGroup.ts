import { CHAT_GROUP } from "@/lib/apiEndPoints";

export const fetchChatGroups = async (token: string) => {
  const response = await fetch(CHAT_GROUP, {
    headers: {
      Authorization: token,
    },
    next: { revalidate: 60 * 60, tags: ["dashboard"] },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch chat groups");
  }

  const responseData = await response.json();

  if (responseData.data) {
    return responseData.data;
  }
  return [];
};
