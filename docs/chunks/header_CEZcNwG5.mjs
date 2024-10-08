import { a as createComponent, r as renderTemplate, e as renderHead, b as renderComponent } from './astro/server_Bqsq_RjE.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                              */

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return /* @__PURE__ */ jsxs("div", { className: "menu-container", children: [
    /* @__PURE__ */ jsxs("div", { className: "hamburger", onClick: toggleMenu, children: [
      /* @__PURE__ */ jsx("div", { className: "line" }),
      /* @__PURE__ */ jsx("div", { className: "line" }),
      /* @__PURE__ */ jsx("div", { className: "line" })
    ] }),
    isOpen && /* @__PURE__ */ jsx("div", { className: "overlay", onClick: closeMenu }),
    /* @__PURE__ */ jsx("nav", { className: `menu ${isOpen ? "open" : ""}`, children: /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("li", { onClick: () => setIsOpen(false), children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "start", cursor: "pointer" }, children: [
        /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "m10 18l-6-6l6-6l1.4 1.45L7.85 11H20v2H7.85l3.55 3.55z" }) }),
        "Back"
      ] }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/", children: "Home" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/web", children: "Web" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/app", children: "App" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/competitive_programming", children: "競プロ" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/hackathon", children: "hackathon" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/other", children: "other" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/articles/article", children: "Tech Blogs" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/articles/users", children: "Members" }) })
    ] }) })
  ] });
}

const RetWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const imgWidth = windowWidth < 768 ? "137" : "183";
  const imgHeight = windowWidth < 768 ? "34" : "46";
  const padding = windowWidth < 768 ? "6px 20px" : "8px 30px";
  return /* @__PURE__ */ jsxs("html", { children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx("meta", { charSet: "UTF-8" }) }),
    /* @__PURE__ */ jsx("body", { style: { borderBottom: "1px solid black" }, children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: "justify-between w-full",
        style: {
          display: "flex",
          backgroundColor: "white",
          padding: `${padding}`,
          justifyContent: "space-between"
        },
        children: [
          /* @__PURE__ */ jsxs("div", { style: { display: "flex" }, children: [
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/logo.png",
                width: windowWidth < 768 ? 167 : 223,
                height: windowWidth < 768 ? 42 : 57,
                alt: "header"
              }
            ) }) }),
            /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  margin: `0 ${windowWidth < 768 ? "10px" : "20px"}`,
                  display: "flex",
                  alignItems: "center"
                },
                children: /* @__PURE__ */ jsxs(
                  "svg",
                  {
                    width: imgWidth,
                    height: imgHeight,
                    viewBox: "0 0 275 69",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      /* @__PURE__ */ jsxs("g", { filter: "url(#filter0_i_133_242)", children: [
                        /* @__PURE__ */ jsx(
                          "path",
                          {
                            d: "M31.7642 9.37037C31.7642 4.19526 35.7705 0 40.7126 0H266.052C270.994 0 275 4.19526 275 9.37037V59.6296C275 64.8047 270.994 69 266.052 69H40.7126C35.7705 69 31.7642 64.8047 31.7642 59.6296V9.37037Z",
                            fill: "#C2FEF0"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "path",
                          {
                            d: "M1.21787 35.2971C-0.405955 34.8553 -0.40596 32.441 1.21787 31.9992L31.7642 23.6889V43.6074L1.21787 35.2971Z",
                            fill: "#C2FEF0"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsx(
                        "path",
                        {
                          d: "M66.768 45.792V37.8H71.64V33.24H64.344V32.376H71.64V27.888C70.536 28 69.464 28.088 68.424 28.152C67.4 28.216 66.512 28.264 65.76 28.296L65.568 27.384C66.4 27.384 67.368 27.352 68.472 27.288C69.592 27.224 70.736 27.128 71.904 27C73.072 26.872 74.168 26.728 75.192 26.568C76.232 26.408 77.08 26.24 77.736 26.064L78.192 26.904C77.504 27.064 76.656 27.224 75.648 27.384C74.64 27.528 73.592 27.664 72.504 27.792V32.376H79.896V33.24H72.504V37.8H77.544V45.792H66.768ZM67.632 44.928H76.68V38.664H67.632V44.928ZM59.088 45.864L58.464 45.192C58.784 44.808 59.168 44.288 59.616 43.632C60.08 42.96 60.544 42.24 61.008 41.472C61.472 40.688 61.896 39.944 62.28 39.24C62.68 38.536 62.976 37.96 63.168 37.512L63.744 38.184C63.632 38.472 63.432 38.872 63.144 39.384C62.872 39.88 62.552 40.44 62.184 41.064C61.832 41.672 61.456 42.288 61.056 42.912C60.672 43.52 60.304 44.088 59.952 44.616C59.616 45.128 59.328 45.544 59.088 45.864ZM62.256 34.68C61.968 34.408 61.576 34.088 61.08 33.72C60.584 33.336 60.08 32.976 59.568 32.64C59.072 32.304 58.648 32.064 58.296 31.92L58.776 31.32C59.16 31.496 59.608 31.744 60.12 32.064C60.632 32.368 61.128 32.704 61.608 33.072C62.104 33.424 62.504 33.76 62.808 34.08L62.256 34.68ZM63.6 29.424C63.296 29.152 62.896 28.832 62.4 28.464C61.92 28.096 61.424 27.744 60.912 27.408C60.4 27.072 59.968 26.832 59.616 26.688L60.072 26.088C60.472 26.264 60.928 26.504 61.44 26.808C61.952 27.112 62.448 27.448 62.928 27.816C63.424 28.168 63.824 28.504 64.128 28.824L63.6 29.424ZM82.272 45.288L82.104 44.472C82.744 44.44 83.584 44.384 84.624 44.304C85.664 44.208 86.744 44.096 87.864 43.968V41.184H82.872V40.44H87.864V38.28H83.208V31.824H87.864V29.832H82.152V29.112H87.864V26.976C86.92 27.072 86.008 27.152 85.128 27.216C84.248 27.264 83.504 27.296 82.896 27.312L82.704 26.592C83.408 26.592 84.24 26.568 85.2 26.52C86.16 26.456 87.152 26.376 88.176 26.28C89.2 26.168 90.16 26.048 91.056 25.92C91.952 25.776 92.68 25.624 93.24 25.464L93.576 26.16C93 26.304 92.28 26.44 91.416 26.568C90.568 26.68 89.672 26.792 88.728 26.904V29.112H94.056V29.832H88.728V31.824H93.336V38.28H88.728V40.44H93.648V41.184H88.728V43.872C89.832 43.744 90.856 43.608 91.8 43.464C92.76 43.32 93.464 43.192 93.912 43.08V43.872C93.464 43.968 92.856 44.08 92.088 44.208C91.32 44.32 90.472 44.44 89.544 44.568C88.632 44.68 87.704 44.792 86.76 44.904C85.832 45 84.976 45.08 84.192 45.144C83.408 45.208 82.768 45.256 82.272 45.288ZM92.736 46.512L92.112 45.816C93.168 45.256 94.048 44.512 94.752 43.584C95.472 42.656 96.04 41.584 96.456 40.368C96.872 39.136 97.168 37.808 97.344 36.384C97.536 34.96 97.64 33.472 97.656 31.92H94.176V31.056H97.656V25.272H98.52V31.056H102.624V33.696C102.624 35.488 102.584 37.16 102.504 38.712C102.424 40.248 102.32 41.48 102.192 42.408C101.984 43.832 101.624 44.808 101.112 45.336C100.616 45.88 99.92 46.152 99.024 46.152H97.2C97.184 46.024 97.144 45.872 97.08 45.696C97.032 45.52 96.992 45.384 96.96 45.288H99.024C99.616 45.288 100.088 45.08 100.44 44.664C100.792 44.248 101.064 43.512 101.256 42.456C101.368 41.88 101.456 41.136 101.52 40.224C101.6 39.312 101.664 38.296 101.712 37.176C101.76 36.04 101.784 34.88 101.784 33.696V31.92H98.52C98.504 34.336 98.328 36.448 97.992 38.256C97.672 40.064 97.096 41.64 96.264 42.984C95.432 44.312 94.256 45.488 92.736 46.512ZM84.072 37.512H87.864V35.352H84.072V37.512ZM88.728 37.512H92.52V35.352H88.728V37.512ZM84.072 34.68H87.864V32.568H84.072V34.68ZM88.728 34.68H92.52V32.568H88.728V34.68ZM118.2 46.728V25.92H126.12L126.096 30.336C126.096 30.912 125.952 31.352 125.664 31.656C125.392 31.944 124.936 32.088 124.296 32.088H122.16C122.144 31.96 122.104 31.808 122.04 31.632C121.992 31.456 121.952 31.32 121.92 31.224H124.296C124.648 31.224 124.896 31.16 125.04 31.032C125.184 30.888 125.256 30.664 125.256 30.36V26.832H119.064V33.72H126.312C126.232 35.192 126.008 36.568 125.64 37.848C125.272 39.128 124.76 40.304 124.104 41.376C124.664 42.096 125.28 42.752 125.952 43.344C126.64 43.936 127.368 44.464 128.136 44.928L127.56 45.672C125.944 44.568 124.624 43.392 123.6 42.144C122.624 43.504 121.4 44.672 119.928 45.648L119.352 45C120.088 44.584 120.768 44.072 121.392 43.464C122.032 42.856 122.6 42.184 123.096 41.448C122.408 40.472 121.864 39.416 121.464 38.28C121.08 37.144 120.816 35.888 120.672 34.512H119.064V46.728H118.2ZM111.336 46.728V41.64H106.896V40.776H111.336V37.656H106.368V36.792H112.584C112.744 36.456 112.928 36.048 113.136 35.568C113.344 35.088 113.536 34.616 113.712 34.152C113.888 33.672 114.016 33.296 114.096 33.024L114.936 33.288C114.824 33.592 114.68 33.952 114.504 34.368C114.328 34.784 114.144 35.208 113.952 35.64C113.776 36.072 113.6 36.456 113.424 36.792H117.432V37.656H112.2V40.776H116.832V41.64H112.2V46.728H111.336ZM106.2 32.784V31.92H111.336V29.016H107.064V28.152H111.336V24.984H112.2V28.152H116.448V29.016H112.2V31.92H117.456V32.784H106.2ZM123.576 40.632C124.072 39.752 124.472 38.8 124.776 37.776C125.096 36.752 125.304 35.664 125.4 34.512H121.512C121.576 35.648 121.784 36.736 122.136 37.776C122.504 38.8 122.984 39.752 123.576 40.632ZM109.776 36.552C109.632 36.024 109.44 35.456 109.2 34.848C108.96 34.224 108.736 33.736 108.528 33.384L109.392 33.096C109.616 33.544 109.84 34.08 110.064 34.704C110.288 35.312 110.456 35.816 110.568 36.216L109.776 36.552ZM134.448 46.368V38.664H147.504V46.368H134.448ZM135.312 45.504H146.64V39.528H135.312V45.504ZM130.2 35.904V35.04H140.64V30.36H134.52C134.12 30.952 133.696 31.512 133.248 32.04C132.8 32.568 132.368 33.032 131.952 33.432L131.232 32.904C131.696 32.488 132.168 31.984 132.648 31.392C133.128 30.8 133.584 30.176 134.016 29.52C134.448 28.864 134.824 28.216 135.144 27.576C135.48 26.92 135.72 26.328 135.864 25.8L136.704 26.112C136.512 26.672 136.272 27.24 135.984 27.816C135.712 28.376 135.408 28.936 135.072 29.496H140.64V25.056H141.504V29.496H149.256V30.36H141.504V35.04H151.8V35.904H130.2ZM159.6 44.208C159.6 44.192 159.552 44.12 159.456 43.992C159.376 43.864 159.296 43.736 159.216 43.608C159.136 43.48 159.088 43.416 159.072 43.416C162.208 42.28 164.8 40.64 166.848 38.496C168.896 36.336 170.336 33.648 171.168 30.432C170.608 30.448 169.856 30.472 168.912 30.504C167.984 30.536 166.976 30.568 165.888 30.6C164.8 30.616 163.72 30.64 162.648 30.672C161.592 30.688 160.64 30.704 159.792 30.72C158.944 30.736 158.304 30.744 157.872 30.744L157.776 29.808C158.08 29.824 158.592 29.84 159.312 29.856C160.032 29.856 160.864 29.856 161.808 29.856C162.768 29.84 163.76 29.824 164.784 29.808C165.808 29.792 166.784 29.776 167.712 29.76C168.656 29.744 169.464 29.72 170.136 29.688C170.824 29.656 171.296 29.632 171.552 29.616L172.128 29.928C171.344 33.448 169.88 36.384 167.736 38.736C165.608 41.072 162.896 42.896 159.6 44.208ZM176.304 28.848C176.08 28.512 175.784 28.144 175.416 27.744C175.048 27.328 174.664 26.928 174.264 26.544C173.864 26.16 173.504 25.856 173.184 25.632L173.76 25.128C174.048 25.352 174.4 25.672 174.816 26.088C175.232 26.488 175.632 26.896 176.016 27.312C176.416 27.728 176.712 28.08 176.904 28.368L176.304 28.848ZM174.48 30.504C174.272 30.168 173.992 29.784 173.64 29.352C173.288 28.92 172.92 28.504 172.536 28.104C172.152 27.704 171.808 27.384 171.504 27.144L172.08 26.688C172.368 26.912 172.712 27.24 173.112 27.672C173.512 28.088 173.896 28.512 174.264 28.944C174.632 29.376 174.912 29.736 175.104 30.024L174.48 30.504ZM182.856 41.304V30.744H195.144V41.304H182.856ZM183.72 40.464H194.28V31.608H183.72V40.464ZM205.32 45.216C205.32 45.2 205.272 45.128 205.176 45C205.096 44.888 205.016 44.776 204.936 44.664C204.856 44.536 204.808 44.472 204.792 44.472C206.328 43.832 207.816 43.04 209.256 42.096C210.696 41.136 212.04 40.072 213.288 38.904C214.536 37.736 215.64 36.488 216.6 35.16C217.56 33.832 218.336 32.464 218.928 31.056L212.16 31.176C211.36 32.296 210.424 33.352 209.352 34.344C208.296 35.32 207.144 36.2 205.896 36.984L205.224 36.312C206.472 35.592 207.64 34.728 208.728 33.72C209.816 32.712 210.768 31.624 211.584 30.456C212.416 29.288 213.056 28.112 213.504 26.928L214.296 27.216C214.088 27.76 213.848 28.296 213.576 28.824C213.32 29.352 213.024 29.872 212.688 30.384L219.6 30.24L220.008 30.6C219.24 32.632 218.128 34.576 216.672 36.432C215.232 38.288 213.544 39.968 211.608 41.472C209.672 42.976 207.576 44.224 205.32 45.216ZM222.408 30.648C222.184 30.328 221.888 29.968 221.52 29.568C221.152 29.152 220.768 28.752 220.368 28.368C219.968 27.984 219.608 27.68 219.288 27.456L219.84 26.952C220.128 27.176 220.48 27.488 220.896 27.888C221.328 28.288 221.736 28.696 222.12 29.112C222.52 29.528 222.824 29.872 223.032 30.144L222.408 30.648ZM224.16 28.92C223.92 28.6 223.608 28.248 223.224 27.864C222.84 27.464 222.44 27.08 222.024 26.712C221.608 26.344 221.232 26.056 220.896 25.848L221.448 25.32C221.752 25.528 222.12 25.824 222.552 26.208C222.984 26.592 223.4 26.984 223.8 27.384C224.216 27.784 224.528 28.12 224.736 28.392L224.16 28.92ZM236.544 40.68C236.544 40.648 236.536 40.384 236.52 39.888C236.52 39.392 236.52 38.768 236.52 38.016C236.52 37.264 236.512 36.464 236.496 35.616C236.496 34.768 236.496 33.976 236.496 33.24C236.496 32.488 236.496 31.872 236.496 31.392C236.496 30.896 236.496 30.64 236.496 30.624V26.208H237.528V30.624C237.528 30.64 237.528 30.896 237.528 31.392C237.528 31.872 237.52 32.488 237.504 33.24C237.504 33.976 237.504 34.768 237.504 35.616C237.504 36.464 237.496 37.264 237.48 38.016C237.48 38.768 237.48 39.392 237.48 39.888C237.48 40.384 237.48 40.648 237.48 40.68H236.544ZM237 45.792C236.696 45.792 236.432 45.68 236.208 45.456C235.984 45.232 235.872 44.968 235.872 44.664C235.872 44.344 235.984 44.072 236.208 43.848C236.432 43.624 236.696 43.512 237 43.512C237.32 43.512 237.592 43.624 237.816 43.848C238.04 44.072 238.152 44.344 238.152 44.664C238.152 44.968 238.04 45.232 237.816 45.456C237.592 45.68 237.32 45.792 237 45.792Z",
                          fill: "#232428"
                        }
                      ),
                      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs(
                        "filter",
                        {
                          id: "filter0_i_133_242",
                          x: "0",
                          y: "0",
                          width: "275",
                          height: "73",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            /* @__PURE__ */ jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                            /* @__PURE__ */ jsx(
                              "feBlend",
                              {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "BackgroundImageFix",
                                result: "shape"
                              }
                            ),
                            /* @__PURE__ */ jsx(
                              "feColorMatrix",
                              {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                              }
                            ),
                            /* @__PURE__ */ jsx("feOffset", { dy: "4" }),
                            /* @__PURE__ */ jsx("feGaussianBlur", { stdDeviation: "2" }),
                            /* @__PURE__ */ jsx(
                              "feComposite",
                              {
                                in2: "hardAlpha",
                                operator: "arithmetic",
                                k2: "-1",
                                k3: "1"
                              }
                            ),
                            /* @__PURE__ */ jsx(
                              "feColorMatrix",
                              {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                              }
                            ),
                            /* @__PURE__ */ jsx(
                              "feBlend",
                              {
                                mode: "normal",
                                in2: "shape",
                                result: "effect1_innerShadow_133_242"
                              }
                            )
                          ]
                        }
                      ) })
                    ]
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ jsx(HamburgerMenu, {}) })
        ]
      }
    ) })
  ] });
};

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html> <head><meta charset="UTF-8">${renderHead()}</head> <body style="border-bottom: 2px solid black; z-index: 999;"> ${renderComponent($$result, "RetWindowWidth", RetWindowWidth, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/saeyoshizaki/Desktop/2024hackathon/blog_wordpress/src/components/Header/header", "client:component-export": "default" })} </body></html>`;
}, "C:/Users/saeyoshizaki/Desktop/2024hackathon/blog_wordpress/src/components/Header/header.astro", void 0);

export { $$Header as $ };