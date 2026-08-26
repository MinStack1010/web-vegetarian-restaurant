import { defineComponent, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { V as VApp, d as VMain, f as VContainer, g as VRow, h as VCol } from "../server.mjs";
import "/Users/plogg/Downloads/quan-chay-mimi-nuxt-vuetify-fixed/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/plogg/Downloads/quan-chay-mimi-nuxt-vuetify-fixed/node_modules/hookable/dist/index.mjs";
import "/Users/plogg/Downloads/quan-chay-mimi-nuxt-vuetify-fixed/node_modules/unctx/dist/index.mjs";
import "/Users/plogg/Downloads/quan-chay-mimi-nuxt-vuetify-fixed/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/plogg/Downloads/quan-chay-mimi-nuxt-vuetify-fixed/node_modules/defu/dist/defu.mjs";
import "/Users/plogg/Downloads/quan-chay-mimi-nuxt-vuetify-fixed/node_modules/ufo/dist/index.mjs";
const heroImage = "" + __buildAssetsURL("Bún mì chay nấu bằng tâm.D9j9fBuz.webp");
const storyImage = "" + __buildAssetsURL("Câu Chuyện Mimi.CQ96N8yt.webp");
const nuocLeo = "" + __buildAssetsURL("Nước lèo thanh khiết.D0OD5VqK.webp");
const damVi = "" + __buildAssetsURL("Đậm vị gia truyền.Ds6LMbJh.webp");
const viCay = "" + __buildAssetsURL("Vị cay xứ Huế.XESEuTqt.webp");
const thanhMat = "" + __buildAssetsURL("Thanh mát mùa hè.C4Ko4F-3.webp");
const binhDi = "" + __buildAssetsURL("Bình dị_ ấm lòng.CYQzz25S.webp");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const menu = [
      { eyebrow: "NƯỚC LÈO THANH KHIẾT", name: "Hủ tiếu chay", price: "25.000đ", image: nuocLeo },
      { eyebrow: "SỢI MÌ DẺO DAI", name: "Mì tươi chay", price: "26.000đ", image: storyImage },
      { eyebrow: "ĐẬM VỊ GIA TRUYỀN", name: "Mì gói chay", price: "25.000đ", image: damVi },
      { eyebrow: "VỊ CAY ĐẬM ĐÀ · XỨ HUẾ", name: "Bún bò Huế chay", price: "27.000đ", image: viCay },
      { eyebrow: "THANH MÁT MÙA HÈ", name: "Miến măng chay", price: "26.000đ", image: thanhMat },
      { eyebrow: "BÌNH DỊ, ẤM LÒNG", name: "Bún măng chay", price: "25.000đ", image: binhDi }
    ];
    const scrollTo = (id) => (void 0).querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VApp, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VMain, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<section id="home" class="hero"${_scopeId2}><div class="hero-copy"${_scopeId2}><p class="eyebrow"${_scopeId2}>QUÁN CHAY MIMI · BẾP THIỀN LÀNH</p><h1${_scopeId2}>Thuần Khiết.<br${_scopeId2}><em${_scopeId2}>Đậm Đà.</em></h1><p class="hero-desc"${_scopeId2}>Bún mì chay bằng tâm — nước lèo hầm từ<br class="desktop-only"${_scopeId2}> nấm &amp; rau củ tự nhiên, không hành tỏi. Chỉ cần<br class="desktop-only"${_scopeId2}> thưởng duyên bạn.</p><div class="hero-actions"${_scopeId2}><button class="btn-primary"${_scopeId2}>XEM THỰC ĐƠN</button><button class="btn-outline"${_scopeId2}>CÂU CHUYỆN MIMI</button></div></div><div class="hero-photo"${_scopeId2}><img${ssrRenderAttr("src", unref(heroImage))} alt="Món chay MIMI"${_scopeId2}></div><button class="scroll-cue"${_scopeId2}><span${_scopeId2}>CUỘN XUỐNG</span><b${_scopeId2}>⌄</b></button></section><section id="menu" class="menu-section"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VContainer, { class: "content-width" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="menu-heading"${_scopeId3}><div${_scopeId3}><p class="eyebrow"${_scopeId3}>THỰC ĐƠN CHAY</p><h2${_scopeId3}>Sáu tô, <em${_scopeId3}>một tâm</em></h2></div><p class="menu-intro"${_scopeId3}>Mỗi món là một hành trình của vị giác — từ<br${_scopeId3}>nước lèo sâu đậm đến sợi bún đậm đà. Chạm để<br${_scopeId3}>mở hồ sơ nguyên liệu.</p></div>`);
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
                              createVNode("p", { class: "eyebrow" }, "THỰC ĐƠN CHAY"),
                              createVNode("h2", null, [
                                createTextVNode("Sáu tô, "),
                                createVNode("em", null, "một tâm")
                              ])
                            ]),
                            createVNode("p", { class: "menu-intro" }, [
                              createTextVNode("Mỗi món là một hành trình của vị giác — từ"),
                              createVNode("br"),
                              createTextVNode("nước lèo sâu đậm đến sợi bún đậm đà. Chạm để"),
                              createVNode("br"),
                              createTextVNode("mở hồ sơ nguyên liệu.")
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
                                    _push6(`<div class="story-photo"${_scopeId5}><div class="soft-circle circle-a"${_scopeId5}></div><div class="soft-circle circle-b"${_scopeId5}></div><img${ssrRenderAttr("src", unref(storyImage))} alt="Câu chuyện MIMI"${_scopeId5}></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "story-photo" }, [
                                        createVNode("div", { class: "soft-circle circle-a" }),
                                        createVNode("div", { class: "soft-circle circle-b" }),
                                        createVNode("img", {
                                          src: unref(storyImage),
                                          alt: "Câu chuyện MIMI"
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
                                    _push6(`<div class="story-copy"${_scopeId5}><p class="eyebrow"${_scopeId5}>CÂU CHUYỆN MIMI</p><h2${_scopeId5}>Bếp nhà, <em${_scopeId5}>ếp lành</em></h2><p${_scopeId5}>MIMI bắt đầu từ một góc bếp nhỏ, nơi bận bữa ăn được nấu bằng mỗi duyên. Không hành tỏi — chỉ nấm hương, cà chua, và tình gian.</p><p${_scopeId5}>Chúng tôi giữ nguyên cách nấu ấy: nước lèo hầm chậm, topping cắt tay, gia vị chay thuần khiết. Mỗi tô là một lời chúc lành dành cho người thưởng thức và cho muôn loài.</p><div class="stats"${_scopeId5}><div${_scopeId5}><strong${_scopeId5}>100%</strong><span${_scopeId5}>THUẦN CHAY</span></div><div${_scopeId5}><strong${_scopeId5}>6</strong><span${_scopeId5}>MÓN NẤU TAY</span></div><div${_scopeId5}><strong${_scopeId5}>06–20H</strong><span${_scopeId5}>MỞ CỬA</span></div></div></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "story-copy" }, [
                                        createVNode("p", { class: "eyebrow" }, "CÂU CHUYỆN MIMI"),
                                        createVNode("h2", null, [
                                          createTextVNode("Bếp nhà, "),
                                          createVNode("em", null, "ếp lành")
                                        ]),
                                        createVNode("p", null, "MIMI bắt đầu từ một góc bếp nhỏ, nơi bận bữa ăn được nấu bằng mỗi duyên. Không hành tỏi — chỉ nấm hương, cà chua, và tình gian."),
                                        createVNode("p", null, "Chúng tôi giữ nguyên cách nấu ấy: nước lèo hầm chậm, topping cắt tay, gia vị chay thuần khiết. Mỗi tô là một lời chúc lành dành cho người thưởng thức và cho muôn loài."),
                                        createVNode("div", { class: "stats" }, [
                                          createVNode("div", null, [
                                            createVNode("strong", null, "100%"),
                                            createVNode("span", null, "THUẦN CHAY")
                                          ]),
                                          createVNode("div", null, [
                                            createVNode("strong", null, "6"),
                                            createVNode("span", null, "MÓN NẤU TAY")
                                          ]),
                                          createVNode("div", null, [
                                            createVNode("strong", null, "06–20H"),
                                            createVNode("span", null, "MỞ CỬA")
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
                                        alt: "Câu chuyện MIMI"
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
                                      createVNode("p", { class: "eyebrow" }, "CÂU CHUYỆN MIMI"),
                                      createVNode("h2", null, [
                                        createTextVNode("Bếp nhà, "),
                                        createVNode("em", null, "ếp lành")
                                      ]),
                                      createVNode("p", null, "MIMI bắt đầu từ một góc bếp nhỏ, nơi bận bữa ăn được nấu bằng mỗi duyên. Không hành tỏi — chỉ nấm hương, cà chua, và tình gian."),
                                      createVNode("p", null, "Chúng tôi giữ nguyên cách nấu ấy: nước lèo hầm chậm, topping cắt tay, gia vị chay thuần khiết. Mỗi tô là một lời chúc lành dành cho người thưởng thức và cho muôn loài."),
                                      createVNode("div", { class: "stats" }, [
                                        createVNode("div", null, [
                                          createVNode("strong", null, "100%"),
                                          createVNode("span", null, "THUẦN CHAY")
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("strong", null, "6"),
                                          createVNode("span", null, "MÓN NẤU TAY")
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("strong", null, "06–20H"),
                                          createVNode("span", null, "MỞ CỬA")
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
                                      alt: "Câu chuyện MIMI"
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
                                    createVNode("p", { class: "eyebrow" }, "CÂU CHUYỆN MIMI"),
                                    createVNode("h2", null, [
                                      createTextVNode("Bếp nhà, "),
                                      createVNode("em", null, "ếp lành")
                                    ]),
                                    createVNode("p", null, "MIMI bắt đầu từ một góc bếp nhỏ, nơi bận bữa ăn được nấu bằng mỗi duyên. Không hành tỏi — chỉ nấm hương, cà chua, và tình gian."),
                                    createVNode("p", null, "Chúng tôi giữ nguyên cách nấu ấy: nước lèo hầm chậm, topping cắt tay, gia vị chay thuần khiết. Mỗi tô là một lời chúc lành dành cho người thưởng thức và cho muôn loài."),
                                    createVNode("div", { class: "stats" }, [
                                      createVNode("div", null, [
                                        createVNode("strong", null, "100%"),
                                        createVNode("span", null, "THUẦN CHAY")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "6"),
                                        createVNode("span", null, "MÓN NẤU TAY")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "06–20H"),
                                        createVNode("span", null, "MỞ CỬA")
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
                  _push3(`</section><section id="contact" class="visit-bar"${_scopeId2}><button${_scopeId2}> Xem thực đơn tại quán </button><button class="delivery"${_scopeId2}>Đặt giao tận nơi</button></section><footer${_scopeId2}>`);
                  _push3(ssrRenderComponent(VContainer, { class: "content-width footer-content" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="footer-main"${_scopeId3}><div${_scopeId3}><h4${_scopeId3}>QUÁN CHAY MIMI</h4><p${_scopeId3}>Thuần khiết. Đậm đà. Bếp thiền lành giữa lòng<br${_scopeId3}>thành phố.</p></div><div class="footer-info"${_scopeId3}><p${_scopeId3}>◉   Xem vị trí trên Google Maps ↗</p><p${_scopeId3}>◉   0986 284 748</p><p${_scopeId3}>◉   06:00–20:00 · Mở cả tuần</p></div><div class="social"${_scopeId3}><span${_scopeId3}>THEO DÕI MIMI</span><div${_scopeId3}><b${_scopeId3}>◎</b><b${_scopeId3}>f</b></div></div></div><div class="footer-bottom"${_scopeId3}><span${_scopeId3}>© 2026 Quán Chay Mimi. Mọi quyền được bảo lưu.</span><span${_scopeId3}>NẤU BẰNG TÂM · PHỤC VỤ BẰNG AN</span></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "footer-main" }, [
                            createVNode("div", null, [
                              createVNode("h4", null, "QUÁN CHAY MIMI"),
                              createVNode("p", null, [
                                createTextVNode("Thuần khiết. Đậm đà. Bếp thiền lành giữa lòng"),
                                createVNode("br"),
                                createTextVNode("thành phố.")
                              ])
                            ]),
                            createVNode("div", { class: "footer-info" }, [
                              createVNode("p", null, "◉   Xem vị trí trên Google Maps ↗"),
                              createVNode("p", null, "◉   0986 284 748"),
                              createVNode("p", null, "◉   06:00–20:00 · Mở cả tuần")
                            ]),
                            createVNode("div", { class: "social" }, [
                              createVNode("span", null, "THEO DÕI MIMI"),
                              createVNode("div", null, [
                                createVNode("b", null, "◎"),
                                createVNode("b", null, "f")
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "footer-bottom" }, [
                            createVNode("span", null, "© 2026 Quán Chay Mimi. Mọi quyền được bảo lưu."),
                            createVNode("span", null, "NẤU BẰNG TÂM · PHỤC VỤ BẰNG AN")
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
                        createVNode("p", { class: "eyebrow" }, "QUÁN CHAY MIMI · BẾP THIỀN LÀNH"),
                        createVNode("h1", null, [
                          createTextVNode("Thuần Khiết."),
                          createVNode("br"),
                          createVNode("em", null, "Đậm Đà.")
                        ]),
                        createVNode("p", { class: "hero-desc" }, [
                          createTextVNode("Bún mì chay bằng tâm — nước lèo hầm từ"),
                          createVNode("br", { class: "desktop-only" }),
                          createTextVNode(" nấm & rau củ tự nhiên, không hành tỏi. Chỉ cần"),
                          createVNode("br", { class: "desktop-only" }),
                          createTextVNode(" thưởng duyên bạn.")
                        ]),
                        createVNode("div", { class: "hero-actions" }, [
                          createVNode("button", {
                            class: "btn-primary",
                            onClick: ($event) => scrollTo("#menu")
                          }, "XEM THỰC ĐƠN", 8, ["onClick"]),
                          createVNode("button", {
                            class: "btn-outline",
                            onClick: ($event) => scrollTo("#story")
                          }, "CÂU CHUYỆN MIMI", 8, ["onClick"])
                        ])
                      ]),
                      createVNode("div", { class: "hero-photo" }, [
                        createVNode("img", {
                          src: unref(heroImage),
                          alt: "Món chay MIMI"
                        }, null, 8, ["src"])
                      ]),
                      createVNode("button", {
                        class: "scroll-cue",
                        onClick: ($event) => scrollTo("#menu")
                      }, [
                        createVNode("span", null, "CUỘN XUỐNG"),
                        createVNode("b", null, "⌄")
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
                              createVNode("p", { class: "eyebrow" }, "THỰC ĐƠN CHAY"),
                              createVNode("h2", null, [
                                createTextVNode("Sáu tô, "),
                                createVNode("em", null, "một tâm")
                              ])
                            ]),
                            createVNode("p", { class: "menu-intro" }, [
                              createTextVNode("Mỗi món là một hành trình của vị giác — từ"),
                              createVNode("br"),
                              createTextVNode("nước lèo sâu đậm đến sợi bún đậm đà. Chạm để"),
                              createVNode("br"),
                              createTextVNode("mở hồ sơ nguyên liệu.")
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
                                      alt: "Câu chuyện MIMI"
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
                                    createVNode("p", { class: "eyebrow" }, "CÂU CHUYỆN MIMI"),
                                    createVNode("h2", null, [
                                      createTextVNode("Bếp nhà, "),
                                      createVNode("em", null, "ếp lành")
                                    ]),
                                    createVNode("p", null, "MIMI bắt đầu từ một góc bếp nhỏ, nơi bận bữa ăn được nấu bằng mỗi duyên. Không hành tỏi — chỉ nấm hương, cà chua, và tình gian."),
                                    createVNode("p", null, "Chúng tôi giữ nguyên cách nấu ấy: nước lèo hầm chậm, topping cắt tay, gia vị chay thuần khiết. Mỗi tô là một lời chúc lành dành cho người thưởng thức và cho muôn loài."),
                                    createVNode("div", { class: "stats" }, [
                                      createVNode("div", null, [
                                        createVNode("strong", null, "100%"),
                                        createVNode("span", null, "THUẦN CHAY")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "6"),
                                        createVNode("span", null, "MÓN NẤU TAY")
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("strong", null, "06–20H"),
                                        createVNode("span", null, "MỞ CỬA")
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
                      createVNode("button", null, " Xem thực đơn tại quán "),
                      createVNode("button", { class: "delivery" }, "Đặt giao tận nơi")
                    ]),
                    createVNode("footer", null, [
                      createVNode(VContainer, { class: "content-width footer-content" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "footer-main" }, [
                            createVNode("div", null, [
                              createVNode("h4", null, "QUÁN CHAY MIMI"),
                              createVNode("p", null, [
                                createTextVNode("Thuần khiết. Đậm đà. Bếp thiền lành giữa lòng"),
                                createVNode("br"),
                                createTextVNode("thành phố.")
                              ])
                            ]),
                            createVNode("div", { class: "footer-info" }, [
                              createVNode("p", null, "◉   Xem vị trí trên Google Maps ↗"),
                              createVNode("p", null, "◉   0986 284 748"),
                              createVNode("p", null, "◉   06:00–20:00 · Mở cả tuần")
                            ]),
                            createVNode("div", { class: "social" }, [
                              createVNode("span", null, "THEO DÕI MIMI"),
                              createVNode("div", null, [
                                createVNode("b", null, "◎"),
                                createVNode("b", null, "f")
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "footer-bottom" }, [
                            createVNode("span", null, "© 2026 Quán Chay Mimi. Mọi quyền được bảo lưu."),
                            createVNode("span", null, "NẤU BẰNG TÂM · PHỤC VỤ BẰNG AN")
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
                      createVNode("p", { class: "eyebrow" }, "QUÁN CHAY MIMI · BẾP THIỀN LÀNH"),
                      createVNode("h1", null, [
                        createTextVNode("Thuần Khiết."),
                        createVNode("br"),
                        createVNode("em", null, "Đậm Đà.")
                      ]),
                      createVNode("p", { class: "hero-desc" }, [
                        createTextVNode("Bún mì chay bằng tâm — nước lèo hầm từ"),
                        createVNode("br", { class: "desktop-only" }),
                        createTextVNode(" nấm & rau củ tự nhiên, không hành tỏi. Chỉ cần"),
                        createVNode("br", { class: "desktop-only" }),
                        createTextVNode(" thưởng duyên bạn.")
                      ]),
                      createVNode("div", { class: "hero-actions" }, [
                        createVNode("button", {
                          class: "btn-primary",
                          onClick: ($event) => scrollTo("#menu")
                        }, "XEM THỰC ĐƠN", 8, ["onClick"]),
                        createVNode("button", {
                          class: "btn-outline",
                          onClick: ($event) => scrollTo("#story")
                        }, "CÂU CHUYỆN MIMI", 8, ["onClick"])
                      ])
                    ]),
                    createVNode("div", { class: "hero-photo" }, [
                      createVNode("img", {
                        src: unref(heroImage),
                        alt: "Món chay MIMI"
                      }, null, 8, ["src"])
                    ]),
                    createVNode("button", {
                      class: "scroll-cue",
                      onClick: ($event) => scrollTo("#menu")
                    }, [
                      createVNode("span", null, "CUỘN XUỐNG"),
                      createVNode("b", null, "⌄")
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
                            createVNode("p", { class: "eyebrow" }, "THỰC ĐƠN CHAY"),
                            createVNode("h2", null, [
                              createTextVNode("Sáu tô, "),
                              createVNode("em", null, "một tâm")
                            ])
                          ]),
                          createVNode("p", { class: "menu-intro" }, [
                            createTextVNode("Mỗi món là một hành trình của vị giác — từ"),
                            createVNode("br"),
                            createTextVNode("nước lèo sâu đậm đến sợi bún đậm đà. Chạm để"),
                            createVNode("br"),
                            createTextVNode("mở hồ sơ nguyên liệu.")
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
                                    alt: "Câu chuyện MIMI"
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
                                  createVNode("p", { class: "eyebrow" }, "CÂU CHUYỆN MIMI"),
                                  createVNode("h2", null, [
                                    createTextVNode("Bếp nhà, "),
                                    createVNode("em", null, "ếp lành")
                                  ]),
                                  createVNode("p", null, "MIMI bắt đầu từ một góc bếp nhỏ, nơi bận bữa ăn được nấu bằng mỗi duyên. Không hành tỏi — chỉ nấm hương, cà chua, và tình gian."),
                                  createVNode("p", null, "Chúng tôi giữ nguyên cách nấu ấy: nước lèo hầm chậm, topping cắt tay, gia vị chay thuần khiết. Mỗi tô là một lời chúc lành dành cho người thưởng thức và cho muôn loài."),
                                  createVNode("div", { class: "stats" }, [
                                    createVNode("div", null, [
                                      createVNode("strong", null, "100%"),
                                      createVNode("span", null, "THUẦN CHAY")
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("strong", null, "6"),
                                      createVNode("span", null, "MÓN NẤU TAY")
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("strong", null, "06–20H"),
                                      createVNode("span", null, "MỞ CỬA")
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
                    createVNode("button", null, " Xem thực đơn tại quán "),
                    createVNode("button", { class: "delivery" }, "Đặt giao tận nơi")
                  ]),
                  createVNode("footer", null, [
                    createVNode(VContainer, { class: "content-width footer-content" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "footer-main" }, [
                          createVNode("div", null, [
                            createVNode("h4", null, "QUÁN CHAY MIMI"),
                            createVNode("p", null, [
                              createTextVNode("Thuần khiết. Đậm đà. Bếp thiền lành giữa lòng"),
                              createVNode("br"),
                              createTextVNode("thành phố.")
                            ])
                          ]),
                          createVNode("div", { class: "footer-info" }, [
                            createVNode("p", null, "◉   Xem vị trí trên Google Maps ↗"),
                            createVNode("p", null, "◉   0986 284 748"),
                            createVNode("p", null, "◉   06:00–20:00 · Mở cả tuần")
                          ]),
                          createVNode("div", { class: "social" }, [
                            createVNode("span", null, "THEO DÕI MIMI"),
                            createVNode("div", null, [
                              createVNode("b", null, "◎"),
                              createVNode("b", null, "f")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "footer-bottom" }, [
                          createVNode("span", null, "© 2026 Quán Chay Mimi. Mọi quyền được bảo lưu."),
                          createVNode("span", null, "NẤU BẰNG TÂM · PHỤC VỤ BẰNG AN")
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CnVePzb-.js.map
