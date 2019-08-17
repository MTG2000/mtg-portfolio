(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{131:function(e,t,a){"use strict";var n=a(1),r=a.n(n),c=a(201),o=a.n(c);t.a=function(e){var t=e.width;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"d-flex justify-content-center mt-6"},r.a.createElement(o.a,{type:"Audio",color:"#00c3b1",height:t,width:t})),r.a.createElement("h2",{className:"text-primary col-12 text-center h-25 my-5"},"Loading . . ."))}},190:function(e,t,a){"use strict";var n=a(29),r=a.n(n),c=a(49),o=a(50),l=a(1),s=a.n(l),m=a(39),i=a(53),u=(a(497),a(192)),p=a.n(u),d=(a(498),a(193)),f=a(194),b=a(203),g=a(195),h=a(204),E=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(f.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(l.Component),v=Object(i.g)(E),j=(a(503),function(){return Object(l.useEffect)(function(){document.querySelector(".open").addEventListener("click",function(){this.classList.toggle("oppenned")})},[]),s.a.createElement("div",{className:"open"},s.a.createElement("span",{className:"cls"}),s.a.createElement("span",null,s.a.createElement("ul",{className:"sub-menu bg-primary"},s.a.createElement("li",null,s.a.createElement(m.b,{to:"/"},"Home")),s.a.createElement("li",null,s.a.createElement(m.b,{to:"/projects"},"My Projects")),s.a.createElement("li",null,s.a.createElement(m.b,{to:"/about"},"About Me")),s.a.createElement("li",null,s.a.createElement(m.b,{to:"/contact"},"Contact")))),s.a.createElement("span",{className:"cls"}))}),y=a(70),N=a(62),x=a(198),O=a.n(x),w=a(86),k=a.n(w),S=function(){var e=Object(l.useState)({name:"",url:"",img:"",tags:"",code:""}),t=Object(o.a)(e,2),a=t[0],n=t[1],m=Object(l.useState)(!1),u=Object(o.a)(m,2),p=u[0],d=u[1],f=function(e){var t=e.target.name;n(Object(N.a)({},a,Object(y.a)({},t,e.target.value)))},b=function(){var e=Object(c.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=Object(N.a)({},a,{tags:JSON.stringify(a.tags.split(" "))}),e.next=4,k.a.post("/api/projects/add",{data:n,token:sessionStorage["auth-token"]});case 4:e.sent.data.success&&d(!0);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return p?s.a.createElement(i.a,{to:"/"}):s.a.createElement("main",{className:O.a.addProject},s.a.createElement("div",{className:"container py-2 pt-5"},s.a.createElement("h1",{className:"display-3 text-primary text-center mt-5 mb-5","data-aos":"fade-down"},"Add Project"),s.a.createElement("form",{className:"row mt-5 mb-5",onSubmit:b},s.a.createElement("h2",{className:"text-primary col-lg-12 mt-5","data-aos":"fade-right"},"Details Of The Project"),s.a.createElement("div",{className:"form-group mb-5 col-lg-6","data-aos":"fade-right"},s.a.createElement("label",{className:"text-white"},"Project Title"),s.a.createElement("input",{value:a.name,type:"text",className:"form-control",placeholder:"eg.Steam Store",name:"name",onChange:f})),s.a.createElement("div",{className:"form-group mb-5 col-lg-6","data-aos":"fade-right"},s.a.createElement("label",{className:"text-white"},"Project Link"),s.a.createElement("input",{value:a.url,type:"text",className:"form-control",placeholder:"eg.store.steampowerd.com",name:"url",onChange:f})),s.a.createElement("div",{className:"form-group mb-5 col-lg-6","data-aos":"fade-right"},s.a.createElement("label",{className:"text-white"},"Project Link Code"),s.a.createElement("input",{value:a.code,type:"text",className:"form-control",placeholder:"eg.github.io/steam-project",name:"code",onChange:f})),s.a.createElement("div",{className:"form-group mb-5 col-lg-6","data-aos":"fade-right","data-aos-offset":"0"},s.a.createElement("label",{className:"text-white"},"Project Image Link"),s.a.createElement("input",{value:a.img,type:"text",className:"form-control",placeholder:"eg.drive.google.com/image.jpg",name:"img",onChange:f,required:!0})),s.a.createElement("div",{className:"form-group mb-5 col-lg-6","data-aos":"fade-right","data-aos-offset":"0"},s.a.createElement("label",{className:"text-white"},"Project Tags"),s.a.createElement("input",{value:a.tags,type:"text",className:"form-control",placeholder:"Enter space seperated tags : 'React Node-js'",name:"tags",onChange:f})),s.a.createElement("div",{className:"col-12 d-flex px-2"},s.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary","data-aos":"flip-right","data-aos-offset":"0"},"Submit Project")))))},A=a(199),C=function(e){var t=e.component,a=e.isAuth,n=Object(A.a)(e,["component","isAuth"]);return console.log("Private"),s.a.createElement(i.b,Object.assign({},n,{render:function(e){return a?s.a.createElement(t,e):s.a.createElement(i.a,{to:"/login"})}}))},P=a(200),L=a.n(P),z=function(){var e=Object(c.a)(r.a.mark(function e(t){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post("/api/user/login",Object(N.a)({},t));case 2:if(!(a=e.sent).data.isAuth){e.next=6;break}return sessionStorage.setItem("auth-token",a.data.token),e.abrupt("return",!0);case 6:return e.abrupt("return",!1);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(c.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,k.a.post("/api/user/verify",{token:t});case 3:if(!e.sent.data.isAuth){e.next=6;break}return e.abrupt("return",!0);case 6:return e.abrupt("return",!1);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(l.useState)({username:"",password:""}),t=Object(o.a)(e,2),a=t[0],n=t[1],m=Object(l.useState)(!1),u=Object(o.a)(m,2),p=u[0],d=u[1],f=Object(l.useContext)(J),b=f.user,g=f.setUser,h=function(e){var t=e.target.name;n(Object(N.a)({},a,Object(y.a)({},t,e.target.value)))},E=function(){var e=Object(c.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,z(a);case 3:e.sent&&(g({isAuth:!0}),d(!0));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return p&&b.isAuth?s.a.createElement(i.a,{to:"/"}):s.a.createElement("main",{className:L.a.works},s.a.createElement("div",{className:"container py-2 pt-5"},s.a.createElement("h1",{className:"display-3 text-primary text-center mt-5 mb-5","data-aos":"fade-down"},"Login if you are the owner of the website"),s.a.createElement("form",{className:"row mt-5 mb-5 justify-content-center",onSubmit:E},s.a.createElement("div",{className:"form-group mb-5 col-lg-6 mx-2","data-aos":"fade-right"},s.a.createElement("label",{className:"text-white"},"User Name"),s.a.createElement("input",{value:a.username,type:"text",className:"form-control",name:"username",required:!0,onChange:h})),s.a.createElement("div",{className:"form-group mb-5 col-lg-6 mx-2","data-aos":"fade-right"},s.a.createElement("label",{className:"text-white"},"Password"),s.a.createElement("input",{value:a.password,type:"password",className:"form-control",name:"password",required:!0,onChange:h})),s.a.createElement("div",{className:"col-12 d-flex px-2 justify-content-center"},s.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary","data-aos":"flip-right","data-aos-offset":"0"},"Login")))))},D=a(131),T=a(202),U=a.n(T),_=function(){return Object(l.useEffect)(function(){var e=document.querySelector("img[lazySrc]");e.setAttribute("src",e.getAttribute("lazySrc"))},[]),s.a.createElement("div",{className:U.a.overlay},s.a.createElement("img",{lazySrc:"https://drive.google.com/uc?id=1HCINISkACsGbnrMDYTi9l4ICyS87Ds_S",alt:"",className:"overlay-image"}))};a.d(t,"a",function(){return J});var J=Object(l.createContext)(),M=Object(l.lazy)(function(){return Promise.all([a.e(0),a.e(8),a.e(7)]).then(a.bind(null,561))}),F=Object(l.lazy)(function(){return Promise.all([a.e(0),a.e(4)]).then(a.bind(null,564))}),H=Object(l.lazy)(function(){return a.e(5).then(a.bind(null,562))}),B=Object(l.lazy)(function(){return a.e(6).then(a.bind(null,563))});t.b=function(){var e=Object(l.useState)({isAuth:!1}),t=Object(o.a)(e,2),a=t[0],n=t[1],u=Object(l.useState)(!0),d=Object(o.a)(u,2),f=d[0],b=d[1];return Object(l.useEffect)(function(){p.a.init({offset:200,duration:700,easing:"ease-in-sine",delay:100})}),Object(l.useEffect)(function(){b(!0),document.querySelector(".overlay-image").addEventListener("load",function(){b(!1)})},[]),Object(l.useEffect)(function(){Object(c.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(sessionStorage.getItem("auth-token"));case 2:e.sent&&n({isAuth:!0});case 4:case"end":return e.stop()}},e)}))()},[]),s.a.createElement(m.a,null,s.a.createElement(J.Provider,{value:{user:a,setUser:n}},s.a.createElement(l.Suspense,{fallback:s.a.createElement(D.a,{width:150})},s.a.createElement(v,null,s.a.createElement("div",{className:"App"},f?s.a.createElement(D.a,{width:150}):s.a.createElement(s.a.Fragment,null,s.a.createElement(j,null),s.a.createElement(i.d,null,s.a.createElement(i.b,{path:"/about",component:B}),s.a.createElement(i.b,{path:"/login",component:q}),s.a.createElement(i.b,{path:"/contact",component:H}),s.a.createElement(C,{path:"/projects/add",component:S,isAuth:a.isAuth}),s.a.createElement(i.b,{path:"/projects",component:F}),s.a.createElement(i.b,{path:"/",component:M})))))),s.a.createElement(_,null)))}},198:function(e,t,a){},200:function(e,t,a){},202:function(e,t,a){e.exports={overlay:"overlay_overlay__1Tow7"}},205:function(e,t,a){e.exports=a(545)},498:function(e,t,a){},503:function(e,t,a){},545:function(e,t,a){"use strict";a.r(t);a(206),a(208),a(209),a(210),a(211),a(212),a(213),a(214),a(215),a(216),a(217),a(218),a(219),a(220),a(221),a(222),a(223),a(224),a(225),a(226),a(227),a(228),a(229),a(230),a(231),a(232),a(233),a(91),a(234),a(235),a(236),a(237),a(238),a(239),a(240),a(241),a(242),a(243),a(244),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(254),a(255),a(257),a(258),a(259),a(260),a(118),a(261),a(262),a(263),a(264),a(265),a(266),a(267),a(268),a(269),a(270),a(271),a(272),a(273),a(274),a(275),a(276),a(277),a(278),a(279),a(280),a(281),a(282),a(283),a(284),a(285),a(286),a(287),a(288),a(289),a(290),a(291),a(292),a(293),a(294),a(295),a(296),a(297),a(298),a(299),a(300),a(301),a(302),a(303),a(304),a(305),a(306),a(307),a(308),a(309),a(310),a(311),a(312),a(313),a(315),a(316),a(317),a(318),a(319),a(320),a(321),a(323),a(324),a(325),a(326),a(327),a(328),a(329),a(330),a(331),a(332),a(333),a(334),a(335),a(336),a(337),a(168),a(338),a(339),a(340),a(341),a(169),a(342),a(343),a(344),a(345),a(346),a(347),a(348),a(349),a(350),a(351),a(352),a(353),a(354),a(355),a(356),a(357),a(358),a(359),a(360),a(361),a(362),a(363),a(364),a(365),a(366),a(367),a(368),a(369),a(370),a(371),a(372),a(373),a(374),a(375),a(376),a(377),a(378),a(379),a(380),a(381),a(382),a(383),a(384),a(385),a(386),a(387),a(388),a(389),a(390),a(391),a(392),a(393),a(394),a(395),a(396),a(397),a(398),a(399),a(400),a(129),a(401),a(402),a(403),a(404),a(405),a(406),a(407),a(408),a(409),a(410),a(411),a(412),a(413),a(414),a(415),a(417),a(418),a(419),a(420),a(421),a(422),a(423),a(424),a(425),a(426),a(427),a(428),a(429),a(430),a(431),a(432),a(433),a(434),a(435),a(436),a(437),a(438),a(439),a(440),a(441),a(442),a(443),a(444),a(445),a(446),a(447),a(448),a(449),a(450),a(451),a(452),a(453),a(454),a(455),a(456),a(457),a(458),a(459),a(460),a(461),a(462),a(463),a(464),a(465),a(466),a(467),a(468),a(469),a(470),a(471),a(472),a(473),a(474),a(475),a(476),a(477),a(478),a(479),a(480),a(481),a(482),a(483),a(484),a(485),a(486),a(487),a(488),a(489),a(491),a(180);var n=a(1),r=a.n(n),c=a(191),o=a.n(c),l=a(190),s=(a(541),a(135)),m=a(106),i=a(87);s.b.add(m.c,m.b,i.d,i.a,m.a,i.b,i.c),o.a.render(r.a.createElement(l.b,null),document.getElementById("root"))}},[[205,2,3]]]);
//# sourceMappingURL=main.3616e5d6.chunk.js.map