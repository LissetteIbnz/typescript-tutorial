interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

interface Triangle {
  kind: "triangle";
  sideLength: number;
}

type Shape = Circle | Square; // 👉 Si agregamos el tipo Triángulo...


function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      // A never sólo se le puede asignar never 💪
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}


function getAreaIf(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }

  if (shape.kind === "square") {
    return shape.sideLength ** 2;
  }

  const _exhaustiveCheck: never = shape;
  return _exhaustiveCheck;
}
