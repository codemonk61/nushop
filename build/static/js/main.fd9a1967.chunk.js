(this["webpackJsonpreact-redux-crud-app"]=this["webpackJsonpreact-redux-crud-app"]||[]).push([[0],{121:function(e,c,t){},125:function(e,c,t){},224:function(e,c,t){},225:function(e,c,t){},235:function(e,c,t){},649:function(e,c,t){},650:function(e,c,t){},651:function(e,c,t){},652:function(e,c,t){"use strict";t.r(c);var s=t(3),n=t.n(s),a=t(55),r=t.n(a),i=t(8),j=t(10),l=t(45),d=t.n(l),o=t(76),b=t(5),O=t(78),h=t.n(O),p=t(4),x=t(38),u=(t(121),"ADD_TO_CART"),m="REMOVE_FROM_CART",f="ADJUST_QTY",v="LOAD_CURRENT_ITEM",g="SET_PRODUCTS",N="SET_USER",y="SET_DISCOUNT",S=function(e){return{type:u,payload:{id:e}}},C=t(1),k=function(e){var c=e.currentRecords,t=Object(p.c)();return Object(C.jsx)("div",{className:"wrapper",children:c.map((function(e){return Object(C.jsxs)("div",{className:"box",children:[Object(C.jsxs)(i.b,{to:"/product/".concat(e.id),children:[Object(C.jsx)("div",{className:"image",children:Object(C.jsx)("img",{src:e.image,alt:e.title})}),Object(C.jsxs)("div",{className:"desc",children:[Object(C.jsxs)("p",{children:[e.title.substring(0,30),"..."]}),Object(C.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(C.jsx)("p",{style:{background:"green",height:"30px",width:"30px",textAlign:"center",lineHeight:"30px",borderRadius:"5px",color:"white"},children:e.rating.rate}),Object(C.jsxs)("p",{style:{fontSize:"13px",marginLeft:"15px"},children:["Based on ",e.rating.count," Reviews"]})]}),Object(C.jsxs)("p",{children:["$ ",e.price,Object(C.jsxs)("span",{style:{textDecoration:"line-through",marginLeft:"10px",color:"light-grey"},children:["  $",(e.price+.1*e.price).toFixed(2)]})]})]})]},e.id),Object(C.jsxs)("div",{className:"boxFooter",children:[Object(C.jsx)("div",{className:"whatsAppbtn",children:Object(C.jsx)("a",{href:"https://wa.me/918637824594?text=urlencodedtext",children:Object(C.jsx)(x.a,{style:{background:"green",color:"white",borderRadius:"50%"}})})}),Object(C.jsx)("div",{children:Object(C.jsx)("button",{className:"addToCartBtn",onClick:function(){t(S(e.id))},children:"Add to bag"})})]})]})}))})},D=t(81),P=function(e){var c=e.nPages,t=e.currentPage,s=e.setCurrentPage,n=Object(D.a)(Array(c+1).keys()).slice(1);return Object(C.jsx)("nav",{"aria-label":"Page navigation example ",children:Object(C.jsxs)("ul",{className:"pagination justify-content-center",children:[Object(C.jsx)("li",{className:"page-item",children:Object(C.jsx)("a",{className:"page-link",href:"#",onClick:function(){1!==t&&s(t-1)},children:"Previous"})}),n.map((function(e){return Object(C.jsx)("li",{className:"page-item ".concat(t===e?"active":""),children:Object(C.jsx)("a",{herf:"#",onClick:function(){s(e)},className:"page-link",children:e})},e)})),Object(C.jsx)("li",{className:"page-item",children:Object(C.jsx)("a",{className:"page-link",href:"#",onClick:function(){t!==c&&s(t+1)},children:"Next"})})]})})},I=Object(p.b)((function(e){return{products:e.shop.products}}))((function(e){var c=e.products,t=Object(s.useState)(1),n=Object(b.a)(t,2),a=n[0],r=n[1],i=Object(s.useState)(3),j=Object(b.a)(i,1)[0],l=Object(p.c)(),O=function(){var e=Object(o.a)(d.a.mark((function e(){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://fakestoreapi.com/products").catch((function(e){console.log("Err: ",e)}));case 2:c=e.sent,console.log(c.data),l((t=c.data,{type:g,payload:t}));case 5:case"end":return e.stop()}var t}),e)})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){O()}),[]);var x=a*j,u=x-j,m=c.slice(u,x),f=Math.ceil(c.length/j);return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{className:"ui grid container",children:Object(C.jsx)(k,{currentRecords:m})}),Object(C.jsx)(P,{nPages:f,currentPage:a,setCurrentPage:r})]})})),w=(t(224),function(){Object(j.f)();var e=Object(s.useState)(0),c=Object(b.a)(e,2),t=c[0],n=c[1],a=Object(p.d)((function(e){return e.shop.cart}));return Object(s.useEffect)((function(){var e=0;a.forEach((function(c){e+=c.qty})),n(e)}),[a,t]),Object(C.jsxs)("div",{className:"header",children:[Object(C.jsx)(i.b,{to:"/",children:Object(C.jsx)("p",{children:"Mbazar"})}),Object(C.jsx)(i.b,{to:"/cart",children:Object(C.jsxs)("div",{class:"cart",children:[Object(C.jsx)("span",{children:t}),Object(C.jsxs)("svg",{height:"512pt",viewBox:"0 -31 512.00026 512",width:"512pt",xmlns:"http://www.w3.org/2000/svg",children:[Object(C.jsx)("path",{d:"m164.960938 300.003906h.023437c.019531 0 .039063-.003906.058594-.003906h271.957031c6.695312 0 12.582031-4.441406 14.421875-10.878906l60-210c1.292969-4.527344.386719-9.394532-2.445313-13.152344-2.835937-3.757812-7.269531-5.96875-11.976562-5.96875h-366.632812l-10.722657-48.253906c-1.527343-6.863282-7.613281-11.746094-14.644531-11.746094h-90c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h77.96875c1.898438 8.550781 51.3125 230.917969 54.15625 243.710938-15.941406 6.929687-27.125 22.824218-27.125 41.289062 0 24.8125 20.1875 45 45 45h272c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15h-272c-8.269531 0-15-6.730469-15-15 0-8.257812 6.707031-14.976562 14.960938-14.996094zm312.152343-210.003906-51.429687 180h-248.652344l-40-180zm0 0"}),Object(C.jsx)("path",{d:"m150 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"}),Object(C.jsx)("path",{d:"m362 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"})]})]})})]})}),A=(t(225),function(){var e=Object(p.d)((function(e){return e.shop.coupons})),c=Object(j.f)().productId,t=Object(s.useState)(),n=Object(b.a)(t,2),a=n[0],r=n[1],i=Object(p.c)(),l=function(){var e=Object(o.a)(d.a.mark((function e(c){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://fakestoreapi.com/products/".concat(c)).catch((function(e){console.log("Err: ",e)}));case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){return c&&""!==c&&l(c),function(){}}),[c]),Object(C.jsx)("div",{className:"productWrapper",children:a&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{className:"productImage",children:Object(C.jsx)("img",{src:a.image})}),Object(C.jsxs)("div",{className:"detailsProduct",children:[Object(C.jsx)("p",{className:"productTitle",children:a.title}),Object(C.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(C.jsx)("p",{style:{background:"green",height:"30px",width:"30px",textAlign:"center",lineHeight:"30px",borderRadius:"5px",color:"white"},children:a.rating.rate}),Object(C.jsxs)("p",{style:{fontSize:"13px",marginLeft:"15px"},children:["Based on ",a.rating.count," Reviews"]})]}),Object(C.jsxs)("p",{style:{fontSize:"20px"},children:["$ ",a.price,Object(C.jsxs)("span",{style:{fontSize:"15px",textDecoration:"line-through",marginLeft:"10px",color:"light-grey"},children:["  $",(a.price+.1*a.price).toFixed(2)]})]}),Object(C.jsxs)("div",{className:"productOffers",children:[Object(C.jsx)("h5",{children:"Offers(5)"}),e.map((function(e){return Object(C.jsxs)("li",{children:[Object(C.jsx)("img",{src:"https://cdn.zeplin.io/619d06ef8cfa6aab579b7e4d/assets/51151f2c-82a0-45dc-9ff5-b31b2717a90e.svg"}),e.coupondesc]})}))]}),Object(C.jsxs)("div",{className:"selectQty",children:[Object(C.jsx)("div",{className:"quantityHeader",children:Object(C.jsx)("h5",{children:"Select Quantity"})}),Object(C.jsxs)("div",{className:"quantityBody",children:[Object(C.jsx)("div",{className:"dec",children:"-"}),Object(C.jsx)("div",{className:"num",children:"1"}),Object(C.jsx)("div",{className:"inc",children:"+"})]})]}),Object(C.jsx)("button",{onClick:function(){i(S(a.id))},children:"Add to Cart"}),Object(C.jsx)("div",{className:"deliveryDetails",children:Object(C.jsxs)("ul",{children:[Object(C.jsxs)("li",{children:[Object(C.jsx)("span",{children:Object(C.jsx)("img",{style:{marginRight:"10px"},src:"https://cdn.zeplin.io/619d06ef8cfa6aab579b7e4d/assets/8522ca2d-560e-467b-9e2a-823393a2131b.svg"})}),"Get it delivered 4-5 days"]}),Object(C.jsxs)("li",{children:[Object(C.jsx)("span",{children:Object(C.jsx)("img",{style:{marginRight:"10px"},src:"https://cdn.zeplin.io/619d06ef8cfa6aab579b7e4d/assets/68741025-5bbf-4b92-b626-e5d140ac674a.svg"})}),"Only payment only"]}),Object(C.jsxs)("li",{children:[Object(C.jsx)("span",{children:Object(C.jsx)("img",{style:{marginRight:"10px"},src:"https://cdn.zeplin.io/619d06ef8cfa6aab579b7e4d/assets/58f1620a-865c-471c-bd77-44adb5a121f9.svg"})}),"Non Returnable"]})]})})]})]})})}),B=t(111),E=t.n(B),z=t(79),R=function(e){var c=e.itemData,t=Object(s.useState)(c.id),n=Object(b.a)(t,2),a=(n[0],n[1]),r=Object(p.c)(),i=function(e){var t,s;a(e.target.value),r((t=c.id,s=e.target.value,{type:f,payload:{id:t,qty:s}}))};return Object(C.jsxs)("div",{className:"cartItemWrapper",children:[Object(C.jsxs)("div",{className:"cartItemImage",children:[Object(C.jsx)("div",{className:"delete",onClick:function(){var e;r((e=c.id,{type:m,payload:{id:e}}))},children:Object(C.jsx)("span",{children:Object(C.jsx)(z.a,{})})}),Object(C.jsx)("img",{src:c.image,alt:c.title})]}),Object(C.jsxs)("div",{className:"cartItemDesc",children:[Object(C.jsx)("p",{children:c.title}),Object(C.jsxs)("p",{children:["$",c.price]}),Object(C.jsx)("div",{className:"qty",children:Object(C.jsxs)("span",{children:["Qty:",Object(C.jsx)("input",{type:"number",min:"1",value:c.qty,onChange:function(e){i(e)}})]})})]}),Object(C.jsx)("div",{className:"productPrice",children:Object(C.jsxs)("p",{children:["$",c.price]})}),Object(C.jsx)("div",{className:"qtyWrapper"})]})},T=(t(235),Object(p.b)((function(e){return{cart:e.shop.cart}}))((function(e){var c=e.cart,t=Object(s.useState)(!1),n=Object(b.a)(t,2),a=n[0],r=n[1],j=Object(s.useState)(0),l=Object(b.a)(j,2),d=l[0],o=l[1],O=Object(s.useState)(),h=Object(b.a)(O,2),x=h[0],u=h[1],m=Object(s.useState)(),f=Object(b.a)(m,2),v=f[0],g=f[1],N=Object(s.useState)(!1),y=Object(b.a)(N,2),S=y[0],k=y[1],D=Object(s.useState)(0),P=Object(b.a)(D,2),I=(P[0],P[1]),w=Object(p.d)((function(e){return e.shop.coupons}));Object(s.useEffect)((function(){var e=0,t=0;c.forEach((function(c){e+=c.qty,t+=c.qty*c.price})),g(e),u(t.toFixed(2))}),[x,v,u,g,c]);return E.a.setAppElement("#root"),Object(C.jsxs)("div",{className:"cartWrapper",children:[Object(C.jsxs)(E.a,{isOpen:S,className:"model",onRequestClose:function(){k(!1)},children:[Object(C.jsx)("div",{className:"overlay"}),Object(C.jsxs)("div",{className:"modelContent",children:[Object(C.jsxs)("div",{className:"modelHeader",children:[Object(C.jsx)("h5",{children:"Offers"}),Object(C.jsx)("div",{style:{cursor:"pointer"},onClick:function(){k(!1)},children:Object(C.jsx)(z.a,{})})]}),w.map((function(e){return Object(C.jsxs)("div",{className:"offers",children:[Object(C.jsx)("p",{children:e.coupondesc}),Object(C.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(C.jsx)("p",{children:e.couponcode}),Object(C.jsx)("p",{style:{color:"green",cursor:"pointer"},onClick:function(){var c;c=e.coupondis,o(c/100*x),I((x-d).toFixed(2)),k(!1),r(!0)},children:"Apply Offer"})]})]},e.id)}))]})]}),Object(C.jsx)("div",{children:Object(C.jsx)("div",{children:c.map((function(e){return Object(C.jsx)(R,{itemData:e},e.id)}))})}),Object(C.jsxs)("div",{className:"cartSummary",children:[Object(C.jsxs)("div",{className:"offer",children:[Object(C.jsx)("div",{className:"offerLogo",children:Object(C.jsx)("img",{style:{color:"green"},src:"https://cdn.zeplin.io/619d06ef8cfa6aab579b7e4d/assets/51151f2c-82a0-45dc-9ff5-b31b2717a90e.svg",alt:"tag-image"})}),Object(C.jsxs)("div",{className:"offerDesc",children:[Object(C.jsx)("p",{style:{color:"green",marginLeft:"10px",fontSize:"12px",textAlign:"left"},children:a?"You Saved ".concat(d.toFixed(2),"$"):""}),Object(C.jsx)("p",{style:{color:"green",fontSize:"12px"},children:"4 offer available"})]}),Object(C.jsx)("div",{className:"offerBtn",children:Object(C.jsx)("p",{style:{color:"green",fontSize:"12px",marginLeft:"10px"},onClick:function(){k(!0)},children:a?"Change Offer":"Apply coupons"})})]}),Object(C.jsxs)("div",{className:"checkoutSubtotal",children:[Object(C.jsxs)("div",{className:"subtotal_price",children:[Object(C.jsxs)("div",{className:"subtotal",children:[Object(C.jsxs)("p",{children:["Subtotal(",v,")"]}),Object(C.jsx)("p",{children:"Saving $160"})]}),Object(C.jsx)("div",{className:"subtotalprice",children:Object(C.jsxs)("p",{className:"price",children:["$",d?(x-d).toFixed(2):x]})})]}),Object(C.jsx)("div",{className:"subtotalcheckoutbtn",children:Object(C.jsx)(i.b,{to:"/checkout",children:Object(C.jsx)("button",{children:"checkout"})})})]})]})]})}))),F=(t(125),function(){var e=Object(s.useState)({name:"",number:0,address:""}),c=Object(b.a)(e,2),t=(c[0],c[1],Object(p.d)((function(e){return e.shop.cart})));Object(p.c)();return Object(C.jsxs)("div",{className:"cartProducts",children:[Object(C.jsx)("h5",{children:"Bag Items"}),t.map((function(e){return Object(C.jsxs)("div",{className:"cartBox",children:[Object(C.jsx)("div",{className:"checkoutImage",children:Object(C.jsx)("img",{src:e.image,alt:e.title})},e.id),Object(C.jsxs)("div",{className:"productTitle",children:[Object(C.jsx)("p",{children:e.title}),Object(C.jsx)("p",{children:e.category})]}),Object(C.jsx)("div",{className:"productPrice",children:Object(C.jsxs)("p",{children:["$",e.price]})})]})}))]})}),L=(t(236),function(){var e=Object(s.useState)(!1),c=Object(b.a)(e,2),t=c[0],n=c[1],a=Object(s.useState)(!1),r=Object(b.a)(a,2),j=r[0],l=r[1],d=Object(s.useState)({name:"",number:0,address:""}),o=Object(b.a)(d,2);o[0],o[1],Object(p.d)((function(e){return e.shop.cart})),Object(p.c)();return Object(C.jsxs)("div",{className:"checkoutWrapper",children:[Object(C.jsx)(F,{}),Object(C.jsxs)("div",{className:"userDetails",children:[Object(C.jsx)("div",{style:{marginBottom:"30px"},children:Object(C.jsx)("h3",{children:"Enter Mobile Number"})}),Object(C.jsxs)("div",{className:"numberInput",children:[Object(C.jsx)("span",{className:"whatsappLogo",children:Object(C.jsx)(x.a,{style:{background:"green",color:"white",borderRadius:"50%",fontSize:"30px"}})}),Object(C.jsx)("input",{type:"text",onChange:function(e){var c;(c=e.target.value).match(/[A-Za-z]/)?(n(!0),l(!1)):10!==c.length&&0!==c.length?(l(!0),n(!1)):(l(!1),n(!1))},placeholder:"Enter whatsapp no."})]}),j&&Object(C.jsx)("p",{style:{color:"red"},children:"Enter the num upto 10 digit"}),t&&Object(C.jsx)("p",{style:{color:"red"},children:"Please enter numbers"}),Object(C.jsx)("div",{className:"getoffersonwhatsapp",children:Object(C.jsx)("p",{children:"Get offers on Whatsapp"})}),Object(C.jsx)("div",{className:"checkoutbtn",children:Object(C.jsx)(i.b,{to:"/basicdetails",children:Object(C.jsx)("button",{disabled:j,children:"Confirm number"})})})]})]})}),W=function(){var e=Object(p.d)((function(e){return e.shop.userdetails}));return Object(C.jsx)("div",{className:"previewPage",children:Object(C.jsxs)("div",{className:"preview",children:[Object(C.jsx)("div",{className:"userDetailsHead",children:Object(C.jsx)("h1",{children:"Your Details"})}),Object(C.jsx)("div",{className:"Name",children:Object(C.jsxs)("p",{children:["Name: ",Object(C.jsx)("span",{children:e.name})]})}),Object(C.jsx)("div",{className:"Number",children:Object(C.jsxs)("p",{children:["Mobile: ",Object(C.jsx)("span",{children:e.number})]})}),Object(C.jsx)("div",{className:"address",children:Object(C.jsxs)("p",{children:["Address: ",Object(C.jsx)("span",{children:e.address})]})}),Object(C.jsx)("div",{className:"btn",children:Object(C.jsx)(i.b,{to:"/success",children:Object(C.jsx)("button",{children:"Confirm"})})})]})})},$=function(){return Object(C.jsxs)("center",{children:[Object(C.jsx)("h1",{children:"Your Order has been confirmed successfully"}),Object(C.jsx)("div",{className:"btn",children:Object(C.jsx)(i.b,{to:"/",children:Object(C.jsx)("button",{children:"Continue Shopping"})})})]})},q=t(80),H=t(7),_=(t(649),function(){var e=Object(s.useState)(!1),c=Object(b.a)(e,2),t=(c[0],c[1]),n={name:"",pin:0,houseNumber:"",address:""},a=Object(s.useState)(n),r=Object(b.a)(a,2),j=r[0],l=r[1],d=Object(s.useState)({}),o=Object(b.a)(d,2),O=o[0],h=o[1],p=function(e){console.log("event",e.target.value,e.target.name),l(Object(H.a)(Object(H.a)({},j),{},Object(q.a)({},e.target.name,e.target.value)))},x=function(e){var c={};return e.name||(c.name="Please, enter username..."),e.pin||(c.pin="Please, enter email..."),e.address||(c.address="Please, enter address..."),e.houseNumber||(c.houseNumber="Please, enter houseNumber..."),e.pin.length<5&&(c.pin="Please enter 5 characters  ..."),e.name.match(/[A-Za-z]/)||(c.name="Please enter non digit charatcters  ..."),c};return Object(C.jsxs)("div",{className:"checkoutWrapper",style:{marginBottom:"20px"},children:[Object(C.jsx)(F,{}),Object(C.jsxs)("div",{className:"userDetails",children:[Object(C.jsx)("div",{style:{marginBottom:"30px"},children:Object(C.jsx)("h3",{children:"Basic Details"})}),Object(C.jsx)("div",{className:"label",children:Object(C.jsx)("label",{children:"Full Name"})}),Object(C.jsx)("div",{className:"nameInput",children:Object(C.jsx)("input",{type:"text",placeholder:"Enter Name",name:"name",required:!0,onChange:p,value:j.name})}),Object(C.jsx)("div",{className:"text-danger",children:O.name}),Object(C.jsxs)("div",{className:"pinHouse",children:[Object(C.jsxs)("div",{className:"labelAndInput",children:[Object(C.jsx)("div",{className:"label",children:Object(C.jsx)("label",{children:"Pincode"})}),Object(C.jsx)("div",{className:"nameInput",children:Object(C.jsx)("input",{type:"text",placeholder:"Pincode",name:"pin",onChange:p,value:j.pin})}),Object(C.jsx)("div",{className:"text-danger",children:O.pin})]}),Object(C.jsxs)("div",{className:"labelAndInput",children:[Object(C.jsx)("div",{className:"label",children:Object(C.jsx)("label",{children:"House Number"})}),Object(C.jsx)("div",{className:"nameInput",children:Object(C.jsx)("input",{type:"text",placeholder:"House Number",name:"houseNumber",onChange:p,value:j.houseNumber})}),Object(C.jsx)("div",{className:"text-danger",children:O.houseNumber})]})]}),Object(C.jsxs)("div",{className:"address",children:[Object(C.jsx)("div",{className:"label",style:{marginBottom:"15px"},children:Object(C.jsx)("label",{children:"Enter Address"})}),Object(C.jsx)("textarea",{type:"text",placeholder:"Enter Address",name:"address",onChange:p,value:j.address}),Object(C.jsx)("div",{className:"text-danger",children:O.address})]}),Object(C.jsx)("div",{className:"saveContinuebtn",children:Object(C.jsx)(i.b,{to:"/payment",children:Object(C.jsx)("button",{onClick:function(e){e.preventDefault(),console.log("FormData Submitted...",j);var c=x(j);h(c),0===Object.keys(c).length&&(t(!0),console.log("--------------hahah------------------"),l(n))},children:"Save & Continue"})})})]})]})}),M=(t(650),function(){var e=Object(s.useState)({name:"",number:0,address:""}),c=Object(b.a)(e,2);c[0],c[1],Object(p.d)((function(e){return e.shop.cart})),Object(p.c)();return Object(C.jsxs)("div",{className:"checkoutWrapper",style:{marginBottom:"20px"},children:[Object(C.jsx)(F,{}),Object(C.jsxs)("div",{className:"userDetails",children:[Object(C.jsx)("div",{className:"paymentHeader",children:Object(C.jsx)("h1",{children:"Select Payment Mode"})}),Object(C.jsxs)("div",{className:"paymentBox",children:[Object(C.jsxs)("div",{className:"radio",children:[Object(C.jsx)("input",{type:"radio",name:"pay"}),Object(C.jsx)("span",{children:"Pay Online"})]}),Object(C.jsx)("div",{className:"discount",children:Object(C.jsx)("p",{children:"20$ discount"})})]}),Object(C.jsxs)("div",{className:"paymentBox",children:[Object(C.jsxs)("div",{className:"radio",children:[Object(C.jsx)("input",{type:"radio",name:"pay"}),Object(C.jsx)("span",{children:"Pay COD"})]}),Object(C.jsx)("div",{className:"discount",children:Object(C.jsx)("p",{children:"10$ charge"})})]}),Object(C.jsxs)("div",{className:"offer",children:[Object(C.jsx)("div",{className:"offerLogo",children:Object(C.jsx)("img",{style:{color:"green"},src:"https://cdn.zeplin.io/619d06ef8cfa6aab579b7e4d/assets/51151f2c-82a0-45dc-9ff5-b31b2717a90e.svg",alt:"tag-image"})}),Object(C.jsxs)("div",{className:"offerDesc",children:[Object(C.jsx)("p",{children:"Save upto $1000"}),Object(C.jsx)("p",{style:{color:"green"},children:"7 offer available"})]}),Object(C.jsx)("div",{className:"offerBtn",children:Object(C.jsx)("p",{children:"Offers"})})]}),Object(C.jsxs)("div",{className:"billDetails",children:[Object(C.jsxs)("div",{className:"billHeader",style:{lineHeight:"10px"},children:[Object(C.jsx)("h5",{children:"Bill Details"}),Object(C.jsx)("p",{style:{color:"green",fontSize:"12px"},children:"Saving $470 on this order "})]}),Object(C.jsxs)("div",{className:"billDetailsBody",children:[Object(C.jsxs)("div",{className:"billItem",children:[Object(C.jsx)("p",{children:"Items"}),Object(C.jsx)("p",{children:"Items total"}),Object(C.jsx)("p",{children:"Online Payment Discount"}),Object(C.jsx)("p",{children:"Deliviery Free"}),Object(C.jsx)("hr",{}),Object(C.jsx)("p",{children:"Total Amount"})]}),Object(C.jsxs)("div",{className:"billItem",children:[Object(C.jsx)("p",{children:"2"}),Object(C.jsx)("p",{children:"6200"}),Object(C.jsx)("p",{children:"-20"}),Object(C.jsx)("p",{children:"0"}),Object(C.jsx)("hr",{}),Object(C.jsx)("p",{children:"6180"})]})]})]}),Object(C.jsxs)("div",{className:"deliveryDetails",children:[Object(C.jsx)("p",{children:"Delivery Address"}),Object(C.jsx)("p",{style:{color:"gray"},children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nihil!"}),Object(C.jsx)("p",{style:{color:"green"},children:"Free Delivery within 4-9 days"})]}),Object(C.jsxs)("div",{className:"paymentFooter",children:[Object(C.jsxs)("div",{className:"totalAmount",children:[Object(C.jsx)("p",{children:"Total amount"}),Object(C.jsxs)("p",{children:["$ 6180 ",Object(C.jsx)("span",{style:{marginLeft:"10px",textDecoration:"line-through",fontSize:"12px"},children:"$6200"})]})]}),Object(C.jsx)(i.b,{to:"/billpage",children:Object(C.jsx)("div",{className:"placeOrderbtn",children:Object(C.jsx)("button",{children:"Place Order"})})})]})]})]})}),U=(t(651),function(){var e=Object(s.useState)({name:"",number:0,address:""}),c=Object(b.a)(e,2);c[0],c[1],Object(p.d)((function(e){return e.shop.cart})),Object(p.c)();return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("div",{className:"billPageWrapper",style:{marginBottom:"20px"},children:[Object(C.jsxs)("div",{children:[Object(C.jsx)("h4",{style:{marginBottom:"20px"},children:"Your order has been placed successfully"}),Object(C.jsxs)("div",{className:"thankuBox",children:[Object(C.jsx)("p",{style:{fontSize:"20px",fontWeight:"bolder"},children:"You saved extra $50!"}),Object(C.jsx)("p",{children:"Thank You For Shopping With Us"})]})]}),Object(C.jsxs)("div",{className:"billBoxWrapper",children:[Object(C.jsxs)("div",{className:"itemPageWrapper",children:[Object(C.jsxs)("div",{className:"billPageItem",children:[Object(C.jsx)("p",{children:"Items"}),Object(C.jsx)("p",{children:"Delivered By"}),Object(C.jsx)("p",{children:"Payment Mode"}),Object(C.jsx)("p",{children:"Total Amount"})]}),Object(C.jsxs)("div",{className:"billPageItem",children:[Object(C.jsx)("p",{children:"jeans"}),Object(C.jsx)("p",{children:"Wed's 19th oct 2022"}),Object(C.jsx)("p",{children:"Cash on Delivery"}),Object(C.jsx)("p",{children:"6180"})]})]}),Object(C.jsx)("div",{className:"billPageBtn",children:Object(C.jsx)(i.b,{to:"/",children:Object(C.jsx)("button",{children:"Continue Shopping"})})})]})]})})});var Y=function(){return Object(C.jsx)("div",{children:Object(C.jsxs)(i.a,{children:[Object(C.jsx)(w,{}),Object(C.jsxs)(j.c,{children:[Object(C.jsx)(j.a,{path:"/",exact:!0,component:I}),Object(C.jsx)(j.a,{path:"/product/:productId",component:A}),Object(C.jsx)(j.a,{path:"/cart",component:T}),Object(C.jsx)(j.a,{path:"/checkout",component:L}),Object(C.jsx)(j.a,{path:"/basicdetails",component:_}),Object(C.jsx)(j.a,{path:"/payment",component:M}),Object(C.jsx)(j.a,{path:"/billpage",component:U}),Object(C.jsx)(j.a,{path:"/preview",component:W}),Object(C.jsx)(j.a,{path:"/success",component:$}),Object(C.jsx)(j.a,{children:"404 Not Found!"})]})]})})},G=t(39),Q={products:[],cart:[],coupons:[{id:1,coupondesc:"10% Off Use Coupon Code:DIWALI2022 ",couponcode:"DIWALI2022",coupondis:10},{id:2,coupondesc:"5% Off Use Coupon Code:SALE2022",couponcode:"SALE2022",coupondis:5},{id:3,coupondesc:"20% Off Use Coupon Code:BIG2022 ",couponcode:"BIG2022",coupondis:20},{id:4,coupondesc:"25% Off Use Coupon Code:LARGE2022 ",couponcode:"LARGE2022",coupondis:25}],currentItem:null,userdetails:{},offerPrice:{}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case g:return Object(H.a)(Object(H.a)({},e),{},{products:c.payload});case u:var t=e.products.find((function(e){return e.id===c.payload.id})),s=e.cart.find((function(e){return e.id===c.payload.id}));return Object(H.a)(Object(H.a)({},e),{},{cart:s?e.cart.map((function(e){return e.id===c.payload.id?Object(H.a)(Object(H.a)({},e),{},{qty:e.qty+1}):e})):[].concat(Object(D.a)(e.cart),[Object(H.a)(Object(H.a)({},t),{},{qty:1})])});case m:return Object(H.a)(Object(H.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==c.payload.id}))});case f:return Object(H.a)(Object(H.a)({},e),{},{cart:e.cart.map((function(e){return e.id===c.payload.id?Object(H.a)(Object(H.a)({},e),{},{qty:+c.payload.qty}):e}))});case v:return Object(H.a)(Object(H.a)({},e),{},{currentItem:c.payload});case N:return Object(H.a)(Object(H.a)({},e),{},{userdetails:c.payload});case y:return Object(H.a)(Object(H.a)({},e),{},{offerPrice:c.payload});default:return e}},Z=Object(G.combineReducers)({shop:J}),V=t(195),K=Object(G.createStore)(Z,Object(V.composeWithDevTools)());r.a.render(Object(C.jsx)(n.a.StrictMode,{children:Object(C.jsx)(p.a,{store:K,children:Object(C.jsx)(Y,{})})}),document.getElementById("root"))}},[[652,1,2]]]);
//# sourceMappingURL=main.fd9a1967.chunk.js.map