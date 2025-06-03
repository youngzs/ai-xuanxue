import { b, K as K$1, u as u$3, k, _ as _$3, E as E$1 } from "./jsx-runtime-Bf2kozQ6.js";
import { R as Rn, d as d$1, q, b as useVSCode, y as y$1, e as useSRPCBridge, u as usePlugins, x, A as A$1, T, S as SRPCBridgeProvider, V as VSCodeProvider, f as PluginProvider, H as HotkeyActions, h as hotkeyActionDefinitions, _ as _$2, D, m as mn, g as _n, i as g, a as cn, P as Panel, j as getElementAtPoint, k as companionAnchorTagName } from "./panel-CgJhzxEb.js";
const appStyle = '/*! tailwindcss v4.1.5 | MIT License | https://tailwindcss.com */\n@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){stagewise-companion-anchor *,stagewise-companion-anchor :before,stagewise-companion-anchor :after,stagewise-companion-anchor ::backdrop{--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-divide-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial}}}@layer theme{stagewise-companion-anchor,stagewise-companion-anchor{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-100:oklch(93.6% .032 17.717);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-200:oklch(90.1% .076 70.697);--color-orange-300:oklch(83.7% .128 66.29);--color-orange-500:oklch(70.5% .213 47.604);--color-orange-600:oklch(64.6% .222 41.116);--color-orange-700:oklch(55.3% .195 38.402);--color-orange-800:oklch(47% .157 37.304);--color-yellow-500:oklch(79.5% .184 86.047);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-teal-500:oklch(70.4% .14 182.503);--color-sky-600:oklch(58.8% .158 241.966);--color-sky-700:oklch(50% .134 242.749);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-950:oklch(25.7% .09 281.288);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-500:oklch(62.7% .265 303.9);--color-fuchsia-700:oklch(51.8% .253 323.949);--color-pink-500:oklch(65.6% .241 354.308);--color-rose-600:oklch(58.6% .253 17.585);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-zinc-50:oklch(98.5% 0 0);--color-zinc-100:oklch(96.7% .001 286.375);--color-zinc-300:oklch(87.1% .006 286.286);--color-zinc-400:oklch(70.5% .015 286.067);--color-zinc-500:oklch(55.2% .016 285.938);--color-zinc-600:oklch(44.2% .017 285.786);--color-zinc-700:oklch(37% .013 285.805);--color-zinc-900:oklch(21% .006 285.885);--color-zinc-950:oklch(14.1% .005 285.823);--color-black:#000;--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height:calc(1.5/1);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-md:.375rem;--radius-lg:.5rem;--radius-2xl:1rem;--radius-3xl:1.5rem;--drop-shadow-xs:0 1px 1px #0000000d;--drop-shadow-md:0 3px 3px #0000001f;--drop-shadow-xl:0 9px 7px #0000001a;--ease-out:cubic-bezier(0,0,.2,1);--animate-spin:spin 1s linear infinite;--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-background:var(--color-white);--color-foreground:var(--color-zinc-950);--color-border:var(--color-zinc-500)}}@layer base{stagewise-companion-anchor *,stagewise-companion-anchor :after,stagewise-companion-anchor :before,stagewise-companion-anchor ::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}stagewise-companion-anchor ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}:where(stagewise-companion-anchor),stagewise-companion-anchor{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}stagewise-companion-anchor hr{height:0;color:inherit;border-top-width:1px}stagewise-companion-anchor abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}stagewise-companion-anchor h1,stagewise-companion-anchor h2,stagewise-companion-anchor h3,stagewise-companion-anchor h4,stagewise-companion-anchor h5,stagewise-companion-anchor h6{font-size:inherit;font-weight:inherit}stagewise-companion-anchor a{color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}stagewise-companion-anchor b,stagewise-companion-anchor strong{font-weight:bolder}stagewise-companion-anchor code,stagewise-companion-anchor kbd,stagewise-companion-anchor samp,stagewise-companion-anchor pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}stagewise-companion-anchor small{font-size:80%}stagewise-companion-anchor sub,stagewise-companion-anchor sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}stagewise-companion-anchor sub{bottom:-.25em}stagewise-companion-anchor sup{top:-.5em}stagewise-companion-anchor table{text-indent:0;border-color:inherit;border-collapse:collapse}stagewise-companion-anchor :-moz-focusring{outline:auto}stagewise-companion-anchor progress{vertical-align:baseline}stagewise-companion-anchor summary{display:list-item}stagewise-companion-anchor ol,stagewise-companion-anchor ul,stagewise-companion-anchor menu{list-style:none}stagewise-companion-anchor img,stagewise-companion-anchor svg,stagewise-companion-anchor video,stagewise-companion-anchor canvas,stagewise-companion-anchor audio,stagewise-companion-anchor iframe,stagewise-companion-anchor embed,stagewise-companion-anchor object{vertical-align:middle;display:block}stagewise-companion-anchor img,stagewise-companion-anchor video{max-width:100%;height:auto}stagewise-companion-anchor button,stagewise-companion-anchor input,stagewise-companion-anchor select,stagewise-companion-anchor optgroup,stagewise-companion-anchor textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}stagewise-companion-anchor ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}stagewise-companion-anchor :where(select:is([multiple],[size])) optgroup{font-weight:bolder}stagewise-companion-anchor :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}stagewise-companion-anchor ::file-selector-button{margin-inline-end:4px}stagewise-companion-anchor ::-moz-placeholder{opacity:1}stagewise-companion-anchor ::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){stagewise-companion-anchor ::-moz-placeholder{color:currentColor}stagewise-companion-anchor ::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor ::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}stagewise-companion-anchor ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}stagewise-companion-anchor textarea{resize:vertical}stagewise-companion-anchor ::-webkit-search-decoration{-webkit-appearance:none}stagewise-companion-anchor ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}stagewise-companion-anchor ::-webkit-datetime-edit{display:inline-flex}stagewise-companion-anchor ::-webkit-datetime-edit-fields-wrapper{padding:0}stagewise-companion-anchor ::-webkit-datetime-edit{padding-block:0}stagewise-companion-anchor ::-webkit-datetime-edit-year-field{padding-block:0}stagewise-companion-anchor ::-webkit-datetime-edit-month-field{padding-block:0}stagewise-companion-anchor ::-webkit-datetime-edit-day-field{padding-block:0}stagewise-companion-anchor ::-webkit-datetime-edit-hour-field{padding-block:0}stagewise-companion-anchor ::-webkit-datetime-edit-minute-field{padding-block:0}stagewise-companion-anchor ::-webkit-datetime-edit-second-field{padding-block:0}stagewise-companion-anchor ::-webkit-datetime-edit-millisecond-field{padding-block:0}stagewise-companion-anchor ::-webkit-datetime-edit-meridiem-field{padding-block:0}stagewise-companion-anchor :-moz-ui-invalid{box-shadow:none}stagewise-companion-anchor button,stagewise-companion-anchor input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}stagewise-companion-anchor ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}stagewise-companion-anchor ::-webkit-inner-spin-button{height:auto}stagewise-companion-anchor ::-webkit-outer-spin-button{height:auto}stagewise-companion-anchor [hidden]:where(:not([hidden=until-found])){display:none!important}stagewise-companion-anchor stagewise-companion-anchor *{min-width:0;min-height:0;position:relative}}@layer components{stagewise-companion-anchor .chat-loading-gradient{background:linear-gradient(#f8fafccc,#f8fafccc) padding-box padding-box,linear-gradient(45deg,#8b5cf6,#06b6d4,#8b5cf6) 0 0/400% 400% border-box;border:2px solid #0000;animation:2s infinite gradient-animation}stagewise-companion-anchor .chat-success-border{animation:2s ease-out blink-green-fade}stagewise-companion-anchor .chat-error-border{animation:1s ease-out blink-red-fade}@keyframes blink-green-fade{0%,50%{box-shadow:0 0 0 2px #22c55eb3}to{box-shadow:0 0 0 2px #22c55e00}}@keyframes blink-red-fade{0%,50%{box-shadow:0 0 0 2px #ef4444}to{box-shadow:0 0 0 2px #ef444400}}}@layer utilities{stagewise-companion-anchor .pointer-events-auto{pointer-events:auto!important}stagewise-companion-anchor .pointer-events-none{pointer-events:none!important}stagewise-companion-anchor .visible{visibility:visible!important}stagewise-companion-anchor .absolute{position:absolute!important}stagewise-companion-anchor .fixed{position:fixed!important}stagewise-companion-anchor .relative{position:relative!important}stagewise-companion-anchor .inset-0{inset:calc(var(--spacing)*0)!important}stagewise-companion-anchor .inset-4{inset:calc(var(--spacing)*4)!important}stagewise-companion-anchor .top-0{top:calc(var(--spacing)*0)!important}stagewise-companion-anchor .top-0\\.5{top:calc(var(--spacing)*.5)!important}stagewise-companion-anchor .top-1\\/2{top:50%!important}stagewise-companion-anchor .top-\\[-20\\%\\]{top:-20%!important}stagewise-companion-anchor .top-\\[25\\%\\]{top:25%!important}stagewise-companion-anchor .right-0{right:calc(var(--spacing)*0)!important}stagewise-companion-anchor .right-1\\/2{right:50%!important}stagewise-companion-anchor .right-\\[100\\%\\]{right:100%!important}stagewise-companion-anchor .bottom-0{bottom:calc(var(--spacing)*0)!important}stagewise-companion-anchor .bottom-1\\/2{bottom:50%!important}stagewise-companion-anchor .bottom-3{bottom:calc(var(--spacing)*3)!important}stagewise-companion-anchor .left-0{left:calc(var(--spacing)*0)!important}stagewise-companion-anchor .left-0\\.5{left:calc(var(--spacing)*.5)!important}stagewise-companion-anchor .left-1\\/2{left:50%!important}stagewise-companion-anchor .left-3{left:calc(var(--spacing)*3)!important}stagewise-companion-anchor .left-\\[-10\\%\\]{left:-10%!important}stagewise-companion-anchor .left-\\[25\\%\\]{left:25%!important}stagewise-companion-anchor .left-\\[100\\%\\]{left:100%!important}stagewise-companion-anchor .z-20{z-index:20!important}stagewise-companion-anchor .z-50{z-index:50!important}stagewise-companion-anchor .container{width:100%!important}@media (min-width:40rem){stagewise-companion-anchor .container{max-width:40rem!important}}@media (min-width:48rem){stagewise-companion-anchor .container{max-width:48rem!important}}@media (min-width:64rem){stagewise-companion-anchor .container{max-width:64rem!important}}@media (min-width:80rem){stagewise-companion-anchor .container{max-width:80rem!important}}@media (min-width:96rem){stagewise-companion-anchor .container{max-width:96rem!important}}stagewise-companion-anchor .-mx-4{margin-inline:calc(var(--spacing)*-4)!important}stagewise-companion-anchor .my-2{margin-block:calc(var(--spacing)*2)!important}stagewise-companion-anchor .mt-1{margin-top:calc(var(--spacing)*1)!important}stagewise-companion-anchor .mt-2{margin-top:calc(var(--spacing)*2)!important}stagewise-companion-anchor .mb-2{margin-bottom:calc(var(--spacing)*2)!important}stagewise-companion-anchor .mb-3{margin-bottom:calc(var(--spacing)*3)!important}stagewise-companion-anchor .block{display:block!important}stagewise-companion-anchor .contents{display:contents!important}stagewise-companion-anchor .flex{display:flex!important}stagewise-companion-anchor .hidden{display:none!important}stagewise-companion-anchor .inline{display:inline!important}stagewise-companion-anchor .aspect-square{aspect-ratio:1!important}stagewise-companion-anchor .size-0{width:calc(var(--spacing)*0)!important;height:calc(var(--spacing)*0)!important}stagewise-companion-anchor .size-1\\.5{width:calc(var(--spacing)*1.5)!important;height:calc(var(--spacing)*1.5)!important}stagewise-companion-anchor .size-2\\/3{width:66.6667%!important;height:66.6667%!important}stagewise-companion-anchor .size-3{width:calc(var(--spacing)*3)!important;height:calc(var(--spacing)*3)!important}stagewise-companion-anchor .size-4{width:calc(var(--spacing)*4)!important;height:calc(var(--spacing)*4)!important}stagewise-companion-anchor .size-4\\.5{width:calc(var(--spacing)*4.5)!important;height:calc(var(--spacing)*4.5)!important}stagewise-companion-anchor .size-5{width:calc(var(--spacing)*5)!important;height:calc(var(--spacing)*5)!important}stagewise-companion-anchor .size-6{width:calc(var(--spacing)*6)!important;height:calc(var(--spacing)*6)!important}stagewise-companion-anchor .size-8{width:calc(var(--spacing)*8)!important;height:calc(var(--spacing)*8)!important}stagewise-companion-anchor .size-9{width:calc(var(--spacing)*9)!important;height:calc(var(--spacing)*9)!important}stagewise-companion-anchor .size-9\\/12{width:75%!important;height:75%!important}stagewise-companion-anchor .size-12{width:calc(var(--spacing)*12)!important;height:calc(var(--spacing)*12)!important}stagewise-companion-anchor .size-\\[120\\%\\]{width:120%!important;height:120%!important}stagewise-companion-anchor .size-full{width:100%!important;height:100%!important}stagewise-companion-anchor .h-0{height:calc(var(--spacing)*0)!important}stagewise-companion-anchor .h-3{height:calc(var(--spacing)*3)!important}stagewise-companion-anchor .h-5{height:calc(var(--spacing)*5)!important}stagewise-companion-anchor .h-8{height:calc(var(--spacing)*8)!important}stagewise-companion-anchor .h-9\\.5{height:calc(var(--spacing)*9.5)!important}stagewise-companion-anchor .h-12{height:calc(var(--spacing)*12)!important}stagewise-companion-anchor .h-16{height:calc(var(--spacing)*16)!important}stagewise-companion-anchor .h-24{height:calc(var(--spacing)*24)!important}stagewise-companion-anchor .h-\\[50\\%\\]{height:50%!important}stagewise-companion-anchor .h-\\[120\\%\\]{height:120%!important}stagewise-companion-anchor .h-\\[calc\\(100vh-32px\\)\\]{height:calc(100vh - 32px)!important}stagewise-companion-anchor .h-\\[calc-size\\(auto\\)\\]{height:calc-size(auto)!important}stagewise-companion-anchor .h-\\[calc-size\\(auto\\,size\\)\\]{height:calc-size(auto,size)!important}stagewise-companion-anchor .h-auto{height:auto!important}stagewise-companion-anchor .h-full{height:100%!important}stagewise-companion-anchor .h-screen{height:100vh!important}stagewise-companion-anchor .max-h-full{max-height:100%!important}stagewise-companion-anchor .min-h-0{min-height:calc(var(--spacing)*0)!important}stagewise-companion-anchor .min-h-48{min-height:calc(var(--spacing)*48)!important}stagewise-companion-anchor .w-8{width:calc(var(--spacing)*8)!important}stagewise-companion-anchor .w-9\\.5{width:calc(var(--spacing)*9.5)!important}stagewise-companion-anchor .w-96{width:calc(var(--spacing)*96)!important}stagewise-companion-anchor .w-\\[50\\%\\]{width:50%!important}stagewise-companion-anchor .w-auto{width:auto!important}stagewise-companion-anchor .w-fit{width:-moz-fit-content!important;width:fit-content!important}stagewise-companion-anchor .w-full{width:100%!important}stagewise-companion-anchor .w-max{width:-moz-max-content!important;width:max-content!important}stagewise-companion-anchor .w-screen{width:100vw!important}stagewise-companion-anchor .max-w-8{max-width:calc(var(--spacing)*8)!important}stagewise-companion-anchor .max-w-90{max-width:calc(var(--spacing)*90)!important}stagewise-companion-anchor .max-w-\\[40vw\\]{max-width:40vw!important}stagewise-companion-anchor .max-w-full{max-width:100%!important}stagewise-companion-anchor .min-w-3{min-width:calc(var(--spacing)*3)!important}stagewise-companion-anchor .min-w-24{min-width:calc(var(--spacing)*24)!important}stagewise-companion-anchor .flex-1{flex:1!important}stagewise-companion-anchor .shrink-0{flex-shrink:0!important}stagewise-companion-anchor .origin-bottom{transform-origin:bottom!important}stagewise-companion-anchor .origin-bottom-left{transform-origin:0 100%!important}stagewise-companion-anchor .origin-bottom-right{transform-origin:100% 100%!important}stagewise-companion-anchor .origin-center{transform-origin:50%!important}stagewise-companion-anchor .origin-top{transform-origin:top!important}stagewise-companion-anchor .origin-top-left{transform-origin:0 0!important}stagewise-companion-anchor .origin-top-right{transform-origin:100% 0!important}stagewise-companion-anchor .scale-25{--tw-scale-x:25%!important;--tw-scale-y:25%!important;--tw-scale-z:25%!important;scale:var(--tw-scale-x)var(--tw-scale-y)!important}stagewise-companion-anchor .scale-50{--tw-scale-x:50%!important;--tw-scale-y:50%!important;--tw-scale-z:50%!important;scale:var(--tw-scale-x)var(--tw-scale-y)!important}stagewise-companion-anchor .scale-100{--tw-scale-x:100%!important;--tw-scale-y:100%!important;--tw-scale-z:100%!important;scale:var(--tw-scale-x)var(--tw-scale-y)!important}stagewise-companion-anchor .transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)!important}stagewise-companion-anchor .animate-pulse{animation:var(--animate-pulse)!important}stagewise-companion-anchor .animate-spin{animation:var(--animate-spin)!important}stagewise-companion-anchor .cursor-copy{cursor:copy!important}stagewise-companion-anchor .cursor-not-allowed{cursor:not-allowed!important}stagewise-companion-anchor .cursor-pointer{cursor:pointer!important}stagewise-companion-anchor .resize{resize:both!important}stagewise-companion-anchor .resize-none{resize:none!important}stagewise-companion-anchor .snap-start{scroll-snap-align:start!important}stagewise-companion-anchor .list-inside{list-style-position:inside!important}stagewise-companion-anchor .list-decimal{list-style-type:decimal!important}stagewise-companion-anchor .flex-col{flex-direction:column!important}stagewise-companion-anchor .flex-col-reverse{flex-direction:column-reverse!important}stagewise-companion-anchor .flex-row{flex-direction:row!important}stagewise-companion-anchor .flex-wrap{flex-wrap:wrap!important}stagewise-companion-anchor .items-center{align-items:center!important}stagewise-companion-anchor .items-end{align-items:flex-end!important}stagewise-companion-anchor .items-start{align-items:flex-start!important}stagewise-companion-anchor .items-stretch{align-items:stretch!important}stagewise-companion-anchor .justify-between{justify-content:space-between!important}stagewise-companion-anchor .justify-center{justify-content:center!important}stagewise-companion-anchor .justify-end{justify-content:flex-end!important}stagewise-companion-anchor .justify-start{justify-content:flex-start!important}stagewise-companion-anchor .gap-0\\.5{gap:calc(var(--spacing)*.5)!important}stagewise-companion-anchor .gap-1{gap:calc(var(--spacing)*1)!important}stagewise-companion-anchor .gap-2{gap:calc(var(--spacing)*2)!important}stagewise-companion-anchor .gap-3{gap:calc(var(--spacing)*3)!important}stagewise-companion-anchor :where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))!important}stagewise-companion-anchor :where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))!important}stagewise-companion-anchor :where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))!important}stagewise-companion-anchor :where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))!important}stagewise-companion-anchor :where(.space-x-2>:not(:last-child)){--tw-space-x-reverse:0!important;margin-inline-start:calc(calc(var(--spacing)*2)*var(--tw-space-x-reverse))!important;margin-inline-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-x-reverse)))!important}stagewise-companion-anchor :where(.divide-y>:not(:last-child)){--tw-divide-y-reverse:0!important;border-bottom-style:var(--tw-border-style)!important;border-top-style:var(--tw-border-style)!important;border-top-width:calc(1px*var(--tw-divide-y-reverse))!important;border-bottom-width:calc(1px*calc(1 - var(--tw-divide-y-reverse)))!important}stagewise-companion-anchor :where(.divide-y-reverse>:not(:last-child)){--tw-divide-y-reverse:1!important}stagewise-companion-anchor :where(.divide-blue-200>:not(:last-child)){border-color:var(--color-blue-200)!important}stagewise-companion-anchor :where(.divide-border\\/20>:not(:last-child)){border-color:#71717b33!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor :where(.divide-border\\/20>:not(:last-child)){border-color:color-mix(in oklab,var(--color-border)20%,transparent)!important}}stagewise-companion-anchor :where(.divide-orange-200>:not(:last-child)){border-color:var(--color-orange-200)!important}stagewise-companion-anchor .truncate{text-overflow:ellipsis!important;white-space:nowrap!important;overflow:hidden!important}stagewise-companion-anchor .overflow-hidden{overflow:hidden!important}stagewise-companion-anchor .overflow-visible{overflow:visible!important}stagewise-companion-anchor .overflow-y-auto{overflow-y:auto!important}stagewise-companion-anchor .rounded{border-radius:.25rem!important}stagewise-companion-anchor .rounded-2xl{border-radius:var(--radius-2xl)!important}stagewise-companion-anchor .rounded-full{border-radius:3.40282e38px!important}stagewise-companion-anchor .rounded-lg{border-radius:var(--radius-lg)!important}stagewise-companion-anchor .rounded-md{border-radius:var(--radius-md)!important}stagewise-companion-anchor .rounded-t-3xl{border-top-left-radius:var(--radius-3xl)!important;border-top-right-radius:var(--radius-3xl)!important}stagewise-companion-anchor .rounded-t-lg{border-top-left-radius:var(--radius-lg)!important;border-top-right-radius:var(--radius-lg)!important}stagewise-companion-anchor .rounded-b-3xl{border-bottom-right-radius:var(--radius-3xl)!important;border-bottom-left-radius:var(--radius-3xl)!important}stagewise-companion-anchor .rounded-b-lg{border-bottom-right-radius:var(--radius-lg)!important;border-bottom-left-radius:var(--radius-lg)!important}stagewise-companion-anchor .border{border-style:var(--tw-border-style)!important;border-width:1px!important}stagewise-companion-anchor .border-2{border-style:var(--tw-border-style)!important;border-width:2px!important}stagewise-companion-anchor .border-t{border-top-style:var(--tw-border-style)!important;border-top-width:1px!important}stagewise-companion-anchor .border-solid{--tw-border-style:solid!important;border-style:solid!important}stagewise-companion-anchor .border-blue-200{border-color:var(--color-blue-200)!important}stagewise-companion-anchor .border-blue-300{border-color:var(--color-blue-300)!important}stagewise-companion-anchor .border-blue-500{border-color:var(--color-blue-500)!important}stagewise-companion-anchor .border-blue-600\\/80{border-color:#155dfccc!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .border-blue-600\\/80{border-color:color-mix(in oklab,var(--color-blue-600)80%,transparent)!important}}stagewise-companion-anchor .border-border\\/30{border-color:#71717b4d!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .border-border\\/30{border-color:color-mix(in oklab,var(--color-border)30%,transparent)!important}}stagewise-companion-anchor .border-green-500{border-color:var(--color-green-500)!important}stagewise-companion-anchor .border-green-600\\/80{border-color:#00a544cc!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .border-green-600\\/80{border-color:color-mix(in oklab,var(--color-green-600)80%,transparent)!important}}stagewise-companion-anchor .border-orange-200{border-color:var(--color-orange-200)!important}stagewise-companion-anchor .border-orange-300{border-color:var(--color-orange-300)!important}stagewise-companion-anchor .border-orange-500{border-color:var(--color-orange-500)!important}stagewise-companion-anchor .border-pink-500{border-color:var(--color-pink-500)!important}stagewise-companion-anchor .border-purple-500{border-color:var(--color-purple-500)!important}stagewise-companion-anchor .border-red-200{border-color:var(--color-red-200)!important}stagewise-companion-anchor .border-red-500{border-color:var(--color-red-500)!important}stagewise-companion-anchor .border-transparent{border-color:#0000!important}stagewise-companion-anchor .border-yellow-500{border-color:var(--color-yellow-500)!important}stagewise-companion-anchor .border-zinc-300{border-color:var(--color-zinc-300)!important}stagewise-companion-anchor .border-zinc-500{border-color:var(--color-zinc-500)!important}stagewise-companion-anchor .bg-background\\/60{background-color:#fff9!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .bg-background\\/60{background-color:color-mix(in oklab,var(--color-background)60%,transparent)!important}}stagewise-companion-anchor .bg-blue-50{background-color:var(--color-blue-50)!important}stagewise-companion-anchor .bg-blue-50\\/90{background-color:#eff6ffe6!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .bg-blue-50\\/90{background-color:color-mix(in oklab,var(--color-blue-50)90%,transparent)!important}}stagewise-companion-anchor .bg-blue-100\\/80{background-color:#dbeafecc!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .bg-blue-100\\/80{background-color:color-mix(in oklab,var(--color-blue-100)80%,transparent)!important}}stagewise-companion-anchor .bg-blue-500{background-color:var(--color-blue-500)!important}stagewise-companion-anchor .bg-blue-600{background-color:var(--color-blue-600)!important}stagewise-companion-anchor .bg-blue-600\\/20{background-color:#155dfc33!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .bg-blue-600\\/20{background-color:color-mix(in oklab,var(--color-blue-600)20%,transparent)!important}}stagewise-companion-anchor .bg-green-500{background-color:var(--color-green-500)!important}stagewise-companion-anchor .bg-green-600\\/5{background-color:#00a5440d!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .bg-green-600\\/5{background-color:color-mix(in oklab,var(--color-green-600)5%,transparent)!important}}stagewise-companion-anchor .bg-orange-50\\/90{background-color:#fff7ede6!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .bg-orange-50\\/90{background-color:color-mix(in oklab,var(--color-orange-50)90%,transparent)!important}}stagewise-companion-anchor .bg-orange-100\\/80{background-color:#ffedd5cc!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .bg-orange-100\\/80{background-color:color-mix(in oklab,var(--color-orange-100)80%,transparent)!important}}stagewise-companion-anchor .bg-orange-500{background-color:var(--color-orange-500)!important}stagewise-companion-anchor .bg-orange-600{background-color:var(--color-orange-600)!important}stagewise-companion-anchor .bg-pink-500{background-color:var(--color-pink-500)!important}stagewise-companion-anchor .bg-purple-500{background-color:var(--color-purple-500)!important}stagewise-companion-anchor .bg-red-100{background-color:var(--color-red-100)!important}stagewise-companion-anchor .bg-red-500{background-color:var(--color-red-500)!important}stagewise-companion-anchor .bg-rose-600{background-color:var(--color-rose-600)!important}stagewise-companion-anchor .bg-transparent{background-color:#0000!important}stagewise-companion-anchor .bg-white{background-color:var(--color-white)!important}stagewise-companion-anchor .bg-white\\/40{background-color:#fff6!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .bg-white\\/40{background-color:color-mix(in oklab,var(--color-white)40%,transparent)!important}}stagewise-companion-anchor .bg-yellow-500{background-color:var(--color-yellow-500)!important}stagewise-companion-anchor .bg-zinc-50\\/80{background-color:#fafafacc!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .bg-zinc-50\\/80{background-color:color-mix(in oklab,var(--color-zinc-50)80%,transparent)!important}}stagewise-companion-anchor .bg-zinc-300{background-color:var(--color-zinc-300)!important}stagewise-companion-anchor .bg-zinc-500{background-color:var(--color-zinc-500)!important}stagewise-companion-anchor .bg-zinc-500\\/10{background-color:#71717b1a!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .bg-zinc-500\\/10{background-color:color-mix(in oklab,var(--color-zinc-500)10%,transparent)!important}}stagewise-companion-anchor .bg-zinc-500\\/40{background-color:#71717b66!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .bg-zinc-500\\/40{background-color:color-mix(in oklab,var(--color-zinc-500)40%,transparent)!important}}stagewise-companion-anchor .bg-zinc-700\\/80{background-color:#3f3f46cc!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .bg-zinc-700\\/80{background-color:color-mix(in oklab,var(--color-zinc-700)80%,transparent)!important}}stagewise-companion-anchor .bg-gradient-to-tr{--tw-gradient-position:to top right in oklab!important;background-image:linear-gradient(var(--tw-gradient-stops))!important}stagewise-companion-anchor .bg-\\[radial-gradient\\(circle\\,rgba\\(55\\,48\\,163\\,0\\)_55\\%\\,rgba\\(55\\,48\\,163\\,0\\.35\\)_73\\%\\)\\]{background-image:radial-gradient(circle,#3730a300 55%,#3730a359 73%)!important}stagewise-companion-anchor .bg-\\[radial-gradient\\(circle\\,rgba\\(219\\,39\\,119\\,0\\.2\\)_0\\%\\,rgba\\(219\\,39\\,119\\,0\\)_100\\%\\)\\]{background-image:radial-gradient(circle,#db277733 0%,#db277700 100%)!important}stagewise-companion-anchor .bg-\\[radial-gradient\\(circle\\,rgba\\(255\\,255\\,255\\,0\\)_60\\%\\,rgba\\(255\\,255\\,255\\,0\\.2\\)_70\\%\\)\\]{background-image:radial-gradient(circle,#fff0 60%,#fff3 70%)!important}stagewise-companion-anchor .from-blue-600{--tw-gradient-from:var(--color-blue-600)!important;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))!important}stagewise-companion-anchor .from-indigo-700{--tw-gradient-from:var(--color-indigo-700)!important;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))!important}stagewise-companion-anchor .from-orange-600{--tw-gradient-from:var(--color-orange-600)!important;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))!important}stagewise-companion-anchor .from-sky-700{--tw-gradient-from:var(--color-sky-700)!important;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))!important}stagewise-companion-anchor .via-blue-500{--tw-gradient-via:var(--color-blue-500)!important;--tw-gradient-via-stops:var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-via)var(--tw-gradient-via-position),var(--tw-gradient-to)var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-via-stops)!important}stagewise-companion-anchor .to-fuchsia-700{--tw-gradient-to:var(--color-fuchsia-700)!important;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))!important}stagewise-companion-anchor .to-red-600{--tw-gradient-to:var(--color-red-600)!important;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))!important}stagewise-companion-anchor .to-sky-600{--tw-gradient-to:var(--color-sky-600)!important;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))!important}stagewise-companion-anchor .to-teal-500{--tw-gradient-to:var(--color-teal-500)!important;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))!important}stagewise-companion-anchor .fill-current{fill:currentColor!important}stagewise-companion-anchor .fill-white{fill:var(--color-white)!important}stagewise-companion-anchor .fill-zinc-500\\/50{fill:#71717b80!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .fill-zinc-500\\/50{fill:color-mix(in oklab,var(--color-zinc-500)50%,transparent)!important}}stagewise-companion-anchor .fill-zinc-950{fill:var(--color-zinc-950)!important}stagewise-companion-anchor .stroke-black\\/30{stroke:#0000004d!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .stroke-black\\/30{stroke:color-mix(in oklab,var(--color-black)30%,transparent)!important}}stagewise-companion-anchor .stroke-none{stroke:none!important}stagewise-companion-anchor .stroke-white{stroke:var(--color-white)!important}stagewise-companion-anchor .stroke-zinc-950{stroke:var(--color-zinc-950)!important}stagewise-companion-anchor .stroke-1{stroke-width:1px!important}stagewise-companion-anchor .p-0\\.5{padding:calc(var(--spacing)*.5)!important}stagewise-companion-anchor .p-1{padding:calc(var(--spacing)*1)!important}stagewise-companion-anchor .p-2{padding:calc(var(--spacing)*2)!important}stagewise-companion-anchor .p-3{padding:calc(var(--spacing)*3)!important}stagewise-companion-anchor .p-4{padding:calc(var(--spacing)*4)!important}stagewise-companion-anchor .px-0\\.5{padding-inline:calc(var(--spacing)*.5)!important}stagewise-companion-anchor .px-1{padding-inline:calc(var(--spacing)*1)!important}stagewise-companion-anchor .px-2{padding-inline:calc(var(--spacing)*2)!important}stagewise-companion-anchor .px-3{padding-inline:calc(var(--spacing)*3)!important}stagewise-companion-anchor .px-4{padding-inline:calc(var(--spacing)*4)!important}stagewise-companion-anchor .py-0{padding-block:calc(var(--spacing)*0)!important}stagewise-companion-anchor .py-0\\.5{padding-block:calc(var(--spacing)*.5)!important}stagewise-companion-anchor .py-2{padding-block:calc(var(--spacing)*2)!important}stagewise-companion-anchor .pt-2{padding-top:calc(var(--spacing)*2)!important}stagewise-companion-anchor .pt-4{padding-top:calc(var(--spacing)*4)!important}stagewise-companion-anchor .pr-6{padding-right:calc(var(--spacing)*6)!important}stagewise-companion-anchor .pb-4{padding-bottom:calc(var(--spacing)*4)!important}stagewise-companion-anchor .pl-2{padding-left:calc(var(--spacing)*2)!important}stagewise-companion-anchor .text-base{font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}stagewise-companion-anchor .text-lg{font-size:var(--text-lg)!important;line-height:var(--tw-leading,var(--text-lg--line-height))!important}stagewise-companion-anchor .text-sm{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}stagewise-companion-anchor .text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}stagewise-companion-anchor .text-\\[0\\.5em\\]{font-size:.5em!important}stagewise-companion-anchor .font-bold{--tw-font-weight:var(--font-weight-bold)!important;font-weight:var(--font-weight-bold)!important}stagewise-companion-anchor .font-medium{--tw-font-weight:var(--font-weight-medium)!important;font-weight:var(--font-weight-medium)!important}stagewise-companion-anchor .font-normal{--tw-font-weight:var(--font-weight-normal)!important;font-weight:var(--font-weight-normal)!important}stagewise-companion-anchor .font-semibold{--tw-font-weight:var(--font-weight-semibold)!important;font-weight:var(--font-weight-semibold)!important}stagewise-companion-anchor .text-blue-500{color:var(--color-blue-500)!important}stagewise-companion-anchor .text-blue-600{color:var(--color-blue-600)!important}stagewise-companion-anchor .text-blue-700{color:var(--color-blue-700)!important}stagewise-companion-anchor .text-blue-800{color:var(--color-blue-800)!important}stagewise-companion-anchor .text-foreground{color:var(--color-foreground)!important}stagewise-companion-anchor .text-gray-500{color:var(--color-gray-500)!important}stagewise-companion-anchor .text-gray-600{color:var(--color-gray-600)!important}stagewise-companion-anchor .text-gray-700{color:var(--color-gray-700)!important}stagewise-companion-anchor .text-indigo-700{color:var(--color-indigo-700)!important}stagewise-companion-anchor .text-orange-600{color:var(--color-orange-600)!important}stagewise-companion-anchor .text-orange-700{color:var(--color-orange-700)!important}stagewise-companion-anchor .text-orange-800{color:var(--color-orange-800)!important}stagewise-companion-anchor .text-red-600{color:var(--color-red-600)!important}stagewise-companion-anchor .text-red-700{color:var(--color-red-700)!important}stagewise-companion-anchor .text-transparent{color:#0000!important}stagewise-companion-anchor .text-violet-700{color:var(--color-violet-700)!important}stagewise-companion-anchor .text-white{color:var(--color-white)!important}stagewise-companion-anchor .text-zinc-500{color:var(--color-zinc-500)!important}stagewise-companion-anchor .text-zinc-600{color:var(--color-zinc-600)!important}stagewise-companion-anchor .text-zinc-700{color:var(--color-zinc-700)!important}stagewise-companion-anchor .text-zinc-950{color:var(--color-zinc-950)!important}stagewise-companion-anchor .opacity-0{opacity:0!important}stagewise-companion-anchor .opacity-20{opacity:.2!important}stagewise-companion-anchor .opacity-30{opacity:.3!important}stagewise-companion-anchor .opacity-80{opacity:.8!important}stagewise-companion-anchor .opacity-100{opacity:1!important}stagewise-companion-anchor .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}stagewise-companion-anchor .shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}stagewise-companion-anchor .shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}stagewise-companion-anchor .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}stagewise-companion-anchor .ring{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}stagewise-companion-anchor .shadow-black\\/50{--tw-shadow-color:#00000080!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .shadow-black\\/50{--tw-shadow-color:color-mix(in oklab,color-mix(in oklab,var(--color-black)50%,transparent)var(--tw-shadow-alpha),transparent)!important}}stagewise-companion-anchor .ring-transparent{--tw-ring-color:transparent!important}stagewise-companion-anchor .ring-zinc-950\\/20{--tw-ring-color:#09090b33!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .ring-zinc-950\\/20{--tw-ring-color:color-mix(in oklab,var(--color-zinc-950)20%,transparent)!important}}stagewise-companion-anchor .outline{outline-style:var(--tw-outline-style)!important;outline-width:1px!important}stagewise-companion-anchor .blur{--tw-blur:blur(8px)!important;filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)!important}stagewise-companion-anchor .blur-md{--tw-blur:blur(var(--blur-md))!important;filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)!important}stagewise-companion-anchor .blur-none{--tw-blur: !important;filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)!important}stagewise-companion-anchor .drop-shadow-md{--tw-drop-shadow-size:drop-shadow(0 3px 3px var(--tw-drop-shadow-color,#0000001f))!important;--tw-drop-shadow:drop-shadow(var(--drop-shadow-md))!important;filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)!important}stagewise-companion-anchor .drop-shadow-xl{--tw-drop-shadow-size:drop-shadow(0 9px 7px var(--tw-drop-shadow-color,#0000001a))!important;--tw-drop-shadow:drop-shadow(var(--drop-shadow-xl))!important;filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)!important}stagewise-companion-anchor .drop-shadow-xs{--tw-drop-shadow-size:drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000d))!important;--tw-drop-shadow:drop-shadow(var(--drop-shadow-xs))!important;filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)!important}stagewise-companion-anchor .drop-shadow-black{--tw-drop-shadow-color:#000!important;--tw-drop-shadow:var(--tw-drop-shadow-size)!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .drop-shadow-black{--tw-drop-shadow-color:color-mix(in oklab,var(--color-black)var(--tw-drop-shadow-alpha),transparent)!important}}stagewise-companion-anchor .drop-shadow-indigo-950{--tw-drop-shadow-color:oklch(25.7% .09 281.288)!important;--tw-drop-shadow:var(--tw-drop-shadow-size)!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .drop-shadow-indigo-950{--tw-drop-shadow-color:color-mix(in oklab,var(--color-indigo-950)var(--tw-drop-shadow-alpha),transparent)!important}}stagewise-companion-anchor .filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)!important}stagewise-companion-anchor .backdrop-blur{--tw-backdrop-blur:blur(8px)!important;-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)!important;backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)!important}stagewise-companion-anchor .backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md))!important;-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)!important;backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)!important}stagewise-companion-anchor .backdrop-saturate-150{--tw-backdrop-saturate:saturate(150%)!important;-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)!important;backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)!important}stagewise-companion-anchor .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}stagewise-companion-anchor .transition-all{transition-property:all!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}stagewise-companion-anchor .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}stagewise-companion-anchor .duration-0{--tw-duration:0s!important;transition-duration:0s!important}stagewise-companion-anchor .duration-100{--tw-duration:.1s!important;transition-duration:.1s!important}stagewise-companion-anchor .duration-150{--tw-duration:.15s!important;transition-duration:.15s!important}stagewise-companion-anchor .duration-300{--tw-duration:.3s!important;transition-duration:.3s!important}stagewise-companion-anchor .duration-500{--tw-duration:.5s!important;transition-duration:.5s!important}stagewise-companion-anchor .ease-out{--tw-ease:var(--ease-out)!important;transition-timing-function:var(--ease-out)!important}stagewise-companion-anchor .outline-none{--tw-outline-style:none!important;outline-style:none!important}stagewise-companion-anchor .select-none{-webkit-user-select:none!important;-moz-user-select:none!important;user-select:none!important}stagewise-companion-anchor :is(.\\*\\:size-full>*){width:100%!important;height:100%!important}stagewise-companion-anchor .placeholder\\:text-zinc-400::-moz-placeholder{color:var(--color-zinc-400)!important}stagewise-companion-anchor .placeholder\\:text-zinc-400::placeholder{color:var(--color-zinc-400)!important}stagewise-companion-anchor .placeholder\\:text-zinc-950\\/50::-moz-placeholder{color:#09090b80!important}stagewise-companion-anchor .placeholder\\:text-zinc-950\\/50::placeholder{color:#09090b80!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .placeholder\\:text-zinc-950\\/50::-moz-placeholder{color:color-mix(in oklab,var(--color-zinc-950)50%,transparent)!important}stagewise-companion-anchor .placeholder\\:text-zinc-950\\/50::placeholder{color:color-mix(in oklab,var(--color-zinc-950)50%,transparent)!important}}stagewise-companion-anchor .placeholder\\:text-zinc-950\\/70::-moz-placeholder{color:#09090bb3!important}stagewise-companion-anchor .placeholder\\:text-zinc-950\\/70::placeholder{color:#09090bb3!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .placeholder\\:text-zinc-950\\/70::-moz-placeholder{color:color-mix(in oklab,var(--color-zinc-950)70%,transparent)!important}stagewise-companion-anchor .placeholder\\:text-zinc-950\\/70::placeholder{color:color-mix(in oklab,var(--color-zinc-950)70%,transparent)!important}}@media (hover:hover){stagewise-companion-anchor .hover\\:border-red-600\\/80:hover{border-color:#e40014cc!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .hover\\:border-red-600\\/80:hover{border-color:color-mix(in oklab,var(--color-red-600)80%,transparent)!important}}stagewise-companion-anchor .hover\\:bg-orange-200:hover{background-color:var(--color-orange-200)!important}stagewise-companion-anchor .hover\\:bg-orange-700:hover{background-color:var(--color-orange-700)!important}stagewise-companion-anchor .hover\\:bg-red-600\\/20:hover{background-color:#e4001433!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .hover\\:bg-red-600\\/20:hover{background-color:color-mix(in oklab,var(--color-red-600)20%,transparent)!important}}stagewise-companion-anchor .hover\\:bg-zinc-500\\/20:hover{background-color:#71717b33!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .hover\\:bg-zinc-500\\/20:hover{background-color:color-mix(in oklab,var(--color-zinc-500)20%,transparent)!important}}stagewise-companion-anchor .hover\\:bg-zinc-950\\/5:hover{background-color:#09090b0d!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .hover\\:bg-zinc-950\\/5:hover{background-color:color-mix(in oklab,var(--color-zinc-950)5%,transparent)!important}}stagewise-companion-anchor .hover\\:bg-zinc-950\\/10:hover{background-color:#09090b1a!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .hover\\:bg-zinc-950\\/10:hover{background-color:color-mix(in oklab,var(--color-zinc-950)10%,transparent)!important}}stagewise-companion-anchor .hover\\:text-orange-800:hover{color:var(--color-orange-800)!important}stagewise-companion-anchor .hover\\:text-white:hover{color:var(--color-white)!important}stagewise-companion-anchor .hover\\:underline:hover{text-decoration-line:underline!important}stagewise-companion-anchor .hover\\:opacity-100:hover{opacity:1!important}stagewise-companion-anchor .hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}}stagewise-companion-anchor .focus\\:border-zinc-500:focus{border-color:var(--color-zinc-500)!important}stagewise-companion-anchor .focus\\:text-zinc-900:focus{color:var(--color-zinc-900)!important}stagewise-companion-anchor .focus\\:outline-none:focus{--tw-outline-style:none!important;outline-style:none!important}stagewise-companion-anchor .disabled\\:opacity-50:disabled{opacity:.5!important}stagewise-companion-anchor .data-focus\\:outline-none[data-focus]{--tw-outline-style:none!important;outline-style:none!important}stagewise-companion-anchor .animate-shake{animation:.5s ease-in-out 2 shake}}@keyframes shake{0%,to{transform:translate(0)}10%,30%,50%,70%,90%{transform:translate(-2px)}20%,40%,60%,80%{transform:translate(2px)}}@keyframes gradient-animation{0%{background-position:0%}50%{background-position:100%}to{background-position:0%}}stagewise-companion-anchor stagewise-companion-anchor{all:initial;interpolate-size:allow-keywords;transform:translate(0);color:var(--color-zinc-950)!important;letter-spacing:normal!important;text-rendering:auto!important;font-family:Inter,Noto Color Emoji,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,SF Compact,SF Pro,Helvetica Neue,sans-serif!important;font-weight:400!important;line-height:normal!important}@supports (font-variation-settings:normal){stagewise-companion-anchor stagewise-companion-anchor{font-optical-sizing:auto!important;font-family:InterVariable,Noto Color Emoji,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,SF Compact,SF Pro,Helvetica Neue,sans-serif!important}}stagewise-companion-anchor #headlessui-portal-root{z-index:50!important;width:100vw!important;height:100vh!important;position:fixed!important}stagewise-companion-anchor #headlessui-portal-root>*{pointer-events:auto!important}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-divide-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{50%{opacity:.5}}\n';
function getElementAttributes(element) {
  const attrs = {};
  const priorityAttrs = [
    "id",
    "class",
    "name",
    "type",
    "href",
    "src",
    "alt",
    "for",
    "placeholder"
  ];
  const dataAttrs = [];
  for (let i2 = 0; i2 < element.attributes.length; i2++) {
    const attr = element.attributes[i2];
    if (attr.name.startsWith("data-")) {
      dataAttrs.push({ name: attr.name, value: attr.value });
    } else if (priorityAttrs.includes(attr.name.toLowerCase()) || attr.name.toLowerCase() !== "style") {
      attrs[attr.name] = attr.value;
    }
  }
  dataAttrs.forEach((da) => {
    attrs[da.name] = da.value;
  });
  return attrs;
}
function generateElementContext(element, index) {
  var _a;
  let context = `<element index="${index + 1}">
`;
  context += `  <tag>${element.tagName.toLowerCase()}</tag>
`;
  const id = element.id;
  if (id) {
    context += `  <id>${id}</id>
`;
  }
  const classes = Array.from(element.classList).join(", ");
  if (classes) {
    context += `  <classes>${classes}</classes>
`;
  }
  const attributes = getElementAttributes(element);
  if (Object.keys(attributes).length > 0) {
    context += `  <attributes>
`;
    for (const [key, value] of Object.entries(attributes)) {
      if (key.toLowerCase() !== "class" || !classes) {
        context += `    <${key}>${value}</${key}>
`;
      }
    }
    context += `  </attributes>
`;
  }
  const text = (_a = element.innerText) == null ? void 0 : _a.trim();
  if (text) {
    const maxLength = 100;
    context += `  <text>${text.length > maxLength ? `${text.substring(0, maxLength)}...` : text}</text>
`;
  }
  context += `  <structural_context>
`;
  if (element.parentElement) {
    const parent = element.parentElement;
    context += `    <parent>
`;
    context += `      <tag>${parent.tagName.toLowerCase()}</tag>
`;
    if (parent.id) {
      context += `      <id>${parent.id}</id>
`;
    }
    const parentClasses = Array.from(parent.classList).join(", ");
    if (parentClasses) {
      context += `      <classes>${parentClasses}</classes>
`;
    }
    context += `    </parent>
`;
  } else {
    context += `    <parent>No parent element found (likely root or disconnected)</parent>
`;
  }
  context += `  </structural_context>
`;
  try {
    const styles = window.getComputedStyle(element);
    const relevantStyles = {
      color: styles.color,
      backgroundColor: styles.backgroundColor,
      fontSize: styles.fontSize,
      fontWeight: styles.fontWeight,
      display: styles.display
    };
    context += `  <styles>
`;
    for (const [key, value] of Object.entries(relevantStyles)) {
      context += `    <${key}>${value}</${key}>
`;
    }
    context += `  </styles>
`;
  } catch (e2) {
    context += `  <styles>Could not retrieve computed styles</styles>
`;
  }
  context += `</element>
`;
  return context;
}
function createPrompt(selectedElements, userPrompt, url, contextSnippets) {
  const pluginContext = contextSnippets.map(
    (snippet) => `
      <plugin_contexts>
<${snippet.pluginName}>
${snippet.contextSnippets.map((snippet2) => `    <${snippet2.promptContextName}>${snippet2.content}</${snippet2.promptContextName}>`).join("\n")}
</${snippet.pluginName}>
</plugin_contexts>
`.trim()
  ).join("\n");
  if (!selectedElements || selectedElements.length === 0) {
    return `
    <request>
      <user_goal>${userPrompt}</user_goal>
      <url>${url}</url>
  <context>No specific element was selected on the page. Please analyze the page code in general or ask for clarification.</context>
  ${pluginContext}
</request>`.trim();
  }
  let detailedContext = "";
  selectedElements.forEach((element, index) => {
    detailedContext += generateElementContext(element, index);
  });
  return `
<request>
  <user_goal>${userPrompt}</user_goal>
  <url>${url}</url>
  <selected_elements>
    ${detailedContext.trim()}
  </selected_elements>
  ${pluginContext}
</request>`.trim();
}
const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const getInitialState = () => initialState;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const api = { setState, getState, getInitialState, subscribe };
  const initialState = state = createState(setState, getState, api);
  return api;
};
const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;
const identity = (arg) => arg;
function useStore(api, selector = identity) {
  const slice = Rn.useSyncExternalStore(
    api.subscribe,
    () => selector(api.getState()),
    () => selector(api.getInitialState())
  );
  Rn.useDebugValue(slice);
  return slice;
}
const createImpl = (createState) => {
  const api = createStore(createState);
  const useBoundStore = (selector) => useStore(api, selector);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
const create = (createState) => createState ? createImpl(createState) : createImpl;
class DoubleIndexedKV {
  constructor() {
    this.keyToValue = /* @__PURE__ */ new Map();
    this.valueToKey = /* @__PURE__ */ new Map();
  }
  set(key, value) {
    this.keyToValue.set(key, value);
    this.valueToKey.set(value, key);
  }
  getByKey(key) {
    return this.keyToValue.get(key);
  }
  getByValue(value) {
    return this.valueToKey.get(value);
  }
  clear() {
    this.keyToValue.clear();
    this.valueToKey.clear();
  }
}
class Registry {
  constructor(generateIdentifier) {
    this.generateIdentifier = generateIdentifier;
    this.kv = new DoubleIndexedKV();
  }
  register(value, identifier) {
    if (this.kv.getByValue(value)) {
      return;
    }
    if (!identifier) {
      identifier = this.generateIdentifier(value);
    }
    this.kv.set(identifier, value);
  }
  clear() {
    this.kv.clear();
  }
  getIdentifier(value) {
    return this.kv.getByValue(value);
  }
  getValue(identifier) {
    return this.kv.getByKey(identifier);
  }
}
class ClassRegistry extends Registry {
  constructor() {
    super((c2) => c2.name);
    this.classToAllowedProps = /* @__PURE__ */ new Map();
  }
  register(value, options) {
    if (typeof options === "object") {
      if (options.allowProps) {
        this.classToAllowedProps.set(value, options.allowProps);
      }
      super.register(value, options.identifier);
    } else {
      super.register(value, options);
    }
  }
  getAllowedProps(value) {
    return this.classToAllowedProps.get(value);
  }
}
function valuesOfObj(record) {
  if ("values" in Object) {
    return Object.values(record);
  }
  const values = [];
  for (const key in record) {
    if (record.hasOwnProperty(key)) {
      values.push(record[key]);
    }
  }
  return values;
}
function find(record, predicate) {
  const values = valuesOfObj(record);
  if ("find" in values) {
    return values.find(predicate);
  }
  const valuesNotNever = values;
  for (let i2 = 0; i2 < valuesNotNever.length; i2++) {
    const value = valuesNotNever[i2];
    if (predicate(value)) {
      return value;
    }
  }
  return void 0;
}
function forEach(record, run) {
  Object.entries(record).forEach(([key, value]) => run(value, key));
}
function includes(arr, value) {
  return arr.indexOf(value) !== -1;
}
function findArr(record, predicate) {
  for (let i2 = 0; i2 < record.length; i2++) {
    const value = record[i2];
    if (predicate(value)) {
      return value;
    }
  }
  return void 0;
}
class CustomTransformerRegistry {
  constructor() {
    this.transfomers = {};
  }
  register(transformer) {
    this.transfomers[transformer.name] = transformer;
  }
  findApplicable(v2) {
    return find(this.transfomers, (transformer) => transformer.isApplicable(v2));
  }
  findByName(name) {
    return this.transfomers[name];
  }
}
const getType$1 = (payload) => Object.prototype.toString.call(payload).slice(8, -1);
const isUndefined = (payload) => typeof payload === "undefined";
const isNull = (payload) => payload === null;
const isPlainObject$1 = (payload) => {
  if (typeof payload !== "object" || payload === null)
    return false;
  if (payload === Object.prototype)
    return false;
  if (Object.getPrototypeOf(payload) === null)
    return true;
  return Object.getPrototypeOf(payload) === Object.prototype;
};
const isEmptyObject = (payload) => isPlainObject$1(payload) && Object.keys(payload).length === 0;
const isArray$1 = (payload) => Array.isArray(payload);
const isString$1 = (payload) => typeof payload === "string";
const isNumber = (payload) => typeof payload === "number" && !isNaN(payload);
const isBoolean = (payload) => typeof payload === "boolean";
const isRegExp = (payload) => payload instanceof RegExp;
const isMap = (payload) => payload instanceof Map;
const isSet = (payload) => payload instanceof Set;
const isSymbol = (payload) => getType$1(payload) === "Symbol";
const isDate = (payload) => payload instanceof Date && !isNaN(payload.valueOf());
const isError = (payload) => payload instanceof Error;
const isNaNValue = (payload) => typeof payload === "number" && isNaN(payload);
const isPrimitive = (payload) => isBoolean(payload) || isNull(payload) || isUndefined(payload) || isNumber(payload) || isString$1(payload) || isSymbol(payload);
const isBigint = (payload) => typeof payload === "bigint";
const isInfinite = (payload) => payload === Infinity || payload === -Infinity;
const isTypedArray = (payload) => ArrayBuffer.isView(payload) && !(payload instanceof DataView);
const isURL = (payload) => payload instanceof URL;
const escapeKey = (key) => key.replace(/\./g, "\\.");
const stringifyPath = (path) => path.map(String).map(escapeKey).join(".");
const parsePath = (string) => {
  const result = [];
  let segment = "";
  for (let i2 = 0; i2 < string.length; i2++) {
    let char = string.charAt(i2);
    const isEscapedDot = char === "\\" && string.charAt(i2 + 1) === ".";
    if (isEscapedDot) {
      segment += ".";
      i2++;
      continue;
    }
    const isEndOfSegment = char === ".";
    if (isEndOfSegment) {
      result.push(segment);
      segment = "";
      continue;
    }
    segment += char;
  }
  const lastSegment = segment;
  result.push(lastSegment);
  return result;
};
function simpleTransformation(isApplicable, annotation, transform, untransform) {
  return {
    isApplicable,
    annotation,
    transform,
    untransform
  };
}
const simpleRules = [
  simpleTransformation(isUndefined, "undefined", () => null, () => void 0),
  simpleTransformation(isBigint, "bigint", (v2) => v2.toString(), (v2) => {
    if (typeof BigInt !== "undefined") {
      return BigInt(v2);
    }
    console.error("Please add a BigInt polyfill.");
    return v2;
  }),
  simpleTransformation(isDate, "Date", (v2) => v2.toISOString(), (v2) => new Date(v2)),
  simpleTransformation(isError, "Error", (v2, superJson) => {
    const baseError = {
      name: v2.name,
      message: v2.message
    };
    superJson.allowedErrorProps.forEach((prop) => {
      baseError[prop] = v2[prop];
    });
    return baseError;
  }, (v2, superJson) => {
    const e2 = new Error(v2.message);
    e2.name = v2.name;
    e2.stack = v2.stack;
    superJson.allowedErrorProps.forEach((prop) => {
      e2[prop] = v2[prop];
    });
    return e2;
  }),
  simpleTransformation(isRegExp, "regexp", (v2) => "" + v2, (regex) => {
    const body = regex.slice(1, regex.lastIndexOf("/"));
    const flags = regex.slice(regex.lastIndexOf("/") + 1);
    return new RegExp(body, flags);
  }),
  simpleTransformation(
    isSet,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    (v2) => [...v2.values()],
    (v2) => new Set(v2)
  ),
  simpleTransformation(isMap, "map", (v2) => [...v2.entries()], (v2) => new Map(v2)),
  simpleTransformation((v2) => isNaNValue(v2) || isInfinite(v2), "number", (v2) => {
    if (isNaNValue(v2)) {
      return "NaN";
    }
    if (v2 > 0) {
      return "Infinity";
    } else {
      return "-Infinity";
    }
  }, Number),
  simpleTransformation((v2) => v2 === 0 && 1 / v2 === -Infinity, "number", () => {
    return "-0";
  }, Number),
  simpleTransformation(isURL, "URL", (v2) => v2.toString(), (v2) => new URL(v2))
];
function compositeTransformation(isApplicable, annotation, transform, untransform) {
  return {
    isApplicable,
    annotation,
    transform,
    untransform
  };
}
const symbolRule = compositeTransformation((s2, superJson) => {
  if (isSymbol(s2)) {
    const isRegistered = !!superJson.symbolRegistry.getIdentifier(s2);
    return isRegistered;
  }
  return false;
}, (s2, superJson) => {
  const identifier = superJson.symbolRegistry.getIdentifier(s2);
  return ["symbol", identifier];
}, (v2) => v2.description, (_2, a2, superJson) => {
  const value = superJson.symbolRegistry.getValue(a2[1]);
  if (!value) {
    throw new Error("Trying to deserialize unknown symbol");
  }
  return value;
});
const constructorToName = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray
].reduce((obj, ctor) => {
  obj[ctor.name] = ctor;
  return obj;
}, {});
const typedArrayRule = compositeTransformation(isTypedArray, (v2) => ["typed-array", v2.constructor.name], (v2) => [...v2], (v2, a2) => {
  const ctor = constructorToName[a2[1]];
  if (!ctor) {
    throw new Error("Trying to deserialize unknown typed array");
  }
  return new ctor(v2);
});
function isInstanceOfRegisteredClass(potentialClass, superJson) {
  if (potentialClass == null ? void 0 : potentialClass.constructor) {
    const isRegistered = !!superJson.classRegistry.getIdentifier(potentialClass.constructor);
    return isRegistered;
  }
  return false;
}
const classRule = compositeTransformation(isInstanceOfRegisteredClass, (clazz, superJson) => {
  const identifier = superJson.classRegistry.getIdentifier(clazz.constructor);
  return ["class", identifier];
}, (clazz, superJson) => {
  const allowedProps = superJson.classRegistry.getAllowedProps(clazz.constructor);
  if (!allowedProps) {
    return { ...clazz };
  }
  const result = {};
  allowedProps.forEach((prop) => {
    result[prop] = clazz[prop];
  });
  return result;
}, (v2, a2, superJson) => {
  const clazz = superJson.classRegistry.getValue(a2[1]);
  if (!clazz) {
    throw new Error(`Trying to deserialize unknown class '${a2[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);
  }
  return Object.assign(Object.create(clazz.prototype), v2);
});
const customRule = compositeTransformation((value, superJson) => {
  return !!superJson.customTransformerRegistry.findApplicable(value);
}, (value, superJson) => {
  const transformer = superJson.customTransformerRegistry.findApplicable(value);
  return ["custom", transformer.name];
}, (value, superJson) => {
  const transformer = superJson.customTransformerRegistry.findApplicable(value);
  return transformer.serialize(value);
}, (v2, a2, superJson) => {
  const transformer = superJson.customTransformerRegistry.findByName(a2[1]);
  if (!transformer) {
    throw new Error("Trying to deserialize unknown custom value");
  }
  return transformer.deserialize(v2);
});
const compositeRules = [classRule, symbolRule, customRule, typedArrayRule];
const transformValue = (value, superJson) => {
  const applicableCompositeRule = findArr(compositeRules, (rule) => rule.isApplicable(value, superJson));
  if (applicableCompositeRule) {
    return {
      value: applicableCompositeRule.transform(value, superJson),
      type: applicableCompositeRule.annotation(value, superJson)
    };
  }
  const applicableSimpleRule = findArr(simpleRules, (rule) => rule.isApplicable(value, superJson));
  if (applicableSimpleRule) {
    return {
      value: applicableSimpleRule.transform(value, superJson),
      type: applicableSimpleRule.annotation
    };
  }
  return void 0;
};
const simpleRulesByAnnotation = {};
simpleRules.forEach((rule) => {
  simpleRulesByAnnotation[rule.annotation] = rule;
});
const untransformValue = (json, type, superJson) => {
  if (isArray$1(type)) {
    switch (type[0]) {
      case "symbol":
        return symbolRule.untransform(json, type, superJson);
      case "class":
        return classRule.untransform(json, type, superJson);
      case "custom":
        return customRule.untransform(json, type, superJson);
      case "typed-array":
        return typedArrayRule.untransform(json, type, superJson);
      default:
        throw new Error("Unknown transformation: " + type);
    }
  } else {
    const transformation = simpleRulesByAnnotation[type];
    if (!transformation) {
      throw new Error("Unknown transformation: " + type);
    }
    return transformation.untransform(json, superJson);
  }
};
const getNthKey = (value, n2) => {
  if (n2 > value.size)
    throw new Error("index out of bounds");
  const keys = value.keys();
  while (n2 > 0) {
    keys.next();
    n2--;
  }
  return keys.next().value;
};
function validatePath(path) {
  if (includes(path, "__proto__")) {
    throw new Error("__proto__ is not allowed as a property");
  }
  if (includes(path, "prototype")) {
    throw new Error("prototype is not allowed as a property");
  }
  if (includes(path, "constructor")) {
    throw new Error("constructor is not allowed as a property");
  }
}
const getDeep = (object, path) => {
  validatePath(path);
  for (let i2 = 0; i2 < path.length; i2++) {
    const key = path[i2];
    if (isSet(object)) {
      object = getNthKey(object, +key);
    } else if (isMap(object)) {
      const row = +key;
      const type = +path[++i2] === 0 ? "key" : "value";
      const keyOfRow = getNthKey(object, row);
      switch (type) {
        case "key":
          object = keyOfRow;
          break;
        case "value":
          object = object.get(keyOfRow);
          break;
      }
    } else {
      object = object[key];
    }
  }
  return object;
};
const setDeep = (object, path, mapper) => {
  validatePath(path);
  if (path.length === 0) {
    return mapper(object);
  }
  let parent = object;
  for (let i2 = 0; i2 < path.length - 1; i2++) {
    const key = path[i2];
    if (isArray$1(parent)) {
      const index = +key;
      parent = parent[index];
    } else if (isPlainObject$1(parent)) {
      parent = parent[key];
    } else if (isSet(parent)) {
      const row = +key;
      parent = getNthKey(parent, row);
    } else if (isMap(parent)) {
      const isEnd = i2 === path.length - 2;
      if (isEnd) {
        break;
      }
      const row = +key;
      const type = +path[++i2] === 0 ? "key" : "value";
      const keyOfRow = getNthKey(parent, row);
      switch (type) {
        case "key":
          parent = keyOfRow;
          break;
        case "value":
          parent = parent.get(keyOfRow);
          break;
      }
    }
  }
  const lastKey = path[path.length - 1];
  if (isArray$1(parent)) {
    parent[+lastKey] = mapper(parent[+lastKey]);
  } else if (isPlainObject$1(parent)) {
    parent[lastKey] = mapper(parent[lastKey]);
  }
  if (isSet(parent)) {
    const oldValue = getNthKey(parent, +lastKey);
    const newValue = mapper(oldValue);
    if (oldValue !== newValue) {
      parent.delete(oldValue);
      parent.add(newValue);
    }
  }
  if (isMap(parent)) {
    const row = +path[path.length - 2];
    const keyToRow = getNthKey(parent, row);
    const type = +lastKey === 0 ? "key" : "value";
    switch (type) {
      case "key": {
        const newKey = mapper(keyToRow);
        parent.set(newKey, parent.get(keyToRow));
        if (newKey !== keyToRow) {
          parent.delete(keyToRow);
        }
        break;
      }
      case "value": {
        parent.set(keyToRow, mapper(parent.get(keyToRow)));
        break;
      }
    }
  }
  return object;
};
function traverse(tree, walker2, origin = []) {
  if (!tree) {
    return;
  }
  if (!isArray$1(tree)) {
    forEach(tree, (subtree, key) => traverse(subtree, walker2, [...origin, ...parsePath(key)]));
    return;
  }
  const [nodeValue, children] = tree;
  if (children) {
    forEach(children, (child, key) => {
      traverse(child, walker2, [...origin, ...parsePath(key)]);
    });
  }
  walker2(nodeValue, origin);
}
function applyValueAnnotations(plain, annotations, superJson) {
  traverse(annotations, (type, path) => {
    plain = setDeep(plain, path, (v2) => untransformValue(v2, type, superJson));
  });
  return plain;
}
function applyReferentialEqualityAnnotations(plain, annotations) {
  function apply(identicalPaths, path) {
    const object = getDeep(plain, parsePath(path));
    identicalPaths.map(parsePath).forEach((identicalObjectPath) => {
      plain = setDeep(plain, identicalObjectPath, () => object);
    });
  }
  if (isArray$1(annotations)) {
    const [root, other] = annotations;
    root.forEach((identicalPath) => {
      plain = setDeep(plain, parsePath(identicalPath), () => plain);
    });
    if (other) {
      forEach(other, apply);
    }
  } else {
    forEach(annotations, apply);
  }
  return plain;
}
const isDeep = (object, superJson) => isPlainObject$1(object) || isArray$1(object) || isMap(object) || isSet(object) || isInstanceOfRegisteredClass(object, superJson);
function addIdentity(object, path, identities) {
  const existingSet = identities.get(object);
  if (existingSet) {
    existingSet.push(path);
  } else {
    identities.set(object, [path]);
  }
}
function generateReferentialEqualityAnnotations(identitites, dedupe) {
  const result = {};
  let rootEqualityPaths = void 0;
  identitites.forEach((paths) => {
    if (paths.length <= 1) {
      return;
    }
    if (!dedupe) {
      paths = paths.map((path) => path.map(String)).sort((a2, b2) => a2.length - b2.length);
    }
    const [representativePath, ...identicalPaths] = paths;
    if (representativePath.length === 0) {
      rootEqualityPaths = identicalPaths.map(stringifyPath);
    } else {
      result[stringifyPath(representativePath)] = identicalPaths.map(stringifyPath);
    }
  });
  if (rootEqualityPaths) {
    if (isEmptyObject(result)) {
      return [rootEqualityPaths];
    } else {
      return [rootEqualityPaths, result];
    }
  } else {
    return isEmptyObject(result) ? void 0 : result;
  }
}
const walker = (object, identities, superJson, dedupe, path = [], objectsInThisPath = [], seenObjects = /* @__PURE__ */ new Map()) => {
  const primitive = isPrimitive(object);
  if (!primitive) {
    addIdentity(object, path, identities);
    const seen = seenObjects.get(object);
    if (seen) {
      return dedupe ? {
        transformedValue: null
      } : seen;
    }
  }
  if (!isDeep(object, superJson)) {
    const transformed2 = transformValue(object, superJson);
    const result2 = transformed2 ? {
      transformedValue: transformed2.value,
      annotations: [transformed2.type]
    } : {
      transformedValue: object
    };
    if (!primitive) {
      seenObjects.set(object, result2);
    }
    return result2;
  }
  if (includes(objectsInThisPath, object)) {
    return {
      transformedValue: null
    };
  }
  const transformationResult = transformValue(object, superJson);
  const transformed = (transformationResult == null ? void 0 : transformationResult.value) ?? object;
  const transformedValue = isArray$1(transformed) ? [] : {};
  const innerAnnotations = {};
  forEach(transformed, (value, index) => {
    if (index === "__proto__" || index === "constructor" || index === "prototype") {
      throw new Error(`Detected property ${index}. This is a prototype pollution risk, please remove it from your object.`);
    }
    const recursiveResult = walker(value, identities, superJson, dedupe, [...path, index], [...objectsInThisPath, object], seenObjects);
    transformedValue[index] = recursiveResult.transformedValue;
    if (isArray$1(recursiveResult.annotations)) {
      innerAnnotations[index] = recursiveResult.annotations;
    } else if (isPlainObject$1(recursiveResult.annotations)) {
      forEach(recursiveResult.annotations, (tree, key) => {
        innerAnnotations[escapeKey(index) + "." + key] = tree;
      });
    }
  });
  const result = isEmptyObject(innerAnnotations) ? {
    transformedValue,
    annotations: !!transformationResult ? [transformationResult.type] : void 0
  } : {
    transformedValue,
    annotations: !!transformationResult ? [transformationResult.type, innerAnnotations] : innerAnnotations
  };
  if (!primitive) {
    seenObjects.set(object, result);
  }
  return result;
};
function getType(payload) {
  return Object.prototype.toString.call(payload).slice(8, -1);
}
function isArray(payload) {
  return getType(payload) === "Array";
}
function isPlainObject(payload) {
  if (getType(payload) !== "Object")
    return false;
  const prototype = Object.getPrototypeOf(payload);
  return !!prototype && prototype.constructor === Object && prototype === Object.prototype;
}
function assignProp(carry, key, newVal, originalObject, includeNonenumerable) {
  const propType = {}.propertyIsEnumerable.call(originalObject, key) ? "enumerable" : "nonenumerable";
  if (propType === "enumerable")
    carry[key] = newVal;
  if (includeNonenumerable && propType === "nonenumerable") {
    Object.defineProperty(carry, key, {
      value: newVal,
      enumerable: false,
      writable: true,
      configurable: true
    });
  }
}
function copy(target, options = {}) {
  if (isArray(target)) {
    return target.map((item) => copy(item, options));
  }
  if (!isPlainObject(target)) {
    return target;
  }
  const props = Object.getOwnPropertyNames(target);
  const symbols = Object.getOwnPropertySymbols(target);
  return [...props, ...symbols].reduce((carry, key) => {
    if (isArray(options.props) && !options.props.includes(key)) {
      return carry;
    }
    const val = target[key];
    const newVal = copy(val, options);
    assignProp(carry, key, newVal, target, options.nonenumerable);
    return carry;
  }, {});
}
class SuperJSON {
  /**
   * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
   */
  constructor({ dedupe = false } = {}) {
    this.classRegistry = new ClassRegistry();
    this.symbolRegistry = new Registry((s2) => s2.description ?? "");
    this.customTransformerRegistry = new CustomTransformerRegistry();
    this.allowedErrorProps = [];
    this.dedupe = dedupe;
  }
  serialize(object) {
    const identities = /* @__PURE__ */ new Map();
    const output = walker(object, identities, this, this.dedupe);
    const res = {
      json: output.transformedValue
    };
    if (output.annotations) {
      res.meta = {
        ...res.meta,
        values: output.annotations
      };
    }
    const equalityAnnotations = generateReferentialEqualityAnnotations(identities, this.dedupe);
    if (equalityAnnotations) {
      res.meta = {
        ...res.meta,
        referentialEqualities: equalityAnnotations
      };
    }
    return res;
  }
  deserialize(payload) {
    const { json, meta } = payload;
    let result = copy(json);
    if (meta == null ? void 0 : meta.values) {
      result = applyValueAnnotations(result, meta.values, this);
    }
    if (meta == null ? void 0 : meta.referentialEqualities) {
      result = applyReferentialEqualityAnnotations(result, meta.referentialEqualities);
    }
    return result;
  }
  stringify(object) {
    return JSON.stringify(this.serialize(object));
  }
  parse(string) {
    return this.deserialize(JSON.parse(string));
  }
  registerClass(v2, options) {
    this.classRegistry.register(v2, options);
  }
  registerSymbol(v2, identifier) {
    this.symbolRegistry.register(v2, identifier);
  }
  registerCustom(transformer, name) {
    this.customTransformerRegistry.register({
      name,
      ...transformer
    });
  }
  allowErrorProps(...props) {
    this.allowedErrorProps.push(...props);
  }
}
SuperJSON.defaultInstance = new SuperJSON();
SuperJSON.serialize = SuperJSON.defaultInstance.serialize.bind(SuperJSON.defaultInstance);
SuperJSON.deserialize = SuperJSON.defaultInstance.deserialize.bind(SuperJSON.defaultInstance);
SuperJSON.stringify = SuperJSON.defaultInstance.stringify.bind(SuperJSON.defaultInstance);
SuperJSON.parse = SuperJSON.defaultInstance.parse.bind(SuperJSON.defaultInstance);
SuperJSON.registerClass = SuperJSON.defaultInstance.registerClass.bind(SuperJSON.defaultInstance);
SuperJSON.registerSymbol = SuperJSON.defaultInstance.registerSymbol.bind(SuperJSON.defaultInstance);
SuperJSON.registerCustom = SuperJSON.defaultInstance.registerCustom.bind(SuperJSON.defaultInstance);
SuperJSON.allowErrorProps = SuperJSON.defaultInstance.allowErrorProps.bind(SuperJSON.defaultInstance);
SuperJSON.serialize;
SuperJSON.deserialize;
SuperJSON.stringify;
SuperJSON.parse;
SuperJSON.registerClass;
SuperJSON.registerCustom;
SuperJSON.registerSymbol;
SuperJSON.allowErrorProps;
function createJSONStorage(getStorage, options) {
  let storage;
  try {
    storage = getStorage();
  } catch (e2) {
    return;
  }
  const persistStorage = {
    getItem: (name) => {
      var _a;
      const parse = (str2) => {
        if (str2 === null) {
          return null;
        }
        return JSON.parse(str2, void 0);
      };
      const str = (_a = storage.getItem(name)) != null ? _a : null;
      if (str instanceof Promise) {
        return str.then(parse);
      }
      return parse(str);
    },
    setItem: (name, newValue) => storage.setItem(
      name,
      JSON.stringify(newValue, void 0)
    ),
    removeItem: (name) => storage.removeItem(name)
  };
  return persistStorage;
}
const toThenable = (fn) => (input) => {
  try {
    const result = fn(input);
    if (result instanceof Promise) {
      return result;
    }
    return {
      then(onFulfilled) {
        return toThenable(onFulfilled)(result);
      },
      catch(_onRejected) {
        return this;
      }
    };
  } catch (e2) {
    return {
      then(_onFulfilled) {
        return this;
      },
      catch(onRejected) {
        return toThenable(onRejected)(e2);
      }
    };
  }
};
const persistImpl = (config, baseOptions) => (set, get, api) => {
  let options = {
    storage: createJSONStorage(() => localStorage),
    partialize: (state) => state,
    version: 0,
    merge: (persistedState, currentState) => ({
      ...currentState,
      ...persistedState
    }),
    ...baseOptions
  };
  let hasHydrated = false;
  const hydrationListeners = /* @__PURE__ */ new Set();
  const finishHydrationListeners = /* @__PURE__ */ new Set();
  let storage = options.storage;
  if (!storage) {
    return config(
      (...args) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`
        );
        set(...args);
      },
      get,
      api
    );
  }
  const setItem = () => {
    const state = options.partialize({ ...get() });
    return storage.setItem(options.name, {
      state,
      version: options.version
    });
  };
  const savedSetState = api.setState;
  api.setState = (state, replace) => {
    savedSetState(state, replace);
    void setItem();
  };
  const configResult = config(
    (...args) => {
      set(...args);
      void setItem();
    },
    get,
    api
  );
  api.getInitialState = () => configResult;
  let stateFromStorage;
  const hydrate = () => {
    var _a, _b;
    if (!storage) return;
    hasHydrated = false;
    hydrationListeners.forEach((cb) => {
      var _a2;
      return cb((_a2 = get()) != null ? _a2 : configResult);
    });
    const postRehydrationCallback = ((_b = options.onRehydrateStorage) == null ? void 0 : _b.call(options, (_a = get()) != null ? _a : configResult)) || void 0;
    return toThenable(storage.getItem.bind(storage))(options.name).then((deserializedStorageValue) => {
      if (deserializedStorageValue) {
        if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
          if (options.migrate) {
            const migration = options.migrate(
              deserializedStorageValue.state,
              deserializedStorageValue.version
            );
            if (migration instanceof Promise) {
              return migration.then((result) => [true, result]);
            }
            return [true, migration];
          }
          console.error(
            `State loaded from storage couldn't be migrated since no migrate function was provided`
          );
        } else {
          return [false, deserializedStorageValue.state];
        }
      }
      return [false, void 0];
    }).then((migrationResult) => {
      var _a2;
      const [migrated, migratedState] = migrationResult;
      stateFromStorage = options.merge(
        migratedState,
        (_a2 = get()) != null ? _a2 : configResult
      );
      set(stateFromStorage, true);
      if (migrated) {
        return setItem();
      }
    }).then(() => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
      stateFromStorage = get();
      hasHydrated = true;
      finishHydrationListeners.forEach((cb) => cb(stateFromStorage));
    }).catch((e2) => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e2);
    });
  };
  api.persist = {
    setOptions: (newOptions) => {
      options = {
        ...options,
        ...newOptions
      };
      if (newOptions.storage) {
        storage = newOptions.storage;
      }
    },
    clearStorage: () => {
      storage == null ? void 0 : storage.removeItem(options.name);
    },
    getOptions: () => options,
    rehydrate: () => hydrate(),
    hasHydrated: () => hasHydrated,
    onHydrate: (cb) => {
      hydrationListeners.add(cb);
      return () => {
        hydrationListeners.delete(cb);
      };
    },
    onFinishHydration: (cb) => {
      finishHydrationListeners.add(cb);
      return () => {
        finishHydrationListeners.delete(cb);
      };
    }
  };
  if (!options.skipHydration) {
    hydrate();
  }
  return stateFromStorage || configResult;
};
const persist = persistImpl;
const createAppStore = (s2) => {
  const set = s2;
  return {
    appBlockRequestList: [],
    appUnblockRequestList: [],
    lastBlockRequestNumber: 0,
    lastUnblockRequestNumber: 0,
    isMainAppBlocked: false,
    requestMainAppBlock: () => {
      let newHandleValue = 0;
      set((state) => {
        newHandleValue = state.lastBlockRequestNumber + 1;
        return {
          appBlockRequestList: [...state.appBlockRequestList, newHandleValue],
          lastBlockRequestNumber: newHandleValue,
          isMainAppBlocked: state.appUnblockRequestList.length === 0
          // Unblock requests override block requests
        };
      });
      return newHandleValue;
    },
    requestMainAppUnblock: () => {
      let newHandleValue = 0;
      set((state) => {
        newHandleValue = state.lastUnblockRequestNumber + 1;
        return {
          appUnblockRequestList: [
            ...state.appUnblockRequestList,
            newHandleValue
          ],
          lastUnblockRequestNumber: newHandleValue,
          isMainAppBlocked: false
        };
      });
      return newHandleValue;
    },
    discardMainAppBlock: (handle) => {
      set((state) => {
        const newBlockRequestList = state.appBlockRequestList.filter(
          (h2) => h2 !== handle
        );
        return {
          appBlockRequestList: newBlockRequestList,
          isMainAppBlocked: newBlockRequestList.length > 0 && state.appUnblockRequestList.length === 0
        };
      });
    },
    discardMainAppUnblock: (handle) => {
      set((state) => {
        const newUnblockRequestList = state.appUnblockRequestList.filter(
          (h2) => h2 !== handle
        );
        return {
          appUnblockRequestList: newUnblockRequestList,
          isMainAppBlocked: state.appBlockRequestList.length > 0 && newUnblockRequestList.length === 0
        };
      });
    },
    toolbarBoxRef: b(),
    setToolbarBoxRef: (ref) => set(() => ({ toolbarBoxRef: ref })),
    unsetToolbarBoxRef: () => set(() => ({ toolbarBoxRef: b() })),
    minimized: false,
    minimize: () => set(() => ({ minimized: true })),
    expand: () => set(() => ({ minimized: false })),
    promotedOnStartup: false,
    promotionFinished: () => set(() => ({ promotedOnStartup: true }))
  };
};
function createSuperJSONStorage(storage) {
  return {
    getItem: (name) => {
      const str = storage.getItem(name);
      if (!str) return null;
      return SuperJSON.parse(str);
    },
    setItem: (name, value) => {
      storage.setItem(name, SuperJSON.stringify(value));
    },
    removeItem: (name) => storage.removeItem(name)
  };
}
const useAppState = create(
  persist(createAppStore, {
    name: "stgws:companion",
    storage: createSuperJSONStorage(sessionStorage),
    partialize: (state) => {
      return {
        minimized: state.minimized
      };
    }
  })
);
const ChatContext = K$1({
  chats: [],
  currentChatId: null,
  createChat: () => "",
  deleteChat: () => {
  },
  setCurrentChat: () => {
  },
  setChatInput: () => {
  },
  addChatDomContext: () => {
  },
  removeChatDomContext: () => {
  },
  addMessage: () => {
  },
  chatAreaState: "hidden",
  setChatAreaState: () => {
  },
  isPromptCreationActive: false,
  startPromptCreation: () => {
  },
  stopPromptCreation: () => {
  },
  promptState: "idle",
  resetPromptState: () => {
  }
});
const ChatStateProvider = ({ children }) => {
  const [chats, setChats] = d$1([
    {
      id: "new_chat",
      messages: [],
      title: "New chat",
      inputValue: "",
      domContextElements: []
    }
  ]);
  const [currentChatId, setCurrentChatId] = d$1("new_chat");
  const [chatAreaState, internalSetChatAreaState] = d$1("hidden");
  const [isPromptCreationMode, setIsPromptCreationMode] = d$1(false);
  const [promptState, setPromptState] = d$1("idle");
  const resetPromptState = q(() => {
    setPromptState("idle");
  }, []);
  const isMinimized = useAppState((state) => state.minimized);
  const { selectedSession } = useVSCode();
  y$1(() => {
    if (isMinimized) {
      setIsPromptCreationMode(false);
      internalSetChatAreaState("hidden");
    }
  }, [isMinimized]);
  const { bridge } = useSRPCBridge();
  const createChat = q(() => {
    const newChatId = crypto.randomUUID();
    const newChat = {
      id: newChatId,
      title: null,
      messages: [],
      inputValue: "",
      domContextElements: []
    };
    setChats((prev) => [...prev, newChat]);
    setCurrentChatId(newChatId);
    return newChatId;
  }, []);
  const deleteChat = q(
    (chatId) => {
      setChats((prev) => {
        const filteredChats = prev.filter((chat) => chat.id !== chatId);
        if (filteredChats.length === 0) {
          return [
            {
              id: "new_chat",
              messages: [],
              title: "New chat",
              inputValue: "",
              domContextElements: []
            }
          ];
        }
        return filteredChats;
      });
      if (currentChatId === chatId) {
        setChats((prev) => {
          setCurrentChatId(prev[0].id);
          return prev;
        });
      }
    },
    [currentChatId]
  );
  const setCurrentChat = q((chatId) => {
    setCurrentChatId(chatId);
  }, []);
  const setChatInput = q((chatId, value2) => {
    setChats(
      (prev) => prev.map(
        (chat) => chat.id === chatId ? { ...chat, inputValue: value2 } : chat
      )
    );
  }, []);
  const { plugins } = usePlugins();
  const startPromptCreation = q(() => {
    setIsPromptCreationMode(true);
    if (chatAreaState === "hidden") {
      internalSetChatAreaState("compact");
    }
    plugins.forEach((plugin) => {
      var _a;
      (_a = plugin.onPromptingStart) == null ? void 0 : _a.call(plugin);
    });
  }, [chatAreaState]);
  const stopPromptCreation = q(() => {
    setIsPromptCreationMode(false);
    setPromptState("idle");
    setChats(
      (prev) => prev.map(
        (chat) => chat.id === currentChatId ? { ...chat, domContextElements: [] } : chat
      )
    );
    if (chatAreaState === "compact") {
      internalSetChatAreaState("hidden");
    }
    plugins.forEach((plugin) => {
      var _a;
      (_a = plugin.onPromptingAbort) == null ? void 0 : _a.call(plugin);
    });
  }, [currentChatId, chatAreaState]);
  const setChatAreaState = q(
    (state) => {
      internalSetChatAreaState(state);
      if (state === "hidden") {
        stopPromptCreation();
      }
    },
    [internalSetChatAreaState, stopPromptCreation]
  );
  const addChatDomContext = q(
    (chatId, element) => {
      const pluginsWithContextGetters = plugins.filter(
        (plugin) => plugin.onContextElementSelect
      );
      setChats(
        (prev) => prev.map((chat) => {
          return chat.id === chatId ? {
            ...chat,
            domContextElements: [
              ...chat.domContextElements,
              {
                element,
                pluginContext: pluginsWithContextGetters.map((plugin) => {
                  var _a;
                  return {
                    pluginName: plugin.pluginName,
                    context: (_a = plugin.onContextElementSelect) == null ? void 0 : _a.call(plugin, element)
                  };
                })
              }
            ]
          } : chat;
        })
      );
    },
    [plugins]
  );
  const removeChatDomContext = q(
    (chatId, element) => {
      setChats(
        (prev) => prev.map(
          (chat) => chat.id === chatId ? {
            ...chat,
            domContextElements: chat.domContextElements.filter(
              (e2) => e2.element !== element
            )
          } : chat
        )
      );
    },
    []
  );
  const addMessage = q(
    async (chatId, content, pluginTriggered = false) => {
      if (!content.trim()) return;
      if (promptState === "loading") return;
      const chat = chats.find((chat2) => chat2.id === chatId);
      setPromptState("loading");
      const pluginContextSnippets = [];
      const pluginProcessingPromises = plugins.map(async (plugin) => {
        var _a;
        const userMessagePayload = {
          id: crypto.randomUUID(),
          text: content,
          contextElements: (chat == null ? void 0 : chat.domContextElements.map((el) => el.element)) || [],
          sentByPlugin: pluginTriggered
        };
        const handlerResult = await ((_a = plugin.onPromptSend) == null ? void 0 : _a.call(plugin, userMessagePayload));
        if (!handlerResult || !handlerResult.contextSnippets || handlerResult.contextSnippets.length === 0) {
          return null;
        }
        const snippetPromises = handlerResult.contextSnippets.map(
          async (snippet) => {
            const resolvedContent = typeof snippet.content === "string" ? snippet.content : await snippet.content();
            return {
              promptContextName: snippet.promptContextName,
              content: resolvedContent
            };
          }
        );
        const resolvedSnippets = await Promise.all(snippetPromises);
        if (resolvedSnippets.length > 0) {
          const pluginSnippets = {
            pluginName: plugin.pluginName,
            contextSnippets: resolvedSnippets
          };
          return pluginSnippets;
        }
        return null;
      });
      const allPluginContexts = await Promise.all(pluginProcessingPromises);
      allPluginContexts.forEach((pluginCtx) => {
        if (pluginCtx) {
          pluginContextSnippets.push(pluginCtx);
        }
      });
      const prompt = createPrompt(
        chat == null ? void 0 : chat.domContextElements.map((e2) => e2.element),
        content,
        window.location.href,
        pluginContextSnippets
      );
      const newMessage = {
        id: crypto.randomUUID(),
        content: content.trim(),
        sender: "user",
        type: "regular",
        timestamp: /* @__PURE__ */ new Date()
      };
      async function triggerAgentPrompt() {
        if (bridge) {
          try {
            const result = await bridge.call.triggerAgentPrompt(
              { prompt, sessionId: selectedSession == null ? void 0 : selectedSession.sessionId },
              { onUpdate: (update) => {
              } }
            );
            if (result.result.success) {
              setTimeout(() => {
                setPromptState("success");
              }, 1e3);
              setChats(
                (prev) => prev.map(
                  (chat2) => chat2.id === chatId ? { ...chat2, inputValue: "" } : chat2
                )
              );
            } else {
              setPromptState("error");
              setTimeout(() => {
                setPromptState("idle");
                setIsPromptCreationMode(false);
                setChats(
                  (prev) => prev.map(
                    (chat2) => chat2.id === chatId ? { ...chat2, inputValue: "" } : chat2
                  )
                );
              }, 1e3);
            }
          } catch (error) {
            setPromptState("error");
            setTimeout(() => {
              setPromptState("idle");
              setIsPromptCreationMode(false);
              setChats(
                (prev) => prev.map(
                  (chat2) => chat2.id === chatId ? { ...chat2, inputValue: "" } : chat2
                )
              );
            }, 1e3);
          }
        } else {
          setPromptState("error");
          setTimeout(() => {
            setPromptState("idle");
            setIsPromptCreationMode(false);
            setChats(
              (prev) => prev.map(
                (chat2) => chat2.id === chatId ? { ...chat2, inputValue: "" } : chat2
              )
            );
          }, 1e3);
        }
      }
      triggerAgentPrompt();
      if (chatAreaState === "hidden") {
        internalSetChatAreaState("compact");
      }
      setChats(
        (prev) => prev.map(
          (chat2) => chat2.id === chatId ? {
            ...chat2,
            messages: [...chat2.messages, newMessage],
            inputValue: content.trim(),
            // Keep the original prompt instead of clearing
            domContextElements: []
          } : chat2
        )
      );
    },
    [
      chatAreaState,
      bridge,
      chats,
      setIsPromptCreationMode,
      internalSetChatAreaState,
      selectedSession,
      promptState,
      setPromptState,
      plugins
    ]
  );
  const value = {
    chats,
    currentChatId,
    createChat,
    deleteChat,
    setCurrentChat,
    setChatInput,
    addMessage,
    chatAreaState,
    setChatAreaState,
    isPromptCreationActive: isPromptCreationMode,
    startPromptCreation,
    stopPromptCreation,
    addChatDomContext,
    removeChatDomContext,
    promptState,
    resetPromptState
  };
  return /* @__PURE__ */ u$3(ChatContext.Provider, { value, children });
};
function useChatState() {
  const context = x(ChatContext);
  if (!context) {
    throw new Error("useChatState must be used within a ChatStateProvider");
  }
  return context;
}
function useCyclicUpdate(func, frameRate) {
  const animationFrameHandle = A$1(void 0);
  const timeBetweenFrames = T(
    () => frameRate && frameRate > 0 ? 1e3 / frameRate : 0,
    [frameRate]
  );
  const lastCallFrameTime = A$1(0);
  const update = q(
    (frameTime) => {
      if (frameTime - lastCallFrameTime.current >= timeBetweenFrames) {
        func();
        lastCallFrameTime.current = frameTime;
      }
      animationFrameHandle.current = requestAnimationFrame(update);
    },
    [func, timeBetweenFrames]
  );
  y$1(() => {
    if (!frameRate || frameRate > 0) {
      animationFrameHandle.current = requestAnimationFrame(update);
    }
    return () => {
      if (animationFrameHandle.current) {
        cancelAnimationFrame(animationFrameHandle.current);
        animationFrameHandle.current = void 0;
      }
    };
  }, [frameRate, update]);
}
const LocationContext = K$1(new URL(window.location.href));
function LocationProvider({
  children
}) {
  const [currentUrl, setCurrentUrl] = d$1(
    new URL(window.location.href)
  );
  const update = q(() => {
    setCurrentUrl(new URL(window.location.href));
  }, []);
  useCyclicUpdate(update, 15);
  return /* @__PURE__ */ u$3(LocationContext.Provider, { value: currentUrl, children });
}
function ContextProviders({
  children,
  config
}) {
  return /* @__PURE__ */ u$3(LocationProvider, { children: /* @__PURE__ */ u$3(SRPCBridgeProvider, { children: /* @__PURE__ */ u$3(VSCodeProvider, { children: /* @__PURE__ */ u$3(PluginProvider, { plugins: (config == null ? void 0 : config.plugins) || [], children: /* @__PURE__ */ u$3(ChatStateProvider, { children }) }) }) }) });
}
function useEventListener(eventName, handler, options, element = window) {
  y$1(() => {
    if (typeof window === "undefined") return;
    if (!element) return;
    element.addEventListener(eventName, handler, options);
    return () => element.removeEventListener(eventName, handler);
  }, [eventName, handler, element, options]);
}
function HotkeyListener() {
  const { startPromptCreation, stopPromptCreation } = useChatState();
  const hotKeyHandlerMap = T(
    () => ({
      [HotkeyActions.CTRL_ALT_C]: () => {
        startPromptCreation();
      },
      [HotkeyActions.ESC]: () => {
        stopPromptCreation();
      }
    }),
    [startPromptCreation, stopPromptCreation]
  );
  const hotKeyListener = q(
    (ev) => {
      for (const [action, definition] of Object.entries(
        hotkeyActionDefinitions
      )) {
        if (definition.isEventMatching(ev)) {
          ev.preventDefault();
          ev.stopPropagation();
          hotKeyHandlerMap[action]();
          break;
        }
      }
    },
    [hotKeyHandlerMap]
  );
  useEventListener("keydown", hotKeyListener, {
    capture: true
  });
  return null;
}
const $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== "undefined" ? Rn.useLayoutEffect : () => {
};
function $8ae05eaa5c114e9c$export$7f54fc3180508a52(fn) {
  const ref = A$1(null);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    ref.current = fn;
  }, [
    fn
  ]);
  return q((...args) => {
    const f2 = ref.current;
    return f2 === null || f2 === void 0 ? void 0 : f2(...args);
  }, []);
}
const $431fbd86ca7dc216$export$b204af158042fbac = (el) => {
  var _el_ownerDocument;
  return (_el_ownerDocument = el === null || el === void 0 ? void 0 : el.ownerDocument) !== null && _el_ownerDocument !== void 0 ? _el_ownerDocument : document;
};
const $431fbd86ca7dc216$export$f21a1ffae260145a = (el) => {
  if (el && "window" in el && el.window === el) return el;
  const doc = $431fbd86ca7dc216$export$b204af158042fbac(el);
  return doc.defaultView || window;
};
function $431fbd86ca7dc216$var$isNode(value) {
  return value !== null && typeof value === "object" && "nodeType" in value && typeof value.nodeType === "number";
}
function $431fbd86ca7dc216$export$af51f0f06c0f328a(node) {
  return $431fbd86ca7dc216$var$isNode(node) && node.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in node;
}
let $f4e2df6bd15f8569$var$_shadowDOM = false;
function $f4e2df6bd15f8569$export$98658e8c59125e6a() {
  return $f4e2df6bd15f8569$var$_shadowDOM;
}
function $d4ee10de306f2510$export$4282f70798064fe0(node, otherNode) {
  if (!$f4e2df6bd15f8569$export$98658e8c59125e6a()) return otherNode && node ? node.contains(otherNode) : false;
  if (!node || !otherNode) return false;
  let currentNode = otherNode;
  while (currentNode !== null) {
    if (currentNode === node) return true;
    if (currentNode.tagName === "SLOT" && currentNode.assignedSlot)
      currentNode = currentNode.assignedSlot.parentNode;
    else if ($431fbd86ca7dc216$export$af51f0f06c0f328a(currentNode))
      currentNode = currentNode.host;
    else currentNode = currentNode.parentNode;
  }
  return false;
}
const $d4ee10de306f2510$export$cd4e5573fbe2b576 = (doc = document) => {
  var _activeElement_shadowRoot;
  if (!$f4e2df6bd15f8569$export$98658e8c59125e6a()) return doc.activeElement;
  let activeElement = doc.activeElement;
  while (activeElement && "shadowRoot" in activeElement && ((_activeElement_shadowRoot = activeElement.shadowRoot) === null || _activeElement_shadowRoot === void 0 ? void 0 : _activeElement_shadowRoot.activeElement)) activeElement = activeElement.shadowRoot.activeElement;
  return activeElement;
};
function $d4ee10de306f2510$export$e58f029f0fbfdb29(event) {
  if ($f4e2df6bd15f8569$export$98658e8c59125e6a() && event.target.shadowRoot) {
    if (event.composedPath) return event.composedPath()[0];
  }
  return event.target;
}
function $c87311424ea30a05$var$testUserAgent(re) {
  var _window_navigator_userAgentData;
  if (typeof window === "undefined" || window.navigator == null) return false;
  return ((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands.some((brand) => re.test(brand.brand))) || re.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re) {
  var _window_navigator_userAgentData;
  return typeof window !== "undefined" && window.navigator != null ? re.test(((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
}
function $c87311424ea30a05$var$cached(fn) {
  if (process.env.NODE_ENV === "test") return fn;
  let res = null;
  return () => {
    if (res == null) res = fn();
    return res;
  };
}
const $c87311424ea30a05$export$9ac100e40613ea10 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testPlatform(/^Mac/i);
});
const $c87311424ea30a05$export$186c6964ca17d99 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testPlatform(/^iPhone/i);
});
const $c87311424ea30a05$export$7bef049ce92e4224 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
});
const $c87311424ea30a05$export$fedb369cb70207f1 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$export$186c6964ca17d99() || $c87311424ea30a05$export$7bef049ce92e4224();
});
$c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$export$9ac100e40613ea10() || $c87311424ea30a05$export$fedb369cb70207f1();
});
$c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
});
const $c87311424ea30a05$export$6446a186d09e379e = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
});
const $c87311424ea30a05$export$a11b0059900ceec8 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/Android/i);
});
$c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/Firefox/i);
});
function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
  let globalListeners = A$1(/* @__PURE__ */ new Map());
  let addGlobalListener = q((eventTarget, type, listener, options) => {
    let fn = (options === null || options === void 0 ? void 0 : options.once) ? (...args) => {
      globalListeners.current.delete(listener);
      listener(...args);
    } : listener;
    globalListeners.current.set(listener, {
      type,
      eventTarget,
      fn,
      options
    });
    eventTarget.addEventListener(type, fn, options);
  }, []);
  let removeGlobalListener = q((eventTarget, type, listener, options) => {
    var _globalListeners_current_get;
    let fn = ((_globalListeners_current_get = globalListeners.current.get(listener)) === null || _globalListeners_current_get === void 0 ? void 0 : _globalListeners_current_get.fn) || listener;
    eventTarget.removeEventListener(type, fn, options);
    globalListeners.current.delete(listener);
  }, []);
  let removeAllGlobalListeners = q(() => {
    globalListeners.current.forEach((value, key) => {
      removeGlobalListener(value.eventTarget, value.type, key, value.options);
    });
  }, [
    removeGlobalListener
  ]);
  y$1(() => {
    return removeAllGlobalListeners;
  }, [
    removeAllGlobalListeners
  ]);
  return {
    addGlobalListener,
    removeGlobalListener,
    removeAllGlobalListeners
  };
}
function $6a7db85432448f7f$export$60278871457622de(event) {
  if (event.mozInputSource === 0 && event.isTrusted) return true;
  if ($c87311424ea30a05$export$a11b0059900ceec8() && event.pointerType) return event.type === "click" && event.buttons === 1;
  return event.detail === 0 && !event.pointerType;
}
function $8a9cb279dc87e130$export$525bc4921d56d4a(nativeEvent) {
  let event = nativeEvent;
  event.nativeEvent = nativeEvent;
  event.isDefaultPrevented = () => event.defaultPrevented;
  event.isPropagationStopped = () => event.cancelBubble;
  event.persist = () => {
  };
  return event;
}
function $8a9cb279dc87e130$export$c2b7abe5d61ec696(event, target) {
  Object.defineProperty(event, "target", {
    value: target
  });
  Object.defineProperty(event, "currentTarget", {
    value: target
  });
}
function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
  let stateRef = A$1({
    isFocused: false,
    observer: null
  });
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    const state = stateRef.current;
    return () => {
      if (state.observer) {
        state.observer.disconnect();
        state.observer = null;
      }
    };
  }, []);
  let dispatchBlur = $8ae05eaa5c114e9c$export$7f54fc3180508a52((e2) => {
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e2);
  });
  return q((e2) => {
    if (e2.target instanceof HTMLButtonElement || e2.target instanceof HTMLInputElement || e2.target instanceof HTMLTextAreaElement || e2.target instanceof HTMLSelectElement) {
      stateRef.current.isFocused = true;
      let target = e2.target;
      let onBlurHandler = (e3) => {
        stateRef.current.isFocused = false;
        if (target.disabled) {
          let event = $8a9cb279dc87e130$export$525bc4921d56d4a(e3);
          dispatchBlur(event);
        }
        if (stateRef.current.observer) {
          stateRef.current.observer.disconnect();
          stateRef.current.observer = null;
        }
      };
      target.addEventListener("focusout", onBlurHandler, {
        once: true
      });
      stateRef.current.observer = new MutationObserver(() => {
        if (stateRef.current.isFocused && target.disabled) {
          var _stateRef_current_observer;
          (_stateRef_current_observer = stateRef.current.observer) === null || _stateRef_current_observer === void 0 ? void 0 : _stateRef_current_observer.disconnect();
          let relatedTargetEl = target === document.activeElement ? null : document.activeElement;
          target.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: relatedTargetEl
          }));
          target.dispatchEvent(new FocusEvent("focusout", {
            bubbles: true,
            relatedTarget: relatedTargetEl
          }));
        }
      });
      stateRef.current.observer.observe(target, {
        attributes: true,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    dispatchBlur
  ]);
}
let $8a9cb279dc87e130$export$fda7da73ab5d4c48 = false;
let $507fabe10e71c6fb$var$currentModality = null;
let $507fabe10e71c6fb$var$changeHandlers = /* @__PURE__ */ new Set();
let $507fabe10e71c6fb$export$d90243b58daecda7 = /* @__PURE__ */ new Map();
let $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
let $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
const $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS = {
  Tab: true,
  Escape: true
};
function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e2) {
  for (let handler of $507fabe10e71c6fb$var$changeHandlers) handler(modality, e2);
}
function $507fabe10e71c6fb$var$isValidKey(e2) {
  return !(e2.metaKey || !$c87311424ea30a05$export$9ac100e40613ea10() && e2.altKey || e2.ctrlKey || e2.key === "Control" || e2.key === "Shift" || e2.key === "Meta");
}
function $507fabe10e71c6fb$var$handleKeyboardEvent(e2) {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
  if ($507fabe10e71c6fb$var$isValidKey(e2)) {
    $507fabe10e71c6fb$var$currentModality = "keyboard";
    $507fabe10e71c6fb$var$triggerChangeHandlers("keyboard", e2);
  }
}
function $507fabe10e71c6fb$var$handlePointerEvent(e2) {
  $507fabe10e71c6fb$var$currentModality = "pointer";
  if (e2.type === "mousedown" || e2.type === "pointerdown") {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$triggerChangeHandlers("pointer", e2);
  }
}
function $507fabe10e71c6fb$var$handleClickEvent(e2) {
  if ($6a7db85432448f7f$export$60278871457622de(e2)) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$currentModality = "virtual";
  }
}
function $507fabe10e71c6fb$var$handleFocusEvent(e2) {
  if (e2.target === window || e2.target === document || $8a9cb279dc87e130$export$fda7da73ab5d4c48 || !e2.isTrusted) return;
  if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
    $507fabe10e71c6fb$var$currentModality = "virtual";
    $507fabe10e71c6fb$var$triggerChangeHandlers("virtual", e2);
  }
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
}
function $507fabe10e71c6fb$var$handleWindowBlur() {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
}
function $507fabe10e71c6fb$var$setupGlobalFocusEvents(element) {
  if (typeof window === "undefined" || $507fabe10e71c6fb$export$d90243b58daecda7.get($431fbd86ca7dc216$export$f21a1ffae260145a(element))) return;
  const windowObject = $431fbd86ca7dc216$export$f21a1ffae260145a(element);
  const documentObject = $431fbd86ca7dc216$export$b204af158042fbac(element);
  let focus = windowObject.HTMLElement.prototype.focus;
  windowObject.HTMLElement.prototype.focus = function() {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    focus.apply(this, arguments);
  };
  documentObject.addEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.addEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.addEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
  windowObject.addEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
  windowObject.addEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.addEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  } else if (process.env.NODE_ENV === "test") {
    documentObject.addEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  }
  windowObject.addEventListener("beforeunload", () => {
    $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element);
  }, {
    once: true
  });
  $507fabe10e71c6fb$export$d90243b58daecda7.set(windowObject, {
    focus
  });
}
const $507fabe10e71c6fb$var$tearDownWindowFocusTracking = (element, loadListener) => {
  const windowObject = $431fbd86ca7dc216$export$f21a1ffae260145a(element);
  const documentObject = $431fbd86ca7dc216$export$b204af158042fbac(element);
  if (loadListener) documentObject.removeEventListener("DOMContentLoaded", loadListener);
  if (!$507fabe10e71c6fb$export$d90243b58daecda7.has(windowObject)) return;
  windowObject.HTMLElement.prototype.focus = $507fabe10e71c6fb$export$d90243b58daecda7.get(windowObject).focus;
  documentObject.removeEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
  windowObject.removeEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
  windowObject.removeEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.removeEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  } else if (process.env.NODE_ENV === "test") {
    documentObject.removeEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  }
  $507fabe10e71c6fb$export$d90243b58daecda7.delete(windowObject);
};
function $507fabe10e71c6fb$export$2f1888112f558a7d(element) {
  const documentObject = $431fbd86ca7dc216$export$b204af158042fbac(element);
  let loadListener;
  if (documentObject.readyState !== "loading") $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
  else {
    loadListener = () => {
      $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
    };
    documentObject.addEventListener("DOMContentLoaded", loadListener);
  }
  return () => $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element, loadListener);
}
if (typeof document !== "undefined") $507fabe10e71c6fb$export$2f1888112f558a7d();
function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
  return $507fabe10e71c6fb$var$currentModality !== "pointer";
}
const $507fabe10e71c6fb$var$nonTextInputTypes = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput, modality, e2) {
  let document1 = $431fbd86ca7dc216$export$b204af158042fbac(e2 === null || e2 === void 0 ? void 0 : e2.target);
  const IHTMLInputElement = typeof window !== "undefined" ? $431fbd86ca7dc216$export$f21a1ffae260145a(e2 === null || e2 === void 0 ? void 0 : e2.target).HTMLInputElement : HTMLInputElement;
  const IHTMLTextAreaElement = typeof window !== "undefined" ? $431fbd86ca7dc216$export$f21a1ffae260145a(e2 === null || e2 === void 0 ? void 0 : e2.target).HTMLTextAreaElement : HTMLTextAreaElement;
  const IHTMLElement = typeof window !== "undefined" ? $431fbd86ca7dc216$export$f21a1ffae260145a(e2 === null || e2 === void 0 ? void 0 : e2.target).HTMLElement : HTMLElement;
  const IKeyboardEvent = typeof window !== "undefined" ? $431fbd86ca7dc216$export$f21a1ffae260145a(e2 === null || e2 === void 0 ? void 0 : e2.target).KeyboardEvent : KeyboardEvent;
  isTextInput = isTextInput || document1.activeElement instanceof IHTMLInputElement && !$507fabe10e71c6fb$var$nonTextInputTypes.has(document1.activeElement.type) || document1.activeElement instanceof IHTMLTextAreaElement || document1.activeElement instanceof IHTMLElement && document1.activeElement.isContentEditable;
  return !(isTextInput && modality === "keyboard" && e2 instanceof IKeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e2.key]);
}
function $507fabe10e71c6fb$export$ec71b4b83ac08ec3(fn, deps, opts) {
  $507fabe10e71c6fb$var$setupGlobalFocusEvents();
  y$1(() => {
    let handler = (modality, e2) => {
      if (!$507fabe10e71c6fb$var$isKeyboardFocusEvent(!!(opts === null || opts === void 0 ? void 0 : opts.isTextInput), modality, e2)) return;
      fn($507fabe10e71c6fb$export$b9b3dfddab17db27());
    };
    $507fabe10e71c6fb$var$changeHandlers.add(handler);
    return () => {
      $507fabe10e71c6fb$var$changeHandlers.delete(handler);
    };
  }, deps);
}
function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
  let { isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange } = props;
  const onBlur = q((e2) => {
    if (e2.target === e2.currentTarget) {
      if (onBlurProp) onBlurProp(e2);
      if (onFocusChange) onFocusChange(false);
      return true;
    }
  }, [
    onBlurProp,
    onFocusChange
  ]);
  const onSyntheticFocus = $8a9cb279dc87e130$export$715c682d09d639cc(onBlur);
  const onFocus = q((e2) => {
    const ownerDocument = $431fbd86ca7dc216$export$b204af158042fbac(e2.target);
    const activeElement = ownerDocument ? $d4ee10de306f2510$export$cd4e5573fbe2b576(ownerDocument) : $d4ee10de306f2510$export$cd4e5573fbe2b576();
    if (e2.target === e2.currentTarget && activeElement === $d4ee10de306f2510$export$e58f029f0fbfdb29(e2.nativeEvent)) {
      if (onFocusProp) onFocusProp(e2);
      if (onFocusChange) onFocusChange(true);
      onSyntheticFocus(e2);
    }
  }, [
    onFocusChange,
    onFocusProp,
    onSyntheticFocus
  ]);
  return {
    focusProps: {
      onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : void 0,
      onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : void 0
    }
  };
}
function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
  let { isDisabled, onBlurWithin, onFocusWithin, onFocusWithinChange } = props;
  let state = A$1({
    isFocusWithin: false
  });
  let { addGlobalListener, removeAllGlobalListeners } = $03deb23ff14920c4$export$4eaf04e54aa8eed6();
  let onBlur = q((e2) => {
    if (!e2.currentTarget.contains(e2.target)) return;
    if (state.current.isFocusWithin && !e2.currentTarget.contains(e2.relatedTarget)) {
      state.current.isFocusWithin = false;
      removeAllGlobalListeners();
      if (onBlurWithin) onBlurWithin(e2);
      if (onFocusWithinChange) onFocusWithinChange(false);
    }
  }, [
    onBlurWithin,
    onFocusWithinChange,
    state,
    removeAllGlobalListeners
  ]);
  let onSyntheticFocus = $8a9cb279dc87e130$export$715c682d09d639cc(onBlur);
  let onFocus = q((e2) => {
    if (!e2.currentTarget.contains(e2.target)) return;
    const ownerDocument = $431fbd86ca7dc216$export$b204af158042fbac(e2.target);
    const activeElement = $d4ee10de306f2510$export$cd4e5573fbe2b576(ownerDocument);
    if (!state.current.isFocusWithin && activeElement === $d4ee10de306f2510$export$e58f029f0fbfdb29(e2.nativeEvent)) {
      if (onFocusWithin) onFocusWithin(e2);
      if (onFocusWithinChange) onFocusWithinChange(true);
      state.current.isFocusWithin = true;
      onSyntheticFocus(e2);
      let currentTarget = e2.currentTarget;
      addGlobalListener(ownerDocument, "focus", (e3) => {
        if (state.current.isFocusWithin && !$d4ee10de306f2510$export$4282f70798064fe0(currentTarget, e3.target)) {
          let nativeEvent = new ownerDocument.defaultView.FocusEvent("blur", {
            relatedTarget: e3.target
          });
          $8a9cb279dc87e130$export$c2b7abe5d61ec696(nativeEvent, currentTarget);
          let event = $8a9cb279dc87e130$export$525bc4921d56d4a(nativeEvent);
          onBlur(event);
        }
      }, {
        capture: true
      });
    }
  }, [
    onFocusWithin,
    onFocusWithinChange,
    onSyntheticFocus,
    addGlobalListener,
    onBlur
  ]);
  if (isDisabled) return {
    focusWithinProps: {
      // These cannot be null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  };
  return {
    focusWithinProps: {
      onFocus,
      onBlur
    }
  };
}
let $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
let $6179b936705e76d3$var$hoverCount = 0;
function $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents() {
  $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = true;
  setTimeout(() => {
    $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
  }, 50);
}
function $6179b936705e76d3$var$handleGlobalPointerEvent(e2) {
  if (e2.pointerType === "touch") $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $6179b936705e76d3$var$setupGlobalTouchEvents() {
  if (typeof document === "undefined") return;
  if (typeof PointerEvent !== "undefined") document.addEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
  else if (process.env.NODE_ENV === "test") document.addEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
  $6179b936705e76d3$var$hoverCount++;
  return () => {
    $6179b936705e76d3$var$hoverCount--;
    if ($6179b936705e76d3$var$hoverCount > 0) return;
    if (typeof PointerEvent !== "undefined") document.removeEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
    else if (process.env.NODE_ENV === "test") document.removeEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
  };
}
function $6179b936705e76d3$export$ae780daf29e6d456(props) {
  let { onHoverStart, onHoverChange, onHoverEnd, isDisabled } = props;
  let [isHovered, setHovered] = d$1(false);
  let state = A$1({
    isHovered: false,
    ignoreEmulatedMouseEvents: false,
    pointerType: "",
    target: null
  }).current;
  y$1($6179b936705e76d3$var$setupGlobalTouchEvents, []);
  let { addGlobalListener, removeAllGlobalListeners } = $03deb23ff14920c4$export$4eaf04e54aa8eed6();
  let { hoverProps, triggerHoverEnd } = T(() => {
    let triggerHoverStart = (event, pointerType) => {
      state.pointerType = pointerType;
      if (isDisabled || pointerType === "touch" || state.isHovered || !event.currentTarget.contains(event.target)) return;
      state.isHovered = true;
      let target = event.currentTarget;
      state.target = target;
      addGlobalListener($431fbd86ca7dc216$export$b204af158042fbac(event.target), "pointerover", (e2) => {
        if (state.isHovered && state.target && !$d4ee10de306f2510$export$4282f70798064fe0(state.target, e2.target)) triggerHoverEnd2(e2, e2.pointerType);
      }, {
        capture: true
      });
      if (onHoverStart) onHoverStart({
        type: "hoverstart",
        target,
        pointerType
      });
      if (onHoverChange) onHoverChange(true);
      setHovered(true);
    };
    let triggerHoverEnd2 = (event, pointerType) => {
      let target = state.target;
      state.pointerType = "";
      state.target = null;
      if (pointerType === "touch" || !state.isHovered || !target) return;
      state.isHovered = false;
      removeAllGlobalListeners();
      if (onHoverEnd) onHoverEnd({
        type: "hoverend",
        target,
        pointerType
      });
      if (onHoverChange) onHoverChange(false);
      setHovered(false);
    };
    let hoverProps2 = {};
    if (typeof PointerEvent !== "undefined") {
      hoverProps2.onPointerEnter = (e2) => {
        if ($6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && e2.pointerType === "mouse") return;
        triggerHoverStart(e2, e2.pointerType);
      };
      hoverProps2.onPointerLeave = (e2) => {
        if (!isDisabled && e2.currentTarget.contains(e2.target)) triggerHoverEnd2(e2, e2.pointerType);
      };
    } else if (process.env.NODE_ENV === "test") {
      hoverProps2.onTouchStart = () => {
        state.ignoreEmulatedMouseEvents = true;
      };
      hoverProps2.onMouseEnter = (e2) => {
        if (!state.ignoreEmulatedMouseEvents && !$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents) triggerHoverStart(e2, "mouse");
        state.ignoreEmulatedMouseEvents = false;
      };
      hoverProps2.onMouseLeave = (e2) => {
        if (!isDisabled && e2.currentTarget.contains(e2.target)) triggerHoverEnd2(e2, "mouse");
      };
    }
    return {
      hoverProps: hoverProps2,
      triggerHoverEnd: triggerHoverEnd2
    };
  }, [
    onHoverStart,
    onHoverChange,
    onHoverEnd,
    isDisabled,
    state,
    addGlobalListener,
    removeAllGlobalListeners
  ]);
  y$1(() => {
    if (isDisabled) triggerHoverEnd({
      currentTarget: state.target
    }, state.pointerType);
  }, [
    isDisabled
  ]);
  return {
    hoverProps,
    isHovered
  };
}
function $f7dceffc5ad7768b$export$4e328f61c538687f(props = {}) {
  let { autoFocus = false, isTextInput, within } = props;
  let state = A$1({
    isFocused: false,
    isFocusVisible: autoFocus || $507fabe10e71c6fb$export$b9b3dfddab17db27()
  });
  let [isFocused, setFocused] = d$1(false);
  let [isFocusVisibleState, setFocusVisible] = d$1(() => state.current.isFocused && state.current.isFocusVisible);
  let updateState = q(() => setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
  let onFocusChange = q((isFocused2) => {
    state.current.isFocused = isFocused2;
    setFocused(isFocused2);
    updateState();
  }, [
    updateState
  ]);
  $507fabe10e71c6fb$export$ec71b4b83ac08ec3((isFocusVisible) => {
    state.current.isFocusVisible = isFocusVisible;
    updateState();
  }, [], {
    isTextInput
  });
  let { focusProps } = $a1ea59d68270f0dd$export$f8168d8dd8fd66e6({
    isDisabled: within,
    onFocusChange
  });
  let { focusWithinProps } = $9ab94262bd0047c7$export$420e68273165f4ec({
    isDisabled: !within,
    onFocusWithinChange: onFocusChange
  });
  return {
    isFocused,
    isFocusVisible: isFocusVisibleState,
    focusProps: within ? focusWithinProps : focusProps
  };
}
var i = Object.defineProperty;
var d = (t2, e2, n2) => e2 in t2 ? i(t2, e2, { enumerable: true, configurable: true, writable: true, value: n2 }) : t2[e2] = n2;
var r = (t2, e2, n2) => (d(t2, typeof e2 != "symbol" ? e2 + "" : e2, n2), n2);
let o$3 = class o {
  constructor() {
    r(this, "current", this.detect());
    r(this, "handoffState", "pending");
    r(this, "currentId", 0);
  }
  set(e2) {
    this.current !== e2 && (this.handoffState = "pending", this.currentId = 0, this.current = e2);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
let s$1 = new o$3();
function o$2(n2) {
  var e2, r2;
  return s$1.isServer ? null : n2 ? "ownerDocument" in n2 ? n2.ownerDocument : "current" in n2 ? (r2 = (e2 = n2.current) == null ? void 0 : e2.ownerDocument) != null ? r2 : document : null : document;
}
function t$1(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o3) => setTimeout(() => {
    throw o3;
  }));
}
function o$1() {
  let n2 = [], r2 = { addEventListener(e2, t2, s2, a2) {
    return e2.addEventListener(t2, s2, a2), r2.add(() => e2.removeEventListener(t2, s2, a2));
  }, requestAnimationFrame(...e2) {
    let t2 = requestAnimationFrame(...e2);
    return r2.add(() => cancelAnimationFrame(t2));
  }, nextFrame(...e2) {
    return r2.requestAnimationFrame(() => r2.requestAnimationFrame(...e2));
  }, setTimeout(...e2) {
    let t2 = setTimeout(...e2);
    return r2.add(() => clearTimeout(t2));
  }, microTask(...e2) {
    let t2 = { current: true };
    return t$1(() => {
      t2.current && e2[0]();
    }), r2.add(() => {
      t2.current = false;
    });
  }, style(e2, t2, s2) {
    let a2 = e2.style.getPropertyValue(t2);
    return Object.assign(e2.style, { [t2]: s2 }), this.add(() => {
      Object.assign(e2.style, { [t2]: a2 });
    });
  }, group(e2) {
    let t2 = o$1();
    return e2(t2), this.add(() => t2.dispose());
  }, add(e2) {
    return n2.includes(e2) || n2.push(e2), () => {
      let t2 = n2.indexOf(e2);
      if (t2 >= 0) for (let s2 of n2.splice(t2, 1)) s2();
    };
  }, dispose() {
    for (let e2 of n2.splice(0)) e2();
  } };
  return r2;
}
function p() {
  let [e2] = d$1(o$1);
  return y$1(() => () => e2.dispose(), [e2]), e2;
}
let n = (e2, t2) => {
  s$1.isServer ? y$1(e2, t2) : _$2(e2, t2);
};
function s(e2) {
  let r2 = A$1(e2);
  return n(() => {
    r2.current = e2;
  }, [e2]), r2;
}
let o2 = function(t2) {
  let e2 = s(t2);
  return Rn.useCallback((...r2) => e2.current(...r2), [e2]);
};
function E(e2) {
  let t2 = e2.width / 2, n2 = e2.height / 2;
  return { top: e2.clientY - n2, right: e2.clientX + t2, bottom: e2.clientY + n2, left: e2.clientX - t2 };
}
function P$2(e2, t2) {
  return !(!e2 || !t2 || e2.right < t2.left || e2.left > t2.right || e2.bottom < t2.top || e2.top > t2.bottom);
}
function w({ disabled: e2 = false } = {}) {
  let t2 = A$1(null), [n2, l] = d$1(false), r2 = p(), o$12 = o2(() => {
    t2.current = null, l(false), r2.dispose();
  }), f2 = o2((s2) => {
    if (r2.dispose(), t2.current === null) {
      t2.current = s2.currentTarget, l(true);
      {
        let i2 = o$2(s2.currentTarget);
        r2.addEventListener(i2, "pointerup", o$12, false), r2.addEventListener(i2, "pointermove", (c2) => {
          if (t2.current) {
            let p2 = E(c2);
            l(P$2(p2, t2.current.getBoundingClientRect()));
          }
        }, false), r2.addEventListener(i2, "pointercancel", o$12, false);
      }
    }
  });
  return { pressed: n2, pressProps: e2 ? {} : { onPointerDown: f2, onPointerUp: o$12, onClick: o$12 } };
}
let e$1 = K$1(void 0);
function a$1() {
  return x(e$1);
}
function t(...r2) {
  return Array.from(new Set(r2.flatMap((n2) => typeof n2 == "string" ? n2.split(" ") : []))).filter(Boolean).join(" ");
}
function u$2(r2, n2, ...a2) {
  if (r2 in n2) {
    let e2 = n2[r2];
    return typeof e2 == "function" ? e2(...a2) : e2;
  }
  let t2 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u$2), t2;
}
var O = ((a2) => (a2[a2.None = 0] = "None", a2[a2.RenderStrategy = 1] = "RenderStrategy", a2[a2.Static = 2] = "Static", a2))(O || {}), A = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(A || {});
function L$1() {
  let n2 = U$2();
  return q((r2) => C$1({ mergeRefs: n2, ...r2 }), [n2]);
}
function C$1({ ourProps: n2, theirProps: r2, slot: e2, defaultTag: a2, features: s2, visible: t2 = true, name: l, mergeRefs: i2 }) {
  i2 = i2 != null ? i2 : $;
  let o3 = P$1(r2, n2);
  if (t2) return F(o3, e2, a2, l, i2);
  let y2 = s2 != null ? s2 : 0;
  if (y2 & 2) {
    let { static: f2 = false, ...u2 } = o3;
    if (f2) return F(u2, e2, a2, l, i2);
  }
  if (y2 & 1) {
    let { unmount: f2 = true, ...u2 } = o3;
    return u$2(f2 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return F({ ...u2, hidden: true, style: { display: "none" } }, e2, a2, l, i2);
    } });
  }
  return F(o3, e2, a2, l, i2);
}
function F(n2, r2 = {}, e2, a2, s2) {
  let { as: t$12 = e2, children: l, refName: i2 = "ref", ...o3 } = h(n2, ["unmount", "static"]), y2 = n2.ref !== void 0 ? { [i2]: n2.ref } : {}, f2 = typeof l == "function" ? l(r2) : l;
  "className" in o3 && o3.className && typeof o3.className == "function" && (o3.className = o3.className(r2)), o3["aria-labelledby"] && o3["aria-labelledby"] === o3.id && (o3["aria-labelledby"] = void 0);
  let u2 = {};
  if (r2) {
    let d2 = false, p2 = [];
    for (let [c2, T2] of Object.entries(r2)) typeof T2 == "boolean" && (d2 = true), T2 === true && p2.push(c2.replace(/([A-Z])/g, (g2) => `-${g2.toLowerCase()}`));
    if (d2) {
      u2["data-headlessui-state"] = p2.join(" ");
      for (let c2 of p2) u2[`data-${c2}`] = "";
    }
  }
  if (t$12 === k && (Object.keys(m(o3)).length > 0 || Object.keys(m(u2)).length > 0)) if (!mn(f2) || Array.isArray(f2) && f2.length > 1) {
    if (Object.keys(m(o3)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${a2} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(m(o3)).concat(Object.keys(m(u2))).map((d2) => `  - ${d2}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d2) => `  - ${d2}`).join(`
`)].join(`
`));
  } else {
    let d2 = f2.props, p2 = d2 == null ? void 0 : d2.className, c2 = typeof p2 == "function" ? (...R2) => t(p2(...R2), o3.className) : t(p2, o3.className), T2 = c2 ? { className: c2 } : {}, g2 = P$1(f2.props, m(h(o3, ["ref"])));
    for (let R2 in u2) R2 in g2 && delete u2[R2];
    return _n(f2, Object.assign({}, g2, u2, y2, { ref: s2(H$2(f2), y2.ref) }, T2));
  }
  return _$3(t$12, Object.assign({}, h(o3, ["ref"]), t$12 !== k && y2, t$12 !== k && u2), f2);
}
function U$2() {
  let n2 = A$1([]), r2 = q((e2) => {
    for (let a2 of n2.current) a2 != null && (typeof a2 == "function" ? a2(e2) : a2.current = e2);
  }, []);
  return (...e2) => {
    if (!e2.every((a2) => a2 == null)) return n2.current = e2, r2;
  };
}
function $(...n2) {
  return n2.every((r2) => r2 == null) ? void 0 : (r2) => {
    for (let e2 of n2) e2 != null && (typeof e2 == "function" ? e2(r2) : e2.current = r2);
  };
}
function P$1(...n2) {
  if (n2.length === 0) return {};
  if (n2.length === 1) return n2[0];
  let r2 = {}, e2 = {};
  for (let s2 of n2) for (let t2 in s2) t2.startsWith("on") && typeof s2[t2] == "function" ? (e2[t2] != null || (e2[t2] = []), e2[t2].push(s2[t2])) : r2[t2] = s2[t2];
  if (r2.disabled || r2["aria-disabled"]) for (let s2 in e2) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(s2) && (e2[s2] = [(t2) => {
    var l;
    return (l = t2 == null ? void 0 : t2.preventDefault) == null ? void 0 : l.call(t2);
  }]);
  for (let s2 in e2) Object.assign(r2, { [s2](t2, ...l) {
    let i2 = e2[s2];
    for (let o3 of i2) {
      if ((t2 instanceof Event || (t2 == null ? void 0 : t2.nativeEvent) instanceof Event) && t2.defaultPrevented) return;
      o3(t2, ...l);
    }
  } });
  return r2;
}
function _$1(...n2) {
  if (n2.length === 0) return {};
  if (n2.length === 1) return n2[0];
  let r2 = {}, e2 = {};
  for (let s2 of n2) for (let t2 in s2) t2.startsWith("on") && typeof s2[t2] == "function" ? (e2[t2] != null || (e2[t2] = []), e2[t2].push(s2[t2])) : r2[t2] = s2[t2];
  for (let s2 in e2) Object.assign(r2, { [s2](...t2) {
    let l = e2[s2];
    for (let i2 of l) i2 == null || i2(...t2);
  } });
  return r2;
}
function K(n2) {
  var r2;
  return Object.assign(D(n2), { displayName: (r2 = n2.displayName) != null ? r2 : n2.name });
}
function m(n2) {
  let r2 = Object.assign({}, n2);
  for (let e2 in r2) r2[e2] === void 0 && delete r2[e2];
  return r2;
}
function h(n2, r2 = []) {
  let e2 = Object.assign({}, n2);
  for (let a2 of r2) a2 in e2 && delete e2[a2];
  return e2;
}
function H$2(n2) {
  return Rn.version.split(".")[0] >= "19" ? n2.props.ref : n2.ref;
}
let R = "button";
function v(a2, u2) {
  var p2;
  let l = a$1(), { disabled: e2 = l || false, autoFocus: t2 = false, ...o3 } = a2, { isFocusVisible: r2, focusProps: i2 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: t2 }), { isHovered: s2, hoverProps: T$1 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e2 }), { pressed: n2, pressProps: d2 } = w({ disabled: e2 }), f2 = _$1({ ref: u2, type: (p2 = o3.type) != null ? p2 : "button", disabled: e2 || void 0, autoFocus: t2 }, i2, T$1, d2), m2 = T(() => ({ disabled: e2, hover: s2, focus: r2, active: n2, autofocus: t2 }), [e2, s2, r2, n2, t2]);
  return L$1()({ ourProps: f2, theirProps: o3, slot: m2, defaultTag: R, name: "Button" });
}
let H$1 = K(v);
let e = K$1(void 0);
function u$1() {
  return x(e);
}
let u = Symbol();
function y(...t2) {
  let n2 = A$1(t2);
  y$1(() => {
    n2.current = t2;
  }, [t2]);
  let c2 = o2((e2) => {
    for (let o3 of n2.current) o3 != null && (typeof o3 == "function" ? o3(e2) : o3.current = e2);
  });
  return t2.every((e2) => e2 == null || (e2 == null ? void 0 : e2[u])) ? void 0 : c2;
}
let a = K$1(null);
a.displayName = "DescriptionContext";
function f() {
  let r2 = x(a);
  if (r2 === null) {
    let e2 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(e2, f), e2;
  }
  return r2;
}
function U$1() {
  var r2, e2;
  return (e2 = (r2 = x(a)) == null ? void 0 : r2.value) != null ? e2 : void 0;
}
let S = "p";
function C(r2, e2) {
  let d2 = g(), t2 = a$1(), { id: i2 = `headlessui-description-${d2}`, ...l } = r2, n$1 = f(), s2 = y(e2);
  n(() => n$1.register(i2), [i2, n$1.register]);
  let o3 = t2 || false, p2 = T(() => ({ ...n$1.slot, disabled: o3 }), [n$1.slot, o3]), D2 = { ref: s2, ...n$1.props, id: i2 };
  return L$1()({ ourProps: D2, theirProps: l, slot: p2, defaultTag: S, name: n$1.name || "Description" });
}
let _ = K(C);
Object.assign(_, {});
let c = K$1(null);
c.displayName = "LabelContext";
function P() {
  let r2 = x(c);
  if (r2 === null) {
    let l = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(l, P), l;
  }
  return r2;
}
function I(r2) {
  var a2, e2, o3;
  let l = (e2 = (a2 = x(c)) == null ? void 0 : a2.value) != null ? e2 : void 0;
  return ((o3 = void 0) != null ? o3 : 0) > 0 ? [l, ...r2].filter(Boolean).join(" ") : l;
}
let N = "label";
function G(r2, l) {
  var y$12;
  let a2 = g(), e2 = P(), o$12 = u$1(), g$1 = a$1(), { id: t2 = `headlessui-label-${a2}`, htmlFor: s2 = o$12 != null ? o$12 : (y$12 = e2.props) == null ? void 0 : y$12.htmlFor, passive: m2 = false, ...i2 } = r2, p2 = y(l);
  n(() => e2.register(t2), [t2, e2.register]);
  let u2 = o2((L2) => {
    let b2 = L2.currentTarget;
    if (b2 instanceof HTMLLabelElement && L2.preventDefault(), e2.props && "onClick" in e2.props && typeof e2.props.onClick == "function" && e2.props.onClick(L2), b2 instanceof HTMLLabelElement) {
      let n2 = document.getElementById(b2.htmlFor);
      if (n2) {
        let E2 = n2.getAttribute("disabled");
        if (E2 === "true" || E2 === "") return;
        let x2 = n2.getAttribute("aria-disabled");
        if (x2 === "true" || x2 === "") return;
        (n2 instanceof HTMLInputElement && (n2.type === "radio" || n2.type === "checkbox") || n2.role === "radio" || n2.role === "checkbox" || n2.role === "switch") && n2.click(), n2.focus({ preventScroll: true });
      }
    }
  }), d2 = g$1 || false, C2 = T(() => ({ ...e2.slot, disabled: d2 }), [e2.slot, d2]), f2 = { ref: p2, ...e2.props, id: t2, htmlFor: s2, onClick: u2 };
  return m2 && ("onClick" in f2 && (delete f2.htmlFor, delete f2.onClick), "onClick" in i2 && delete i2.onClick), L$1()({ ourProps: f2, theirProps: i2, slot: C2, defaultTag: s2 ? N : "div", name: e2.name || "Label" });
}
let U = K(G);
Object.assign(U, {});
let L = "textarea";
function H(s2, l) {
  let i2 = g(), d2 = u$1(), n2 = a$1(), { id: p2 = d2 || `headlessui-textarea-${i2}`, disabled: e2 = n2 || false, autoFocus: r2 = false, invalid: a2 = false, ...T$1 } = s2, f2 = I(), m2 = U$1(), { isFocused: o3, focusProps: u2 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: r2 }), { isHovered: t2, hoverProps: b2 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e2 }), y2 = _$1({ ref: l, id: p2, "aria-labelledby": f2, "aria-describedby": m2, "aria-invalid": a2 ? "true" : void 0, disabled: e2 || void 0, autoFocus: r2 }, u2, b2), x2 = T(() => ({ disabled: e2, invalid: a2, hover: t2, focus: o3, autofocus: r2 }), [e2, a2, t2, o3, r2]);
  return L$1()({ ourProps: y2, theirProps: T$1, slot: x2, defaultTag: L, name: "Textarea" });
}
let J = K(H);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Icon = D(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => {
    return _$3(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className),
        ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => _$3(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const createLucideIcon = (iconName, iconNode) => {
  const Component = D(
    ({ className, ...props }, ref) => _$3(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$9 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$9);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$8 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
const ChevronUp = createLucideIcon("chevron-up", __iconNode$8);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$7 = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
];
const MessageCircle = createLucideIcon("message-circle", __iconNode$7);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$6 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$6);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  [
    "path",
    {
      d: "M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",
      key: "w46dr5"
    }
  ]
];
const Puzzle = createLucideIcon("puzzle", __iconNode$5);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
];
const RefreshCw = createLucideIcon("refresh-cw", __iconNode$4);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode$3);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Settings = createLucideIcon("settings", __iconNode$2);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode$1);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69", key: "1dl1wf" }],
  ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523", key: "4k23kn" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643", key: "1grhjp" }],
  ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764", key: "z3jwby" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
];
const WifiOff = createLucideIcon("wifi-off", __iconNode);
var LIBVERSION = "2.0.3", UA_MAX_LENGTH = 500, USER_AGENT = "user-agent", EMPTY = "", UNKNOWN = "?", FUNC_TYPE = "function", UNDEF_TYPE = "undefined", OBJ_TYPE = "object", STR_TYPE = "string", UA_BROWSER = "browser", UA_CPU = "cpu", UA_DEVICE = "device", UA_ENGINE = "engine", UA_OS = "os", UA_RESULT = "result", NAME = "name", TYPE = "type", VENDOR = "vendor", VERSION = "version", ARCHITECTURE = "architecture", MAJOR = "major", MODEL = "model", CONSOLE = "console", MOBILE = "mobile", TABLET = "tablet", SMARTTV = "smarttv", WEARABLE = "wearable", XR = "xr", EMBEDDED = "embedded", INAPP = "inapp", BRANDS = "brands", FORMFACTORS = "formFactors", FULLVERLIST = "fullVersionList", PLATFORM = "platform", PLATFORMVER = "platformVersion", BITNESS = "bitness", CH_HEADER = "sec-ch-ua", CH_HEADER_FULL_VER_LIST = CH_HEADER + "-full-version-list", CH_HEADER_ARCH = CH_HEADER + "-arch", CH_HEADER_BITNESS = CH_HEADER + "-" + BITNESS, CH_HEADER_FORM_FACTORS = CH_HEADER + "-form-factors", CH_HEADER_MOBILE = CH_HEADER + "-" + MOBILE, CH_HEADER_MODEL = CH_HEADER + "-" + MODEL, CH_HEADER_PLATFORM = CH_HEADER + "-" + PLATFORM, CH_HEADER_PLATFORM_VER = CH_HEADER_PLATFORM + "-version", CH_ALL_VALUES = [BRANDS, FULLVERLIST, MOBILE, MODEL, PLATFORM, PLATFORMVER, ARCHITECTURE, FORMFACTORS, BITNESS], AMAZON = "Amazon", APPLE = "Apple", ASUS = "ASUS", BLACKBERRY = "BlackBerry", GOOGLE = "Google", HUAWEI = "Huawei", LENOVO = "Lenovo", HONOR = "Honor", LG = "LG", MICROSOFT = "Microsoft", MOTOROLA = "Motorola", NVIDIA = "Nvidia", ONEPLUS = "OnePlus", OPPO = "OPPO", SAMSUNG = "Samsung", SHARP = "Sharp", SONY = "Sony", XIAOMI = "Xiaomi", ZEBRA = "Zebra", CHROME = "Chrome", CHROMIUM = "Chromium", CHROMECAST = "Chromecast", EDGE = "Edge", FIREFOX = "Firefox", OPERA = "Opera", FACEBOOK = "Facebook", SOGOU = "Sogou", PREFIX_MOBILE = "Mobile ", SUFFIX_BROWSER = " Browser", WINDOWS = "Windows";
var isWindow = typeof window !== UNDEF_TYPE, NAVIGATOR = isWindow && window.navigator ? window.navigator : void 0, NAVIGATOR_UADATA = NAVIGATOR && NAVIGATOR.userAgentData ? NAVIGATOR.userAgentData : void 0;
var extend = function(defaultRgx, extensions) {
  var mergedRgx = {};
  var extraRgx = extensions;
  if (!isExtensions(extensions)) {
    extraRgx = {};
    for (var i2 in extensions) {
      for (var j in extensions[i2]) {
        extraRgx[j] = extensions[i2][j].concat(extraRgx[j] ? extraRgx[j] : []);
      }
    }
  }
  for (var k2 in defaultRgx) {
    mergedRgx[k2] = extraRgx[k2] && extraRgx[k2].length % 2 === 0 ? extraRgx[k2].concat(defaultRgx[k2]) : defaultRgx[k2];
  }
  return mergedRgx;
}, enumerize = function(arr) {
  var enums = {};
  for (var i2 = 0; i2 < arr.length; i2++) {
    enums[arr[i2].toUpperCase()] = arr[i2];
  }
  return enums;
}, has = function(str1, str2) {
  if (typeof str1 === OBJ_TYPE && str1.length > 0) {
    for (var i2 in str1) {
      if (lowerize(str1[i2]) == lowerize(str2)) return true;
    }
    return false;
  }
  return isString(str1) ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
}, isExtensions = function(obj, deep) {
  for (var prop in obj) {
    return /^(browser|cpu|device|engine|os)$/.test(prop) || (deep ? isExtensions(obj[prop]) : false);
  }
}, isString = function(val) {
  return typeof val === STR_TYPE;
}, itemListToArray = function(header) {
  if (!header) return void 0;
  var arr = [];
  var tokens = strip(/\\?\"/g, header).split(",");
  for (var i2 = 0; i2 < tokens.length; i2++) {
    if (tokens[i2].indexOf(";") > -1) {
      var token = trim(tokens[i2]).split(";v=");
      arr[i2] = { brand: token[0], version: token[1] };
    } else {
      arr[i2] = trim(tokens[i2]);
    }
  }
  return arr;
}, lowerize = function(str) {
  return isString(str) ? str.toLowerCase() : str;
}, majorize = function(version) {
  return isString(version) ? strip(/[^\d\.]/g, version).split(".")[0] : void 0;
}, setProps = function(arr) {
  for (var i2 in arr) {
    var propName = arr[i2];
    if (typeof propName == OBJ_TYPE && propName.length == 2) {
      this[propName[0]] = propName[1];
    } else {
      this[propName] = void 0;
    }
  }
  return this;
}, strip = function(pattern, str) {
  return isString(str) ? str.replace(pattern, EMPTY) : str;
}, stripQuotes = function(str) {
  return strip(/\\?\"/g, str);
}, trim = function(str, len) {
  if (isString(str)) {
    str = strip(/^\s\s*/, str);
    return typeof len === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
  }
};
var rgxMapper = function(ua, arrays) {
  if (!ua || !arrays) return;
  var i2 = 0, j, k2, p2, q2, matches, match;
  while (i2 < arrays.length && !matches) {
    var regex = arrays[i2], props = arrays[i2 + 1];
    j = k2 = 0;
    while (j < regex.length && !matches) {
      if (!regex[j]) {
        break;
      }
      matches = regex[j++].exec(ua);
      if (!!matches) {
        for (p2 = 0; p2 < props.length; p2++) {
          match = matches[++k2];
          q2 = props[p2];
          if (typeof q2 === OBJ_TYPE && q2.length > 0) {
            if (q2.length === 2) {
              if (typeof q2[1] == FUNC_TYPE) {
                this[q2[0]] = q2[1].call(this, match);
              } else {
                this[q2[0]] = q2[1];
              }
            } else if (q2.length === 3) {
              if (typeof q2[1] === FUNC_TYPE && !(q2[1].exec && q2[1].test)) {
                this[q2[0]] = match ? q2[1].call(this, match, q2[2]) : void 0;
              } else {
                this[q2[0]] = match ? match.replace(q2[1], q2[2]) : void 0;
              }
            } else if (q2.length === 4) {
              this[q2[0]] = match ? q2[3].call(this, match.replace(q2[1], q2[2])) : void 0;
            }
          } else {
            this[q2] = match ? match : void 0;
          }
        }
      }
    }
    i2 += 2;
  }
}, strMapper = function(str, map) {
  for (var i2 in map) {
    if (typeof map[i2] === OBJ_TYPE && map[i2].length > 0) {
      for (var j = 0; j < map[i2].length; j++) {
        if (has(map[i2][j], str)) {
          return i2 === UNKNOWN ? void 0 : i2;
        }
      }
    } else if (has(map[i2], str)) {
      return i2 === UNKNOWN ? void 0 : i2;
    }
  }
  return map.hasOwnProperty("*") ? map["*"] : str;
};
var windowsVersionMap = {
  "ME": "4.90",
  "NT 3.11": "NT3.51",
  "NT 4.0": "NT4.0",
  "2000": "NT 5.0",
  "XP": ["NT 5.1", "NT 5.2"],
  "Vista": "NT 6.0",
  "7": "NT 6.1",
  "8": "NT 6.2",
  "8.1": "NT 6.3",
  "10": ["NT 6.4", "NT 10.0"],
  "RT": "ARM"
}, formFactorsMap = {
  "embedded": "Automotive",
  "mobile": "Mobile",
  "tablet": ["Tablet", "EInk"],
  "smarttv": "TV",
  "wearable": "Watch",
  "xr": ["VR", "XR"],
  "?": ["Desktop", "Unknown"],
  "*": void 0
};
var defaultRegexes = {
  browser: [
    [
      // Most common regardless engine
      /\b(?:crmo|crios)\/([\w\.]+)/i
      // Chrome for Android/iOS
    ],
    [VERSION, [NAME, PREFIX_MOBILE + "Chrome"]],
    [
      /edg(?:e|ios|a)?\/([\w\.]+)/i
      // Microsoft Edge
    ],
    [VERSION, [NAME, "Edge"]],
    [
      // Presto based
      /(opera mini)\/([-\w\.]+)/i,
      // Opera Mini
      /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
      // Opera Mobi/Tablet
      /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
      // Opera
    ],
    [NAME, VERSION],
    [
      /opios[\/ ]+([\w\.]+)/i
      // Opera mini on iphone >= 8.0
    ],
    [VERSION, [NAME, OPERA + " Mini"]],
    [
      /\bop(?:rg)?x\/([\w\.]+)/i
      // Opera GX
    ],
    [VERSION, [NAME, OPERA + " GX"]],
    [
      /\bopr\/([\w\.]+)/i
      // Opera Webkit
    ],
    [VERSION, [NAME, OPERA]],
    [
      // Mixed
      /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
      // Baidu
    ],
    [VERSION, [NAME, "Baidu"]],
    [
      /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i
      // Maxthon
    ],
    [VERSION, [NAME, "Maxthon"]],
    [
      /(kindle)\/([\w\.]+)/i,
      // Kindle
      /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
      // Lunascape/Maxthon/Netfront/Jasmine/Blazer/Sleipnir
      // Trident based
      /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
      // Avant/IEMobile/SlimBrowser/SlimBoat/Slimjet
      /(?:ms|\()(ie) ([\w\.]+)/i,
      // Internet Explorer
      // Blink/Webkit/KHTML based                                         // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon/LG Browser/Otter/qutebrowser/Dooble
      /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:lg |qute)browser)\/([-\w\.]+)/i,
      // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ//Vivaldi/DuckDuckGo/Klar/Helio/Dragon
      /(heytap|ovi|115|surf)browser\/([\d\.]+)/i,
      // HeyTap/Ovi/115/Surf
      /(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i
      // Ecosia/Weibo
    ],
    [NAME, VERSION],
    [
      /quark(?:pc)?\/([-\w\.]+)/i
      // Quark
    ],
    [VERSION, [NAME, "Quark"]],
    [
      /\bddg\/([\w\.]+)/i
      // DuckDuckGo
    ],
    [VERSION, [NAME, "DuckDuckGo"]],
    [
      /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
      // UCBrowser
    ],
    [VERSION, [NAME, "UCBrowser"]],
    [
      /microm.+\bqbcore\/([\w\.]+)/i,
      // WeChat Desktop for Windows Built-in Browser
      /\bqbcore\/([\w\.]+).+microm/i,
      /micromessenger\/([\w\.]+)/i
      // WeChat
    ],
    [VERSION, [NAME, "WeChat"]],
    [
      /konqueror\/([\w\.]+)/i
      // Konqueror
    ],
    [VERSION, [NAME, "Konqueror"]],
    [
      /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
      // IE11
    ],
    [VERSION, [NAME, "IE"]],
    [
      /ya(?:search)?browser\/([\w\.]+)/i
      // Yandex
    ],
    [VERSION, [NAME, "Yandex"]],
    [
      /slbrowser\/([\w\.]+)/i
      // Smart Lenovo Browser
    ],
    [VERSION, [NAME, "Smart " + LENOVO + SUFFIX_BROWSER]],
    [
      /(avast|avg)\/([\w\.]+)/i
      // Avast/AVG Secure Browser
    ],
    [[NAME, /(.+)/, "$1 Secure" + SUFFIX_BROWSER], VERSION],
    [
      /\bfocus\/([\w\.]+)/i
      // Firefox Focus
    ],
    [VERSION, [NAME, FIREFOX + " Focus"]],
    [
      /\bopt\/([\w\.]+)/i
      // Opera Touch
    ],
    [VERSION, [NAME, OPERA + " Touch"]],
    [
      /coc_coc\w+\/([\w\.]+)/i
      // Coc Coc Browser
    ],
    [VERSION, [NAME, "Coc Coc"]],
    [
      /dolfin\/([\w\.]+)/i
      // Dolphin
    ],
    [VERSION, [NAME, "Dolphin"]],
    [
      /coast\/([\w\.]+)/i
      // Opera Coast
    ],
    [VERSION, [NAME, OPERA + " Coast"]],
    [
      /miuibrowser\/([\w\.]+)/i
      // MIUI Browser
    ],
    [VERSION, [NAME, "MIUI" + SUFFIX_BROWSER]],
    [
      /fxios\/([\w\.-]+)/i
      // Firefox for iOS
    ],
    [VERSION, [NAME, PREFIX_MOBILE + FIREFOX]],
    [
      /\bqihoobrowser\/?([\w\.]*)/i
      // 360
    ],
    [VERSION, [NAME, "360"]],
    [
      /\b(qq)\/([\w\.]+)/i
      // QQ
    ],
    [[NAME, /(.+)/, "$1Browser"], VERSION],
    [
      /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
    ],
    [[NAME, /(.+)/, "$1" + SUFFIX_BROWSER], VERSION],
    [
      // Oculus/Sailfish/HuaweiBrowser/VivoBrowser/PicoBrowser
      /samsungbrowser\/([\w\.]+)/i
      // Samsung Internet
    ],
    [VERSION, [NAME, SAMSUNG + " Internet"]],
    [
      /metasr[\/ ]?([\d\.]+)/i
      // Sogou Explorer
    ],
    [VERSION, [NAME, SOGOU + " Explorer"]],
    [
      /(sogou)mo\w+\/([\d\.]+)/i
      // Sogou Mobile
    ],
    [[NAME, SOGOU + " Mobile"], VERSION],
    [
      /(electron)\/([\w\.]+) safari/i,
      // Electron-based App
      /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
      // Tesla
      /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
      // QQ/2345
    ],
    [NAME, VERSION],
    [
      /(lbbrowser|rekonq)/i
      // LieBao Browser/Rekonq
    ],
    [NAME],
    [
      /ome\/([\w\.]+) \w* ?(iron) saf/i,
      // Iron
      /ome\/([\w\.]+).+qihu (360)[es]e/i
      // 360
    ],
    [VERSION, NAME],
    [
      // WebView
      /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
      // Facebook App for iOS & Android
    ],
    [[NAME, FACEBOOK], VERSION, [TYPE, INAPP]],
    [
      /(Klarna)\/([\w\.]+)/i,
      // Klarna Shopping Browser for iOS & Android
      /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
      // Kakao App
      /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
      // Naver InApp
      /(daum)apps[\/ ]([\w\.]+)/i,
      // Daum App
      /safari (line)\/([\w\.]+)/i,
      // Line App for iOS
      /\b(line)\/([\w\.]+)\/iab/i,
      // Line App for Android
      /(alipay)client\/([\w\.]+)/i,
      // Alipay
      /(twitter)(?:and| f.+e\/([\w\.]+))/i,
      // Twitter
      /(instagram|snapchat)[\/ ]([-\w\.]+)/i
      // Instagram/Snapchat
    ],
    [NAME, VERSION, [TYPE, INAPP]],
    [
      /\bgsa\/([\w\.]+) .*safari\//i
      // Google Search Appliance on iOS
    ],
    [VERSION, [NAME, "GSA"], [TYPE, INAPP]],
    [
      /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
      // TikTok
    ],
    [VERSION, [NAME, "TikTok"], [TYPE, INAPP]],
    [
      /\[(linkedin)app\]/i
      // LinkedIn App for iOS & Android
    ],
    [NAME, [TYPE, INAPP]],
    [
      /(chromium)[\/ ]([-\w\.]+)/i
      // Chromium
    ],
    [NAME, VERSION],
    [
      /headlesschrome(?:\/([\w\.]+)| )/i
      // Chrome Headless
    ],
    [VERSION, [NAME, CHROME + " Headless"]],
    [
      / wv\).+(chrome)\/([\w\.]+)/i
      // Chrome WebView
    ],
    [[NAME, CHROME + " WebView"], VERSION],
    [
      /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
      // Android Browser
    ],
    [VERSION, [NAME, "Android" + SUFFIX_BROWSER]],
    [
      /chrome\/([\w\.]+) mobile/i
      // Chrome Mobile
    ],
    [VERSION, [NAME, PREFIX_MOBILE + "Chrome"]],
    [
      /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
      // Chrome/OmniWeb/Arora/Tizen/Nokia
    ],
    [NAME, VERSION],
    [
      /version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i
      // Safari Mobile
    ],
    [VERSION, [NAME, PREFIX_MOBILE + "Safari"]],
    [
      /iphone .*mobile(?:\/\w+ | ?)safari/i
    ],
    [[NAME, PREFIX_MOBILE + "Safari"]],
    [
      /version\/([\w\.\,]+) .*(safari)/i
      // Safari
    ],
    [VERSION, NAME],
    [
      /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
      // Safari < 3.0
    ],
    [NAME, [VERSION, "1"]],
    [
      /(webkit|khtml)\/([\w\.]+)/i
    ],
    [NAME, VERSION],
    [
      // Gecko based
      /(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i
      // Firefox Mobile
    ],
    [[NAME, PREFIX_MOBILE + FIREFOX], VERSION],
    [
      /(navigator|netscape\d?)\/([-\w\.]+)/i
      // Netscape
    ],
    [[NAME, "Netscape"], VERSION],
    [
      /(wolvic|librewolf)\/([\w\.]+)/i
      // Wolvic/LibreWolf
    ],
    [NAME, VERSION],
    [
      /mobile vr; rv:([\w\.]+)\).+firefox/i
      // Firefox Reality
    ],
    [VERSION, [NAME, FIREFOX + " Reality"]],
    [
      /ekiohf.+(flow)\/([\w\.]+)/i,
      // Flow
      /(swiftfox)/i,
      // Swiftfox
      /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
      // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
      /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
      // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
      /(firefox)\/([\w\.]+)/i,
      // Other Firefox-based
      /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
      // Mozilla
      // Other
      /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
      // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Obigo/Mosaic/Go/ICE/UP.Browser/Ladybird
      /\b(links) \(([\w\.]+)/i
      // Links
    ],
    [NAME, [VERSION, /_/g, "."]],
    [
      /(cobalt)\/([\w\.]+)/i
      // Cobalt
    ],
    [NAME, [VERSION, /[^\d\.]+./, EMPTY]]
  ],
  cpu: [
    [
      /\b((amd|x|x86[-_]?|wow|win)64)\b/i
      // AMD64 (x64)
    ],
    [[ARCHITECTURE, "amd64"]],
    [
      /(ia32(?=;))/i,
      // IA32 (quicktime)
      /\b((i[346]|x)86)(pc)?\b/i
      // IA32 (x86)
    ],
    [[ARCHITECTURE, "ia32"]],
    [
      /\b(aarch64|arm(v?[89]e?l?|_?64))\b/i
      // ARM64
    ],
    [[ARCHITECTURE, "arm64"]],
    [
      /\b(arm(v[67])?ht?n?[fl]p?)\b/i
      // ARMHF
    ],
    [[ARCHITECTURE, "armhf"]],
    [
      // PocketPC mistakenly identified as PowerPC
      /( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i
    ],
    [[ARCHITECTURE, "arm"]],
    [
      /((ppc|powerpc)(64)?)( mac|;|\))/i
      // PowerPC
    ],
    [[ARCHITECTURE, /ower/, EMPTY, lowerize]],
    [
      / sun4\w[;\)]/i
      // SPARC
    ],
    [[ARCHITECTURE, "sparc"]],
    [
      /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i
      // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
    ],
    [[ARCHITECTURE, lowerize]]
  ],
  device: [
    [
      //////////////////////////
      // MOBILES & TABLETS
      /////////////////////////
      // Samsung
      /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
    ],
    [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]],
    [
      /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
      /samsung[- ]((?!sm-[lr])[-\w]+)/i,
      /sec-(sgh\w+)/i
    ],
    [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]],
    [
      // Apple
      /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
      // iPod/iPhone
    ],
    [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]],
    [
      /\((ipad);[-\w\),; ]+apple/i,
      // iPad
      /applecoremedia\/[\w\.]+ \((ipad)/i,
      /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
    ],
    [MODEL, [VENDOR, APPLE], [TYPE, TABLET]],
    [
      /(macintosh);/i
    ],
    [MODEL, [VENDOR, APPLE]],
    [
      // Sharp
      /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
    ],
    [MODEL, [VENDOR, SHARP], [TYPE, MOBILE]],
    [
      // Honor
      /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i
    ],
    [MODEL, [VENDOR, HONOR], [TYPE, TABLET]],
    [
      /honor([-\w ]+)[;\)]/i
    ],
    [MODEL, [VENDOR, HONOR], [TYPE, MOBILE]],
    [
      // Huawei
      /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i
    ],
    [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]],
    [
      /(?:huawei)([-\w ]+)[;\)]/i,
      /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
    ],
    [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]],
    [
      // Xiaomi
      /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
      /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i
      // Mi Pad tablets
    ],
    [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, TABLET]],
    [
      /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
      // Xiaomi POCO
      /\b; (\w+) build\/hm\1/i,
      // Xiaomi Hongmi 'numeric' models
      /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
      // Xiaomi Hongmi
      /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
      // Xiaomi Redmi
      /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
      // Xiaomi Redmi 'numeric' models
      /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
      // Xiaomi Mi
      / ([\w ]+) miui\/v?\d/i
    ],
    [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, MOBILE]],
    [
      // OPPO
      /; (\w+) bui.+ oppo/i,
      /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
    ],
    [MODEL, [VENDOR, OPPO], [TYPE, MOBILE]],
    [
      /\b(opd2(\d{3}a?))(?: bui|\))/i
    ],
    [MODEL, [VENDOR, strMapper, { "OnePlus": ["304", "403", "203"], "*": OPPO }], [TYPE, TABLET]],
    [
      // BLU Vivo Series
      /(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i
    ],
    [MODEL, [VENDOR, "BLU"], [TYPE, MOBILE]],
    [
      // Vivo
      /; vivo (\w+)(?: bui|\))/i,
      /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
    ],
    [MODEL, [VENDOR, "Vivo"], [TYPE, MOBILE]],
    [
      // Realme
      /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
    ],
    [MODEL, [VENDOR, "Realme"], [TYPE, MOBILE]],
    [
      // Motorola
      /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
      /\bmot(?:orola)?[- ](\w*)/i,
      /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
    ],
    [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]],
    [
      /\b(mz60\d|xoom[2 ]{0,2}) build\//i
    ],
    [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]],
    [
      // LG
      /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
    ],
    [MODEL, [VENDOR, LG], [TYPE, TABLET]],
    [
      /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
      /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch))(\w+)/i,
      /\blg-?([\d\w]+) bui/i
    ],
    [MODEL, [VENDOR, LG], [TYPE, MOBILE]],
    [
      // Lenovo
      /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
      /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i
    ],
    [MODEL, [VENDOR, LENOVO], [TYPE, TABLET]],
    [
      // Nokia
      /(nokia) (t[12][01])/i
    ],
    [VENDOR, MODEL, [TYPE, TABLET]],
    [
      /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
      /nokia[-_ ]?(([-\w\. ]*))/i
    ],
    [[MODEL, /_/g, " "], [TYPE, MOBILE], [VENDOR, "Nokia"]],
    [
      // Google
      /(pixel (c|tablet))\b/i
      // Google Pixel C/Tablet
    ],
    [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]],
    [
      /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
      // Google Pixel
    ],
    [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]],
    [
      // Sony
      /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
    ],
    [MODEL, [VENDOR, SONY], [TYPE, MOBILE]],
    [
      /sony tablet [ps]/i,
      /\b(?:sony)?sgp\w+(?: bui|\))/i
    ],
    [[MODEL, "Xperia Tablet"], [VENDOR, SONY], [TYPE, TABLET]],
    [
      // OnePlus
      / (kb2005|in20[12]5|be20[12][59])\b/i,
      /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
    ],
    [MODEL, [VENDOR, ONEPLUS], [TYPE, MOBILE]],
    [
      // Amazon
      /(alexa)webm/i,
      /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
      // Kindle Fire without Silk / Echo Show
      /(kf[a-z]+)( bui|\)).+silk\//i
      // Kindle Fire HD
    ],
    [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]],
    [
      /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
      // Fire Phone
    ],
    [[MODEL, /(.+)/g, "Fire Phone $1"], [VENDOR, AMAZON], [TYPE, MOBILE]],
    [
      // BlackBerry
      /(playbook);[-\w\),; ]+(rim)/i
      // BlackBerry PlayBook
    ],
    [MODEL, VENDOR, [TYPE, TABLET]],
    [
      /\b((?:bb[a-f]|st[hv])100-\d)/i,
      /\(bb10; (\w+)/i
      // BlackBerry 10
    ],
    [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]],
    [
      // Asus
      /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
    ],
    [MODEL, [VENDOR, ASUS], [TYPE, TABLET]],
    [
      / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
    ],
    [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]],
    [
      // HTC
      /(nexus 9)/i
      // HTC Nexus 9
    ],
    [MODEL, [VENDOR, "HTC"], [TYPE, TABLET]],
    [
      /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
      // HTC
      // ZTE
      /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
      /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
      // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
    ],
    [VENDOR, [MODEL, /_/g, " "], [TYPE, MOBILE]],
    [
      // TCL
      /tcl (xess p17aa)/i,
      /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i
    ],
    [MODEL, [VENDOR, "TCL"], [TYPE, TABLET]],
    [
      /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i
    ],
    [MODEL, [VENDOR, "TCL"], [TYPE, MOBILE]],
    [
      // itel
      /(itel) ((\w+))/i
    ],
    [[VENDOR, lowerize], MODEL, [TYPE, strMapper, { "tablet": ["p10001l", "w7001"], "*": "mobile" }]],
    [
      // Acer
      /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
    ],
    [MODEL, [VENDOR, "Acer"], [TYPE, TABLET]],
    [
      // Meizu
      /droid.+; (m[1-5] note) bui/i,
      /\bmz-([-\w]{2,})/i
    ],
    [MODEL, [VENDOR, "Meizu"], [TYPE, MOBILE]],
    [
      // Ulefone
      /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
    ],
    [MODEL, [VENDOR, "Ulefone"], [TYPE, MOBILE]],
    [
      // Energizer
      /; (energy ?\w+)(?: bui|\))/i,
      /; energizer ([\w ]+)(?: bui|\))/i
    ],
    [MODEL, [VENDOR, "Energizer"], [TYPE, MOBILE]],
    [
      // Cat
      /; cat (b35);/i,
      /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i
    ],
    [MODEL, [VENDOR, "Cat"], [TYPE, MOBILE]],
    [
      // Smartfren
      /((?:new )?andromax[\w- ]+)(?: bui|\))/i
    ],
    [MODEL, [VENDOR, "Smartfren"], [TYPE, MOBILE]],
    [
      // Nothing
      /droid.+; (a(?:015|06[35]|142p?))/i
    ],
    [MODEL, [VENDOR, "Nothing"], [TYPE, MOBILE]],
    [
      // Archos
      /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
      /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i
    ],
    [MODEL, [VENDOR, "Archos"], [TYPE, TABLET]],
    [
      /archos ([\w ]+)( b|\))/i,
      /; (ac[3-6]\d\w{2,8})( b|\))/i
    ],
    [MODEL, [VENDOR, "Archos"], [TYPE, MOBILE]],
    [
      // MIXED
      /(imo) (tab \w+)/i,
      // IMO
      /(infinix) (x1101b?)/i
      // Infinix XPad
    ],
    [VENDOR, MODEL, [TYPE, TABLET]],
    [
      /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
      // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron/Infinix/Tecno/Micromax/Advan
      /; (blu|hmd|imo|tcl)[_ ]([\w\+ ]+?)(?: bui|\)|; r)/i,
      // BLU/HMD/IMO/TCL
      /(hp) ([\w ]+\w)/i,
      // HP iPAQ
      /(microsoft); (lumia[\w ]+)/i,
      // Microsoft Lumia
      /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,
      // Lenovo
      /(oppo) ?([\w ]+) bui/i
      // OPPO
    ],
    [VENDOR, MODEL, [TYPE, MOBILE]],
    [
      /(kobo)\s(ereader|touch)/i,
      // Kobo
      /(hp).+(touchpad(?!.+tablet)|tablet)/i,
      // HP TouchPad
      /(kindle)\/([\w\.]+)/i
      // Kindle
    ],
    [VENDOR, MODEL, [TYPE, TABLET]],
    [
      /(surface duo)/i
      // Surface Duo
    ],
    [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]],
    [
      /droid [\d\.]+; (fp\du?)(?: b|\))/i
      // Fairphone
    ],
    [MODEL, [VENDOR, "Fairphone"], [TYPE, MOBILE]],
    [
      /((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i
      // Nvidia Tablets
    ],
    [MODEL, [VENDOR, NVIDIA], [TYPE, TABLET]],
    [
      /(sprint) (\w+)/i
      // Sprint Phones
    ],
    [VENDOR, MODEL, [TYPE, MOBILE]],
    [
      /(kin\.[onetw]{3})/i
      // Microsoft Kin
    ],
    [[MODEL, /\./g, " "], [VENDOR, MICROSOFT], [TYPE, MOBILE]],
    [
      /droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
      // Zebra
    ],
    [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]],
    [
      /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
    ],
    [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]],
    [
      ///////////////////
      // SMARTTVS
      ///////////////////
      /smart-tv.+(samsung)/i
      // Samsung
    ],
    [VENDOR, [TYPE, SMARTTV]],
    [
      /hbbtv.+maple;(\d+)/i
    ],
    [[MODEL, /^/, "SmartTV"], [VENDOR, SAMSUNG], [TYPE, SMARTTV]],
    [
      /tcast.+(lg)e?. ([-\w]+)/i
      // LG SmartTV
    ],
    [VENDOR, MODEL, [TYPE, SMARTTV]],
    [
      /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
    ],
    [[VENDOR, LG], [TYPE, SMARTTV]],
    [
      /(apple) ?tv/i
      // Apple TV
    ],
    [VENDOR, [MODEL, APPLE + " TV"], [TYPE, SMARTTV]],
    [
      /crkey.*devicetype\/chromecast/i
      // Google Chromecast Third Generation
    ],
    [[MODEL, CHROMECAST + " Third Generation"], [VENDOR, GOOGLE], [TYPE, SMARTTV]],
    [
      /crkey.*devicetype\/([^/]*)/i
      // Google Chromecast with specific device type
    ],
    [[MODEL, /^/, "Chromecast "], [VENDOR, GOOGLE], [TYPE, SMARTTV]],
    [
      /fuchsia.*crkey/i
      // Google Chromecast Nest Hub
    ],
    [[MODEL, CHROMECAST + " Nest Hub"], [VENDOR, GOOGLE], [TYPE, SMARTTV]],
    [
      /crkey/i
      // Google Chromecast, Linux-based or unknown
    ],
    [[MODEL, CHROMECAST], [VENDOR, GOOGLE], [TYPE, SMARTTV]],
    [
      /(portaltv)/i
      // Facebook Portal TV
    ],
    [MODEL, [VENDOR, FACEBOOK], [TYPE, SMARTTV]],
    [
      /droid.+aft(\w+)( bui|\))/i
      // Fire TV
    ],
    [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]],
    [
      /(shield \w+ tv)/i
      // Nvidia Shield TV
    ],
    [MODEL, [VENDOR, NVIDIA], [TYPE, SMARTTV]],
    [
      /\(dtv[\);].+(aquos)/i,
      /(aquos-tv[\w ]+)\)/i
      // Sharp
    ],
    [MODEL, [VENDOR, SHARP], [TYPE, SMARTTV]],
    [
      /(bravia[\w ]+)( bui|\))/i
      // Sony
    ],
    [MODEL, [VENDOR, SONY], [TYPE, SMARTTV]],
    [
      /(mi(tv|box)-?\w+) bui/i
      // Xiaomi
    ],
    [MODEL, [VENDOR, XIAOMI], [TYPE, SMARTTV]],
    [
      /Hbbtv.*(technisat) (.*);/i
      // TechniSAT
    ],
    [VENDOR, MODEL, [TYPE, SMARTTV]],
    [
      /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
      // Roku
      /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
      // HbbTV devices
    ],
    [[VENDOR, trim], [MODEL, trim], [TYPE, SMARTTV]],
    [
      // SmartTV from Unidentified Vendors
      /droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i
    ],
    [MODEL, [TYPE, SMARTTV]],
    [
      /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
    ],
    [[TYPE, SMARTTV]],
    [
      ///////////////////
      // CONSOLES
      ///////////////////
      /(ouya)/i,
      // Ouya
      /(nintendo) (\w+)/i
      // Nintendo
    ],
    [VENDOR, MODEL, [TYPE, CONSOLE]],
    [
      /droid.+; (shield)( bui|\))/i
      // Nvidia Portable
    ],
    [MODEL, [VENDOR, NVIDIA], [TYPE, CONSOLE]],
    [
      /(playstation \w+)/i
      // Playstation
    ],
    [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]],
    [
      /\b(xbox(?: one)?(?!; xbox))[\); ]/i
      // Microsoft Xbox
    ],
    [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]],
    [
      ///////////////////
      // WEARABLES
      ///////////////////
      /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i
      // Samsung Galaxy Watch
    ],
    [MODEL, [VENDOR, SAMSUNG], [TYPE, WEARABLE]],
    [
      /((pebble))app/i,
      // Pebble
      /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i
      // Asus ZenWatch / LG Watch / Pixel Watch
    ],
    [VENDOR, MODEL, [TYPE, WEARABLE]],
    [
      /(ow(?:19|20)?we?[1-3]{1,3})/i
      // Oppo Watch
    ],
    [MODEL, [VENDOR, OPPO], [TYPE, WEARABLE]],
    [
      /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
      // Apple Watch
    ],
    [MODEL, [VENDOR, APPLE], [TYPE, WEARABLE]],
    [
      /(opwwe\d{3})/i
      // OnePlus Watch
    ],
    [MODEL, [VENDOR, ONEPLUS], [TYPE, WEARABLE]],
    [
      /(moto 360)/i
      // Motorola 360
    ],
    [MODEL, [VENDOR, MOTOROLA], [TYPE, WEARABLE]],
    [
      /(smartwatch 3)/i
      // Sony SmartWatch
    ],
    [MODEL, [VENDOR, SONY], [TYPE, WEARABLE]],
    [
      /(g watch r)/i
      // LG G Watch R
    ],
    [MODEL, [VENDOR, LG], [TYPE, WEARABLE]],
    [
      /droid.+; (wt63?0{2,3})\)/i
    ],
    [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]],
    [
      ///////////////////
      // XR
      ///////////////////
      /droid.+; (glass) \d/i
      // Google Glass
    ],
    [MODEL, [VENDOR, GOOGLE], [TYPE, XR]],
    [
      /(pico) (4|neo3(?: link|pro)?)/i
      // Pico
    ],
    [VENDOR, MODEL, [TYPE, XR]],
    [
      /(quest( \d| pro)?s?).+vr/i
      // Meta Quest
    ],
    [MODEL, [VENDOR, FACEBOOK], [TYPE, XR]],
    [
      ///////////////////
      // EMBEDDED
      ///////////////////
      /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
      // Tesla
    ],
    [VENDOR, [TYPE, EMBEDDED]],
    [
      /(aeobc)\b/i
      // Echo Dot
    ],
    [MODEL, [VENDOR, AMAZON], [TYPE, EMBEDDED]],
    [
      /(homepod).+mac os/i
      // Apple HomePod
    ],
    [MODEL, [VENDOR, APPLE], [TYPE, EMBEDDED]],
    [
      /windows iot/i
    ],
    [[TYPE, EMBEDDED]],
    [
      ////////////////////
      // MIXED (GENERIC)
      ///////////////////
      /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+?(mobile|vr|\d) safari/i
    ],
    [MODEL, [TYPE, strMapper, { "mobile": "Mobile", "xr": "VR", "*": TABLET }]],
    [
      /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
      // Unidentifiable Tablet
    ],
    [[TYPE, TABLET]],
    [
      /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
      // Unidentifiable Mobile
    ],
    [[TYPE, MOBILE]],
    [
      /droid .+?; ([\w\. -]+)( bui|\))/i
      // Generic Android Device
    ],
    [MODEL, [VENDOR, "Generic"]]
  ],
  engine: [
    [
      /windows.+ edge\/([\w\.]+)/i
      // EdgeHTML
    ],
    [VERSION, [NAME, EDGE + "HTML"]],
    [
      /(arkweb)\/([\w\.]+)/i
      // ArkWeb
    ],
    [NAME, VERSION],
    [
      /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
      // Blink
    ],
    [VERSION, [NAME, "Blink"]],
    [
      /(presto)\/([\w\.]+)/i,
      // Presto
      /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
      // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna/Servo
      /ekioh(flow)\/([\w\.]+)/i,
      // Flow
      /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
      // KHTML/Tasman/Links
      /(icab)[\/ ]([23]\.[\d\.]+)/i,
      // iCab
      /\b(libweb)/i
      // LibWeb
    ],
    [NAME, VERSION],
    [
      /ladybird\//i
    ],
    [[NAME, "LibWeb"]],
    [
      /rv\:([\w\.]{1,9})\b.+(gecko)/i
      // Gecko
    ],
    [VERSION, NAME]
  ],
  os: [
    [
      // Windows
      /microsoft (windows) (vista|xp)/i
      // Windows (iTunes)
    ],
    [NAME, VERSION],
    [
      /(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i
      // Windows Phone
    ],
    [NAME, [VERSION, strMapper, windowsVersionMap]],
    [
      /windows nt 6\.2; (arm)/i,
      // Windows RT
      /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,
      /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i
    ],
    [[VERSION, strMapper, windowsVersionMap], [NAME, WINDOWS]],
    [
      // iOS/macOS
      /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
      // iOS
      /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
      /cfnetwork\/.+darwin/i
    ],
    [[VERSION, /_/g, "."], [NAME, "iOS"]],
    [
      /(mac os x) ?([\w\. ]*)/i,
      /(macintosh|mac_powerpc\b)(?!.+haiku)/i
      // Mac OS
    ],
    [[NAME, "macOS"], [VERSION, /_/g, "."]],
    [
      // Google Chromecast
      /android ([\d\.]+).*crkey/i
      // Google Chromecast, Android-based
    ],
    [VERSION, [NAME, CHROMECAST + " Android"]],
    [
      /fuchsia.*crkey\/([\d\.]+)/i
      // Google Chromecast, Fuchsia-based
    ],
    [VERSION, [NAME, CHROMECAST + " Fuchsia"]],
    [
      /crkey\/([\d\.]+).*devicetype\/smartspeaker/i
      // Google Chromecast, Linux-based Smart Speaker
    ],
    [VERSION, [NAME, CHROMECAST + " SmartSpeaker"]],
    [
      /linux.*crkey\/([\d\.]+)/i
      // Google Chromecast, Legacy Linux-based
    ],
    [VERSION, [NAME, CHROMECAST + " Linux"]],
    [
      /crkey\/([\d\.]+)/i
      // Google Chromecast, unknown
    ],
    [VERSION, [NAME, CHROMECAST]],
    [
      // Mobile OSes
      /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i
      // Android-x86/HarmonyOS
    ],
    [VERSION, NAME],
    [
      /(ubuntu) ([\w\.]+) like android/i
      // Ubuntu Touch
    ],
    [[NAME, /(.+)/, "$1 Touch"], VERSION],
    [
      // Android/Blackberry/WebOS/QNX/Bada/RIM/KaiOS/Maemo/MeeGo/S40/Sailfish OS/OpenHarmony/Tizen
      /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/\.; ]?([\d\.]*)/i
    ],
    [NAME, VERSION],
    [
      /\(bb(10);/i
      // BlackBerry 10
    ],
    [VERSION, [NAME, BLACKBERRY]],
    [
      /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i
      // Symbian
    ],
    [VERSION, [NAME, "Symbian"]],
    [
      /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
      // Firefox OS
    ],
    [VERSION, [NAME, FIREFOX + " OS"]],
    [
      /web0s;.+rt(tv)/i,
      /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
      // WebOS
    ],
    [VERSION, [NAME, "webOS"]],
    [
      /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
      // watchOS
    ],
    [VERSION, [NAME, "watchOS"]],
    [
      // Google ChromeOS
      /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
      // Chromium OS
    ],
    [[NAME, "Chrome OS"], VERSION],
    [
      // Smart TVs
      /panasonic;(viera)/i,
      // Panasonic Viera
      /(netrange)mmh/i,
      // Netrange
      /(nettv)\/(\d+\.[\w\.]+)/i,
      // NetTV
      // Console
      /(nintendo|playstation) (\w+)/i,
      // Nintendo/Playstation
      /(xbox); +xbox ([^\);]+)/i,
      // Microsoft Xbox (360, One, X, S, Series X, Series S)
      /(pico) .+os([\w\.]+)/i,
      // Pico
      // Other
      /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
      // Joli/Palm
      /(mint)[\/\(\) ]?(\w*)/i,
      // Mint
      /(mageia|vectorlinux)[; ]/i,
      // Mageia/VectorLinux
      /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
      // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
      /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,
      // Hurd/Linux
      /(gnu) ?([\w\.]*)/i,
      // GNU
      /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
      // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
      /(haiku) (\w+)/i
      // Haiku
    ],
    [NAME, VERSION],
    [
      /(sunos) ?([\w\.\d]*)/i
      // Solaris
    ],
    [[NAME, "Solaris"], VERSION],
    [
      /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
      // Solaris
      /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
      // AIX
      /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
      // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX/SerenityOS
      /(unix) ?([\w\.]*)/i
      // UNIX
    ],
    [NAME, VERSION]
  ]
};
var defaultProps = function() {
  var props = { init: {}, isIgnore: {}, isIgnoreRgx: {}, toString: {} };
  setProps.call(props.init, [
    [UA_BROWSER, [NAME, VERSION, MAJOR, TYPE]],
    [UA_CPU, [ARCHITECTURE]],
    [UA_DEVICE, [TYPE, MODEL, VENDOR]],
    [UA_ENGINE, [NAME, VERSION]],
    [UA_OS, [NAME, VERSION]]
  ]);
  setProps.call(props.isIgnore, [
    [UA_BROWSER, [VERSION, MAJOR]],
    [UA_ENGINE, [VERSION]],
    [UA_OS, [VERSION]]
  ]);
  setProps.call(props.isIgnoreRgx, [
    [UA_BROWSER, / ?browser$/i],
    [UA_OS, / ?os$/i]
  ]);
  setProps.call(props.toString, [
    [UA_BROWSER, [NAME, VERSION]],
    [UA_CPU, [ARCHITECTURE]],
    [UA_DEVICE, [VENDOR, MODEL]],
    [UA_ENGINE, [NAME, VERSION]],
    [UA_OS, [NAME, VERSION]]
  ]);
  return props;
}();
var createIData = function(item, itemType) {
  var init_props = defaultProps.init[itemType], is_ignoreProps = defaultProps.isIgnore[itemType] || 0, is_ignoreRgx = defaultProps.isIgnoreRgx[itemType] || 0, toString_props = defaultProps.toString[itemType] || 0;
  function IData() {
    setProps.call(this, init_props);
  }
  IData.prototype.getItem = function() {
    return item;
  };
  IData.prototype.withClientHints = function() {
    if (!NAVIGATOR_UADATA) {
      return item.parseCH().get();
    }
    return NAVIGATOR_UADATA.getHighEntropyValues(CH_ALL_VALUES).then(function(res) {
      return item.setCH(new UACHData(res, false)).parseCH().get();
    });
  };
  IData.prototype.withFeatureCheck = function() {
    return item.detectFeature().get();
  };
  if (itemType != UA_RESULT) {
    IData.prototype.is = function(strToCheck) {
      var is = false;
      for (var i2 in this) {
        if (this.hasOwnProperty(i2) && !has(is_ignoreProps, i2) && lowerize(is_ignoreRgx ? strip(is_ignoreRgx, this[i2]) : this[i2]) == lowerize(is_ignoreRgx ? strip(is_ignoreRgx, strToCheck) : strToCheck)) {
          is = true;
          if (strToCheck != UNDEF_TYPE) break;
        } else if (strToCheck == UNDEF_TYPE && is) {
          is = !is;
          break;
        }
      }
      return is;
    };
    IData.prototype.toString = function() {
      var str = EMPTY;
      for (var i2 in toString_props) {
        if (typeof this[toString_props[i2]] !== UNDEF_TYPE) {
          str += (str ? " " : EMPTY) + this[toString_props[i2]];
        }
      }
      return str || UNDEF_TYPE;
    };
  }
  if (!NAVIGATOR_UADATA) {
    IData.prototype.then = function(cb) {
      var that = this;
      var IDataResolve = function() {
        for (var prop in that) {
          if (that.hasOwnProperty(prop)) {
            this[prop] = that[prop];
          }
        }
      };
      IDataResolve.prototype = {
        is: IData.prototype.is,
        toString: IData.prototype.toString
      };
      var resolveData = new IDataResolve();
      cb(resolveData);
      return resolveData;
    };
  }
  return new IData();
};
function UACHData(uach, isHttpUACH) {
  uach = uach || {};
  setProps.call(this, CH_ALL_VALUES);
  if (isHttpUACH) {
    setProps.call(this, [
      [BRANDS, itemListToArray(uach[CH_HEADER])],
      [FULLVERLIST, itemListToArray(uach[CH_HEADER_FULL_VER_LIST])],
      [MOBILE, /\?1/.test(uach[CH_HEADER_MOBILE])],
      [MODEL, stripQuotes(uach[CH_HEADER_MODEL])],
      [PLATFORM, stripQuotes(uach[CH_HEADER_PLATFORM])],
      [PLATFORMVER, stripQuotes(uach[CH_HEADER_PLATFORM_VER])],
      [ARCHITECTURE, stripQuotes(uach[CH_HEADER_ARCH])],
      [FORMFACTORS, itemListToArray(uach[CH_HEADER_FORM_FACTORS])],
      [BITNESS, stripQuotes(uach[CH_HEADER_BITNESS])]
    ]);
  } else {
    for (var prop in uach) {
      if (this.hasOwnProperty(prop) && typeof uach[prop] !== UNDEF_TYPE) this[prop] = uach[prop];
    }
  }
}
function UAItem(itemType, ua, rgxMap, uaCH) {
  this.get = function(prop) {
    if (!prop) return this.data;
    return this.data.hasOwnProperty(prop) ? this.data[prop] : void 0;
  };
  this.set = function(prop, val) {
    this.data[prop] = val;
    return this;
  };
  this.setCH = function(ch) {
    this.uaCH = ch;
    return this;
  };
  this.detectFeature = function() {
    if (NAVIGATOR && NAVIGATOR.userAgent == this.ua) {
      switch (this.itemType) {
        case UA_BROWSER:
          if (NAVIGATOR.brave && typeof NAVIGATOR.brave.isBrave == FUNC_TYPE) {
            this.set(NAME, "Brave");
          }
          break;
        case UA_DEVICE:
          if (!this.get(TYPE) && NAVIGATOR_UADATA && NAVIGATOR_UADATA[MOBILE]) {
            this.set(TYPE, MOBILE);
          }
          if (this.get(MODEL) == "Macintosh" && NAVIGATOR && typeof NAVIGATOR.standalone !== UNDEF_TYPE && NAVIGATOR.maxTouchPoints && NAVIGATOR.maxTouchPoints > 2) {
            this.set(MODEL, "iPad").set(TYPE, TABLET);
          }
          break;
        case UA_OS:
          if (!this.get(NAME) && NAVIGATOR_UADATA && NAVIGATOR_UADATA[PLATFORM]) {
            this.set(NAME, NAVIGATOR_UADATA[PLATFORM]);
          }
          break;
        case UA_RESULT:
          var data = this.data;
          var detect = function(itemType2) {
            return data[itemType2].getItem().detectFeature().get();
          };
          this.set(UA_BROWSER, detect(UA_BROWSER)).set(UA_CPU, detect(UA_CPU)).set(UA_DEVICE, detect(UA_DEVICE)).set(UA_ENGINE, detect(UA_ENGINE)).set(UA_OS, detect(UA_OS));
      }
    }
    return this;
  };
  this.parseUA = function() {
    if (this.itemType != UA_RESULT) {
      rgxMapper.call(this.data, this.ua, this.rgxMap);
    }
    if (this.itemType == UA_BROWSER) {
      this.set(MAJOR, majorize(this.get(VERSION)));
    }
    return this;
  };
  this.parseCH = function() {
    var uaCH2 = this.uaCH, rgxMap2 = this.rgxMap;
    switch (this.itemType) {
      case UA_BROWSER:
      case UA_ENGINE:
        var brands = uaCH2[FULLVERLIST] || uaCH2[BRANDS], prevName;
        if (brands) {
          for (var i2 in brands) {
            var brandName = brands[i2].brand || brands[i2], brandVersion = brands[i2].version;
            if (this.itemType == UA_BROWSER && !/not.a.brand/i.test(brandName) && (!prevName || /chrom/i.test(prevName) && brandName != CHROMIUM)) {
              brandName = strMapper(brandName, {
                "Chrome": "Google Chrome",
                "Edge": "Microsoft Edge",
                "Chrome WebView": "Android WebView",
                "Chrome Headless": "HeadlessChrome",
                "Huawei Browser": "HuaweiBrowser",
                "MIUI Browser": "Miui Browser",
                "Opera Mobi": "OperaMobile",
                "Yandex": "YaBrowser"
              });
              this.set(NAME, brandName).set(VERSION, brandVersion).set(MAJOR, majorize(brandVersion));
              prevName = brandName;
            }
            if (this.itemType == UA_ENGINE && brandName == CHROMIUM) {
              this.set(VERSION, brandVersion);
            }
          }
        }
        break;
      case UA_CPU:
        var archName = uaCH2[ARCHITECTURE];
        if (archName) {
          if (archName && uaCH2[BITNESS] == "64") archName += "64";
          rgxMapper.call(this.data, archName + ";", rgxMap2);
        }
        break;
      case UA_DEVICE:
        if (uaCH2[MOBILE]) {
          this.set(TYPE, MOBILE);
        }
        if (uaCH2[MODEL]) {
          this.set(MODEL, uaCH2[MODEL]);
          if (!this.get(TYPE) || !this.get(VENDOR)) {
            var reParse = {};
            rgxMapper.call(reParse, "droid 9; " + uaCH2[MODEL] + ")", rgxMap2);
            if (!this.get(TYPE) && !!reParse.type) {
              this.set(TYPE, reParse.type);
            }
            if (!this.get(VENDOR) && !!reParse.vendor) {
              this.set(VENDOR, reParse.vendor);
            }
          }
        }
        if (uaCH2[FORMFACTORS]) {
          var ff;
          if (typeof uaCH2[FORMFACTORS] !== "string") {
            var idx = 0;
            while (!ff && idx < uaCH2[FORMFACTORS].length) {
              ff = strMapper(uaCH2[FORMFACTORS][idx++], formFactorsMap);
            }
          } else {
            ff = strMapper(uaCH2[FORMFACTORS], formFactorsMap);
          }
          this.set(TYPE, ff);
        }
        break;
      case UA_OS:
        var osName = uaCH2[PLATFORM];
        if (osName) {
          var osVersion = uaCH2[PLATFORMVER];
          if (osName == WINDOWS) osVersion = parseInt(majorize(osVersion), 10) >= 13 ? "11" : "10";
          this.set(NAME, osName).set(VERSION, osVersion);
        }
        if (this.get(NAME) == WINDOWS && uaCH2[MODEL] == "Xbox") {
          this.set(NAME, "Xbox").set(VERSION, void 0);
        }
        break;
      case UA_RESULT:
        var data = this.data;
        var parse = function(itemType2) {
          return data[itemType2].getItem().setCH(uaCH2).parseCH().get();
        };
        this.set(UA_BROWSER, parse(UA_BROWSER)).set(UA_CPU, parse(UA_CPU)).set(UA_DEVICE, parse(UA_DEVICE)).set(UA_ENGINE, parse(UA_ENGINE)).set(UA_OS, parse(UA_OS));
    }
    return this;
  };
  setProps.call(this, [
    ["itemType", itemType],
    ["ua", ua],
    ["uaCH", uaCH],
    ["rgxMap", rgxMap],
    ["data", createIData(this, itemType)]
  ]);
  return this;
}
function UAParser(ua, extensions, headers) {
  if (typeof ua === OBJ_TYPE) {
    if (isExtensions(ua, true)) {
      if (typeof extensions === OBJ_TYPE) {
        headers = extensions;
      }
      extensions = ua;
    } else {
      headers = ua;
      extensions = void 0;
    }
    ua = void 0;
  } else if (typeof ua === STR_TYPE && !isExtensions(extensions, true)) {
    headers = extensions;
    extensions = void 0;
  }
  if (headers && typeof headers.append === FUNC_TYPE) {
    var kv = {};
    headers.forEach(function(v2, k2) {
      kv[k2] = v2;
    });
    headers = kv;
  }
  if (!(this instanceof UAParser)) {
    return new UAParser(ua, extensions, headers).getResult();
  }
  var userAgent = typeof ua === STR_TYPE ? ua : (
    // Passed user-agent string
    headers && headers[USER_AGENT] ? headers[USER_AGENT] : (
      // User-Agent from passed headers
      NAVIGATOR && NAVIGATOR.userAgent ? NAVIGATOR.userAgent : (
        // navigator.userAgent
        EMPTY
      )
    )
  ), httpUACH = new UACHData(headers, true), regexMap = extensions ? extend(defaultRegexes, extensions) : defaultRegexes, createItemFunc = function(itemType) {
    if (itemType == UA_RESULT) {
      return function() {
        return new UAItem(itemType, userAgent, regexMap, httpUACH).set("ua", userAgent).set(UA_BROWSER, this.getBrowser()).set(UA_CPU, this.getCPU()).set(UA_DEVICE, this.getDevice()).set(UA_ENGINE, this.getEngine()).set(UA_OS, this.getOS()).get();
      };
    } else {
      return function() {
        return new UAItem(itemType, userAgent, regexMap[itemType], httpUACH).parseUA().get();
      };
    }
  };
  setProps.call(this, [
    ["getBrowser", createItemFunc(UA_BROWSER)],
    ["getCPU", createItemFunc(UA_CPU)],
    ["getDevice", createItemFunc(UA_DEVICE)],
    ["getEngine", createItemFunc(UA_ENGINE)],
    ["getOS", createItemFunc(UA_OS)],
    ["getResult", createItemFunc(UA_RESULT)],
    ["getUA", function() {
      return userAgent;
    }],
    ["setUA", function(ua2) {
      if (isString(ua2))
        userAgent = ua2.length > UA_MAX_LENGTH ? trim(ua2, UA_MAX_LENGTH) : ua2;
      return this;
    }]
  ]).setUA(userAgent);
  return this;
}
UAParser.VERSION = LIBVERSION;
UAParser.BROWSER = enumerize([NAME, VERSION, MAJOR, TYPE]);
UAParser.CPU = enumerize([ARCHITECTURE]);
UAParser.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
UAParser.ENGINE = UAParser.OS = enumerize([NAME, VERSION]);
const useBrowserInfo = () => {
  const browserInfo = T(() => {
    {
      const parser = new UAParser();
      const result = parser.getResult();
      return {
        browser: result.browser,
        engine: result.engine,
        os: result.os,
        device: result.device,
        cpu: result.cpu
      };
    }
  }, []);
  return browserInfo;
};
function useHotkeyListenerComboText(action) {
  const userAgent = useBrowserInfo();
  return userAgent.os.name.toLowerCase().includes("mac") ? hotkeyActionDefinitions[action].keyComboMac : hotkeyActionDefinitions[action].keyComboDefault;
}
function ToolbarChatArea() {
  const chatState = useChatState();
  const currentChat = T(
    () => chatState.chats.find((c2) => c2.id === chatState.currentChatId),
    [chatState.chats, chatState.currentChatId]
  );
  const currentInput = T(
    () => (currentChat == null ? void 0 : currentChat.inputValue) || "",
    [currentChat == null ? void 0 : currentChat.inputValue]
  );
  const handleInputChange = q(
    (value) => {
      chatState.setChatInput(chatState.currentChatId, value);
    },
    [chatState.setChatInput, chatState.currentChatId]
  );
  const handleSubmit = q(() => {
    if (!currentChat || !currentInput.trim()) return;
    chatState.addMessage(currentChat.id, currentInput);
  }, [currentChat, currentInput, chatState.addMessage]);
  const handleKeyDown = q(
    (e2) => {
      if (e2.key === "Enter" && !e2.shiftKey) {
        e2.preventDefault();
        handleSubmit();
      }
    },
    [handleSubmit]
  );
  const inputRef = A$1(null);
  y$1(() => {
    var _a, _b, _c;
    const blurHandler = () => {
      var _a2;
      return (_a2 = inputRef.current) == null ? void 0 : _a2.focus();
    };
    if (chatState.isPromptCreationActive) {
      (_a = inputRef.current) == null ? void 0 : _a.focus();
      (_b = inputRef.current) == null ? void 0 : _b.addEventListener("blur", blurHandler);
    } else {
      (_c = inputRef.current) == null ? void 0 : _c.blur();
    }
    return () => {
      var _a2;
      (_a2 = inputRef.current) == null ? void 0 : _a2.removeEventListener("blur", blurHandler);
    };
  }, [chatState.isPromptCreationActive]);
  const buttonClassName = T(
    () => cn(
      "flex size-8 items-center justify-center rounded-full bg-transparent p-1 text-zinc-950 opacity-20 transition-all duration-150",
      currentInput.length > 0 && "bg-blue-600 text-white opacity-100",
      chatState.promptState === "loading" && "cursor-not-allowed bg-zinc-300 text-zinc-500 opacity-30"
    ),
    [currentInput.length, chatState.promptState]
  );
  const textareaClassName = T(
    () => cn(
      "h-full w-full flex-1 resize-none bg-transparent text-zinc-950 transition-all duration-150 placeholder:text-zinc-950/50 focus:outline-none",
      chatState.promptState === "loading" && "text-zinc-500 placeholder:text-zinc-400"
    ),
    [chatState.promptState]
  );
  const containerClassName = T(() => {
    const baseClasses = "flex h-24 w-full flex-1 flex-row items-end gap-1 rounded-2xl p-4 text-sm text-zinc-950 shadow-md backdrop-blur transition-all duration-150 placeholder:text-zinc-950/70";
    switch (chatState.promptState) {
      case "loading":
        return cn(
          baseClasses,
          "border-2 border-transparent bg-zinc-50/80",
          "chat-loading-gradient"
        );
      case "success":
        return cn(
          baseClasses,
          "border-2 border-transparent bg-zinc-50/80",
          "chat-success-border"
        );
      case "error":
        return cn(
          baseClasses,
          "border-2 border-transparent bg-zinc-50/80",
          "chat-error-border animate-shake"
        );
      default:
        return cn(baseClasses, "border border-border/30 bg-zinc-50/80");
    }
  }, [chatState.promptState]);
  const ctrlAltCText = useHotkeyListenerComboText(HotkeyActions.CTRL_ALT_C);
  return /* @__PURE__ */ u$3(
    "div",
    {
      className: containerClassName,
      onClick: () => chatState.startPromptCreation(),
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ u$3(
          J,
          {
            ref: inputRef,
            className: textareaClassName,
            value: currentInput,
            onChange: (e2) => handleInputChange(e2.currentTarget.value),
            onKeyDown: handleKeyDown,
            placeholder: chatState.isPromptCreationActive ? chatState.promptState === "loading" ? "Processing..." : "Enter prompt..." : `What do you want to change? (${ctrlAltCText})`,
            disabled: chatState.promptState === "loading"
          }
        ),
        /* @__PURE__ */ u$3(
          H$1,
          {
            className: buttonClassName,
            disabled: currentInput.length === 0 || chatState.promptState === "loading",
            onClick: handleSubmit,
            children: /* @__PURE__ */ u$3(Send, { className: "size-4" })
          }
        )
      ]
    }
  );
}
const DraggableContext = K$1(
  null
);
const DraggableProvider = ({
  containerRef,
  children,
  snapAreas,
  onDragStart,
  onDragEnd
}) => {
  const [borderLocation, setBorderLocation] = d$1({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  });
  y$1(() => {
    if (!containerRef.current) return;
    const updateBorderLocation = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setBorderLocation({
          top: rect.top,
          left: rect.left,
          right: rect.right,
          bottom: rect.bottom
        });
      }
    };
    updateBorderLocation();
    const resizeObserver = new ResizeObserver(updateBorderLocation);
    resizeObserver.observe(containerRef.current);
    window.addEventListener("resize", updateBorderLocation);
    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateBorderLocation);
    };
  }, [containerRef]);
  const dragStartListeners = A$1(/* @__PURE__ */ new Set());
  const dragEndListeners = A$1(/* @__PURE__ */ new Set());
  const registerDragStart = q((cb) => {
    dragStartListeners.current.add(cb);
    return () => dragStartListeners.current.delete(cb);
  }, []);
  const registerDragEnd = q((cb) => {
    dragEndListeners.current.add(cb);
    return () => dragEndListeners.current.delete(cb);
  }, []);
  const emitDragStart = q(() => {
    if (onDragStart) onDragStart();
    dragStartListeners.current.forEach((cb) => cb());
  }, [onDragStart]);
  const emitDragEnd = q(() => {
    if (onDragEnd) onDragEnd();
    dragEndListeners.current.forEach((cb) => cb());
  }, [onDragEnd]);
  const contextValue = {
    borderLocation,
    snapAreas,
    registerDragStart,
    registerDragEnd,
    emitDragStart,
    emitDragEnd
  };
  return /* @__PURE__ */ u$3(DraggableContext.Provider, { value: contextValue, children });
};
function useDraggable(config) {
  const providerData = x(DraggableContext);
  const latestProviderDataRef = A$1(providerData);
  y$1(() => {
    latestProviderDataRef.current = providerData;
  }, [providerData]);
  const movingElementRef = A$1(null);
  const dragInitiatorRef = A$1(null);
  const [movingElementNode, setMovingElementNode] = d$1(null);
  const [dragInitiatorNode, setDragInitiatorNode] = d$1(null);
  const mouseToDraggableCenterOffsetRef = A$1(null);
  const mouseDownPosRef = A$1(null);
  const currentMousePosRef = A$1(null);
  const isDraggingRef = A$1(false);
  const persistedRelativeCenterRef = A$1(config.initialRelativeCenter);
  const [currentSnapArea, setCurrentSnapArea] = d$1(null);
  const {
    startThreshold = 3,
    areaSnapThreshold = 60,
    // px, default threshold for snapping
    onDragStart,
    onDragEnd,
    initialSnapArea,
    springStiffness = 0.2,
    // Default spring stiffness
    springDampness = 0.55
    // Default spring dampness
    // initialRelativeCenter is used to initialize persistedRelativeCenterRef
  } = config;
  const animatedPositionRef = A$1(null);
  const velocityRef = A$1({ x: 0, y: 0 });
  const hasAnimatedOnceRef = A$1(false);
  y$1(() => {
    if (initialSnapArea && providerData && providerData.borderLocation && providerData.snapAreas && providerData.snapAreas[initialSnapArea] && !isDraggingRef.current) {
      const { top, left, right, bottom } = providerData.borderLocation;
      const width = right - left;
      const height = bottom - top;
      const areaCenters = {
        topLeft: { x: left, y: top },
        topRight: { x: right, y: top },
        bottomLeft: { x: left, y: bottom },
        bottomRight: { x: right, y: bottom }
      };
      const center = areaCenters[initialSnapArea];
      if (center && width > 0 && height > 0) {
        const relX = (center.x - left) / width;
        const relY = (center.y - top) / height;
        persistedRelativeCenterRef.current = { x: relX, y: relY };
      } else if (center) {
        console.warn(
          "useDraggable: Container for initialSnapArea has zero width or height. Cannot calculate relative center from snap area. Falling back to initialRelativeCenter or undefined."
        );
      }
    }
  }, [initialSnapArea, providerData]);
  function getSnapAreaCenters(borderLocation) {
    const { top, left, right, bottom } = borderLocation;
    const centerX = (left + right) / 2;
    return {
      topLeft: { x: left, y: top },
      topCenter: { x: centerX, y: top },
      topRight: { x: right, y: top },
      bottomLeft: { x: left, y: bottom },
      bottomCenter: { x: centerX, y: bottom },
      bottomRight: { x: right, y: bottom }
    };
  }
  const updateDraggablePosition = q(() => {
    var _a, _b;
    const draggableEl = movingElementRef.current;
    if (!draggableEl) return;
    const draggableWidth = draggableEl.offsetWidth;
    const draggableHeight = draggableEl.offsetHeight;
    const offsetParent = draggableEl.offsetParent;
    let parentViewportLeft = 0;
    let parentViewportTop = 0;
    let parentWidth = window.innerWidth;
    let parentHeight = window.innerHeight;
    if (offsetParent) {
      const opRect = offsetParent.getBoundingClientRect();
      parentViewportLeft = opRect.left;
      parentViewportTop = opRect.top;
      parentWidth = offsetParent.offsetWidth || window.innerWidth;
      parentHeight = offsetParent.offsetHeight || window.innerHeight;
    }
    let targetViewportCenterX = null;
    let targetViewportCenterY = null;
    const currentDesiredRelativeCenter = persistedRelativeCenterRef.current;
    let snapArea = null;
    let snapTarget = null;
    const provider = latestProviderDataRef.current;
    let isTopHalf = true;
    let isLeftHalf = true;
    if (isDraggingRef.current && mouseToDraggableCenterOffsetRef.current && currentMousePosRef.current && provider && provider.borderLocation && provider.snapAreas) {
      const dragCenter = {
        x: currentMousePosRef.current.x - mouseToDraggableCenterOffsetRef.current.x,
        y: currentMousePosRef.current.y - mouseToDraggableCenterOffsetRef.current.y
      };
      const areaCenters = getSnapAreaCenters(provider.borderLocation);
      let minDist = Number.POSITIVE_INFINITY;
      let closestArea = null;
      let closestCenter = null;
      for (const area in provider.snapAreas) {
        if (provider.snapAreas[area]) {
          const center = areaCenters[area];
          if (!center) continue;
          const dist = Math.hypot(
            center.x - dragCenter.x,
            center.y - dragCenter.y
          );
          if (dist < minDist) {
            minDist = dist;
            closestArea = area;
            closestCenter = center;
          }
        }
      }
      if (closestArea && closestCenter && minDist <= areaSnapThreshold) {
        snapArea = closestArea;
        snapTarget = closestCenter;
      }
      isLeftHalf = (dragCenter.x - parentViewportLeft) / parentWidth <= 0.5;
      isTopHalf = (dragCenter.y - parentViewportTop) / parentHeight <= 0.5;
    }
    if (isDraggingRef.current && snapTarget) {
      targetViewportCenterX = snapTarget.x;
      targetViewportCenterY = snapTarget.y;
      setCurrentSnapArea(snapArea);
      isLeftHalf = (snapTarget.x - parentViewportLeft) / parentWidth <= 0.5;
      isTopHalf = (snapTarget.y - parentViewportTop) / parentHeight <= 0.5;
    } else if (isDraggingRef.current && mouseToDraggableCenterOffsetRef.current && currentMousePosRef.current) {
      targetViewportCenterX = currentMousePosRef.current.x - mouseToDraggableCenterOffsetRef.current.x;
      targetViewportCenterY = currentMousePosRef.current.y - mouseToDraggableCenterOffsetRef.current.y;
      setCurrentSnapArea(null);
      isLeftHalf = (targetViewportCenterX - parentViewportLeft) / parentWidth <= 0.5;
      isTopHalf = (targetViewportCenterY - parentViewportTop) / parentHeight <= 0.5;
    } else {
      if (currentDesiredRelativeCenter && parentWidth > 0 && parentHeight > 0) {
        isTopHalf = currentDesiredRelativeCenter.y <= 0.5;
        isLeftHalf = currentDesiredRelativeCenter.x <= 0.5;
        if (isLeftHalf) {
          const targetCenterXInParent = parentWidth * currentDesiredRelativeCenter.x;
          targetViewportCenterX = parentViewportLeft + targetCenterXInParent;
        } else {
          const targetCenterXInParent = parentWidth * (1 - currentDesiredRelativeCenter.x);
          targetViewportCenterX = parentViewportLeft + parentWidth - targetCenterXInParent;
        }
        if (isTopHalf) {
          const targetCenterYInParent = parentHeight * currentDesiredRelativeCenter.y;
          targetViewportCenterY = parentViewportTop + targetCenterYInParent;
        } else {
          const targetCenterYInParent = parentHeight * (1 - currentDesiredRelativeCenter.y);
          targetViewportCenterY = parentViewportTop + parentHeight - targetCenterYInParent;
        }
      } else {
        if (!((_a = movingElementRef.current) == null ? void 0 : _a.style.left) && !((_b = movingElementRef.current) == null ? void 0 : _b.style.top)) {
          console.warn(
            "useDraggable: Cannot determine position. Parent has no dimensions or initialRelativeCenter was not effectively set."
          );
        }
        return;
      }
      setCurrentSnapArea(null);
    }
    if (targetViewportCenterX === null || targetViewportCenterY === null) {
      return;
    }
    const { borderLocation } = latestProviderDataRef.current || {
      borderLocation: void 0
    };
    if (borderLocation && draggableWidth > 0 && draggableHeight > 0) {
      const providerRectWidth = borderLocation.right - borderLocation.left;
      const providerRectHeight = borderLocation.bottom - borderLocation.top;
      let clampedCenterX = targetViewportCenterX;
      let clampedCenterY = targetViewportCenterY;
      if (draggableWidth >= providerRectWidth) {
        clampedCenterX = borderLocation.left + providerRectWidth / 2;
      } else {
        const minX = borderLocation.left + draggableWidth / 2;
        const maxX = borderLocation.right - draggableWidth / 2;
        clampedCenterX = Math.max(minX, Math.min(clampedCenterX, maxX));
      }
      if (draggableHeight >= providerRectHeight) {
        clampedCenterY = borderLocation.top + providerRectHeight / 2;
      } else {
        const minY = borderLocation.top + draggableHeight / 2;
        const maxY = borderLocation.bottom - draggableHeight / 2;
        clampedCenterY = Math.max(minY, Math.min(clampedCenterY, maxY));
      }
      targetViewportCenterX = clampedCenterX;
      targetViewportCenterY = clampedCenterY;
    }
    if (!animatedPositionRef.current) {
      animatedPositionRef.current = {
        x: targetViewportCenterX,
        y: targetViewportCenterY
      };
      velocityRef.current = { x: 0, y: 0 };
      const targetElementStyleX2 = targetViewportCenterX - draggableWidth / 2;
      const targetElementStyleY2 = targetViewportCenterY - draggableHeight / 2;
      const elStyle2 = draggableEl.style;
      elStyle2.right = "";
      elStyle2.bottom = "";
      elStyle2.left = "";
      elStyle2.top = "";
      if (isLeftHalf) {
        const styleLeftPx = targetElementStyleX2 - parentViewportLeft;
        elStyle2.left = parentWidth > 0 ? `${(styleLeftPx / parentWidth * 100).toFixed(2)}%` : "0px";
        elStyle2.right = "";
      } else {
        const styleRightPx = parentViewportLeft + parentWidth - (targetElementStyleX2 + draggableWidth);
        elStyle2.right = parentWidth > 0 ? `${(styleRightPx / parentWidth * 100).toFixed(2)}%` : "0px";
        elStyle2.left = "";
      }
      if (isTopHalf) {
        const styleTopPx = targetElementStyleY2 - parentViewportTop;
        elStyle2.top = parentHeight > 0 ? `${(styleTopPx / parentHeight * 100).toFixed(2)}%` : "0px";
        elStyle2.bottom = "";
      } else {
        const styleBottomPx = parentViewportTop + parentHeight - (targetElementStyleY2 + draggableHeight);
        elStyle2.bottom = parentHeight > 0 ? `${(styleBottomPx / parentHeight * 100).toFixed(2)}%` : "0px";
        elStyle2.top = "";
      }
      hasAnimatedOnceRef.current = true;
      return;
    }
    if (!hasAnimatedOnceRef.current) {
      hasAnimatedOnceRef.current = true;
      return;
    }
    const pos = animatedPositionRef.current;
    const vel = velocityRef.current;
    const dx = targetViewportCenterX - pos.x;
    const dy = targetViewportCenterY - pos.y;
    const ax = springStiffness * dx - springDampness * vel.x;
    const ay = springStiffness * dy - springDampness * vel.y;
    vel.x += ax;
    vel.y += ay;
    pos.x += vel.x;
    pos.y += vel.y;
    const threshold = 0.5;
    if (Math.abs(dx) < threshold && Math.abs(dy) < threshold && Math.abs(vel.x) < threshold && Math.abs(vel.y) < threshold) {
      pos.x = targetViewportCenterX;
      pos.y = targetViewportCenterY;
      vel.x = 0;
      vel.y = 0;
    }
    animatedPositionRef.current = { ...pos };
    velocityRef.current = { ...vel };
    const targetElementStyleX = pos.x - draggableWidth / 2;
    const targetElementStyleY = pos.y - draggableHeight / 2;
    const elStyle = draggableEl.style;
    elStyle.right = "";
    elStyle.bottom = "";
    elStyle.left = "";
    elStyle.top = "";
    if (isLeftHalf) {
      const styleLeftPx = targetElementStyleX - parentViewportLeft;
      elStyle.left = parentWidth > 0 ? `${(styleLeftPx / parentWidth * 100).toFixed(2)}%` : "0px";
      elStyle.right = "";
    } else {
      const styleRightPx = parentViewportLeft + parentWidth - (targetElementStyleX + draggableWidth);
      elStyle.right = parentWidth > 0 ? `${(styleRightPx / parentWidth * 100).toFixed(2)}%` : "0px";
      elStyle.left = "";
    }
    if (isTopHalf) {
      const styleTopPx = targetElementStyleY - parentViewportTop;
      elStyle.top = parentHeight > 0 ? `${(styleTopPx / parentHeight * 100).toFixed(2)}%` : "0px";
      elStyle.bottom = "";
    } else {
      const styleBottomPx = parentViewportTop + parentHeight - (targetElementStyleY + draggableHeight);
      elStyle.bottom = parentHeight > 0 ? `${(styleBottomPx / parentHeight * 100).toFixed(2)}%` : "0px";
      elStyle.top = "";
    }
    if (Math.abs(pos.x - targetViewportCenterX) > threshold || Math.abs(pos.y - targetViewportCenterY) > threshold || Math.abs(vel.x) > threshold || Math.abs(vel.y) > threshold || isDraggingRef.current) {
      requestAnimationFrame(updateDraggablePosition);
    }
  }, [areaSnapThreshold, springStiffness, springDampness]);
  const [wasDragged, setWasDragged] = d$1(false);
  const mouseUpHandler = q(
    (e2) => {
      var _a;
      if (isDraggingRef.current) {
        if (onDragEnd) onDragEnd();
        if ((_a = latestProviderDataRef.current) == null ? void 0 : _a.emitDragEnd) {
          latestProviderDataRef.current.emitDragEnd();
        }
        setWasDragged(true);
        setTimeout(() => setWasDragged(false), 0);
        const draggableEl = movingElementRef.current;
        const provider = latestProviderDataRef.current;
        if (draggableEl && provider && provider.borderLocation) {
          const draggableWidth = draggableEl.offsetWidth;
          const draggableHeight = draggableEl.offsetHeight;
          const offsetParent = draggableEl.offsetParent;
          let parentViewportLeft = 0;
          let parentViewportTop = 0;
          let parentWidth = window.innerWidth;
          let parentHeight = window.innerHeight;
          if (offsetParent) {
            const opRect = offsetParent.getBoundingClientRect();
            parentViewportLeft = opRect.left;
            parentViewportTop = opRect.top;
            parentWidth = offsetParent.offsetWidth || window.innerWidth;
            parentHeight = offsetParent.offsetHeight || window.innerHeight;
          }
          let releasedCenterX = 0;
          let releasedCenterY = 0;
          if (currentMousePosRef.current && mouseToDraggableCenterOffsetRef.current) {
            releasedCenterX = currentMousePosRef.current.x - mouseToDraggableCenterOffsetRef.current.x;
            releasedCenterY = currentMousePosRef.current.y - mouseToDraggableCenterOffsetRef.current.y;
          } else {
            if (animatedPositionRef.current) {
              releasedCenterX = animatedPositionRef.current.x;
              releasedCenterY = animatedPositionRef.current.y;
            }
          }
          const borderLocation = provider.borderLocation;
          const minX = borderLocation.left + draggableWidth / 2;
          const maxX = borderLocation.right - draggableWidth / 2;
          const minY = borderLocation.top + draggableHeight / 2;
          const maxY = borderLocation.bottom - draggableHeight / 2;
          releasedCenterX = Math.max(minX, Math.min(releasedCenterX, maxX));
          releasedCenterY = Math.max(minY, Math.min(releasedCenterY, maxY));
          const areaCenters = getSnapAreaCenters(borderLocation);
          let minDist = Number.POSITIVE_INFINITY;
          let closestArea = null;
          let closestCenter = null;
          for (const area in provider.snapAreas) {
            if (provider.snapAreas[area]) {
              const center = areaCenters[area];
              if (!center) continue;
              const dist = Math.hypot(
                center.x - releasedCenterX,
                center.y - releasedCenterY
              );
              if (dist < minDist) {
                minDist = dist;
                closestArea = area;
                closestCenter = center;
              }
            }
          }
          if (closestArea && closestCenter) {
            setCurrentSnapArea(closestArea);
            const relX = (closestCenter.x - parentViewportLeft) / parentWidth;
            const relY = (closestCenter.y - parentViewportTop) / parentHeight;
            persistedRelativeCenterRef.current = { x: relX, y: relY };
          } else {
            setCurrentSnapArea(null);
            const relX = (releasedCenterX - parentViewportLeft) / parentWidth;
            const relY = (releasedCenterY - parentViewportTop) / parentHeight;
            persistedRelativeCenterRef.current = { x: relX, y: relY };
          }
        }
      }
      mouseDownPosRef.current = null;
      isDraggingRef.current = false;
      window.removeEventListener("mousemove", mouseMoveHandler, {
        capture: true
      });
      window.removeEventListener("mouseup", mouseUpHandler, {
        capture: true
      });
      if (movingElementRef.current) {
        movingElementRef.current.style.userSelect = "";
      }
      document.body.style.userSelect = "";
      document.body.style.cursor = "";
    },
    [onDragEnd]
  );
  const mouseMoveHandler = q(
    (e2) => {
      var _a;
      if (!mouseDownPosRef.current) return;
      const distance = Math.hypot(
        e2.clientX - mouseDownPosRef.current.x,
        e2.clientY - mouseDownPosRef.current.y
      );
      if (distance > startThreshold && !isDraggingRef.current) {
        isDraggingRef.current = true;
        if (movingElementRef.current) {
          movingElementRef.current.style.userSelect = "none";
        }
        document.body.style.userSelect = "none";
        document.body.style.cursor = "grabbing";
        if (onDragStart) onDragStart();
        if ((_a = latestProviderDataRef.current) == null ? void 0 : _a.emitDragStart) {
          latestProviderDataRef.current.emitDragStart();
        }
        requestAnimationFrame(updateDraggablePosition);
      }
      currentMousePosRef.current = { x: e2.clientX, y: e2.clientY };
    },
    [startThreshold, onDragStart, updateDraggablePosition]
  );
  const mouseDownHandler = q(
    (e2) => {
      if (e2.button !== 0) {
        return;
      }
      const handleNode = dragInitiatorRef.current;
      const draggableItemNode = movingElementRef.current;
      if (handleNode) {
        if (!handleNode.contains(e2.target) && e2.target !== handleNode) {
          return;
        }
      } else if (draggableItemNode) {
        if (!draggableItemNode.contains(e2.target) && e2.target !== draggableItemNode) {
          return;
        }
      } else {
        console.error(
          "Draggable element or handle ref not set in mouseDownHandler"
        );
        return;
      }
      mouseDownPosRef.current = { x: e2.clientX, y: e2.clientY };
      if (!movingElementRef.current) {
        console.error("Draggable element ref not set in mouseDownHandler");
        return;
      }
      const rect = movingElementRef.current.getBoundingClientRect();
      const currentDraggableCenterX = rect.left + rect.width / 2;
      const currentDraggableCenterY = rect.top + rect.height / 2;
      mouseToDraggableCenterOffsetRef.current = {
        x: e2.clientX - currentDraggableCenterX,
        y: e2.clientY - currentDraggableCenterY
      };
      window.addEventListener("mousemove", mouseMoveHandler, {
        capture: true
      });
      window.addEventListener("mouseup", mouseUpHandler, {
        capture: true
      });
    },
    [mouseMoveHandler, mouseUpHandler]
  );
  y$1(() => {
    const elementToListenOn = dragInitiatorNode || movingElementNode;
    if (elementToListenOn) {
      elementToListenOn.addEventListener("mousedown", mouseDownHandler);
    }
    return () => {
      if (elementToListenOn) {
        elementToListenOn.removeEventListener("mousedown", mouseDownHandler);
      }
      if (isDraggingRef.current) {
        if (onDragEnd) {
          onDragEnd();
        }
        isDraggingRef.current = false;
        if (movingElementNode) {
          movingElementNode.style.userSelect = "";
        }
        document.body.style.userSelect = "";
        document.body.style.cursor = "";
        window.removeEventListener("mousemove", mouseMoveHandler, {
          capture: true
        });
        window.removeEventListener("mouseup", mouseUpHandler, {
          capture: true
        });
      }
    };
  }, [
    movingElementNode,
    dragInitiatorNode,
    mouseDownHandler,
    onDragEnd,
    mouseMoveHandler,
    mouseUpHandler
  ]);
  y$1(() => {
    const el = movingElementRef.current;
    if (el && providerData && providerData.borderLocation && // Needed for calculations within updateDraggablePosition
    persistedRelativeCenterRef.current && // Ensure we have a center to position to
    !isDraggingRef.current && // Not currently dragging
    !hasAnimatedOnceRef.current) {
      requestAnimationFrame(() => {
        if (movingElementRef.current) {
          updateDraggablePosition();
        }
      });
    }
  }, [
    movingElementNode,
    // Run when element is available/changes
    providerData,
    // Run if provider context changes (for borderLocation)
    config.initialRelativeCenter,
    // If this changes, persistedRelativeCenterRef might be re-initialized
    initialSnapArea,
    // If this changes, an effect updates persistedRelativeCenterRef
    updateDraggablePosition
    // Memoized callback for positioning
    // hasAnimatedOnceRef is intentionally not a dep, its current value is checked inside.
  ]);
  const draggableRefCallback = q((node) => {
    setMovingElementNode(node);
    movingElementRef.current = node;
  }, []);
  const handleRefCallback = q((node) => {
    setDragInitiatorNode(node);
    dragInitiatorRef.current = node;
  }, []);
  return {
    draggableRef: draggableRefCallback,
    handleRef: handleRefCallback,
    position: {
      snapArea: currentSnapArea,
      isTopHalf: persistedRelativeCenterRef.current ? persistedRelativeCenterRef.current.y <= 0.5 : true,
      isLeftHalf: persistedRelativeCenterRef.current ? persistedRelativeCenterRef.current.x <= 0.5 : true
    },
    wasDragged
  };
}
function ToolbarSection({ children }) {
  return /* @__PURE__ */ u$3("div", { className: "fade-in slide-in-from-right-2 flex max-h-sm max-w-full animate-in snap-start flex-col items-center justify-between gap-1 py-0.5", children });
}
function ToolbarItem(props) {
  return /* @__PURE__ */ u$3("div", { className: "relative flex w-full shrink-0 items-center justify-center", children: [
    props.children,
    props.badgeContent && /* @__PURE__ */ u$3(
      "div",
      {
        className: cn(
          "bg-blue-600 text-white",
          props.badgeClassName,
          "pointer-events-none absolute right-0 bottom-0 flex h-3 w-max min-w-3 max-w-8 select-none items-center justify-center truncate rounded-full px-0.5 font-semibold text-[0.5em]"
        ),
        children: props.badgeContent
      }
    ),
    props.statusDot && /* @__PURE__ */ u$3(
      "div",
      {
        className: cn(
          "bg-rose-600",
          props.statusDotClassName,
          "pointer-events-none absolute top-0 right-0 size-1.5 rounded-full"
        )
      }
    )
  ] });
}
const ToolbarButton = D(
  ({
    badgeContent,
    badgeClassName,
    statusDot,
    statusDotClassName,
    tooltipHint,
    variant = "default",
    active,
    ...props
  }, ref) => {
    const button = /* @__PURE__ */ u$3(
      H$1,
      {
        ref,
        ...props,
        className: cn(
          "flex items-center justify-center rounded-full p-1 text-zinc-950 ring ring-transparent transition-all duration-150 hover:bg-zinc-950/5",
          variant === "default" ? "size-8" : "h-8 rounded-full",
          active && "bg-white/40 ring-zinc-950/20",
          props.className
        )
      }
    );
    return /* @__PURE__ */ u$3(
      ToolbarItem,
      {
        badgeContent,
        badgeClassName,
        statusDot,
        statusDotClassName,
        children: button
      }
    );
  }
);
ToolbarButton.displayName = "ToolbarButton";
const Logo = ({
  color = "default",
  loading = false,
  loadingSpeed = "slow",
  ...props
}) => {
  const colorStyle = {
    default: "fill-stagewise-700 stroke-none",
    black: "fill-zinc-950 stroke-none",
    white: "fill-white stroke-none",
    gray: "fill-zinc-500/50 stroke-none",
    current: "fill-current stroke-none",
    gradient: "fill-white stroke-black/30 stroke-1"
  };
  return /* @__PURE__ */ u$3(
    "div",
    {
      className: `relative ${color === "gradient" ? "overflow-hidden rounded-full" : "overflow-visible"} ${props.className || ""} ${loading ? "drop-shadow-xl" : ""} aspect-square`,
      children: [
        color === "gradient" && /* @__PURE__ */ u$3("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ u$3("div", { className: "absolute inset-0 size-full bg-gradient-to-tr from-indigo-700 via-blue-500 to-teal-500" }),
          /* @__PURE__ */ u$3("div", { className: "absolute top-1/2 left-1/2 size-9/12 bg-[radial-gradient(circle,rgba(219,39,119,0.2)_0%,rgba(219,39,119,0)_100%)]" }),
          /* @__PURE__ */ u$3("div", { className: "absolute right-1/2 bottom-1/2 size-full bg-[radial-gradient(circle,rgba(219,39,119,0.2)_0%,rgba(219,39,119,0)_100%)]" }),
          /* @__PURE__ */ u$3("div", { className: "absolute top-0 left-[-10%] size-[120%] bg-[radial-gradient(circle,rgba(255,255,255,0)_60%,rgba(255,255,255,0.2)_70%)]" }),
          /* @__PURE__ */ u$3("div", { className: "absolute top-[-20%] left-0 h-[120%] w-full bg-[radial-gradient(circle,rgba(55,48,163,0)_55%,rgba(55,48,163,0.35)_73%)]" })
        ] }),
        /* @__PURE__ */ u$3(
          "svg",
          {
            className: `absolute overflow-visible ${color === "gradient" ? "top-[25%] left-[25%] h-[50%] w-[50%] drop-shadow-indigo-950 drop-shadow-xs" : "top-0 left-0 h-full w-full"}`,
            viewBox: "0 0 2048 2048",
            children: [
              /* @__PURE__ */ u$3("title", { children: "stagewise" }),
              /* @__PURE__ */ u$3(
                "ellipse",
                {
                  className: colorStyle[color] + (loading ? " animate-pulse" : ""),
                  id: "path3",
                  ry: "624",
                  rx: "624",
                  cy: "1024",
                  cx: "1024"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ u$3(
          "svg",
          {
            className: `absolute overflow-visible ${color === "gradient" ? "top-[25%] left-[25%] h-[50%] w-[50%]" : "top-0 left-0 h-full w-full"}`,
            viewBox: "0 0 2048 2048",
            children: /* @__PURE__ */ u$3(
              "path",
              {
                id: "path4",
                className: `origin-center ${colorStyle[color]}${loading ? loadingSpeed === "fast" ? " animate-spin-fast" : " animate-spin-slow" : ""}`,
                d: "M 1024 0 A 1024 1024 0 0 0 0 1024 A 1024 1024 0 0 0 1024 2048 L 1736 2048 L 1848 2048 C 1958.7998 2048 2048 1958.7998 2048 1848 L 2048 1736 L 2048 1024 A 1024 1024 0 0 0 1024 0 z M 1024.9414 200 A 824 824 0 0 1 1848.9414 1024 A 824 824 0 0 1 1024.9414 1848 A 824 824 0 0 1 200.94141 1024 A 824 824 0 0 1 1024.9414 200 z "
              }
            )
          }
        )
      ]
    }
  );
};
const SettingsButton = ({
  onOpenPanel,
  isActive = false
}) => /* @__PURE__ */ u$3(ToolbarSection, { children: /* @__PURE__ */ u$3(ToolbarButton, { onClick: onOpenPanel, active: isActive, children: /* @__PURE__ */ u$3(Settings, { className: "size-4" }) }) });
const SettingsPanel = ({ onClose }) => {
  return /* @__PURE__ */ u$3(Panel, { children: [
    /* @__PURE__ */ u$3(Panel.Header, { title: "Settings" }),
    /* @__PURE__ */ u$3(Panel.Content, { children: /* @__PURE__ */ u$3(ConnectionSettings, {}) }),
    /* @__PURE__ */ u$3(Panel.Content, { children: /* @__PURE__ */ u$3(ProjectInfoSection, {}) })
  ] });
};
const ConnectionSettings = () => {
  const {
    windows,
    isDiscovering,
    discoveryError,
    discover,
    selectedSession,
    selectSession
  } = useVSCode();
  const handleSessionChange = (e2) => {
    const target = e2.target;
    const selectedSessionId = target.value || void 0;
    selectSession(selectedSessionId);
  };
  const { appName } = useVSCode();
  const handleRefresh = () => {
    discover();
  };
  return /* @__PURE__ */ u$3("div", { className: "space-y-4 pb-4", children: [
    /* @__PURE__ */ u$3("div", { children: [
      /* @__PURE__ */ u$3(
        "label",
        {
          htmlFor: "session-select",
          className: "mb-2 block font-medium text-gray-700 text-sm",
          children: [
            "VS Code Window ",
            appName && `(${appName})`
          ]
        }
      ),
      /* @__PURE__ */ u$3("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ u$3(
          "select",
          {
            id: "session-select",
            value: (selectedSession == null ? void 0 : selectedSession.sessionId) || "",
            onChange: handleSessionChange,
            className: "h-8 flex-1 rounded-lg border border-zinc-300 bg-zinc-500/10 px-3 text-sm backdrop-saturate-150 focus:border-zinc-500 focus:outline-none",
            disabled: isDiscovering,
            children: [
              /* @__PURE__ */ u$3("option", { value: "", children: "Auto-detect (any window)" }),
              windows.map((window2) => /* @__PURE__ */ u$3("option", { value: window2.sessionId, children: [
                window2.displayName,
                " - Port ",
                window2.port
              ] }, window2.sessionId))
            ]
          }
        ),
        /* @__PURE__ */ u$3(
          "button",
          {
            type: "button",
            onClick: handleRefresh,
            disabled: isDiscovering,
            className: "flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-500/10 backdrop-saturate-150 transition-colors hover:bg-zinc-500/20 disabled:opacity-50",
            title: "Refresh window list",
            children: /* @__PURE__ */ u$3(
              RefreshCw,
              {
                className: `size-4 ${isDiscovering ? "animate-spin" : ""}`
              }
            )
          }
        )
      ] }),
      discoveryError && /* @__PURE__ */ u$3("p", { className: "mt-1 text-red-600 text-sm", children: [
        "Error discovering windows: ",
        discoveryError
      ] }),
      !isDiscovering && windows.length === 0 && !discoveryError && /* @__PURE__ */ u$3("p", { className: "mt-1 text-gray-500 text-sm", children: "No VS Code windows found. Make sure the Stagewise extension is installed and running." })
    ] }),
    selectedSession && /* @__PURE__ */ u$3("div", { className: "rounded-lg bg-blue-50 p-3", children: [
      /* @__PURE__ */ u$3("p", { className: "text-blue-800 text-sm", children: [
        /* @__PURE__ */ u$3("strong", { children: "Selected:" }),
        " ",
        selectedSession.displayName
      ] }),
      /* @__PURE__ */ u$3("p", { className: "mt-1 text-blue-600 text-xs", children: [
        "Session ID: ",
        selectedSession.sessionId.substring(0, 8),
        "..."
      ] })
    ] }),
    !selectedSession && /* @__PURE__ */ u$3("div", { children: /* @__PURE__ */ u$3("p", { className: "text-gray-600 text-sm", children: [
      /* @__PURE__ */ u$3("strong", { children: "Auto-detect mode:" }),
      " Commands will be sent to any available VS Code window."
    ] }) })
  ] });
};
const ProjectInfoSection = () => /* @__PURE__ */ u$3("div", { className: "space-y-2 text-xs text-zinc-700", children: [
  /* @__PURE__ */ u$3("div", { className: "my-2 flex flex-wrap items-center gap-3", children: [
    /* @__PURE__ */ u$3(
      "a",
      {
        href: "https://github.com/stagewise-io/stagewise",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "flex items-center gap-1 text-blue-700 hover:underline",
        title: "GitHub Repository",
        children: [
          /* @__PURE__ */ u$3("svg", { width: "16", height: "16", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ u$3("path", { d: "M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" }) }),
          "GitHub"
        ]
      }
    ),
    /* @__PURE__ */ u$3(
      "a",
      {
        href: "https://discord.gg/gkdGsDYaKA",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "flex items-center gap-1 text-indigo-700 hover:underline",
        title: "Join our Discord",
        children: [
          /* @__PURE__ */ u$3("svg", { width: "16", height: "16", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ u$3("path", { d: "M20.317 4.369A19.791 19.791 0 0 0 16.885 3.2a.117.117 0 0 0-.124.06c-.537.96-1.13 2.22-1.552 3.2a18.524 18.524 0 0 0-5.418 0c-.423-.98-1.016-2.24-1.553-3.2a.117.117 0 0 0-.124-.06A19.736 19.736 0 0 0 3.683 4.369a.105.105 0 0 0-.047.043C.533 9.043-.32 13.579.099 18.057a.12.12 0 0 0 .045.083c1.934 1.426 3.81 2.288 5.671 2.857a.116.116 0 0 0 .127-.043c.438-.602.827-1.24 1.165-1.908a.112.112 0 0 0-.062-.158c-.619-.234-1.205-.52-1.77-.853a.117.117 0 0 1-.012-.194c.119-.09.238-.183.353-.277a.112.112 0 0 1 .114-.013c3.747 1.71 7.789 1.71 11.533 0a.112.112 0 0 1 .115.012c.115.094.234.188.353.278a.117.117 0 0 1-.012.194c-.565.333-1.151.619-1.77.853a.112.112 0 0 0-.062.158c.34.668.728 1.306 1.165 1.908a.115.115 0 0 0 .127.043c1.861-.569 3.737-1.431 5.671-2.857a.12.12 0 0 0 .045-.083c.5-5.177-.838-9.673-3.636-13.645a.105.105 0 0 0-.047-.043zM8.02 15.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.095 2.156 2.418 0 1.334-.955 2.419-2.156 2.419zm7.96 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.095 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z" }) }),
          "Discord"
        ]
      }
    ),
    /* @__PURE__ */ u$3(
      "a",
      {
        href: "https://marketplace.visualstudio.com/items?itemName=stagewise.stagewise-vscode-extension",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "flex items-center gap-1 text-violet-700 hover:underline",
        title: "VS Code Marketplace",
        children: [
          /* @__PURE__ */ u$3("svg", { width: "16", height: "16", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ u$3("path", { d: "M21.805 2.29a2.25 2.25 0 0 0-2.45-.49l-7.5 3.25a2.25 2.25 0 0 0-1.31 2.06v1.13l-5.13 2.22a2.25 2.25 0 0 0-1.31 2.06v3.5a2.25 2.25 0 0 0 1.31 2.06l5.13 2.22v1.13a2.25 2.25 0 0 0 1.31 2.06l7.5 3.25a2.25 2.25 0 0 0 2.45-.49A2.25 2.25 0 0 0 23 20.25V3.75a2.25 2.25 0 0 0-1.195-1.46zM12 20.25v-16.5l7.5 3.25v10l-7.5 3.25z" }) }),
          "VS Code Marketplace"
        ]
      }
    )
  ] }),
  /* @__PURE__ */ u$3("div", { className: "mt-2", children: [
    /* @__PURE__ */ u$3("span", { className: "font-semibold", children: "Contact:" }),
    " ",
    /* @__PURE__ */ u$3(
      "a",
      {
        href: "mailto:sales@stagewise.io",
        className: "text-blue-700 hover:underline",
        children: "sales@stagewise.io"
      }
    )
  ] }),
  /* @__PURE__ */ u$3("div", { className: "mt-2 text-zinc-500", children: /* @__PURE__ */ u$3("span", { children: [
    "Licensed under AGPL v3.",
    " ",
    /* @__PURE__ */ u$3(
      "a",
      {
        href: "https://github.com/stagewise-io/stagewise/blob/main/LICENSE",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "hover:underline",
        children: "View license"
      }
    )
  ] }) })
] });
function DisconnectedStatePanel({
  discover,
  discoveryError
}) {
  return /* @__PURE__ */ u$3("div", { className: "rounded-lg border border-orange-200 bg-orange-50/90 p-4 shadow-lg backdrop-blur", children: [
    /* @__PURE__ */ u$3("div", { className: "mb-3 flex items-center gap-3", children: [
      /* @__PURE__ */ u$3(WifiOff, { className: "size-5 text-orange-600" }),
      /* @__PURE__ */ u$3("h3", { className: "font-semibold text-orange-800", children: "Not Connected" })
    ] }),
    /* @__PURE__ */ u$3("div", { className: "space-y-3 text-orange-700 text-sm", children: [
      /* @__PURE__ */ u$3("p", { children: "The stagewise toolbar isn't connected to any IDE window." }),
      discoveryError && /* @__PURE__ */ u$3("div", { className: "rounded border border-red-200 bg-red-100 p-2 text-red-700", children: [
        /* @__PURE__ */ u$3("strong", { children: "Error:" }),
        " ",
        discoveryError
      ] }),
      /* @__PURE__ */ u$3("div", { className: "space-y-2", children: [
        /* @__PURE__ */ u$3("p", { className: "font-medium", children: "To connect:" }),
        /* @__PURE__ */ u$3("ol", { className: "list-inside list-decimal space-y-1 pl-2 text-xs", children: [
          /* @__PURE__ */ u$3("li", { children: "Open your IDE (Cursor, Windsurf, etc.)" }),
          /* @__PURE__ */ u$3("li", { children: "Install the stagewise extension" }),
          /* @__PURE__ */ u$3("li", { children: "Make sure the extension is active" }),
          /* @__PURE__ */ u$3("li", { children: "Click refresh below" })
        ] })
      ] }),
      /* @__PURE__ */ u$3(
        "button",
        {
          type: "button",
          onClick: discover,
          className: "flex w-full items-center justify-center gap-2 rounded-md bg-orange-600 px-3 py-2 font-medium text-sm text-white transition-colors hover:bg-orange-700",
          children: [
            /* @__PURE__ */ u$3(RefreshCw, { className: "size-4" }),
            "Retry Connection"
          ]
        }
      ),
      /* @__PURE__ */ u$3("div", { className: "border-orange-200 border-t pt-2", children: /* @__PURE__ */ u$3(
        "a",
        {
          href: "https://marketplace.visualstudio.com/items?itemName=stagewise.stagewise-vscode-extension",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-orange-600 text-xs hover:text-orange-800 hover:underline",
          children: "Get VS Code Extension →"
        }
      ) })
    ] })
  ] });
}
function LoadingStateContent() {
  return /* @__PURE__ */ u$3("div", { className: "rounded-lg border border-blue-200 bg-blue-50/90 p-4 shadow-lg backdrop-blur", children: [
    /* @__PURE__ */ u$3("div", { className: "mb-3 flex items-center gap-3", children: [
      /* @__PURE__ */ u$3(RefreshCw, { className: "size-5 animate-spin text-blue-600" }),
      /* @__PURE__ */ u$3("h3", { className: "font-semibold text-blue-800", children: "Connecting..." })
    ] }),
    /* @__PURE__ */ u$3("div", { className: "text-blue-700 text-sm", children: /* @__PURE__ */ u$3("p", { children: "Looking for VS Code windows..." }) })
  ] });
}
function ConnectedStateButtons({
  handleButtonClick,
  pluginBox,
  setPluginBox,
  openPanel,
  setOpenPanel,
  chatState
}) {
  const plugins = usePlugins();
  const pluginsWithActions = plugins.plugins.filter(
    (plugin) => plugin.onActionClick
  );
  const handleOpenSettings = () => setOpenPanel(openPanel === "settings" ? null : "settings");
  return /* @__PURE__ */ u$3(k, { children: [
    /* @__PURE__ */ u$3(
      SettingsButton,
      {
        onOpenPanel: handleOpenSettings,
        isActive: openPanel === "settings"
      }
    ),
    pluginsWithActions.length > 0 && /* @__PURE__ */ u$3(ToolbarSection, { children: pluginsWithActions.map((plugin) => /* @__PURE__ */ u$3(
      ToolbarButton,
      {
        onClick: handleButtonClick(() => {
          if ((pluginBox == null ? void 0 : pluginBox.pluginName) !== plugin.pluginName) {
            const component = plugin.onActionClick();
            if (component) {
              setPluginBox({
                component: plugin.onActionClick(),
                pluginName: plugin.pluginName
              });
            }
          } else {
            setPluginBox(null);
          }
        }),
        active: (pluginBox == null ? void 0 : pluginBox.pluginName) === plugin.pluginName,
        children: plugin.iconSvg ? /* @__PURE__ */ u$3("span", { className: "size-4 stroke-zinc-950 text-zinc-950 *:size-full", children: plugin.iconSvg }) : /* @__PURE__ */ u$3(Puzzle, { className: "size-4" })
      },
      plugin.pluginName
    )) }),
    /* @__PURE__ */ u$3(ToolbarSection, { children: /* @__PURE__ */ u$3(
      ToolbarButton,
      {
        onClick: handleButtonClick(
          () => chatState.isPromptCreationActive ? chatState.stopPromptCreation() : chatState.startPromptCreation()
        ),
        active: chatState.isPromptCreationActive,
        children: /* @__PURE__ */ u$3(MessageCircle, { className: "size-4 stroke-zinc-950" })
      }
    ) })
  ] });
}
function ToolbarDraggableBox() {
  const provider = x(DraggableContext);
  const borderLocation = provider == null ? void 0 : provider.borderLocation;
  const isReady = !!borderLocation && borderLocation.right - borderLocation.left > 0 && borderLocation.bottom - borderLocation.top > 0;
  const draggable = useDraggable({
    startThreshold: 10,
    initialSnapArea: "bottomRight"
  });
  const { windows, isDiscovering, discoveryError, discover } = useVSCode();
  const isConnected = windows.length > 0;
  const [pluginBox, setPluginBox] = d$1(null);
  const [openPanel, setOpenPanel] = d$1(null);
  const chatState = useChatState();
  const minimized = useAppState((state) => state.minimized);
  const minimize = useAppState((state) => state.minimize);
  const expand = useAppState((state) => state.expand);
  y$1(() => {
    if (minimized) {
      setPluginBox(null);
      setOpenPanel(null);
    }
  }, [minimized]);
  const handleButtonClick = (handler) => (e2) => {
    if (draggable.wasDragged) {
      e2.preventDefault();
      e2.stopPropagation();
      return;
    }
    handler();
  };
  if (!isReady) return null;
  const isLoadingState = isDiscovering;
  const isDisconnectedState = !isConnected && !isDiscovering;
  const isConnectedState = isConnected;
  const getThemeClasses = () => {
    if (isLoadingState) {
      return {
        border: "border-blue-300",
        bg: "bg-blue-100/80",
        divideBorder: "divide-blue-200",
        buttonBg: "from-blue-600 to-sky-600",
        buttonColor: "text-blue-700"
      };
    }
    if (isDisconnectedState) {
      return {
        border: "border-orange-300",
        bg: "bg-orange-100/80",
        divideBorder: "divide-orange-200",
        buttonBg: "from-orange-600 to-red-600",
        buttonColor: "text-orange-700"
      };
    }
    return {
      border: "border-border/30",
      bg: "bg-zinc-50/80",
      divideBorder: "divide-border/20",
      buttonBg: "from-sky-700 to-fuchsia-700",
      buttonColor: "stroke-zinc-950"
    };
  };
  const theme = getThemeClasses();
  const getMinimizedIcon = () => {
    if (isLoadingState) {
      return /* @__PURE__ */ u$3(RefreshCw, { className: "size-4 animate-spin text-white" });
    }
    if (isDisconnectedState) {
      return /* @__PURE__ */ u$3(WifiOff, { className: "size-4 text-white" });
    }
    return /* @__PURE__ */ u$3(Logo, { className: "size-4.5", color: "white" });
  };
  return /* @__PURE__ */ u$3("div", { ref: draggable.draggableRef, className: "absolute p-0.5", children: [
    /* @__PURE__ */ u$3(
      "div",
      {
        className: cn(
          "absolute flex h-[calc(100vh-32px)] w-96 max-w-[40vw] items-stretch justify-end transition-all duration-300 ease-out",
          draggable.position.isTopHalf ? "top-0 flex-col-reverse" : "bottom-0 flex-col",
          draggable.position.isLeftHalf ? "left-[100%]" : "right-[100%]"
        ),
        children: [
          /* @__PURE__ */ u$3(
            "div",
            {
              className: cn(
                "flex min-h-0 flex-1 origin-bottom-right flex-col items-stretch px-2 transition-all duration-300 ease-out",
                (pluginBox || openPanel === "settings" || !isConnectedState) && !minimized ? "pointer-events-auto scale-100 opacity-100 blur-none" : "pointer-events-none h-0 scale-50 opacity-0 blur-md",
                draggable.position.isTopHalf ? "justify-start" : "justify-end",
                draggable.position.isTopHalf ? draggable.position.isLeftHalf ? "origin-top-left" : "origin-top-right" : draggable.position.isLeftHalf ? "origin-bottom-left" : "origin-bottom-right"
              ),
              children: [
                isLoadingState && /* @__PURE__ */ u$3(LoadingStateContent, {}),
                isDisconnectedState && /* @__PURE__ */ u$3(
                  DisconnectedStatePanel,
                  {
                    discover,
                    discoveryError
                  }
                ),
                isConnectedState && openPanel === "settings" && /* @__PURE__ */ u$3(SettingsPanel, { onClose: () => setOpenPanel(null) }),
                isConnectedState && (pluginBox == null ? void 0 : pluginBox.component)
              ]
            }
          ),
          isConnectedState && /* @__PURE__ */ u$3(
            "div",
            {
              className: cn(
                "z-20 w-full px-2 transition-all duration-300 ease-out",
                chatState.isPromptCreationActive && !minimized ? "pointer-events-auto scale-100 opacity-100 blur-none" : "pointer-events-none h-0 scale-50 opacity-0 blur-md",
                draggable.position.isTopHalf ? "mb-2" : "mt-2",
                draggable.position.isTopHalf ? draggable.position.isLeftHalf ? "origin-top-left" : "origin-top-right" : draggable.position.isLeftHalf ? "origin-bottom-left" : "origin-bottom-right"
              ),
              children: /* @__PURE__ */ u$3(ToolbarChatArea, {})
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ u$3(
      "div",
      {
        ref: draggable.handleRef,
        className: cn(
          "pointer-events-auto z-50 rounded-full border px-0.5 shadow-md backdrop-blur transition-all duration-300 ease-out",
          theme.border,
          theme.bg,
          draggable.position.isTopHalf ? "flex-col-reverse divide-y-reverse" : "flex-col",
          minimized ? "h-9.5 w-9.5" : "h-[calc-size(auto,size)] h-auto w-auto"
        ),
        children: [
          /* @__PURE__ */ u$3(
            H$1,
            {
              onClick: () => expand(),
              className: cn(
                "absolute right-0 left-0 z-50 flex size-9 origin-center cursor-pointer items-center justify-center rounded-full bg-gradient-to-tr transition-all duration-300 ease-out",
                theme.buttonBg,
                minimized ? "pointer-events-auto scale-100 opacity-100 blur-none" : "pointer-events-none scale-25 opacity-0 blur-md",
                draggable.position.isTopHalf ? "top-0" : "bottom-0"
              ),
              children: getMinimizedIcon()
            }
          ),
          /* @__PURE__ */ u$3(
            "div",
            {
              className: cn(
                "flex h-[calc-size(auto)] scale-100 items-center justify-center divide-y transition-all duration-300 ease-out",
                theme.divideBorder,
                draggable.position.isTopHalf ? "origin-top flex-col-reverse divide-y-reverse" : "origin-bottom flex-col",
                minimized && "pointer-events-none h-0 scale-50 opacity-0 blur-md"
              ),
              children: [
                isConnectedState && /* @__PURE__ */ u$3(
                  ConnectedStateButtons,
                  {
                    handleButtonClick,
                    pluginBox,
                    setPluginBox,
                    openPanel,
                    setOpenPanel,
                    chatState
                  }
                ),
                (isLoadingState || isDisconnectedState) && /* @__PURE__ */ u$3(ToolbarSection, { children: /* @__PURE__ */ u$3(
                  ToolbarButton,
                  {
                    onClick: isDisconnectedState ? () => discover() : void 0,
                    className: cn(
                      theme.buttonColor,
                      isDisconnectedState && "hover:bg-orange-200"
                    ),
                    children: [
                      isLoadingState && /* @__PURE__ */ u$3(RefreshCw, { className: "size-4 animate-spin" }),
                      isDisconnectedState && /* @__PURE__ */ u$3(RefreshCw, { className: "size-4" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ u$3(ToolbarSection, { children: /* @__PURE__ */ u$3(
                  ToolbarButton,
                  {
                    onClick: handleButtonClick(() => minimize()),
                    className: cn(
                      "h-5",
                      theme.buttonColor,
                      draggable.position.isTopHalf ? "rounded-t-3xl rounded-b-lg" : "rounded-t-lg rounded-b-3xl"
                    ),
                    children: draggable.position.isTopHalf ? /* @__PURE__ */ u$3(ChevronUp, { className: "size-4" }) : /* @__PURE__ */ u$3(ChevronDown, { className: "size-4" })
                  }
                ) })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function ToolbarArea() {
  const containerRef = A$1(null);
  return /* @__PURE__ */ u$3("div", { className: "absolute size-full", children: /* @__PURE__ */ u$3("div", { className: "absolute inset-4", ref: containerRef, children: /* @__PURE__ */ u$3(
    DraggableProvider,
    {
      containerRef,
      snapAreas: {
        topLeft: true,
        topRight: true,
        bottomLeft: true,
        bottomRight: true,
        topCenter: true,
        bottomCenter: true
      },
      children: /* @__PURE__ */ u$3(ToolbarDraggableBox, {})
    }
  ) }) });
}
function ElementSelector(props) {
  const lastHoveredElement = A$1(null);
  const handleMouseMove = q(
    (event) => {
      const target = event.target;
      if (target.closest(".companion")) return;
      const refElement = getElementAtPoint(event.clientX, event.clientY);
      if (props.ignoreList.includes(refElement)) return;
      if (lastHoveredElement.current !== refElement) {
        lastHoveredElement.current = refElement;
        props.onElementHovered(refElement);
      }
    },
    [props]
  );
  const handleMouseLeave = q(() => {
    lastHoveredElement.current = null;
    props.onElementUnhovered();
  }, [props]);
  const handleMouseClick = q(() => {
    if (!lastHoveredElement.current) return;
    if (props.ignoreList.includes(lastHoveredElement.current)) return;
    props.onElementSelected(lastHoveredElement.current);
  }, [props]);
  return /* @__PURE__ */ u$3(
    "div",
    {
      className: "pointer-events-auto fixed inset-0 h-screen w-screen cursor-copy",
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      onClick: handleMouseClick,
      role: "button",
      tabIndex: 0
    }
  );
}
function useWindowSize() {
  const [size, setSize] = d$1({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const handleResize = q(
    () => setSize({
      width: window.innerWidth,
      height: window.innerHeight
    }),
    []
  );
  useEventListener("resize", handleResize);
  return size;
}
function ContextItemProposal({
  refElement,
  ...props
}) {
  const boxRef = A$1(null);
  const windowSize = useWindowSize();
  const { plugins } = usePlugins();
  const hoveredElementPluginContext = T(() => {
    if (!refElement) return [];
    const pluginsWithContextGetters = plugins.filter(
      (plugin) => plugin.onContextElementSelect
    );
    return pluginsWithContextGetters.map((plugin) => {
      var _a;
      return {
        pluginName: plugin.pluginName,
        context: (_a = plugin.onContextElementSelect) == null ? void 0 : _a.call(plugin, refElement)
      };
    });
  }, [refElement]);
  const updateBoxPosition = q(() => {
    if (boxRef.current) {
      if (refElement) {
        const referenceRect = refElement.getBoundingClientRect();
        boxRef.current.style.top = `${referenceRect.top - 2}px`;
        boxRef.current.style.left = `${referenceRect.left - 2}px`;
        boxRef.current.style.width = `${referenceRect.width + 4}px`;
        boxRef.current.style.height = `${referenceRect.height + 4}px`;
        boxRef.current.style.display = void 0;
      } else {
        boxRef.current.style.height = "0px";
        boxRef.current.style.width = "0px";
        boxRef.current.style.top = `${windowSize.height / 2}px`;
        boxRef.current.style.left = `${windowSize.width / 2}px`;
        boxRef.current.style.display = "none";
      }
    }
  }, [refElement, windowSize.height, windowSize.width]);
  useCyclicUpdate(updateBoxPosition, 30);
  return /* @__PURE__ */ u$3(
    "div",
    {
      ...props,
      className: "fixed flex items-center justify-center rounded-lg border-2 border-blue-600/80 bg-blue-600/20 text-white transition-all duration-100",
      style: { zIndex: 1e3 },
      ref: boxRef,
      children: [
        /* @__PURE__ */ u$3("div", { className: "absolute top-0.5 left-0.5 flex w-full flex-row items-start justify-start gap-1", children: [
          /* @__PURE__ */ u$3("div", { className: "flex flex-row items-center justify-center gap-0.5 overflow-hidden rounded-md bg-zinc-700/80 px-1 py-0 font-medium text-white text-xs", children: /* @__PURE__ */ u$3("span", { className: "truncate", children: refElement.tagName.toLowerCase() }) }),
          hoveredElementPluginContext.map((plugin) => {
            var _a;
            return /* @__PURE__ */ u$3("div", { className: "flex flex-row items-center justify-center gap-0.5 overflow-hidden rounded-md bg-zinc-700/80 px-1 py-0 font-medium text-white text-xs", children: [
              /* @__PURE__ */ u$3("span", { className: "size-3 shrink-0 stroke-white text-white *:size-full", children: (_a = plugins.find((p2) => p2.pluginName === plugin.pluginName)) == null ? void 0 : _a.iconSvg }),
              /* @__PURE__ */ u$3("span", { className: "truncate", children: plugin.context.annotation })
            ] });
          })
        ] }),
        /* @__PURE__ */ u$3(Plus, { className: "size-6 drop-shadow-black drop-shadow-md" })
      ]
    }
  );
}
function ContextItem({ refElement, ...props }) {
  const boxRef = A$1(null);
  const windowSize = useWindowSize();
  const updateBoxPosition = q(() => {
    if (boxRef.current) {
      if (refElement) {
        const referenceRect = refElement.getBoundingClientRect();
        boxRef.current.style.top = `${referenceRect.top}px`;
        boxRef.current.style.left = `${referenceRect.left}px`;
        boxRef.current.style.width = `${referenceRect.width}px`;
        boxRef.current.style.height = `${referenceRect.height}px`;
        boxRef.current.style.display = void 0;
      } else {
        boxRef.current.style.height = "0px";
        boxRef.current.style.width = "0px";
        boxRef.current.style.top = `${windowSize.height / 2}px`;
        boxRef.current.style.left = `${windowSize.width / 2}px`;
        boxRef.current.style.display = "none";
      }
    }
  }, [refElement, windowSize.height, windowSize.width]);
  useCyclicUpdate(updateBoxPosition, 30);
  const chatState = useChatState();
  const handleDeleteClick = q(() => {
    chatState.removeChatDomContext(chatState.currentChatId, refElement);
  }, [chatState, refElement]);
  const { plugins } = usePlugins();
  return /* @__PURE__ */ u$3(
    "div",
    {
      ...props,
      className: "pointer-events-auto fixed flex cursor-pointer items-center justify-center rounded-lg border-2 border-green-600/80 bg-green-600/5 text-transparent transition-all duration-0 hover:border-red-600/80 hover:bg-red-600/20 hover:text-white",
      ref: boxRef,
      onClick: handleDeleteClick,
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ u$3("div", { className: "absolute top-0.5 left-0.5 flex w-full flex-row items-start justify-start gap-1", children: [
          /* @__PURE__ */ u$3("div", { className: "flex flex-row items-center justify-center gap-0.5 overflow-hidden rounded-md bg-zinc-700/80 px-1 py-0 font-medium text-white text-xs", children: /* @__PURE__ */ u$3("span", { className: "truncate", children: refElement.tagName.toLowerCase() }) }),
          props.pluginContext.map((plugin) => {
            var _a;
            return /* @__PURE__ */ u$3("div", { className: "flex flex-row items-center justify-center gap-0.5 overflow-hidden rounded-md bg-zinc-700/80 px-1 py-0 font-medium text-white text-xs", children: [
              /* @__PURE__ */ u$3("span", { className: "size-3 shrink-0 stroke-white text-white *:size-full", children: (_a = plugins.find((p2) => p2.pluginName === plugin.pluginName)) == null ? void 0 : _a.iconSvg }),
              /* @__PURE__ */ u$3("span", { className: "truncate", children: plugin.context.annotation })
            ] });
          })
        ] }),
        /* @__PURE__ */ u$3(Trash2, { className: "size-6 drop-shadow-black drop-shadow-md" })
      ]
    }
  );
}
function SelectorCanvas() {
  const {
    chats,
    currentChatId,
    addChatDomContext,
    isPromptCreationActive,
    promptState
  } = useChatState();
  const currentChat = T(
    () => chats.find((chat) => chat.id === currentChatId),
    [currentChatId, chats]
  );
  const shouldShow = isPromptCreationActive && promptState !== "loading";
  const contextElements = T(() => {
    return (currentChat == null ? void 0 : currentChat.domContextElements) || [];
  }, [currentChat]);
  const [hoveredElement, setHoveredElement] = d$1(
    null
  );
  const addElementToContext = q(
    (el) => {
      addChatDomContext(currentChatId, el);
    },
    [addChatDomContext, currentChatId]
  );
  if (!shouldShow) return null;
  return /* @__PURE__ */ u$3(k, { children: [
    hoveredElement && /* @__PURE__ */ u$3(ContextItemProposal, { refElement: hoveredElement }),
    /* @__PURE__ */ u$3(
      ElementSelector,
      {
        ignoreList: contextElements.map((el) => el.element),
        onElementHovered: setHoveredElement,
        onElementSelected: addElementToContext,
        onElementUnhovered: () => setHoveredElement(null)
      }
    ),
    contextElements.map((el) => /* @__PURE__ */ u$3(ContextItem, { refElement: el.element, pluginContext: el.pluginContext }))
  ] });
}
function DesktopLayout() {
  return /* @__PURE__ */ u$3("div", { className: cn("fixed inset-0 h-screen w-screen"), children: [
    /* @__PURE__ */ u$3(SelectorCanvas, {}),
    /* @__PURE__ */ u$3(ToolbarArea, {})
  ] });
}
function ClickBlocker(props) {
  return /* @__PURE__ */ u$3(
    "div",
    {
      className: cn(
        typeof props.enable === "undefined" || props.enable ? "pointer-events-auto" : "pointer-events-none",
        props.className
      ),
      onClick: props.onClick,
      role: "button",
      tabIndex: 0
    }
  );
}
function FocusLock() {
  const focusInCompanion = A$1(false);
  y$1(() => {
    const originalFocus = HTMLElement.prototype.focus;
    HTMLElement.prototype.focus = function(...args) {
      const shadowRoot = this.getRootNode();
      const isInCompanion = shadowRoot instanceof ShadowRoot && shadowRoot.host instanceof HTMLElement && shadowRoot.host.nodeName === "STAGEWISE-COMPANION-ANCHOR";
      if (!isInCompanion && focusInCompanion.current) {
        return;
      }
      originalFocus.apply(this, args);
    };
    return () => {
      HTMLElement.prototype.focus = originalFocus;
    };
  }, []);
  useEventListener(
    "focusin",
    (event) => {
      if (event.target.localName === companionAnchorTagName) {
        focusInCompanion.current = true;
      }
    },
    { capture: true }
  );
  useEventListener(
    "focusout",
    (event) => {
      if (event.target.localName === companionAnchorTagName) {
        focusInCompanion.current = false;
      }
    },
    { capture: true }
  );
  return null;
}
function VisibilityManager({ children }) {
  return children;
}
function App(config) {
  const isMainAppBlocked = useAppState((state) => state.isMainAppBlocked);
  return /* @__PURE__ */ u$3(k, { children: [
    /* @__PURE__ */ u$3(FocusLock, {}),
    /* @__PURE__ */ u$3(
      ClickBlocker,
      {
        className: "fixed inset-0 h-screen w-screen",
        enable: isMainAppBlocked
      }
    ),
    /* @__PURE__ */ u$3(ContextProviders, { config, children: [
      /* @__PURE__ */ u$3(HotkeyListener, {}),
      /* @__PURE__ */ u$3(VisibilityManager, { children: /* @__PURE__ */ u$3(DesktopLayout, {}) })
    ] })
  ] });
}
function initToolbar(config) {
  if (!document.body)
    throw new Error("stagewise companion cannot find document.body");
  if (document.body.querySelector(companionAnchorTagName)) {
    console.warn(
      "A stagewise companion anchor already exists. Aborting this instance."
    );
    throw new Error("A stagewise companion anchor already exists.");
  }
  const shadowDomAnchor = document.createElement(companionAnchorTagName);
  shadowDomAnchor.style.position = "fixed";
  shadowDomAnchor.style.top = "0px";
  shadowDomAnchor.style.left = "0px";
  shadowDomAnchor.style.right = "0px";
  shadowDomAnchor.style.bottom = "0px";
  shadowDomAnchor.style.pointerEvents = "none";
  shadowDomAnchor.style.zIndex = "2147483647";
  const eventBlocker = (ev) => {
    ev.stopPropagation();
  };
  shadowDomAnchor.onclick = eventBlocker;
  shadowDomAnchor.onmousedown = eventBlocker;
  shadowDomAnchor.onmouseup = eventBlocker;
  shadowDomAnchor.onmousemove = eventBlocker;
  shadowDomAnchor.ondblclick = eventBlocker;
  shadowDomAnchor.oncontextmenu = eventBlocker;
  shadowDomAnchor.onwheel = eventBlocker;
  shadowDomAnchor.onfocus = eventBlocker;
  shadowDomAnchor.onblur = eventBlocker;
  document.body.appendChild(shadowDomAnchor);
  const fontLinkNode = document.createElement("link");
  fontLinkNode.rel = "stylesheet";
  fontLinkNode.href = `https://rsms.me/inter/inter.css`;
  document.head.appendChild(fontLinkNode);
  const styleNode = document.createElement("style");
  styleNode.append(document.createTextNode(appStyle));
  document.head.appendChild(styleNode);
  E$1(_$3(App, config), shadowDomAnchor);
}
export {
  initToolbar
};
