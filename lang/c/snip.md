c结构体
```c
typedef long byte_4;
typedef struct tagMyStruct MyStruct;
//规范自指结构体
struct tagNode
{
　char *pItem;
　struct tagNode *pNext;
};
typedef struct tagNode *pNode; 
// http://blog.csdn.net/borenbao/article/details/550978
```

记算时间
```c
clock_t begin, end;
//执行代码
begin = clock();
end = clock();
cout << "encoded(ms):" << end - begin << endl;
```

内存泄漏
```c
#ifdef _DEBUG 
#define DEBUG_CLIENTBLOCK new( _CLIENT_BLOCK, __FILE__, __LINE__) 
#else 
#define DEBUG_CLIENTBLOCK 
#endif 
#define _CRTDBG_MAP_ALLOC 

#ifdef _DEBUG 
#define new DEBUG_CLIENTBLOCK 
#endif 

     _CrtDumpMemoryLeaks();
```
