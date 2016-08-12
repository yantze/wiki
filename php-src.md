查看 php 源代码
---

本文摘自 小子：http://type.so
1.1 查找函数
```
# 所有php函数
ag 'PHP_FUNCTION\(\w+\)'
# 指定php函数
ag 'PHP_FUNCTION\(array_flip\)'
```

自定义个 shell 函数，方便搜索
```
function phpsrc
{
    ag 'PHP_FUNCTION\('"$1"'\)' "$2"
}
```

快速定位 php 中的语言结构
```
# Zend/zend_compile.c
ag 'void zend_do_' Zend/zend_compile.c
```

1.2 [一些预定义解释](http://type.so/c/php-extension-doc-collection.html)

1.3 定义常量
```
PHP_MINIT_FUNCTION(learn)
{
    // CONST_CS 区分大小写
    // CONST_PERSISTENT 在模块加载的时候都是有效的，否则每次 request 之后就会删除
    REGISTER_BOOL_CONSTANT("LEARN", 1, CONST_CS | CONST_PERSISTENT);

    return SUCCESS;
}
```

1.4 定义类
```
zend_class_entry *learn_ce;

ZEND_BEGIN_ARG_INFO_EX(arginfo_learn___construct, 0, 0, 1)
    ZEND_ARG_INFO(0, name)
ZEND_END_ARG_INFO()

// Learn::__construct 的实现
ZEND_METHOD(learn, __construct) {
    char *name = "tianzi", *methodName;
    zval *method, *callResult, *instance;
    int nameLen = strlen(name);
    // 带有默认值的传入参数
    if (zend_parse_parameters(ZEND_NUM_ARGS() TSRMLS_CC, "|s", &name, &nameLen) == FAILURE) {
        RETURN_NULL();
    }
    instance = getThis();
    // 更新类的属性
    zend_update_property_stringl(learn_ce, instance, ZEND_STRL("name"), ZEND_STRL(name) TSRMLS_DC);
}
// Learn::hi 的实现
ZEND_METHOD(learn, hi) {
    zval *instance = getThis();
    // 读取类的属性
    zval *name = zend_read_property(learn_ce, instance, ZEND_STRL("name"), 0 TSRMLS_CC);
    char *theName = estrndup(Z_STRVAL_P(name), Z_STRLEN_P(name));
    php_printf("hi %s\n", theName);
    efree(theName);
}
// 类方法的属性
static zend_function_entry learn_methods[] = {
    ZEND_ME(learn, __construct, arginfo_learn___construct, ZEND_ACC_PUBLIC | ZEND_ACC_CTOR)
    ZEND_ME(learn, hi, NULL, ZEND_ACC_PUBLIC)
    {NULL, NULL, NULL}
};

PHP_MINIT_FUNCTION(learn)
{
    zend_class_entry ce;
    INIT_CLASS_ENTRY(ce, "Learn", learn_methods);
    // 注册类
    learn_ce = zend_register_internal_class(&ce TSRMLS_CC);
    // 定义类属性
    zend_declare_property_null(learn_ce, ZEND_STRL("name"), ZEND_ACC_PUBLIC TSRMLS_CC);

    return SUCCESS;
}
```

1.5 调用类
```
PHP_FUNCTION(learn_call) {
    // 实例化类
    zval *learn;
    MAKE_STD_ZVAL(learn);
    object_init_ex(learn, learn_ce);

    char *name = "xiaozi";
    char *methodName = "__construct";
    zval *param, *method, *callResult;
    zval **params[1];
    MAKE_STD_ZVAL(method);
    ZVAL_STRINGL(method, methodName, strlen(methodName), 1);
    MAKE_STD_ZVAL(param);
    ZVAL_STRINGL(param, name, strlen(name), 1);
    params[0] = &param;
    // 调用类的 __construct 方法
    call_user_function_ex(&(learn_ce)->function_table, &learn, method, &callResult, 1, params, 0, NULL TSRMLS_CC);
    zval_ptr_dtor(&method);
    zval_ptr_dtor(&param);
    zval_ptr_dtor(&learn);
    if (callResult) {
        zval_ptr_dtor(&callResult);
    }
}
```

1.6 数组操作
```
# 初始化数组
zval *arr;
MAKE_STD_ZVAL(arr);
array_init(arr);

# 插入和更新
// 索引
add_index_bool(arr, 10, 1);
add_next_index_long(arr, 1000);
// 关联数组
add_assoc_stringl(arr, "name", ZEND_STRL("xiaozi"), 1);

# 查找和删除
char *name = "name";
int nameLen = strlen(name);
// 查找
zend_hash_exists(Z_ARRVAL_P(arr), name, nameLen + 1);
// 删除
zend_hash_del(Z_ARRVAL_P(arr), name, nameLen + 1);

# 读取
char *name = "name";
int nameLen = strlen(name);
zval **value;
if (zend_hash_find(Z_ARRVAL_P(attributes), name, nameLen + 1, (void **)&value) == SUCCESS) {
    php_var_dump(value, 1 TSRMLS_CC);
}
```

```
http://type.so/c/php-extension-in-action-get-arguments-after-zend-execute-ex.html
http://type.so/c/php-extension-in-action-implements-builtin-interface.html
http://type.so/c/php-extension-doc-collection.html
https://gist.github.com/denji/8e50fcb13482c5d6c78a
```

1.7 从 php 内核挂载钩子解密源码 [from](http://type.so/c/php-dump-eval.html)
```
static zend_op_array *edump_compile_string(zval *source_string, char *filename TSRMLS_DC)
{
    int c, len;
    char *copy;
 
    if (Z_TYPE_P(source_string) != IS_STRING) {
        return orig_compile_string(source_string, filename TSRMLS_CC);
    }
 
    len  = Z_STRLEN_P(source_string);
    copy = estrndup(Z_STRVAL_P(source_string), len);
    if (len > strlen(copy)) {
        for (c=0; c<len; c++) if (copy[c] == 0) copy[c] == '?';
    }
 
    php_printf("----- [tool.lu start] -----\n");
    php_printf("%s\n", copy);
    php_printf("----- [tool.lu end] -----\n");
 
    yes = 1;

    return orig_compile_string(source_string, filename TSRMLS_CC);
}

PHP_MINIT_FUNCTION(edump)
{
    if (edump_hooked == 0) {
        edump_hooked = 1;
        orig_compile_string = zend_compile_string;
        zend_compile_string = edump_compile_string;
    }
    return SUCCESS;
}
```
