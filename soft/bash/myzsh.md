# myzsh

```
alias -g ...='../..'
alias -g ....='../../..'
alias -g .....='../../../..'
alias -g H='| head'
alias -g T='| tail'
alias -g L="| less"
alias -g M='| more'

alias -g EG='|& egrep'
alias -g G='| egrep'
alias -g F=' | fmt -'

alias -g NE="2> /dev/null"
alias -g NUL="> /dev/null 2>&1"

alias -g NS='| sort -n'
alias -g RNS='| sort -nr'
alias -g S='| sort'
alias -g US='| sort -u'

alias -g X0G='| xargs -0 egrep'
alias -g X0='| xargs -0'
alias -g XG='| xargs egrep'
alias -g X='| xargs'

alias -g TL='| tail -20'
alias -g HL='|& head -20'
alias -g EH='|& head'
alias -g ETL='|& tail -20'
alias -g ET='|& tail'

two command is same function: `|&` = `2>&1 |`
command |& tee ~/outputfile.txt
command 2>&1 | tee ~/outputfile.txt

alias -g MM='| most'
alias -g LL="2>&1 | less"
alias -g EL='|& less'
alias -g ELS='|& less -S'
alias -g LS='| less -S'
```

```
-='cd -'
1='cd -'

_=sudo
please=sudo
afind='ack -il'

cd=cl
cf='egrep -v "^[[:cntrl:] ]*[#;]|^[[:cntrl:] ]*$"'
cls=clear
cp='cp -i'
cucumber=bundled_cucumber
d='dirs -v | head -10'
ddg='web_search duckduckgo'
ducky='web_search duckduckgo \!'
dud='du -d 1 -h'
duf='du -sh *'

eg='open /usr/local/Cellar/emacs/24.5/Emacs.app'
emacs=/usr/local/Cellar/emacs/24.5/bin/emacs
en='emacsclient -n'
et='emacsclient -t'
fd='find . -type d -name'
ff='find . -type f -name'
g=git

gunignore='git update-index --no-assume-unchanged'
gunwip='git log -n 1 | grep -q -c "\-\-wip\-\-" && git reset HEAD~1'
gup='git pull --rebase'
gupv='git pull --rebase -v'
gwch='git whatchanged -p --abbrev-commit --pretty=medium'
gwip='git add -A; git rm $(git ls-files --deleted) 2> /dev/null; git commit --no-verify -m "--wip-- [skip ci]"'
h=history
hd='od -Ax -tx1z -v'
hgrep='fc -El 0 | grep'
history='fc -l 1'
histsum=zsh_stats
javac='javac -J-Dfile.encoding=utf8'
jq=jq-osx-amd64

l='ls -lFh'
l.='ls -d .* --color=auto'
lS='ls -1FSsh'
la='ls -lAFh'
lart='ls -1Fcart'
ldot='ls -ld .*'

naliases=n-aliases
nanoc=bundled_nanoc
nfunctions=n-functions
nhelp=n-help
nhistory=n-history
nkill=n-kill
noptions=n-options
npanelize=n-panelize
ncd=n-cd
nenv=n-env



p='ps -f'
po=popd
pu=pushd
mcd=take
md='mkdir -p'

rsyn='rsync -arvuzp'
run-help=man
sctl=systemctl
sgrep='grep -R -n -H -C 5 --exclude-dir={.git,.svn,CVS} '
sortnr='sort -n -r'
sp='~/soft/sh-toolkits-lib/sp.sh'
tf='tail -f'

showfiles='defaults write com.apple.finder AppleShowAllFiles -bool true && killall Finder'
hidefiles='defaults write com.apple.finder AppleShowAllFiles -bool false && killall Finder'

tumblr='TUMBLRHOST=i.vastiny.com tumblr'
tpost='TUMBLRHOST=i.vastiny.com tumblr post'

t='tmux -2 -u attach || tmux -2 -u new-session -s hi'
ta='tmux attach -d -t'
tn='tmux -2 -u new-session -s'
tl='tmux list-sessions'
unexport=unset

v='vim --cmd "let g:no_plugin=1"'
vimrc='vim ~/workspace/github/vimrc/_vimrc'
zshrc='$EDITOR ~/.zshrc'
ohmyzsh='vim ~/.oh-my-zsh'


open-command
man-preview
x=extract
```
