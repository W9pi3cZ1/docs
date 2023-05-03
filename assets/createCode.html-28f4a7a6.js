import{_ as t,p as n,q as a,a1 as s}from"./framework-5866ffd3.js";const e={},o=s(`<h1 id="createcode" tabindex="-1"><a class="header-anchor" href="#createcode" aria-hidden="true">#</a> createCode</h1><div class="custom-container tip"><p class="custom-container-title">提示</p><p>通过请求自动创建穿透码，创建完成后需要一定时间给节点响应。<br> 后端不会提供确认机制，发了请求就直接创建了。</p></div><h2 id="特殊返回码" tabindex="-1"><a class="header-anchor" href="#特殊返回码" aria-hidden="true">#</a> 特殊返回码：</h2><p>&quot;403&quot; 各种错误原因，详见message参数</p><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">type</td><td style="text-align:left;">String</td><td style="text-align:left;">请求类型</td></tr><tr><td style="text-align:left;">token</td><td style="text-align:left;">String</td><td style="text-align:left;">绑定用户的userID</td></tr><tr><td style="text-align:left;">node</td><td style="text-align:left;">String</td><td style="text-align:left;">该穿透码的节点</td></tr><tr><td style="text-align:left;">date</td><td style="text-align:left;">Int</td><td style="text-align:left;">穿透码时长，单位：天</td></tr><tr><td style="text-align:left;">band</td><td style="text-align:left;">Int</td><td style="text-align:left;">穿透码带宽，单位：Mbps</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="请求" tabindex="-1"><a class="header-anchor" href="#请求" aria-hidden="true">#</a> 请求</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;createCode&quot;</span><span class="token punctuation">,</span> #请求类型
  <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #token，绑定用户的userID
  <span class="token property">&quot;node&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #该穿透码的节点
  <span class="token property">&quot;date&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #穿透码时长，单位：天
  <span class="token property">&quot;band&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span> #穿透码带宽，单位：Mbps
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="响应" tabindex="-1"><a class="header-anchor" href="#响应" aria-hidden="true">#</a> 响应</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;200&quot;</span><span class="token punctuation">,</span> #返回码
  <span class="token property">&quot;time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span> #响应时间
  <span class="token property">&quot;coin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #创建该穿透码所消耗的银币
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span> #所使用的货币类型（MIXED混合，GOLD金币，SILVER银币）
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),l=[o];function r(i,p){return n(),a("div",null,l)}const c=t(e,[["render",r],["__file","createCode.html.vue"]]);export{c as default};
