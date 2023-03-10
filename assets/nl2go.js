window[window.Newsletter2GoTrackingObject] = function(e, t, n) {
    for (var a = function() {
        var n, a, r, i, s, o, c, l, u, d, p, m = {}, g = {}, f = {
            config: {
                form: {
                    type: "form",
                    "class": "",
                    id: "",
                    style: ""
                },
                container: {
                    type: "table",
                    "class": "",
                    id: "",
                    style: "width: 100%;"
                },
                closeButton: {
                    type: "a",
                    "class": "",
                    id: "",
                    content: "&times;",
                    style: "cursor: pointer; float: right; position: absolute; right: 15px; top: 5px; font-size: 27px;"
                },
                row: {
                    type: "tr",
                    "class": "",
                    style: ""
                },
                columnLeft: {
                    type: "td",
                    "class": "",
                    style: "width: 40%; padding: 10px 5px;"
                },
                columnRight: {
                    type: "td",
                    "class": "",
                    style: ""
                },
                checkbox: {
                    type: "input",
                    "class": "",
                    style: ""
                },
                separator: {
                    type: "br",
                    "class": "",
                    style: ""
                },
                input: {
                    "class": "",
                    style: "padding: 5px 10px; border-radius: 2px; border: 1px solid #d8dee4;"
                },
                textarea: {
                    "class": "",
                    style: "padding: 5px 10px; border-radius: 2px; border: 1px solid #d8dee4;"
                },
                dropdown: {
                    type: "select",
                    "class": "",
                    style: "padding: 3px 5px; border-radius: 2px; border: 1px solid #d8dee4;"
                },
                button: {
                    type: "button",
                    "class": "",
                    id: "",
                    style: "background-color: #00baff; border: none; border-radius: 4px; padding: 10px 20px; color: #ffffff; margin-top: 20px; cursor: pointer; min-width: 150px;"
                },
                label: {
                    type: "label",
                    "class": "",
                    style: "padding-left: 5px"
                },
                loader: {
                    type: "img",
                    src: "https://files.newsletter2go.com/thumbs/loader.svg",
                    id: "",
                    "class": "",
                    alt: "loader",
                    style: "margin: auto; display:block; width: auto;"
                },
                message: {
                    type: "h2",
                    "class": "",
                    id: "",
                    style: "text-align: center;"
                },
                overlay: {
                    style: "display: block; width: 100%; height: 100%; position: fixed; z-index: 2147483647; background: rgba(0,0,0,0.2); top: 0; left: 0; overflow: auto;"
                },
                popup: {
                    style: "background-color: #ffffff; padding: 50px; display: block; margin: 45px auto auto auto; max-width: 600px; border-radius: 5px; position: relative;"
                },
                image: {
                    type: "img",
                    "class": "",
                    style: "max-width: 100%;"
                },
                captchaImage: {
                    type: "img",
                    "class": "",
                    style: "padding: 5px; border: 3px solid #fff; margin-top: 5px; width: 32px; height: 32px; cursor: pointer;",
                    "style:active": "padding: 5px; border: 3px solid #ccc; margin-top: 5px; width: 32px; height: 32px; cursor: pointer;"
                },
                errorState: {
                    "class": "",
                    style: "border: 1px solid red"
                },
                h1: {
                    "class": "",
                    style: "",
                    type: "h1"
                },
                h2: {
                    "class": "",
                    style: "",
                    type: "h2"
                },
                h3: {
                    "class": "",
                    style: "",
                    type: "h3"
                },
                h4: {
                    "class": "",
                    style: "",
                    type: "h4"
                },
                h5: {
                    "class": "",
                    style: "",
                    type: "h5"
                },
                p: {
                    "class": "",
                    style: "",
                    type: "p"
                }
            },
            createElement: function(e, t) {
                if (t.config[e].type)
                    var n = document.createElement(t.config[e].type);
                else
                    var n = document.createElement(e);
                if (n.className = t.config[e]["class"],
                t.config[e].id && (n.id = t.config[e].id),
                t.config[e].alt && (n.alt = t.config[e].alt),
                t.config[e].style)
                    for (var a = t.config[e].style.split(";"), r = 0; r < a.length; r++) {
                        var i = a[r].split(":");
                        if (2 == i.length) {
                            var s = i[0].replace(/^\s+|\s+$/g, "")
                              , o = i[1].replace(/^\s+|\s+$/g, "");
                            n.style[s] = o
                        }
                    }
                return t.config[e].src && (n.src = t.config[e].src),
                n.innerHTML = void 0 !== t.config[e].content ? t.config[e].content : n.innerHTML,
                n
            },
            selectById: function(e, t) {
                var n = document.getElementById(e);
                n && t.apply(n, [])
            },
            selectByClass: function(e, t) {
                for (var n = document.getElementsByClassName(e), a = 0; a < n.length; a++)
                    t.apply(n[a], [])
            },
            selectByTag: function(e, t) {
                for (var n = document.getElementsByTagName(e), a = 0; a < n.length; a++)
                    t.apply(n[a], [])
            },
            hasClass: function(e, t) {
                return (" " + e.className + " ").replace(/[\t\r\n\f]/g, " ").indexOf(" " + t + " ") > -1
            },
            extend: function() {
                for (var e = arguments[0] || {}, t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    if (n)
                        for (var a in n)
                            n.hasOwnProperty(a) && ("object" == typeof n[a] ? e[a] = this.extend(e[a], n[a]) : e[a] = n[a])
                }
                return e
            },
            getHtmlType: function(e, t, n) {
                var a;
                if (e.values)
                    a = e.is_multiselect || "list" == e.type ? f.getCheckboxes(e, t) : e.is_radio === !0 ? f.getRadioGroup(e, t) : f.getDropdown(e, t);
                else
                    switch (e.attribute_type) {
                    case "boolean":
                        e.values = [{
                            value: 1,
                            is_preselected: "1" === e.default_value,
                            label: "TR" === n.tagName ? "" : e.label
                        }],
                        a = f.getCheckboxes(e, t);
                        break;
                    case "date":
                        var r = null !== e.recipient_value ? new Date(e.recipient_value) : "";
                        e.recipient_value = f.dateAsString(r);
                    default:
                        a = f.getInput(e, t)
                    }
                return e.is_required && (a.className += " required",
                a.required = !0),
                a.value = e.recipient_value,
                "SPAN" !== a.tagName && "DIV" !== a.tagName && (a.id = e.uid),
                e.element = a,
                a
            },
            dateAsString: function(e) {
                function t(e) {
                    return e < 10 ? "0" + e : e
                }
                var n = [];
                return e instanceof Date ? (n.push(e.getFullYear()),
                n.push(t(e.getMonth() + 1)),
                n.push(t(e.getDate())),
                n.join("-")) : ""
            },
            getCheckboxes: function(e, t) {
                for (var n = this, a = document.createElement("span"), r = 0; r < e.values.length; r++) {
                    var i = e.values[r];
                    i.label = this.getLabel(e, i);
                    var s = "boolean" === e.attribute_type ? e.uid : e.uid + "_" + r
                      , o = this.createElement("checkbox", t);
                    if (o.type = "checkbox",
                    o.value = i.value,
                    o.id = s,
                    o.name = e.uid,
                    e.is_required && (o.className += " required",
                    o.required = !0),
                    i.is_preselected && e.apply_preselected && (o.checked = !0,
                    e.recipient_value = e.recipient_value || [],
                    e.recipient_value.indexOf(i.value) === -1 && e.recipient_value.push(i.value)),
                    !e.apply_preselected)
                        if ("object" == typeof e.recipient_value) {
                            var c = Object.keys(e.recipient_value).map(function(t) {
                                return e.recipient_value[t]
                            });
                            o.checked = -1 < c.indexOf(i.value)
                        } else
                            e.recipient_value == i.value && (o.checked = !0);
                    o.onchange = function() {
                        e.attribute_type && "boolean" == e.attribute_type ? e.recipient_value = this.checked ? this.value : 0 : (e.recipient_value = e.recipient_value || [],
                        this.checked ? e.recipient_value.push(this.value) : e.recipient_value.splice(e.recipient_value.indexOf(this.value), 1)),
                        n.validateMultipleRequired(e, this.name)
                    }
                    ;
                    var l = this.createElement("label", t);
                    if (l.htmlFor = s,
                    l.innerHTML = "undefined" == typeof i.label ? i.value : i.label,
                    !i.is_hidden && (a.appendChild(o),
                    a.appendChild(l),
                    e.values[parseInt(r) + 1])) {
                        var u = this.createElement("separator", t);
                        a.appendChild(u)
                    }
                }
                return a
            },
            getDropdown: function(e, t) {
                for (var n = this.createElement("dropdown", t), a = !1, r = [], i = 0; i < e.values.length; i++) {
                    var s = e.values[i];
                    s.label = this.getLabel(e, s);
                    var o = document.createElement("option");
                    o.value = s.value,
                    o.innerHTML = s.label,
                    s.is_preselected && e.apply_preselected && (a = !0,
                    o.selected = !0,
                    e.recipient_value = s.value),
                    r.push(o),
                    n.appendChild(o)
                }
                for (a || n.appendChild(document.createElement("option")),
                i = 0; i < r.length; i++)
                    n.appendChild(r[i]);
                return n.onchange = function() {
                    e.recipient_value = this.value
                }
                ,
                n
            },
            getRadioGroup: function(e, t) {
                var n, a, r, i, s, o = document.createElement("div");
                for (s = 0; s < e.values.length; s++)
                    i = e.values[s],
                    i.label = this.getLabel(e, i),
                    n = document.createElement("div"),
                    a = document.createElement("input"),
                    a.type = "radio",
                    a.id = e.uid + "_" + s,
                    a.name = e.uid,
                    a.value = i.value,
                    e.is_required && (a.className += " required",
                    a.required = !0),
                    i.is_preselected && e.apply_preselected && (a.checked = !0,
                    e.recipient_value = i.value),
                    e.apply_preselected || e.recipient_value !== i.value || (a.checked = !0),
                    a.onchange = function() {
                        e.recipient_value = this.value
                    }
                    ,
                    r = document.createElement("label"),
                    r.htmlFor = a.id,
                    r.innerHTML = i.label,
                    n.appendChild(a),
                    n.appendChild(r),
                    o.appendChild(n);
                return o
            },
            getInput: function(e, t) {
                var n;
                e.is_multiline === !0 ? (n = this.createElement("textarea", t),
                n.rows = 3) : n = this.createElement("input", t);
                try {
                    switch (e.attribute_sub_type) {
                    case "integer":
                        n.type = "number",
                        n.step = 1;
                        break;
                    case "float":
                        n.type = "number",
                        n.step = "any";
                        break;
                    default:
                        n.type = e.attribute_sub_type
                    }
                } catch (a) {
                    n.type = "text"
                }
                return n.placeholder = e.placeholder,
                n.onchange = function() {
                    "datetime" === e.attribute_sub_type && this.value ? e.recipient_value = new Date(this.value) : e.recipient_value = this.value
                }
                ,
                n
            },
            outputMessage: function(e, t, n) {
                n = n || !1,
                f.loader("hide", t),
                t.message || (t.message = f.createElement("message", t)),
                t.message.innerHTML = e,
                n && (t.container.innerHTML = ""),
                l ? (t.container.insertBefore(t.message, t.container.nextSibling),
                t.container.appendChild(t.closeButton)) : t.insertBefore(t.message, t.container)
            },
            loader: function(e, t) {
                "show" == e ? (t.message && (t.message.innerHTML = ""),
                t.loader || (t.loader = f.createElement("loader", t)),
                l ? t.container.insertBefore(t.loader, t.container.nextSibling) : t.insertBefore(t.loader, t.container),
                t.loader.style.display = "block") : t.loader.style.display = "none"
            },
            getDateFormat: function(e) {
                var t = new Date(e)
                  , n = {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit"
                };
                return t.toLocaleDateString(void 0, n)
            },
            getDateTimeFormat: function(e) {
                var t = new Date(e)
                  , n = {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit"
                };
                return t.toLocaleString(void 0, n)
            },
            getLabel: function(e, t) {
                switch (e.attribute_sub_type) {
                case "date":
                    return this.getDateFormat(t.value);
                case "datetime":
                    return this.getDateTimeFormat(t.value)
                }
                return "boolean" === e.attribute_type ? t.label : t.label || t.originalLabel || t.value
            },
            validateMultipleRequired: function(e, t) {
                var n, a, r = document.getElementsByName(t);
                if (!(r.length <= 1) && e.is_required)
                    for (n = 0; n < r.length; n++)
                        a = r[n],
                        e.recipient_value.length > 0 ? a.removeAttribute("required") : a.setAttribute("required", "")
            },
            generateId: function() {
                var e, t = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                for (e = 0; e < 8; e++)
                    t += n.charAt(Math.floor(Math.random() * n.length));
                return t
            },
            generateHtmlItem: function(e, t) {
                var n, a;
                e.content && e.content.length > 0 && (n = f.createElement("row", t),
                n.nodeName && "tr" === n.nodeName.toLowerCase() ? (a = f.createElement("columnLeft", t),
                a.colSpan = 2,
                a.style.width = "100%",
                a.innerHTML = e.content,
                n.appendChild(a)) : n.innerHTML = e.content,
                t.container.appendChild(n))
            },
            generateGdprCustomerItem: function(e, t) {
                var n, a, r, i;
                e.content && e.content.length > 0 && (n = f.createElement("row", t),
                n.className = n.className + " checkbox-inline",
                r = f.createElement("columnLeft", t),
                i = f.createElement("columnRight", t),
                e.uid = f.generateId(),
                e.values = [{
                    value: "",
                    label: e.content
                }],
                a = f.getCheckboxes(e, t),
                i.appendChild(a),
                n.appendChild(r),
                n.appendChild(i),
                t.container.appendChild(n))
            },
            generateGdprN2GoItem: function(e, t) {
                var n = this.createElement("row", t)
                  , a = this.createElement("columnLeft", t);
                a.colSpan = 2,
                a.style.width = "100%",
                a.innerHTML = e.content,
                n.appendChild(a),
                t.container.appendChild(n)
            }
        }, h = {
            renderArchive: function(e, t, n, a) {
                t.offset = (t.currentPage - 1) * t.count,
                t.pages = Math.ceil(t.mailings.length / t.count);
                for (var r = [], i = 0; i < t.mailings.length; i++)
                    r.push(t.mailings[i].subject || "");
                var s = "POST"
                  , o = "/render"
                  , c = "https://twig2html.newsletter2go.com";
                params = {
                    context: {},
                    body: r.join("\n")
                },
                h.registerEvent(s, o, params, function(r) {
                    for (var i = r.split("\n"), l = 0; l < t.mailings.length; l++)
                        t.mailings[l].subject = i[l];
                    params = {
                        context: t,
                        body: e
                    },
                    h.registerEvent(s, o, params, n, a, null, c)
                }, a, null, c)
            },
            create: function() {
                if (i = decodeURIComponent((new RegExp("[?|&]n2g_state=([^&;]+?)(&|#|;|$)").exec(location.search) || [, ""])[1].replace(/\+/g, "%20")) || "default",
                s = decodeURIComponent((new RegExp("[?|&]n2g_type=([^&;]+?)(&|#|;|$)").exec(location.search) || [, ""])[1].replace(/\+/g, "%20")) || "newsletter",
                "doi_test" != i) {
                    if (!arguments[1])
                        throw "A user id is required";
                    arguments[2] && arguments[2] === !0 && (u = !0),
                    arguments[1].indexOf("-") == -1 ? (a = arguments[1],
                    n = decodeURIComponent((new RegExp("[?|&]n2g=([^&;]+?)(&|#|;|$)").exec(location.search) || [, ""])[1].replace(/\+/g, "%20")) || e || null) : (a = arguments[1].split("-")[0],
                    n = arguments[1]),
                    a = a ? a.toLowerCase() : a,
                    n = n ? n.toLowerCase() : n
                }
            },
            send: function() {
                h.registerEvent.apply(this, arguments)
            },
            ecommerce_send: function() {
                for (var e in m)
                    if (m.hasOwnProperty(e)) {
                        var t = {
                            ecommerce: m[e]
                        }
                          , a = "POST"
                          , r = "/newsletters/conversion/" + n;
                        if (!n)
                            throw "No conversion cookie is set";
                        h.registerEvent(a, r, t)
                    }
            },
            ecommerce_addItem: function() {
                var e = arguments[1];
                if ("undefined" == typeof e.id)
                    throw "A transaction id is required";
                if ("undefined" == typeof e.name)
                    throw "An item name is required";
                if ("undefined" == typeof m[e.id])
                    throw "No transaction with id " + e.id + " found. Please use ecommerce:addTransaction to add it first.";
                var t = e.id;
                delete e.id,
                m[t].items = m[t].items || [],
                m[t].items.push(e)
            },
            ecommerce_addTransaction: function() {
                var e = arguments[1];
                if ("undefined" == typeof e.id)
                    throw "A transaction id is required";
                m[e.id] = e
            },
            ecommerce_clear: function() {},
            archive: function() {
                g.count = arguments[1] || 6,
                p = arguments[2] || "n2g_archive";
                var e = "GET"
                  , t = "/companies/lists/newsletters/archive/" + n + "?_sort=last_dispatch_time+DESC&_limit=999999";
                h.registerEvent(e, t, {}, function(e) {
                    d = document.getElementById(p).innerHTML.replace(/n2g-href/g, "href").replace(/n2g-src/g, "src"),
                    g.mailings = e.value,
                    g.currentPage = 1,
                    h.renderArchive(d, g, function(e) {
                        document.getElementById(p).innerHTML = e,
                        document.getElementById(p).style.display = "none" == document.getElementById(p).style.display ? "block" : document.getElementById(p).style.display
                    })
                }, function() {})
            },
            archive_nextPage: function() {
                Math.ceil(g.mailings.length / g.count) > g.currentPage && (g.currentPage++,
                h.renderArchive(d, g, function(e) {
                    document.getElementById(p).innerHTML = e
                }))
            },
            archive_prevPage: function() {
                g.currentPage > 1 && (g.currentPage--,
                h.renderArchive(d, g, function(e) {
                    document.getElementById(p).innerHTML = e
                }))
            },
            archive_gotoPage: function() {
                var e = arguments[1] || 1;
                e >= 1 && Math.ceil(g.mailings.length / g.count) >= e && (g.currentPage = e,
                h.renderArchive(d, g, function(e) {
                    document.getElementById(p).innerHTML = e,
                    document.getElementById(p).style.display = "block"
                }))
            },
            webversion: function() {
                var e = arguments[1] || function() {}
                  , t = arguments[2] || function() {}
                  , a = "GET"
                  , r = "/newsletters/webversion/" + n;
                h.registerEvent(a, r, {}, e, t)
            },
            unsubscribe_addReason: function() {
                var e = arguments[1] || ""
                  , t = arguments[2] || function() {}
                  , a = arguments[3] || function() {}
                  , r = "POST"
                  , i = "form" == s ? "/forms/unsubscribe/reason/" + n : "/newsletters/unsubscribe/reason/" + n
                  , o = {
                    reason: e
                };
                h.registerEvent(r, i, o, t, a)
            },
            initCaptcha: function(e, t) {
                var n, a, r = f.createElement("columnLeft", e), i = f.createElement("columnRight", e), s = f.createElement("label", e), c = f.createElement("separator", e), l = [], u = {};
                o.innerHTML = "",
                o.appendChild(r),
                o.appendChild(i),
                h.registerEvent("POST", "/captcha", {
                    language: t
                }, function(t) {
                    a = t.value[0][0],
                    n = a.info.keyValue,
                    s.innerHTML = a.info.identifier,
                    i.appendChild(s),
                    i.appendChild(c),
                    u.keyValue = n,
                    u.correctValue = a.info.correctValue,
                    e.captcha = u,
                    l = h.addCaptchaImagesToDom(i, a, e),
                    h.addClickEventCaptchaImage(l, e)
                })
            },
            addCaptchaImagesToDom: function(e, n, a) {
                for (var r, i, s = [], o = n.info.keyValue, c = 0; c < n.images.length; c++)
                    r = t + "/captcha/image/" + n.images[c] + "/" + o,
                    i = f.createElement("captchaImage", a),
                    i.src = r,
                    i.alt = "captcha",
                    i.dataset.hash = n.images[c],
                    s.push(i),
                    e.appendChild(i);
                return s
            },
            addClickEventCaptchaImage: function(e, t) {
                for (var n = 0; n < e.length; n++)
                    e[n].addEventListener("click", function() {
                        h.deselectAllCaptchaImages(e),
                        this.setAttribute("style", f.config.captchaImage["style:active"]);
                        var n = this.dataset.hash;
                        t.captcha.selected = n
                    }, !1)
            },
            deselectAllCaptchaImages: function(e) {
                for (var t = 0; t < e.length; t++)
                    e[t].setAttribute("style", f.config.captchaImage.style)
            },
            getForm: function() {
                var e = arguments[0] || "subscribe"
                  , t = arguments[1] || function() {}
                  , a = arguments[2] || function() {}
                  , r = "GET"
                  , i = "/forms/generate/" + n + "?type=" + e;
                h.registerEvent(r, i, {}, t, a)
            },
            renderForm: function(e, t) {
                h.getForm(t, function(t) {
                    if (e.messages = t.value[0].messages,
                    "default" == i) {
                        var n = t.value[0].items
                          , a = t.value[0].recipient || {}
                          , r = t.value[0].lists || [];
                        e.items = n,
                        e.recipient = a,
                        e.lists = r;
                        for (var s = !t.value[0].recipient, l = 0; l < n.length; l++) {
                            var u = n[l];
                            switch (u.type) {
                            case "submit":
                                var d = f.createElement("button", e);
                                d.type = "submit",
                                d.innerHTML = u.label;
                                var p = f.createElement("row", e)
                                  , m = f.createElement("columnLeft", e)
                                  , g = f.createElement("columnRight", e);
                                g.appendChild(d),
                                p.appendChild(m),
                                p.appendChild(g),
                                e.container.appendChild(p);
                                break;
                            case "image":
                                var b = f.createElement("image", e);
                                b.src = u.src;
                                var p = f.createElement("row", e);
                                if (p.nodeName && "tr" === p.nodeName.toLowerCase()) {
                                    var v = f.createElement("columnLeft", e);
                                    v.colSpan = 2,
                                    v.style.width = "100%",
                                    v.appendChild(b),
                                    p.appendChild(v)
                                } else
                                    p.appendChild(b);
                                e.container.appendChild(p);
                                break;
                            case "text":
                                if (u.content && u.content.length > 0) {
                                    var y = f.createElement(u.sub_type, e);
                                    y.innerHTML = u.content;
                                    var p = f.createElement("row", e);
                                    if (p.nodeName && "tr" === p.nodeName.toLowerCase()) {
                                        var v = f.createElement("columnLeft", e);
                                        v.colSpan = 2,
                                        v.style.width = "100%",
                                        v.appendChild(y),
                                        p.appendChild(v)
                                    } else
                                        p.appendChild(y);
                                    e.container.appendChild(p)
                                }
                                break;
                            case "html":
                                f.generateHtmlItem(u, e);
                                break;
                            case "gdpr_customer":
                                f.generateGdprCustomerItem(u, e);
                                break;
                            case "gdpr_n2go":
                                f.generateGdprN2GoItem(u, e);
                                break;
                            case "attribute":
                            case "list":
                                if (u.is_hidden) {
                                    u.recipient_value = a[u.id] || u.value;
                                    break
                                }
                                u.uid = f.generateId(),
                                "attribute" == u.type ? u.recipient_value = a[u.id] || u.default_value : u.recipient_value = r,
                                u.apply_preselected = s;
                                var _ = f.createElement("label", e);
                                _.setAttribute("for", u.uid),
                                _.innerHTML = u.label;
                                var p = f.createElement("row", e)
                                  , m = f.createElement("columnLeft", e)
                                  , g = f.createElement("columnRight", e)
                                  , w = f.getHtmlType(u, e, p);
                                ("SPAN" !== w.tagName || w.children.length > 0) && m.appendChild(_),
                                g.appendChild(w),
                                "boolean" === u.attribute_type && "TR" !== p.tagName || p.appendChild(m),
                                p.appendChild(g),
                                e.style.display = "block",
                                f.loader("hide", e),
                                e.container.appendChild(p);
                                break;
                            case "captcha":
                                o = f.createElement("row", e),
                                c = u.language,
                                e.container.appendChild(o),
                                h.initCaptcha(e, u.language)
                            }
                        }
                    } else {
                        var C = "";
                        switch (i) {
                        case "doi_success":
                            C = e.messages.message_subscribe_success;
                            break;
                        case "doi_duplicate":
                            C = e.messages.message_subscribe_duplicate;
                            break;
                        case "doi_error":
                            C = e.messages.message_subscribe_error;
                            break;
                        case "doi_expired":
                            C = e.messages.message_expired_error
                        }
                        "function" == typeof e.confirmedCallback ? (f.loader("hide", e),
                        e.confirmedCallback(i, e.messages)) : (f.outputMessage(C, e, !0),
                        e.style.display = "block")
                    }
                }, function(n) {
                    "doi_test" == i && "subscribe" == t && f.outputMessage("You would be subscribed now.", e, !0)
                })
            },
            createForm: function() {
                var e = arguments[1] || {}
                  , t = this.toString()
                  , n = arguments[6] || 0
                  , a = f.extend(f.config, e)
                  , r = f.createElement("form", {
                    config: a
                });
                l = "undefined" != typeof arguments[6],
                r.type = t,
                r.config = a,
                r.successCallback = arguments[3] || null,
                r.errorCallback = arguments[4] || null,
                r.confirmedCallback = arguments[5] || null;
                var i = arguments[2] || "n2g_script"
                  , s = document.getElementById(i);
                r.container = f.createElement("container", r),
                n > 0 && (r.style.display = "none"),
                l ? (r.closeButton = f.createElement("closeButton", r),
                r.closeButton.onclick = r.onclick = function(e) {
                    e.stopPropagation(),
                    e.target != r && e.target != r.closeButton || r.parentElement.removeChild(r)
                }
                ,
                r.container.appendChild(r.closeButton),
                r.appendChild(r.container)) : r.appendChild(r.container),
                s.nodeName && "script" === s.nodeName.toLowerCase() ? s.parentElement.insertBefore(r, s) : s.appendChild(r),
                f.loader("show", r),
                r.onsubmit = function(e) {
                    var t = {}
                      , n = []
                      , a = {}
                      , i = !1
                      , s = !1
                      , o = !0;
                    e.stopPropagation();
                    for (var l in r.items) {
                        var u = r.items[l];
                        "attribute" == u.type && (t[u.name] = u.recipient_value,
                        u.is_required && 0 == u.is_hidden && (!u.recipient_value || "" == u.recipient_value || "boolean" == u.attribute_type && 0 == u.recipient_value) ? (o = !1,
                        u.originalStyle = u.element.style,
                        u.orginalClasses = u.element.className,
                        u.element.setAttribute("style", f.config.errorState.style),
                        u.element.className += " " + f.config.errorState["class"]) : (u.originalStyle && u.element.setAttribute("style", u.originalStyle),
                        u.orginalClasses && (u.element.className = u.orginalClasses))),
                        "list" == u.type && (n = u.recipient_value,
                        s = !0),
                        "captcha" == u.type && (a = r.captcha,
                        i = !0)
                    }
                    s || (n = r.lists);
                    var d = {
                        recipient: t,
                        lists: n,
                        captcha: a
                    };
                    return !!o && (f.loader("show", this),
                    h.form_send({}, r.type, d, function(e) {
                        if ("function" == typeof r.successCallback)
                            f.loader("hide", r),
                            r.successCallback(e, r.messages);
                        else
                            switch (r.type) {
                            case "subscribe":
                                201 == e.status ? f.outputMessage(r.messages.message_subscribe_doi, r, !0) : 200 == e.status ? e.value[0].result.error.recipients.invalid.length ? f.outputMessage(r.messages.message_subscribe_error, r, !1) : f.outputMessage(r.messages.message_subscribe_duplicate, r, !1) : f.outputMessage(r.messages.message_subscribe_error, r, !1);
                                break;
                            case "unsubscribe":
                                201 == e.status ? f.outputMessage(r.messages.message_unsubscribe_success, r, !0) : f.outputMessage(r.messages.message_unsubscribe_error, r, !1);
                                break;
                            case "profile":
                                201 == e.status ? f.outputMessage(r.messages.message_profile_success, r, !0) : 200 == e.status ? f.outputMessage(r.messages.message_profile_doi, r, !0) : f.outputMessage(r.messages.message_profile_error, r, !1)
                            }
                    }, function(e) {
                        if (i && h.initCaptcha(r, c),
                        "function" == typeof r.errorCallback)
                            f.loader("hide", r),
                            r.errorCallback(e, r.messages);
                        else
                            switch (r.type) {
                            case "subscribe":
                                f.outputMessage(r.messages.message_subscribe_error, r, !1);
                                break;
                            case "unsubscribe":
                                f.outputMessage(r.messages.message_unsubscribe_error, r, !1);
                                break;
                            case "profile":
                                f.outputMessage(r.messages.message_profile_error, r, !1)
                            }
                    }),
                    e.preventDefault(),
                    !1)
                }
                ,
                setTimeout(function(e, t) {
                    return function() {
                        h.renderForm(e, t)
                    }
                }(r, t), n)
            },
            profile_createForm: function() {
                h.createForm.apply("profile", arguments)
            },
            profile_getForm: function() {
                var e = arguments[1] || function() {}
                  , t = arguments[2] || function() {}
                ;
                h.getForm("profile", e, t)
            },
            unsubscribe_createForm: function() {
                h.createForm.apply("unsubscribe", arguments)
            },
            unsubscribe_getForm: function() {
                var e = arguments[1] || function() {}
                  , t = arguments[2] || function() {}
                ;
                h.getForm("unsubscribe", e, t)
            },
            subscribe_createForm: function() {
                h.createForm.apply("subscribe", arguments)
            },
            subscribe_getForm: function() {
                var e = arguments[1] || function() {}
                  , t = arguments[2] || function() {}
                ;
                h.getForm("subscribe", e, t)
            },
            subscribe_createPopup: function() {
                var e = 1e3 * arguments[2] || 0
                  , t = arguments[1] || {}
                  , n = arguments[3] || null
                  , a = arguments[4] || null
                  , r = arguments[5] || null
                  , i = t.form ? t.form.style || "" : ""
                  , s = t.form ? t.container.style || "" : "";
                t.form = t.form || {},
                t.container = t.container || {},
                t.form.style = f.config.overlay.style + i,
                t.container.style = f.config.popup.style + s,
                h.subscribe_createForm({}, t, null, n, a, r, e)
            },
            subscribe_send: function() {
                var e = arguments[1] || {}
                  , t = arguments[2] || function() {}
                  , n = arguments[3] || function() {}
                ;
                h.form_send({}, "subscribe", e, t, n)
            },
            unsubscribe_send: function() {
                var e = arguments[1] || {}
                  , t = arguments[2] || function() {}
                  , n = arguments[3] || function() {}
                ;
                h.form_send({}, "unsubscribe", e, t, n)
            },
            form_send: function(e, t) {
                if (!arguments[1])
                    throw "no form type set";
                var t = arguments[1]
                  , a = arguments[2] || {}
                  , r = arguments[3] || function() {}
                  , i = arguments[4] || function() {}
                  , s = "POST"
                  , o = "/forms/submit/" + n + "?type=" + t;
                h.registerEvent(s, o, a, r, i)
            },
            outputResponse: function(e) {
                var t = document.getElementById(r);
                if (t)
                    if ("IFRAME" == t.nodeName) {
                        var n = t.contentWindow ? t.contentWindow : t.contentDocument.document ? t.contentDocument.document : t.contentDocument;
                        n.document.open(),
                        n.document.write(e),
                        n.document.close()
                    } else
                        t.innerHTML = e;
                else
                    document.write(e),
                    document.close()
            },
            login: function() {
                if (!arguments[1] || !arguments[1].username || !arguments[1].password)
                    throw "Username and password are required";
                if (arguments[2] && "function" == typeof arguments[2])
                    var e = arguments[2];
                else
                    var e = function() {};
                if (arguments[3] && "function" == typeof arguments[3])
                    var t = arguments[3];
                else
                    var t = function() {};
                var n = arguments[1].target || "_blank"
                  , a = arguments[1].base ? arguments[1].base.replace(/\/+$/, "") : "https://ui.newsletter2go.com"
                  , r = arguments[1].username
                  , i = (arguments[1].password,
                "/oauth/v2/token")
                  , s = "Basic " + btoa("xhq4n6xf_Stguwv_jzr5c3_LTrhjkn5_9dtdsfahMvp3:Rqf1Hr#Wwaxl")
                  , o = {
                    username: r,
                    grant_type: "https://nl2go.com/jwt",
                    password: arguments[1].password
                };
                h.registerEvent("POST", i, o, function(t) {
                    var i = document.createElement("form");
                    i.setAttribute("method", "POST"),
                    i.setAttribute("target", n),
                    i.setAttribute("action", a + "/index.php");
                    var s = document.createElement("input");
                    s.setAttribute("name", "account_id"),
                    s.setAttribute("value", t.account_id),
                    s.setAttribute("type", "hidden");
                    var o = document.createElement("input");
                    o.setAttribute("name", "username"),
                    o.setAttribute("value", r),
                    o.setAttribute("type", "hidden");
                    var c = document.createElement("input");
                    c.setAttribute("name", "token"),
                    c.setAttribute("value", t.access_token),
                    c.setAttribute("type", "hidden"),
                    i.appendChild(s),
                    i.appendChild(o),
                    i.appendChild(c),
                    i.submit(),
                    e()
                }, function() {
                    t()
                }, s)
            },
            registerEvent: function(e, r, i, s, o, c, l) {
                o = o || function() {}
                ,
                s = s || function() {}
                ;
                var u, d, p, m, g = n.split("-");
                u = g.length > 0 ? g[0] : a,
                u = u ? u.toLowerCase() : u,
                a === u && (d = g.length > 1 ? g[1] : "unset",
                p = new XMLHttpRequest,
                m = l ? l + r : t + r,
                p.open(e, m, !0),
                c && p.setRequestHeader("Authorization", c),
                p.crossDomain = !0,
                p.setRequestHeader("Content-Type", "application/json;charset=utf-8"),
                p.onload = function(e) {
                    4 === p.readyState && ("2" === p.status.toString().substr(0, 1) ? s(JSON.parse(p.responseText || "{}")) : o(JSON.parse(p.responseText || "{}")))
                }
                ,
                p.onerror = function(e) {
                    o(JSON.parse(p.responseText || "{}"))
                }
                ,
                "GET" === e ? p.send(null) : p.send(JSON.stringify(i)))
            },
            getURLParameter: function(e) {
                return decodeURIComponent((new RegExp("[?|&]" + e + "=([^&;]+?)(&|#|;|$)").exec(location.search) || [, ""])[1].replace(/\+/g, "%20")) || null
            }
        };
        this.fns = h
    }, r = function() {
        var e = arguments[0].replace(":", "_");
        "create" === e && (utilToUse = new a),
        "function" == typeof utilToUse.fns[e] && utilToUse.fns[e].apply(this, arguments)
    }, i = window[n].q || [], s = 0; s < i.length; s++)
        r.apply(this, i[s]);
    return r
}("", "https://api.newsletter2go.com", window.Newsletter2GoTrackingObject);
