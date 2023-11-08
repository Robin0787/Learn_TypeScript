{
  // type guards

  type AlphaNumeric = string | number;

  const add = (a: AlphaNumeric, b: AlphaNumeric): AlphaNumeric => {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    } else {
      return a.toString().concat(b.toString());
    }
  };

  const result = add(3, "8");
  //   console.log(result);

  // using in guard
  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`${user.name} is ${user.role}.`);
    } else {
      console.log(`My name is ${user.name}.`);
    }
  };

  const normalUser: NormalUser = {
    name: "Mr Korim",
  };

  const adminUser: AdminUser = {
    name: "Mr Robin",
    role: "admin",
  };

  getUser(adminUser);

  //
}
