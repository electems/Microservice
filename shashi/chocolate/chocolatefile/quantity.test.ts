import { ChocolateList } from "../models/chocolate";
import { ChocolateQantity } from "./QuantityCheck";

const ChocolateName: ChocolateList[] = [
  {
    name: "milkybar",
    price: 10,
    quantity: 20,
  },
  {
    name: "dairymilk",
    price: 20,
    quantity: 10,
  },
  {
    name: "ecliers",
    price: 5,
    quantity: 40,
  },
  {
    name: "kacchamango",
    price: 2,
    quantity: 100,
  },
];

describe("calculate average of students", () => {
  test("students with different subject", async () => {
    const Qunann = new ChocolateQantity(ChocolateName);
    Qunann.checkofquantity(200);
    expect(ChocolateName[0].quantity).toBe(20);
    expect(ChocolateName[1].quantity).toBe(10);
    expect(ChocolateName[2].quantity).toBe(40);
    expect(ChocolateName[3].quantity).toBe(100);
  });
});

describe("sorting of chocolates", () => {
  test("sorting chocolates by quantity", async () => {
    const sort = new ChocolateQantity(ChocolateName);
    sort.sortByQuantity();
    expect(ChocolateName[0].name).toBe("kacchamango");
    expect(ChocolateName[1].name).toBe("ecliers");
    expect(ChocolateName[2].name).toBe("dairymilk");
    expect(ChocolateName[3].name).toBe("milkybar");
  });
});
