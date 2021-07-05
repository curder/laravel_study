(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[684],{6136:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-513f8276",path:"/collections/keyBy.html",title:"keyBy",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"collections/keyBy.md",git:{updatedTime:1616865921e3,contributors:[]}}},674:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>p});const t=(0,a(6252).uE)('<h1 id="keyby" tabindex="-1"><a class="header-anchor" href="#keyby" aria-hidden="true">#</a> keyBy</h1><p>以给定的键作为集合的键。如果多个项目具有相同的键，则只有最后一个项目会显示在新集合中。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;prod-100&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;desk&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;prod-200&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;chair&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">keyBy</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;product_id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token doc-comment comment">/**\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1086\n     all: [\n       &quot;prod-100&quot; =&gt; [\n         &quot;product_id&quot; =&gt; &quot;prod-100&quot;,\n         &quot;name&quot; =&gt; &quot;desk&quot;,\n       ],\n       &quot;prod-200&quot; =&gt; [\n         &quot;product_id&quot; =&gt; &quot;prod-200&quot;,\n         &quot;name&quot; =&gt; &quot;chair&quot;,\n       ],\n     ],\n   <span class="token punctuation">}</span>\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>也可以传入一个回调方法，回调返回的值会作为该集合的键</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;prod-100&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;desk&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;prod-200&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;chair&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">keyBy</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">strtoupper</span><span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product_id&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token doc-comment comment">/**\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1095\n     all: [\n       &quot;PROD-100&quot; =&gt; [\n         &quot;product_id&quot; =&gt; &quot;prod-100&quot;,\n         &quot;name&quot; =&gt; &quot;desk&quot;,\n       ],\n       &quot;PROD-200&quot; =&gt; [\n         &quot;product_id&quot; =&gt; &quot;prod-200&quot;,\n         &quot;name&quot; =&gt; &quot;chair&quot;,\n       ],\n     ],\n   <span class="token punctuation">}</span> \n*/</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>',5),p={render:function(n,s){return t}}}}]);