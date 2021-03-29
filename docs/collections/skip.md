# skip

方法返回一个新集合，从集合的开头删除给定数量的元素。

```php
collect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])->skip(4);

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