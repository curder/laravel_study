(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[4288],{2825:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-c6d6b0d2",path:"/collections/whereInStrict.html",title:"whereInStrict",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"不改变原集合",slug:"不改变原集合",children:[]}],filePathRelative:"collections/whereInStrict.md",git:{updatedTime:1617071741e3,contributors:[]}}},4930:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>r});var t=a(6252);const p=(0,t.uE)('<h1 id="whereinstrict"><a class="header-anchor" href="#whereinstrict">#</a> whereInStrict</h1><p>通过给定的键值数组来过滤集合。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n\t<span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;apples&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;50&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;pears&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;60&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;banners&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;70&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;coconuts&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;80&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">whereInStrict</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;price&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1242\n     all: [],\n   <span class="token punctuation">}</span>\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="不改变原集合"><a class="header-anchor" href="#不改变原集合">#</a> 不改变原集合</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n\t<span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;apples&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;50&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;pears&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;60&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;banners&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;70&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;coconuts&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;80&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token variable">$newCollection</span> <span class="token operator">=</span> <span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">whereInStrict</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;price&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token variable">$newCollection</span><span class="token operator">-&gt;</span><span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">dd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n[]\n\narray:4 [\n  0 =&gt; array:2 [\n    &quot;product&quot; =&gt; &quot;apples&quot;\n    &quot;price&quot; =&gt; &quot;50&quot;\n  ]\n  1 =&gt; array:2 [\n    &quot;product&quot; =&gt; &quot;pears&quot;\n    &quot;price&quot; =&gt; &quot;60&quot;\n  ]\n  2 =&gt; array:2 [\n    &quot;product&quot; =&gt; &quot;banners&quot;\n    &quot;price&quot; =&gt; &quot;70&quot;\n  ]\n  3 =&gt; array:2 [\n    &quot;product&quot; =&gt; &quot;coconuts&quot;\n    &quot;price&quot; =&gt; &quot;80&quot;\n  ]\n]\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div>',5),e=(0,t.Uk)("此方法的使用和 "),o={href:"/collections/whereIn.md",target:"_blank",rel:"noopener noreferrer"},c=(0,t.Uk)("whereIn"),l=(0,t.Uk)(" 方法类似，只是使用了「严格」比较来匹配所有值。"),r={render:function(n,s){const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.j4)(t.HY,null,[p,(0,t.Wm)("p",null,[e,(0,t.Wm)("a",o,[c,(0,t.Wm)(a)]),l])],64)}}}}]);