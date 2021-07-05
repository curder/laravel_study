(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[8527],{6127:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-552bc807",path:"/collections/reject.html",title:"reject",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"collections/reject.md",git:{updatedTime:1616865921e3,contributors:[]}}},8682:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>i});var e=a(6252);const p=(0,e.uE)('<h1 id="reject" tabindex="-1"><a class="header-anchor" href="#reject" aria-hidden="true">#</a> reject</h1><p>使用指定的回调过滤集合。如果回调返回 <code>true</code> ，就会把对应的项目从集合中移除。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">,</span> <span class="token variable">$key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token variable">$value</span> <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token doc-comment comment">/**\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1085\n     all: [\n       1,\n       2,\n     ],\n   <span class="token punctuation">}</span>\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>',3),t=(0,e.Uk)("与 "),c=(0,e.Wm)("code",null,"reject",-1),l=(0,e.Uk)(" 相反的方法，查看 "),o={href:"/collections/filter.md",target:"_blank",rel:"noopener noreferrer"},r=(0,e.Uk)("filter"),u=(0,e.Uk)(" 方法。"),i={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[p,(0,e.Wm)("p",null,[t,c,l,(0,e.Wm)("a",o,[r,(0,e.Wm)(a)]),u])],64)}}}}]);