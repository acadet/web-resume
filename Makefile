src=../src/prod/

all: clean build

build:
	cp -a $(src). ./

clean:
	rm -rf fonts/ imgs/ *.html *.css *.js *.json *.ico *.xml
