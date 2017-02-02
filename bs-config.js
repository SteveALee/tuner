// see browsersync.io/docs/options

module.exports = {
//  injectChanges: false,
  files: ['./build/**/*.{html,htm,css,js}'],
  server: {
    baseDir: './build',
  },
  notify: false,
  //  https: true,
  browser: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
}
