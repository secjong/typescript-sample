class Cylinder {
  radius = 1;
  height = 1;
}

const v = typeof Cylinder;
type T = typeof Cylinder;

declare let fn: T; // typeof Cylinder
const c = new fn();

type C = InstanceType<typeof Cylinder>;
