import { jwtDecode } from "jwt-decode";

export const getUserIdFromToken = (token: string): string | null => {
  try {
    const decodedToken: any = jwtDecode(token);

    return decodedToken?.user?.id || null;
  } catch (error) {
    return null;
  }
};
