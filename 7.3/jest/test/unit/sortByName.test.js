const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

  it("Books names with same name should remain unchanged", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "гарри поттер",
      ])
    ).toEqual([
      "Гарри Поттер",
      "гарри поттер",
    ]);
  });
});
