import { UserData } from "../user-data";
import { InMemoryUserRepository } from "./in-memory-user-repository";

describe("In memory User Repo", () => {
  test("Should return null if user is not found", async () => {
    const users: UserData[] = [];
    const userRepo = new InMemoryUserRepository(users);
    const user = await userRepo.findUserByEmail("agsuperpoder@gmail.com");
    expect(user).toBeNull();
  });
});
