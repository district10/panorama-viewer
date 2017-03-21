elsd := bin/elsd
svgm := bin/svgMarker

all: texture.pgm.elsd.svg.marked.svg texture1.pgm.elsd.svg.marked.svg texture2.pgm.elsd.svg.marked.svg
clean:
	rm -f *.marked.svg *.elsd.*

%.marked.svg: %
	${svgm} $< $@
%.elsd.svg: %
	${elsd} $<
%.pgm: %.jpg
	convert $< $@
