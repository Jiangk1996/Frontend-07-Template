学习笔记

一. 算法学习

1.寻路算法
定义数据结构以及存与取的规则（取最大、最小、距离最远等）及A*算法

2.LL算法构建数值表达式的AST树
乘/除   加/减   EOF
单独一个数作为乘法表达式

3.字符串分析算法
1）字典树
  用树来表示一个字符串，定义一个Trie数据结构统计出现最多（最少）的字符串
2） kmp
  一个字符串里寻找另一个字符串的算法，通过判断字符串自身是否重复来优化寻找算法
3）wildcard
  一个字符串里寻找另一个字符串的算法（存在*与？符号的复杂寻找算法）

二.编程练习

1.下棋AI： 通过递归判断BestChoice来找到最优解

2.寻路：通过在当前的点保存上一点的坐标来记录路线

3.proxy：Vue3 的reactive原理

4.正常流中的拖拽： Range对象：一个包含节点与文本节点的一部分的文档片段   相关api
