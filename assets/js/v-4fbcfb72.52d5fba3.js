(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[8626],{8902:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-4fbcfb72",path:"/collections/eachSpread.html",title:"eachSpread",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"Condition",slug:"condition",children:[]}],filePathRelative:"collections/eachSpread.md",git:{updatedTime:1617071741e3,contributors:[]}}},3891:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>b});var p=a(6252);const t=(0,p.uE)('<h1 id="eachspread"><a class="header-anchor" href="#eachspread">#</a> eachSpread</h1><p>迭代集合中的内容，<strong>不改变原集合</strong>的同时将其传递到回调函数中，通常用于二维数组的循环，在回调函数中给值命名。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;banners&quot;</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;California&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;apples&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;Florida&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;coconuts&quot;</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;Texas&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">eachSpread</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$product</span><span class="token punctuation">,</span> <span class="token variable">$qty</span><span class="token punctuation">,</span> <span class="token variable">$location</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">dump</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;We have <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$product</span><span class="token punctuation">}</span></span> <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$qty</span><span class="token punctuation">}</span></span> in our <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$location</span><span class="token punctuation">}</span></span> store.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n&quot;We have banners 45 in our California store.&quot;\n&quot;We have apples 20 in our Florida store.&quot;\n&quot;We have coconuts 60 in our Texas store.&quot;\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1249\n     all: [\n       [\n         &quot;banners&quot;,\n         45,\n         &quot;California&quot;,\n       ],\n       [\n         &quot;apples&quot;,\n         20,\n         &quot;Florida&quot;,\n       ],\n       [\n         &quot;coconuts&quot;,\n         60,\n         &quot;Texas&quot;,\n       ],\n     ],\n   <span class="token punctuation">}</span>\n*/</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h3 id="condition"><a class="header-anchor" href="#condition">#</a> Condition</h3>',4),e=(0,p.Uk)("跟 "),o={href:"/collections/each.md",target:"_blank",rel:"noopener noreferrer"},l=(0,p.Uk)("each"),u=(0,p.Uk)(" 方法的使用一致，也可以在回调函数中编写逻辑，当返回 "),c=(0,p.Wm)("code",null,"false",-1),r=(0,p.Uk)(" 后会停止循环。"),i=(0,p.uE)('<div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;banners&quot;</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;California&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;apples&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;Florida&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;coconuts&quot;</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;Texas&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">eachSpread</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$product</span><span class="token punctuation">,</span> <span class="token variable">$qty</span><span class="token punctuation">,</span> <span class="token variable">$location</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$qty</span> <span class="token operator">===</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token constant boolean">false</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">dump</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;We have <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$product</span><span class="token punctuation">}</span></span> <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$qty</span><span class="token punctuation">}</span></span> in our <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$location</span><span class="token punctuation">}</span></span> store.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n&quot;We have banners 45 in our California store.&quot;\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1253\n     all: [\n       [\n         &quot;banners&quot;,\n         45,\n         &quot;California&quot;,\n       ],\n       [\n         &quot;apples&quot;,\n         20,\n         &quot;Florida&quot;,\n       ],\n       [\n         &quot;coconuts&quot;,\n         60,\n         &quot;Texas&quot;,\n       ],\n     ],\n   <span class="token punctuation">}</span>\n*/</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><blockquote><p>可以看到当返回 <code>false</code> 时，循环终止。</p></blockquote>',2),b={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[t,(0,p.Wm)("p",null,[e,(0,p.Wm)("a",o,[l,(0,p.Wm)(a)]),u,c,r]),i],64)}}}}]);