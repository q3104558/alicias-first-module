// Geometry stuff

function torusVolume(majorRadius, minorRadius) {
  return (Math.PI * minorRadius * minorRadius) * (2 * Math.PI * majorRadius)
}

console.log(torusVolume(8, 7))
