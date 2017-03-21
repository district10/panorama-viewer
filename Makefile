elsd := bin/elsd
svgm := bin/svgMarker
pano := bin/PanoMatch

all: texture.pgm.elsd.svg.marked.svg texture1.pgm.elsd.svg.marked.svg texture2.pgm.elsd.svg.marked.svg 03_features.txt 02_matches.jpg
clean:
	rm -f *.marked.svg *.elsd.* 0*

%.marked.svg: %
	${svgm} $< $@
%.elsd.svg: %
	${elsd} $<
%.pgm: %.jpg
	convert $< $@

03_features.txt: texture1.jpg texture2.jpg
	${pano} -t SIFT -a texture1.jpg -b texture2.jpg
%.jpg: %.svg	
	convert $< $@
