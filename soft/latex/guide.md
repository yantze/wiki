```
=Links=
* http://dirac.ruc.dk/imfufalatex/ltxnoter.pdf
* origin from : https://github.com/casperin/Notes-for-study/latex

=Installation & Compiling=
==Debian based Linux==
===Install===
 apt-get install texlive
 apt-get install texlive-lang-danish

 apt-get install texlive-full

===Compiling===
 latex file.tex
 dvipdf file.dvi

=Sample Document=
 \documentclass[a4paper,12pt]{article}
 % Do not mess following 4 lines
 \usepackage{ucs} % Allows us to switch charset
 \usepackage[utf8x]{inputenc} % Loads utf-8 which is the charset we want to use
 \usepackage{lmodern}
 \usepackage[T1]{fontenc}
 \begin{document}
 \section{Hello World}
 This is some text. ÆØÅæøå
 \end{document}
=Tricks=
==Layout==
===Smaller margins===
Without this it tries to keep a line length of about 66em
 \usepackage{fullpage}
===Linespread===
A must for reports for school
 \linespread{2}
===Fancy Header===
Both these goes before \begin{document}
 \usepackage{fancyhdr}
 \pagestyle{fancy}
The header can be changed quite a bit.
==Content==
===Front page & Title===
 \title{How to Structure a LaTeX Document}
 \author{Gorm Casper-Mortensen \and Tom Andersson}
 \date{2. november} % Remove this to get the date that the .tex is compiled
 \maketitle
===Table of Content===
The .tex file has to be compiled twice for the table of contents to be fully updated.
 \tableofcontents
===Graphics===
In the header:
 \usepackage{graphicx}
The image (use .eps):
 \begin{center}
 \includegraphics[width=0.48\textwidth]{img.eps}
 \end{center}
===Floating Figure===
In the header:
 \usepackage{wrapfig}
In the text somewhere (use .eps):
 \begin{wrapfigure}{r}{0.5\textwidth}
 \begin{center}
 \includegraphics[width=0.48\textwidth]{img.eps}
 \end{center}
 \caption{A cow}
 \end{wrapfigure}
===Math===
====Displaying math correctly====
Inline math are surrounded by $:
 Pythagoras has laid name to $a^2 = b^2 + c^2$, but blah blah blah
For bigger formulas, it's better to stick them on a line of their own by surrounding them with $$ like this:
 $$E = mc^2$$
====Division====
 \frac{a}{b}
will display "a over b" or a/b.
====Multiplication====
You are probably looking for
 a \cdot b
which will give you a*b
====Up and Down====
 a^2
will give a<sup>2</sup>
 a_2
will give a<sub>2</sub>
===Formatting===
 \emph{emphasized text}
 \textbf{boldfaced text}
 \texttt{telescreen text} (monospace)
 \textsc{small capitals}
 March 6\textsuperscript{th} (Up!)
====Coloring====
Requires
 \usepackage{color}
in the header, and generally isn't recommended at all.
 a standard black text, {\color{red} followed by red one}, going black again.

===Footnotes===
 Cum sociis natoque penatibus\footnote{That was Latin}.
===New Command===
 \newcommand{\easy}{$$\frac{a}{b}$$}
====New Command with Variable====
 \newcommand{\hard}[1]{$$#1 = \frac{1+y}{2 (x-4)}$$}
 \hard{z}
 \hard{39}

 ```
