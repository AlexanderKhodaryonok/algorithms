function divideFields(parts) {
  const fields = parts.map(element => {
    const dividedFields = element.split('=');
    const [keys, value] = dividedFields;
    const splittedKeys = keys.split('.');
    return { keys: splittedKeys, value };
  });
  return fields;
};


function setValues(fields) {
  let object = {};
  fields.forEach((element) => {
    let index = 0;
    setValue(element.keys, element.value, object, index)
  });
  return object;
}

function setValue(keys, value, obj, index) {
  const key = keys[index];
  if(keys.length - 1 > index) {
    const isKeyExist = obj.hasOwnProperty(key);
    if(!isKeyExist) {
      obj[key] = {};
    }
    return setValue(keys, value, obj[key], ++index);
  }
  return obj[key] = value;
};

export function getObjectFromString(str) {
  const parts = str.split('&');
  const fields = divideFields(parts);
  const obj = setValues(fields);
  return obj;
};
