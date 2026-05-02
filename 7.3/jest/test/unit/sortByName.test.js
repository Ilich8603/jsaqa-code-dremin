const sorting = require("../../app");

describe("Books names test suit", () => {
  test("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];
      
    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];

    const output = sorting.sortByName(input);

    expect(output).toEqual(expected)
  });

  test("Books names with same name should remain unchanged", () => {
    const input = [
      "Гарри Поттер",
      "гарри поттер",
    ];

    const expected = [
      "Гарри Поттер",
      "гарри поттер",
    ];

    const output = sorting.sortByName(input);

    expect(output).toEqual(expected);
  });
});
