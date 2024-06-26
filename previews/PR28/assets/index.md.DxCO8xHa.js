import{_ as e,c as i,o as a,a6 as s}from"./chunks/framework.KEQUWHT6.js";const y=JSON.parse('{"title":"SymbolicAnalysis.jl","description":"","frontmatter":{},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":null}'),t={name:"index.md"},n=s(`<h1 id="symbolicanalysis-jl" tabindex="-1">SymbolicAnalysis.jl <a class="header-anchor" href="#symbolicanalysis-jl" aria-label="Permalink to &quot;SymbolicAnalysis.jl&quot;">​</a></h1><p>Symbolics-based function property propagation for optimization</p><p>SymbolicAnalysis is a package for implementing the Disciplined Programming approach to optimization. Testing convexity structure in nonlinear programs relies on verifying the convexity of objectives and constraints. <a href="https://dcp.stanford.edu/" target="_blank" rel="noreferrer">Disciplined Convex Programming (DCP)</a>, is a framework for automating this verification task for a wide range of convex functions that can be decomposed into basic convex functions (atoms) using convexity-preserving compositions and transformations (rules).</p><p>This package aims to utilize expression graph rewriting and metadata propagation provided by Symbolics.jl, for analysis of relevant properties - limited right now to Euclidean Convexity and Geodesic Convexity on the Symmetric Positive Definite manifold. This package provides an easy to expand implementation of &quot;atoms&quot;, that are functions that have known properties. This allows users to add atoms to the library more easily than the previous implementations <a href="https://www.cvxpy.org/index.html" target="_blank" rel="noreferrer">CVXPY</a> and <a href="https://github.com/jump-dev/Convex.jl" target="_blank" rel="noreferrer">Convex.jl</a>.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>To install this package, run the following in the Julia REPL:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Pkg</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Pkg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SymbolicAnalysis&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>The main interface to this package is the <code>analyze</code> function.</p><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="SymbolicAnalysis.analyze" href="#SymbolicAnalysis.analyze">#</a> <b><u>SymbolicAnalysis.analyze</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">analyze</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ex)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">analyze</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ex, M)</span></span></code></pre></div><p>Analyze the expression <code>ex</code> and return the curvature and sign of the expression. If a manifold <code>M</code> from <a href="https://juliamanifolds.github.io/Manifolds.jl/stable/" target="_blank" rel="noreferrer">Manifolds.jl</a> is provided, also return the geodesic curvature of the expression. Currently only supports the <code>SymmetricPositiveDefinite</code> manifold.</p><p>The returned <code>AnalysisResult</code> contains the following fields:</p><ul><li><p><code>curvature::SymbolicAnalysis.Curvature</code>: The curvature of the expression.</p></li><li><p><code>sign::SymbolicAnalysis.Sign</code>: The sign of the expression.</p></li><li><p><code>gcurvature::Union{SymbolicAnalysis.GCurvature,Nothing}</code>: The geodesic curvature of the expression if <code>M</code> is provided. Otherwise, <code>nothing</code>.</p></li></ul><p><a href="https://github.com/Vaibhavdixit02/SymbolicAnalysis.jl" target="_blank" rel="noreferrer">source</a></p></div><br>`,11),o=[n];function l(r,p,d,c,h,u){return a(),i("div",null,o)}const m=e(t,[["render",l]]);export{y as __pageData,m as default};
