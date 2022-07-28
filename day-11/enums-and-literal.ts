// enum
const beforeLoad = "beforeLoad";
const loading = "loading";
const loaded = "loaded";

enum LoadingState {
  beforeLoad = "beforeLoad",
  loading = "loading",
  loaded = "loaded",
}

const englishLoadingStates = {
  [LoadingState.beforeLoad]: "Before load",
};

const isLoading = (state: LoadingState) => state === LoadingState.loading;

console.log(isLoading(LoadingState.beforeLoad));

// Literal types

function rollDice(dice: 1 | 2 | 3 | 4): number {
  let pip = 0;
  for (let i = 0; i < dice; i++) {
    pip += Math.floor(Math.random() * 5 + 1);
  }
  return pip;
}

console.log(rollDice(4));

function reSendEvent(name: "addToCart", data: { productId: number }): void;
function reSendEvent(name: "checkout", data: { cartCount: number }): void;
function reSendEvent(name: string, data: unknown): void {
  console.log(`${name}: ${JSON.stringify(data)}`);
}

reSendEvent("addToCart", { productId: 11223 });
