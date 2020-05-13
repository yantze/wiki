# Pipe

## Redirection of output in bash

| syntax                      | visible in terminal \(StdOut\) | visible in terminal \(StdErr\) | visible in file \(StdOut\) | visible in file \(StdErr\) | existing file | non\-posix                   |
|-----------------------------|--------------------------------|--------------------------------|----------------------------|----------------------------|---------------|------------------------------|
| >                           | no                             | yes                            | yes                        | no                         | overwrite     |                              |
| >>                          | no                             | yes                            | yes                        | no                         | append        |                              |
| 2>                          | yes                            | no                             | no                         | yes                        | overwrite     |                              |
| 2>>                         | yes                            | no                             | no                         | yes                        | append        |                              |
| 2>1                         | no                             | no                             | yes                        | yes                        | overwrite     | &>                           |
| 2>>1                        | no                             | no                             | yes                        | yes                        | append        | &>>                          |
| \| tee                      | yes                            | yes                            | yes                        | no                         | overwrite     |                              |
| \| tee \-a                  | yes                            | yes                            | yes                        | no                         | append        |                              |
| 2>&1 1>/dev/null \| tee     | yes                            | yes                            | no                         | yes                        | overwrite     | 2> >\(tee filename >&2\)     |
| 2>&1 1>/dev/null \| tee \-a | yes                            | yes                            | no                         | yes                        | append        | 2> >\(tee \-a filename >&2\) |
| \|& tee                     | yes                            | yes                            | yes                        | yes                        | overwrite     |                              |
| \|& tee \-a                 | yes                            | yes                            | yes                        | yes                        | append        |                              |
| 2> /dev/null \| tee         | yes                            | no                             | yes                        | no                         | overwrite     |                              |
| 2> /dev/null \| tee \-a     | yes                            | no                             | yes                        | no                         | append        |                              |


## Reference
- https://www.reddit.com/r/linux/comments/g3zel7/heres_an_extremely_useful_guide_to_redirection_of/
