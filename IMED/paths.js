import path from 'path';

let root = 'Content';

// helper method for resolving paths
let resolveToApp = (glob = '') => {
    return path.join(root, 'app', glob); // app/{glob}
};

let resolveToComponents = (glob = '') => {
    return path.join(root, 'app/components', glob); // app/components/{glob}
};

// map of all paths
let paths = {
    root: root,
    js: resolveToComponents('**/*!(.spec.js).js'), // exclude spec files
    style: resolveToApp('**/*.less'), // stylesheets
    html: [
        resolveToApp('**/*.html'),
        path.join(root, 'index.html')
    ],
    entry: [
        'babel-polyfill',
        path.join(__dirname, root, 'app/app.js')
    ],
    output: root,
    blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**'),
    dest: path.join(__dirname, 'wwwroot')
};

export default paths;
