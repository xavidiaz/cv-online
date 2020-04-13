  function ParseUrlParameter() {
  var Parameters = window.location.search.substring(1).split("&");
  /* value 1 */
  var Values = Parameters[0].split("=");

  document.getElementById("10").innerHTML = Values[0];

  document.getElementById("11").innerHTML = Values[1];

  /* value 2 */
  var Values = Parameters[1].split("=");

  document.getElementById("20").innerHTML = Values[0];

  document.getElementById("21").innerHTML = Values[1];

  /* value 3 */
  var Values = Parameters[2].split("=");

  document.getElementById("30").innerHTML = Values[0];

  document.getElementById("31").innerHTML = Values[1];

  /* value 4 */
  var Values = Parameters[3].split("=");

  document.getElementById("40").innerHTML = Values[0];

  document.getElementById("41").innerHTML = Values[1];

  /* value 5 */
  var Values = Parameters[4].split("=");

  document.getElementById("50").innerHTML = Values[0];

  document.getElementById("51").innerHTML = Values[1];

  /* value 6 */
  var Values = Parameters[5].split("=");

  document.getElementById("60").innerHTML = Values[0];

  document.getElementById("61").innerHTML = Values[1];
  /* value 7 */
  var Values = Parameters[6].split("=");

  document.getElementById("70").innerHTML = Values[0];

  document.getElementById("71").innerHTML = Values[1];

  /* value 8 */
  var Values = Parameters[7].split("=");

  document.getElementById("80").innerHTML = Values[0];

  document.getElementById("81").innerHTML = Values[1];

  /* value 9 */
  var Values = Parameters[8].split("=");

  document.getElementById("90").innerHTML = Values[0];

  document.getElementById("91").innerHTML = Values[1];
}
