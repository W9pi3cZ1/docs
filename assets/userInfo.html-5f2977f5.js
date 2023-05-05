import{_ as n,p as s,q as a,a1 as t}from"./framework-5866ffd3.js";const e={},o=t(`<h1 id="userinfo" tabindex="-1"><a class="header-anchor" href="#userinfo" aria-hidden="true">#</a> userInfo</h1><div class="custom-container tip"><p class="custom-container-title">提示</p><p>也是一个必需的请求。会返回用户所有的非隐私信息。</p></div><h2 id="特殊返回码" tabindex="-1"><a class="header-anchor" href="#特殊返回码" aria-hidden="true">#</a> 特殊返回码</h2><p>无</p><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">type</td><td style="text-align:left;">String</td><td style="text-align:left;">请求类型</td></tr><tr><td style="text-align:left;">token</td><td style="text-align:left;">String</td><td style="text-align:left;">绑定用户的userID</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="请求" tabindex="-1"><a class="header-anchor" href="#请求" aria-hidden="true">#</a> 请求</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;userInfo&quot;</span><span class="token punctuation">,</span> #请求类型
  <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span> #token，绑定用户的userID
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求-1" tabindex="-1"><a class="header-anchor" href="#请求-1" aria-hidden="true">#</a> 请求</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;200&quot;</span><span class="token punctuation">,</span> #返回码
  <span class="token property">&quot;time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span> #响应时间
  <span class="token property">&quot;userInfo&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> #返回的用户信息列表，为JSON信息
    <span class="token property">&quot;userID&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #用户编号
    <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #用户名称
    <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #邮箱
    <span class="token property">&quot;qq&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #QQ，可能为<span class="token null keyword">null</span>
    <span class="token property">&quot;signIn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #用户是否签到，布尔值
    <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #用户等级（admin站长、staff管理员、provider节点提供者、default普通用户、banned封禁用户）
    <span class="token property">&quot;gold&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #金币数量
    <span class="token property">&quot;silver&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span> #银币数量
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),p=[o];function l(i,r){return s(),a("div",null,p)}const c=n(e,[["render",l],["__file","userInfo.html.vue"]]);export{c as default};
