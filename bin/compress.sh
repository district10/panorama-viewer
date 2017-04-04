convert \
    -strip \
    -interlace Plane \
    -gaussian-blur 0.05 \
    -filter Lanczos \
    -quality 85% \
    $1 $2
