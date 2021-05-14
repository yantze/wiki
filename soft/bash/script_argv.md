```bash
print_info() {
  echo "[$PROG] INFO: $*"
}

print_error() {
  echo "[$PROG] ERROR: $*" >&2
}

exit_1_if_param_not_exist() {
  if [[ -z $2 ]]; then
    print_error "$1 is null."
    show_help 1
  fi
}
```

```bash

#################################################################################
## read arguments
#################################################################################
if [[ -z "$*" ]]; then
  print_error "need params."
  show_help 1
fi

workspaceDir=
p12_download_path=
p12_password=
p12_md5=
declare -a args=()
while [[ $# -gt 0 ]]; do

  case "$1" in
  --workspace)
    print_info "workspaceDir: $2"
    readonly workspaceDir="$2"
    shift 2
    ;;
  --prefix)
    print_info "prefix: $2"
    readonly prefix="$2"
    shift 2
    ;;
  --)
    shift
    args=("${args[@]-}" "$@")
    break
    ;;
  *)
    args[${#args[*]}]="$1"
    shift
    ;;
  esac
done

#################################################################################
## check params
#################################################################################
exit_1_if_param_not_exist workspace "${workspace}"
exit_1_if_param_not_exist prefix "${prefix}"
```
