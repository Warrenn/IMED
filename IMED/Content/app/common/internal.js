//https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Contributor_s_Guide/Private_Properties
let map = new WeakMap();

let internal = function (object) {
    if (!map.has(object))
        map.set(object, {});
    return map.get(object);
}

export default internal;