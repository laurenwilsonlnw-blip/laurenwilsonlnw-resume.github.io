import {c as i, j as e} from "./index-8iUatAJL.js";
import {P as o} from "./PageHeading-WVvQn5Es.js";
const r = [["path", {
    d: "M7 7h10v10",
    key: "1tivn9"
}], ["path", {
    d: "M7 17 17 7",
    key: "1vkiza"
}]]
  , s = i("arrow-up-right", r)
  , l = [{
    title: "Generative Sketches",
    category: "Creative Coding",
    year: "2024",
    order: 1,
    summary: "A series of code-driven visual pieces exploring pattern, color, and motion, developed through creative coding coursework.",
    image: "/img/project-creative-coding.svg",
    imageAlt: "Placeholder artwork for the Generative Sketches project",
    tags: ["Creative Coding", "Python", "Digital Arts"],
    content: "",
    _meta: {
        filePath: "creative-coding.md",
        fileName: "creative-coding.md",
        directory: ".",
        extension: "md",
        path: "creative-coding"
    }
}, {
    title: "Digital Illustration & Photo Editing",
    category: "Digital Arts",
    year: "2023",
    order: 4,
    summary: "A collection of digital artwork and image compositions created and retouched in Adobe Photoshop.",
    image: "/img/project-digital-art.svg",
    imageAlt: "Placeholder artwork for the Digital Illustration and Photo Editing project",
    tags: ["Adobe Photoshop", "Digital Arts", "Visual Design"],
    content: "",
    _meta: {
        filePath: "digital-art.md",
        fileName: "digital-art.md",
        directory: ".",
        extension: "md",
        path: "digital-art"
    }
}, {
    title: "Object-Oriented Application",
    category: "Software Design",
    year: "2022",
    order: 3,
    summary: "A Java application designed around object-oriented principles, with an emphasis on clear class structure and reusable components.",
    image: "/img/project-software.svg",
    imageAlt: "Placeholder artwork for the Object-Oriented Application project",
    tags: ["Java", "Object-Oriented Design", "Data Structures"],
    content: "",
    _meta: {
        filePath: "oop-application.md",
        fileName: "oop-application.md",
        directory: ".",
        extension: "md",
        path: "oop-application"
    }
}, {
    title: "Responsive Web Build",
    category: "Web Development",
    year: "2023",
    order: 2,
    summary: "A multi-page, accessible website built from scratch with semantic HTML and a focus on clean layout across screen sizes.",
    image: "/img/project-web.svg",
    imageAlt: "Placeholder artwork for the Responsive Web Build project",
    tags: ["HTML", "Web Development", "Accessibility"],
    content: "",
    _meta: {
        filePath: "web-development.md",
        fileName: "web-development.md",
        directory: ".",
        extension: "md",
        path: "web-development"
    }
}]
  , n = [...l].sort( (t, a) => t.order - a.order);
function m() {
    return e.jsxs("div", {
        className: "mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20",
        children: [e.jsx(o, {
            eyebrow: "Portfolio",
            title: "Selected work",
            children: "Projects from computer science, web development, creative coding, and digital art."
        }), e.jsx("ul", {
            className: "mt-14 grid gap-8 sm:grid-cols-2",
            children: n.map(t => e.jsx("li", {
                children: e.jsxs("article", {
                    className: "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/10",
                    children: [e.jsx("img", {
                        src: t.image,
                        alt: t.imageAlt,
                        width: 800,
                        height: 500,
                        loading: "lazy",
                        className: "aspect-[8/5] w-full object-cover"
                    }), e.jsxs("div", {
                        className: "flex flex-1 flex-col gap-3 p-6",
                        children: [e.jsxs("p", {
                            className: "text-sm font-semibold uppercase tracking-[0.15em] text-accent",
                            children: [t.category, e.jsxs("span", {
                                className: "text-muted-foreground",
                                children: [" · ", t.year]
                            })]
                        }), e.jsx("h2", {
                            className: "font-display text-2xl font-semibold tracking-tight",
                            children: t.link ? e.jsxs("a", {
                                href: t.link,
                                className: "inline-flex items-center gap-1 underline-offset-4 hover:underline",
                                children: [t.title, e.jsx(s, {
                                    className: "size-5",
                                    "aria-hidden": "true"
                                })]
                            }) : t.title
                        }), e.jsx("p", {
                            className: "leading-relaxed text-muted-foreground",
                            children: t.summary
                        }), e.jsx("ul", {
                            "aria-label": "Tools and topics",
                            className: "mt-auto flex flex-wrap gap-2 pt-3",
                            children: t.tags.map(a => e.jsx("li", {
                                className: "rounded-full bg-muted px-3 py-1 text-sm",
                                children: a
                            }, a))
                        })]
                    })]
                })
            }, t._meta.path))
        })]
    })
}
export {m as component};
