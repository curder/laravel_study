# slice

返回集合中给定值后面的部分。

```php
collect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])->slice(4);

/**
=> Illuminate\Support\Collection {#1087
     all: [
       4 => 5,
       5 => 6,
       6 => 7,
       7 => 8,
       8 => 9,
       9 => 10,
     ],
   }
 */
```

如果想限制返回内容的大小，就将期望的大小作为第二个参数传递给方法。

```php
collect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])->slice(4, 2);

/**
=> Illuminate\Support\Collection {#1089
     all: [
       4 => 5,
       5 => 6,
     ],
   }
 */
```

默认情况下，返回的内容将会保留原始键。假如不需要保留原始的键，可以使用 [values](/collections/values.md) 方法来重新建立索引。


