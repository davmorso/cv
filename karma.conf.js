process.env.CHROME_BIN = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      { pattern: 'cv-api/test/**/*.spec.ts', watched: false }
    ],
    preprocessors: {
      'cv-api/test/**/*.spec.ts': ['webpack'],
      'cv-api/src/**/*.ts': ['webpack', 'coverage'] // <--- añade esta línea

    },
    webpack: webpackConfig,
    browsers: ['Chrome'],
    reporters: ['progress', 'spec', 'kjhtml', 'coverage'],
    htmlReporter: {
        outputDir: 'karma_html', // carpeta donde se guardará el reporte
        reportName: 'report',    // nombre del archivo HTML

    },
    client: {
      clearContext: false // deja visible el reporte en el navegador
    },
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'text-summary' },
        { type: 'lcovonly', subdir: '.', file: 'lcov.info' } // <--- para SonarQube
      ]
    }
  });
};