module.exports=[93695,(e,t,a)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},18622,(e,t,a)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,a)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,a)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,a)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},70406,(e,t,a)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},24361,(e,t,a)=>{t.exports=e.x("util",()=>require("util"))},14747,(e,t,a)=>{t.exports=e.x("path",()=>require("path"))},90132,e=>{"use strict";var t=e.i(47909),a=e.i(74017),r=e.i(96250),s=e.i(59756),n=e.i(61916),i=e.i(14444),o=e.i(37092),l=e.i(69741),d=e.i(16795),p=e.i(87718),c=e.i(95169),u=e.i(47587),m=e.i(66012),f=e.i(70101),g=e.i(26937),v=e.i(10372),x=e.i(93695);e.i(52474);var h=e.i(220),b=e.i(89171),y=e.i(44648);y.default.setApiKey(process.env.SENDGRID_API_KEY||"");let R=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,w=["tempmail.com","throwaway.email","guerrillamail.com","mailinator.com","10minutemail.com","trashmail.com","temp-mail.org","yopmail.com","sharklasers.com","maildrop.cc","getnada.com","fakeinbox.com","spamgourmet.com","tempinbox.com","dispostable.com"],A=[/<script/i,/javascript:/i,/on\w+=/i,/<iframe/i,/eval\(/i,/onclick/i,/onerror/i,/data:text\/html/i,/<object/i,/<embed/i],E=new Map;function C(e){let t=e.replace(/<[^>]*>/g,"");for(let e of A)if(e.test(t))throw Error("Suspicious content detected");return t.trim()}async function k(e){try{let t,a,r=e.headers.get("x-forwarded-for")||e.headers.get("x-real-ip")||"unknown";if(t=Date.now(),(a=E.get(r))&&!(t-a.timestamp>36e5)?a.count>=5||(a.count++,!1):(E.set(r,{count:1,timestamp:t}),!1))return b.NextResponse.json({error:"Too many requests. Please try again later."},{status:429});let s=await e.json();if(s.website)return console.log("Bot detected via honeypot"),b.NextResponse.json({success:!0});if(!s.fullName||!s.email||!s.country||!s.availableDays||!s.preferredDate||!s.destination)return b.NextResponse.json({error:"Missing required fields"},{status:400});if(!function(e){if(!R.test(e))return!1;let t=e.split("@")[1]?.toLowerCase();return!w.includes(t)}(s.email))return b.NextResponse.json({error:"Invalid or disposable email address"},{status:400});let n={fullName:C(s.fullName),country:C(s.country),availableDays:C(s.availableDays),preferredDate:C(s.preferredDate),destination:C(s.destination),email:C(s.email),message:s.message?C(s.message):""},i={to:process.env.NGIMALAYA_EMAIL||"ngiman81@gmail.com",from:{email:process.env.NGIMALAYA_EMAIL||"ngiman81@gmail.com",name:"Ngimalaya Adventure Custom Trek Planner"},replyTo:n.email,subject:`Custom Trek Planning Request: ${n.destination} - ${n.fullName}`,html:`
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .section { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 20px; }
            .section-title { color: #f5576c; font-size: 18px; font-weight: bold; margin-bottom: 15px; border-bottom: 2px solid #f5576c; padding-bottom: 5px; }
            .field { margin-bottom: 12px; }
            .label { font-weight: bold; color: #555; display: inline-block; min-width: 180px; }
            .value { color: #333; }
            .highlight { background: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin: 15px 0; }
            .message-box { background: #f8f9fa; padding: 15px; border-left: 4px solid #f5576c; margin: 15px 0; white-space: pre-wrap; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🗺️ Custom Trek Planning Request</h1>
              <p>Received: ${new Date().toLocaleString("en-US",{timeZone:"Asia/Kathmandu"})} NPT</p>
            </div>
            
            <div class="content">
              <div class="section">
                <div class="section-title">👤 Client Information</div>
                <div class="field"><span class="label">Full Name:</span> <span class="value">${n.fullName}</span></div>
                <div class="field"><span class="label">Email:</span> <span class="value"><a href="mailto:${n.email}">${n.email}</a></span></div>
                <div class="field"><span class="label">Country:</span> <span class="value">${n.country}</span></div>
              </div>
              
              <div class="section">
                <div class="section-title">📅 Trek Planning Details</div>
                <div class="field"><span class="label">Destination:</span> <span class="value"><strong>${n.destination}</strong></span></div>
                <div class="field"><span class="label">Available Days:</span> <span class="value">${n.availableDays} days</span></div>
                <div class="field"><span class="label">Preferred Date:</span> <span class="value">${n.preferredDate}</span></div>
              </div>
              
              ${n.message?`
              <div class="section">
                <div class="section-title">💬 Additional Details</div>
                <div class="message-box">${n.message}</div>
              </div>
              `:""}
              
              <div class="highlight">
                <strong>⚠️ Action Required:</strong> Create a custom itinerary based on the ${n.availableDays}-day timeframe and respond within 24 hours.
              </div>
              
              <div class="footer">
                <p>This email was sent from Ngimalaya Adventure custom trek planning system</p>
                <p>IP Address: ${r}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,text:`
Custom Trek Planning Request

Client Information:
- Full Name: ${n.fullName}
- Email: ${n.email}
- Country: ${n.country}

Trek Planning Details:
- Destination: ${n.destination}
- Available Days: ${n.availableDays}
- Preferred Date: ${n.preferredDate}

${n.message?`Additional Details:
${n.message}
`:""}

Received: ${new Date().toLocaleString()}
IP Address: ${r}
      `};return await y.default.send(i),b.NextResponse.json({success:!0,message:"Custom trek planning request submitted successfully"})}catch(e){if(console.error("Custom Trek API Error:",e),e instanceof Error&&"Suspicious content detected"===e.message)return b.NextResponse.json({error:"Invalid input detected"},{status:400});return b.NextResponse.json({error:"Failed to submit request. Please try again."},{status:500})}}e.s(["POST",()=>k],69992);var N=e.i(69992);let D=new t.AppRouteRouteModule({definition:{kind:a.RouteKind.APP_ROUTE,page:"/api/customtrek/route",pathname:"/api/customtrek",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/app/api/customtrek/route.ts",nextConfigOutput:"",userland:N}),{workAsyncStorage:P,workUnitAsyncStorage:T,serverHooks:$}=D;function q(){return(0,r.patchFetch)({workAsyncStorage:P,workUnitAsyncStorage:T})}async function j(e,t,r){D.isDev&&(0,s.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let b="/api/customtrek/route";b=b.replace(/\/index$/,"")||"/";let y=await D.prepare(e,t,{srcPage:b,multiZoneDraftMode:!1});if(!y)return t.statusCode=400,t.end("Bad Request"),null==r.waitUntil||r.waitUntil.call(r,Promise.resolve()),null;let{buildId:R,params:w,nextConfig:A,parsedUrl:E,isDraftMode:C,prerenderManifest:k,routerServerContext:N,isOnDemandRevalidate:P,revalidateOnlyGenerated:T,resolvedPathname:$,clientReferenceManifest:q,serverActionsManifest:j}=y,I=(0,l.normalizeAppPath)(b),S=!!(k.dynamicRoutes[I]||k.routes[$]),_=async()=>((null==N?void 0:N.render404)?await N.render404(e,t,E,!1):t.end("This page could not be found"),null);if(S&&!C){let e=!!k.routes[$],t=k.dynamicRoutes[I];if(t&&!1===t.fallback&&!e){if(A.experimental.adapterPath)return await _();throw new x.NoFallbackError}}let O=null;!S||D.isDev||C||(O="/index"===(O=$)?"/":O);let M=!0===D.isDev||!S,H=S&&!M;j&&q&&(0,i.setReferenceManifestsSingleton)({page:b,clientReferenceManifest:q,serverActionsManifest:j,serverModuleMap:(0,o.createServerModuleMap)({serverActionsManifest:j})});let U=e.method||"GET",L=(0,n.getTracer)(),F=L.getActiveScopeSpan(),K={params:w,prerenderManifest:k,renderOpts:{experimental:{authInterrupts:!!A.experimental.authInterrupts},cacheComponents:!!A.cacheComponents,supportsDynamicResponse:M,incrementalCache:(0,s.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:A.cacheLife,waitUntil:r.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,a,r)=>D.onRequestError(e,t,r,N)},sharedContext:{buildId:R}},z=new d.NodeNextRequest(e),B=new d.NodeNextResponse(t),G=p.NextRequestAdapter.fromNodeNextRequest(z,(0,p.signalFromNodeResponse)(t));try{let i=async e=>D.handle(G,K).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let a=L.getRootSpanAttributes();if(!a)return;if(a.get("next.span_type")!==c.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${a.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let r=a.get("next.route");if(r){let t=`${U} ${r}`;e.setAttributes({"next.route":r,"http.route":r,"next.span_name":t}),e.updateName(t)}else e.updateName(`${U} ${b}`)}),o=!!(0,s.getRequestMeta)(e,"minimalMode"),l=async s=>{var n,l;let d=async({previousCacheEntry:a})=>{try{if(!o&&P&&T&&!a)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let n=await i(s);e.fetchMetrics=K.renderOpts.fetchMetrics;let l=K.renderOpts.pendingWaitUntil;l&&r.waitUntil&&(r.waitUntil(l),l=void 0);let d=K.renderOpts.collectedTags;if(!S)return await (0,m.sendResponse)(z,B,n,K.renderOpts.pendingWaitUntil),null;{let e=await n.blob(),t=(0,f.toNodeOutgoingHttpHeaders)(n.headers);d&&(t[v.NEXT_CACHE_TAGS_HEADER]=d),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let a=void 0!==K.renderOpts.collectedRevalidate&&!(K.renderOpts.collectedRevalidate>=v.INFINITE_CACHE)&&K.renderOpts.collectedRevalidate,r=void 0===K.renderOpts.collectedExpire||K.renderOpts.collectedExpire>=v.INFINITE_CACHE?void 0:K.renderOpts.collectedExpire;return{value:{kind:h.CachedRouteKind.APP_ROUTE,status:n.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:a,expire:r}}}}catch(t){throw(null==a?void 0:a.isStale)&&await D.onRequestError(e,t,{routerKind:"App Router",routePath:b,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:H,isOnDemandRevalidate:P})},N),t}},p=await D.handleResponse({req:e,nextConfig:A,cacheKey:O,routeKind:a.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:k,isRoutePPREnabled:!1,isOnDemandRevalidate:P,revalidateOnlyGenerated:T,responseGenerator:d,waitUntil:r.waitUntil,isMinimalMode:o});if(!S)return null;if((null==p||null==(n=p.value)?void 0:n.kind)!==h.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==p||null==(l=p.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});o||t.setHeader("x-nextjs-cache",P?"REVALIDATED":p.isMiss?"MISS":p.isStale?"STALE":"HIT"),C&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let c=(0,f.fromNodeOutgoingHttpHeaders)(p.value.headers);return o&&S||c.delete(v.NEXT_CACHE_TAGS_HEADER),!p.cacheControl||t.getHeader("Cache-Control")||c.get("Cache-Control")||c.set("Cache-Control",(0,g.getCacheControlHeader)(p.cacheControl)),await (0,m.sendResponse)(z,B,new Response(p.value.body,{headers:c,status:p.value.status||200})),null};F?await l(F):await L.withPropagatedContext(e.headers,()=>L.trace(c.BaseServerSpan.handleRequest,{spanName:`${U} ${b}`,kind:n.SpanKind.SERVER,attributes:{"http.method":U,"http.target":e.url}},l))}catch(t){if(t instanceof x.NoFallbackError||await D.onRequestError(e,t,{routerKind:"App Router",routePath:I,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:H,isOnDemandRevalidate:P})}),S)throw t;return await (0,m.sendResponse)(z,B,new Response(null,{status:500})),null}}e.s(["handler",()=>j,"patchFetch",()=>q,"routeModule",()=>D,"serverHooks",()=>$,"workAsyncStorage",()=>P,"workUnitAsyncStorage",()=>T],90132)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__ddb58a6e._.js.map