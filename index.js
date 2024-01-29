var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx } from "react/jsx-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});

// css-bundle-plugin-ns:@remix-run/css-bundle
var cssBundleHref = "/build/css-bundle-NEHROZTK.css";

// app/root.tsx
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/global.css
var global_default = "/build/_assets/global-NICB363Q.css";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-3MT7SNX7.css";

// app/contexts/themeContext.tsx
import { createContext, useEffect, useState } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var ThemeContext = createContext({
  darkTheme: !1,
  toggleTheme: () => {
  }
});
function ThemeContextProvider({ children }) {
  let [darkTheme, setDarkTheme] = useState(!1);
  useEffect(() => {
    setDarkTheme(localStorage.getItem("theme") === "dark");
  }, []);
  function toggleTheme() {
    darkTheme ? (document.documentElement.classList.remove("dark"), localStorage.setItem("theme", "light"), setDarkTheme(!1)) : (document.documentElement.classList.add("dark"), localStorage.setItem("theme", "dark"), setDarkTheme(!0));
  }
  return /* @__PURE__ */ jsx2(ThemeContext.Provider, { value: { darkTheme, toggleTheme }, children });
}
var themeContext_default = ThemeContext;

// app/contexts/tooltipContext.tsx
import { createContext as createContext2, useState as useState2 } from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var TooltipContext = createContext2({
  tooltip: { visible: !1, message: "" },
  openTooltip: (message, seconds) => {
  },
  closeTooltip: () => {
  }
});
function TooltipContextProvider({ children }) {
  let [tooltip, setTooltip] = useState2({ visible: !1, message: "" });
  function openTooltip(message, seconds) {
    setTooltip({ visible: !0, message }), setTimeout(() => {
      closeTooltip();
    }, seconds);
  }
  function closeTooltip() {
    setTooltip((prevState) => ({ ...prevState, visible: !1 }));
  }
  return /* @__PURE__ */ jsx3(TooltipContext.Provider, { value: { tooltip, openTooltip, closeTooltip }, children });
}
var tooltipContext_default = TooltipContext;

// app/root.tsx
import { jsx as jsx4, jsxs } from "react/jsx-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: global_default },
  ...cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []
];
function App() {
  return typeof window < "u" && (localStorage.theme === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")), /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx4("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx4("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx4(Meta, {}),
      /* @__PURE__ */ jsx4(Links, {})
    ] }),
    /* @__PURE__ */ jsx4("body", { children: /* @__PURE__ */ jsx4(ThemeContextProvider, { children: /* @__PURE__ */ jsxs(TooltipContextProvider, { children: [
      /* @__PURE__ */ jsx4(Outlet, {}),
      /* @__PURE__ */ jsx4(ScrollRestoration, {}),
      /* @__PURE__ */ jsx4(Scripts, {}),
      /* @__PURE__ */ jsx4(LiveReload, {})
    ] }) }) })
  ] });
}

// app/routes/contact/index.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => ContactPage
});
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@remix-run/react";
import axios from "axios";
import { useContext as useContext2 } from "react";
import { useForm } from "react-hook-form";

// app/components/Switch/index.tsx
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
function Switch({ condition, changeCondition, offIcon, onIcon }) {
  return console.log({ condition, changeCondition }), /* @__PURE__ */ jsxs2("label", { htmlFor: "toggleTheme", className: "fixed top-8 right-4 w-[50px] h-[24px] rounded-3xl flex cursor-pointer bg-[#191919] dark:bg-gray-700 z-50", children: [
    /* @__PURE__ */ jsx5("input", { type: "checkbox", className: "hidden", name: "toggleTheme", id: "toggleTheme", onChange: changeCondition, checked: condition }),
    /* @__PURE__ */ jsx5("span", { className: "w-1/2 text-base text-center pointer-events-none", dangerouslySetInnerHTML: { __html: offIcon } }),
    /* @__PURE__ */ jsx5("span", { className: "w-1/2 text-base text-center pointer-events-none", dangerouslySetInnerHTML: { __html: onIcon } }),
    /* @__PURE__ */ jsx5(
      "span",
      {
        className: `absolute top-[1px] left-[1px] w-[22px] h-[22px] rounded-full bg-white transform transition-transform ${condition ? "translate-x-6" : "translate-x-0"}`
      }
    )
  ] });
}

// app/components/Tooltip/index.tsx
import { useContext } from "react";
import { Fragment, jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
function Tooltip({ message, learnMore }) {
  let { tooltip, closeTooltip } = useContext(tooltipContext_default);
  return /* @__PURE__ */ jsx6(Fragment, { children: tooltip?.visible && /* @__PURE__ */ jsx6("div", { className: "bg-primary-600 absolute bottom-0 w-full z-10", children: /* @__PURE__ */ jsx6("div", { className: "mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs3("div", { className: "flex flex-wrap items-center justify-between", children: [
    /* @__PURE__ */ jsxs3("div", { className: "flex w-0 flex-1 items-center", children: [
      /* @__PURE__ */ jsx6("span", { className: "flex rounded-lg bg-primary-800 p-2", children: /* @__PURE__ */ jsx6(
        "svg",
        {
          className: "h-6 w-6 text-white",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: "1.5",
          stroke: "currentColor",
          "aria-hidden": "true",
          children: /* @__PURE__ */ jsx6(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsxs3("p", { className: "ml-3 truncate font-medium text-white", children: [
        /* @__PURE__ */ jsx6("span", { className: "md:hidden", children: message || "Enviado com sucesso!" }),
        /* @__PURE__ */ jsx6("span", { className: "hidden md:inline", children: message || "Enviado com sucesso!" })
      ] })
    ] }),
    learnMore && /* @__PURE__ */ jsx6("div", { className: "order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto", children: /* @__PURE__ */ jsx6(
      "a",
      {
        href: "#",
        className: "flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-primary-600 shadow-sm hover:bg-primary-50",
        children: learnMore
      }
    ) }),
    /* @__PURE__ */ jsx6("div", { className: "order-2 flex-shrink-0 sm:order-3 sm:ml-3", children: /* @__PURE__ */ jsxs3(
      "button",
      {
        type: "button",
        onClick: closeTooltip,
        className: "-mr-1 flex rounded-md p-2 hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2",
        children: [
          /* @__PURE__ */ jsx6("span", { className: "sr-only", children: "Dismiss" }),
          /* @__PURE__ */ jsx6(
            "svg",
            {
              className: "h-6 w-6 text-white",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: "1.5",
              stroke: "currentColor",
              "aria-hidden": "true",
              children: /* @__PURE__ */ jsx6("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" })
            }
          )
        ]
      }
    ) })
  ] }) }) }) });
}

// app/schemas/contact.schema.ts
import { z } from "zod";
var contactSchema = z.object({
  name: z.string().min(3, "Nome deve conter pelo menos 3 caracteres"),
  email: z.string().email("Email inv\xE1lido"),
  message: z.string().min(5, "Mensagem deve conter pelo menos 5 caracteres")
});

// app/stores/contact.store.ts
import { create } from "zustand";
var useContactStore = create((set) => ({
  contact: {
    name: "",
    email: "",
    message: ""
  },
  name: "",
  email: "",
  message: "",
  setContact: (contact) => set((_) => ({ contact })),
  setName: (name) => set((_) => ({ name })),
  setEmail: (email) => set((_) => ({ email })),
  setMessage: (message) => set((_) => ({ message }))
}));

// app/routes/contact/index.tsx
import { Fragment as Fragment2, jsx as jsx7, jsxs as jsxs4 } from "react/jsx-runtime";
function ContactPage() {
  let { setName, setEmail, setMessage, setContact } = useContactStore(), { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: zodResolver(contactSchema) }), { darkTheme, toggleTheme } = useContext2(themeContext_default), { tooltip, openTooltip, closeTooltip } = useContext2(tooltipContext_default), navigate = useNavigate();
  return /* @__PURE__ */ jsx7(Fragment2, { children: /* @__PURE__ */ jsxs4("main", { className: "h-screen flex justify-center items-center flex-col bg-gray-50 dark:bg-[#191919] text-black dark:text-gray-300", children: [
    /* @__PURE__ */ jsx7(Switch, { condition: darkTheme, changeCondition: toggleTheme, offIcon: "&#x2600;&#xFE0F;", onIcon: "&#127769;" }),
    /* @__PURE__ */ jsxs4("div", { className: " px-6 md:px-16 py-12 w-full lg:w-2/3 xl:w-1/3", children: [
      /* @__PURE__ */ jsx7("h1", { className: "mt-6 text-center text-3xl font-bold tracking-tight text-black dark:text-gray-100 mb-10", children: "Entre em Contato!" }),
      /* @__PURE__ */ jsxs4("form", { method: "post", onSubmit: handleSubmit(sendMail), children: [
        /* @__PURE__ */ jsxs4("div", { children: [
          /* @__PURE__ */ jsxs4("div", { children: [
            /* @__PURE__ */ jsx7("label", { htmlFor: "name", className: "sr-only", children: "Nome" }),
            /* @__PURE__ */ jsx7(
              "input",
              {
                id: "name",
                type: "name",
                ...register("name"),
                required: !0,
                className: "relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm",
                placeholder: "Nome"
              }
            )
          ] }),
          errors.name?.message && /* @__PURE__ */ jsx7("p", { children: errors.name?.message?.toString() }),
          /* @__PURE__ */ jsxs4("div", { children: [
            /* @__PURE__ */ jsx7("label", { htmlFor: "email", className: "sr-only", children: "Email" }),
            /* @__PURE__ */ jsx7(
              "input",
              {
                id: "email",
                type: "email",
                ...register("email"),
                required: !0,
                className: "relative block w-full appearance-none rounded-none rounded-b-md border-t-0 focus:border-t border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm",
                placeholder: "Email"
              }
            )
          ] }),
          errors.email?.message && /* @__PURE__ */ jsx7("p", { children: errors.email?.message?.toString() })
        ] }),
        /* @__PURE__ */ jsxs4("div", { className: "my-8", children: [
          /* @__PURE__ */ jsx7("label", { htmlFor: "message", className: "sr-only", children: "Mensagem" }),
          /* @__PURE__ */ jsx7(
            "textarea",
            {
              id: "message",
              rows: 6,
              ...register("message"),
              required: !0,
              className: "relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm",
              placeholder: "Mensagem"
            }
          )
        ] }),
        errors.message?.message && /* @__PURE__ */ jsx7("p", { children: errors.message?.message?.toString() }),
        /* @__PURE__ */ jsxs4("div", { className: "flex", children: [
          /* @__PURE__ */ jsx7(
            "div",
            {
              onClick: () => navigate(-1),
              className: "group relative flex py-2 pl-4 pr-8  text-sm font-medium justify-center rounded-l-md bg-gray-50 border border-transparent hover:border hover:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
              children: /* @__PURE__ */ jsx7("span", { className: "absolute inset-y-0 left-0 flex items-center pl-3", children: /* @__PURE__ */ jsx7(
                "svg",
                {
                  className: "w-6 h-6 text-primary-500 group-hover:text-primary-700",
                  fill: "currentColor",
                  "aria-hidden": "true",
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ jsx7("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15 19l-7-7 7-7" })
                }
              ) })
            }
          ),
          /* @__PURE__ */ jsxs4(
            "button",
            {
              type: "submit",
              className: "group relative flex w-full justify-center rounded-r-md bg-primary-600 py-2 px-4 text-sm font-medium text-gray-100 hover:text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
              children: [
                "Enviar",
                /* @__PURE__ */ jsx7("span", { className: "absolute inset-y-0 right-0 flex items-center pr-3", children: /* @__PURE__ */ jsx7(
                  "svg",
                  {
                    className: "w-6 h-6 text-gray-100 group-hover:text-white",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /* @__PURE__ */ jsx7("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 5l7 7-7 7" })
                  }
                ) })
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx7(Tooltip, { message: tooltip?.message })
  ] }) });
  async function sendMail(e) {
    setContact({ name: e.name, email: e.email, message: e.message }), setName(e.name), setEmail(e.email), setMessage(e.message);
    try {
      await axios.post("https://on3xxithejy362fi3nennx7mz40nbouv.lambda-url.us-east-1.on.aws", {
        name: e.name,
        email: e.email,
        message: e.message
      }), reset(), openTooltip("Mensagem enviada com sucesso!", 5e3);
    } catch (e2) {
      console.error(e2), openTooltip("Ops, ocorreu um erro, por favor, tente novamente!", 5e3);
    } finally {
      setTimeout(() => {
        closeTooltip();
      }, 5e3);
    }
  }
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => HomePage
});
import { Link } from "@remix-run/react";
import { useContext as useContext4 } from "react";

// app/components/Card/index.module.css
var index_module_default = { card: "GBNv-", imageWrapper: "VQu5u" };

// app/components/Card/index.tsx
import { jsx as jsx8, jsxs as jsxs5 } from "react/jsx-runtime";
function Card({ link, image, title, content }) {
  return /* @__PURE__ */ jsx8("a", { href: link, className: `${index_module_default.card} dark:hover:text-white dark:border-white`, target: "_blank", children: /* @__PURE__ */ jsxs5("div", { className: "grid grid-flow-col grid-cols-1 grid-rows-2min md:grid-flow-row md:grid-rows-1 md:grid-cols-3 h-full", children: [
    /* @__PURE__ */ jsx8("div", { className: `${index_module_default.imageWrapper} lg:order-2`, children: /* @__PURE__ */ jsx8("div", { className: "aspect-w-16 aspect-h-9", children: /* @__PURE__ */ jsx8(
      "img",
      {
        src: image,
        alt: `Imagem do ${title}`,
        className: "rounded-t-md md:rounded-none md:rounded-l-md lg:rounded-none lg:rounded-r-md",
        sizes: "100vw",
        style: {
          objectFit: "cover"
        }
      }
    ) }) }),
    /* @__PURE__ */ jsxs5("div", { className: "p-5 pb-12 md:pb-5 md:col-span-2", children: [
      /* @__PURE__ */ jsxs5("div", { className: "flex items-center mb-4 space-x-2", children: [
        /* @__PURE__ */ jsx8("h3", { children: title }),
        /* @__PURE__ */ jsx8("span", { children: "\u2192" })
      ] }),
      /* @__PURE__ */ jsx8("p", { className: "text-lg md:text-sm", children: content })
    ] })
  ] }) });
}

// app/components/Footer/index.tsx
import { useContext as useContext3 } from "react";

// app/assets/images/github.png
var github_default = "/build/_assets/github-5PHXUC2N.png";

// app/assets/images/github_white.png
var github_white_default = "/build/_assets/github_white-JA2W3GKH.png";

// app/components/Footer/index.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
function Footer() {
  let { darkTheme } = useContext3(themeContext_default);
  return /* @__PURE__ */ jsx9("footer", { className: "p-1 border-t border-white w-full", children: /* @__PURE__ */ jsx9("a", { href: "https://github.com/t4zo", target: "_blank", rel: "noopener noreferrer", className: "flex justify-center items-center", children: /* @__PURE__ */ jsx9("img", { src: darkTheme ? github_white_default : github_default, alt: "Github Repository", className: "h-6" }) }) });
}

// app/assets/images/artmed360.png
var artmed360_default = "/build/_assets/artmed360-2CHFLNNX.png";

// app/assets/images/covid19.jpg
var covid19_default = "/build/_assets/covid19-QOYMYZZ5.jpg";

// app/assets/images/egesplan.png
var egesplan_default = "/build/_assets/egesplan-GIFCGQUA.png";

// app/assets/images/netflix.jpg
var netflix_default = "/build/_assets/netflix-OYGUKOGI.jpg";

// app/assets/images/osfederas.png
var osfederas_default = "/build/_assets/osfederas-DQGUEQ3R.png";

// app/assets/images/pgp.png
var pgp_default = "/build/_assets/pgp-ZCRMJQX5.png";

// app/assets/images/saca.jpg
var saca_default = "/build/_assets/saca-PCQMY2BX.jpg";

// app/assets/images/saed.jpg
var saed_default = "/build/_assets/saed-ZWF3NYL6.jpg";

// app/data.ts
var cards = [
  {
    title: "SACA",
    content: "Aplicativo m\xF3vel voltado para ajudar crian\xE7as com problemas de comunica\xE7\xE3o",
    link: "https://play.google.com/store/apps/details?id=xyz.saca",
    image: saca_default
  },
  {
    title: "Artmed 360",
    content: "E-Commerce voltado para venda de conte\xFAdo para a \xE1rea da sa\xFAde",
    link: "https://www.artmed360.com.br",
    image: artmed360_default
  },
  {
    title: "Egesplan",
    content: "Sistema para gest\xE3o e coordena\xE7\xE3o de dados de prefeituras",
    link: "https://egesplan.vercel.app",
    image: egesplan_default
  },
  {
    title: "SAED",
    content: "Sistema de avalia\xE7\xE3o de desempenho escolar atrav\xE9s da resolu\xE7\xE3o de quest\xF5es elobaradas pelos professores",
    link: "https://saed.t4zo.com",
    image: saed_default
  },
  {
    title: "Netflix",
    content: "Projeto pessoal realizando um clone com a possibilidade de cria\xE7\xE3o de contas e atualiza\xE7\xE3o peri\xF3dica do cat\xE1logo de S\xE9ries e Filmes",
    link: "https://netflix-blush.vercel.app",
    image: netflix_default
  },
  {
    title: "PGP",
    content: "Programa de Governo Participativo, um portal feito em 2020 para o ent\xE3o candidato a prefeito de Juazeiro, Paulo Bomfim no per\xEDodo eleitoral",
    link: "https://pgpjuazeiroba.netlify.app",
    image: pgp_default
  },
  {
    title: "Covid19",
    content: "Sistema para rastreamento de casos e mortes confirmadas da Covid19 por pa\xEDs ou globalmente",
    link: "https://covid19-tracker-azure.vercel.app",
    image: covid19_default
  },
  {
    title: "Os Federa",
    content: "Projeto para o professor, afim de atualizar seu site pessoal",
    link: "https://osfedera.netlify.app",
    image: osfederas_default
  }
], data_default = cards;

// app/routes/_index.tsx
import { jsx as jsx10, jsxs as jsxs6 } from "react/jsx-runtime";
function HomePage() {
  let { darkTheme, toggleTheme } = useContext4(themeContext_default);
  return console.log({ darkTheme, toggleTheme }), /* @__PURE__ */ jsxs6("div", { className: "m-auto min-h-screen flex flex-col justify-center items-center bg-white dark:bg-[#191919] text-black dark:text-gray-300", children: [
    /* @__PURE__ */ jsxs6("main", { className: "px-10 py-20 m-auto flex flex-col flex-1 justify-center items-center", children: [
      /* @__PURE__ */ jsx10(Switch, { condition: darkTheme, changeCondition: toggleTheme, offIcon: "&#x2600;&#xFE0F;", onIcon: "&#127769;" }),
      /* @__PURE__ */ jsxs6("h1", { className: "text-center m-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight", children: [
        /* @__PURE__ */ jsxs6("span", { className: "hover:text-primary-600 hover:cursor-pointer dark:text-gray-200 dark:hover:text-primary-600", children: [
          /* @__PURE__ */ jsx10("span", { className: "text-primary-600", children: "T" }),
          "\xE1cio de ",
          /* @__PURE__ */ jsx10("span", { className: "text-primary-600", children: "S" }),
          "ouza ",
          /* @__PURE__ */ jsx10("span", { className: "text-primary-600", children: "C" }),
          "ampos"
        ] }),
        /* @__PURE__ */ jsx10("span", { children: " | " }),
        /* @__PURE__ */ jsx10(Link, { to: "/contact", className: "text-primary-600 no-underline hover:underline focus:underline", children: "Contato" })
      ] }),
      /* @__PURE__ */ jsx10("div", { className: "grid gap-5 grid-cols-1 lg:grid-cols-2 w-full mt-12 lg:max-w-6xl", children: data_default.slice(0, 6).map((card, index) => /* @__PURE__ */ jsx10(Card, { title: card.title, content: card.content, link: card.link, image: card.image }, index)) })
    ] }),
    /* @__PURE__ */ jsx10(Footer, {})
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-MISA7XLR.js", imports: ["/build/_shared/chunk-GYB2TR67.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-HRSM5K6H.js", imports: ["/build/_shared/chunk-7I2ONRUP.js", "/build/_shared/chunk-PRY7PRW7.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-DMYQ5LLE.js", imports: ["/build/_shared/chunk-UDHUWDZL.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-WXP7WP2W.js", imports: ["/build/_shared/chunk-UDHUWDZL.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "d7508561", hmr: void 0, url: "/build/manifest-D7508561.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
