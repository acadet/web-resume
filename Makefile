repo = https://github.com/acadet/web-resume

all: clean build

build:
	git clone $(repo) src
	cd src; npm install; bower install; grunt
	cp -a src/build/. .
	cp -a src/imgs/ imgs/
	rm -rf src

clean:
	rm -rf src index.html all.css all.js imgs