class Templater {
  code = []

  _generateNestedContentError() {
    throw new Error('Nested content is not allowed');
  }

  _checkIsString(content) {
    if(typeof content === 'string') {
      return true
    }
    return false;
  }

  _addNestedTag({ type, attributes }) {
    const attributesStr = this._getAttributesStr(attributes);
    this.code.unshift(`<${type}${attributesStr}>`)
    this.code.push(`</${type}>`)
  }

  _addSettedCode(chunks) {
    chunks.forEach(element => {
      if(element instanceof Templater) {
        const settedCode = element.toString();
        this.code.push(settedCode);
      }
    });
  }

  _getAttributesArr(attributes) {
    const attributesArr = [];
    for (const [key, value] of Object.entries(attributes)) {
      attributesArr.push(` ${key}="${value}"`);
    }
    return attributesArr;
  }

  _getAttributesStr(attributes) {
    let attributesStr = '';
    if(!!attributes) {
      const attributesArr = this._getAttributesArr(attributes);
      attributesStr = attributesArr.sort().join('');
    }
    return attributesStr;
  }

  _setOwnTag({ type, content, attributes }) {
    const attributesStr = this._getAttributesStr(attributes);
    this.code.push(`<${type}${attributesStr}>${content}</${type}>`);
  }

  _getAttributes(data) {
    if (data) {
      const isInstance = data instanceof Templater;
      return isInstance ? undefined : data;
    }
  }

  _tagHandler(data, type) {
    const attributes = this._getAttributes(data[1]);
    const content = data[0];
    if(this._checkIsString(content) || (this._checkIsString(content) && attributes)) {
      this._setOwnTag({ type, content, attributes })
    } else {
      const attributes = this._getAttributes(content);
      this._addSettedCode(data);
      this._addNestedTag({ type, attributes });
    }
    return this;
  }

  div(...rest) {
    return this._tagHandler(rest, 'div');
  }

  span(...rest) {
    return this._tagHandler(rest, 'span');
  }

  p(...rest) {
    return this._tagHandler(rest, 'p');
  }

  br(content) {
    if(content) {
      this._generateNestedContentError();
    }
    this.code.push('<br>');
    return this;
  }

  toString() {
    return this.code.join('');
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function() {
  return new Templater();
}
