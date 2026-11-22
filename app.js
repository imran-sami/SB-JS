document.head.appendChild(
  Object.assign(document.createElement("style"), {
    textContent: String.raw`
@font-face{font-family:SBInter;font-weight:400;font-display:swap;src:url(fonts/inter-400.woff) format('woff')}
@font-face{font-family:SBInter;font-weight:600;font-display:swap;src:url(fonts/inter-600.woff) format('woff')}
@font-face{font-family:SBInter;font-weight:700;font-display:swap;src:url(fonts/inter-700.woff) format('woff')}
@font-face{font-family:SBInter;font-weight:800;font-display:swap;src:url(fonts/inter-800.woff) format('woff')}
:root{--bg:#f1f6f3;--sf:#fff;--ink:#0f2a20;--mu:#5f7a6d;--ln:#dde8e1;--ac:#006a4e;--ax:#006a4e;--a2:#e4f2ec;--rd:#e0233a;--r2:#fde8eb;--ok:#0a7f59;color-scheme:light;box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
[data-theme=dark]{--bg:#08130e;--sf:#10201a;--ink:#e5f2ea;--mu:#8fae9f;--ln:#1f3429;--ac:#0b8a64;--ax:#5fd3a8;--a2:#153126;--rd:#ff5468;--r2:#3a1a20;--ok:#4fd39b;color-scheme:dark}
html{scroll-behavior:smooth;scroll-padding-top:calc(env(safe-area-inset-top,0px) + 76px);-webkit-text-size-adjust:100%;text-size-adjust:100%}
button,.tap,[role=button],a,select,input{touch-action:manipulation}
*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
body{margin:0;background:var(--bg);color:var(--ink);font:14px/1.65 SBInter,'Noto Sans Bengali','Nirmala UI','Vrinda',system-ui,'Segoe UI',Roboto,Arial,sans-serif;overscroll-behavior-y:none;-webkit-overflow-scrolling:touch;-webkit-font-smoothing:antialiased;-webkit-user-select:none;user-select:none}
body::before{content:"";position:fixed;inset:0 0 auto;height:env(safe-area-inset-top,0px);background:var(--sf);z-index:25}
input,select{-webkit-user-select:text;user-select:text}
svg.i{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;flex:none}
button{font:inherit;color:inherit;cursor:pointer;transition:transform .1s}
button:active{transform:scale(.97)}
:focus-visible{outline:2px solid var(--ax);outline-offset:2px}
.app{display:flex;min-height:100dvh}
aside{width:244px;background:var(--sf);border-right:1px solid var(--ln);padding:22px 14px;position:fixed;inset:0 auto 0 0;display:flex;flex-direction:column;gap:3px;overflow:auto}
.brand{display:flex;align-items:center;gap:10px;font-weight:800;font-size:16px;padding:0 10px 20px}
.logo{width:36px;height:36px;border-radius:10px;background:#006a4e;display:grid;place-items:center;flex:none}
.logo i{width:16px;height:16px;border-radius:50%;background:#f42a41;display:block}
.nv{display:flex;align-items:center;gap:12px;padding:11px 12px;border:0;background:none;border-radius:10px;color:var(--mu);text-align:left;width:100%;font-weight:600}
.nv:hover{background:var(--a2)}
.nv.on{background:var(--a2);color:var(--ax);box-shadow:inset 3px 0 0 var(--rd)}
.sp{margin-top:auto}
main{margin-left:244px;flex:1;min-width:0;padding:0 32px 40px}
.tb{transform:translateZ(0);position:sticky;top:env(safe-area-inset-top,0px);z-index:20;background:var(--bg);display:flex;align-items:center;gap:10px;padding:14px 0}
.avb{border:0;background:none;padding:0;border-radius:50%}
.av{width:42px;height:42px;border-radius:50%;background:var(--a2);color:var(--ax);display:grid;place-items:center;overflow:hidden;border:2px solid var(--ac)}
.av img{width:100%;height:100%;object-fit:cover}
.gt{line-height:1.25;display:flex;flex-direction:column;min-width:0}
.clk{font-size:13px;display:flex;flex-direction:row;align-items:center;gap:10px;white-space:nowrap;line-height:1.3;flex:none;text-align:right;height:40px;padding:0 14px;border:1px solid var(--ln);background:var(--sf);border-radius:12px}
.clk .sep{width:1px;height:16px;background:var(--ln);flex:none}
@media(max-width:430px){.clk{gap:6px;font-size:10.5px;height:36px;padding:0 9px;border-radius:10px}}
@media(max-width:350px){.clk{font-size:10px;padding:0 8px}}
.clk .tm,.clk .dd{font-variant-numeric:tabular-nums}
.clk .tm{font-weight:700;color:var(--ink)}
.fl{flex:1}
.gt{flex:0 1 auto;overflow:hidden}
.gt b{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}
.gl{display:flex;flex-wrap:wrap;align-items:baseline;gap:0 5px;min-width:0}
.gtb{margin:6px 0 18px;padding:2px 0 2px 14px;border-left:4px solid var(--ac);border-radius:2px}
.gl2{font-size:22px;font-weight:800;line-height:1.35;color:var(--ink);letter-spacing:.1px;overflow-wrap:anywhere}
.gl2 .gw{color:var(--ax)}
.gl2 .gw,.gl2 b{font-weight:800;font-size:inherit}
.gl2 .gw{white-space:normal}
.gloc{display:flex;align-items:center;gap:4px;margin-top:2px;font-size:12px;color:var(--ax);background:none;border:0;padding:0;text-align:left;font-weight:600}
.gloc.busy svg{animation:lpulse 1s ease-in-out infinite}
.gloc svg{width:14px;height:14px}
.tb{flex-wrap:nowrap}
.tb.nst{position:static;transform:none}
.tb>*{flex-shrink:0}
.tb>.gt{flex-shrink:1}
.avb{flex:none}
.lcb{gap:6px;padding:0 12px;max-width:none;flex-shrink:1!important;min-width:40px}
.lcb .i{width:18px;height:18px;flex:none}
.lcb.has{color:var(--ax)}
.lct{font-size:11px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:min(300px,34vw);color:var(--ink)}
.lcb.busy .i{animation:lpulse 1s ease-in-out infinite}
@keyframes lpulse{50%{opacity:.3}
}
@media(max-width:430px){.tb{gap:4px}
.tb .ib{min-width:34px;height:36px;padding:0 6px}
.av{width:38px;height:38px}
.clk{font-size:10px}
.lct{max-width:96px;font-size:10px}
.gt{min-width:54px;flex:1 1 54px}
.gt .mu{font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.fl{display:none}
.clk{margin-left:auto}
}
@media(max-width:430px){.gloc{display:flex}
.lct{display:none}
}
.ib{position:relative;min-width:40px;height:40px;border-radius:12px;border:1px solid var(--ln);background:var(--sf);display:grid;place-items:center;font-weight:700;padding:0 10px}
.dot{position:absolute;top:8px;right:9px;width:9px;height:9px;border-radius:50%;background:var(--rd);border:2px solid var(--sf)}
h1{font-size:23px;margin:6px 0 2px;letter-spacing:-.3px;line-height:1.3}
h2{font-size:15px;margin:0}
.mu{color:var(--mu);font-size:12px}
.hd{display:flex;justify-content:space-between;align-items:flex-end;gap:12px;margin-bottom:18px;flex-wrap:wrap}
.c{background:var(--sf);border:1px solid var(--ln);border-radius:16px;padding:18px}
.hero{background:linear-gradient(135deg,#00503b,#006a4e 65%,#0a805d);color:#fff;border-radius:18px;padding:16px 20px;position:relative;overflow:hidden;margin-bottom:16px;min-height:0}
.hero::after{content:"";position:absolute;right:-44px;top:-52px;width:150px;height:150px;border-radius:50%;background:#f42a41;opacity:.92}
.hero>*{position:relative;z-index:1}
.hero .big{font-size:28px;font-weight:800;letter-spacing:-.6px;margin:2px 0 4px;line-height:1.25}
.hero .eye{position:absolute;right:14px;top:14px;z-index:2;background:rgba(255,255,255,.22);border:0;border-radius:50%;width:34px;height:34px;display:grid;place-items:center;color:#fff}
.tiles{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:16px}
.q{display:flex;flex-direction:column;align-items:center;gap:8px;padding:14px 6px;background:var(--sf);border:1px solid var(--ln);border-radius:16px;font-weight:600;font-size:12px;text-align:center}
.q:hover{border-color:var(--ac)}
.q .ic{width:44px;height:44px;border-radius:14px;background:var(--a2);color:var(--ax);display:grid;place-items:center}
.q:nth-child(4n+2) .ic{background:var(--r2);color:var(--rd)}
.g{display:grid;grid-template-columns:1.5fr 1fr;gap:16px;margin-bottom:16px}
.g3{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:14px}
.row{display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid var(--ln);width:100%;background:none;border-left:0;border-right:0;border-top:0;text-align:left}
.row:last-child{border-bottom:0}
.row .ic{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;flex:none}
.in .ic{background:var(--a2);color:var(--ok)}
.out .ic{background:var(--r2);color:var(--rd)}
.row .m{flex:1;min-width:0}
.row .m b{display:block;overflow-wrap:anywhere}
.row .m .mu{display:block;overflow-wrap:anywhere}
.amt{font-weight:700;white-space:nowrap}
.in .amt{color:var(--ok)}
.out .amt{color:var(--rd)}
.bars{display:flex;align-items:flex-end;gap:8px;height:120px;margin-top:14px}
.bars button{border:0;background:none;padding:0;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%;gap:6px;font-size:11px;color:var(--mu)}
.bars i{display:block;width:100%;max-width:34px;background:var(--ac);border-radius:6px 6px 0 0;min-height:3px}
label{display:block;font-weight:600;font-size:12px;margin:14px 0 6px}
input,select{width:100%;padding:12px;border:1px solid var(--ln);border-radius:12px;background:var(--bg);color:var(--ink);font:inherit}
.btn{position:relative;border:0;background:var(--ac);color:#fff;padding:12px 20px;border-radius:12px;font-weight:700;display:inline-flex;gap:8px;align-items:center;justify-content:center;min-height:44px;transition:background .2s}
.btn.gh{background:var(--a2);color:var(--ax)}
.btn.dg{background:var(--r2);color:var(--rd)}
.btn:not(.gh):not(.dg)::after{content:"→";display:inline-block;transition:transform .25s}
.btn:not(.gh):not(.dg):active::after{transform:translateX(9px)}
@media(hover:hover){.btn:not(.gh):not(.dg):hover::after{transform:translateX(9px)}
}
.w{width:100%;margin-top:18px}
.chips{display:flex;gap:8px;flex-wrap:wrap;margin-top:8px}
.chip{border:1px solid var(--ln);background:var(--sf);border-radius:20px;padding:6px 12px;font-size:12px}
.chip:hover{border-color:var(--ac);color:var(--ax)}
.seg{display:flex;background:var(--a2);border-radius:12px;padding:4px;gap:4px}
.seg button{flex:1;border:0;background:none;padding:9px;border-radius:9px;font-weight:700;color:var(--mu)}
.seg button.on{background:var(--sf);color:var(--ax);box-shadow:0 1px 3px rgba(0,0,0,.12)}
.rcs{display:flex;overflow-x:auto;border-bottom:2px solid var(--ln);scrollbar-width:none}
.rcs::-webkit-scrollbar{display:none}
.tool .rcs{flex-basis:100%}
.rc{flex:1 0 auto;border:0;border-bottom:3px solid transparent;margin-bottom:-2px;background:none;padding:10px 14px;color:var(--mu);font-weight:700;white-space:nowrap;text-align:center}
.rc small{display:block;font-weight:500;font-size:11px}
.rc.on{color:var(--ax);border-bottom-color:var(--rd)}
.tool{display:flex;gap:10px;margin-bottom:14px;flex-wrap:wrap}
.tool>*{flex:1;min-width:140px}
.cd{background:linear-gradient(135deg,#00503b,#006a4e);color:#fff;border-radius:20px;padding:22px;min-height:190px;display:flex;flex-direction:column;justify-content:space-between;max-width:400px;position:relative;overflow:hidden}
.cd::after{content:"";position:absolute;right:-40px;bottom:-50px;width:150px;height:150px;border-radius:50%;background:#f42a41;opacity:.9}
.cd>*{position:relative;z-index:1}
.cd.fz{filter:grayscale(1) brightness(.75)}
.cd .n{font-size:19px;letter-spacing:2px;font-weight:600}
.tg{width:48px;height:28px;border-radius:14px;border:0;background:var(--ln);position:relative;flex:none}
.tg:after{content:"";position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:#fff;transition:.2s}
.tg.on{background:var(--ac)}
.tg.on:after{left:23px}
.bar{height:8px;background:var(--ln);border-radius:4px;overflow:hidden;margin:8px 0}
.bar i{display:block;height:100%;background:var(--rd)}
table{width:100%;border-collapse:collapse}
th,td{text-align:left;padding:10px 8px;border-bottom:1px solid var(--ln)}
th{font-size:12px;color:var(--mu)}
.r{text-align:right}
.ov{overflow-x:auto}
.kv{display:flex;justify-content:space-between;gap:12px;padding:8px 0;border-bottom:1px dashed var(--ln)}
.kv:last-child{border:0}
.pav{position:relative;width:104px;height:104px;margin:0 auto 14px}
.pav .av{width:104px;height:104px}
.pav button{position:absolute;right:-2px;bottom:-2px;width:36px;height:36px;border-radius:50%;border:3px solid var(--sf);background:var(--rd);color:#fff;display:grid;place-items:center}
.lock{position:fixed;inset:0;z-index:50;background:var(--sf);display:flex;flex-direction:column;overflow:auto}
.lh{flex:0 0 32%;min-height:220px;background:linear-gradient(135deg,#00503b,#006a4e);color:#fff;position:relative;overflow:hidden;padding:calc(18px + env(safe-area-inset-top,0px)) 24px 68px;display:flex;flex-direction:column;justify-content:space-between;gap:14px}
.lh::after{content:"";position:absolute;right:-60px;bottom:-40px;width:170px;height:170px;border-radius:50%;background:#f42a41}
.lt{display:flex;align-items:center;justify-content:space-between}
.lh>*{position:relative;z-index:1}
.lh h1{margin:0;font-size:30px}
.lgb{background:rgba(255,255,255,.2);border:0;color:#fff;border-radius:10px;padding:8px 14px;font-weight:700}
.ls2{flex:1;margin-top:-46px;background:var(--sf);border-radius:26px 26px 0 0;padding:28px 24px calc(24px + env(safe-area-inset-bottom,0px));position:relative;z-index:2;display:flex;flex-direction:column;gap:10px;max-width:520px;width:100%;align-self:center;box-shadow:none}
.ls2 label{margin:2px 0 -4px}
@media(min-width:521px){.ls2{background:transparent;border-radius:0;margin-top:0;padding-top:34px}
.lh{flex-basis:30%;padding-bottom:28px}
}
.tabs{display:flex;gap:6px;background:var(--bg);border-radius:14px;padding:4px;margin-bottom:6px}
.tabs button{flex:1;border:0;background:none;color:var(--mu);font-weight:700;padding:10px;border-radius:11px;font:inherit;font-weight:700}
.tabs button.on{background:var(--ac);color:#fff}
.dmo{display:flex;align-items:center;justify-content:space-between;gap:10px;background:var(--a2);color:var(--ink);border-radius:12px;padding:10px 12px;font-size:13px;line-height:1.5}
.lnr{text-align:center;color:var(--mu);margin-top:4px;line-height:1.8}
.lkb{border:0;background:none;color:var(--ax);font:inherit;font-weight:700;padding:0 2px;text-decoration:underline}
.md{position:fixed;inset:0;background:rgba(4,20,14,.6);display:flex;z-index:40;padding:max(16px,env(safe-area-inset-top,0px)) 16px max(16px,env(safe-area-inset-bottom,0px));overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch}
.md>.c,.md>.pvi{margin:auto}
.md .c{width:100%;max-width:410px;min-width:0}
.ok{width:56px;height:56px;border-radius:50%;background:var(--a2);color:var(--ok);display:grid;place-items:center;margin:0 auto 8px}
#toast{position:fixed;left:50%;bottom:calc(28px + env(safe-area-inset-bottom,0px));transform:translate(-50%,20px);background:var(--ink);color:var(--bg);padding:11px 18px;border-radius:12px;opacity:0;transition:.25s;z-index:60;pointer-events:none;max-width:90vw;text-align:center}
#toast.s{opacity:1;transform:translate(-50%,0)}
.bn{display:none}
.bento{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:16px}
.bento>*{margin:0!important}
.bento>.hero{grid-column:span 2;display:flex;flex-direction:column;justify-content:center;gap:2px}
.bento .s2{grid-column:span 2}
.bento .s4{grid-column:span 4}
.bento .tiles{margin:0}
.stat{display:flex;flex-direction:column;gap:6px;justify-content:center}
.stat b{font-size:19px}
.stat.in b{color:var(--ok)}
.stat.out b{color:var(--rd)}
.sic{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;background:var(--a2);color:var(--ok)}
.stat.out .sic{background:var(--r2);color:var(--rd)}
.eye2{position:absolute;right:40px;top:12px;z-index:3;width:32px;height:32px;border-radius:50%;border:0;background:var(--a2);color:var(--ax);display:grid;place-items:center}
.stat.out .eye2{background:var(--r2);color:var(--rd)}
.ps>.c{max-width:540px;margin-bottom:16px}
.ps h2.sh{margin-bottom:4px}
.rc .lg{display:inline-grid;place-items:center;width:22px;height:22px;border-radius:50%;color:#fff;font-size:9px;font-weight:800;margin-right:6px;vertical-align:middle;letter-spacing:0}
.hbg{display:none;flex-direction:column;gap:4px;justify-content:center;align-items:center;padding:0}
.hbg i{display:block;width:18px;height:2px;background:currentColor;border-radius:1px}
.so{position:fixed;inset:0;background:rgba(4,20,14,.55);z-index:45;display:flex;overscroll-behavior:contain}
.dr{background:var(--sf);width:min(300px,82vw);height:100%;padding:calc(22px + env(safe-area-inset-top,0px)) 14px calc(18px + env(safe-area-inset-bottom,0px));display:flex;flex-direction:column;gap:3px;overflow:auto;box-shadow:6px 0 24px rgba(0,0,0,.2);animation:sl .25s}
@keyframes sl{from{transform:translateX(-100%)}
}
.sv .q{background:none;border-color:transparent;padding:8px 2px}
.sv .q:hover{background:var(--a2)}
.sv .tiles{margin:0}
.tap{cursor:pointer;position:relative;transition:border-color .15s,transform .1s}
.tap:hover{border-color:var(--ac)}
.tap:active{transform:scale(.985)}
.chv{position:absolute;right:14px;top:14px;color:var(--mu);line-height:0;z-index:2}
.hero .chv{top:auto;bottom:14px;right:16px;color:#fff}
.cd .chv{display:none}
[role=button]{cursor:pointer}
.dp{max-width:720px;display:flex;flex-direction:column;gap:14px}
.row[role=button]:hover .m b{color:var(--ax)}
html.nos,html.nos body{overflow:hidden}
input[type=range]{padding:0;border:0;background:none;accent-color:var(--ac)}
.md.pv{background:rgba(0,0,0,.92);align-items:center;justify-content:center;overflow:hidden;touch-action:none;-webkit-touch-callout:none}
.pv *{touch-action:none}
.pvo{display:block;margin:auto;max-width:100%;max-height:100%;width:auto;height:auto;object-fit:contain;border-radius:0;image-orientation:from-image;image-rendering:auto;-webkit-user-select:none;user-select:none}
.pvb{z-index:3}
.pvb{position:absolute;top:calc(14px + env(safe-area-inset-top,0px));left:14px;background:rgba(255,255,255,.16);color:#fff;border-color:transparent}
.pvi{width:min(88vw,440px);height:min(88vw,440px);object-fit:cover;border-radius:24px;display:grid;place-items:center}
.pvn{background:var(--a2);color:var(--ax)}
.pvn svg{width:96px;height:96px}
.md,.lock,.rcs,.ov{overscroll-behavior:contain}
@media(max-width:860px){.hbg{display:flex}
.bento{grid-template-columns:1fr 1fr}
.bento .s4{grid-column:span 2}
aside{display:none}
main{margin:0;padding:0 16px 32px}
.g{grid-template-columns:1fr}
.hero .big{font-size:26px}
.tiles{gap:8px}
input,select{font-size:16px}
.bn{display:flex;position:fixed;left:0;right:0;bottom:0;background:var(--sf);border-top:1px solid var(--ln);padding:6px 4px calc(6px + env(safe-area-inset-bottom,0px));z-index:30}
.bn button{flex:1;border:0;background:none;display:flex;flex-direction:column;align-items:center;gap:2px;font-size:10px;color:var(--mu);padding:4px 0;font-weight:600}
.bn button.on{color:var(--ax)}
.bn button.on svg{stroke:var(--rd)}
}
@media print{aside,.bn,.tool,.tb,.noprint{display:none!important}
main{margin:0}
}
@media(prefers-reduced-motion:reduce){*{transition:none!important}
html{scroll-behavior:auto}
}

/* lock screen: full green, both themes */
.lock{background:linear-gradient(165deg,#00503b 0%,#006a4e 60%,#00805d 100%);color:#fff}
[data-theme=dark] .lock{background:linear-gradient(165deg,#031a12 0%,#06382a 60%,#0a4c39 100%)}
.lock .lh{flex:0 0 auto;min-height:170px;background:none;padding-bottom:22px}
.lock .lh{overflow:visible}
.lock .lh::after{right:24px;bottom:14px;width:84px;height:84px;opacity:.95}
.lock{overflow-x:hidden}
.lock .ls2{background:transparent;border-radius:0;margin-top:0;box-shadow:none;padding-top:8px;color:#fff;flex:0 0 auto}
.lock .ls2 label{color:rgba(255,255,255,.92)}
.lock .ls2 .mu,.lock .ls2 .lnr{color:rgba(255,255,255,.82)}
.lock .ls2 input{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.28);color:#fff;caret-color:#fff}
.lock .ls2 input::placeholder{color:rgba(255,255,255,.55)}
.lock .ls2 input:focus{outline:0;border-color:#fff;background:rgba(255,255,255,.18)}
.lock .ls2 input:-webkit-autofill{-webkit-text-fill-color:#fff;box-shadow:0 0 0 100px #0b6a50 inset}
.lock .ls2 .tabs{background:rgba(0,0,0,.22)}
.lock .ls2 .tabs button{color:rgba(255,255,255,.8)}
.lock .ls2 .tabs button.on{background:#fff;color:#006a4e}
.lock .ls2 .btn{background:#fff;color:#006a4e}
.lock .ls2 .lkb{color:#fff;text-decoration:underline}
.lock .ls2 #le{color:#ffd3d9}

/* splash */
#splash{position:fixed;inset:0;z-index:100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:22px;background:linear-gradient(165deg,#00503b 0%,#006a4e 60%,#00805d 100%);color:#fff;overflow:hidden;transition:opacity .55s ease,transform .55s ease}
[data-theme=dark] #splash{background:linear-gradient(165deg,#031a12 0%,#06382a 60%,#0a4c39 100%)}
#splash.out{opacity:0;transform:scale(1.04);pointer-events:none}
#splash .sun{position:relative;width:96px;height:96px;display:grid;place-items:center}
#splash .sun i{position:absolute;inset:0;border-radius:50%;background:#f42a41;box-shadow:0 0 0 0 rgba(244,42,65,.55);animation:spop .9s cubic-bezier(.2,1.3,.4,1) both,spulse 2s ease-out .9s infinite}
#splash .sun b{position:absolute;inset:-26px;border-radius:50%;border:2px solid rgba(244,42,65,.55);opacity:0;animation:sring 1.8s ease-out .7s infinite}
#splash .sun b+b{animation-delay:1.3s}
#splash h1{margin:0;font-size:38px;letter-spacing:.5px;opacity:0;transform:translateY(14px);animation:sup .7s ease .55s forwards}
#splash small{opacity:0;letter-spacing:4px;text-transform:uppercase;font-weight:600;font-size:12px;color:rgba(255,255,255,.8);animation:sup .7s ease .85s forwards}
#splash .bar{width:120px;height:4px;border-radius:4px;background:rgba(255,255,255,.2);overflow:hidden;opacity:0;animation:sup .5s ease 1s forwards}
#splash .bar::after{content:"";display:block;height:100%;width:100%;border-radius:4px;background:linear-gradient(90deg,#f42a41,#2bd49a);transform:translateX(-100%);animation:sbar 1.3s ease-in-out 1s forwards}
@keyframes spop{from{transform:scale(0)}
to{transform:scale(1)}
}
@keyframes spulse{0%{box-shadow:0 0 0 0 rgba(244,42,65,.5)}
100%{box-shadow:0 0 0 34px rgba(244,42,65,0)}
}
@keyframes sring{0%{transform:scale(.7);opacity:.8}
100%{transform:scale(1.7);opacity:0}
}
@keyframes sup{to{opacity:1;transform:none}
}
@keyframes sbar{to{transform:none}
}
@media(prefers-reduced-motion:reduce){#splash *{animation-duration:.01s!important;animation-delay:0s!important}
}

.pw{position:relative;display:block}
.pw input{width:100%;padding-right:50px}
.eyb{position:absolute;right:4px;top:50%;transform:translateY(-50%);width:42px;height:42px;border:0;background:none;color:var(--mu);display:grid;place-items:center;border-radius:10px;padding:0;cursor:pointer}
.eyb .i{width:20px;height:20px}
.eyb.on{color:var(--ax)}
.lock .eyb{color:rgba(255,255,255,.85)}
.lock .eyb.on{color:#fff}

html,.md{-webkit-text-size-adjust:none;text-size-adjust:none}
.md .c.mf{padding:0;display:flex;flex-direction:column;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px);overflow:hidden}
.mf .mh{flex:none;display:flex;align-items:center;justify-content:space-between;gap:8px;padding:12px 14px;border-bottom:1px solid var(--ln);background:var(--sf)}
.mf .mh h2{margin:0;font-size:17px;text-align:center;flex:1}
.mf .mh .ib,.mf .mhs{width:40px;flex:none}
.mf .mb{flex:1 1 auto;overflow-y:auto;overscroll-behavior:contain;padding:6px 18px 14px;-webkit-overflow-scrolling:touch}
.mf .mfo{flex:none;display:flex;gap:10px;padding:12px 18px calc(12px + env(safe-area-inset-bottom,0px));border-top:1px solid var(--ln);background:var(--sf)}
.rc{font-size:14px}
`,
  }),
);
document.body.insertAdjacentHTML(
  "afterbegin",
  String.raw`
<svg width="0" height="0" style="position:absolute"><defs>
<symbol id="bk" viewBox="0 0 24 24"><path d="M20 12H6M11 6l-6 6 6 6"/></symbol>
<symbol id="chv" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></symbol>
<symbol id="home" viewBox="0 0 24 24"><path d="M3 11l9-8 9 8M5 10v10h14V10M10 20v-6h4v6"/></symbol>
<symbol id="send" viewBox="0 0 24 24"><path d="M4 12h14M13 6l6 6-6 6"/></symbol>
<symbol id="grid" viewBox="0 0 24 24"><rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/></symbol>
<symbol id="wal" viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="14" rx="3"/><path d="M3 10h18M16 15h2M6 6l9-3v3"/></symbol>
<symbol id="lst" viewBox="0 0 24 24"><path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"/></symbol>
<symbol id="crd" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="3"/><path d="M2 10h20M6 15h4"/></symbol>
<symbol id="doc" viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6zM14 3v4h4M9 13h6M9 17h6"/></symbol>
<symbol id="set" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/></symbol>
<symbol id="user" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></symbol>
<symbol id="mappin" viewBox="0 0 24 24"><path d="M12 22 C12 22 5 15.5 5 10 A7 7 0 0 1 19 10 C19 15.5 12 22 12 22 Z"/><circle cx="12" cy="10" r="2.6"/></symbol>
<symbol id="bell" viewBox="0 0 24 24"><path d="M6 16v-5a6 6 0 0112 0v5l2 2H4zM10 21h4"/></symbol>
<symbol id="add" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></symbol>
<symbol id="ph" viewBox="0 0 24 24"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></symbol>
<symbol id="bill" viewBox="0 0 24 24"><path d="M13 2L5 14h6l-1 8 8-12h-6z"/></symbol>
<symbol id="qr" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3M21 14v1M14 21h3M21 18v3"/></symbol>
<symbol id="calc" viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01"/></symbol>
<symbol id="zk" viewBox="0 0 24 24"><path d="M20 14.5A8 8 0 019.5 4a8 8 0 1010.5 10.5z"/></symbol>
<symbol id="chq" viewBox="0 0 24 24"><path d="M5 4h11a3 3 0 013 3v13H8a3 3 0 01-3-3zM5 17a3 3 0 013-3h11"/></symbol>
<symbol id="cam" viewBox="0 0 24 24"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></symbol>
<symbol id="shr" viewBox="0 0 24 24"><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8 11l8-4M8 13l8 4"/></symbol>
<symbol id="chk" viewBox="0 0 24 24"><path d="M5 12l5 5 9-10"/></symbol>
<symbol id="dl" viewBox="0 0 24 24"><path d="M12 4v11M7 11l5 5 5-5M5 20h14"/></symbol>
<symbol id="lk" viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></symbol>
<symbol id="ey" viewBox="0 0 24 24"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></symbol>
<symbol id="ex" viewBox="0 0 24 24"><path d="M3 3l18 18M10 6a9 9 0 0112 6 12 12 0 01-3 4M6 8a12 12 0 00-4 4s4 7 10 7a9 9 0 004-1"/></symbol>
<symbol id="dn" viewBox="0 0 24 24"><path d="M7 7l10 10M17 8v9H8"/></symbol>
<symbol id="up" viewBox="0 0 24 24"><path d="M17 7L7 17M8 7h9v9"/></symbol>
<symbol id="out" viewBox="0 0 24 24"><path d="M9 4H5v16h4M16 8l4 4-4 4M20 12H9"/></symbol>
<symbol id="cal" viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/></symbol>
<symbol id="pr" viewBox="0 0 24 24"><path d="M6 9V3h12v6M6 18H4v-7h16v7h-2M7 14h10v7H7z"/></symbol>
</defs></svg>
<div id="splash" aria-hidden="true"><div class="sun"><b></b><b></b><i></i></div><h1 id="spn"></h1><div class="bar"></div></div><div id="root"></div><input id="pf" type="file" accept="image/*,.heic,.heif,.avif" hidden><div id="toast" role="status"></div>
`,
);

const T = {
  app: ["সোনার বাংলা", "সোনার বাংলা"],
  home: ["Home", "হোম"],
  send: ["Transfer", "ট্রান্সফার"],
  svc: ["Services", "সেবাসমূহ"],
  hist: ["Transactions", "লেনদেন"],
  cards: ["Cards", "কার্ড"],
  accs: ["Accounts", "হিসাব"],
  stmt: ["Statements", "স্টেটমেন্ট"],
  me: ["Profile", "প্রোফাইল"],
  prefs: ["Settings", "সেটিংস"],
  so: ["Sign out", "সাইন আউট"],
  hi: ["Welcome back", "স্বাগতম"],
  holder: ["Account holder", "হিসাবধারী"],
  tot: ["Total balance", "মোট ব্যালান্স"],
  act: ["Active accounts", "সচল হিসাব"],
  sendm: ["Send money", "টাকা পাঠান"],
  addm: ["Add money", "টাকা যোগ"],
  bill: ["Pay bill", "বিল পরিশোধ"],
  topup: ["Mobile top-up", "মোবাইল রিচার্জ"],
  qr: ["QR pay", "কিউআর পে"],
  loan: ["Loan calculator", "ঋণ ক্যালকুলেটর"],
  zk: ["Zakat calculator", "যাকাত ক্যালকুলেটর"],
  chq: ["Cheque book", "চেক বই"],
  sp7: ["Spending, last 7 days", "গত ৭ দিনের খরচ"],
  mo: ["This month", "এই মাস"],
  mi: ["Credits", "জমা"],
  mout: ["Debits", "খরচ"],
  rec: ["Recent transactions", "সাম্প্রতিক লেনদেন"],
  all: ["View all", "সব দেখুন"],
  sal: ["Salary credit", "বেতন জমা"],
  groc: ["Grocery purchase", "বাজার খরচ"],
  elec: ["Electricity bill", "বিদ্যুৎ বিল"],
  gas: ["Gas bill", "গ্যাস বিল"],
  water: ["Water bill", "পানি বিল"],
  inet: ["Internet bill", "ইন্টারনেট বিল"],
  edu: ["Education fee", "শিক্ষা ফি"],
  govt: ["Government fee", "সরকারি ফি"],
  rcv: ["Received from account", "অ্যাকাউন্ট থেকে প্রাপ্ত"],
  ride: ["Ride fare", "যাতায়াত ভাড়া"],
  dine: ["Restaurant payment", "রেস্টুরেন্ট বিল"],
  cdep: ["Cash deposit", "নগদ জমা"],
  shop: ["Online purchase", "অনলাইন কেনাকাটা"],
  pharm: ["Pharmacy purchase", "ওষুধ কেনা"],
  intr: ["Interest credit", "সুদ জমা"],
  rent: ["House rent", "বাসা ভাড়া"],
  trf: ["Transfer to account", "অ্যাকাউন্টে ট্রান্সফার"],
  trm: ["Transfer to mobile", "মোবাইলে ট্রান্সফার"],
  madd: ["Money added", "টাকা যোগ করা হয়েছে"],
  dpsi: ["DPS installment", "ডিপিএস কিস্তি"],
  qrp: ["QR payment", "কিউআর পেমেন্ট"],
  a_sav: ["Savings account", "সঞ্চয়ী হিসাব"],
  a_cur: ["Current account", "চলতি হিসাব"],
  a_dps: ["Deposit pension scheme", "ডিপিএস"],
  a_fd: ["Fixed deposit", "মেয়াদি আমানত"],
  accn: ["Account number", "হিসাব নম্বর"],
  mobn: ["Mobile number", "মোবাইল নম্বর"],
  toacc: ["To account", "অ্যাকাউন্টে"],
  tomob: ["To mobile", "মোবাইলে"],
  from: ["From account", "যে হিসাব থেকে"],
  amt: ["Amount (BDT)", "পরিমাণ (টাকা)"],
  note: ["Note (optional)", "নোট (ঐচ্ছিক)"],
  cont: ["Continue", "এগিয়ে যান"],
  conf: ["Confirm", "নিশ্চিত করুন"],
  cancel: ["Cancel", "বাতিল"],
  close: ["Close", "বন্ধ করুন"],
  pin: ["Enter password", "পাসওয়ার্ড দিন"],
  ins: ["Insufficient balance", "পর্যাপ্ত ব্যালান্স নেই"],
  bad: ["Incorrect password", "ভুল পাসওয়ার্ড"],
  bacc: ["Enter a valid account number", "সঠিক হিসাব নম্বর দিন"],
  bmob: ["Enter a valid mobile number", "সঠিক মোবাইল নম্বর দিন"],
  okt: ["Transaction successful", "লেনদেন সফল হয়েছে"],
  det: ["Transaction details", "লেনদেনের বিবরণ"],
  ref: ["Reference", "রেফারেন্স"],
  dt: ["Date and time", "তারিখ ও সময়"],
  shr: ["Share", "শেয়ার"],
  copy: ["Copy number", "নম্বর কপি"],
  copied: ["Copied", "কপি হয়েছে"],
  srch: ["Search transactions", "লেনদেন খুঁজুন"],
  fall: ["All types", "সব ধরন"],
  none: ["No transactions found.", "কোনো লেনদেন পাওয়া যায়নি।"],
  frz: ["Freeze card", "কার্ড স্থগিত করুন"],
  frzs: ["Block all payments instantly", "সব পেমেন্ট তাৎক্ষণিক বন্ধ"],
  shw: ["Show card number", "কার্ড নম্বর দেখান"],
  lim: ["Monthly limit", "মাসিক সীমা"],
  used: ["Used", "ব্যবহৃত"],
  cact: ["Active", "সচল"],
  cfz: ["Frozen", "স্থগিত"],
  dcard: ["Debit card", "ডেবিট কার্ড"],
  exp: ["Exp", "মেয়াদ"],
  net: ["Net", "নিট"],
  date: ["Date", "তারিখ"],
  desc: ["Description", "বিবরণ"],
  prt: ["Print", "প্রিন্ট"],
  lang: ["Language", "ভাষা"],
  theme: ["Appearance", "থিম"],
  tauto: ["System", "সিস্টেম"],
  tl: ["Light", "লাইট"],
  td: ["Dark", "ডার্ক"],
  reset: ["Reset all data", "সব তথ্য রিসেট"],
  resq: ["Reset all data?", "সব তথ্য রিসেট করবেন?"],
  resm: [
    "Balances and transactions return to the original demo data.",
    "ব্যালান্স ও লেনদেন আগের ডেমো অবস্থায় ফিরে যাবে।",
  ],
  inst: ["Install app", "অ্যাপ ইনস্টল করুন"],
  insd: [
    "Add to your home screen for a full-screen, app-like experience.",
    "ফুল-স্ক্রিন অ্যাপের মতো ব্যবহারের জন্য হোম স্ক্রিনে যোগ করুন।",
  ],
  inss: [
    "Open the Chrome menu (⋮), then tap “Install app” or “Add to Home screen”.",
    "ক্রোম মেনু (⋮) খুলে “Install app” বা “Add to Home screen” চাপুন।",
  ],
  nt: ["Notifications", "নোটিফিকেশন"],
  nnt: ["No notifications", "কোনো নোটিফিকেশন নেই"],
  ncr: ["Credited", "জমা হয়েছে"],
  ndb: ["Debited", "কেটে নেওয়া হয়েছে"],
  chqn: ["Cheque book request received", "চেক বইয়ের আবেদন গৃহীত হয়েছে"],
  sel: ["Account", "হিসাব"],
  bty: ["Bill type", "বিলের ধরন"],
  src: ["Source", "উৎস"],
  s1: ["Bank deposit", "ব্যাংক জমা"],
  s2: ["Card payment", "কার্ড পেমেন্ট"],
  s3: ["Other bank transfer", "অন্য ব্যাংক থেকে ট্রান্সফার"],
  opty: ["Connection", "সংযোগ"],
  pre: ["Prepaid", "প্রিপেইড"],
  post: ["Postpaid", "পোস্টপেইড"],
  myqr: ["My QR code", "আমার কিউআর কোড"],
  qrh: ["Scan to receive money (demo code)", "টাকা পেতে স্ক্যান করুন (ডেমো কোড)"],
  lp: ["Loan amount (BDT)", "ঋণের পরিমাণ (টাকা)"],
  lr: ["Interest rate (% per year)", "সুদের হার (বার্ষিক %)"],
  lm: ["Tenure (months)", "মেয়াদ (মাস)"],
  emi: ["Monthly installment", "মাসিক কিস্তি"],
  tint: ["Total interest", "মোট সুদ"],
  tpay: ["Total payable", "মোট পরিশোধ"],
  zw: ["Zakatable wealth (BDT)", "যাকাতযোগ্য সম্পদ (টাকা)"],
  zn: ["Nisab value (BDT)", "নিসাবের মূল্য (টাকা)"],
  zdue: ["Zakat payable (2.5%)", "প্রদেয় যাকাত (২.৫%)"],
  znd: ["Wealth is below nisab; zakat is not due.", "সম্পদ নিসাবের কম; যাকাত প্রযোজ্য নয়।"],
  zh: ["Enter the current nisab value to calculate.", "হিসাব করতে বর্তমান নিসাবের মূল্য দিন।"],
  lv: ["Number of leaves", "পাতার সংখ্যা"],
  nm: ["Full name", "পুরো নাম"],
  nid: ["National ID", "জাতীয় পরিচয়পত্র"],
  ver: ["Verified", "যাচাইকৃত"],
  kyc: ["Account status", "হিসাবের অবস্থা"],
  actv: ["Active", "সচল"],
  pho: ["Change photo", "ছবি পরিবর্তন"],
  unl: ["Unlock", "আনলক"],
  pinh: ["Enter your 6-digit PIN", "আপনার ৬ সংখ্যার পিন দিন"],
  demo: ["Demo login", "ডেমো লগইন"],
  bnm: ["Enter your full name", "আপনার পুরো নাম দিন"],
  inf: ["Monthly installment", "মাসিক কিস্তি"],
  back: ["Back", "পিছনে"],
  dtl: ["Details", "বিস্তারিত"],
  brk: ["Balance breakdown", "ব্যালান্সের বিবরণ"],
  lq: ["Available now", "এখন ব্যবহারযোগ্য"],
  lk: ["Savings and deposits", "সঞ্চয় ও আমানত"],
  cat: ["By category", "ক্যাটাগরি অনুযায়ী"],
  avg: ["Average", "গড়"],
  lrg: ["Largest", "সর্বোচ্চ"],
  avgd: ["Daily average", "দৈনিক গড়"],
  hgh: ["Highest day", "সর্বোচ্চ দিন"],
  shb: ["Share of total", "মোট ব্যালান্সের অংশ"],
  typ: ["Account type", "হিসাবের ধরন"],
  chn: ["Card holder", "কার্ডধারী"],
  lnk: ["Linked account", "সংযুক্ত হিসাব"],
  rem: ["Remaining", "অবশিষ্ট"],
  ps: ["Profile & Settings", "প্রোফাইল ও সেটিংস"],
  pfs: ["Dashboard privacy", "ড্যাশবোর্ড গোপনীয়তা"],
  shf: ["Show credits / debits", "জমা/খরচ দেখান"],
  shfs: [
    "Hidden by default. Tap the eye on the dashboard to reveal.",
    "ডিফল্টভাবে লুকানো। দেখতে ড্যাশবোর্ডের চোখ আইকনে চাপুন।",
  ],
  hdb: ["Hide balance", "ব্যালান্স লুকান"],
  lh: ["Enter a loan amount and tenure to calculate.", "হিসাব করতে ঋণের পরিমাণ ও মেয়াদ দিন।"],
  bprv: ["Service provider", "সেবা প্রদানকারী"],
  bl_elec: ["Meter / Customer number", "মিটার / গ্রাহক নম্বর"],
  bl_gas: ["Customer ID", "গ্রাহক আইডি"],
  bl_water: ["Customer ID", "গ্রাহক আইডি"],
  bl_inet: ["Customer ID / Username", "গ্রাহক আইডি / ইউজারনেম"],
  bl_edu: ["Student ID / Roll number", "শিক্ষার্থী আইডি / রোল নম্বর"],
  bl_govt: ["Reference / Bill number", "রেফারেন্স / বিল নম্বর"],
  bno: ["Customer / Bill no.", "গ্রাহক / বিল নম্বর"],
  bbad: [
    "Enter a valid number (4–20 letters or digits).",
    "সঠিক নম্বর দিন (৪–২০টি অক্ষর বা অঙ্ক)।",
  ],
  binstl: ["Institution name / EIIN", "প্রতিষ্ঠানের নাম / ইআইআইএন"],
  binstbad: ["Enter the institution name.", "প্রতিষ্ঠানের নাম দিন।"],
  tel: ["Telephone bill", "টেলিফোন বিল"],
  tv: ["Cable TV bill", "কেবল টিভি বিল"],
  card: ["Credit card bill", "ক্রেডিট কার্ড বিল"],
  bmode: ["Meter type", "মিটারের ধরন"],
  bpre: ["Prepaid", "প্রিপেইড"],
  bpost: ["Postpaid", "পোস্টপেইড"],
  bmonth: ["Bill month", "বিলের মাস"],
  bl_pre: ["Meter number", "মিটার নম্বর"],
  bl_post: ["Bill account number", "বিল অ্যাকাউন্ট নম্বর"],
  bl_tel: ["Telephone number / Account", "টেলিফোন নম্বর / অ্যাকাউন্ট"],
  bl_tv: ["Subscriber ID", "সাবস্ক্রাইবার আইডি"],
  bl_card: ["Card number", "কার্ড নম্বর"],
  bcard: ["Enter a valid 16-digit card number.", "সঠিক ১৬ ডিজিটের কার্ড নম্বর দিন।"],
  bfee: ["Bill service charge", "বিল সার্ভিস চার্জ"],
  fee: ["Service charge", "সার্ভিস চার্জ"],
  free: ["Free (first bill this month)", "ফ্রি (এই মাসের প্রথম বিল)"],
  nof: ["No charge", "কোনো চার্জ নেই"],
  tok: ["Token number", "টোকেন নম্বর"],
  loct: ["Detect location automatically", "লোকেশন স্বয়ংক্রিয়ভাবে শনাক্ত করুন"],
  locs: [
    "Uses your device location to show where you are.",
    "আপনি কোথায় আছেন তা দেখাতে ডিভাইসের লোকেশন ব্যবহার করে।",
  ],
  tzl: ["Time zone", "টাইম জোন"],
  tza: ["Automatic (device)", "স্বয়ংক্রিয় (ডিভাইস)"],
  tzb: ["Bangladesh (Dhaka)", "বাংলাদেশ (ঢাকা)"],
  lfind: ["Finding your location…", "লোকেশন খোঁজা হচ্ছে…"],
  ldeny: [
    "Location permission was denied. Allow it in Settings.",
    "লোকেশনের অনুমতি দেওয়া হয়নি। সেটিংস থেকে অনুমতি দিন।",
  ],
  lerr: ["Could not get your location.", "লোকেশন পাওয়া যায়নি।"],
  lnos: ["Location is not supported on this device.", "এই ডিভাইসে লোকেশন সমর্থিত নয়।"],
  sv: ["Save", "সংরক্ষণ করুন"],
  svd: ["Saved", "সংরক্ষিত হয়েছে"],
  ldet: ["Detect location", "লোকেশন শনাক্ত করুন"],
  linsec: [
    "Location is blocked on this page. Open the Sonar Bangla app or an https:// link.",
    "এই পেজে লোকেশন বন্ধ। সোনার বাংলা অ্যাপ বা https:// লিংকে খুলুন।",
  ],
  lgps: [
    "Turn on device Location (GPS) and try again.",
    "ডিভাইসের লোকেশন (জিপিএস) চালু করে আবার চেষ্টা করুন।",
  ],
  lappr: [
    "Showing approximate location from the network.",
    "নেটওয়ার্ক থেকে আনুমানিক লোকেশন দেখানো হচ্ছে।",
  ],
  sec1: ["Payments", "পেমেন্ট"],
  sec2: ["Calculators and tools", "ক্যালকুলেটর ও টুল"],
  sec3: ["Manage", "ব্যবস্থাপনা"],
  rmp: ["Remove photo", "ছবি সরান"],
  bimg: ["This image format is not supported", "এই ছবির ফরম্যাট সমর্থিত নয়"],
  lock: ["Locked in", "নির্দিষ্ট মেয়াদি"],
  g_m: ["Good Morning", "সুপ্রভাত"],
  g_n: ["Good Noon", "শুভ দুপুর"],
  g_a: ["Good Afternoon", "শুভ অপরাহ্ন"],
  g_e: ["Good Evening", "শুভ সন্ধ্যা"],
  g_t: ["Good Night", "শুভ রাত্রি"],
  lgn: ["Login", "লগইন"],
  rgs: ["Register", "রেজিস্টার"],
  cra: ["Create account", "অ্যাকাউন্ট খুলুন"],
  uacc: ["Account number", "হিসাব নম্বর"],
  dmo: ["Demo account", "ডেমো অ্যাকাউন্ট"],
  usd: ["Use demo", "ডেমো ব্যবহার করুন"],
  pwl: ["Password", "পাসওয়ার্ড"],
  pwc: ["Confirm password", "পাসওয়ার্ড নিশ্চিত করুন"],
  pws: ["Set password", "পাসওয়ার্ড দিন"],
  nacc: ["No account found with this account number.", "এই হিসাব নম্বরে কোনো অ্যাকাউন্ট নেই।"],
  noac: ["Don't have an account?", "অ্যাকাউন্ট নেই?"],
  hasac: ["Already have an account?", "আগেই অ্যাকাউন্ট আছে?"],
  bun: ["Enter a valid account number (8–16 digits).", "সঠিক হিসাব নম্বর দিন (৮–১৬ অঙ্ক)।"],
  bpw: ["Password must be at least 10 characters.", "পাসওয়ার্ড কমপক্ষে ১০ অক্ষরের হতে হবে।"],
  cty_: ["Credential type", "নিরাপত্তা পদ্ধতি"],
  ctp: ["Password", "পাসওয়ার্ড"],
  ctn: ["PIN (6 digits)", "পিন (৬ অঙ্ক)"],
  pns: ["Set PIN", "পিন দিন"],
  pnc: ["Confirm PIN", "পিন নিশ্চিত করুন"],
  pnl: ["PIN", "পিন"],
  bpm2: ["PINs do not match.", "পিন মিলছে না।"],
  bpn: ["PIN must be exactly 6 digits.", "পিন অবশ্যই ৬ অঙ্কের হতে হবে।"],
  wpw: [
    "Password needs upper & lower case letters, a number and a symbol.",
    "পাসওয়ার্ডে বড় হাতের ও ছোট হাতের অক্ষর, সংখ্যা এবং চিহ্ন থাকতে হবে।",
  ],
  wpn: [
    "PIN is too easy (repeated, sequential or patterned digits).",
    "পিন খুব সহজ (একই, ক্রমিক বা প্যাটার্নযুক্ত অঙ্ক)।",
  ],
  wpa: ["Do not use your account number or name in it.", "হিসাব নম্বর বা নাম ব্যবহার করবেন না।"],
  wpc: [
    "This is a very common choice. Pick something unique.",
    "এটি খুবই প্রচলিত। অন্য কিছু বেছে নিন।",
  ],
  hpw: ["Min 10 chars · A-Z · a-z · 0-9 · symbol", "কমপক্ষে ১০ অক্ষর · A-Z · a-z · ০-৯ · চিহ্ন"],
  hpn: ["6 digits · no repeats or sequences", "৬ অঙ্ক · পুনরাবৃত্তি বা ক্রম নয়"],
  lkd: [
    "Account locked. Contact the IT branch.",
    "অ্যাকাউন্ট লক করা হয়েছে। আইটি শাখার সাথে যোগাযোগ করুন।",
  ],
  lft: ["attempt(s) left before the account is locked", "বার চেষ্টা বাকি, তারপর অ্যাকাউন্ট লক হবে"],
  bpm: ["Passwords do not match.", "পাসওয়ার্ড মিলছে না।"],
  uex: ["This account number is already registered.", "এই হিসাব নম্বর আগেই নিবন্ধিত।"],
  acok: ["Account created. Please log in.", "অ্যাকাউন্ট তৈরি হয়েছে। এবার লগইন করুন।"],
  ltd: ["Stored only on this device.", "শুধু এই ডিভাইসে সংরক্ষিত।"],
};
let K = "bank_v2";
let S;
try {
  S = JSON.parse(localStorage.getItem(K));
} catch (e) {}
const $ = (s) => document.querySelector(s),
  ago = (n) => {
    const d = new Date();
    d.setDate(d.getDate() - n);
    d.setHours(10, 0, 0, 0);
    return d.toISOString();
  };
function seed() {
  const l = [
    [0, "in", "sal", 85000, "sav"],
    [1, "out", "groc", 3450, "sav"],
    [2, "out", "elec", 2180, "sav"],
    [3, "out", "topup", 500, "sav", "••0412"],
    [4, "in", "rcv", 12000, "sav", "••6721"],
    [5, "out", "ride", 640, "cur"],
    [6, "out", "dine", 1820, "sav"],
    [8, "out", "inet", 1200, "sav"],
    [11, "in", "cdep", 20000, "cur"],
    [14, "out", "shop", 7400, "sav"],
    [18, "out", "pharm", 960, "sav"],
    [22, "in", "intr", 4120, "sav"],
    [27, "out", "gas", 850, "cur"],
    [33, "in", "sal", 85000, "sav"],
    [40, "out", "rent", 22000, "sav"],
  ];
  const tx = l.map((x, i) => ({
    id: "T" + (100000 + i),
    d: ago(x[0]),
    t: x[1],
    k: x[2],
    a: x[3],
    ac: x[4],
    x: x[5] || "",
  }));
  return {
    acc: [
      { id: "sav", b: 245830.5, no: "100123456789" },
      { id: "cur", b: 102400, no: "200234567890" },
      { id: "dps", b: 72000, no: "300345678901", i: 3000 },
      { id: "fd", b: 500000, no: "400456789012" },
    ],
    tx,
    ben: { acc: ["400412345678", "500523456789"], mob: ["01712345678", "01912345678"] },
    nt: tx.slice(0, 3).map((x) => ({ t: x.t, a: x.a, d: x.d, k: x.k })),
    un: 2,
    frozen: false,
    hide: false,
    show: false,
    theme: "auto",
    L: (navigator.language || "").startsWith("bn") ? "bn" : "en",
    name: "",
    pic: "",
  };
}
S = S || seed();
const AU = "bank_users",
  users = () => {
    try {
      return JSON.parse(localStorage.getItem(AU)) || [];
    } catch (e) {
      return [];
    }
  },
  saveUsers = (u) => {
    try {
      localStorage.setItem(AU, JSON.stringify(u));
    } catch (e) {}
  },
  fb = (p, sl) => {
    const z = sl + ":" + p;
    let a = 0xdeadbeef,
      b = 0x41c6ce57;
    for (let i = 0; i < z.length; i++) {
      const c = z.charCodeAt(i);
      a = Math.imul(a ^ c, 2654435761);
      b = Math.imul(b ^ c, 1597334677);
    }
    a = Math.imul(a ^ (a >>> 16), 2246822507) ^ Math.imul(b ^ (b >>> 13), 3266489909);
    b = Math.imul(b ^ (b >>> 16), 2246822507) ^ Math.imul(a ^ (a >>> 13), 3266489909);
    return "f" + (4294967296 * (2097151 & b) + (a >>> 0)).toString(16);
  },
  hp = async (p, sl, force) => {
    if (!force) {
      try {
        const d = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(sl + ":" + p));
        return [...new Uint8Array(d)].map((x) => x.toString(16).padStart(2, "0")).join("");
      } catch (e) {}
    }
    return fb(p, sl);
  },
  rs = () => {
    try {
      return [...crypto.getRandomValues(new Uint8Array(12))]
        .map((x) => x.toString(16).padStart(2, "0"))
        .join("");
    } catch (e) {
      return String(Math.random()).slice(2) + Date.now();
    }
  };
const nrm = (v) => v.replace(/[০-৯]/g, (d) => "০১২৩৪৫৬৭৮৯".indexOf(d)).replace(/\s/g, "");
(async () => {
  const us = users();
  if (!us.some((x) => x.u === "100123456789")) {
    const sl = rs();
    us.push({ u: "100123456789", name: "Demo User", s: sl, h: await hp("demo1234", sl) });
    saveUsers(us);
  }
})();
let SV = null,
  SU = null,
  LM = "login",
  LNO = false,
  RK = "pw";
const pwOK = (p) => !!SU && fb(p, SU.s) === SV;
const MAXF = 5,
  CPW = [
    "password",
    "password1",
    "password123",
    "passw0rd",
    "qwerty",
    "qwerty123",
    "qwertyuiop",
    "letmein",
    "welcome",
    "welcome1",
    "admin",
    "admin123",
    "iloveyou",
    "monkey",
    "dragon",
    "abc123",
    "abcd1234",
    "123456",
    "12345678",
    "123456789",
    "1234567890",
    "1q2w3e4r",
    "sonarbangla",
    "bangladesh",
    "bangladesh1",
    "dhaka123",
    "demo1234",
  ],
  isLk = (u) => !!(u && u.lk),
  pinWeak = (p) => {
    if (/^(\d)\1+$/.test(p)) return true;
    const d = [...p].map(Number);
    if (d.every((x, i) => !i || x - d[i - 1] === 1) || d.every((x, i) => !i || d[i - 1] - x === 1))
      return true;
    for (const n of [1, 2, 3]) {
      if (p.length % n === 0 && p === p.slice(0, n).repeat(p.length / n)) return true;
    }
    if (
      [
        "121212",
        "123123",
        "112233",
        "102030",
        "101010",
        "000123",
        "123321",
        "654321",
        "696969",
        "142536",
      ].includes(p)
    )
      return true;
    return false;
  },
  strongChk = (kind, v, un, nm) => {
    const lo = v.toLowerCase();
    if (kind === "pin") {
      if (!/^\d{6}$/.test(v)) return "bpn";
      if (pinWeak(v)) return "wpn";
      if (un.includes(v) || un.split("").reverse().join("").includes(v)) return "wpa";
      return "";
    }
    if (v.length < 10) return "bpw";
    if (!/[a-z]/.test(v) || !/[A-Z]/.test(v) || !/\d/.test(v) || !/[^A-Za-z0-9]/.test(v))
      return "wpw";
    if (CPW.some((c) => lo.includes(c))) return "wpc";
    if (/(.)\1{2,}/.test(v)) return "wpc";
    if (/(0123|1234|2345|3456|4567|5678|6789|abcd|bcde|cdef|qwer|asdf|zxcv)/i.test(v)) return "wpc";
    if (un.length >= 4 && (lo.includes(un.slice(-4)) || lo.includes(un.slice(0, 4)))) return "wpa";
    if (nm.split(/\s+/).some((w) => w.length >= 3 && lo.includes(w.toLowerCase()))) return "wpa";
    return "";
  },
  setUser = (u, ch) => {
    const us = users(),
      i = us.findIndex((x) => x.u === u.u);
    if (i >= 0) {
      Object.assign(us[i], ch);
      saveUsers(us);
    }
    Object.assign(u, ch);
  },
  failAttempt = (u) => {
    const n = (u.f || 0) + 1;
    if (n >= MAXF) {
      setUser(u, { f: n, lk: true });
      return { locked: true, left: 0 };
    }
    setUser(u, { f: n });
    return { locked: false, left: MAXF - n };
  },
  okAttempt = (u) => {
    if (u.f) setUser(u, { f: 0 });
  },
  lockOut = () => {
    unlocked = false;
    ST = [];
    SU = null;
    SV = null;
    K = "bank_v2";
    try {
      S = JSON.parse(localStorage.getItem(K));
    } catch (e) {
      S = null;
    }
    S = S || seed();
    LM = "login";
    LF.a = "";
    render();
    setTimeout(() => {
      const e = $("#le");
      e && (e.textContent = t("lkd"));
    }, 30);
  },
  pwOK2 = (v) => {
    if (!SU) return false;
    if (isLk(SU)) {
      lockOut();
      return false;
    }
    if (fb(v, SU.s) === SV) {
      okAttempt(SU);
      return true;
    }
    const r = failAttempt(SU);
    if (r.locked) {
      lockOut();
      return false;
    }
    toast(t("bad") + " · " + bd(r.left) + " " + t("lft"));
    return false;
  };

const L = () => (S.L === "bn" ? 1 : 0),
  TCC = {},
  SMW = new Set([
    "a",
    "an",
    "the",
    "to",
    "of",
    "and",
    "or",
    "for",
    "in",
    "on",
    "by",
    "with",
    "at",
    "vs",
    "per",
  ]),
  tc = (v) => {
    if (TCC[v] !== undefined) return TCC[v];
    let r = v;
    const w = v.split(" ");
    if (w.length <= 4 && !/[.?!…:]$/.test(v) && !/[^\x00-\x7F]/.test(v) && !/[{}$<>]/.test(v)) {
      r = w
        .map((x, i) => {
          if (i && SMW.has(x)) return x;
          return x.replace(/(^|[(\/-])([a-z])/g, (m, p, c) => p + c.toUpperCase());
        })
        .join(" ");
    }
    return (TCC[v] = r);
  },
  t = (k) => {
    const v = T[k][L()];
    return L() ? v : tc(v);
  },
  loc = () => (L() ? "bn-BD" : "en-IN"),
  bd = (s) => (L() ? String(s).replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[d]) : String(s));
const fm = (n) =>
    "৳" + Number(n).toLocaleString(loc(), { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
  nf = (n) => Number(n).toLocaleString(loc()),
  day = (d) =>
    new Date(d).toLocaleDateString(L() ? "bn-BD" : "en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
  gno = (s) => bd(s.replace(/(\d{4})(?=\d)/g, "$1 ")),
  esc = (s) =>
    String(s).replace(
      /[&<>"]/g,
      (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c],
    ),
  ic = (n) => `<svg class="i"><use href="#${n}"/></svg>`,
  save = () => {
    try {
      localStorage.setItem(K, JSON.stringify(S));
    } catch (e) {}
  },
  A = (id) => S.acc.find((x) => x.id === id),
  tot = () => S.acc.reduce((a, x) => a + x.b, 0),
  dsc = (x) =>
    t(x.k) +
    (x.pv ? " – " + pvn(x.pv) : "") +
    (x.x ? " " + bd(x.x) : "") +
    (x.n ? " - " + x.n : ""),
  buzz = () => {
    try {
      navigator.vibrate && navigator.vibrate(12);
    } catch (e) {}
  },
  row = (a, b) => `<div class="kv"><span class="mu">${a}</span><b>${b}</b></div>`;
const ym = (d) => {
    const x = new Date(d);
    return x.getFullYear() + "-" + String(x.getMonth() + 1).padStart(2, "0");
  },
  dk = (d) => d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(),
  mname = (k) =>
    new Date(k + "-15").toLocaleDateString(L() ? "bn-BD" : "en-GB", {
      month: "long",
      year: "numeric",
    });
const P = [
  "home",
  "send",
  "svc",
  "hist",
  "cards",
  "accs",
  "stmt",
  "ps",
  "me",
  "prefs",
  "bal",
  "flow",
  "week",
  "dayd",
  "acd",
  "cdd",
];
let [page, PA] = ((h) => {
    const [a, ...r] = h.split("/");
    return P.includes(a) ? [a === "me" || a === "prefs" ? "ps" : a, r] : ["home", []];
  })(location.hash.slice(1)),
  unlocked = false,
  F = { q: "", t: "all", m: "", tab: "acc" },
  DP = null,
  LF = { a: "", n: "" },
  ST = [],
  hs = () => page + (PA.length ? "/" + PA.join("/") : "");
const toast = (m) => {
  const e = $("#toast");
  e.textContent = m;
  e.className = "s";
  clearTimeout(toast.h);
  toast.h = setTimeout(() => (e.className = ""), m.length > 40 ? 4500 : 2400);
};
function addTx(ty, k, a, ac, x) {
  const o = {
    id: "T" + Date.now().toString().slice(-9),
    d: new Date().toISOString(),
    t: ty,
    k,
    a,
    ac,
    x: x || "",
  };
  S.tx.unshift(o);
  A(ac).b += ty === "in" ? a : -a;
  S.nt.unshift({ t: ty, a, d: o.d, k });
  S.nt = S.nt.slice(0, 20);
  save();
  buzz();
  return o;
}
const avatar = () =>
    `<span class="av">${S.pic ? `<img src="${S.picT && S.picO ? S.picT : S.pic}" alt="">` : ic("user")}</span>`,
  uname = () => S.name || t("holder");
const rowT = (x) =>
  `<button class="row ${x.t}" data-tx="${x.id}"><span class="ic">${ic(x.t === "in" ? "dn" : "up")}</span><div class="m"><b>${esc(dsc(x))}</b><span class="mu">${day(x.d)} • ${t("a_" + x.ac)}</span></div><span class="amt">${x.t === "in" ? "+" : "−"}${fm(x.a)}</span></button>`;
const NAV = [
  ["home", "home"],
  ["send", "send"],
  ["hist", "lst"],
  ["cards", "crd"],
  ["accs", "wal"],
  ["stmt", "doc"],
  ["ps", "set"],
];
const standalone = () => matchMedia("(display-mode: standalone)").matches || navigator.standalone;
function shell(body) {
  return `<div class="app"><aside><div class="brand"><span class="logo"><i></i></span>${t("app")}</div>${NAV.map((n) => `<button class="nv ${page === n[0] ? "on" : ""}" data-go="${n[0]}">${ic(n[1])}${t(n[0])}</button>`).join("")}<button class="nv sp" data-act="lock">${ic("out")}${t("so")}</button></aside>
<main><header class="tb${page === "home" ? " nst" : ""}"><button class="ib hbg" data-act="menu" aria-label="Menu"><i></i><i></i><i></i></button>${page === "home" ? `<button class="avb" data-act="pv" aria-label="${t("me")}">${avatar()}</button>` : ""}<span class="fl"></span>${page === "home" ? `<div class="mu clk" id="clk">${clkH()}</div>` : ""}${page === "home" ? `<button class="ib" data-act="lang" aria-label="${t("lang")}">${L() ? "En" : "বাং"}</button><button class="ib" data-act="nt" aria-label="${t("nt")}">${ic("bell")}${S.un ? '<i class="dot"></i>' : ""}</button>` : ""}</header>${page === "home" ? `<div class="gtb"><div class="gl2"><span class="gw">${t(gk())}</span><span class="gw">,</span> <b>${esc(uname())}</b></div><button type="button" class="gloc mu ${LB ? "busy" : ""}" data-act="hloc" aria-label="${t("loct")}">${ic("mappin")}<span>${LB ? t("lfind") : S.autoLoc && S.loc ? esc(cty()) : t("ldet")}</span></button></div>` : ""}${body}</main>
</div>`;
}
const tzn = () => Intl.DateTimeFormat().resolvedOptions().timeZone || "Asia/Dhaka",
  dtm = () =>
    new Date().toLocaleString(L() ? "bn-BD" : "en-GB", {
      timeZone: tzn(),
      weekday: "short",
      day: "numeric",
      month: "short",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }),
  locName = () => {
    if (S.autoLoc && S.loc) return S.loc.name;
    const c = tzn().split("/").pop().replace(/_/g, " ");
    return L() && c === "Dhaka" ? "ঢাকা" : c;
  },
  dpart = (o) =>
    new Date().toLocaleString(L() ? "bn-BD" : "en-GB", Object.assign({ timeZone: tzn() }, o)),
  clkH = () =>
    `<span class="dd">${dpart({ weekday: "short", day: "numeric", month: "short", year: "numeric" })}</span>`;
const gk = () => {
  const h =
    +new Intl.DateTimeFormat("en-GB", { timeZone: tzn(), hour: "numeric", hour12: false }).format(
      new Date(),
    ) % 24;
  return h >= 5 && h < 12
    ? "g_m"
    : h >= 12 && h < 14
      ? "g_n"
      : h >= 14 && h < 17
        ? "g_a"
        : h >= 17 && h < 20
          ? "g_e"
          : "g_t";
};
(function tick() {
  const e = $("#clk");
  e && (e.innerHTML = clkH());
  const g = $(".gw");
  g && (g.textContent = t(gk()));
  setTimeout(tick, 1000 - (Date.now() % 1000) + 4);
})();
const FI = () => (S.fi !== undefined ? !!S.fi : !!S.flow),
  FO = () => (S.fo !== undefined ? !!S.fo : !!S.flow);
let LB = false;
const cty = () =>
  String((S.loc && S.loc.name) || "")
    .split(",")[0]
    .trim();
function locSet(name, la, lo) {
  S.loc = { name, la, lo, t: Date.now() };
  S.autoLoc = true;
  S.locDenied = false;
  save();
}
async function locIP() {
  try {
    const r = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?localityLanguage=${L() ? "bn" : "en"}`,
      ),
      j = await r.json(),
      n = j.city || j.locality || j.principalSubdivision;
    if (n) {
      locSet(n, null, null);
      return true;
    }
  } catch (e) {}
  return false;
}
function locGet(silent, retry) {
  const ipFallback = (msg) => {
    LB = true;
    render();
    locIP().then((ok) => {
      LB = false;
      if (ok) {
        silent || toast("📍 " + S.loc.name + " · " + t("lappr"));
      } else {
        S.autoLoc = false;
        S.loc = null;
        silent || toast(t(msg));
      }
      save();
      render();
    });
  };
  if (!navigator.geolocation) {
    ipFallback("lnos");
    return;
  }
  if (window.isSecureContext === false) {
    ipFallback("linsec");
    return;
  }
  LB = true;
  render();
  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      const la = pos.coords.latitude,
        lo = pos.coords.longitude;
      let name = la.toFixed(2) + ", " + lo.toFixed(2);
      try {
        const r = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${la}&longitude=${lo}&localityLanguage=${L() ? "bn" : "en"}`,
          ),
          j = await r.json(),
          n = j.city || j.locality || j.principalSubdivision;
        if (n) name = n;
      } catch (e) {}
      LB = false;
      locSet(name, la, lo);
      render();
      silent || toast("📍 " + name);
    },
    (er) => {
      if (er.code === 1) {
        LB = false;
        if (!silent) toast(t("ldeny"));
        S.autoLoc = false;
        S.loc = null;
        S.locDenied = true;
        save();
        render();
        return;
      }
      if (!retry) {
        locGet(silent, true);
        return;
      }
      ipFallback(er.code === 2 ? "lgps" : "lerr");
    },
    retry
      ? { enableHighAccuracy: true, timeout: 20000, maximumAge: 600000 }
      : { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 },
  );
}
const locAuto = () => {
  if (unlocked && !LB && !S.locDenied && (!S.loc || !S.loc.t || Date.now() - S.loc.t > 600000))
    locGet(true);
};
document.addEventListener("visibilitychange", () => {
  document.visibilityState === "visible" && locAuto();
});
const head = (ti, r = "") =>
  `<div class="hd"><div style="display:flex;align-items:center;gap:10px;min-width:0"><button class="ib" data-act="back" aria-label="${t("back")}">${ic("bk")}</button><h1>${ti}</h1></div>${r}</div>`;
const TL = {
  send: ["send", "sendm"],
  addm: ["add", "addm"],
  bill: ["bill", "bill"],
  topup: ["ph", "topup"],
  qr: ["qr", "qr"],
  loan: ["calc", "loan"],
  zk: ["zk", "zk"],
  chq: ["chq", "chq"],
  cards: ["crd", "cards"],
  prefs: ["set", "prefs"],
  accs: ["wal", "accs"],
  stmt: ["doc", "stmt"],
};
const tiles = (l) =>
  `<div class="tiles">${l.map((k) => `<button class="q" data-${["send", "cards", "accs", "stmt", "prefs"].includes(k) ? "go" : "act"}="${k}"><span class="ic">${ic(TL[k][0])}</span>${t(TL[k][1])}</button>`).join("")}</div>`;
const V = {
  home() {
    const wk = [...Array(7)].map((_, i) => {
        const d = new Date();
        d.setDate(d.getDate() - 6 + i);
        return {
          k: dk(d),
          l: d.toLocaleDateString(L() ? "bn-BD" : "en-GB", { weekday: "short" }),
          v: S.tx
            .filter((x) => x.t === "out" && new Date(x.d).toDateString() === d.toDateString())
            .reduce((a, x) => a + x.a, 0),
        };
      }),
      mx = Math.max(...wk.map((x) => x.v), 1),
      m = S.tx.filter((x) => ym(x.d) === ym(new Date())),
      sm = (ty) => m.filter((x) => x.t === ty).reduce((a, x) => a + x.a, 0);
    return `
<div class="bento"><div class="hero tap" role="button" tabindex="0" data-go="bal"><button class="eye" data-act="hide" aria-label="Toggle balance">${ic(S.hide ? "ex" : "ey")}</button><span style="opacity:.85">${t("tot")}</span><div class="big">${S.hide ? "৳ ••••••" : fm(tot())}</div><span style="opacity:.85">${t("act")}: ${bd(S.acc.length)}</span><span class="chv">${ic("chv")}</span></div>
<div class="c stat in tap" role="button" tabindex="0" data-go="flow/in"><span class="chv">${ic("chv")}</span><span class="sic">${ic("dn")}</span><span class="mu">${t("mi")} · ${t("mo")}</span><b>${FI() ? fm(sm("in")) : "৳ ••••••"}</b><button class="eye2" data-act="fi" aria-label="${FI() ? "Hide" : "Show"}">${ic(FI() ? "ey" : "ex")}</button></div>
<div class="c stat out tap" role="button" tabindex="0" data-go="flow/out"><span class="chv">${ic("chv")}</span><span class="sic">${ic("up")}</span><span class="mu">${t("mout")} · ${t("mo")}</span><b>${FO() ? fm(sm("out")) : "৳ ••••••"}</b><button class="eye2" data-act="fo" aria-label="${FO() ? "Hide" : "Show"}">${ic(FO() ? "ey" : "ex")}</button></div>
<div class="c s4"><div class="hd" style="margin:0"><h2>${t("sp7")}</h2><button class="btn gh" data-go="week">${t("dtl")}</button></div><div class="bars">${wk.map((x) => `<button data-go="dayd/${x.k}" aria-label="${x.l}"><i style="height:${(x.v / mx) * 100}%"></i>${x.l}</button>`).join("")}</div></div>
<div class="c s4 sv"><div class="hd" style="margin:0 0 8px"><h2>${t("svc")}</h2><button class="btn gh" data-go="svc">${t("all")}</button></div>${tiles(["send", "addm", "bill", "topup", "qr", "loan", "zk", "chq"])}</div></div>`;
  },
  send() {
    const mob = F.tab === "mob",
      ph = mob ? "01XXXXXXXXX" : "XXXX XXXX XXXX";
    return (
      head(t("send")) +
      `<div class="c" style="max-width:540px"><div class="rcs">${rb("tab", "acc", !mob, t("toacc"))}${rb("tab", "mob", mob, t("tomob"))}</div>
<form id="tf"><label>${t("from")}</label>${rcs(
        "fa",
        ["sav", "cur"].map((i) => [i, t("a_" + i), fm(A(i).b)]),
        null,
        "fa",
      )}
<label>${mob ? t("mobn") : t("accn")}</label><input id="to" inputmode="numeric" placeholder="${ph}" required><div class="chips">${S.ben[F.tab].map((b) => `<button type="button" class="chip" data-fill="${b}">${ic("user").replace('class="i"', 'class="i" style="width:14px;height:14px"')} ${mob ? bd(b.slice(0, 3) + "••••" + b.slice(-4)) : bd("••" + b.slice(-4))}</button>`).join("")}</div>
<label>${t("amt")}</label><input id="am" type="number" min="1" step="0.01" placeholder="0.00" required><label>${t("note")}</label><input id="nt" maxlength="40"><button class="btn w">${t("cont")}</button></form></div>`
    );
  },
  svc() {
    const sc = (k, l) =>
      `<div class="c sv"><h2 style="margin-bottom:8px">${t(k)}</h2>${tiles(l)}</div>`;
    return (
      head(t("svc")) +
      `<div class="dp">` +
      sc("sec1", ["send", "addm", "bill", "topup", "qr"]) +
      sc("sec2", ["loan", "zk", "chq"]) +
      sc("sec3", ["cards", "stmt"]) +
      `</div>`
    );
  },
  accs() {
    return (
      head(t("accs")) +
      `<div class="g3">${S.acc.map((x) => `<div class="c tap" role="button" tabindex="0" data-go="acd/${x.id}"><span class="chv">${ic("chv")}</span><span class="mu">${t("a_" + x.id)}</span><div style="font-size:24px;font-weight:800;margin:8px 0">${S.hide ? "৳ ••••" : fm(x.b)}</div><span class="mu">${gno(x.no)}</span>${x.i ? `<div class="mu">${t("inf")}: ${fm(x.i)}</div>` : ""}<div class="chips"><button class="chip" data-copy="${x.no}">${t("copy")}</button><button class="chip" data-hist="${x.id}">${t("hist")}</button></div></div>`).join("")}</div>`
    );
  },
  hist() {
    const l = S.tx.filter(
      (x) =>
        (F.t === "all" || x.t === F.t) &&
        (!F.a || x.ac === F.a) &&
        dsc(x).toLowerCase().includes(F.q.toLowerCase()),
    );
    return (
      head(t("hist")) +
      `<div class="tool"><input id="fq" placeholder="${t("srch")}" value="${esc(F.q)}"><div class="rcs">${[
        ["all", "fall"],
        ["in", "mi"],
        ["out", "mout"],
      ]
        .map((o) => rb("ft", o[0], F.t === o[0], t(o[1])))
        .join(
          "",
        )}</div></div><div class="c">${l.map(rowT).join("") || `<p class="mu">${t("none")}</p>`}</div>`
    );
  },
  cards() {
    const lim = 50000,
      sp = S.tx.filter((x) => x.t === "out" && x.ac === "sav").reduce((a, x) => a + x.a, 0) % lim;
    return (
      head(t("cards")) +
      `<div class="g" style="grid-template-columns:repeat(auto-fit,minmax(280px,1fr))"><div class="cd tap ${S.frozen ? "fz" : ""}" role="button" tabindex="0" data-go="cdd"><div style="display:flex;justify-content:space-between">${ic("crd")}<span>${S.frozen ? t("cfz") : t("cact")}</span></div><div class="n">${S.show ? bd("4829 1034 7765 2091") : bd("•••• •••• •••• 2091")}</div><div style="display:flex;justify-content:space-between"><span>${t("dcard")}</span><span>${t("exp")} ${bd("09/29")}</span></div></div>
<div class="c"><div class="row" style="padding-top:0"><div class="m"><b>${t("frz")}</b><span class="mu">${t("frzs")}</span></div><button class="tg ${S.frozen ? "on" : ""}" data-act="frz" aria-label="${t("frz")}"></button></div><div class="row"><div class="m"><b>${t("shw")}</b></div><button class="tg ${S.show ? "on" : ""}" data-act="shw" aria-label="${t("shw")}"></button></div><div class="tap" role="button" tabindex="0" data-go="cdd" style="padding-top:14px"><span class="chv" style="top:14px;right:0">${ic("chv")}</span><b>${t("lim")}</b><div class="bar"><i style="width:${(sp / lim) * 100}%"></i></div><span class="mu">${t("used")}: ${fm(sp)} / ${fm(lim)}</span></div></div></div>`
    );
  },
  stmt() {
    const ms = [...new Set(S.tx.map((x) => ym(x.d)))];
    F.m = F.m || ms[0];
    const l = S.tx.filter((x) => ym(x.d) === F.m),
      s = (ty) => l.filter((x) => x.t === ty).reduce((a, x) => a + x.a, 0);
    return (
      head(
        t("stmt"),
        `<button class="btn gh noprint" data-act="print">${ic("pr")}${t("prt")}</button>`,
      ) +
      `<div class="tool noprint"><select id="fm">${ms.map((m) => `<option value="${m}" ${F.m === m ? "selected" : ""}>${new Date(m + "-15").toLocaleDateString(L() ? "bn-BD" : "en-GB", { month: "long", year: "numeric" })}</option>`).join("")}</select></div><div class="g3" style="margin-bottom:14px"><div class="c tap" role="button" tabindex="0" data-go="flow/in/${F.m}"><span class="chv">${ic("chv")}</span><span class="mu">${t("mi")}</span><h2>${fm(s("in"))}</h2></div><div class="c tap" role="button" tabindex="0" data-go="flow/out/${F.m}"><span class="chv">${ic("chv")}</span><span class="mu">${t("mout")}</span><h2>${fm(s("out"))}</h2></div><div class="c"><span class="mu">${t("net")}</span><h2>${fm(s("in") - s("out"))}</h2></div></div><div class="c ov"><table><tr><th>${t("date")}</th><th>${t("desc")}</th><th class="r">${t("amt")}</th></tr>${l.map((x) => `<tr><td>${day(x.d)}</td><td>${esc(dsc(x))}</td><td class="r">${x.t === "in" ? "+" : "−"}${fm(x.a)}</td></tr>`).join("")}</table></div>`
    );
  },
  bal() {
    const T0 = tot(),
      g = (l) => l.reduce((a, i) => a + A(i).b, 0),
      q = g(["sav", "cur"]),
      k = g(["dps", "fd"]),
      pc = (v) => (T0 ? Math.round((v / T0) * 100) : 0),
      hd = (v) => (S.hide ? "৳ ••••" : fm(v));
    return (
      head(t("brk")) +
      `<div class="dp"><div class="hero" style="margin:0"><span style="opacity:.85">${t("tot")}</span><div class="big">${hd(T0)}</div><span style="opacity:.85">${t("act")}: ${bd(S.acc.length)}</span></div><div class="g3"><div class="c stat in"><span class="mu">${t("lq")}</span><b>${hd(q)}</b><span class="mu">${bd(pc(q))}%</span></div><div class="c stat"><span class="mu">${t("lk")}</span><b>${hd(k)}</b><span class="mu">${bd(pc(k))}%</span></div></div><div class="c"><h2 style="margin-bottom:6px">${t("accs")}</h2>${S.acc.map((x) => `<div class="row" role="button" tabindex="0" data-go="acd/${x.id}"><span class="ic" style="background:var(--a2);color:var(--ax)">${ic(x.i || x.id === "fd" ? "lk" : "wal")}</span><div class="m"><b>${t("a_" + x.id)}</b><div class="bar" style="margin:6px 0 2px"><i style="width:${pc(x.b)}%;background:var(--ac)"></i></div><span class="mu">${gno(x.no)} · ${bd(pc(x.b))}%</span></div><span class="amt">${hd(x.b)}</span></div>`).join("")}</div></div>`
    );
  },
  flow() {
    const ty = PA[0] === "out" ? "out" : "in",
      mk = PA[1] || ym(new Date()),
      l = S.tx.filter((x) => x.t === ty && ym(x.d) === mk),
      tot = l.reduce((a, x) => a + x.a, 0),
      cat = {};
    l.forEach((x) => (cat[x.k] = (cat[x.k] || 0) + x.a));
    const no = `<p class="mu">${t("none")}</p>`;
    return (
      head(t(ty === "in" ? "mi" : "mout")) +
      `<div class="dp"><div class="c stat ${ty}"><span class="mu">${mname(mk)}</span><b style="font-size:28px">${fm(tot)}</b></div><div class="c">${row(t("hist"), bd(l.length))}${row(t("avg"), fm(l.length ? tot / l.length : 0))}${row(t("lrg"), fm(Math.max(0, ...l.map((x) => x.a))))}</div><div class="c"><h2 style="margin-bottom:6px">${t("cat")}</h2>${
        Object.entries(cat)
          .sort((a, b) => b[1] - a[1])
          .map(
            ([k, v]) =>
              `<div style="padding:8px 0"><div class="kv" style="border:0;padding:0"><span>${t(k)}</span><b>${fm(v)}</b></div><div class="bar"><i style="width:${(v / tot) * 100}%;background:var(--${ty === "in" ? "ok" : "rd"})"></i></div><span class="mu">${bd(Math.round((v / tot) * 100))}%</span></div>`,
          )
          .join("") || no
      }</div><div class="c"><h2>${t("hist")}</h2>${l.map(rowT).join("") || no}</div></div>`
    );
  },
  week() {
    const ds = [...Array(7)].map((_, i) => {
        const d = new Date();
        d.setDate(d.getDate() - 6 + i);
        const l = S.tx.filter((x) => new Date(x.d).toDateString() === d.toDateString());
        return {
          d,
          k: dk(d),
          n: l.length,
          o: l.filter((x) => x.t === "out").reduce((a, x) => a + x.a, 0),
        };
      }),
      tt = ds.reduce((a, x) => a + x.o, 0),
      mx = Math.max(...ds.map((x) => x.o), 1),
      hi = ds.reduce((a, x) => (x.o > a.o ? x : a), ds[0]);
    return (
      head(t("sp7")) +
      `<div class="dp"><div class="g3"><div class="c stat out"><span class="mu">${t("mout")}</span><b>${fm(tt)}</b></div><div class="c stat"><span class="mu">${t("avgd")}</span><b>${fm(tt / 7)}</b></div><div class="c stat"><span class="mu">${t("hgh")}</span><b>${hi.o ? day(hi.d) : "-"}</b></div></div><div class="c">${ds
        .slice()
        .reverse()
        .map(
          (x) =>
            `<div class="row" role="button" tabindex="0" data-go="dayd/${x.k}"><div class="m"><b>${x.d.toLocaleDateString(L() ? "bn-BD" : "en-GB", { weekday: "long", day: "numeric", month: "short" })}</b><div class="bar" style="margin:6px 0 2px"><i style="width:${(x.o / mx) * 100}%"></i></div><span class="mu">${t("hist")}: ${bd(x.n)}</span></div><span class="amt" style="color:var(--rd)">${fm(x.o)}</span></div>`,
        )
        .join("")}</div></div>`
    );
  },
  dayd() {
    const [y, m, d] = (PA[0] || "").split("-").map(Number),
      dt = new Date(y, m - 1, d);
    if (isNaN(dt)) return V.week();
    const l = S.tx.filter((x) => new Date(x.d).toDateString() === dt.toDateString()),
      s = (ty) => l.filter((x) => x.t === ty).reduce((a, x) => a + x.a, 0);
    return (
      head(
        dt.toLocaleDateString(L() ? "bn-BD" : "en-GB", {
          weekday: "long",
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
      ) +
      `<div class="dp"><div class="g3"><div class="c stat in"><span class="mu">${t("mi")}</span><b>${fm(s("in"))}</b></div><div class="c stat out"><span class="mu">${t("mout")}</span><b>${fm(s("out"))}</b></div><div class="c stat"><span class="mu">${t("net")}</span><b>${fm(s("in") - s("out"))}</b></div></div><div class="c"><h2>${t("hist")}</h2>${l.map(rowT).join("") || `<p class="mu">${t("none")}</p>`}</div></div>`
    );
  },
  acd() {
    const id = PA[0],
      x = A(id);
    if (!x) return V.accs();
    const l = S.tx.filter((y) => y.ac === id),
      mk = ym(new Date()),
      s = (ty) => l.filter((y) => y.t === ty && ym(y.d) === mk).reduce((a, y) => a + y.a, 0),
      pc = tot() ? Math.round((x.b / tot()) * 100) : 0;
    return (
      head(t("a_" + id)) +
      `<div class="dp"><div class="hero" style="margin:0"><span style="opacity:.85">${t("a_" + id)}</span><div class="big">${S.hide ? "৳ ••••" : fm(x.b)}</div><span style="opacity:.85">${gno(x.no)}</span></div><div class="g3"><div class="c stat in"><span class="mu">${t("mi")} · ${t("mo")}</span><b>${fm(s("in"))}</b></div><div class="c stat out"><span class="mu">${t("mout")} · ${t("mo")}</span><b>${fm(s("out"))}</b></div><div class="c stat"><span class="mu">${t("shb")}</span><b>${bd(pc)}%</b></div></div><div class="c">${row(t("accn"), gno(x.no))}${row(t("typ"), t("a_" + id))}${row(t("kyc"), t("actv"))}${x.i ? row(t("inf"), fm(x.i)) : ""}<div class="chips"><button class="chip" data-copy="${x.no}">${t("copy")}</button>${id === "sav" || id === "cur" ? `<button class="chip" data-go="send">${t("sendm")}</button>` : ""}</div></div><div class="c"><div class="hd" style="margin:0"><h2>${t("hist")}</h2><button class="btn gh" data-hist="${id}">${t("all")}</button></div>${l.slice(0, 6).map(rowT).join("") || `<p class="mu">${t("none")}</p>`}</div></div>`
    );
  },
  cdd() {
    const lim = 50000,
      l = S.tx.filter((x) => x.t === "out" && x.ac === "sav"),
      sp = l.reduce((a, x) => a + x.a, 0) % lim;
    return (
      head(t("dcard")) +
      `<div class="dp"><div class="cd ${S.frozen ? "fz" : ""}"><div style="display:flex;justify-content:space-between">${ic("crd")}<span>${S.frozen ? t("cfz") : t("cact")}</span></div><div class="n">${S.show ? bd("4829 1034 7765 2091") : bd("•••• •••• •••• 2091")}</div><div style="display:flex;justify-content:space-between"><span>${t("dcard")}</span><span>${t("exp")} ${bd("09/29")}</span></div></div><div class="c">${row(t("chn"), esc(uname()))}${row(t("lnk"), t("a_sav") + " · " + gno(A("sav").no))}${row(t("exp"), bd("09/29"))}${row(t("kyc"), S.frozen ? t("cfz") : t("cact"))}</div><div class="c"><b>${t("lim")}</b><div class="bar"><i style="width:${(sp / lim) * 100}%"></i></div>${row(t("lim"), fm(lim))}${row(t("used"), fm(sp))}${row(t("rem"), fm(lim - sp))}</div><div class="c"><div class="row" style="padding-top:0"><div class="m"><b>${t("frz")}</b><span class="mu">${t("frzs")}</span></div><button class="tg ${S.frozen ? "on" : ""}" data-act="frz" aria-label="${t("frz")}"></button></div><div class="row"><div class="m"><b>${t("shw")}</b></div><button class="tg ${S.show ? "on" : ""}" data-act="shw" aria-label="${t("shw")}"></button></div></div><div class="c"><h2>${t("hist")}</h2>${l.slice(0, 6).map(rowT).join("") || `<p class="mu">${t("none")}</p>`}</div></div>`
    );
  },
  me() {
    return `<div class="c" style="max-width:540px"><div class="pav"><span class="av" style="width:104px;height:104px">${S.pic ? `<img src="${S.picT && S.picO ? S.picT : S.pic}" alt="">` : ic("user").replace('class="i"', 'class="i" style="width:48px;height:48px"')}</span><button data-act="pic" aria-label="${t("pho")}">${ic("cam")}</button></div>
<label>${t("nm")}</label><input id="nmi" maxlength="40" value="${esc(S.name)}" placeholder="${t("holder")}"><button type="button" class="btn w" data-act="svn" style="margin-top:12px">${t("sv")}</button>${row(t("mobn"), bd("01712345678"))}${row(t("nid"), `<span style="color:var(--ok)">${ic("chk").replace('class="i"', 'class="i" style="width:14px;height:14px;vertical-align:-2px"')} ${t("ver")}</span>`)}${row(t("kyc"), t("actv"))}${S.pic ? `<button class="btn dg w" data-act="rmp">${t("rmp")}</button>` : ""}</div>`;
  },
  prefs() {
    return `<div class="c" style="max-width:540px"><label style="margin-top:0">${t("lang")}</label><div class="rcs">${rb("lg", "bn", L(), "বাংলা")}${rb("lg", "en", !L(), "English")}</div><label>${t("theme")}</label><div class="rcs">${[
      ["auto", "tauto"],
      ["light", "tl"],
      ["dark", "td"],
    ]
      .map((o) => rb("th", o[0], S.theme === o[0], t(o[1])))
      .join("")}</div><button class="btn dg w" data-act="reset">${t("reset")}</button></div>`;
  },
  ps() {
    return (
      head(t("ps")) +
      `<div class="ps"><h2 class="sh">${t("me")}</h2>${V.me()}<h2 class="sh" style="margin-top:8px">${t("prefs")}</h2>${V.prefs()}</div>`
    );
  },
};
function theme() {
  const d =
    S.theme === "dark" || (S.theme === "auto" && matchMedia("(prefers-color-scheme:dark)").matches);
  document.documentElement.dataset.theme = d ? "dark" : "light";
  document.documentElement.lang = S.L;
  const m = document.querySelector("meta[name=theme-color]");
  m && (m.content = d ? "#08130e" : "#006a4e");
}
async function authSubmit() {
  const er = (m) => {
      $("#le").textContent = m;
    },
    un = nrm($("#lu").value),
    pw = $("#lp").value,
    us = users();
  LF.a = un;
  if (LM === "reg") {
    const nm = $("#ln").value.trim(),
      p2 = $("#lp2").value;
    LF.n = nm;
    if (!/^\d{8,16}$/.test(un)) return er(t("bun"));
    if (!nm) return er(t("bnm"));
    const bad = strongChk(RK, pw, un, nm);
    if (bad) return er(t(bad));
    if (pw !== p2) return er(t(RK === "pin" ? "bpm2" : "bpm"));
    if (us.some((x) => x.u === un)) return er(t("uex"));
    const sl = rs(),
      h = await hp(pw, sl);
    us.push({ u: un, name: nm, s: sl, h, k: RK, f: 0, lk: false });
    saveUsers(us);
    LM = "login";
    LF.n = "";
    LNO = false;
    render();
    const e = $("#le");
    e && ((e.style.color = "#c8ffe8"), (e.textContent = t("acok")));
    return;
  }
  if (!un) return er(t("bun"));
  const u = us.find((x) => x.u === un);
  if (!u) {
    LNO = true;
    er(t("nacc"));
    const n = $("#lnr");
    n && (n.style.display = "block");
    return;
  }
  if (isLk(u)) return er(t("lkd"));
  if (!pw) return er(t("bad"));
  if ((await hp(pw, u.s, u.h[0] === "f")) !== u.h) {
    const r = failAttempt(u);
    return er(r.locked ? t("lkd") : t("bad") + " · " + bd(r.left) + " " + t("lft"));
  }
  okAttempt(u);
  enter(u, pw);
}
function enter(u, pw) {
  const l = S.L,
    th = S.theme;
  save();
  K = "bank_u_" + u.u;
  let n = null;
  try {
    n = JSON.parse(localStorage.getItem(K));
  } catch (e) {}
  S = n || seed();
  S.L = l;
  S.theme = th;
  S.name = u.name;
  S.un = 0;
  save();
  SU = u;
  SV = fb(pw, u.s);
  LF = { a: "", n: "" };
  LNO = false;
  unlocked = true;
  buzz();
  render();
  S.locDenied || locGet(true);
}
function render() {
  ovl();
  theme();
  const r = $("#root");
  if (!unlocked) {
    r.innerHTML = `<div class="lock"><div class="lh"><div class="lt"><span class="logo"><i></i></span><span style="display:flex;gap:8px;align-items:center"><button type="button" class="lgb" data-act="thm" aria-label="${t("theme")}">${document.documentElement.dataset.theme === "dark" ? '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="display:block"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>' : '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>'}</button><button type="button" class="lgb" data-act="lang">${L() ? "English" : "বাংলা"}</button></span></div><div><h1>${t("app")}</h1></div></div><form class="ls2" id="lf" autocomplete="off"><div class="tabs"><button type="button" class="${LM === "login" ? "on" : ""}" data-act="ltab">${t("lgn")}</button><button type="button" class="${LM === "reg" ? "on" : ""}" data-act="rtab">${t("rgs")}</button></div><label>${t("uacc")}</label><input id="lu" maxlength="19" inputmode="numeric" spellcheck="false" autocomplete="username" placeholder="XXXX XXXX XXXX" value="${esc(LF.a)}">${LM === "reg" ? `<label>${t("nm")}</label><input id="ln" maxlength="40" value="${esc(LF.n)}">` : ""}${LM === "reg" ? `<label>${t("cty_")}</label><div class="tabs"><button type="button" class="${RK === "pw" ? "on" : ""}" data-act="kpw">${t("ctp")}</button><button type="button" class="${RK === "pin" ? "on" : ""}" data-act="kpn">${t("ctn")}</button></div>` : ""}<label id="lpl">${LM === "reg" ? (RK === "pin" ? t("pns") : t("pws")) : t("pwl")}</label><div class="pw"><input id="lp" type="password" ${LM === "reg" && RK === "pin" ? 'inputmode="numeric" maxlength="6" ' : ""}autocomplete="${LM === "reg" ? "new-password" : "current-password"}"><button type="button" class="eyb" tabindex="-1" aria-label="Show/Hide">${ic("ey")}</button></div>${LM === "reg" ? `<label>${RK === "pin" ? t("pnc") : t("pwc")}</label><div class="pw"><input id="lp2" type="password" ${RK === "pin" ? 'inputmode="numeric" maxlength="6" ' : ""}autocomplete="new-password"><button type="button" class="eyb" tabindex="-1" aria-label="Show/Hide">${ic("ey")}</button></div><span class="mu" style="text-align:center;font-size:12px">${RK === "pin" ? t("hpn") : t("hpw")}</span>` : ""}<span id="le" style="color:var(--rd);text-align:center;min-height:20px;font-weight:600"></span><button class="btn w">${LM === "reg" ? t("cra") : t("lgn")}</button>${LM === "login" ? `<div class="lnr" id="lnr" style="display:${LNO || !users().length ? "block" : "none"}">${t("noac")} <button type="button" class="lkb" data-act="rtab">${t("rgs")}</button></div>` : `<div class="lnr">${t("hasac")} <button type="button" class="lkb" data-act="ltab">${t("lgn")}</button></div>`}</form></div>`;
    sync();
    return;
  }
  const y = scrollY;
  r.innerHTML = shell(V[page]());
  scrollTo({ top: y, behavior: "instant" });
  sync();
}
const busy = (b, fn) => fn(),
  ovl = () => document.querySelectorAll(".md,.so").forEach((e) => e.remove()),
  ctr = (el, sm) => {
    const w = el.parentElement;
    if (!w || w.scrollWidth <= w.clientWidth) return;
    const a = el.getBoundingClientRect(),
      b = w.getBoundingClientRect();
    w.scrollTo({
      left: w.scrollLeft + a.left - b.left - (w.clientWidth - a.width) / 2,
      behavior: sm ? "smooth" : "auto",
    });
  },
  sync = () => {
    document.documentElement.classList.toggle(
      "nos",
      !unlocked || !!document.querySelector(".md,.so"),
    );
    document.querySelectorAll(".rcs .rc.on").forEach((e) => ctr(e));
  };
function modal(ti, body, ok, okl) {
  ovl();
  const m = document.createElement("div");
  m.className = "md";
  m.innerHTML = `<form class="c mf"><div class="mh"><button type="button" class="ib" data-x aria-label="${t("back")}">${ic("bk")}</button><h2>${ti}</h2><span class="mhs"></span></div><div class="mb">${body}</div><div class="mfo"><button type="button" class="btn gh" style="flex:1" data-x>${ok ? t("cancel") : t("close")}</button>${ok ? `<button class="btn" style="flex:1">${okl || t("conf")}</button>` : ""}</div></form>`;
  document.body.appendChild(m);
  sync();
  const f = m.querySelector("form"),
    cl = () => {
      m.remove();
      sync();
    };
  m.querySelectorAll("[data-x]").forEach((x) => (x.onclick = cl));
  m.onclick = (e) => e.target === m && cl();
  f.onsubmit = (e) => {
    e.preventDefault();
    if (ok)
      busy(f.querySelector(".btn:not(.gh)"), () => {
        const x = ok(f);
        if (x !== false) cl();
        return x;
      });
  };
  const i = m.querySelector("input");
  i && innerWidth > 860 && i.focus();
  return f;
}
function receipt(x, ti) {
  const sh = () => {
    const s = `${dsc(x)} ${fm(x.a)} — ${x.id}`;
    if (navigator.share) navigator.share({ text: s }).catch(() => {});
    else {
      try {
        navigator.clipboard.writeText(s);
      } catch (e) {}
      toast(t("copied"));
    }
    return false;
  };
  modal(
    ti,
    `<div class="ok" style="margin-top:12px">${ic("chk")}</div><div style="text-align:center;font-size:26px;font-weight:800;margin:4px 0 12px;color:var(--${x.t === "in" ? "ok" : "rd"})">${x.t === "in" ? "+" : "−"}${fm(x.a)}</div>${row(t("desc"), esc(dsc(x)))}${row(t("sel"), t("a_" + x.ac))}${x.cn ? row(t("bno"), esc(x.cn)) : ""}${x.md ? row(t("bmode"), t(x.md === "pre" ? "bpre" : "bpost")) : ""}${x.bm ? row(t("bmonth"), mname(x.bm)) : ""}${x.ct ? row(t("mobn"), bd(x.ct)) : ""}${x.tok ? row(t("tok"), bd(x.tok)) : ""}${row(t("ref"), bd(x.id))}${row(t("dt"), new Date(x.d).toLocaleString(L() ? "bn-BD" : "en-GB", { dateStyle: "medium", timeStyle: "short" }))}`,
    sh,
    t("shr"),
  );
}
const rcs = (n, o, v, id) =>
    `<div class="rcs"><input type="hidden" name="${n}" ${id ? `id="${id}"` : ""} value="${v ?? o[0][0]}">${o.map((x) => `<button type="button" class="rc ${x[0] == (v ?? o[0][0]) ? "on" : ""}" data-rv="${x[0]}">${x[1]}${x[2] ? `<small>${x[2]}</small>` : ""}</button>`).join("")}</div>`,
  rb = (at, v, on, tx) =>
    `<button type="button" class="rc ${on ? "on" : ""}" data-${at}="${v}">${tx}</button>`,
  accSel = () =>
    `<label>${t("sel")}</label>` +
    rcs(
      "ac",
      ["sav", "cur"].map((i) => [i, t("a_" + i), fm(A(i).b)]),
    ),
  amF = `<label>${t("amt")}</label><input name="am" type="number" min="1" step="0.01" required>`,
  sel = (n, l) =>
    `<label>${n}</label>` +
    rcs(
      "k",
      l.map((o) => [o[0], t(o[1])]),
    );
function pay(f, k, x, ty) {
  const a = +f.am.value,
    ac = f.ac.value;
  if (ty !== "in" && a > A(ac).b) {
    toast(t("ins"));
    return false;
  }
  const o = addTx(ty || "out", k, a, ac, x);
  render();
  receipt(o, t("okt"));
}
function qrSvg(sd) {
  let h = 0;
  for (const c of sd) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  const r = () => (h = (h * 1664525 + 1013904223) >>> 0) / 4294967296;
  let s = "";
  for (let y = 0; y < 21; y++)
    for (let x = 0; x < 21; x++) {
      if ((x < 8 && y < 8) || (x > 12 && y < 8) || (x < 8 && y > 12)) continue;
      if (r() > 0.5) s += `<rect x="${x}" y="${y}" width="1" height="1"/>`;
    }
  const fin = (x, y) =>
    `<rect x="${x + 0.5}" y="${y + 0.5}" width="6" height="6" fill="none" stroke="currentColor"/><rect x="${x + 2}" y="${y + 2}" width="3" height="3"/>`;
  return `<svg viewBox="-1 -1 23 23" style="width:200px;height:200px;color:var(--ink);fill:currentColor">${s}${fin(0, 0)}${fin(14, 0)}${fin(0, 14)}</svg>`;
}
const calc = {
  loan(f) {
    const p = +f.p.value,
      r = Math.max(0, +f.r.value || 0) / 1200,
      n = Math.round(+f.m.value),
      R = f.querySelector(".res");
    if (!(p > 0 && n > 0)) {
      R.innerHTML = `<span class="mu">${t("lh")}</span>`;
      return;
    }
    const e = r ? (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : p / n;
    if (!isFinite(e)) {
      R.innerHTML = `<span class="mu">${t("lh")}</span>`;
      return;
    }
    R.innerHTML = row(t("emi"), fm(e)) + row(t("tint"), fm(e * n - p)) + row(t("tpay"), fm(e * n));
  },
  zakat(f) {
    const w = +f.w.value || 0,
      n = +f.n.value || 0;
    f.querySelector(".res").innerHTML =
      n > 0 && w >= n
        ? row(t("zdue"), fm(w * 0.025))
        : `<span class="mu">${t(n > 0 ? "znd" : "zh")}</span>`;
  },
};
const IDB = (m, k, v) =>
  new Promise((ok, no) => {
    try {
      const r = indexedDB.open("sb_pics", 1);
      r.onupgradeneeded = () => r.result.createObjectStore("p");
      r.onerror = () => no(r.error);
      r.onsuccess = () => {
        const db = r.result,
          tx = db.transaction("p", m === "get" ? "readonly" : "readwrite"),
          st = tx.objectStore("p"),
          q = m === "get" ? st.get(k) : m === "put" ? st.put(v, k) : st.delete(k);
        tx.oncomplete = () => {
          db.close();
          ok(q.result);
        };
        tx.onerror = tx.onabort = () => {
          db.close();
          no(tx.error);
        };
      };
    } catch (e) {
      no(e);
    }
  });
const picThumb = (im) => {
  const n = 480,
    c = document.createElement("canvas");
  c.width = c.height = n;
  const g = c.getContext("2d");
  g.imageSmoothingEnabled = true;
  g.imageSmoothingQuality = "high";
  const m = Math.min(im.width, im.height),
    sx = (im.width - m) / 2,
    sy = (im.height - m) / 2;
  let sw = im.width,
    sh = im.height,
    src = im;
  g.drawImage(src, sx, sy, m, m, 0, 0, n, n);
  let d = c.toDataURL("image/webp", 0.95);
  if (!d.startsWith("data:image/webp")) d = c.toDataURL("image/jpeg", 0.95);
  return d;
};
async function setPic(fl) {
  let im;
  try {
    im = await loadImg(fl);
  } catch (e) {
    toast(t("bimg"));
    return;
  }
  const th = picThumb(im);
  let full = false;
  try {
    await IDB("put", "pic_" + K, fl);
    full = true;
  } catch (e) {}
  if (!full && fl.size <= 1500000) {
    S.pic = await new Promise((r) => {
      const fr = new FileReader();
      fr.onload = () => r(fr.result);
      fr.readAsDataURL(fl);
    });
    S.picO = 0;
  } else {
    S.pic = th;
    S.picO = full ? 1 : 0;
  }
  if (full) S.picT = th;
  save();
  render();
}
const loadImg = async (fl) => {
  try {
    return await createImageBitmap(fl, { imageOrientation: "from-image" });
  } catch (e) {
    return new Promise((ok, no) => {
      const u = URL.createObjectURL(fl),
        i = new Image();
      i.onload = () => ok(i);
      i.onerror = no;
      i.src = u;
    });
  }
};
function crop(im) {
  const W = 280,
    w = im.width,
    h = im.height,
    bs = W / Math.min(w, h);
  let z = 1,
    x = 0,
    y = 0;
  const dr = (c, n) => {
    const k = n / W,
      mx = Math.max(0, (w * bs * z - W) / 2),
      my = Math.max(0, (h * bs * z - W) / 2);
    x = Math.max(-mx, Math.min(mx, x));
    y = Math.max(-my, Math.min(my, y));
    c.fillStyle = "#fff";
    c.fillRect(0, 0, n, n);
    c.imageSmoothingQuality = "high";
    const sw = w * bs * z * k,
      sh = h * bs * z * k;
    c.drawImage(im, n / 2 - sw / 2 + x * k, n / 2 - sh / 2 + y * k, sw, sh);
  };
  const f = modal(
      t("pho"),
      `<canvas width="${W}" height="${W}" style="width:100%;max-width:${W}px;display:block;margin:14px auto;border-radius:50%;touch-action:none;cursor:grab"></canvas><input type="range" min="1" max="4" step="0.01" value="1" aria-label="Zoom">`,
      () => {
        const o = document.createElement("canvas");
        o.width = o.height = 512;
        dr(o.getContext("2d"), 512);
        let d = o.toDataURL("image/webp", 0.9);
        if (!d.startsWith("data:image/webp")) d = o.toDataURL("image/jpeg", 0.9);
        S.pic = d;
        save();
        render();
      },
      t("sv"),
    ),
    cv = f.querySelector("canvas"),
    g = cv.getContext("2d"),
    zm = f.querySelector("[type=range]");
  let px, py;
  dr(g, W);
  zm.oninput = () => {
    z = +zm.value;
    dr(g, W);
  };
  cv.onpointerdown = (e) => {
    cv.setPointerCapture(e.pointerId);
    px = e.clientX;
    py = e.clientY;
  };
  cv.onpointermove = (e) => {
    if (px == null) return;
    const k = W / cv.getBoundingClientRect().width;
    x += (e.clientX - px) * k;
    y += (e.clientY - py) * k;
    px = e.clientX;
    py = e.clientY;
    dr(g, W);
  };
  cv.onpointerup = cv.onpointercancel = () => (px = null);
}
const PV = {
    elec_pre: [
      ["bpdb", "BPDB", "বিপিডিবি"],
      ["bpdbs", "BPDB Sylhet", "বিপিডিবি সিলেট"],
      ["desco", "DESCO", "ডেসকো"],
      ["dpdc", "DPDC", "ডিপিডিসি"],
      ["breb", "Palli Bidyut", "পল্লী বিদ্যুৎ"],
      ["wzpdcl", "WZPDCL", "ওজোপাডিকো"],
      ["nesco", "NESCO", "নেসকো"],
    ],
    elec_post: [
      ["bpdb", "BPDB", "বিপিডিবি"],
      ["desco", "DESCO", "ডেসকো"],
      ["dpdc", "DPDC", "ডিপিডিসি"],
      ["nesco", "NESCO", "নেসকো"],
      ["breb", "Palli Bidyut", "পল্লী বিদ্যুৎ"],
      ["wzpdcl", "WZPDCL", "ওজোপাডিকো"],
    ],
    gas: [
      ["titas", "Titas Gas (Non-metered)", "তিতাস গ্যাস (নন-মিটারড)"],
      ["karnaphuli", "Karnaphuli Gas", "কর্ণফুলী গ্যাস"],
      ["jalalabad", "Jalalabad Gas", "জালালাবাদ গ্যাস"],
      ["pashchimanchal", "Pashchimanchal Gas", "পশ্চিমাঞ্চল গ্যাস"],
      ["sundarban", "Sundarban Gas", "সুন্দরবন গ্যাস"],
    ],
    water: [
      ["dwasa", "Dhaka WASA", "ঢাকা ওয়াসা"],
      ["cwasa", "Chattogram WASA", "চট্টগ্রাম ওয়াসা"],
      ["rwasa", "Rajshahi WASA", "রাজশাহী ওয়াসা"],
      ["kwasa", "Khulna WASA", "খুলনা ওয়াসা"],
    ],
    tel: [["btcl", "BTCL", "বিটিসিএল"]],
    inet: [
      ["link3", "Link3", "লিংক থ্রি"],
      ["carnival", "Carnival Internet", "কার্নিভাল ইন্টারনেট"],
      ["amber", "Amber IT", "অ্যাম্বার আইটি"],
      ["bdcom", "BDCOM Online", "বিডিকম অনলাইন"],
      ["dot", "Dot Internet", "ডট ইন্টারনেট"],
      ["adn", "ADN Telecom", "এডিএন টেলিকম"],
    ],
    tv: [["bumblebee", "Bumblebee Limited", "বাম্বলবি লিমিটেড"]],
    card: [
      ["visa", "Visa credit card", "ভিসা ক্রেডিট কার্ড"],
      ["amex", "City Bank AMEX", "সিটি ব্যাংক অ্যামেক্স"],
    ],
    edu: [
      ["school", "School tuition fee", "স্কুলের বেতন ও ফি"],
      ["college", "College tuition fee", "কলেজের বেতন ও ফি"],
      ["board", "Education Board (SSC/HSC)", "শিক্ষা বোর্ড (এসএসসি/এইচএসসি)"],
      ["nu", "National University", "জাতীয় বিশ্ববিদ্যালয়"],
      ["du", "University of Dhaka", "ঢাকা বিশ্ববিদ্যালয়"],
      ["buet", "BUET", "বুয়েট"],
      ["bou", "Bangladesh Open University", "বাংলাদেশ উন্মুক্ত বিশ্ববিদ্যালয়"],
      ["madrasa", "Madrasah Education Board", "মাদ্রাসা শিক্ষা বোর্ড"],
    ],
    govt: [
      ["land", "Land fee (land tax / e-mutation)", "ভূমি ফি (ভূমি উন্নয়ন কর / ই-নামজারি)"],
      ["brta", "BRTA fee", "বিআরটিএ ফি"],
      ["dscc", "Dhaka South City Corporation", "ঢাকা দক্ষিণ সিটি কর্পোরেশন"],
      ["scc", "Sylhet City Corporation", "সিলেট সিটি কর্পোরেশন"],
    ],
  },
  pvn = (id) => {
    for (const k in PV) {
      const o = PV[k].find((x) => x[0] === id);
      if (o) return o[L() ? 2 : 1];
    }
    return id;
  },
  lg = (n) => {
    const w = n
        .replace(/\(.*\)/, "")
        .trim()
        .split(/\s+/),
      i = (w.length > 1 ? w[0][0] + w[1][0] : n.slice(0, 2)).toUpperCase();
    let h = 0;
    for (const c of n) h = (h * 31 + c.charCodeAt(0)) % 360;
    return `<span class="lg" style="background:hsl(${h} 45% 38%)">${i}</span>`;
  },
  binst = (id) =>
    id === "school" || id === "college"
      ? `<label>${t("binstl")}</label><input name="inst" maxlength="60" autocomplete="off" required>`
      : "",
  bdyn = (k, m) => {
    m = m || "pre";
    const l = PV[k === "elec" ? "elec_" + m : k];
    return (
      (k === "elec"
        ? `<label>${t("bmode")}</label>` +
          rcs(
            "md",
            [
              ["pre", t("bpre")],
              ["post", t("bpost")],
            ],
            m,
          )
        : "") +
      `<label>${t("bprv")}</label>${rcs(
        "pv",
        l.map((o) => [o[0], lg(o[1]) + o[L() ? 2 : 1]]),
      )}<div id="binst">${binst(l[0][0])}</div><label>${t("bl_" + (k === "elec" ? m : k))}</label><input name="cn" maxlength="20" autocomplete="off" required>` +
      ((k === "elec" && m === "post") || ["gas", "water", "tel", "inet", "tv"].includes(k)
        ? `<label>${t("bmonth")}</label><input name="bm" type="month" value="${ym(new Date())}" required>`
        : "") +
      (k === "edu" || k === "govt"
        ? ""
        : `<label>${t("mobn")}</label><input name="ct" inputmode="numeric" maxlength="11" value="01712345678" required>`)
    );
  };
const act = {
  thm() {
    S.theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    save();
    render();
  },
  lock() {
    const l = S.L,
      th = S.theme;
    save();
    unlocked = false;
    ST = [];
    SU = null;
    SV = null;
    K = "bank_v2";
    try {
      S = JSON.parse(localStorage.getItem(K));
    } catch (e) {
      S = null;
    }
    S = S || seed();
    S.L = l;
    S.theme = th;
    LM = "login";
    render();
  },
  demo() {
    LM = "login";
    LF.a = "100123456789";
    render();
    $("#lp").value = "demo1234";
  },
  ltab() {
    LF.a = ($("#lu") || {}).value || LF.a;
    LM = "login";
    render();
  },
  kpw() {
    LF.a = ($("#lu") || {}).value || LF.a;
    LF.n = ($("#ln") || {}).value || LF.n;
    RK = "pw";
    render();
  },
  kpn() {
    LF.a = ($("#lu") || {}).value || LF.a;
    LF.n = ($("#ln") || {}).value || LF.n;
    RK = "pin";
    render();
  },
  rtab() {
    LF.a = ($("#lu") || {}).value || LF.a;
    LM = "reg";
    render();
  },
  menu() {
    ovl();
    const o = document.createElement("div");
    o.className = "so";
    o.innerHTML = `<div class="dr"><div class="brand"><span class="logo"><i></i></span>${t("app")}</div>${["home", "send", "hist", "accs", "ps"].map((p) => `<button class="nv ${page === p ? "on" : ""}" data-m="${p}">${ic(NAV.find((n) => n[0] === p)[1])}${t(p)}</button>`).join("")}<button class="nv sp" data-m="_out" style="color:var(--rd)">${ic("out")}${t("so")}</button></div>`;
    o.onclick = (e) => {
      const b = e.target.closest("[data-m]");
      if (b || e.target === o) {
        o.remove();
        sync();
        if (b) b.dataset.m === "_out" ? act.lock() : (location.hash = b.dataset.m);
      }
    };
    document.body.appendChild(o);
    sync();
  },
  hide() {
    S.hide = !S.hide;
    save();
    render();
  },
  hloc() {
    if (!LB) {
      S.locDenied = false;
      toast(t("lfind"));
      locGet();
    }
  },
  loc() {
    if (S.autoLoc) {
      S.autoLoc = false;
      S.loc = null;
      save();
      render();
    } else locGet();
  },
  flw() {
    S.flow = !S.flow;
    save();
    render();
  },
  fi() {
    S.fi = !FI();
    save();
    render();
  },
  fo() {
    S.fo = !FO();
    save();
    render();
  },
  frz() {
    S.frozen = !S.frozen;
    save();
    render();
  },
  shw() {
    S.show = !S.show;
    save();
    render();
  },
  print() {
    window.print();
  },
  back() {
    location.hash = ST.length ? ST[ST.length - 1] : "home";
  },
  rmp() {
    S.pic = "";
    S.picT = "";
    S.picO = 0;
    IDB("del", "pic_" + K).catch(() => {});
    save();
    render();
  },
  svn() {
    const i = $("#nmi");
    if (i) S.name = i.value.trim();
    save();
    if (SU) setUser(SU, { name: S.name });
    const g = document.querySelector(".gtb b");
    g && (g.textContent = uname());
    if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
    toast(t("svd"));
  },
  pv() {
    ovl();
    const m = document.createElement("div");
    m.className = "md pv";
    m.innerHTML = `<button class="ib pvb" aria-label="${t("back")}">${ic("bk")}</button>${S.pic ? `<img class="pvo" src="${S.picT && S.picO ? S.picT : S.pic}" alt="" draggable="false">` : `<span class="pvi pvn">${ic("user")}</span>`}`;
    let u;
    const cl = () => {
      m.remove();
      if (u) URL.revokeObjectURL(u);
      sync();
    };
    m.onclick = cl;
    const nz = (e) => e.preventDefault();
    ["gesturestart", "gesturechange", "gestureend", "dblclick", "contextmenu"].forEach((k) =>
      m.addEventListener(k, nz),
    );
    m.addEventListener("touchmove", nz, { passive: false });
    m.addEventListener("wheel", nz, { passive: false });
    if (S.pic && S.picO)
      IDB("get", "pic_" + K)
        .then((b) => {
          if (b && m.isConnected) {
            u = URL.createObjectURL(b);
            const i = m.querySelector(".pvo");
            i.src = u;
          }
        })
        .catch(() => {});
    document.body.appendChild(m);
    sync();
  },
  lang() {
    S.L = L() ? "en" : "bn";
    save();
    render();
    S.autoLoc && locGet(true);
  },
  pic() {
    $("#pf").click();
  },
  nt() {
    S.un = 0;
    save();
    render();
    modal(
      t("nt"),
      `<div style="margin-top:8px">${S.nt.map((n) => `<div class="row ${n.t === "sys" ? "in" : n.t}" style="cursor:default"><span class="ic">${ic(n.t === "sys" ? "bell" : n.t === "in" ? "dn" : "up")}</span><div class="m"><b>${n.t === "sys" ? t(n.k) : t(n.t === "in" ? "ncr" : "ndb") + " " + fm(n.a)}</b><span class="mu">${day(n.d)}</span></div></div>`).join("") || `<p class="mu">${t("nnt")}</p>`}</div>`,
    );
  },
  inst() {
    if (DP) {
      DP.prompt();
      DP = null;
    } else
      modal(
        t("inst"),
        `<div class="ok" style="margin-top:12px">${ic("dl")}</div><p style="text-align:center">${t("inss")}</p>`,
      );
  },
  reset() {
    modal(t("resq"), `<p class="mu" style="text-align:center">${t("resm")}</p>`, () => {
      const l = S.L,
        th = S.theme;
      S = seed();
      S.L = l;
      S.theme = th;
      save();
      render();
    });
  },
  addm() {
    modal(
      t("addm"),
      accSel() +
        sel(t("src"), [
          ["s1", "s1"],
          ["s2", "s2"],
          ["s3", "s3"],
        ]) +
        amF,
      (f) => pay(f, "madd", "", "in"),
    );
  },
  bill() {
    const f = modal(
      t("bill"),
      accSel() +
        sel(
          t("bty"),
          ["elec", "gas", "water", "tel", "inet", "tv", "card", "edu", "govt"].map((k) => [k, k]),
        ) +
        `<div id="bdyn">${bdyn("elec")}</div>` +
        amF,
      (f) => {
        const k = f.k.value,
          m = f.md ? f.md.value : "",
          pv = f.pv.value,
          a = +f.am.value,
          ac = f.ac.value,
          c0 = f.cn.value.replace(/\s/g, "");
        const good =
          k === "card"
            ? /^\d{16}$/.test(c0)
            : k === "elec" && m === "pre"
              ? /^\d{6,14}$/.test(c0)
              : /^[A-Za-z0-9\-\/]{4,20}$/.test(c0);
        if (!good) {
          toast(t(k === "card" ? "bcard" : "bbad"));
          return false;
        }
        if (f.ct && !/^01[3-9]\d{8}$/.test(f.ct.value)) {
          toast(t("bmob"));
          return false;
        }
        if (f.inst && f.inst.value.trim().length < 2) {
          toast(t("binstbad"));
          return false;
        }
        const v = {
          cn: k === "card" ? "•••• •••• •••• " + c0.slice(-4) : c0,
          bm: f.bm ? f.bm.value : "",
          ct: f.ct ? f.ct.value : "",
          n: f.inst ? f.inst.value.trim() : "",
        };
        if (a > A(ac).b) {
          toast(t("ins"));
          return false;
        }
        modal(
          t("conf"),
          `<div style="text-align:center;font-size:26px;font-weight:800;margin:10px 0">${fm(a)}</div>${row(t("bty"), t(k))}${row(t("bprv"), pvn(pv))}${v.n ? row(t("binstl"), esc(v.n)) : ""}${row(t("bl_" + (k === "elec" ? m : k)), esc(v.cn))}${v.bm ? row(t("bmonth"), mname(v.bm)) : ""}${v.ct ? row(t("mobn"), bd(v.ct)) : ""}${row(t("amt"), fm(a))}<label>${SU && SU.k === "pin" ? t("pnl") : t("pin")}</label><div class="pw"><input name="p" type="password" ${SU && SU.k === "pin" ? 'inputmode="numeric" maxlength="6" ' : ""}autocomplete="current-password" required><button type="button" class="eyb" tabindex="-1" aria-label="Show/Hide">${ic("ey")}</button></div>`,
          (g) => {
            if (!pwOK2(g.p.value)) return false;
            const o = addTx("out", k, a, ac, "");
            Object.assign(o, { pv, cn: v.cn, md: m, bm: v.bm, ct: v.ct });
            if (v.n) o.n = v.n;
            if (k === "elec" && m === "pre")
              o.tok = Array.from({ length: 5 }, () =>
                String(Math.floor(Math.random() * 1e4)).padStart(4, "0"),
              ).join("-");
            save();
            render();
            receipt(o, t("okt"));
          },
        );
        return false;
      },
    );
    f.dataset.bill = 1;
  },
  topup() {
    modal(
      t("topup"),
      accSel() +
        `<label>${t("mobn")}</label><input name="no" inputmode="numeric" pattern="01[3-9][0-9]{8}" placeholder="01XXXXXXXXX" required>` +
        sel(t("opty"), [
          ["p", "pre"],
          ["q", "post"],
        ]) +
        amF,
      (f) => pay(f, "topup", "••" + f.no.value.slice(-4)),
    );
  },
  qr() {
    modal(
      t("myqr"),
      `<div style="display:grid;place-items:center;margin:14px 0 4px">${qrSvg(A("sav").no)}</div><p class="mu" style="text-align:center">${t("qrh")}<br>${gno(A("sav").no)}</p>`,
    );
  },
  loan() {
    const f = modal(
      t("loan"),
      `<label>${t("lp")}</label><input name="p" type="number" value="500000" min="1"><label>${t("lr")}</label><input name="r" type="number" value="9" step="0.1" min="0"><label>${t("lm")}</label><input name="m" type="number" value="24" min="1"><div class="res" style="margin-top:14px"></div>`,
    );
    f.dataset.calc = "loan";
    calc.loan(f);
  },
  zk() {
    const w = Math.round(A("sav").b + A("cur").b),
      f = modal(
        t("zk"),
        `<label>${t("zw")}</label><input name="w" type="number" value="${w}" min="0"><label>${t("zn")}</label><input name="n" type="number" min="0" placeholder="0"><div class="res" style="margin-top:14px"></div>`,
      );
    f.dataset.calc = "zakat";
    calc.zakat(f);
  },
  chq() {
    modal(
      t("chq"),
      accSel() +
        `<label>${t("lv")}</label>${rcs("k", [
          ["25", "25"],
          ["50", "50"],
        ])}`,
      () => {
        S.nt.unshift({ t: "sys", k: "chqn", d: new Date().toISOString() });
        save();
        buzz();
        render();
        toast(t("chqn"));
      },
    );
  },
};
document.addEventListener("click", (e) => {
  const el = e.target.closest(
    "[data-go],[data-act],[data-fill],[data-copy],[data-hist],[data-tab],[data-tx],[data-lg],[data-rv],[data-th],[data-ft],[data-tz]",
  );
  if (!el) return;
  const d = el.dataset;
  if (d.go) {
    location.hash = d.go;
    if (location.hash.slice(1) === hs()) scrollTo({ top: 0, behavior: "instant" });
  } else if (d.act) act[d.act]();
  else if (d.fill) $("#to").value = d.fill;
  else if (d.rv !== undefined) {
    const w = el.parentElement;
    w.querySelector("input").value = d.rv;
    w.querySelectorAll(".rc").forEach((x) => x.classList.toggle("on", x === el));
    const bf = w.closest("form");
    if (bf && bf.dataset.bill && w.querySelector("input").name === "k") {
      const bd_ = bf.querySelector("#bdyn");
      bd_.innerHTML = bdyn(d.rv);
      bd_.querySelectorAll(".rcs .rc.on").forEach((e) => ctr(e));
    }
    if (bf && bf.dataset.bill && w.querySelector("input").name === "md") {
      const b2 = bf.querySelector("#bdyn");
      b2.innerHTML = bdyn(bf.k.value, d.rv);
      b2.querySelectorAll(".rcs .rc.on").forEach((e) => ctr(e));
    }
    if (bf && bf.dataset.bill && w.querySelector("input").name === "pv")
      bf.querySelector("#binst").innerHTML = binst(d.rv);
    ctr(el, 1);
  } else if (d.tz) {
    S.tz = d.tz;
    save();
    render();
  } else if (d.th) {
    S.theme = d.th;
    save();
    render();
  } else if (d.ft) {
    F.t = d.ft;
    render();
  } else if (d.tab) {
    F.tab = d.tab;
    render();
  } else if (d.lg) {
    S.L = d.lg;
    save();
    render();
    S.autoLoc && locGet(true);
  } else if (d.tx)
    receipt(
      S.tx.find((x) => x.id === d.tx),
      t("det"),
    );
  else if (d.hist) {
    F.q = "";
    F.t = "all";
    F.a = d.hist;
    location.hash = "hist";
  } else if (d.copy) {
    try {
      navigator.clipboard.writeText(d.copy);
    } catch (x) {}
    toast(t("copied"));
  }
});
addEventListener("hashchange", () => {
  const h = location.hash.slice(1),
    [p, ...r] = h.split("/");
  if (!P.includes(p)) return;
  if (p === "me" || p === "prefs") {
    location.hash = "ps";
    return;
  }
  if (h === hs()) return;
  ST[ST.length - 1] === h ? ST.pop() : ST.push(hs());
  ST.length > 30 && ST.shift();
  page = p;
  PA = r;
  if (p !== "hist") F.a = null;
  render();
  scrollTo({ top: 0, behavior: "instant" });
});
document.addEventListener("keydown", (e) => {
  if (
    (e.key === "Enter" || e.key === " ") &&
    e.target.matches &&
    e.target.matches("[role=button]")
  ) {
    e.preventDefault();
    e.target.click();
  }
});
document.addEventListener("pointerdown", (e) => {
  if (e.target.closest("#lf .btn")) e.preventDefault();
});
document.addEventListener(
  "click",
  (e) => {
    const b = e.target.closest("form button:not([type=button])");
    if (!b) return;
    e.preventDefault();
    e.stopPropagation();
    const f = b.form;
    if (f && f.reportValidity())
      f.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
  },
  true,
);
document.addEventListener("submit", (e) => {
  e.preventDefault();
  const id = e.target.id;
  if (id === "lf") {
    authSubmit();
    return;
  }
  if (id === "tf") {
    const mob = F.tab === "mob",
      a = +$("#am").value,
      x = A($("#fa").value),
      to = $("#to").value.replace(/\s/g, ""),
      n = $("#nt").value.trim();
    if (!(mob ? /^01[3-9]\d{8}$/ : /^\d{8,16}$/).test(to)) return toast(t(mob ? "bmob" : "bacc"));
    if (a > x.b) return toast(t("ins"));
    busy(e.target.querySelector(".btn"), () => {
      modal(
        t("conf"),
        `<p class="mu" style="text-align:center">${fm(a)} → ${bd(mob ? to : "••" + to.slice(-4))}</p><label>${SU && SU.k === "pin" ? t("pnl") : t("pin")}</label><div class="pw"><input name="p" type="password" ${SU && SU.k === "pin" ? 'inputmode="numeric" maxlength="6" ' : ""}autocomplete="current-password" required><button type="button" class="eyb" tabindex="-1" aria-label="Show/Hide">${ic("ey")}</button></div>`,
        (f) => {
          if (!pwOK2(f.p.value)) return false;
          const o = addTx("out", mob ? "trm" : "trf", a, x.id, "••" + to.slice(-4));
          if (n) o.n = n;
          const b = S.ben[F.tab];
          if (!b.includes(to)) {
            b.unshift(to);
            b.length = Math.min(b.length, 5);
          }
          save();
          render();
          receipt(o, t("okt"));
        },
      );
      return false;
    });
  }
});
document.addEventListener("input", (e) => {
  const f = e.target.form;
  if (f && f.dataset.calc) return calc[f.dataset.calc](f);
  if (e.target.id === "lu") {
    LF.a = e.target.value;
    if (LM === "login") {
      const u = users().find((x) => x.u === nrm(e.target.value)),
        pn = !!u && u.k === "pin",
        pi = $("#lp"),
        pl = $("#lpl");
      if (pi && pl) {
        pl.textContent = pn ? t("pnl") : t("pwl");
        pn
          ? (pi.setAttribute("inputmode", "numeric"), pi.setAttribute("maxlength", "6"))
          : (pi.removeAttribute("inputmode"), pi.removeAttribute("maxlength"));
      }
    }
  }
  if (e.target.id === "ln") LF.n = e.target.value;
  if (e.target.id === "fq") {
    F.q = e.target.value;
    const p = e.target.selectionStart;
    render();
    const i = $("#fq");
    i.focus();
    i.setSelectionRange(p, p);
  }
  if (e.target.id === "nmi") {
    S.name = e.target.value.trim();
    save();
    if (SU) setUser(SU, { name: S.name });
    const g = document.querySelector(".gtb b");
    g && (g.textContent = uname());
  }
});
document.addEventListener("change", (e) => {
  const i = e.target.id;
  if (i === "ft") {
    F.t = e.target.value;
    render();
  }
  if (i === "fm") {
    F.m = e.target.value;
    render();
  }
  if (i === "th") {
    S.theme = e.target.value;
    save();
    render();
  }
  if (i === "pf" && e.target.files[0]) {
    const fl = e.target.files[0];
    e.target.value = "";
    setPic(fl);
  }
});
addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  DP = e;
});
matchMedia("(prefers-color-scheme:dark)").addEventListener(
  "change",
  () => S.theme === "auto" && theme(),
);
render();
document.addEventListener("click", (e) => {
  const b = e.target.closest(".eyb");
  if (!b) return;
  e.preventDefault();
  const i = b.parentElement.querySelector("input");
  if (!i) return;
  const show = i.type === "password";
  i.type = show ? "text" : "password";
  b.classList.toggle("on", show);
  const u = b.querySelector("use");
  u && u.setAttribute("href", show ? "#ex" : "#ey");
});
(function () {
  const sp = document.getElementById("splash");
  if (!sp) return;
  document.getElementById("spn").textContent = "সোনার বাংলা";
  let done = false;
  const go = () => {
    if (done) return;
    done = true;
    sp.classList.add("out");
    setTimeout(() => sp.remove(), 600);
  };
  sp.addEventListener("click", go);
  setTimeout(go, matchMedia("(prefers-reduced-motion:reduce)").matches ? 300 : 2500);
})();
