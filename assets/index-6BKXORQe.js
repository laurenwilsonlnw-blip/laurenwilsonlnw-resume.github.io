import {c as t, j as e, p as a, L as n, M as r, a as c} from "./index-8iUatAJL.js";
const o = [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]
  , m = t("arrow-right", o);
const x = [["path", {
    d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
    key: "j76jl0"
}], ["path", {
    d: "M22 10v6",
    key: "1lu8f3"
}], ["path", {
    d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5",
    key: "1r8lef"
}]]
  , h = t("graduation-cap", x);
function g() {
    return e.jsxs("div", {
        className: "mx-auto max-w-6xl px-5 sm:px-8",
        children: [e.jsxs("section", {
            "aria-labelledby": "intro-heading",
            className: "grid items-center gap-10 py-14 sm:py-20 md:grid-cols-[1.4fr_1fr] md:gap-16",
            children: [e.jsxs("div", {
                className: "space-y-6",
                children: [e.jsx("p", {
                    className: "text-sm font-semibold uppercase tracking-[0.2em] text-accent",
                    children: a.role
                }), e.jsxs("h1", {
                    id: "intro-heading",
                    className: "font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl",
                    children: ["Hi, I’m ", a.name.split(" ")[0], ".", e.jsx("span", {
                        className: "mt-2 block text-primary",
                        children: a.headline
                    })]
                }), e.jsx("p", {
                    className: "max-w-xl text-lg leading-relaxed text-muted-foreground",
                    children: a.intro
                }), e.jsxs("div", {
                    className: "flex flex-wrap gap-3 pt-2",
                    children: [e.jsxs(n, {
                        to: "/portfolio",
                        className: "inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 font-medium text-primary-foreground transition hover:bg-primary/90",
                        children: ["View portfolio", e.jsx(m, {
                            className: "size-4",
                            "aria-hidden": "true"
                        })]
                    }), e.jsxs("a", {
                        href: `mailto:${a.email}`,
                        className: "inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-foreground px-6 font-medium transition hover:bg-foreground hover:text-background",
                        children: [e.jsx(r, {
                            className: "size-4",
                            "aria-hidden": "true"
                        }), "Get in touch"]
                    })]
                })]
            }), e.jsxs("div", {
                className: "relative mx-auto w-full max-w-sm",
                children: [e.jsx("div", {
                    className: "absolute -inset-3 translate-x-4 translate-y-4 rounded-[2rem] bg-accent/20",
                    "aria-hidden": "true"
                }), e.jsx("img", {
                    src: a.headshot,
                    alt: a.headshotAlt,
                    width: 400,
                    height: 500,
                    className: "relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl shadow-foreground/10"
                })]
            })]
        }), e.jsxs("section", {
            "aria-labelledby": "about-heading",
            className: "grid gap-8 border-t border-border py-14 md:grid-cols-[1fr_2fr] md:gap-16",
            children: [e.jsx("h2", {
                id: "about-heading",
                className: "font-display text-3xl font-semibold tracking-tight",
                children: "About me"
            }), e.jsxs("div", {
                className: "space-y-5 text-lg leading-relaxed",
                children: [a.bio.map(s => e.jsx("p", {
                    children: s
                }, s.slice(0, 24))), e.jsxs("dl", {
                    className: "grid gap-4 pt-4 sm:grid-cols-2",
                    children: [e.jsx(l, {
                        icon: e.jsx(c, {
                            className: "size-5"
                        }),
                        label: "Based in",
                        children: a.location
                    }), e.jsx(l, {
                        icon: e.jsx(h, {
                            className: "size-5"
                        }),
                        label: "Education",
                        children: "B.S. Computer Science, UNCW ’24"
                    })]
                })]
            })]
        }), e.jsxs("section", {
            "aria-labelledby": "skills-heading",
            className: "grid gap-8 border-t border-border py-14 md:grid-cols-[1fr_2fr] md:gap-16",
            children: [e.jsx("h2", {
                id: "skills-heading",
                className: "font-display text-3xl font-semibold tracking-tight",
                children: "Technical skills"
            }), e.jsx("div", {
                className: "grid gap-6 sm:grid-cols-3",
                children: a.skills.map(s => e.jsxs("div", {
                    className: "rounded-xl border border-border bg-card p-5",
                    children: [e.jsx("h3", {
                        className: "mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-primary",
                        children: s.group
                    }), e.jsx("ul", {
                        className: "space-y-1.5",
                        children: s.items.map(i => e.jsx("li", {
                            children: i
                        }, i))
                    })]
                }, s.group))
            })]
        }), e.jsx("section", {
            "aria-labelledby": "contact-heading",
            className: "rounded-[2rem] bg-primary px-6 py-12 text-primary-foreground sm:px-12",
            children: e.jsxs("div", {
                className: "flex flex-col gap-6 md:flex-row md:items-center md:justify-between",
                children: [e.jsxs("div", {
                    className: "max-w-xl space-y-3",
                    children: [e.jsx("h2", {
                        id: "contact-heading",
                        className: "font-display text-3xl font-semibold tracking-tight sm:text-4xl",
                        children: "Let’s connect."
                    }), e.jsxs("p", {
                        className: "leading-relaxed text-primary-foreground/85",
                        children: [e.jsx("span", {
                            className: "font-semibold",
                            children: "Availability:"
                        }), " ", a.availability]
                    })]
                }), e.jsxs("a", {
                    href: `mailto:${a.email}`,
                    className: "inline-flex min-h-12 items-center gap-2 self-start rounded-full bg-primary-foreground px-6 font-medium text-primary transition hover:bg-secondary md:self-auto",
                    children: [e.jsx(r, {
                        className: "size-4",
                        "aria-hidden": "true"
                    }), "Email ", a.name.split(" ")[0]]
                })]
            })
        })]
    })
}
function l({icon: s, label: i, children: d}) {
    return e.jsxs("div", {
        className: "flex items-start gap-3 rounded-xl bg-muted p-4",
        children: [e.jsx("span", {
            className: "mt-0.5 text-primary",
            "aria-hidden": "true",
            children: s
        }), e.jsxs("div", {
            children: [e.jsx("dt", {
                className: "text-sm text-muted-foreground",
                children: i
            }), e.jsx("dd", {
                className: "font-medium",
                children: d
            })]
        })]
    })
}
export {g as component};
