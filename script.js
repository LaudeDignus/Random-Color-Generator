const colors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#F1C40F",
  "#9B59B6",
  "#E74C3C",
  "#1ABC9C",
  "#2ECC71",
  "#3498DB",
  "#34495E",
  "#16A085",
  "#27AE60",
  "#2980B9",
  "#8E44AD",
  "#2C3E50",
  "#F39C12",
  "#D35400",
  "#C0392B",
  "#BDC3C7",
  "#7F8C8D",
  "#FF6F61",
  "#6B5B95",
  "#88B04B",
  "#F7CAC9",
  "#92A8D1",
  "#955251",
  "#B565A7",
  "#009B77",
  "#DD4124",
  "#D65076",
  "#45B8AC",
  "#EFC050",
  "#5B5EA6",
  "#9B2335",
  "#DFCFBE",
  "#55B4B0",
  "#E15D44",
  "#7FCDCD",
  "#BC243C",
  "#C3447A",
  "#98B4D4",
  "#C94C4C",
  "#5A7247",
  "#DE7A22",
  "#2A4B7C",
  "#DAA520",
  "#B0C4DE",
  "#800080",
  "#708090",
  "#708090",
  "#2F4F4F",
  "#00CED1",
  "#D2B48C",
  "#FF1493",
  "#00BFFF",
  "#6495ED",
  "#4682B4",
  "#000080",
  "#8A2BE2",
  "#A52A2A",
  "#FA8072",
  "#FF6347",
  "#7FFF00",
  "#00FF7F",
  "#3CB371",
  "#2E8B57",
  "#006400",
  "#8FBC8F",
  "#9ACD32",
  "#32CD32",
  "#228B22",
  "#6B8E23",
  "#BDB76B",
  "#DAA520",
  "#8B4513",
  "#A0522D",
  "#D2691E",
  "#CD853F",
  "#F4A460",
  "#FF4500",
  "#FF8C00",
  "#FFA500",
  "#FFD700",
  "#FFFF00",
  "#FFFFE0",
  "#FFFACD",
  "#FAFAD2",
  "#FFE4B5",
  "#FFDAB9",
  "#FFDEAD",
  "#FFE4C4",
  "#FF7F50",
  "#FF6347",
  "#FF4500",
  "#FF8C00",
  "#FFA500",
  "#FFD700",
  "#FFFF00",
  "#FFFFE0",
  "#FFFACD",
];

const selectColors = document.querySelector("#containerColor");
const selectHexColor = document.querySelector("span.color_choose");
console.log(selectColors);
console.log(selectHexColor);

function getRandomIndex() {
  const indexColor = Math.floor(Math.random() * colors.length);
  return indexColor;
}

function generateRandomColor() {
  const color = colors[getRandomIndex()];

  selectColors.style.backgroundColor = color;
  selectHexColor.innerText = color;
}

function 

const btn = document.querySelector("#btn");

btn.onclick = generateRandomColor;
