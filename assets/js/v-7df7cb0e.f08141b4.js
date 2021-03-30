(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[9022],{977:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-7df7cb0e",path:"/collections/forget.html",title:"forget",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"改变原集合",slug:"改变原集合",children:[]}],filePathRelative:"collections/forget.md",git:{updatedTime:1617071741e3,contributors:[]}}},5710:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const e=(0,a(6252).uE)('<h1 id="forget"><a class="header-anchor" href="#forget">#</a> forget</h1><p>通过给定的键来移除掉集合中对应的内容。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;taylor&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;framework&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;laravel&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">forget</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1078\n     all: [\n       &quot;framework&quot; =&gt; &quot;laravel&quot;,\n     ],\n   <span class="token punctuation">}</span>\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><blockquote><p>与大多数集合的方法不同，<code>forget</code> 不会返回修改过后的新集合；它会直接修改原集合。</p></blockquote><h2 id="改变原集合"><a class="header-anchor" href="#改变原集合">#</a> 改变原集合</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;taylor&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;framework&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;laravel&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token variable">$newCollection</span> <span class="token operator">=</span> <span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">forget</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token variable">$newCollection</span><span class="token operator">-&gt;</span><span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">dd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\narray:1 [\n  &quot;framework&quot; =&gt; &quot;laravel&quot;\n]\narray:1 [\n  &quot;framework&quot; =&gt; &quot;laravel&quot;\n]\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>',6),t={render:function(n,s){return e}}}}]);