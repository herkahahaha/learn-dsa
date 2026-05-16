import { canPlaceFlower } from "../ez-can_place_flower";

describe("canPlaceFlower", () => {
  test("should return true if flower can be placed", () => {
    const flowerbed = [1, 0, 0, 0, 1];
    const n = 1;
    expect(canPlaceFlower(flowerbed, n)).toBe(true);
  });

  test("should return false if flower cannot be placed", () => {
    const flowerbed = [1, 0, 0, 0, 1];
    const n = 2;
    expect(canPlaceFlower(flowerbed, n)).toBe(false);
  });
});
