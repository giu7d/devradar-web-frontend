const gradients = [
  ["#FE6B8B", "#FF8E53"],
  ["#2196F3", "#21CBF3"],
  ["#02AAB0", "#00CDAC"],
  ["#DA22FF", "#9733EE"],
  ["#e65c00", "#F9D423"],
  ["#2193b0", "#6dd5ed"]
];

function generateGradient(
  isGradient = true,
  rotation = 90,
  startRate = 20,
  endRate = 90
) {
  const position = Math.floor(Math.random() * (gradients.length - 1));
  const [start, end] = gradients[position < gradients.length ? position : 0];
  return isGradient
    ? `linear-gradient(${rotation}deg, ${start} ${startRate}%, ${end} ${endRate}%)`
    : start;
}

const isEmpty = val => val === undefined || val === null;

export { gradients, generateGradient, isEmpty };
