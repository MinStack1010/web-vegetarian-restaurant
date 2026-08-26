import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { defineComponent, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { V as VApp, d as VMain, f as VContainer, g as VRow, h as VCol } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const heroImage = "" + buildAssetsURL("B\xFAn m\xEC chay n\u1EA5u b\u1EB1ng t\xE2m.D9j9fBuz.webp");
const storyImage = "" + buildAssetsURL("C\xE2u Chuy\u1EC7n Mimi.CQ96N8yt.webp");
const nuocLeo = "" + buildAssetsURL("N\u01B0\u1EDBc l\xE8o thanh khi\u1EBFt.D0OD5VqK.webp");
const damVi = "" + buildAssetsURL("\u0110\u1EADm v\u1ECB gia truy\u1EC1n.Ds6LMbJh.webp");
const viCay = "" + buildAssetsURL("V\u1ECB cay x\u1EE9 Hu\u1EBF.XESEuTqt.webp");
const thanhMat = "" + buildAssetsURL("Thanh m\xE1t m\xF9a h\xE8.C4Ko4F-3.webp");
const binhDi = "" + buildAssetsURL("B\xECnh d\u1ECB_ \u1EA5m l\xF2ng.CYQzz25S.webp");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const menu = [
      { eyebrow: "N\u01AF\u1EDAC L\xC8O THANH KHI\u1EBET", name: "H\u1EE7 ti\u1EBFu chay", price: "25.000\u0111", image: nuocLeo },
      { eyebrow: "S\u1EE2I M\xCC D\u1EBAO DAI", name: "M\xEC t\u01B0\u01A1i chay", price: "26.000\u0111", image: storyImage },
      { eyebrow: "\u0110\u1EACM V\u1ECA GIA TRUY\u1EC0N", name: "M\xEC g\xF3i chay", price: "25.000\u0111", image: damVi },
      { eyebrow: "V\u1ECA CAY \u0110\u1EACM \u0110\xC0 \xB7 X\u1EE8 HU\u1EBE", name: "B\xFAn b\xF2 Hu\u1EBF chay", price: "27.000\u0111", image: viCay },
      { eyebrow: "THANH M\xC1T M\xD9A H\xC8", name: "Mi\u1EBFn m\u0103ng chay", price: "26.000\u0111", image: thanhMat },
      { eyebrow: "B\xCCNH D\u1ECA, \u1EA4M L\xD2NG", name: "B\xFAn m\u0103ng chay", price: "25.000\u0111", image: binhDi }
    ];
    const scrollTo = (id) => {
      var _a;
      return (_a = (void 0).querySelector(id)) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VApp, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VMain, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<section id="home" class="hero"${_scopeId2}><div class="hero-copy"${_scopeId2}><p class="eyebrow"${_scopeId2}>QU\xC1N CHAY MIMI \xB7 B\u1EBEP THI\u1EC0N L\xC0NH</p><h1${_scopeId2}>Thu\u1EA7n Khi\u1EBFt.<br${_scopeId2}><em${_scopeId2}>\u0110\u1EADm \u0110\xE0.</em></h1><p class="hero-desc"${_scopeId2}>B\xFAn m\xEC chay b\u1EB1ng t\xE2m \u2014 n\u01B0\u1EDBc l\xE8o h\u1EA7m t\u1EEB<br class="desktop-only"${_scopeId2}> n\u1EA5m &amp; rau c\u1EE7 t\u1EF1 nhi\xEAn, kh\xF4ng h\xE0nh t\u1ECFi. Ch\u1EC9 c\u1EA7n<br class="desktop-only"${_scopeId2}> th\u01B0\u1EDFng duy\xEAn b\u1EA1n.</p><div class="hero-actions"${_scopeId2}><button class="btn-primary"${_scopeId2}>XEM TH\u1EF0C \u0110\u01A0N</button><button class="btn-outline"${_scopeId2}>C\xC2U CHUY\u1EC6N MIMI</button></div></div><div class="hero-photo"${_scopeId2}><img${ssrRenderAttr("src", unref(heroImage))} alt="M\xF3n chay MIMI"${_scopeId2}></div><button class="scroll-cue"${_scopeId2}><span${_scopeId2}>CU\u1ED8N XU\u1ED0NG</span><b${_scopeId2}>\u2304</b></button></section><section id="menu" class="menu-section"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VContainer, { class: "content-width" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="menu-heading"${_scopeId3}><div${_scopeId3}><p class="eyebrow"${_scopeId3}>TH\u1EF0C \u0110\u01A0N CHAY</p><h2${_scopeId3}>S\xE1u t\xF4, <em${_scopeId3}>m\u1ED9t t\xE2m</em></h2></div><p class="menu-intro"${_scopeId3}>M\u1ED7i m\xF3n l\xE0 m\u1ED9t h\xE0nh tr\xECnh c\u1EE7a v\u1ECB gi\xE1c \u2014 t\u1EEB<br${_scopeId3}>n\u01B0\u1EDBc l\xE8o s\xE2u \u0111\u1EADm \u0111\u1EBFn s\u1EE3i b\xFAn \u0111\u1EADm \u0111\xE0. Ch\u1EA1m \u0111\u1EC3<br${_scopeId3}>m\u1EDF h\u1ED3 s\u01A1 nguy\xEAn li\u1EC7u.</p></div>`);
                        _push4(ssrRenderComponent(VRow, {
                          class: "menu-grid",
                          "no-gutters": ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(menu, (item) => {
                                _push5(ssrRenderComponent(VCol, {
                                  key: item.name,
                                  cols: "12",
                                  sm: "6",
                                  md: "4",
                                  class: "menu-item"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<article${_scopeId5}><div class="dish-image"${_scopeId5}><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.name)}${_scopeId5}><button class="plus"${_scopeId5}>+</button></div><p class="dish-eyebrow"${_scopeId5}>${ssrInterpolate(item.eyebrow)}</p><h3${_scopeId5}>${ssrInterpolate(item.name)}</h3><p class="price"${_scopeId5}>${ssrInterpolate(item.price)}</p></article>`);
                                    } else {
                                      return [
                                        createVNode("article", null, [
                                          createVNode("div", { class: "dish-image" }, [
                                            createVNode("img", {
                                              src: item.image,
                                              alt: item.name
                                            }, null, 8, ["src", "alt"]),
                                            createVNode("button", { class: "plus" }, "+")
                                          ]),
                                          createVNode("p", { class: "dish-eyebrow" }, toDisplayString(item.eyebrow), 1),
                                          createVNode("h3", null, toDisplayString(item.name), 1),
                                          createVNode("p", { class: "price" }, toDisplayString(item.price), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(), createBlock(Fragment, null, renderList(menu, (item) => {
                                  return createVNode(VCol, {
                                    key: item.name,
                                    cols: "12",
                                    sm: "6",
                                    md: "4",
                                    class: "menu-item"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("article", null, [
                                        createVNode("div", { class: "dish-image" }, [
                                          createVNode("img", {
                                            src: item.image,
                                            alt: item.name
                                          }, null, 8, ["src", "alt"]),
                                          createVNode("button", { class: "plus" }, "+")
                                        ]),
                                        createVNode("p", { class: "dish-eyebrow" }, toDisplayString(item.eyebrow), 1),
                                        createVNode("h3", null, toDisplayString(item.name), 1),
                                        createVNode("p", { class: "price" }, toDisplayString(item.price), 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "menu-heading" }, [
                            createVNode("div", null, [
                              createVNode("p", { class: "eyebrow" }, "TH\u1EF0C \u0110\u01A0N CHAY"),
                              createVNode("h2", null, [
                                createTextVNode("S\xE1u t\xF4, "),
                                createVNode("em", null, "m\u1ED9t t\xE2m")
                              ])
                            ]),
                            createVNode("p", { class: "menu-intro" }, [
                              createTextVNode("M\u1ED7i m\xF3n l\xE0 m\u1ED9t h\xE0nh tr\xECnh c\u1EE7a v\u1ECB gi\xE1c \u2014 t\u1EEB"),
                              createVNode("br"),
                              createTextVNode("n\u01B0\u1EDBc l\xE8o s\xE2u \u0111\u1EADm \u0111\u1EBFn s\u1EE3i b\xFAn \u0111\u1EADm \u0111\xE0. Ch\u1EA1m \u0111\u1EC3"),
                              createVNode("br"),
                              createTextVNode("m\u1EDF h\u1ED3 s\u01A1 nguy\xEAn li\u1EC7u.")
                            ])
                          ]),
                          createVNode(VRow, {
                            class: "menu-grid",
                            "no-gutters": ""
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(menu, (item) => {
                                return createVNode(VCol, {
                                  key: item.name,
                                  cols: "12",
                                  sm: "6",
                                  md: "4",
                                  class: "menu-item"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("article", null, [
                                      createVNode("div", { class: "dish-image" }, [
                                        createVNode("img", {
                                          src: item.image,
                                          alt: item.name
                                        }, null, 8, ["src", "alt"]),
                                        createVNode("button", { class: "plus" }, "+")
                                      ]),
                                      createVNode("p", { class: "dish-eyebrow" }, toDisplayString(item.eyebrow), 1),
                                      createVNode("h3", null, toDisplayString(item.name), 1),
                                      createVNode("p", { class: "price" }, toDisplayString(item.price), 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 64))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</section><section id="story" class="story-section"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VContainer, { class: "content-width" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, { align: "center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "6",
                                class: "story-photo-col"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="story-photo"${_scopeId5}><div class="soft-circle circle-a"${_scopeId5}></div><div class="soft-circle circle-b"${_scopeId5}></div><img${ssrRenderAttr("src", unref(storyImage))} alt="C\xE2u chuy\u1EC7n MIMI"${_scopeId5}></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "story-photo" }, [
                                        createVNode("div", { class: "soft-circle circle-a" }),
                                        createVNode("div", { class: "soft-circle circle-b" }),
                                        createVNode("img", {
                                          src: unref(storyImage),
                                          alt: "C\xE2u chuy\u1EC7n MIMI"
                                        }, null, 8, ["src"])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="story-copy"${_scopeId5}><p class="eyebrow"${_scopeId5}>C\xC2U CHUY\u1EC6N MIMI</p><h2${_scopeId5}>B\u1EBFp nh\xE0, <em${_scopeId5}>\u1EBFp l\xE0nh</em></h2><p${_scopeId5}>MIMI b\u1EAFt \u0111\u1EA7u t\u1EEB m\u1ED9t g\xF3c b\u1EBFp nh\u1ECF, n\u01A1i b\u1EADn b\u1EEFa \u0103n \u0111\u01B0\u1EE3c n\u1EA5u b\u1EB1ng m\u1ED7i duy\xEAn. Kh\xF4ng h\xE0nh t\u1ECFi \u2014 ch\u1EC9 n\u1EA5m h\u01B0\u01A1ng, c\xE0 chua, v\xE0 t\xECnh gian.</p><p${_scopeId5}>Ch\xFAng t\xF4i gi\u1EEF nguy\xEAn c\xE1ch n\u1EA5u \u1EA5y: n\u01B0\u1EDBc l\xE8o h\u1EA7m ch\u1EADm, topping c\u1EAFt tay, gia v\u1ECB chay thu\u1EA7n khi\u1EBFt. M\u1ED7i t\xF4 l\xE0 m\u1ED9t l\u1EDDi ch\xFAc l\xE0nh d\xE0nh cho ng\u01B0\u1EDDi th\u01B0\u1EDFng th\u1EE9c v\xE0 cho mu\xF4n lo\xE0i.</p><div class="stats"${_scopeId5}><div${_scopeId5}><strong${_scopeId5}>100%</strong><span${_scopeId5}>THU\u1EA6N CHAY</span></div><div${_scopeId5}><strong${_scopeId5}>6</strong><span${_scopeId5}>M\xD3N N\u1EA4U TAY</span></div><div${_scopeId5}><strong${_scopeId5}>06\u201320H</strong><span${_scopeId5}>M\u1EDE C\u1EECA</span></div></div></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "story-copy" }, [
                                        createVNode("p", { class: "eyebrow" }, "C\xC2U CHUY\u1EC6N MIMI"),
                                        createVNode("h2", null, [
                                          createTextVNode("B\u1EBFp nh\xE0, "),
                                          createVNode("em", null, "\u1EBFp l\xE0nh")
                                        ]),
                                        createVNode("p", null, "MIMI b\u1EAFt \u0111\u1EA7u t\u1EEB m\u1ED9t g\xF3c b\u1EBFp nh\u1ECF, n\u01A1i b\u1EADn b\u1EEFa \u0103n \u0111\u01B0\u1EE3c n\u1EA5u b\u1EB1ng m\u1ED7i duy\xEAn. Kh\xF4ng h\xE0nh t\u1ECFi \u2014 ch\u1EC9 n\u1EA5m h\u01B0\u01A1ng, c\xE0 chua, v\xE0 t\xECnh gian."),
                                        createVNode("p", null, "Ch\xFAng t\xF4i gi\u1EEF nguy\xEAn c\xE1ch n\u1EA5u \u1EA5y: n\u01B0\u1EDBc l\xE8o h\u1EA7m ch\u1EADm, topping c\u1EAFt tay, gia v\u1ECB chay thu\u1EA7n khi\u1EBFt. M\u1ED7i t\xF4 l\xE0 m\u1ED9t l\u1EDDi ch\xFAc l\xE0nh d\xE0nh cho ng\u01B0\u1EDDi th\u01B0\u1EDFng th\u1EE9c v\xE0 cho mu\xF4n lo\xE0i."),
                                        createVNode("div", { class: "stats" }, [
                                          createVNode("div", null, [
                                            createVNode("strong", null, "100%"),
                                            createVNode("span", null, "THU\u1EA6N CHAY")
                                          ]),
                                          createVNode("div", null, [
                                            createVNode("strong", null, "6"),
                                            createVNode("span", null, "M\xD3N N\u1EA4U TAY")
                                          ]),
                                          createVNode("div", null, [
                                            createVNode("strong", null, "06\u201320H"),
                                            createVNode("span", null, "M\u1EDE C\u1EECA")
                                          ])
                                        ])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6",
                                  class: "story-photo-col"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "story-photo" }, [
                                      createVNode("div", { class: "soft-circle circle-a" }),
                                      createVNode("div", { class: "soft-circle circle-b" }),
                                      createVNode("img", {
                                        src: unref(storyImage),
                                        alt: "C\xE2u chuy\u1EC7n MIMI"
                                      }, null, 8, ["src"])
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "story-copy" }, [
                                      createVNode("p", { class: "eyebrow" }, "C\xC2U CHUY\u1EC6N MIMI"),
                                      createVNode("h2", null, [
                                        createTextVNode("B\u1EBFp nh\xE0, "),
                                        createVNode("em", null, "\u1EBFp l\xE0nh")
                                      ]),
                                      createVNode("p", null, "MIMI b\u1EAFt \u0111\u1EA7u t\u1EEB m\u1ED9t g\xF3c b\u1EBFp nh\u1ECF, n\u01A1i b\u1EADn b\u1EEFa \u0103n \u0111\u01B0\u1EE3c n\u1EA5u b\u1EB1ng m\u1ED7i duy\xEAn. Kh\xF4ng h\xE0nh t\u1ECFi \u2014 ch\u1EC9 n\u1EA5m h\u01B0\u01A1ng, c\xE0 chua, v\xE0 t\xECnh gian."),
                                      createVNode("p", null, "Ch\xFAng t\xF4i gi\u1EEF nguy\xEAn c\xE1ch n\u1EA5u \u1EA5y: n\u01B0\u1EDBc l\xE8o h\u1EA7m ch\u1EADm, topping c\u1EAFt tay, gia v\u1ECB chay thu\u1EA7n khi\u1EBFt. M\u1ED7i t\xF4 l\xE0 m\u1ED9t l\u1EDDi ch\xFAc l\xE0nh d\xE0nh cho ng\u01B0\u1EDDi th\u01B0\u1EDFng th\u1EE9c v\xE0 cho mu\xF4n lo\xE0i."),
                                      createVNode("div", { class: "stats" }, [
                                        createVNode("div", null, [
                                          createVNode("strong", null, "100%"),
                                          createVNode("span", null, "THU\u1EA6N CHAY")
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("strong", null, "6"),
                                          createVNode("span", null, "M\xD3N N\u1EA4U TAY")
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("strong", null, "06\u201320H"),
                                          createVNode("span", null, "M\u1EDE C\u1EECA")
                                        ])
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRow, { align: "center" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "6",
                                class: "story-photo-col"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "story-photo" }, [
                                    createVNode("div", { class: "soft-circle circle-a" }),
                                    createVNode("div", { class: "soft-circle circle-b" }),
                                    createVNode("img", {
                                      src: unref(storyImage),
                                      alt: "C\xE2u chuy\u1EC7n MIMI"
                                    }, null, 8, ["src"])
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "story-copy" }, [
                                    createVNode("p", { class: "eyebrow" }, "C\xC2U CHUY\u1EC6N MIMI"),
                                    createVNode("h2", null, [
                                      createTextVNode("B\u1EBFp nh\xE0, "),
                                      createVNode("em", null, "\u1EBFp l\xE0nh")
                                    ]),
                                    createVNode("p", null, "MIMI b\u1EAFt \u0111\u1EA7u t\u1EEB m\u1ED9t g\xF3c b\u1EBFp nh\u1ECF, n\u01A1i b\u1EADn b\u1EEFa \u0103n \u0111\u01B0\u1EE3c n\u1EA5u b\u1EB1ng m\u1ED7i duy\xEAn. Kh\xF4ng h\xE0nh t\u1ECFi \u2014 ch\u1EC9 n\u1EA5m h\u01B0\u01A1ng, c\xE0 chua, v\xE0 t\xECnh gian."),
                                    createVNode("p", null, "Ch\xFAng t\xF4i gi\u1EEF nguy\xEAn c\xE1ch n\u1EA5u \u1EA5y: n\u01B0\u1EDBc l\xE8o h\u1EA7m ch\u1EADm, topping c\u1EAFt tay, gia v\u1ECB chay thu\u1EA7n khi\u1EBFt. M\u1ED7i t\xF4 l\xE0 m\u1ED9t l\u1EDDi ch\xFAc l\xE0nh d\xE0nh cho ng\u01B0\u1EDDi th\u01B0\u1EDFng th\u1EE9c v\xE0 cho mu\xF4n lo\xE0i."),
                                    createVNode("div", { class: "stats" }, [
                                      createVNode("div", null, [
                                        createVNode("strong", null, "100%"),
                                        createVNode("span", null, "THU\u1EA6N CHAY")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "6"),
                                        createVNode("span", null, "M\xD3N N\u1EA4U TAY")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "06\u201320H"),
                                        createVNode("span", null, "M\u1EDE C\u1EECA")
                                      ])
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</section><section id="contact" class="visit-bar"${_scopeId2}><button${_scopeId2}> Xem th\u1EF1c \u0111\u01A1n t\u1EA1i qu\xE1n </button><button class="delivery"${_scopeId2}>\u0110\u1EB7t giao t\u1EADn n\u01A1i</button></section><footer${_scopeId2}>`);
                  _push3(ssrRenderComponent(VContainer, { class: "content-width footer-content" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="footer-main"${_scopeId3}><div${_scopeId3}><h4${_scopeId3}>QU\xC1N CHAY MIMI</h4><p${_scopeId3}>Thu\u1EA7n khi\u1EBFt. \u0110\u1EADm \u0111\xE0. B\u1EBFp thi\u1EC1n l\xE0nh gi\u1EEFa l\xF2ng<br${_scopeId3}>th\xE0nh ph\u1ED1.</p></div><div class="footer-info"${_scopeId3}><p${_scopeId3}>\u25C9 \xA0 Xem v\u1ECB tr\xED tr\xEAn Google Maps \u2197</p><p${_scopeId3}>\u25C9 \xA0 0986 284 748</p><p${_scopeId3}>\u25C9 \xA0 06:00\u201320:00 \xB7 M\u1EDF c\u1EA3 tu\u1EA7n</p></div><div class="social"${_scopeId3}><span${_scopeId3}>THEO D\xD5I MIMI</span><div${_scopeId3}><b${_scopeId3}>\u25CE</b><b${_scopeId3}>f</b></div></div></div><div class="footer-bottom"${_scopeId3}><span${_scopeId3}>\xA9 2026 Qu\xE1n Chay Mimi. M\u1ECDi quy\u1EC1n \u0111\u01B0\u1EE3c b\u1EA3o l\u01B0u.</span><span${_scopeId3}>N\u1EA4U B\u1EB0NG T\xC2M \xB7 PH\u1EE4C V\u1EE4 B\u1EB0NG AN</span></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "footer-main" }, [
                            createVNode("div", null, [
                              createVNode("h4", null, "QU\xC1N CHAY MIMI"),
                              createVNode("p", null, [
                                createTextVNode("Thu\u1EA7n khi\u1EBFt. \u0110\u1EADm \u0111\xE0. B\u1EBFp thi\u1EC1n l\xE0nh gi\u1EEFa l\xF2ng"),
                                createVNode("br"),
                                createTextVNode("th\xE0nh ph\u1ED1.")
                              ])
                            ]),
                            createVNode("div", { class: "footer-info" }, [
                              createVNode("p", null, "\u25C9 \xA0 Xem v\u1ECB tr\xED tr\xEAn Google Maps \u2197"),
                              createVNode("p", null, "\u25C9 \xA0 0986 284 748"),
                              createVNode("p", null, "\u25C9 \xA0 06:00\u201320:00 \xB7 M\u1EDF c\u1EA3 tu\u1EA7n")
                            ]),
                            createVNode("div", { class: "social" }, [
                              createVNode("span", null, "THEO D\xD5I MIMI"),
                              createVNode("div", null, [
                                createVNode("b", null, "\u25CE"),
                                createVNode("b", null, "f")
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "footer-bottom" }, [
                            createVNode("span", null, "\xA9 2026 Qu\xE1n Chay Mimi. M\u1ECDi quy\u1EC1n \u0111\u01B0\u1EE3c b\u1EA3o l\u01B0u."),
                            createVNode("span", null, "N\u1EA4U B\u1EB0NG T\xC2M \xB7 PH\u1EE4C V\u1EE4 B\u1EB0NG AN")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</footer>`);
                } else {
                  return [
                    createVNode("section", {
                      id: "home",
                      class: "hero"
                    }, [
                      createVNode("div", { class: "hero-copy" }, [
                        createVNode("p", { class: "eyebrow" }, "QU\xC1N CHAY MIMI \xB7 B\u1EBEP THI\u1EC0N L\xC0NH"),
                        createVNode("h1", null, [
                          createTextVNode("Thu\u1EA7n Khi\u1EBFt."),
                          createVNode("br"),
                          createVNode("em", null, "\u0110\u1EADm \u0110\xE0.")
                        ]),
                        createVNode("p", { class: "hero-desc" }, [
                          createTextVNode("B\xFAn m\xEC chay b\u1EB1ng t\xE2m \u2014 n\u01B0\u1EDBc l\xE8o h\u1EA7m t\u1EEB"),
                          createVNode("br", { class: "desktop-only" }),
                          createTextVNode(" n\u1EA5m & rau c\u1EE7 t\u1EF1 nhi\xEAn, kh\xF4ng h\xE0nh t\u1ECFi. Ch\u1EC9 c\u1EA7n"),
                          createVNode("br", { class: "desktop-only" }),
                          createTextVNode(" th\u01B0\u1EDFng duy\xEAn b\u1EA1n.")
                        ]),
                        createVNode("div", { class: "hero-actions" }, [
                          createVNode("button", {
                            class: "btn-primary",
                            onClick: ($event) => scrollTo("#menu")
                          }, "XEM TH\u1EF0C \u0110\u01A0N", 8, ["onClick"]),
                          createVNode("button", {
                            class: "btn-outline",
                            onClick: ($event) => scrollTo("#story")
                          }, "C\xC2U CHUY\u1EC6N MIMI", 8, ["onClick"])
                        ])
                      ]),
                      createVNode("div", { class: "hero-photo" }, [
                        createVNode("img", {
                          src: unref(heroImage),
                          alt: "M\xF3n chay MIMI"
                        }, null, 8, ["src"])
                      ]),
                      createVNode("button", {
                        class: "scroll-cue",
                        onClick: ($event) => scrollTo("#menu")
                      }, [
                        createVNode("span", null, "CU\u1ED8N XU\u1ED0NG"),
                        createVNode("b", null, "\u2304")
                      ], 8, ["onClick"])
                    ]),
                    createVNode("section", {
                      id: "menu",
                      class: "menu-section"
                    }, [
                      createVNode(VContainer, { class: "content-width" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "menu-heading" }, [
                            createVNode("div", null, [
                              createVNode("p", { class: "eyebrow" }, "TH\u1EF0C \u0110\u01A0N CHAY"),
                              createVNode("h2", null, [
                                createTextVNode("S\xE1u t\xF4, "),
                                createVNode("em", null, "m\u1ED9t t\xE2m")
                              ])
                            ]),
                            createVNode("p", { class: "menu-intro" }, [
                              createTextVNode("M\u1ED7i m\xF3n l\xE0 m\u1ED9t h\xE0nh tr\xECnh c\u1EE7a v\u1ECB gi\xE1c \u2014 t\u1EEB"),
                              createVNode("br"),
                              createTextVNode("n\u01B0\u1EDBc l\xE8o s\xE2u \u0111\u1EADm \u0111\u1EBFn s\u1EE3i b\xFAn \u0111\u1EADm \u0111\xE0. Ch\u1EA1m \u0111\u1EC3"),
                              createVNode("br"),
                              createTextVNode("m\u1EDF h\u1ED3 s\u01A1 nguy\xEAn li\u1EC7u.")
                            ])
                          ]),
                          createVNode(VRow, {
                            class: "menu-grid",
                            "no-gutters": ""
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(menu, (item) => {
                                return createVNode(VCol, {
                                  key: item.name,
                                  cols: "12",
                                  sm: "6",
                                  md: "4",
                                  class: "menu-item"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("article", null, [
                                      createVNode("div", { class: "dish-image" }, [
                                        createVNode("img", {
                                          src: item.image,
                                          alt: item.name
                                        }, null, 8, ["src", "alt"]),
                                        createVNode("button", { class: "plus" }, "+")
                                      ]),
                                      createVNode("p", { class: "dish-eyebrow" }, toDisplayString(item.eyebrow), 1),
                                      createVNode("h3", null, toDisplayString(item.name), 1),
                                      createVNode("p", { class: "price" }, toDisplayString(item.price), 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 64))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("section", {
                      id: "story",
                      class: "story-section"
                    }, [
                      createVNode(VContainer, { class: "content-width" }, {
                        default: withCtx(() => [
                          createVNode(VRow, { align: "center" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "6",
                                class: "story-photo-col"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "story-photo" }, [
                                    createVNode("div", { class: "soft-circle circle-a" }),
                                    createVNode("div", { class: "soft-circle circle-b" }),
                                    createVNode("img", {
                                      src: unref(storyImage),
                                      alt: "C\xE2u chuy\u1EC7n MIMI"
                                    }, null, 8, ["src"])
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "story-copy" }, [
                                    createVNode("p", { class: "eyebrow" }, "C\xC2U CHUY\u1EC6N MIMI"),
                                    createVNode("h2", null, [
                                      createTextVNode("B\u1EBFp nh\xE0, "),
                                      createVNode("em", null, "\u1EBFp l\xE0nh")
                                    ]),
                                    createVNode("p", null, "MIMI b\u1EAFt \u0111\u1EA7u t\u1EEB m\u1ED9t g\xF3c b\u1EBFp nh\u1ECF, n\u01A1i b\u1EADn b\u1EEFa \u0103n \u0111\u01B0\u1EE3c n\u1EA5u b\u1EB1ng m\u1ED7i duy\xEAn. Kh\xF4ng h\xE0nh t\u1ECFi \u2014 ch\u1EC9 n\u1EA5m h\u01B0\u01A1ng, c\xE0 chua, v\xE0 t\xECnh gian."),
                                    createVNode("p", null, "Ch\xFAng t\xF4i gi\u1EEF nguy\xEAn c\xE1ch n\u1EA5u \u1EA5y: n\u01B0\u1EDBc l\xE8o h\u1EA7m ch\u1EADm, topping c\u1EAFt tay, gia v\u1ECB chay thu\u1EA7n khi\u1EBFt. M\u1ED7i t\xF4 l\xE0 m\u1ED9t l\u1EDDi ch\xFAc l\xE0nh d\xE0nh cho ng\u01B0\u1EDDi th\u01B0\u1EDFng th\u1EE9c v\xE0 cho mu\xF4n lo\xE0i."),
                                    createVNode("div", { class: "stats" }, [
                                      createVNode("div", null, [
                                        createVNode("strong", null, "100%"),
                                        createVNode("span", null, "THU\u1EA6N CHAY")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "6"),
                                        createVNode("span", null, "M\xD3N N\u1EA4U TAY")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "06\u201320H"),
                                        createVNode("span", null, "M\u1EDE C\u1EECA")
                                      ])
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("section", {
                      id: "contact",
                      class: "visit-bar"
                    }, [
                      createVNode("button", null, " Xem th\u1EF1c \u0111\u01A1n t\u1EA1i qu\xE1n "),
                      createVNode("button", { class: "delivery" }, "\u0110\u1EB7t giao t\u1EADn n\u01A1i")
                    ]),
                    createVNode("footer", null, [
                      createVNode(VContainer, { class: "content-width footer-content" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "footer-main" }, [
                            createVNode("div", null, [
                              createVNode("h4", null, "QU\xC1N CHAY MIMI"),
                              createVNode("p", null, [
                                createTextVNode("Thu\u1EA7n khi\u1EBFt. \u0110\u1EADm \u0111\xE0. B\u1EBFp thi\u1EC1n l\xE0nh gi\u1EEFa l\xF2ng"),
                                createVNode("br"),
                                createTextVNode("th\xE0nh ph\u1ED1.")
                              ])
                            ]),
                            createVNode("div", { class: "footer-info" }, [
                              createVNode("p", null, "\u25C9 \xA0 Xem v\u1ECB tr\xED tr\xEAn Google Maps \u2197"),
                              createVNode("p", null, "\u25C9 \xA0 0986 284 748"),
                              createVNode("p", null, "\u25C9 \xA0 06:00\u201320:00 \xB7 M\u1EDF c\u1EA3 tu\u1EA7n")
                            ]),
                            createVNode("div", { class: "social" }, [
                              createVNode("span", null, "THEO D\xD5I MIMI"),
                              createVNode("div", null, [
                                createVNode("b", null, "\u25CE"),
                                createVNode("b", null, "f")
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "footer-bottom" }, [
                            createVNode("span", null, "\xA9 2026 Qu\xE1n Chay Mimi. M\u1ECDi quy\u1EC1n \u0111\u01B0\u1EE3c b\u1EA3o l\u01B0u."),
                            createVNode("span", null, "N\u1EA4U B\u1EB0NG T\xC2M \xB7 PH\u1EE4C V\u1EE4 B\u1EB0NG AN")
                          ])
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VMain, null, {
                default: withCtx(() => [
                  createVNode("section", {
                    id: "home",
                    class: "hero"
                  }, [
                    createVNode("div", { class: "hero-copy" }, [
                      createVNode("p", { class: "eyebrow" }, "QU\xC1N CHAY MIMI \xB7 B\u1EBEP THI\u1EC0N L\xC0NH"),
                      createVNode("h1", null, [
                        createTextVNode("Thu\u1EA7n Khi\u1EBFt."),
                        createVNode("br"),
                        createVNode("em", null, "\u0110\u1EADm \u0110\xE0.")
                      ]),
                      createVNode("p", { class: "hero-desc" }, [
                        createTextVNode("B\xFAn m\xEC chay b\u1EB1ng t\xE2m \u2014 n\u01B0\u1EDBc l\xE8o h\u1EA7m t\u1EEB"),
                        createVNode("br", { class: "desktop-only" }),
                        createTextVNode(" n\u1EA5m & rau c\u1EE7 t\u1EF1 nhi\xEAn, kh\xF4ng h\xE0nh t\u1ECFi. Ch\u1EC9 c\u1EA7n"),
                        createVNode("br", { class: "desktop-only" }),
                        createTextVNode(" th\u01B0\u1EDFng duy\xEAn b\u1EA1n.")
                      ]),
                      createVNode("div", { class: "hero-actions" }, [
                        createVNode("button", {
                          class: "btn-primary",
                          onClick: ($event) => scrollTo("#menu")
                        }, "XEM TH\u1EF0C \u0110\u01A0N", 8, ["onClick"]),
                        createVNode("button", {
                          class: "btn-outline",
                          onClick: ($event) => scrollTo("#story")
                        }, "C\xC2U CHUY\u1EC6N MIMI", 8, ["onClick"])
                      ])
                    ]),
                    createVNode("div", { class: "hero-photo" }, [
                      createVNode("img", {
                        src: unref(heroImage),
                        alt: "M\xF3n chay MIMI"
                      }, null, 8, ["src"])
                    ]),
                    createVNode("button", {
                      class: "scroll-cue",
                      onClick: ($event) => scrollTo("#menu")
                    }, [
                      createVNode("span", null, "CU\u1ED8N XU\u1ED0NG"),
                      createVNode("b", null, "\u2304")
                    ], 8, ["onClick"])
                  ]),
                  createVNode("section", {
                    id: "menu",
                    class: "menu-section"
                  }, [
                    createVNode(VContainer, { class: "content-width" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "menu-heading" }, [
                          createVNode("div", null, [
                            createVNode("p", { class: "eyebrow" }, "TH\u1EF0C \u0110\u01A0N CHAY"),
                            createVNode("h2", null, [
                              createTextVNode("S\xE1u t\xF4, "),
                              createVNode("em", null, "m\u1ED9t t\xE2m")
                            ])
                          ]),
                          createVNode("p", { class: "menu-intro" }, [
                            createTextVNode("M\u1ED7i m\xF3n l\xE0 m\u1ED9t h\xE0nh tr\xECnh c\u1EE7a v\u1ECB gi\xE1c \u2014 t\u1EEB"),
                            createVNode("br"),
                            createTextVNode("n\u01B0\u1EDBc l\xE8o s\xE2u \u0111\u1EADm \u0111\u1EBFn s\u1EE3i b\xFAn \u0111\u1EADm \u0111\xE0. Ch\u1EA1m \u0111\u1EC3"),
                            createVNode("br"),
                            createTextVNode("m\u1EDF h\u1ED3 s\u01A1 nguy\xEAn li\u1EC7u.")
                          ])
                        ]),
                        createVNode(VRow, {
                          class: "menu-grid",
                          "no-gutters": ""
                        }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(menu, (item) => {
                              return createVNode(VCol, {
                                key: item.name,
                                cols: "12",
                                sm: "6",
                                md: "4",
                                class: "menu-item"
                              }, {
                                default: withCtx(() => [
                                  createVNode("article", null, [
                                    createVNode("div", { class: "dish-image" }, [
                                      createVNode("img", {
                                        src: item.image,
                                        alt: item.name
                                      }, null, 8, ["src", "alt"]),
                                      createVNode("button", { class: "plus" }, "+")
                                    ]),
                                    createVNode("p", { class: "dish-eyebrow" }, toDisplayString(item.eyebrow), 1),
                                    createVNode("h3", null, toDisplayString(item.name), 1),
                                    createVNode("p", { class: "price" }, toDisplayString(item.price), 1)
                                  ])
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("section", {
                    id: "story",
                    class: "story-section"
                  }, [
                    createVNode(VContainer, { class: "content-width" }, {
                      default: withCtx(() => [
                        createVNode(VRow, { align: "center" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "6",
                              class: "story-photo-col"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "story-photo" }, [
                                  createVNode("div", { class: "soft-circle circle-a" }),
                                  createVNode("div", { class: "soft-circle circle-b" }),
                                  createVNode("img", {
                                    src: unref(storyImage),
                                    alt: "C\xE2u chuy\u1EC7n MIMI"
                                  }, null, 8, ["src"])
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "story-copy" }, [
                                  createVNode("p", { class: "eyebrow" }, "C\xC2U CHUY\u1EC6N MIMI"),
                                  createVNode("h2", null, [
                                    createTextVNode("B\u1EBFp nh\xE0, "),
                                    createVNode("em", null, "\u1EBFp l\xE0nh")
                                  ]),
                                  createVNode("p", null, "MIMI b\u1EAFt \u0111\u1EA7u t\u1EEB m\u1ED9t g\xF3c b\u1EBFp nh\u1ECF, n\u01A1i b\u1EADn b\u1EEFa \u0103n \u0111\u01B0\u1EE3c n\u1EA5u b\u1EB1ng m\u1ED7i duy\xEAn. Kh\xF4ng h\xE0nh t\u1ECFi \u2014 ch\u1EC9 n\u1EA5m h\u01B0\u01A1ng, c\xE0 chua, v\xE0 t\xECnh gian."),
                                  createVNode("p", null, "Ch\xFAng t\xF4i gi\u1EEF nguy\xEAn c\xE1ch n\u1EA5u \u1EA5y: n\u01B0\u1EDBc l\xE8o h\u1EA7m ch\u1EADm, topping c\u1EAFt tay, gia v\u1ECB chay thu\u1EA7n khi\u1EBFt. M\u1ED7i t\xF4 l\xE0 m\u1ED9t l\u1EDDi ch\xFAc l\xE0nh d\xE0nh cho ng\u01B0\u1EDDi th\u01B0\u1EDFng th\u1EE9c v\xE0 cho mu\xF4n lo\xE0i."),
                                  createVNode("div", { class: "stats" }, [
                                    createVNode("div", null, [
                                      createVNode("strong", null, "100%"),
                                      createVNode("span", null, "THU\u1EA6N CHAY")
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("strong", null, "6"),
                                      createVNode("span", null, "M\xD3N N\u1EA4U TAY")
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("strong", null, "06\u201320H"),
                                      createVNode("span", null, "M\u1EDE C\u1EECA")
                                    ])
                                  ])
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("section", {
                    id: "contact",
                    class: "visit-bar"
                  }, [
                    createVNode("button", null, " Xem th\u1EF1c \u0111\u01A1n t\u1EA1i qu\xE1n "),
                    createVNode("button", { class: "delivery" }, "\u0110\u1EB7t giao t\u1EADn n\u01A1i")
                  ]),
                  createVNode("footer", null, [
                    createVNode(VContainer, { class: "content-width footer-content" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "footer-main" }, [
                          createVNode("div", null, [
                            createVNode("h4", null, "QU\xC1N CHAY MIMI"),
                            createVNode("p", null, [
                              createTextVNode("Thu\u1EA7n khi\u1EBFt. \u0110\u1EADm \u0111\xE0. B\u1EBFp thi\u1EC1n l\xE0nh gi\u1EEFa l\xF2ng"),
                              createVNode("br"),
                              createTextVNode("th\xE0nh ph\u1ED1.")
                            ])
                          ]),
                          createVNode("div", { class: "footer-info" }, [
                            createVNode("p", null, "\u25C9 \xA0 Xem v\u1ECB tr\xED tr\xEAn Google Maps \u2197"),
                            createVNode("p", null, "\u25C9 \xA0 0986 284 748"),
                            createVNode("p", null, "\u25C9 \xA0 06:00\u201320:00 \xB7 M\u1EDF c\u1EA3 tu\u1EA7n")
                          ]),
                          createVNode("div", { class: "social" }, [
                            createVNode("span", null, "THEO D\xD5I MIMI"),
                            createVNode("div", null, [
                              createVNode("b", null, "\u25CE"),
                              createVNode("b", null, "f")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "footer-bottom" }, [
                          createVNode("span", null, "\xA9 2026 Qu\xE1n Chay Mimi. M\u1ECDi quy\u1EC1n \u0111\u01B0\u1EE3c b\u1EA3o l\u01B0u."),
                          createVNode("span", null, "N\u1EA4U B\u1EB0NG T\xC2M \xB7 PH\u1EE4C V\u1EE4 B\u1EB0NG AN")
                        ])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CnVePzb-.mjs.map
