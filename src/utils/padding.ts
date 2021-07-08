
type Padding = {
  top: `${number}px`,
  right: `${number}px`,
  bottom: `${number}px`,
  left: `${number}px`
};

type PaddingEmpty = {
  top: '0px',
  right: '0px',
  bottom: '0px',
  left: '0px'
};

function createPadding(): PaddingEmpty;

function createPadding(padding: number): Padding;

function createPadding(
  paddingHorizontal: number,
  paddingVertical: number
): Padding;

function createPadding(
  paddingTop: number,
  paddingHorizontal: number,
  paddingBottom: number
): Padding;

function createPadding(
  paddingTop: number,
  paddingRight: number,
  paddingBottom: number,
  paddingLeft: number
): Padding;

function createPadding(
  firstPadding?: number,
  secondPadding?: number,
  thirdPadding?: number,
  fourthPadding?: number
): Padding | PaddingEmpty {
  if (firstPadding && secondPadding && thirdPadding && fourthPadding) {
    return {
      top:<const> `${firstPadding}px`,
      right:<const> `${secondPadding}px`,
      bottom:<const> `${thirdPadding}px`,
      left:<const> `${fourthPadding}px`
    };
  }
  if (firstPadding && secondPadding && thirdPadding) {
    return {
      top:<const> `${firstPadding}px`,
      right:<const> `${secondPadding}px`,
      bottom:<const> `${thirdPadding}px`,
      left:<const> `${secondPadding}px`
    };
  }
  if (firstPadding && secondPadding) {
    return {
      top:<const> `${firstPadding}px`,
      right:<const> `${secondPadding}px`,
      bottom:<const> `${firstPadding}px`,
      left:<const> `${secondPadding}px`
    };
  }
  if (firstPadding) {
    return {
      top:<const>`${firstPadding}px`,
      right:<const>`${firstPadding}px`,
      bottom:<const>`${firstPadding}px`,
      left:<const>`${firstPadding}px`
    };
  }
  return {
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  };
};

export { };
  
  
// https://stackoverflow.com/questions/37978528/typescript-type-string-is-not-assignable-to-type
