import { UserData } from "../user-data";
import { InMemoryUserRepository } from "./in-memory-user-repository";

describe("In memory User Repo", () => {
  test("Should return null if user is not found", async () => {
    const users: UserData[] = [];
    const userRepo = new InMemoryUserRepository(users);
    const user = await userRepo.findUserByEmail("any_email");
    expect(user).toBeNull();
  });

  test("Should return if found user", async () => {
    const users: UserData[] = [];
    const name = "any_name";
    const email = "any_email";
    const userRepo = new InMemoryUserRepository(users);
    await userRepo.add({ name, email });
    const user = await userRepo.findUserByEmail("any_email");
    expect(user.email).toBe("any_email");
  });
});
