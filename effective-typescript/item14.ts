interface State {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
  pageContents: string;
}

interface TopNavState {
  userId: State["userId"];
  pageTitle: State["pageTitle"];
  recentFiles: State["recentFiles"];
}

type TopNavState2 = {
  [key in "userId" | "pageTitle" | "recentFiles"]: State[key];
};

type TopNavState3 = Pick<State, "userId" | "pageTitle" | "recentFiles">;

//

interface SaveAction {
  type: "save";
}

interface LoadAction {
  type: "load";
}

type Action = SaveAction | LoadAction;
type Action2 = Action["type"];

type ActionRec = Pick<Action, "type">;

interface Options {
  width: number;
  height: number;
  color: string;
  label: string;
}

type UpdateOptions = {
  [key in "width" | "height" | "color" | "label"]?: Options[key];
};

type UpdateOptions2 = Partial<Options>;

class UIWidget {
  constructor(init: Options) {}
  update(options: UpdateOptions) {}
}

// Exclude, Omit, Pick, Partial, Required, Record
type UpdateOptions3 = Required<Pick<Options, "width" | "height">> &
  Partial<Pick<Options, "color" | "label">>;

const customOption: UpdateOptions3 = {
  width: 13,
  height: 10,
  color: "red",
  label: "title",
};
