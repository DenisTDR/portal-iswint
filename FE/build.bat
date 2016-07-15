cp -rf app/components release
cp -rf app/directives release
cp -rf app/images release
cp -rf app/js release
cp -rf app/services release
cp -rf app/styles release
cp -rf app/views release
cd app
cp --parents bower_components/html5-boilerplate/dist/css/normalize.css ../release
cp --parents bower_components/html5-boilerplate/dist/css/main.css ../release
cp --parents bower_components/bootstrap/dist/css/bootstrap.min.css ../release
cp --parents bower_components/components-font-awesome/css/font-awesome.min.css ../release
cd ..