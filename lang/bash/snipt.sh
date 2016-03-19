#!/bin/env sh

for i in `seq 1 10`; do echo "halo"; done
Lines=`grep '[;)}]' *.c | wc -l`
Files=`ls *.c | wc -l`

