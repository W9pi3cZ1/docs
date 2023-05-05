import{_ as s,p as n,q as a,a1 as t}from"./framework-5866ffd3.js";const o={},p=t(`<h1 id="allnode" tabindex="-1"><a class="header-anchor" href="#allnode" aria-hidden="true">#</a> allNode</h1><div class="custom-container tip"><p class="custom-container-title">提示</p><p>也是挺重要的，毕竟不指望用户会去背下来全部节点。<br> 返回数据量有点大，你↗要↘忍↗一↘下↗。</p></div><h2 id="特殊返回码" tabindex="-1"><a class="header-anchor" href="#特殊返回码" aria-hidden="true">#</a> 特殊返回码</h2><p>&quot;404&quot; 账号或密码错误</p><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">type</td><td style="text-align:left;">String</td><td style="text-align:left;">请求类型</td></tr><tr><td style="text-align:left;">token</td><td style="text-align:left;">String</td><td style="text-align:left;">绑定用户的userID</td></tr><tr><td style="text-align:left;">getAsList</td><td style="text-align:left;">String</td><td style="text-align:left;">是否以List的形式获取数据</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="请求" tabindex="-1"><a class="header-anchor" href="#请求" aria-hidden="true">#</a> 请求</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;allNode&quot;</span><span class="token punctuation">,</span> #请求类型
  <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #token，绑定用户的userID
  <span class="token property">&quot;getAsList&quot;</span><span class="token operator">:</span> <span class="token string">&quot;true&quot;</span> #是否以List的形式获取数据，可选参数，默认<span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getaslist不为true响应" tabindex="-1"><a class="header-anchor" href="#getaslist不为true响应" aria-hidden="true">#</a> getAsList不为true响应</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;200&quot;</span><span class="token punctuation">,</span> #返回码
  <span class="token property">&quot;time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span> #响应时间
  <span class="token property">&quot;nodeList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> #节点列表
    <span class="token string">&quot;ab1&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;ab2&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;nodeData&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;ab1&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> #节点编号
      <span class="token property">&quot;node&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ab1&quot;</span><span class="token punctuation">,</span> #节点编号
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #地区以及网络类型
      <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #节点状态
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ab1-xxx&quot;</span><span class="token punctuation">,</span> #节点显示名称
      <span class="token property">&quot;activity&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #是否为活动节点（活动节点所创建/续期/升配的穿透码都会变成活动穿透码）
      <span class="token property">&quot;load&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx%&quot;</span><span class="token punctuation">,</span> #节点负载（只有一个的话，就说明是旧版节点，只显示理论负载）
      <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #价格，单位见coin
      <span class="token property">&quot;band-max-per&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #单穿透码最高带宽，不代表节点实际最大带宽
      <span class="token property">&quot;coin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #购买类型（gold是只能金币购买，silver是只能银币购买，mixed是都可以）
      <span class="token property">&quot;uploadTotal&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #上传流量总量
      <span class="token property">&quot;downloadTotal&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #下载流量总量
      <span class="token property">&quot;uploadBand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #上传实时带宽
      <span class="token property">&quot;downloadBand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #下载实时带宽
      <span class="token property">&quot;CPUUsage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #CPU占用
      <span class="token property">&quot;memoryUsed&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #内存占用
      <span class="token property">&quot;memoryTotal&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #内存总量
      <span class="token property">&quot;info&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span> #节点信息或备注
    <span class="token punctuation">}</span><span class="token punctuation">,</span> #下面同上，只是表现返回多个节点时候的数据结构
    <span class="token property">&quot;ab2&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;node&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ab2&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ab2-xxx&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;activity&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;load&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx% | xxx%&quot;</span><span class="token punctuation">,</span> #这里后面那个是实际上行带宽负载
      <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;band-max-per&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;coin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;uploadTotal&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;downloadTotal&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;uploadBand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;downloadBand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;CPUUsage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;memoryUsed&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;memoryTotal&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;info&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getaslist为true的响应" tabindex="-1"><a class="header-anchor" href="#getaslist为true的响应" aria-hidden="true">#</a> getAsList为true的响应</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;200&quot;</span><span class="token punctuation">,</span> #返回码
  <span class="token property">&quot;time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span> #响应时间
  <span class="token property">&quot;nodeData&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> #节点编号
      <span class="token property">&quot;node&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ab1&quot;</span><span class="token punctuation">,</span> #节点编号
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #地区以及网络类型
      <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>  #节点状态
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ab1-xxx&quot;</span><span class="token punctuation">,</span> #节点显示名称
      <span class="token property">&quot;activity&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #是否为活动节点（活动节点所创建/续期/升配的穿透码都会变成活动穿透码）
      <span class="token property">&quot;load&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx%&quot;</span><span class="token punctuation">,</span> #节点负载（只有一个的话，就说明是旧版节点，只显示理论负载）
      <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #价格，单位见coin
      <span class="token property">&quot;band-max-per&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #单穿透码最高带宽，不代表节点实际最大带宽
      <span class="token property">&quot;coin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #购买类型（gold是只能金币购买，silver是只能银币购买，mixed是都可以）
      <span class="token property">&quot;uploadTotal&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #上传流量总量
      <span class="token property">&quot;downloadTotal&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #下载流量总量
      <span class="token property">&quot;uploadBand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #上传实时带宽
      <span class="token property">&quot;downloadBand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #下载实时带宽
      <span class="token property">&quot;CPUUsage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #CPU占用
      <span class="token property">&quot;memoryUsed&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #内存占用
      <span class="token property">&quot;memoryTotal&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> #内存总量
      <span class="token property">&quot;info&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span> #节点信息或备注
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;node&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ab2&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ab2-xxx&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;activity&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;load&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx% | xxx%&quot;</span><span class="token punctuation">,</span> #这里后面那个是实际上行带宽负载
      <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;band-max-per&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;coin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;uploadTotal&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;downloadTotal&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;uploadBand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;downloadBand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;CPUUsage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;memoryUsed&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;memoryTotal&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;info&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),e=[p];function l(u,r){return n(),a("div",null,e)}const i=s(o,[["render",l],["__file","allNode.html.vue"]]);export{i as default};