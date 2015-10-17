% !TEX TS-program = xelatex
% !TEX encoding = UTF-8

% This is a simple template for a XeLaTeX document using the "article" class,
% with the fontspec package to easily select fonts.
% use XeLaTeX compile this document

\documentclass[11pt]{article} % use larger type; default would be 10pt

\usepackage{fontspec} % Font selection for XeLaTeX; see fontspec.pdf for documentation
\defaultfontfeatures{Mapping=tex-text} % to support TeX conventions like ``---''
\usepackage{xunicode} % Unicode support for LaTeX character names (accents, European chars, etc)
\usepackage{xltxtra} % Extra customizations for XeLaTeX

\setmainfont{微软雅黑} % set the main body font (\textrm), assumes Charis SIL is installed
\setsansfont{Georgia}
\setmonofont{Microsoft Yi Baiti}

% other LaTeX packages.....
\usepackage{geometry} % See geometry.pdf to learn the layout options. There are lots.
\geometry{a4paper} % or letterpaper (US) or a5paper or....
%\usepackage[parfill]{parskip} % Activate to begin paragraphs with an empty line rather than an indent

\usepackage{graphicx} % support the \includegraphics command and options

\title{Brief Article}
\author{The Author}
%\date{} % Activate to display a given date or no date (if empty),
         % otherwise the current date is printed 

\begin{document}
\maketitle

%\section{}


%\subsection{}


 \LaTeX{} is a \textbf{document preparation system} built on the \TeX{}-typesetting program. It will automatically take care of e.g. line wrapping and pagination, positioning of images and tables, cross-referencing, and indexing. \LaTeX{} is especially well-suited for presenting and publishing \textit{mathematical} material :
 
 pdflatex file.tex to convert from .tex to .pdf
 
 测试中文

 % This is a comment, and will not be visible in the final document

\end{document}
