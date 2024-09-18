function isInputElement(el: HTMLElement): el is HTMLInputElement {
  return "value" in el;
}

function isDefined<T>(x: T | undefined): x is T {
  return x !== undefined;
}

const jackson5 = ["a", "b", "c", "d", "e"];
const members = ["f", "e"]
  .map((who) => jackson5.find((n) => n === who))
  .filter(isDefined);

declare let hasDates: boolean;
const nameTitle = { name: "Khufu", title: "Pharaoh" };
const pharaoh = {
  ...nameTitle,
  ...(hasDates ? { start: -2589, end: -2566 } : {}),
};
pharaoh.start;

function addOptional<T extends object, U extends object>(
  a: T,
  b: U | null
): T & Partial<U> {
  return { ...a, ...b };
}
const pharaoh2 = addOptional(
  nameTitle,
  hasDates ? { start: -2589, end: -2566 } : {}
);
pharaoh2.start;
