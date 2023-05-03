import{_ as s,p as t,q as n,a1 as a}from"./framework-5866ffd3.js";const e={},o=a(`<h1 id="statistic" tabindex="-1"><a class="header-anchor" href="#statistic" aria-hidden="true">#</a> statistic</h1><div class="custom-container tip"><p class="custom-container-title">提示</p><p>会返回一些实时的统计信息。</p></div><h2 id="特殊返回码" tabindex="-1"><a class="header-anchor" href="#特殊返回码" aria-hidden="true">#</a> 特殊返回码</h2><p>无</p><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">type</td><td style="text-align:left;">String</td><td style="text-align:left;">请求类型</td></tr><tr><td style="text-align:left;">token</td><td style="text-align:left;">String</td><td style="text-align:left;">绑定用户的userID</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="请求" tabindex="-1"><a class="header-anchor" href="#请求" aria-hidden="true">#</a> 请求</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;statistic&quot;</span><span class="token punctuation">,</span> #请求类型
  <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span> #token，绑定用户的userID
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="响应" tabindex="-1"><a class="header-anchor" href="#响应" aria-hidden="true">#</a> 响应</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;userCount&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #MossFrp用户总数
  <span class="token property">&quot;codeCount&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #MossFrp在线隧道总数
  <span class="token property">&quot;nodeCount&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #MossFrp可用节点总数
  <span class="token property">&quot;signInCount&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #MossFrp今日签到总数
  <span class="token property">&quot;userCodeCount&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #该用户在线穿透码总数
  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;200&quot;</span><span class="token punctuation">,</span> #返回码
  <span class="token property">&quot;time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span> #响应时间
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),i=[o];function p(r,l){return t(),n("div",null,i)}const d=s(e,[["render",p],["__file","statistic.html.vue"]]);export{d as default};
