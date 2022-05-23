export function removeArabic(event: any) {
  //console.log(event.target.value);
  //////////arabic char regx/////////////
  const pattern = /[\u0600-\u06FF]/;
  //let inputChar = String.fromCharCode(event.charCode)
  if (pattern.test(event.target.value)) {
    event.target.value = event.target.value.replace(/[\u0600-\u06FF]/g, "");
    // invalid character, prevent input

  }
}
