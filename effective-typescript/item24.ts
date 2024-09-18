interface Coordinate {
  x: number;
  y: number;
}

interface BoundingBox {
  x: [number, number];
  y: [number, number];
}

interface Polygon {
  exterior: Coordinate[];
  holes: Coordinate[][];
  bbox?: BoundingBox;
}

function fillPolygonBbox(polygon: Polygon) {
  polygon.bbox = {
    x: [111, 111],
    y: [222, 222],
  };
}

function solution() {
  let polygon: Polygon = {
    exterior: [{ x: 1, y: 2 }],
    holes: [[{ x: 2, y: 3 }], [{ x: 3, y: 4 }]],
    bbox: {
      x: [999, 999],
      y: [888, 888],
    },
  };

  let { bbox } = polygon;
  if (bbox) {
    fillPolygonBbox(polygon); // 여기서 bbox가 참조하는 주소의 값을 변경하는게 아닌, 새로운 값을 만들고, 그 값을 새로 참조하게 한다?
    console.log(bbox);
    console.log(polygon);
    bbox = {
      x: [1, 1],
      y: [2, 2],
    };
    console.log(bbox);
    console.log(polygon);
  }
}

solution();
