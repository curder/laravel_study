(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[4650],{4202:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-34c498c4",path:"/collections/search.html",title:"search",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"collections/search.md",git:{updatedTime:1616865921e3,contributors:[]}}},4398:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="search" tabindex="-1"><a class="header-anchor" href="#search" aria-hidden="true">#</a> search</h1><p>搜索给定的值并返回它的键。如果找不到，则返回 <code>false</code>。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">search</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>搜索使用「宽松」比较完成，这意味着具有整数值的字符串会被认为等于相同值的整数。</p><p>要使用「严格」比较，就传入 <code>true</code> 作为该方法的第二个参数：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">search</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;4&#39;</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>另外，可以通过回调来搜索第一个通过真实测试的项目：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">search</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">,</span> <span class="token variable">$key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token variable">$item</span> <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',8),e={render:function(n,s){return p}}}}]);