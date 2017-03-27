oh-my-zsh cheatsheet
---

## Commands

| Command               | Description                                                                                                   |
|:----------------------|:--------------------------------------------------------------------------------------------------------------|
| _tabs_                | Create a new tab in the current directory (OS X - req enabling access for assistive devices under sys prefs). |
| _take_                | Create a new directory and change to it, will create intermediate directories as required. Like mcd command   |
| _x_ / _extract_       | Extract an archive (supported types: tar.{bz2,gz,xz,lzma}, bz2, rar, gz, tar, tbz2, tgz, zip, Z, 7z).         |
| _zsh_stats_           | Get a list of the top 20 commands and how many times they have been run.                                      |
| _uninstall_oh_my_zsh_ | Uninstall Oh-my-zsh.                                                                                          |
| _upgrade_oh_my_zsh_   | Upgrade Oh-my-zsh.                                                                                            |
| _zsh_stats_           | zsh command stats.                                                                                            |
| _open_command_        | open command in window cygwin `cygstart`, in darwin `open`, in linux `xdg-open`                               |


## Git plugins=(... git)

| Dynamic access to current branch name with the current_branch function |
|:----------------------------------------------------------------------:|
| git pull origin $(current_branch)                                      |
| grb publish $(current_branch) origin                                   |

| Alias                  | Command                                                                           |
|:-----------------------|:----------------------------------------------------------------------------------|
| _g_                    | git                                                                               |
| _ga_                   | git add                                                                           |
| _gaa_                  | git add --all                                                                     |
| _gc_                   | git commit -v                                                                     |
| _gc!_                  | git commit -v --amend                                                             |
| _gca_                  | git commit -v -a                                                                  |
| _gca!_                 | git commit -v -a --amend                                                          |
| _gclean_               | git clean -fd                                                                     |
| _gpristine_            | git reset --hard && git clean -dfx                                                |
| _gcmsg_                | git commit -m                                                                     |
| _gd_                   | git diff                                                                          |
| _gdca_                 | git diff --cached                                                                 |
| _gdt_                  | git diff-tree --no-commit-id --name-only -r                                       |
| _gg_                   | git gui citool                                                                    |
| _gga_                  | git gui citool --amend                                                            |
| _ggpnp_                | git pull origin $(current_branch) && git push origin $(current_branch)            |
| _ggl_                  | git pull origin $(current_branch)                                                 |
| _ggp_                  | git push origin $(current_branch)                                                 |
| _gignore_              | git update-index --assume-unchanged                                               |
| _gignored_             | git ls-files -v &#124; grep "^[[:lower:]]"                                        |
| _gl_                   | git pull                                                                          |
| _glg_                  | git log --stat --max-count = 10                                                   |
| _glgg_                 | git log --graph --max-count = 10                                                  |
| _glgga_                | git log --graph --decorate --all                                                  |
| _glo_                  | git log --oneline --decorate --color                                              |
| _glog_                 | git log --oneline --decorate --color --graph                                      |
| _gp_                   | git push                                                                          |
| _gss_                  | git status -s                                                                     |
| _gst_                  | git status                                                                        |
| _gunignore_            | git update-index --no-assume-unchanged                                            |
| _gunwip_               | git log -n 1 &#124; grep -q -c "\-\-wip\-\-" && git reset HEAD~1                  |
| _gup_                  | git pull --rebase                                                                 |
| _gvt_                  | git verify-tag                                                                    |


## Alias

| Alias               | Description                                                                                                   |
|:----------------------|:--------------------------------------------------------------------------------------------------------------|
| "\_"                 | alias for sudo  |

---

## Editors

| Alias | Command                                                                  |
|:------|:-------------------------------------------------------------------------|
| _stt_ | (When using `sublime` plugin) Open current directory in Sublime Text 2/3 |
| _v_   | (When using `vi-mode` plugin) Edit current command line in Vim           |

## OSX plugins=(... osx)

| Command       | Description                                    |
|:--------------|:-----------------------------------------------|
| `pfd`         | Print frontest directory, Return the path of the frontmost Finder window |
| `pfs`         | Print frontest selection, Return the current Finder selection            |
| `ofd`         | Open  frontest directory, Open the current directory in a Finder window  |
| `cdf`         | `cd` to the current Finder directory           |
| `pushdf`      | `pushd` to the current Finder directory        |
| `tab`         | Open the current directory in a new tab        |
| `quick-look`  | Quick-Look a specified file                    |
| `man-preview` | Open a specified man page in Preview app       |
