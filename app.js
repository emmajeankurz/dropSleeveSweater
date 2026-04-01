function generate() {
  const input = {
    stsGauge: +stsGauge.value,
    rowGauge: +rowGauge.value,
    bodyWidth: +bodyWidth.value,
    bodyHeight: +bodyHeight.value,
    ease: +ease.value,
    ribbing: +ribbing.value
  };

  const front = buildFront(input);
  const back = buildBack(input);
  const sleeve = buildSleeve(input);

  const container = document.getElementById("output");
  container.innerHTML = "";

  container.appendChild(renderSVG(front));
  container.appendChild(renderSVG(back));
  container.appendChild(renderSVG(sleeve));
}
