/* import { UserData } from "./user-data";

describe("Register user on mailing list use case", () => {
  test("Should add user with complete data to mailing list", async () => {
    const users: UserData[] = [];
    const repo = (UserRepository = new InMemoryUserRepository(users));
    const usecase: RegisterUserOnMailingList = new RegisterUserOnMailingList(
      repo
    );
    const name = "Fábio";
    const email = "agsuperpder@gmail.com";
    const response = await usecase.registerUserOnMailingList({ name, email });
    const user = repo.findUserByEmail(email);
    expect((await user).name).toBe("any");
  });
});
 */
