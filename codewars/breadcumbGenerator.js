/* from https://www.codewars.com/kata/563fbac924106b8bf7000046 */

function generateBC(url, separator) {
  url = url.replace(/https?:\/\//, "");
  let result = "";
  let nextHref = "";
  var elements = url.split("/");

  if (
    elements.length === 1 ||
    (elements.length === 2 && elements[elements.length - 1] === "")
  ) {
    return '<span class="active">HOME</span>';
  }

  if (
    elements.length === 2 &&
    /index\..+/gi.test(elements[elements.length - 1])
  ) {
    return '<span class="active">HOME</span>';
  }

  let directories = getArrDir(elements);

  for (let i = 0; i < directories.length; i++) {
    if (directories[i].href === "/") {
      result += `<a href="/">HOME</a>${separator}`;
      nextHref += "/";
    } else if (directories[i].href === "span") {
      result += `<span class="active">${directories[i].innerHTML}</span>`;
    } else {
      nextHref += directories[i].href;
      result += `<a href="${nextHref}">${directories[i].innerHTML}</a>${separator}`;
    }
  }

  return result;
}

function getArrDir(arr) {
  let result = [];
  let hasIndex = false;
  let isIndex = /index\..+/gi;

  if (isIndex.test(arr[arr.length - 1])) {
    hasIndex = true;
  } else {
    result.push({
      id: arr.length - 1,
      href: "span",
      innerHTML: getInnerHTML(arr[arr.length - 1]),
    });
  }

  for (let i = arr.length - 2; i > 0; i--) {
    let currentValue = arr[i];
    if (i === arr.length - 2 && hasIndex) {
      result.push({
        id: i,
        href: "span",
        innerHTML: getInnerHTML(currentValue),
      });
    } else {
      result.push({
        id: i,
        href: `${currentValue}/`,
        innerHTML: getInnerHTML(currentValue),
      });
    }
  }
  result.push({ id: 0, href: "/", innerHTML: "HOME" });

  return result.sort((x, y) => x.id - y.id);
}

function getInnerHTML(value) {
  let result = "";
  let ignore = [
    "the",
    "of",
    "in",
    "from",
    "by",
    "with",
    "and",
    "or",
    "for",
    "to",
    "at",
    "a",
  ];

  //Quitar variables
  if (value.includes("?")) {
    value = value.split("?")[0];
  }

  if (value.includes("#")) {
    value = value.split("#")[0];
  }

  if (value.includes(".")) {
    value = value.split(".")[0];
  }

  if (value.length > 30) {
    let words = value.split("-");
    for (let i = 0; i < words.length; i++) {
      if (!ignore.includes(words[i])) {
        result += words[i].split("")[0].toUpperCase();
      }
    }
    return result;
  } else if (value.includes("-")) {
    return value.replace(/-/g, " ").toUpperCase();
  } else {
    return value.split(".")[0].toUpperCase();
  }
}
