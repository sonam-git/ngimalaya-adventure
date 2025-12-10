module.exports=[70406,(e,t,a)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},93695,(e,t,a)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},18622,(e,t,a)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,a)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,a)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,a)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},24361,(e,t,a)=>{t.exports=e.x("util",()=>require("util"))},14747,(e,t,a)=>{t.exports=e.x("path",()=>require("path"))},90947,e=>{"use strict";function t(e){if(!e)return"";let t=e.replace(/[^\d+]/g,"").replace(/^\+?1?/,"");return 10===t.length?`${t.slice(0,3)}-${t.slice(3,6)}-${t.slice(6)}`:11===t.length&&t.startsWith("1")?(t=t.slice(1),`${t.slice(0,3)}-${t.slice(3,6)}-${t.slice(6)}`):t.length>10?e.trim():t||e}e.s(["formatPhoneNumber",()=>t])},8298,e=>{"use strict";var t=e.i(47909),a=e.i(74017),r=e.i(96250),i=e.i(59756),n=e.i(61916),s=e.i(14444),o=e.i(37092),l=e.i(69741),d=e.i(16795),c=e.i(87718),p=e.i(95169),u=e.i(47587),m=e.i(66012),x=e.i(70101),f=e.i(26937),h=e.i(10372),g=e.i(93695);e.i(52474);var v=e.i(220),b=e.i(89171),y=e.i(44648),R=e.i(90947);y.default.setApiKey(process.env.SENDGRID_API_KEY||"");let w=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,E=["tempmail.com","throwaway.email","guerrillamail.com","mailinator.com","10minutemail.com","trashmail.com","temp-mail.org","yopmail.com","sharklasers.com","maildrop.cc","getnada.com","fakeinbox.com","spamgourmet.com","tempinbox.com","dispostable.com","burnermail.io"],A=[/<script/i,/javascript:/i,/on\w+=/i,/<iframe/i,/eval\(/i,/onclick/i,/onerror/i,/data:text\/html/i,/<object/i,/<embed/i,/vbscript:/i],N=new Map;function C(e){let t=e.replace(/<[^>]*>/g,"");for(let e of A)if(e.test(t))throw Error("Suspicious content detected");return t.trim()}async function q(e){try{let t,a,r=e.headers.get("x-forwarded-for")||e.headers.get("x-real-ip")||"unknown";if(t=Date.now(),(a=N.get(r))&&!(t-a.timestamp>36e5)?a.count>=5||(a.count++,!1):(N.set(r,{count:1,timestamp:t}),!1))return b.NextResponse.json({error:"Too many requests. Please try again later."},{status:429});let i=await e.json();if(i.website)return console.log("Bot detected via honeypot"),b.NextResponse.json({success:!0});if(!i.fullName||!i.email||!i.subject||!i.message)return b.NextResponse.json({error:"Missing required fields"},{status:400});if(!function(e){if(!w.test(e))return!1;let t=e.split("@")[1]?.toLowerCase();return!E.includes(t)}(i.email))return b.NextResponse.json({error:"Invalid or disposable email address"},{status:400});let n={fullName:C(i.fullName),email:C(i.email),phone:i.phone?(0,R.formatPhoneNumber)(C(i.phone)):"",subject:C(i.subject),message:C(i.message)},s={"General Inquiry":"📋","Trek Information":"🏔️","Booking Assistance":"📅","Group Trek Planning":"👥","Equipment Rental":"🎒","Travel Insurance":"🛡️","Custom Itinerary":"🗺️","Safety & Preparation":"⚠️",Other:"💬"}[n.subject]||"💬",o={to:process.env.NGIMALAYA_EMAIL||"ngiman81@gmail.com",from:{email:process.env.NGIMALAYA_EMAIL||"ngiman81@gmail.com",name:"Ngimalaya Adventure Inquiry System"},replyTo:n.email,subject:`${s} Inquiry: ${n.subject} - ${n.fullName}`,html:`
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .section { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 20px; }
            .section-title { color: #4facfe; font-size: 18px; font-weight: bold; margin-bottom: 15px; border-bottom: 2px solid #4facfe; padding-bottom: 5px; }
            .field { margin-bottom: 12px; }
            .label { font-weight: bold; color: #555; display: inline-block; min-width: 150px; }
            .value { color: #333; }
            .subject-badge { display: inline-block; background: #4facfe; color: white; padding: 8px 16px; border-radius: 20px; font-weight: bold; margin: 10px 0; }
            .message-box { background: #f8f9fa; padding: 20px; border-left: 4px solid #4facfe; margin: 15px 0; white-space: pre-wrap; line-height: 1.8; }
            .priority { background: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin: 15px 0; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            .action-buttons { margin: 20px 0; }
            .btn { display: inline-block; padding: 12px 24px; background: #4facfe; color: white; text-decoration: none; border-radius: 6px; margin: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>${s} New Inquiry Received</h1>
              <p>Received: ${new Date().toLocaleString("en-US",{timeZone:"Asia/Kathmandu"})} NPT</p>
            </div>
            
            <div class="content">
              <div class="section">
                <div class="section-title">👤 Contact Information</div>
                <div class="field"><span class="label">Name:</span> <span class="value">${n.fullName}</span></div>
                <div class="field"><span class="label">Email:</span> <span class="value"><a href="mailto:${n.email}">${n.email}</a></span></div>
                ${n.phone?`<div class="field"><span class="label">Phone:</span> <span class="value">${n.phone}</span></div>`:""}
              </div>
              
              <div class="section">
                <div class="section-title">📌 Inquiry Details</div>
                <div class="field">
                  <span class="label">Category:</span><br>
                  <span class="subject-badge">${n.subject}</span>
                </div>
              </div>
              
              <div class="section">
                <div class="section-title">💬 Message</div>
                <div class="message-box">${n.message}</div>
              </div>
              
              <div class="priority">
                <strong>⚠️ Action Required:</strong> Please respond to this inquiry within 24 hours to maintain excellent customer service.
              </div>
              
              <div class="action-buttons">
                <a href="mailto:${n.email}" class="btn">Reply to Customer</a>
              </div>
              
              <div class="footer">
                <p>This email was sent from Ngimalaya Adventure inquiry system</p>
                <p>IP Address: ${r}</p>
                <p style="margin-top: 10px; font-size: 10px; color: #999;">
                  Security: Email validated, Content sanitized, Rate limited
                </p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,text:`
New Inquiry Received

Contact Information:
- Name: ${n.fullName}
- Email: ${n.email}
${n.phone?`- Phone: ${n.phone}`:""}

Inquiry Details:
- Category: ${n.subject}

Message:
${n.message}

Received: ${new Date().toLocaleString()}
IP Address: ${r}

Please respond within 24 hours.
      `};return await y.default.send(o),b.NextResponse.json({success:!0,message:"Inquiry submitted successfully"})}catch(e){if(console.error("Inquiry API Error:",e),e instanceof Error&&"Suspicious content detected"===e.message)return b.NextResponse.json({error:"Invalid input detected"},{status:400});return b.NextResponse.json({error:"Failed to submit inquiry. Please try again."},{status:500})}}e.s(["POST",()=>q],70015);var I=e.i(70015);let P=new t.AppRouteRouteModule({definition:{kind:a.RouteKind.APP_ROUTE,page:"/api/inquiry/route",pathname:"/api/inquiry",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/app/api/inquiry/route.ts",nextConfigOutput:"",userland:I}),{workAsyncStorage:k,workUnitAsyncStorage:$,serverHooks:j}=P;function T(){return(0,r.patchFetch)({workAsyncStorage:k,workUnitAsyncStorage:$})}async function S(e,t,r){P.isDev&&(0,i.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let b="/api/inquiry/route";b=b.replace(/\/index$/,"")||"/";let y=await P.prepare(e,t,{srcPage:b,multiZoneDraftMode:!1});if(!y)return t.statusCode=400,t.end("Bad Request"),null==r.waitUntil||r.waitUntil.call(r,Promise.resolve()),null;let{buildId:R,params:w,nextConfig:E,parsedUrl:A,isDraftMode:N,prerenderManifest:C,routerServerContext:q,isOnDemandRevalidate:I,revalidateOnlyGenerated:k,resolvedPathname:$,clientReferenceManifest:j,serverActionsManifest:T}=y,S=(0,l.normalizeAppPath)(b),_=!!(C.dynamicRoutes[S]||C.routes[$]),M=async()=>((null==q?void 0:q.render404)?await q.render404(e,t,A,!1):t.end("This page could not be found"),null);if(_&&!N){let e=!!C.routes[$],t=C.dynamicRoutes[S];if(t&&!1===t.fallback&&!e){if(E.experimental.adapterPath)return await M();throw new g.NoFallbackError}}let O=null;!_||P.isDev||N||(O="/index"===(O=$)?"/":O);let D=!0===P.isDev||!_,H=_&&!D;T&&j&&(0,s.setReferenceManifestsSingleton)({page:b,clientReferenceManifest:j,serverActionsManifest:T,serverModuleMap:(0,o.createServerModuleMap)({serverActionsManifest:T})});let U=e.method||"GET",L=(0,n.getTracer)(),K=L.getActiveScopeSpan(),F={params:w,prerenderManifest:C,renderOpts:{experimental:{authInterrupts:!!E.experimental.authInterrupts},cacheComponents:!!E.cacheComponents,supportsDynamicResponse:D,incrementalCache:(0,i.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:E.cacheLife,waitUntil:r.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,a,r)=>P.onRequestError(e,t,r,q)},sharedContext:{buildId:R}},z=new d.NodeNextRequest(e),G=new d.NodeNextResponse(t),B=c.NextRequestAdapter.fromNodeNextRequest(z,(0,c.signalFromNodeResponse)(t));try{let s=async e=>P.handle(B,F).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let a=L.getRootSpanAttributes();if(!a)return;if(a.get("next.span_type")!==p.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${a.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let r=a.get("next.route");if(r){let t=`${U} ${r}`;e.setAttributes({"next.route":r,"http.route":r,"next.span_name":t}),e.updateName(t)}else e.updateName(`${U} ${b}`)}),o=!!(0,i.getRequestMeta)(e,"minimalMode"),l=async i=>{var n,l;let d=async({previousCacheEntry:a})=>{try{if(!o&&I&&k&&!a)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let n=await s(i);e.fetchMetrics=F.renderOpts.fetchMetrics;let l=F.renderOpts.pendingWaitUntil;l&&r.waitUntil&&(r.waitUntil(l),l=void 0);let d=F.renderOpts.collectedTags;if(!_)return await (0,m.sendResponse)(z,G,n,F.renderOpts.pendingWaitUntil),null;{let e=await n.blob(),t=(0,x.toNodeOutgoingHttpHeaders)(n.headers);d&&(t[h.NEXT_CACHE_TAGS_HEADER]=d),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let a=void 0!==F.renderOpts.collectedRevalidate&&!(F.renderOpts.collectedRevalidate>=h.INFINITE_CACHE)&&F.renderOpts.collectedRevalidate,r=void 0===F.renderOpts.collectedExpire||F.renderOpts.collectedExpire>=h.INFINITE_CACHE?void 0:F.renderOpts.collectedExpire;return{value:{kind:v.CachedRouteKind.APP_ROUTE,status:n.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:a,expire:r}}}}catch(t){throw(null==a?void 0:a.isStale)&&await P.onRequestError(e,t,{routerKind:"App Router",routePath:b,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:H,isOnDemandRevalidate:I})},q),t}},c=await P.handleResponse({req:e,nextConfig:E,cacheKey:O,routeKind:a.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:C,isRoutePPREnabled:!1,isOnDemandRevalidate:I,revalidateOnlyGenerated:k,responseGenerator:d,waitUntil:r.waitUntil,isMinimalMode:o});if(!_)return null;if((null==c||null==(n=c.value)?void 0:n.kind)!==v.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==c||null==(l=c.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});o||t.setHeader("x-nextjs-cache",I?"REVALIDATED":c.isMiss?"MISS":c.isStale?"STALE":"HIT"),N&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let p=(0,x.fromNodeOutgoingHttpHeaders)(c.value.headers);return o&&_||p.delete(h.NEXT_CACHE_TAGS_HEADER),!c.cacheControl||t.getHeader("Cache-Control")||p.get("Cache-Control")||p.set("Cache-Control",(0,f.getCacheControlHeader)(c.cacheControl)),await (0,m.sendResponse)(z,G,new Response(c.value.body,{headers:p,status:c.value.status||200})),null};K?await l(K):await L.withPropagatedContext(e.headers,()=>L.trace(p.BaseServerSpan.handleRequest,{spanName:`${U} ${b}`,kind:n.SpanKind.SERVER,attributes:{"http.method":U,"http.target":e.url}},l))}catch(t){if(t instanceof g.NoFallbackError||await P.onRequestError(e,t,{routerKind:"App Router",routePath:S,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:H,isOnDemandRevalidate:I})}),_)throw t;return await (0,m.sendResponse)(z,G,new Response(null,{status:500})),null}}e.s(["handler",()=>S,"patchFetch",()=>T,"routeModule",()=>P,"serverHooks",()=>j,"workAsyncStorage",()=>k,"workUnitAsyncStorage",()=>$],8298)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__da8a21d0._.js.map