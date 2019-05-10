// Inicjalizacja wymaganych pluginów
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

//var jsFiles = 'scripts-dev/*.js'; //ten sposób wczytuje wszystkie pliki w kolejności alfabetycznej - co w przypadku jquery często skutkuje błędami

var jsFiles = [ //zapis w tablicy pozwala na ustalenie kolejności skryptów
    'scripts-dev/jquery.js',
    'scripts-dev/collapse.js',
    'scripts-dev/transition.js',
    'scripts-dev/unslider-min.js',
    'scripts-dev/custom.js'
];
var dest = '../scripts';

// utworzenie zadania domyślnego
gulp.task('default', function () {
    //test czy gulp działa
    console.log('Gulp running test');
});

// konkatenacja plików js

gulp.task('js', function () {
    console.log('Gulp running JS task');
    return gulp.src(jsFiles) //katalog źródłowy (pliki wejściowe)
        .pipe(concat('scripts.js')) //kontaktenacja plików, metoda przyjmuje tylko jeden parameter=> nazwa pliku wyjściowego
        .pipe(gulp.dest(dest)); //wskazanie katalogu docelowego
});

//konkatenacja plików js z minifikacją i zmianą nazwy pliku wyjściowego

gulp.task('js-extended', function () {
    console.log('Gulp is runninh js-extended task');
    return gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(rename('scripts.min.js')) //zmiana nazwy pliku
        .pipe(uglify()) //minifikacja pliku wyjściowego
        .pipe(gulp.dest(dest));
});