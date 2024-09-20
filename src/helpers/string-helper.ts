export function toLowerCaseStrings(obj: any) {
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'string') {
        obj[key] = obj[key].toLocaleLowerCase().trim();
      }
    });
    return obj;
  }
  