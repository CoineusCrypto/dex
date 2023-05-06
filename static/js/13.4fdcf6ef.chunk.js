(this["webpackJsonp@uniswap/interface"]=this["webpackJsonp@uniswap/interface"]||[]).push([[13],{1859:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var i=t(157);function r(){return Object(i.d)(i.b.nftGraphql)===i.a.Enabled}},1891:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var i,r=t(35),o=t(118),a=t(1),c=t(33);function l(e,n){var t,i,r,o,a,c,l,d,s,u,m,p,f,h,g,j,b,v,x,O=null===e||void 0===e||null===(t=e.markets)||void 0===t?void 0:t[0];if(!n&&!(null===e||void 0===e||null===(i=e.nftContracts)||void 0===i||null===(r=i[0])||void 0===r?void 0:r.address))return{};var w={};return(null===e||void 0===e?void 0:e.traits)&&(null===e||void 0===e||e.traits.forEach((function(e){e.name&&e.stats&&(w[e.name]=e.stats.map((function(e){return{trait_type:e.name,trait_value:e.value,trait_count:e.assets}})))}))),{address:null!==(o=null!==n&&void 0!==n?n:null===e||void 0===e||null===(a=e.nftContracts)||void 0===a||null===(c=a[0])||void 0===c?void 0:c.address)&&void 0!==o?o:"",isVerified:null===e||void 0===e?void 0:e.isVerified,name:null===e||void 0===e?void 0:e.name,description:null===e||void 0===e?void 0:e.description,standard:null===e||void 0===e||null===(l=e.nftContracts)||void 0===l||null===(d=l[0])||void 0===d?void 0:d.standard,bannerImageUrl:null===e||void 0===e||null===(s=e.bannerImage)||void 0===s?void 0:s.url,stats:{num_owners:null===O||void 0===O?void 0:O.owners,floor_price:null===O||void 0===O||null===(u=O.floorPrice)||void 0===u?void 0:u.value,one_day_volume:null===O||void 0===O||null===(m=O.volume)||void 0===m?void 0:m.value,one_day_change:null===O||void 0===O||null===(p=O.volumePercentChange)||void 0===p?void 0:p.value,one_day_floor_change:null===O||void 0===O||null===(f=O.floorPricePercentChange)||void 0===f?void 0:f.value,banner_image_url:null===e||void 0===e||null===(h=e.bannerImage)||void 0===h?void 0:h.url,total_supply:null===e||void 0===e?void 0:e.numAssets,total_listings:null===O||void 0===O||null===(g=O.listings)||void 0===g?void 0:g.value,total_volume:null===O||void 0===O||null===(j=O.totalVolume)||void 0===j?void 0:j.value},traits:w,marketplaceCount:null===O||void 0===O||null===(b=O.marketplaces)||void 0===b?void 0:b.map((function(e){var n,t,i,r;return{marketplace:null!==(n=null===(t=e.marketplace)||void 0===t?void 0:t.toLowerCase())&&void 0!==n?n:"",count:null!==(i=e.listings)&&void 0!==i?i:0,floorPrice:null!==(r=e.floorPrice)&&void 0!==r?r:0}})),imageUrl:null!==(v=null===e||void 0===e||null===(x=e.image)||void 0===x?void 0:x.url)&&void 0!==v?v:"",twitterUrl:null===e||void 0===e?void 0:e.twitterName,instagram:null===e||void 0===e?void 0:e.instagramName,discordUrl:null===e||void 0===e?void 0:e.discordUrl,externalUrl:null===e||void 0===e?void 0:e.homepageUrl,rarityVerified:!1}}function d(e,n){var t,i,r,o=Object(c.l)({variables:{addresses:e},skip:n}),d=o.data,s=o.loading,u=null===d||void 0===d||null===(t=d.nftCollections)||void 0===t||null===(i=t.edges)||void 0===i||null===(r=i[0])||void 0===r?void 0:r.node;return Object(a.useMemo)((function(){return{data:l(u,e),loading:s}}),[e,s,u])}Object(o.a)(i||(i=Object(r.a)(["\n  query Collection($addresses: [String!]!) {\n    nftCollections(filter: { addresses: $addresses }) {\n      edges {\n        cursor\n        node {\n          bannerImage {\n            url\n          }\n          collectionId\n          description\n          discordUrl\n          homepageUrl\n          image {\n            url\n          }\n          instagramName\n          isVerified\n          name\n          numAssets\n          twitterName\n          nftContracts {\n            address\n            chain\n            name\n            standard\n            symbol\n            totalSupply\n          }\n          traits {\n            name\n            values\n            stats {\n              name\n              value\n              assets\n              listings\n            }\n          }\n          markets(currencies: ETH) {\n            floorPrice {\n              currency\n              value\n            }\n            owners\n            totalVolume {\n              value\n              currency\n            }\n            listings {\n              value\n            }\n            volume(duration: DAY) {\n              value\n              currency\n            }\n            volumePercentChange(duration: DAY) {\n              value\n              currency\n            }\n            floorPricePercentChange(duration: DAY) {\n              value\n              currency\n            }\n            marketplaces {\n              marketplace\n              listings\n              floorPrice\n            }\n          }\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n        hasPreviousPage\n        startCursor\n      }\n    }\n  }\n"])))},2010:function(e,n,t){},2072:function(e,n,t){"use strict";t.r(n);var i,r=t(2),o=t(38),a=t(26),c=t(8),l=t(1859),d=t(33),s=t(35),u=t(118),m=t(1);function p(e,n){var t,i=Object(l.a)(),r=Object(d.y)({variables:{size:e,timePeriod:n},skip:!i}),o=r.data,a=r.loading,c=r.error;return{data:Object(m.useMemo)((function(){var e,n;return null===o||void 0===o||null===(e=o.topCollections)||void 0===e||null===(n=e.edges)||void 0===n?void 0:n.map((function(e){var n,t,i,r,o,a,c,l,d,s,u,m,p,f,h,g,j,b,v,x,O,w,y,C,k,I,z,P,S,T,H,E,F,N=null===e||void 0===e?void 0:e.node;return{name:N.name,address:null===(n=N.nftContracts)||void 0===n||null===(t=n[0])||void 0===t?void 0:t.address,imageUrl:null===(i=N.image)||void 0===i?void 0:i.url,bannerImageUrl:null===(r=N.bannerImage)||void 0===r?void 0:r.url,isVerified:N.isVerified,volume:null===(o=N.markets)||void 0===o||null===(a=o[0])||void 0===a||null===(c=a.volume)||void 0===c?void 0:c.value,volumeChange:null===(l=N.markets)||void 0===l||null===(d=l[0])||void 0===d||null===(s=d.volumePercentChange)||void 0===s?void 0:s.value,floor:null===(u=N.markets)||void 0===u||null===(m=u[0])||void 0===m||null===(p=m.floorPrice)||void 0===p?void 0:p.value,floorChange:null===(f=N.markets)||void 0===f||null===(h=f[0])||void 0===h||null===(g=h.floorPricePercentChange)||void 0===g?void 0:g.value,marketCap:null===(j=N.markets)||void 0===j||null===(b=j[0])||void 0===b||null===(v=b.totalVolume)||void 0===v?void 0:v.value,percentListed:(null!==(x=null===(O=N.markets)||void 0===O||null===(w=O[0])||void 0===w||null===(y=w.listings)||void 0===y?void 0:y.value)&&void 0!==x?x:0)/(null!==(C=null===(k=N.nftContracts)||void 0===k||null===(I=k[0])||void 0===I?void 0:I.totalSupply)&&void 0!==C?C:1),owners:null===(z=N.markets)||void 0===z||null===(P=z[0])||void 0===P?void 0:P.owners,sales:null===(S=N.markets)||void 0===S||null===(T=S[0])||void 0===T||null===(H=T.sales)||void 0===H?void 0:H.value,totalSupply:null===(E=N.nftContracts)||void 0===E||null===(F=E[0])||void 0===F?void 0:F.totalSupply}}))}),[null===o||void 0===o||null===(t=o.topCollections)||void 0===t?void 0:t.edges]),loading:a,error:c}}Object(u.a)(i||(i=Object(s.a)(["\n  query TrendingCollections($size: Int, $timePeriod: HistoryDuration) {\n    topCollections(first: $size, duration: $timePeriod) {\n      edges {\n        node {\n          name\n          nftContracts {\n            address\n            totalSupply\n          }\n          image {\n            url\n          }\n          bannerImage {\n            url\n          }\n          isVerified\n          markets(currencies: ETH) {\n            floorPrice {\n              value\n            }\n            owners\n            totalVolume {\n              value\n            }\n            volume(duration: $timePeriod) {\n              value\n            }\n            volumePercentChange(duration: $timePeriod) {\n              value\n            }\n            floorPricePercentChange(duration: $timePeriod) {\n              value\n            }\n            sales {\n              value\n            }\n            listings {\n              value\n            }\n          }\n        }\n      }\n    }\n  }\n"])));var f,h,g=t(474),j=t(47),b=t(171),v=t(525),x=t(100),O=t(104),w=t(4),y=t.n(w),C=t(16),k=t(177),I=t(224),z=t(0),P=r.default.div.withConfig({componentId:"sc-oqttp6-0"})(["display:flex;width:100%;justify-content:flex-end;"]),S=r.default.div.withConfig({componentId:"sc-oqttp6-1"})(["position:relative;width:100%;overflow-x:hidden;max-width:100%;height:390px;@media only screen and (min-width:","){max-width:600px;}"],(function(e){var n=e.theme;return"".concat(n.breakpoint.md,"px")})),T=Object(r.default)(I.a.div).withConfig({componentId:"sc-oqttp6-2"})(["display:flex;justify-content:center;padding:4px 12px 32px;position:absolute;will-change:transform;width:calc(100%);height:calc(100%);@media screen and (min-width:","px){padding:4px 32px 32px;}"],(function(e){return e.theme.breakpoint.md})),H=r.default.div.withConfig({componentId:"sc-oqttp6-3"})(["align-items:center;color:",";cursor:pointer;display:none;user-select:none;height:calc(100%);padding:4px 0 32px;@media only screen and (min-width:","){display:flex;}:hover{opacity:",";}"],(function(e){return e.theme.textPrimary}),(function(e){var n=e.theme;return"".concat(n.breakpoint.sm,"px")}),(function(e){return e.theme.opacity.hover})),E=800,F=function(e){var n=e.children,t=e.activeIndex,i=e.toggleNextSlide,r=Object(m.useCallback)((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.length;return Object(b.e)(e,t)}),[n]),o=Object(m.useCallback)((function(e,n,t){return Object(b.f)(e,n,t,r)}),[r]),a=Object(I.useSprings)(n.length,(function(e){return{x:(e<n.length-1?e:-1)*E}})),l=Object(c.a)(a,2),d=l[0],s=l[1],u=Object(m.useRef)([0,1]),p=Object(m.useCallback)((function(e,t){var i=r(Math.floor(e/E)%n.length),a=t<0?n.length-2:1;s((function(r){var c=o(r,i,a),l=o(r,u.current[0],u.current[1]),d=Object(b.g)(i,a,c,n.length,e);return{x:-e%(E*n.length)+E*d,immediate:t<0?l>c:l<c,config:{tension:250,friction:30}}})),u.current=[i,a]}),[r,o,s,n.length]),f=Object(m.useRef)(0);Object(m.useEffect)((function(){p(t*E,f.current)}),[t,p]);var h=Object(m.useCallback)((function(e){f.current=e,i(e)}),[i]);return Object(m.useEffect)((function(){var e=setInterval(Object(C.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(1);case 1:case"end":return e.stop()}}),e)}))),7e3);return function(){clearInterval(e)}}),[h,t]),Object(z.jsxs)(P,{children:[Object(z.jsx)(H,{onClick:function(){return h(-1)},children:Object(z.jsx)(k.o,{width:"16px",height:"16px"})}),Object(z.jsx)(S,{children:d.map((function(e,t){var i=e.x;return Object(z.jsx)(T,{style:{x:i},children:n[t]},t)}))}),Object(z.jsx)(H,{onClick:function(){return h(1)},children:Object(z.jsx)(k.p,{width:"16px",height:"16px"})})]})},N=function(e){var n=e.children;return Object(z.jsx)(F,{activeIndex:0,toggleNextSlide:function(){},children:[n]})},_=t(21),D=t(5),V=t(52),M=t(187),A=t(179),B=t(1891),U=t(606),L=r.default.div.withConfig({componentId:"sc-1j367rv-0"})(["width:100%;position:relative;border-radius:21px;cursor:pointer;border:1px solid transparent;transition-property:border-color;transition-duration:",";transition-timing-function:",";:hover{border:1px solid ",";}::after{content:'';opacity:0;position:absolute;top:0;left:0;right:0;bottom:0;border-radius:21px;z-index:-1;box-shadow:",";transition-property:opacity;transition-duration:",";transition-timing-function:",";}:hover::after{opacity:1;}"],(function(e){return e.theme.transition.duration.fast}),(function(e){return e.theme.transition.timing.inOut}),(function(e){return e.theme.backgroundOutline}),(function(e){return e.theme.deepShadow}),(function(e){return e.theme.transition.duration.fast}),(function(e){return e.theme.transition.timing.inOut})),R=r.default.div.withConfig({componentId:"sc-1j367rv-1"})(["position:relative;background-image:",";background-size:cover;background-position:center;"],(function(e){var n=e.src;return"url(".concat(n,")")})),q=r.default.div.withConfig({componentId:"sc-1j367rv-2"})(["position:relative;animation:"," 1.5s infinite;animation-fill-mode:both;background:linear-gradient( to left,"," 25%,"," 50%,"," 75% );will-change:background-position;background-size:400%;"],M.c,(function(e){return e.theme.backgroundInteractive}),(function(e){return e.theme.backgroundOutline}),(function(e){return e.theme.backgroundInteractive})),G=r.default.div.withConfig({componentId:"sc-1j367rv-3"})(["position:relative;display:flex;flex:1;align-items:center;flex-direction:column;gap:8px;height:202px;justify-content:center;padding:0 40px;z-index:1;"]),W=r.default.div.withConfig({componentId:"sc-1j367rv-4"})(["display:inline;vertical-align:text-bottom;margin-left:2px;"]),$=r.default.div.withConfig({componentId:"sc-1j367rv-5"})(["display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-align:center;max-height:56px;"]),Y=Object(r.default)(A.a).withConfig({componentId:"sc-1j367rv-6"})(["width:50%;"]),X=r.default.div.withConfig({componentId:"sc-1j367rv-7"})(["background:linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.6) 100%,rgba(0,0,0,0.08));bottom:0px;left:0px;position:absolute;right:0px;top:0px;z-index:0;@supports (-moz-appearance:none){bottom:-1px;}"]),Q=r.default.img.withConfig({componentId:"sc-1j367rv-8"})(["width:86px;height:86px;background:",";border:2px solid ",";border-radius:100px;"],(function(e){return e.theme.accentTextLightPrimary}),(function(e){return e.theme.accentTextLightPrimary})),J=r.default.div.withConfig({componentId:"sc-1j367rv-9"})(["width:86px;height:86px;border-radius:100px;animation:"," 1.5s infinite;animation-fill-mode:both;background:linear-gradient( to left,"," 25%,"," 50%,"," 75% );will-change:background-position;background-size:400%;"],M.c,(function(e){return e.theme.backgroundInteractive}),(function(e){return e.theme.backgroundOutline}),(function(e){return e.theme.backgroundInteractive})),Z=Object(r.default)(A.a).withConfig({componentId:"sc-1j367rv-10"})(["width:50px;"]),K=r.default.div.withConfig({componentId:"sc-1j367rv-11"})(["display:flex;align-items:center;gap:6px;"]),ee=r.default.div.withConfig({componentId:"sc-1j367rv-12"})([""]),ne=r.default.div.withConfig({componentId:"sc-1j367rv-13"})(["display:grid;flex:1;gap:8px;grid-template-columns:auto auto auto;padding:16px 16px 20px;"]),te=r.default.img.withConfig({componentId:"sc-1j367rv-14"})(["width:20px;height:20px;"]),ie=r.default.div.withConfig({componentId:"sc-1j367rv-15"})(["display:flex;flex-direction:column;background-color:",";border:1px solid ",";border-radius:20px;overflow:hidden;height:100%;",":nth-child(3n-1),",":nth-child(3n-1){justify-self:center;}",":nth-child(3n),",":nth-child(3n){justify-self:right;}@media (max-width:","px) or ((min-width:","px) and (max-width:880px)){","{display:none;}","{justify-self:left !important;}","{padding:0 20px;}}"],(function(e){return e.theme.backgroundSurface}),(function(e){return e.theme.backgroundOutline}),K,Z,K,Z,(function(e){return e.theme.breakpoint.xs}),(function(e){return e.theme.breakpoint.sm}),ee,K,G),re=function(e){var n=e.marketplace,t=e.floorInEth,i=e.listings;return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)(K,{children:[Object(z.jsx)(te,{src:"/nft/svgs/marketplaces/".concat(n.toLowerCase(),"-grey.svg"),alt:"".concat(n," icon")}),Object(z.jsx)(ee,{children:Object(z.jsx)(U.a.BodySmall,{color:"textSecondary",children:n})})]}),Object(z.jsx)(K,{children:Object(z.jsx)(U.a.BodySmall,{color:"textSecondary",children:Number(t)>0?"".concat(Object(V.d)(t,V.a.NFTTokenFloorPriceTrailingZeros)," ETH"):"-"})}),Object(z.jsx)(K,{children:Object(z.jsx)(U.a.BodySmall,{color:"textSecondary",children:Number(i)>0?i:"None"})})]})},oe=[j.g.Opensea,j.g.X2Y2,j.g.LooksRare],ae=(f={},Object(D.a)(f,j.g.Opensea,"OpenSea"),Object(D.a)(f,j.g.X2Y2,"X2Y2"),Object(D.a)(f,j.g.LooksRare,"LooksRare"),f),ce=function(e){var n,t,i=e.collection,r=e.onClick,o=Object(B.a)(null!==(n=i.address)&&void 0!==n?n:""),a=o.data,c=o.loading,d=Object(l.a)();return c?Object(z.jsx)(ue,{}):Object(z.jsx)(L,{children:Object(z.jsxs)(ie,{onClick:r,children:[Object(z.jsx)(se,{collection:i}),Object(z.jsx)(ne,{children:Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)(K,{children:[Object(z.jsx)(te,{src:"/nft/svgs/marketplaces/uniswap-magenta.svg",alt:"Uniswap icon"}),Object(z.jsx)(ee,{children:Object(z.jsx)(U.a.SubHeaderSmall,{color:"userThemeColor",children:"Uniswap"})})]}),Object(z.jsx)(K,{children:i.floor&&Object(z.jsxs)(U.a.SubHeaderSmall,{color:"userThemeColor",children:[d?Object(b.h)(i.floor):Object(b.p)(i.floor.toString())," ","ETH Floor"]})}),Object(z.jsx)(K,{children:Object(z.jsxs)(U.a.SubHeaderSmall,{color:"userThemeColor",children:[null===(t=a.marketplaceCount)||void 0===t?void 0:t.reduce((function(e,n){return e+n.count}),0)," Listings"]})}),oe.map((function(e){var n,t=null===(n=a.marketplaceCount)||void 0===n?void 0:n.find((function(n){return n.marketplace===e}));return t?Object(z.jsx)(re,{marketplace:ae[e],listings:t.count,floorInEth:t.floorPrice},"CarouselCard-key-".concat(i.address,"-").concat(t.marketplace)):null}))]})})]})})},le=function(){return Object(z.jsx)(z.Fragment,{children:Object(_.a)(Array(12)).map((function(e){return Object(z.jsx)(Z,{},e)}))})},de=Object(r.default)(U.a.MediumHeader).withConfig({componentId:"sc-1j367rv-16"})(["display:inline;vertical-align:text-bottom;line-height:28px;"]),se=function(e){var n,t=e.collection;return Object(z.jsxs)(R,{src:null!==(n=t.bannerImageUrl)&&void 0!==n?n:"",children:[Object(z.jsxs)(G,{children:[Object(z.jsx)(Q,{src:t.imageUrl}),Object(z.jsxs)($,{children:[Object(z.jsx)(de,{color:"accentTextLightPrimary",fontWeight:"500",children:t.name}),t.isVerified&&Object(z.jsx)(W,{children:Object(z.jsx)(k.X,{width:"24px",height:"24px"})})]})]}),Object(z.jsx)(X,{})]})},ue=function(e){var n=e.collection;return Object(z.jsx)(L,{children:Object(z.jsxs)(ie,{children:[n?Object(z.jsx)(se,{collection:n}):Object(z.jsxs)(q,{children:[Object(z.jsxs)(G,{children:[Object(z.jsx)(J,{}),Object(z.jsx)(Y,{})]}),Object(z.jsx)(X,{})]}),Object(z.jsx)(ne,{children:Object(z.jsx)(le,{})})]})})},me=r.default.div.withConfig({componentId:"sc-1cwmkpz-0"})(["display:flex;justify-content:center;width:100%;padding-top:22px;position:relative;@media only screen and (min-width:","){padding:32px 16px;}"],(function(e){var n=e.theme;return"".concat(n.breakpoint.sm,"px")})),pe=r.default.div.withConfig({componentId:"sc-1cwmkpz-1"})(["position:absolute;top:-96px;left:0;right:0;bottom:0;"]),fe=Object(r.default)(pe).withConfig({componentId:"sc-1cwmkpz-2"})(["transform:translate3d(0,0,0) scaleY(1.1);background-image:",";filter:blur(62px);opacity:",";"],(function(e){return"url(".concat(e.backgroundImage,")")}),(function(e){return e.theme.darkMode?.3:.2})),he=Object(r.default)(pe).withConfig({componentId:"sc-1cwmkpz-3"})(["background:",";"],(function(e){var n=e.theme;return"linear-gradient(".concat(Object(O.a)(10,n.userThemeColor),", transparent)")})),ge=r.default.div.withConfig({componentId:"sc-1cwmkpz-4"})(["display:flex;flex-direction:row;width:100%;height:100%;gap:36px;max-width:1200px;justify-content:space-between;z-index:2;@media only screen and (max-width:","){flex-direction:column;height:100%;gap:14px;margin-top:4px;margin-bottom:6px;}"],(function(e){var n=e.theme;return"".concat(n.breakpoint.sm,"px")})),je=r.default.div.withConfig({componentId:"sc-1cwmkpz-5"})(["display:flex;max-width:500px;font-weight:500;font-size:72px;line-height:88px;align-self:center;flex-shrink:0;padding-bottom:32px;color:",";@media only screen and (max-width:","){font-size:48px;line-height:67px;}@media only screen and (max-width:","){font-size:36px;line-height:50px;}@media only screen and (max-width:","){line-height:43px;text-align:center;padding-bottom:16px;br{display:none;}}@media only screen and (max-width:550px){font-size:28px;line-height:34px;padding-bottom:0;br{display:unset;}}"],(function(e){return e.theme.textPrimary}),(function(e){var n=e.theme;return"".concat(n.breakpoint.lg,"px")}),(function(e){var n=e.theme;return"".concat(n.breakpoint.md,"px")}),(function(e){var n=e.theme;return"".concat(n.breakpoint.sm,"px")})),be=["0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb"],ve=function(){var e=Object(x.g)(),n=Object(l.a)(),t=Object(v.useQuery)(["trendingCollections"],(function(){return Object(g.h)({volumeType:"eth",timePeriod:j.j.OneDay,size:5+be.length})}),{refetchOnReconnect:!1,refetchOnWindowFocus:!1,refetchOnMount:!1}).data,i=p(5+be.length,d.c.Day).data,r=Object(m.useMemo)((function(){var e=n?i:t;return null===e||void 0===e?void 0:e.filter((function(e){return e.address&&!be.includes(e.address)})).slice(0,5)}),[t,i,n]),o=Object(m.useState)(0),a=Object(c.a)(o,2),s=a[0],u=a[1],f=Object(m.useCallback)((function(e){r&&u((function(n){return Object(b.e)(n+e,r.length)}))}),[r]),h=null===r||void 0===r?void 0:r[s];return Object(z.jsxs)(me,{children:[h?h.bannerImageUrl?Object(z.jsx)(fe,{backgroundImage:h.bannerImageUrl}):Object(z.jsx)(he,{}):null,Object(z.jsxs)(ge,{children:[Object(z.jsxs)(je,{children:["Better prices. ",Object(z.jsx)("br",{}),"More listings."]}),r?Object(z.jsx)(F,{activeIndex:s,toggleNextSlide:f,children:r.map((function(n){return Object(z.jsx)(ce,{collection:n,onClick:function(){return e("/nfts/collection/".concat(n.address))}},n.address)}))}):Object(z.jsx)(N,{children:Object(z.jsx)(ue,{})})]})]})},xe=t(3),Oe=t(426),we=t(11),ye=t(63),Ce=t(584),ke=t(127),Ie=t(192),ze=t(580),Pe=(t(360),t(714),r.default.div.withConfig({componentId:"sc-1qdt28z-0"})(["overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"])),Se=Object(r.default)(Pe).withConfig({componentId:"sc-1qdt28z-1"})(["display:flex;padding:14px 0px 14px 8px;align-items:center;"]),Te=Object(r.default)(Pe).withConfig({componentId:"sc-1qdt28z-2"})(["margin-left:8px;"]),He=Object(r.default)(we.x.SubHeader).withConfig({componentId:"sc-1qdt28z-3"})(["overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"]),Ee=Object(r.default)(we.x.SubHeaderSmall).withConfig({componentId:"sc-1qdt28z-4"})(["color:",";overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"],(function(e){var n=e.theme;return"".concat(n.textPrimary)})),Fe=r.default.div.withConfig({componentId:"sc-1qdt28z-5"})(["height:36px;width:36px;border-radius:36px;background:",";background-size:cover;background-position:center;flex-shrink:0;"],(function(e){var n=e.src,t=e.theme;return n?"url(".concat(n,")"):t.backgroundModule})),Ne=r.default.div.withConfig({componentId:"sc-1qdt28z-6"})(["display:flex;color:",";justify-content:flex-end;align-items:center;gap:2px;"],(function(e){var n=e.theme;return e.change>=0?n.accentSuccess:n.accentFailure})),_e=r.default.div.withConfig({componentId:"sc-1qdt28z-7"})(["display:flex;justify-content:flex-end;"]),De=function(e){var n=e.value,t=Object(Ie.i)();return Object(z.jsxs)(Se,{children:[Object(z.jsx)(Fe,{src:n.logo}),Object(z.jsx)(Te,{children:t?Object(z.jsx)(Ee,{children:n.name}):Object(z.jsx)(He,{children:n.name})}),n.isVerified&&Object(z.jsx)("span",{className:"rgw6ezo6 rgw6ez4sc rgw6ez32i rgw6ez1gr rgw6ez18s rgw6ez4tb",children:Object(z.jsx)(k.X,{})})]})},Ve=function(e){var n=e.value;return Object(z.jsx)("span",{children:n.value?Object(b.J)(n.value):"-"})},Me=function(e,n,t,i){return e===j.e.ETH?t:i&&t?i*(n?parseFloat(Object(ke.formatEther)(t)):t):void 0},Ae=function(e){var n=e.value,t=e.denomination,i=e.usdPrice,r=Object(l.a)(),o=Me(t,!r,n,i),a=o?t===j.e.ETH?r?Object(ze.a)(o.toString(),!1,!0,!1)+" ETH":Object(ze.f)(o.toString(),!0)+" ETH":Object(ze.a)(o,!0,!1,!0):"-",c=Object(Ie.i)()?we.x.BodySmall:we.x.BodyPrimary;return Object(z.jsx)(_e,{children:Object(z.jsx)(c,{children:n?a:"-"})})},Be=function(e){var n=e.value;return Object(z.jsx)(we.x.BodyPrimary,{children:n})},Ue=function(e){var n=e.value,t=e.denomination,i=e.usdPrice,r=Me(t,!1,n,i),o=r?t===j.e.ETH?Object(ze.a)(r.toString(),!1,!1,!0)+" ETH":Object(ze.a)(r,!0,!1,!0):"-";return Object(z.jsx)(_e,{children:Object(z.jsx)(we.x.BodyPrimary,{children:n?o:"-"})})},Le=function(e){var n=e.change,t=e.children,i=Object(Ie.i)()?we.x.Caption:we.x.BodyPrimary;return Object(z.jsxs)(Ne,{change:null!==n&&void 0!==n?n:0,children:[!n||n>0?Object(z.jsx)(k.R,{width:"20px",height:"20px"}):Object(z.jsx)(k.Q,{width:"20px",height:"20px"}),Object(z.jsx)(i,{color:"currentColor",children:t||"".concat(n?Math.abs(Math.round(n)):0,"%")})]})},Re=t(80),qe=t(19),Ge=t(643),We=t(2008),$e=t(163),Ye=(t(2010),"_1mor7vea rgw6ez5dj rgw6ez1dg rgw6ez7zp rgw6ez7yd"),Xe="rgw6ezvd rgw6ez5ov rgw6ez87x rgw6ez7yx",Qe="_1mor7ved rgw6eze9 rgw6ezc4 rgw6ezg0 rgw6ez52v rgw6ez33a rgw6ez2k1",Je=["columns","data","smallHiddenColumns","mediumHiddenColumns","largeHiddenColumns"],Ze=["headerGroups","visibleColumns"],Ke=r.default.div.withConfig({componentId:"sc-iwpsza-0"})(["display:flex;align-items:center;padding-left:24px;gap:12px;@media only screen and (max-width:","){padding-left:8px;}"],(function(e){var n=e.theme;return"".concat(n.breakpoint.sm,"px")})),en=r.default.tr.withConfig({componentId:"sc-iwpsza-1"})(["cursor:pointer;:hover{background:",";}:active{background:",";}"],(function(e){return e.theme.stateOverlayHover}),(function(e){return e.theme.stateOverlayPressed})),nn=r.default.tr.withConfig({componentId:"sc-iwpsza-2"})(["height:80px;"]),tn=r.default.th.withConfig({componentId:"sc-iwpsza-3"})(["",":hover{","}:active{","}"],(function(e){return!e.disabled&&"cursor: pointer;"}),(function(e){var n=e.theme;return!e.disabled&&"opacity: ".concat(n.opacity.hover,";")}),(function(e){var n=e.theme;return!e.disabled&&"opacity: ".concat(n.opacity.click,";")})),rn=r.default.div.withConfig({componentId:"sc-iwpsza-4"})(["display:flex;width:100%;justify-content:flex-end;align-items:center;"]),on=r.default.div.withConfig({componentId:"sc-iwpsza-5"})(["display:flex;margin-left:24px;gap:8px;align-items:center;"]),an=Object(r.default)(A.a).withConfig({componentId:"sc-iwpsza-6"})(["width:36px;height:36px;border-radius:36px;"]),cn=Object(r.default)(A.a).withConfig({componentId:"sc-iwpsza-7"})(["width:8px;height:16px;margin-right:12px;"]);function ln(e){var n=e.columns,t=e.data,i=e.smallHiddenColumns,c=e.mediumHiddenColumns,l=e.largeHiddenColumns,d=Object(Re.a)(e,Je),s=Object(r.useTheme)(),u=Object(qe.useWeb3React)().chainId,p=Object(Ge.a)().width,f=Object(Ie.i)(),g=Object(We.useTable)(Object(xe.a)({columns:n,data:t,initialState:{sortBy:[{desc:!0,id:h.Volume}]}},d),We.useSortBy),j=g.getTableProps,b=g.getTableBodyProps,v=g.headerGroups,O=g.rows,w=g.prepareRow,y=g.setHiddenColumns,C=g.visibleColumns,I=Object(x.g)();return Object(m.useEffect)((function(){p&&(p<=s.breakpoint.sm?y(i):p<=s.breakpoint.md?y(c):p<=s.breakpoint.lg?y(l):y([]))}),[p,y,n,i,c,l,s.breakpoint]),0===t.length?Object(z.jsx)(dn,Object(xe.a)({headerGroups:v,visibleColumns:C},j())):Object(z.jsx)(we.m,{children:Object(z.jsxs)("table",Object(xe.a)(Object(xe.a)({},j()),{},{className:Ye,children:[Object(z.jsx)("thead",{className:Xe,children:v.map((function(e){return Object(m.createElement)("tr",Object(xe.a)(Object(xe.a)({},e.getHeaderGroupProps()),{},{key:e.id}),e.headers.map((function(e,n){return Object(m.createElement)(tn,Object(xe.a)(Object(xe.a)({className:Qe},e.getHeaderProps(e.getSortByToggleProps())),{},{style:{textAlign:0===n?"left":"right",paddingLeft:0===n?f?"16px":"52px":0},disabled:e.disableSortBy,key:n}),Object(z.jsx)($e.b,{as:"span",color:"accentAction",position:"relative",children:e.isSorted?e.isSortedDesc?Object(z.jsx)(k.f,{style:{transform:"rotate(90deg)",position:"absolute"}}):Object(z.jsx)(k.f,{style:{transform:"rotate(-90deg)",position:"absolute"}}):""}),Object(z.jsx)($e.b,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")}))})))}))}),Object(z.jsx)("tbody",Object(xe.a)(Object(xe.a)({},b()),{},{children:O.map((function(e,n){return w(e),Object(z.jsx)(o.TraceEvent,{events:[a.BrowserEvent.onClick],name:a.NFTEventName.NFT_TRENDING_ROW_SELECTED,properties:{collection_address:e.original.collection.address,chain_id:u},element:a.InterfaceElementName.NFT_TRENDING_ROW,children:Object(m.createElement)(en,Object(xe.a)(Object(xe.a)({},e.getRowProps()),{},{key:e.id,onClick:function(){return I("/nfts/collection/".concat(e.original.collection.address))},"data-testid":"nft-trending-collection"}),e.cells.map((function(e,t){return Object(m.createElement)("td",Object(xe.a)(Object(xe.a)({className:"_1mor7vef rgw6eze9 rgw6ezcb rgw6ezg7 rgw6ez32i rgw6ez2j9 rgw6ez1s1 rgw6ez4ti rgw6ez4wt"},e.getCellProps()),{},{key:t,style:{maxWidth:0===t?f?"240px":"360px":"160px"}}),0===t?Object(z.jsxs)(Ke,{children:[!f&&Object(z.jsx)(we.x.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:n+1}),e.render("Cell")]}):e.render("Cell"))})))},n)}))}))]}))})}function dn(e){var n=e.headerGroups,t=e.visibleColumns,i=Object(Re.a)(e,Ze);return Object(z.jsx)(we.m,{children:Object(z.jsxs)("table",Object(xe.a)(Object(xe.a)({},i),{},{className:Ye,children:[Object(z.jsx)("thead",{className:Xe,children:n.map((function(e){return Object(m.createElement)("tr",Object(xe.a)(Object(xe.a)({},e.getHeaderGroupProps()),{},{key:e.id}),e.headers.map((function(e,n){return Object(m.createElement)(tn,Object(xe.a)(Object(xe.a)({className:Qe},e.getHeaderProps(e.getSortByToggleProps())),{},{style:{textAlign:0===n?"left":"right",paddingLeft:0===n?"52px":0},disabled:0===n,key:n}),Object(z.jsx)($e.b,{as:"span",color:"accentAction",position:"relative",children:e.isSorted?e.isSortedDesc?Object(z.jsx)(k.f,{style:{transform:"rotate(90deg)",position:"absolute"}}):Object(z.jsx)(k.f,{style:{transform:"rotate(-90deg)",position:"absolute"}}):""}),Object(z.jsx)($e.b,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")}))})))}))}),Object(z.jsx)("tbody",Object(xe.a)(Object(xe.a)({},i),{},{children:Object(_.a)(Array(10)).map((function(e,n){return Object(z.jsx)(nn,{children:Object(_.a)(Array(t.length)).map((function(e,n){return Object(z.jsx)("td",{className:"_1mor7veh rgw6eze9 rgw6ezcb rgw6ezg7 rgw6ez32w rgw6ez2jn rgw6ez1s1 rgw6ez4ti rgw6ez4wt",children:0===n?Object(z.jsxs)(on,{children:[Object(z.jsx)(cn,{}),Object(z.jsx)(an,{}),Object(z.jsx)(A.a,{})]}):Object(z.jsx)(rn,{children:Object(z.jsx)(A.a,{})})},n)}))},n)}))}))]}))})}!function(e){e.Volume="Volume",e.VolumeChange="Volume change",e.Floor="Floor",e.FloorChange="Floor change",e.Sales="Sales",e.Items="Items",e.Owners="Owners"}(h||(h={}));var sn=function(e,n){return e?n?Math.round(1e5*e)>=Math.round(1e5*n)?1:-1:1:-1},un=function(e){var n=e.data,t=e.timePeriod,i=Object(l.a)(),r=Object(m.useMemo)((function(){return function(e,n){if(i)return sn(e.original.floor.value,n.original.floor.value);var t,r,o=ye.a.from(null!==(t=e.original.floor.value)&&void 0!==t?t:0),a=ye.a.from(null!==(r=n.original.floor.value)&&void 0!==r?r:0);return o.gte(a)?1:-1}}),[i]),o=Object(m.useMemo)((function(){return function(e,n){return sn(e.original.floor.change,n.original.floor.change)}}),[]),a=Object(m.useMemo)((function(){return function(e,n){return sn(e.original.volume.value,n.original.volume.value)}}),[]),c=Object(m.useMemo)((function(){return function(e,n){return sn(e.original.volume.change,n.original.volume.change)}}),[]),d=Object(m.useMemo)((function(){return[{Header:"Collection name",accessor:"collection",Cell:De,disableSortBy:!0},{id:h.Floor,Header:h.Floor,accessor:function(e){return e.floor.value},sortType:r,Cell:function(e){return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(Ae,{value:e.row.original.floor.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice}),t!==j.j.AllTime&&Object(z.jsx)(Ce.p,{children:Object(z.jsx)(Le,{change:e.row.original.floor.change})})]})}},{id:h.FloorChange,Header:h.FloorChange,accessor:function(e){return e.floor.value},sortDescFirst:!0,disableSortBy:t===j.j.AllTime,sortType:o,Cell:function(e){return t===j.j.AllTime?Object(z.jsx)(Be,{value:"-"}):Object(z.jsx)(Le,{change:e.row.original.floor.change})}},{id:h.Volume,Header:h.Volume,accessor:function(e){return e.volume.value},sortDescFirst:!0,sortType:a,Cell:function(e){return Object(z.jsx)(Ue,{value:e.row.original.volume.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice})}},{id:h.VolumeChange,Header:h.VolumeChange,accessor:function(e){return e.volume.value},sortDescFirst:!0,disableSortBy:t===j.j.AllTime,sortType:c,Cell:function(e){var n=e.row.original.volume.change;return t===j.j.AllTime?Object(z.jsx)(Be,{value:"-"}):n&&n>=9999?Object(z.jsxs)(Le,{change:n,children:[">".concat(9999),"%"]}):Object(z.jsx)(Le,{change:n})}},{id:h.Items,Header:h.Items,accessor:"totalSupply",sortDescFirst:!0,Cell:function(e){return Object(z.jsx)(Ve,{value:{value:e.row.original.totalSupply}})}},{Header:h.Owners,accessor:function(e){return e.owners.value},sortDescFirst:!0,Cell:function(e){return Object(z.jsx)(Ve,{value:e.row.original.owners})}}]}),[o,r,c,a,t]);return Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(ln,{smallHiddenColumns:[h.Items,h.FloorChange,h.Volume,h.VolumeChange,h.Owners],mediumHiddenColumns:[h.Items,h.FloorChange,h.VolumeChange,h.Owners],largeHiddenColumns:[h.Items,h.Owners],data:n,columns:d})})},mn=[{label:"1D",value:j.j.OneDay},{label:"1W",value:j.j.SevenDays},{label:"1M",value:j.j.ThirtyDays},{label:"All",value:j.j.AllTime}],pn=r.default.div.withConfig({componentId:"sc-1dnk851-0"})(["display:flex;flex-direction:column;width:100%;max-width:1200px;padding:0 16px;"]),fn=r.default.div.withConfig({componentId:"sc-1dnk851-1"})(["color:",";font-size:36px;line-height:44px;font-weight:500;@media only screen and (max-width:","){font-size:20px;line-height:28px;}"],(function(e){return e.theme.textPrimary}),(function(e){var n=e.theme;return"".concat(n.breakpoint.sm,"px")})),hn=r.default.div.withConfig({componentId:"sc-1dnk851-2"})(["display:flex;justify-content:space-between;margin-top:36px;margin-bottom:20px;@media only screen and (max-width:","){margin-bottom:16px;margin-top:16px;}"],(function(e){var n=e.theme;return"".concat(n.breakpoint.sm,"px")})),gn=r.default.div.withConfig({componentId:"sc-1dnk851-3"})(["display:flex;border:1px solid ",";border-radius:16px;padding:4px;"],(function(e){return e.theme.backgroundOutline})),jn=r.default.div.withConfig({componentId:"sc-1dnk851-4"})(["padding:8px 12px;border-radius:12px;background:",";cursor:pointer;",""],(function(e){var n=e.active,t=e.theme;return n?t.backgroundInteractive:"none"}),Oe.a),bn=Object(r.default)(we.x.SubHeader).withConfig({componentId:"sc-1dnk851-5"})(["color:",";"],(function(e){var n=e.theme;return e.active?n.textPrimary:n.textSecondary}));var vn=function(){var e=Object(m.useState)(j.j.OneDay),n=Object(c.a)(e,2),t=n[0],i=n[1],r=Object(m.useState)(!0),o=Object(c.a)(r,2),a=o[0],s=o[1],u=Object(l.a)(),f=Object(v.useQuery)(["trendingCollections",t],(function(){return Object(g.h)({volumeType:"eth",timePeriod:t,size:100})}),{refetchOnReconnect:!1,refetchOnWindowFocus:!1,refetchOnMount:!1,refetchInterval:5e3}),h=f.isSuccess,x=f.data,O=p(100,function(e){switch(e){case j.j.OneDay:return d.c.Day;case j.j.SevenDays:return d.c.Week;case j.j.ThirtyDays:return d.c.Month;case j.j.AllTime:return d.c.Max;default:return d.c.Day}}(t)),w=O.data,y=O.loading,C=Object(v.useQuery)(["fetchPrice",{}],(function(){return Object(b.i)()}),{refetchOnReconnect:!1,refetchOnWindowFocus:!1,refetchOnMount:!1,refetchInterval:6e4}).data,k=Object(m.useMemo)((function(){var e=u?w:x;return(u?!y:h)&&e?e.map((function(e){return Object(xe.a)(Object(xe.a)({},e),{},{collection:{name:e.name,logo:e.imageUrl,address:e.address,isVerified:e.isVerified},volume:{value:e.volume,change:e.volumeChange,type:"eth"},floor:{value:e.floor,change:e.floorChange},owners:{value:e.owners},sales:e.sales,totalSupply:e.totalSupply,denomination:a?j.e.ETH:j.e.USD,usdPrice:C})})):[]}),[u,w,x,y,h,a,C]);return Object(z.jsxs)(pn,{children:[Object(z.jsx)(fn,{children:"Trending NFT collections"}),Object(z.jsxs)(hn,{children:[Object(z.jsx)(gn,{children:mn.map((function(e){return Object(z.jsx)(jn,{active:e.value===t,onClick:function(){return i(e.value)},children:Object(z.jsx)(bn,{lineHeight:"20px",active:e.value===t,children:e.label})},e.value)}))}),Object(z.jsxs)(gn,{onClick:function(){return s(!a)},children:[Object(z.jsx)(jn,{active:a,children:Object(z.jsx)(bn,{lineHeight:"20px",active:a,children:"ETH"})}),Object(z.jsx)(jn,{active:!a,children:Object(z.jsx)(bn,{lineHeight:"20px",active:!a,children:"USD"})})]})]}),Object(z.jsx)(un,{data:k,timePeriod:t})]})},xn=r.default.div.withConfig({componentId:"sc-j2zxi9-0"})(["display:flex;flex-direction:column;align-items:center;width:100%;@media only screen and (max-width:","){gap:16px;}@media only screen and (max-width:","){gap:0px;}"],(function(e){var n=e.theme;return"".concat(n.breakpoint.md,"px")}),(function(e){var n=e.theme;return"".concat(n.breakpoint.sm,"px")}));n.default=function(){var e=Object(Ie.e)((function(e){return e.setBagExpanded}));return Object(m.useEffect)((function(){e({bagExpanded:!1,manualClose:!1})}),[]),Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(o.Trace,{page:a.InterfacePageName.NFT_EXPLORE_PAGE,shouldLogImpression:!0,children:Object(z.jsxs)(xn,{children:[Object(z.jsx)(ve,{}),Object(z.jsx)(vn,{})]})})})}}}]);
//# sourceMappingURL=13.4fdcf6ef.chunk.js.map