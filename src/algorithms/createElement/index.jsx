function getTagType(str) {
  let hType = '';
  let count = 0;
  str.split('').forEach(element => {
    if(element === '#') count++;
    hType = 'h' + count; 
  });
  return hType;
}

function getMessage(str) {
  return str.split('').filter(char => char !== '#').join('').trim();
}

export function createElement(str) {
  const hType = getTagType(str);
  const message = getMessage(str);
  const newTag = document.createElement(hType);
  newTag.innerHTML = message;
  const rootElement = document.getElementById("root");
  document.body.insertBefore(newTag, rootElement);
}
