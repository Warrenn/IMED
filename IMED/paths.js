import path from 'path';

let root = 'Content';

// helper method for resolving paths
let resolveToApp = (glob = '') => {
    return path.join(root, 'app', glob); // app/{glob}
};

let resolveToComponents = (glob = '') => {
    return path.join(root, 'app/components', glob); // app/components/{glob}
};

let rootPage = path.join(root, 'index.html');
let uncssGlob = './' + root + '/**/*.html';

// map of all paths
let paths = {
    root: root,
    rootPage: rootPage,
    rootPath: path.resolve(__dirname, 'Content'),
    js: resolveToComponents('**/*!(.spec.js).js'), // exclude spec files
    style: resolveToApp('**/*.less'), // stylesheets
    html: [
        resolveToApp('**/*.html'),
        rootPage
    ],
    entry: [
        'babel-polyfill',
        path.join(__dirname, root, 'app/app.js')
    ],
    uncssFiles: [uncssGlob],
    output: root,
    resolveToComponents: resolveToComponents,
    blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**'),
    dest: path.join(__dirname, 'wwwroot'),
    prefixerBrowsers: ["Android >= 2.1", "BlackBerry >= 7", "Chrome >= 20", "Firefox >= 21", "Explorer >= 10", "iOS >= 3.2", "Opera > 12", "Safari > 6", "OperaMobile >= 12.1", "ChromeAndroid >= 40", "FirefoxAndroid >= 30", "ExplorerMobile >= 10"]
};

export default paths;
