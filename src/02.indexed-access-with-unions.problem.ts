export const programModeMap = {
  OPEN: "open",
  CLOSE: "close",
  ERROR: "error",
};

type Error = typeof programModeMap["ERROR"];
      //^?





// Con números...
export const programNumbers = [0, 3, 8];

type AvailableProgramNumbers = typeof programNumbers;
      //^?



// Esto no aumenta tu bundle - No necesitas importar programModeMap
type NormalMode = typeof programModeMap["CLOSE" | "OPEN"]

const callProgram = (program: NormalMode) => {
/** */
}

callProgram("irrelevant")