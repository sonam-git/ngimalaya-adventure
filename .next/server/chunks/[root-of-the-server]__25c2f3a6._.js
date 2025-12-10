module.exports=[70406,(e,t,a)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},93695,(e,t,a)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},18622,(e,t,a)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,a)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,a)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,a)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},24361,(e,t,a)=>{t.exports=e.x("util",()=>require("util"))},14747,(e,t,a)=>{t.exports=e.x("path",()=>require("path"))},90947,e=>{"use strict";function t(e){if(!e)return"";let t=e.replace(/[^\d+]/g,"").replace(/^\+?1?/,"");return 10===t.length?`${t.slice(0,3)}-${t.slice(3,6)}-${t.slice(6)}`:11===t.length&&t.startsWith("1")?(t=t.slice(1),`${t.slice(0,3)}-${t.slice(3,6)}-${t.slice(6)}`):t.length>10?e.trim():t||e}e.s(["formatPhoneNumber",()=>t])},10044,e=>{"use strict";var t=e.i(47909),a=e.i(74017),r=e.i(96250),s=e.i(59756),n=e.i(61916),i=e.i(14444),o=e.i(37092),l=e.i(69741),d=e.i(16795),c=e.i(87718),u=e.i(95169),p=e.i(47587),m=e.i(66012),v=e.i(70101),h=e.i(26937),x=e.i(10372),g=e.i(93695);e.i(52474);var f=e.i(220),b=e.i(89171),R=e.i(44648),w=e.i(90947);R.default.setApiKey(process.env.SENDGRID_API_KEY||"");let y=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,E=["tempmail.com","throwaway.email","guerrillamail.com","mailinator.com","10minutemail.com","trashmail.com","temp-mail.org","yopmail.com","sharklasers.com","maildrop.cc","getnada.com","fakeinbox.com","spamgourmet.com","tempinbox.com"],A=[/<script/i,/javascript:/i,/on\w+=/i,/<iframe/i,/eval\(/i,/onclick/i,/onerror/i,/data:text\/html/i,/<object/i,/<embed/i],C=new Map;function N(e){let t=e.replace(/<[^>]*>/g,"");for(let e of A)if(e.test(t))throw Error("Suspicious content detected");return t.trim()}async function j(e){try{let t,a,r=e.headers.get("x-forwarded-for")||e.headers.get("x-real-ip")||"unknown";if(t=Date.now(),(a=C.get(r))&&!(t-a.timestamp>36e5)?a.count>=5||(a.count++,!1):(C.set(r,{count:1,timestamp:t}),!1))return b.NextResponse.json({error:"Too many requests. Please try again later."},{status:429});let s=await e.json();if(s.website)return console.log("Bot detected via honeypot"),b.NextResponse.json({success:!0});if(!s.name||!s.email||!s.subject||!s.message)return b.NextResponse.json({error:"Missing required fields"},{status:400});if(!function(e){if(!y.test(e))return!1;let t=e.split("@")[1]?.toLowerCase();return!E.includes(t)}(s.email))return b.NextResponse.json({error:"Invalid or disposable email address"},{status:400});let n={name:N(s.name),email:N(s.email),phone:s.phone?(0,w.formatPhoneNumber)(N(s.phone)):"",subject:N(s.subject),message:N(s.message)},i={to:process.env.NGIMALAYA_EMAIL||"ngiman81@gmail.com",from:{email:process.env.NGIMALAYA_EMAIL||"ngiman81@gmail.com",name:"Ngimalaya Adventure Contact Form"},replyTo:n.email,subject:`Contact Form: ${n.subject}`,html:`
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .section { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 20px; }
            .field { margin-bottom: 12px; }
            .label { font-weight: bold; color: #555; }
            .value { color: #333; margin-top: 5px; }
            .message-box { background: #f8f9fa; padding: 15px; border-left: 4px solid #667eea; margin: 15px 0; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📧 New Contact Form Submission</h1>
              <p>Received: ${new Date().toLocaleString("en-US",{timeZone:"Asia/Kathmandu"})} NPT</p>
            </div>
            
            <div class="content">
              <div class="section">
                <div class="field">
                  <div class="label">From:</div>
                  <div class="value">${n.name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${n.email}">${n.email}</a></div>
                </div>
                ${n.phone?`
                <div class="field">
                  <div class="label">Phone:</div>
                  <div class="value">${n.phone}</div>
                </div>
                `:""}
                <div class="field">
                  <div class="label">Subject:</div>
                  <div class="value"><strong>${n.subject}</strong></div>
                </div>
              </div>
              
              <div class="message-box">
                <div class="label">Message:</div>
                <div class="value" style="white-space: pre-wrap;">${n.message}</div>
              </div>
              
              <div class="footer">
                <p>This email was sent from Ngimalaya Adventure contact form</p>
                <p>IP Address: ${r}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,text:`
New Contact Form Submission

From: ${n.name}
Email: ${n.email}
${n.phone?`Phone: ${n.phone}`:""}
Subject: ${n.subject}

Message:
${n.message}

Received: ${new Date().toLocaleString()}
IP Address: ${r}
      `};return await R.default.send(i),b.NextResponse.json({success:!0,message:"Message sent successfully"})}catch(e){if(console.error("Contact API Error:",e),e instanceof Error&&"Suspicious content detected"===e.message)return b.NextResponse.json({error:"Invalid input detected"},{status:400});return b.NextResponse.json({error:"Failed to send message. Please try again."},{status:500})}}e.s(["POST",()=>j],91242);var P=e.i(91242);let $=new t.AppRouteRouteModule({definition:{kind:a.RouteKind.APP_ROUTE,page:"/api/contact/route",pathname:"/api/contact",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/app/api/contact/route.ts",nextConfigOutput:"",userland:P}),{workAsyncStorage:S,workUnitAsyncStorage:T,serverHooks:k}=$;function I(){return(0,r.patchFetch)({workAsyncStorage:S,workUnitAsyncStorage:T})}async function M(e,t,r){$.isDev&&(0,s.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let b="/api/contact/route";b=b.replace(/\/index$/,"")||"/";let R=await $.prepare(e,t,{srcPage:b,multiZoneDraftMode:!1});if(!R)return t.statusCode=400,t.end("Bad Request"),null==r.waitUntil||r.waitUntil.call(r,Promise.resolve()),null;let{buildId:w,params:y,nextConfig:E,parsedUrl:A,isDraftMode:C,prerenderManifest:N,routerServerContext:j,isOnDemandRevalidate:P,revalidateOnlyGenerated:S,resolvedPathname:T,clientReferenceManifest:k,serverActionsManifest:I}=R,M=(0,l.normalizeAppPath)(b),_=!!(N.dynamicRoutes[M]||N.routes[T]),q=async()=>((null==j?void 0:j.render404)?await j.render404(e,t,A,!1):t.end("This page could not be found"),null);if(_&&!C){let e=!!N.routes[T],t=N.dynamicRoutes[M];if(t&&!1===t.fallback&&!e){if(E.experimental.adapterPath)return await q();throw new g.NoFallbackError}}let O=null;!_||$.isDev||C||(O="/index"===(O=T)?"/":O);let D=!0===$.isDev||!_,H=_&&!D;I&&k&&(0,i.setReferenceManifestsSingleton)({page:b,clientReferenceManifest:k,serverActionsManifest:I,serverModuleMap:(0,o.createServerModuleMap)({serverActionsManifest:I})});let U=e.method||"GET",F=(0,n.getTracer)(),L=F.getActiveScopeSpan(),K={params:y,prerenderManifest:N,renderOpts:{experimental:{authInterrupts:!!E.experimental.authInterrupts},cacheComponents:!!E.cacheComponents,supportsDynamicResponse:D,incrementalCache:(0,s.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:E.cacheLife,waitUntil:r.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,a,r)=>$.onRequestError(e,t,r,j)},sharedContext:{buildId:w}},B=new d.NodeNextRequest(e),G=new d.NodeNextResponse(t),z=c.NextRequestAdapter.fromNodeNextRequest(B,(0,c.signalFromNodeResponse)(t));try{let i=async e=>$.handle(z,K).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let a=F.getRootSpanAttributes();if(!a)return;if(a.get("next.span_type")!==u.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${a.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let r=a.get("next.route");if(r){let t=`${U} ${r}`;e.setAttributes({"next.route":r,"http.route":r,"next.span_name":t}),e.updateName(t)}else e.updateName(`${U} ${b}`)}),o=!!(0,s.getRequestMeta)(e,"minimalMode"),l=async s=>{var n,l;let d=async({previousCacheEntry:a})=>{try{if(!o&&P&&S&&!a)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let n=await i(s);e.fetchMetrics=K.renderOpts.fetchMetrics;let l=K.renderOpts.pendingWaitUntil;l&&r.waitUntil&&(r.waitUntil(l),l=void 0);let d=K.renderOpts.collectedTags;if(!_)return await (0,m.sendResponse)(B,G,n,K.renderOpts.pendingWaitUntil),null;{let e=await n.blob(),t=(0,v.toNodeOutgoingHttpHeaders)(n.headers);d&&(t[x.NEXT_CACHE_TAGS_HEADER]=d),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let a=void 0!==K.renderOpts.collectedRevalidate&&!(K.renderOpts.collectedRevalidate>=x.INFINITE_CACHE)&&K.renderOpts.collectedRevalidate,r=void 0===K.renderOpts.collectedExpire||K.renderOpts.collectedExpire>=x.INFINITE_CACHE?void 0:K.renderOpts.collectedExpire;return{value:{kind:f.CachedRouteKind.APP_ROUTE,status:n.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:a,expire:r}}}}catch(t){throw(null==a?void 0:a.isStale)&&await $.onRequestError(e,t,{routerKind:"App Router",routePath:b,routeType:"route",revalidateReason:(0,p.getRevalidateReason)({isStaticGeneration:H,isOnDemandRevalidate:P})},j),t}},c=await $.handleResponse({req:e,nextConfig:E,cacheKey:O,routeKind:a.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:N,isRoutePPREnabled:!1,isOnDemandRevalidate:P,revalidateOnlyGenerated:S,responseGenerator:d,waitUntil:r.waitUntil,isMinimalMode:o});if(!_)return null;if((null==c||null==(n=c.value)?void 0:n.kind)!==f.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==c||null==(l=c.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});o||t.setHeader("x-nextjs-cache",P?"REVALIDATED":c.isMiss?"MISS":c.isStale?"STALE":"HIT"),C&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let u=(0,v.fromNodeOutgoingHttpHeaders)(c.value.headers);return o&&_||u.delete(x.NEXT_CACHE_TAGS_HEADER),!c.cacheControl||t.getHeader("Cache-Control")||u.get("Cache-Control")||u.set("Cache-Control",(0,h.getCacheControlHeader)(c.cacheControl)),await (0,m.sendResponse)(B,G,new Response(c.value.body,{headers:u,status:c.value.status||200})),null};L?await l(L):await F.withPropagatedContext(e.headers,()=>F.trace(u.BaseServerSpan.handleRequest,{spanName:`${U} ${b}`,kind:n.SpanKind.SERVER,attributes:{"http.method":U,"http.target":e.url}},l))}catch(t){if(t instanceof g.NoFallbackError||await $.onRequestError(e,t,{routerKind:"App Router",routePath:M,routeType:"route",revalidateReason:(0,p.getRevalidateReason)({isStaticGeneration:H,isOnDemandRevalidate:P})}),_)throw t;return await (0,m.sendResponse)(B,G,new Response(null,{status:500})),null}}e.s(["handler",()=>M,"patchFetch",()=>I,"routeModule",()=>$,"serverHooks",()=>k,"workAsyncStorage",()=>S,"workUnitAsyncStorage",()=>T],10044)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__25c2f3a6._.js.map