type TFn = (x: number) => string;
type TFn2 = {
  (x: number): string;
};
// 위 두개는 동일하다.

interface IFn {
  (x: number): string;
}

const testFn: TFn = (x) => {
  return "hello TFn";
};

const testFn2: IFn = (x) => {
  return "hello TFn";
};

type TFnWithProps = {
  (x: number): string;
  props: string;
};

interface IFnWithProps {
  (x: number): string;
  props: string;
}

type TPair<T> = {
  first: T;
  second: T;
};

interface IPair<T> {
  first: T;
  second: T;
}

interface IStateWithTPair<T> extends TPair<T> {
  population: number;
  third: T;
}

type TStateWithIPair<T> = IPair<T> & {
  population: number;
  third: T;
};

class StateT implements TStateWithIPair<string> {
  first;
  second;
  third;
  population;

  constructor({
    first,
    second,
    third,
    population,
  }: {
    first: string;
    second: string;
    third: string;
    population: number;
  }) {
    this.first = first;
    this.second = second;
    this.third = third;
    this.population = population;
  }
}

class StateI implements IStateWithTPair<string> {
  first;
  second;
  third;
  population;

  constructor({
    first,
    second,
    third,
    population,
  }: {
    first: string;
    second: string;
    third: string;
    population: number;
  }) {
    this.first = first;
    this.second = second;
    this.third = third;
    this.population = population;
  }
}
