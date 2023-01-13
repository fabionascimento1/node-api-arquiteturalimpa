import { UserData } from "../user-data";
import { InMemoryUserRepository } from "./in-memory-user-repository";

describe("In memory User Repo", () => {
  test("Should return null if user is not found", async () => {
    const users: UserData[] = [];
    const sut = new InMemoryUserRepository(users);
    const user = await sut.findUserByEmail("any_email");
    expect(user).toBeNull();
  });

  test("Should return if found user", async () => {
    const users: UserData[] = [];
    const name = "any_name";
    const email = "any_email";
    const sut = new InMemoryUserRepository(users);
    await sut.add({ name, email });
    const user = await sut.findUserByEmail("any_email");
    expect(user.email).toBe("any_email");
  });

  test("Should return all users in the repository", async () => {
    const users: UserData[] = [
      { name: "any_name", email: "any_email" },
      { name: "any_name2", email: "any_email2" },
    ];
    const sut = new InMemoryUserRepository(users);
    const allUsers = await sut.findAllUsers();
    expect(allUsers.length).toBe(2);
  });
});
