import{_ as s,c as i,o as a,a4 as e}from"./chunks/framework.BCDg3NR7.js";const n="/yue-blog-public/assets/image-20240528142138254.BLoHmOb_.png",t="/yue-blog-public/assets/image-20240528142234172.CC8UOYua.png",p="/yue-blog-public/assets/image-20240528142457134.CmSAFxWG.png",l="/yue-blog-public/assets/image-20240528142524470.0jVOFwNZ.png",r="/yue-blog-public/assets/image-20240528142619042.D157rG39.png",h="/yue-blog-public/assets/image-20240528145853915.CFl0OU7O.png",d="/yue-blog-public/assets/image-20240528150839436.CSCOjD_x.png",o="/yue-blog-public/assets/image-20240528151329590.2Y_adAoS.png",c="/yue-blog-public/assets/image-20240528151606771.BFjPBs5Q.png",g="/yue-blog-public/assets/image-20240528153058993.DrWgY1f1.png",k="/yue-blog-public/assets/image-20240528153154013.CnTMpvO2.png",D=JSON.parse('{"title":"Git撤销提交操作","description":"","frontmatter":{},"headers":[],"relativePath":"articles/07-others/代码规范/Git撤销提交操作.md","filePath":"articles/07-others/代码规范/Git撤销提交操作.md","lastUpdated":1717379758000}'),u={name:"articles/07-others/代码规范/Git撤销提交操作.md"},b=e(`<h1 id="git撤销提交操作" tabindex="-1">Git撤销提交操作 <a class="header-anchor" href="#git撤销提交操作" aria-label="Permalink to &quot;Git撤销提交操作&quot;">​</a></h1><h2 id="git-revert" tabindex="-1">git revert <a class="header-anchor" href="#git-revert" aria-label="Permalink to &quot;git revert&quot;">​</a></h2><h3 id="_1-命令介绍" tabindex="-1">1.命令介绍 <a class="header-anchor" href="#_1-命令介绍" aria-label="Permalink to &quot;1.命令介绍&quot;">​</a></h3><p><code>git revert</code> 是 Git 中的一个命令，用于撤销一个或多个提交的更改，但与 <code>git reset</code> 不同的是，<code>git revert</code> 会保留历史记录。<code>git revert</code> 实际上是通过创建一个新的提交来撤销先前的提交。这个新的提交会包含与原始提交相反的更改。</p><p>这里是 <code>git revert</code> 的主要特点和用法：</p><ol><li><strong>保留历史记录</strong>：当你使用 <code>git revert</code> 时，Git 会创建一个新的提交来撤销之前提交的更改。这意味着你的提交历史是线性的，并且每个更改都是可追踪的。</li><li><strong>不会改变历史</strong>：与 <code>git reset</code> 不同，<code>git revert</code> 不会重写历史。它只是添加了一个新的提交来撤销之前的更改。</li><li><strong>撤销多个提交</strong>：你可以使用 <code>git revert -m</code> 选项（在合并提交时）或多次运行 <code>git revert</code> 来撤销多个提交的更改。</li><li><strong>合并冲突</strong>：由于 <code>git revert</code> 是通过创建一个新的提交来工作的，所以如果你正在撤销的更改与你的当前工作树或索引中的更改有冲突，那么你会得到一个合并冲突。你需要解决这些冲突，然后提交更改。</li></ol><p>基本用法：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 撤销最近的提交</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> revert</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 撤销指定提交的更改</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> revert</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">commit-has</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 撤销多个提交的更改（例如，撤销最近的两个提交）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> revert</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD^</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD^^</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 或者使用 commit hash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> revert</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">commit-hash-</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">1&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">commit-hash-</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">2&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>请注意，如果你只是想撤销最近的提交并且该提交是最近的几次提交之一（即它没有被其他分支或推送引用），那么 <code>git reset</code> 可能是一个更简单、更快的选择。但是，如果你希望保留完整的提交历史记录，或者如果你正在撤销的提交已经被其他人拉取或推送，那么 <code>git revert</code> 是更好的选择。</p><h3 id="_2-实例演示" tabindex="-1">2.实例演示 <a class="header-anchor" href="#_2-实例演示" aria-label="Permalink to &quot;2.实例演示&quot;">​</a></h3><p>先查看历史提交记录：</p><p><img src="`+n+`" alt="image-20240528142138254"></p><p>这里将最近的一次提交记录撤销，执行命令：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 撤销最近的提交</span></span>
<span class="line"><span>git revert HEAD</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="`+t+`" alt="image-20240528142234172"></p><p>上面文件可写撤销提交的原因，也可不写，我这里没写。:qa + enter键撤销 【vscode】</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>使用vim语法进行录入提交说明：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>执行命令后，控制台会出现vim编辑器，我们需要更改提交说明</span></span>
<span class="line"><span>通过vim编辑器，【按住】键盘i，进入插入模式，并通过【键盘上下/鼠标滚轮】找到最下面一行，录入更改提交说明</span></span>
<span class="line"><span>【按住】 Esc 键退出插入模式，并输入:wq 加回车自动保存</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>撤销成功：</p><p><img src="`+p+'" alt="image-20240528142457134"></p><p><img src="'+l+'" alt="image-20240528142524470"></p><p><img src="'+r+'" alt="image-20240528142619042"></p><p>可以看到可以成功撤销最近的一次提交，但会留下历史记录。</p><h3 id="_3-相关疑问" tabindex="-1">3.相关疑问 <a class="header-anchor" href="#_3-相关疑问" aria-label="Permalink to &quot;3.相关疑问&quot;">​</a></h3><p><strong>Q1.撤销最近的提交是撤销自己的提交吗，假如分支最近提交是其他开发者提交的，那执行这条命令的效果是什么呢?</strong></p><p>当你执行 <code>git revert HEAD</code> 命令时，你实际上是在撤销当前分支上最新的提交，无论这个提交是由谁（你自己还是其他开发者）提交的。这个操作会创建一个新的提交，该提交包含了与原始提交相反的更改，从而“撤销”了原始提交的效果。</p><p>具体效果如下：</p><ol><li><p><strong>创建一个新的撤销提交</strong>：Git 会创建一个新的提交，这个提交将撤销 <code>HEAD</code>（即最新提交）所做的所有更改。这个新的提交会被添加到当前分支的历史记录中。</p></li><li><p><strong>原始提交仍然存在</strong>：被撤销的原始提交（无论是谁提交的）仍然存在于 Git 的历史记录中。新的撤销提交会作为历史记录的一部分被添加进来。</p></li><li><p><strong>共享给其他开发者</strong>：一旦你推送（<code>git push</code>）了这个新的撤销提交到远程仓库，其他开发者在拉取（<code>git pull</code>）或合并（<code>git merge</code>）这些更改时，他们的本地仓库也会包含这个新的撤销提交。这样，所有开发者都将看到撤销了原始提交的效果。</p></li><li><p><strong>可能的合并冲突</strong>：如果其他开发者已经在他们的本地仓库中基于原始提交进行了新的工作，那么当他们尝试拉取或合并这个撤销提交时，可能会遇到合并冲突。这是因为撤销提交与他们的更改可能存在冲突。他们需要解决这些冲突，然后才能成功合并。</p></li><li><p><strong>通知其他开发者</strong>：由于撤销提交可能会影响到其他开发者的工作，因此最好在执行 <code>git revert</code> 操作之前与其他开发者进行沟通，让他们了解即将发生的更改，并准备好相应地更新他们的工作。</p></li></ol><p>总之，<code>git revert HEAD</code> 会撤销当前分支上最新的提交，无论这个提交是由谁提交的。这个操作会创建一个新的撤销提交，并将其添加到历史记录中。其他开发者在拉取或合并这些更改时，也会看到这个新的撤销提交。</p><p><strong>Q2.revert撤销倒数第2次提交，会影响倒数第一次提交的内容吗</strong></p><p>如果两次提交的内容没有文件重合，及倒数第一次提交只涉及A,B,C三个文件，倒数第二次的提交只涉及D文件，那么撤销倒数第二次的提交，不会影响第一次的提交。</p><p>但是，如果倒数第一次和倒数第二次提交都涉及到文件A，则撤销倒数第二次提交时，会提示存在冲突，需要手动解决冲突后再push.</p><p>如图，两次提交修改了同一个文件，那么撤销时会存在冲突：</p><p><img src="'+h+'" alt="image-20240528145853915"></p><h2 id="git-reset" tabindex="-1">git reset <a class="header-anchor" href="#git-reset" aria-label="Permalink to &quot;git reset&quot;">​</a></h2><h3 id="_1-命令介绍-1" tabindex="-1">1.命令介绍 <a class="header-anchor" href="#_1-命令介绍-1" aria-label="Permalink to &quot;1.命令介绍&quot;">​</a></h3><p><code>git reset</code> 是 Git 中的一个强大命令，用于重置当前 HEAD 到指定的状态。这个命令可以用来撤销提交，但它与 <code>git revert</code> 有一些重要的区别。</p><p><strong>撤销最新提交，并保留修改</strong></p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --soft</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD~1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>撤销最新提交，并将暂存区的文件取消暂存</strong></p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD~1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>撤销最新提交，并丢弃所有更改</strong></p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --hard</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD~1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>将 HEAD 指针移动到指定commit-hash，用来回溯历史提交</strong></p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --hard</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">commit-has</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>详细：</strong></p><p><code>git reset</code> 的三种主要模式（--soft, --mixed, --hard）决定了工作目录、暂存区（index/staging area）和提交历史会如何被影响。</p><ol><li><p><strong>--soft</strong> 使用 <code>--soft</code> 选项时，HEAD 会被移动到指定的提交，但是暂存区和工作目录中的内容不会被改变。这意味着所有在指定提交之后所做的更改都已经被暂存，你可以直接进行下一次提交，或者将暂存的更改撤回到工作目录中。</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --soft</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD~2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这条命令会将 HEAD 指向倒数第三次提交，但是倒数第二次和最后一次提交的更改仍然被暂存。</p></li><li><p><strong>--mixed（默认）</strong> 如果不指定任何选项，<code>git reset</code> 默认使用 <code>--mixed</code> 选项。这会将 HEAD 移动到指定的提交，并且会重置暂存区，但不会改变工作目录。这意味着所有在指定提交之后被暂存的更改会回到工作目录中，但不会被撤销（即它们仍然作为未跟踪的更改存在于工作目录中）。</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD~2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>或者</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --mixed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD~2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这条命令会将 HEAD 指向倒数第三次提交，并且将倒数第二次和最后一次提交的更改从暂存区中移除，但它们仍然会出现在工作目录中。</p></li><li><p><strong>--hard</strong> 使用 <code>--hard</code> 选项时，HEAD 会被移动到指定的提交，并且工作目录和暂存区中的内容也会被重置为这个提交时的状态。这意味着所有在指定提交之后所做的更改都会被丢弃。</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --hard</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD~2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这条命令会将 HEAD 指向倒数第三次提交，并且会丢弃倒数第二次和最后一次提交的所有更改。</p></li></ol><p><strong>注意</strong>：使用 <code>git reset --hard</code> 时需要特别小心，因为它会丢弃所有的未提交更改。如果你还没有将这些更改提交到 Git 仓库中，并且没有备份，那么这些更改将永远丢失。</p><p><strong>撤销提交的影响</strong>：</p><ul><li>使用 <code>git reset</code> 撤销提交会改变 Git 的提交历史。这意味着其他开发者在拉取（pull）或合并（merge）你的更改时，他们可能会遇到问题，特别是如果他们已经在你的撤销提交之后进行了提交。</li><li>撤销提交后，你应该考虑通知其他开发者你的更改，并建议他们如何更新他们的本地仓库。这通常可以通过推送（push）你的更改到一个新的分支，并请求其他人从该分支拉取（pull）或合并（merge）来实现。</li><li>如果你已经推送了你的提交到远程仓库，并且想要使用 <code>git reset</code> 来撤销它们，你需要使用 <code>git push --force</code>（或简写为 <code>git push -f</code>）来强制推送你的更改到远程仓库。但是，这同样需要特别小心，因为它会覆盖远程仓库中的提交历史。你应该确保你的团队成员都了解这一更改，并同意这一操作。</li></ul><h3 id="_2-实例演示-1" tabindex="-1">2.实例演示 <a class="header-anchor" href="#_2-实例演示-1" aria-label="Permalink to &quot;2.实例演示&quot;">​</a></h3><p>我们要使用reset撤销下面图中所示提交。</p><p><img src="'+d+'" alt="image-20240528150839436"></p><p>执行命令或使用vscode工具界面操作：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git reset --soft HEAD~1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+o+'" alt="image-20240528151329590"></p><p>执行命令后：</p><p><img src="'+c+'" alt="image-20240528151606771"></p><p>可以看到，之前最新的提交记录 【我要删库跑路】 已经删除了。</p><p>强制推送远程仓库</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git push --force</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>执行上述命令后，远程仓库的提交记录 【我要删库跑路】 也已经删除。</p><p><img src="'+g+'" alt="image-20240528153058993"></p><p>由于是soft选项，本地还有相关代码：</p><p><img src="'+k+'" alt="image-20240528153154013"></p>',65),m=[b];function F(v,y,C,_,E,B){return a(),i("div",null,m)}const f=s(u,[["render",F]]);export{D as __pageData,f as default};
