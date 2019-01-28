## For
```
#include<stdio.h>
#include<math.h>

int main()
{
    int fahr;
    
    for (fahr = 0; fahr <= 300; fahr += 20)
    {
        printf("%3d %6.1f\n", fahr, (5.0/9.0) * (fahr-32));
    }
}
```

## Input
```
char c = getchar();// 输入

putchar();//打印



输入到输出：
#include <stdio.h>

int main()
{
    char c;

    c = getchar();
    while(c != EOF)
    {
        putchar(c);
        c = getchar();
    }
}
```

## char count
```
#include<stdio.h>

int main()
{
	long nc;
	char ch;

	while ((ch = getchar()) != EOF)
	{
		nc++;
	}
	printf("%ld\n", nc); //%ld就是代表int型加上long型，所以就代表long 型啦
}



//行计数
#include<stdio.h>

int main()
{
    int nc = 0;
    char c;
    
    while((c = getchar()) != EOF)
    {
        if (c == '\n')
            ++nc;
    }
    
    printf("%d\n", nc);
}
```
