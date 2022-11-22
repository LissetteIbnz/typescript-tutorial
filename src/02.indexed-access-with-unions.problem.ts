export const programModeMap = {
  OPEN: "open",
  CLOSE: "close",
  ERROR: "error-backend",
};

type Error = typeof programModeMap["ERROR"];
      //^?





// Con números...
export const programNumbers = [0, 3, 8];

type AvailableProgramNumbers = typeof programNumbers;
      //^?



// Esto no aumenta tu bundle.
type NormalMode = typeof programModeMap["CLOSE" | "OPEN"]

const callProgram = (program: NormalMode) => {
/** */
}

callProgram("")