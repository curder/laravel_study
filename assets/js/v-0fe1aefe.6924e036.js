(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[3624],{5037:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-0fe1aefe",path:"/collections/mapToGroup.html",title:"mapToGroup",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"不改变原集合",slug:"不改变原集合",children:[]}],filePathRelative:"collections/mapToGroup.md",git:{updatedTime:1616865921e3,contributors:[]}}},4951:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h1 id="maptogroup"><a class="header-anchor" href="#maptogroup">#</a> mapToGroup</h1><p>该闭包应返回一个包含单个键/值对的关联数组，从而形成一个新的分组值集合</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;apples&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">59</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;apples&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">69</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;bananas&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">54</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;bananas&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">94</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">mapToGroups</span><span class="token punctuation">(</span><span class="token function">fn </span><span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token variable">$item</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span><span class="token punctuation">]</span> <span class="token operator">=&gt;</span> <span class="token variable">$item</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;price&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1245\n     all: [\n       &quot;apples&quot; =&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1247\n         all: [\n           59,\n           69,\n         ],\n       <span class="token punctuation">}</span>,\n       &quot;bananas&quot; =&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1246\n         all: [\n           54,\n           94,\n         ],\n       <span class="token punctuation">}</span>,\n     ],\n   <span class="token punctuation">}</span>\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="不改变原集合"><a class="header-anchor" href="#不改变原集合">#</a> 不改变原集合</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;apples&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">59</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;apples&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">69</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;bananas&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">54</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;bananas&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">94</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token variable">$newCollection</span> <span class="token operator">=</span> <span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">mapToGroups</span><span class="token punctuation">(</span><span class="token function">fn </span><span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token variable">$item</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span><span class="token punctuation">]</span> <span class="token operator">=&gt;</span> <span class="token variable">$item</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;price&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token variable">$newCollection</span><span class="token operator">-&gt;</span><span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">dd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\narray:2 [\n  &quot;apples&quot; =&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1257\n    #items: array:2 [\n      0 =&gt; 59\n      1 =&gt; 69\n    ]\n  <span class="token punctuation">}</span>\n  &quot;bananas&quot; =&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1256\n    #items: array:2 [\n      0 =&gt; 54\n      1 =&gt; 94\n    ]\n  <span class="token punctuation">}</span>\n]\n\narray:4 [\n  0 =&gt; array:2 [\n    &quot;product&quot; =&gt; &quot;apples&quot;\n    &quot;price&quot; =&gt; 59\n  ]\n  1 =&gt; array:2 [\n    &quot;product&quot; =&gt; &quot;apples&quot;\n    &quot;price&quot; =&gt; 69\n  ]\n  2 =&gt; array:2 [\n    &quot;product&quot; =&gt; &quot;bananas&quot;\n    &quot;price&quot; =&gt; 54\n  ]\n  3 =&gt; array:2 [\n    &quot;product&quot; =&gt; &quot;bananas&quot;\n    &quot;price&quot; =&gt; 94\n  ]\n]\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div>',5),t={render:function(n,s){return p}}}}]);