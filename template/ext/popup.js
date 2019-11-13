/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "5ylo");
/******/ })
/************************************************************************/
/******/ ({

/***/ "4dxh":
/*!**********************************************!*\
  !*** ../node_modules/preact/dist/preact.mjs ***!
  \**********************************************/
/*! exports provided: default, h, createElement, cloneElement, createRef, Component, render, rerender, options */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return h; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return h; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cloneElement\", function() { return cloneElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createRef\", function() { return createRef; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rerender\", function() { return rerender; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"options\", function() { return options; });\nvar VNode = function VNode() {};\n\nvar options = {};\n\nvar stack = [];\n\nvar EMPTY_CHILDREN = [];\n\nfunction h(nodeName, attributes) {\n\tvar children = EMPTY_CHILDREN,\n\t    lastSimple,\n\t    child,\n\t    simple,\n\t    i;\n\tfor (i = arguments.length; i-- > 2;) {\n\t\tstack.push(arguments[i]);\n\t}\n\tif (attributes && attributes.children != null) {\n\t\tif (!stack.length) stack.push(attributes.children);\n\t\tdelete attributes.children;\n\t}\n\twhile (stack.length) {\n\t\tif ((child = stack.pop()) && child.pop !== undefined) {\n\t\t\tfor (i = child.length; i--;) {\n\t\t\t\tstack.push(child[i]);\n\t\t\t}\n\t\t} else {\n\t\t\tif (typeof child === 'boolean') child = null;\n\n\t\t\tif (simple = typeof nodeName !== 'function') {\n\t\t\t\tif (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;\n\t\t\t}\n\n\t\t\tif (simple && lastSimple) {\n\t\t\t\tchildren[children.length - 1] += child;\n\t\t\t} else if (children === EMPTY_CHILDREN) {\n\t\t\t\tchildren = [child];\n\t\t\t} else {\n\t\t\t\tchildren.push(child);\n\t\t\t}\n\n\t\t\tlastSimple = simple;\n\t\t}\n\t}\n\n\tvar p = new VNode();\n\tp.nodeName = nodeName;\n\tp.children = children;\n\tp.attributes = attributes == null ? undefined : attributes;\n\tp.key = attributes == null ? undefined : attributes.key;\n\n\tif (options.vnode !== undefined) options.vnode(p);\n\n\treturn p;\n}\n\nfunction extend(obj, props) {\n  for (var i in props) {\n    obj[i] = props[i];\n  }return obj;\n}\n\nfunction applyRef(ref, value) {\n  if (ref) {\n    if (typeof ref == 'function') ref(value);else ref.current = value;\n  }\n}\n\nvar defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;\n\nfunction cloneElement(vnode, props) {\n  return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);\n}\n\nvar IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;\n\nvar items = [];\n\nfunction enqueueRender(component) {\n\tif (!component._dirty && (component._dirty = true) && items.push(component) == 1) {\n\t\t(options.debounceRendering || defer)(rerender);\n\t}\n}\n\nfunction rerender() {\n\tvar p;\n\twhile (p = items.pop()) {\n\t\tif (p._dirty) renderComponent(p);\n\t}\n}\n\nfunction isSameNodeType(node, vnode, hydrating) {\n\tif (typeof vnode === 'string' || typeof vnode === 'number') {\n\t\treturn node.splitText !== undefined;\n\t}\n\tif (typeof vnode.nodeName === 'string') {\n\t\treturn !node._componentConstructor && isNamedNode(node, vnode.nodeName);\n\t}\n\treturn hydrating || node._componentConstructor === vnode.nodeName;\n}\n\nfunction isNamedNode(node, nodeName) {\n\treturn node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();\n}\n\nfunction getNodeProps(vnode) {\n\tvar props = extend({}, vnode.attributes);\n\tprops.children = vnode.children;\n\n\tvar defaultProps = vnode.nodeName.defaultProps;\n\tif (defaultProps !== undefined) {\n\t\tfor (var i in defaultProps) {\n\t\t\tif (props[i] === undefined) {\n\t\t\t\tprops[i] = defaultProps[i];\n\t\t\t}\n\t\t}\n\t}\n\n\treturn props;\n}\n\nfunction createNode(nodeName, isSvg) {\n\tvar node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);\n\tnode.normalizedNodeName = nodeName;\n\treturn node;\n}\n\nfunction removeNode(node) {\n\tvar parentNode = node.parentNode;\n\tif (parentNode) parentNode.removeChild(node);\n}\n\nfunction setAccessor(node, name, old, value, isSvg) {\n\tif (name === 'className') name = 'class';\n\n\tif (name === 'key') {} else if (name === 'ref') {\n\t\tapplyRef(old, null);\n\t\tapplyRef(value, node);\n\t} else if (name === 'class' && !isSvg) {\n\t\tnode.className = value || '';\n\t} else if (name === 'style') {\n\t\tif (!value || typeof value === 'string' || typeof old === 'string') {\n\t\t\tnode.style.cssText = value || '';\n\t\t}\n\t\tif (value && typeof value === 'object') {\n\t\t\tif (typeof old !== 'string') {\n\t\t\t\tfor (var i in old) {\n\t\t\t\t\tif (!(i in value)) node.style[i] = '';\n\t\t\t\t}\n\t\t\t}\n\t\t\tfor (var i in value) {\n\t\t\t\tnode.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];\n\t\t\t}\n\t\t}\n\t} else if (name === 'dangerouslySetInnerHTML') {\n\t\tif (value) node.innerHTML = value.__html || '';\n\t} else if (name[0] == 'o' && name[1] == 'n') {\n\t\tvar useCapture = name !== (name = name.replace(/Capture$/, ''));\n\t\tname = name.toLowerCase().substring(2);\n\t\tif (value) {\n\t\t\tif (!old) node.addEventListener(name, eventProxy, useCapture);\n\t\t} else {\n\t\t\tnode.removeEventListener(name, eventProxy, useCapture);\n\t\t}\n\t\t(node._listeners || (node._listeners = {}))[name] = value;\n\t} else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {\n\t\ttry {\n\t\t\tnode[name] = value == null ? '' : value;\n\t\t} catch (e) {}\n\t\tif ((value == null || value === false) && name != 'spellcheck') node.removeAttribute(name);\n\t} else {\n\t\tvar ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));\n\n\t\tif (value == null || value === false) {\n\t\t\tif (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);\n\t\t} else if (typeof value !== 'function') {\n\t\t\tif (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);\n\t\t}\n\t}\n}\n\nfunction eventProxy(e) {\n\treturn this._listeners[e.type](options.event && options.event(e) || e);\n}\n\nvar mounts = [];\n\nvar diffLevel = 0;\n\nvar isSvgMode = false;\n\nvar hydrating = false;\n\nfunction flushMounts() {\n\tvar c;\n\twhile (c = mounts.shift()) {\n\t\tif (options.afterMount) options.afterMount(c);\n\t\tif (c.componentDidMount) c.componentDidMount();\n\t}\n}\n\nfunction diff(dom, vnode, context, mountAll, parent, componentRoot) {\n\tif (!diffLevel++) {\n\t\tisSvgMode = parent != null && parent.ownerSVGElement !== undefined;\n\n\t\thydrating = dom != null && !('__preactattr_' in dom);\n\t}\n\n\tvar ret = idiff(dom, vnode, context, mountAll, componentRoot);\n\n\tif (parent && ret.parentNode !== parent) parent.appendChild(ret);\n\n\tif (! --diffLevel) {\n\t\thydrating = false;\n\n\t\tif (!componentRoot) flushMounts();\n\t}\n\n\treturn ret;\n}\n\nfunction idiff(dom, vnode, context, mountAll, componentRoot) {\n\tvar out = dom,\n\t    prevSvgMode = isSvgMode;\n\n\tif (vnode == null || typeof vnode === 'boolean') vnode = '';\n\n\tif (typeof vnode === 'string' || typeof vnode === 'number') {\n\t\tif (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {\n\t\t\tif (dom.nodeValue != vnode) {\n\t\t\t\tdom.nodeValue = vnode;\n\t\t\t}\n\t\t} else {\n\t\t\tout = document.createTextNode(vnode);\n\t\t\tif (dom) {\n\t\t\t\tif (dom.parentNode) dom.parentNode.replaceChild(out, dom);\n\t\t\t\trecollectNodeTree(dom, true);\n\t\t\t}\n\t\t}\n\n\t\tout['__preactattr_'] = true;\n\n\t\treturn out;\n\t}\n\n\tvar vnodeName = vnode.nodeName;\n\tif (typeof vnodeName === 'function') {\n\t\treturn buildComponentFromVNode(dom, vnode, context, mountAll);\n\t}\n\n\tisSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;\n\n\tvnodeName = String(vnodeName);\n\tif (!dom || !isNamedNode(dom, vnodeName)) {\n\t\tout = createNode(vnodeName, isSvgMode);\n\n\t\tif (dom) {\n\t\t\twhile (dom.firstChild) {\n\t\t\t\tout.appendChild(dom.firstChild);\n\t\t\t}\n\t\t\tif (dom.parentNode) dom.parentNode.replaceChild(out, dom);\n\n\t\t\trecollectNodeTree(dom, true);\n\t\t}\n\t}\n\n\tvar fc = out.firstChild,\n\t    props = out['__preactattr_'],\n\t    vchildren = vnode.children;\n\n\tif (props == null) {\n\t\tprops = out['__preactattr_'] = {};\n\t\tfor (var a = out.attributes, i = a.length; i--;) {\n\t\t\tprops[a[i].name] = a[i].value;\n\t\t}\n\t}\n\n\tif (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {\n\t\tif (fc.nodeValue != vchildren[0]) {\n\t\t\tfc.nodeValue = vchildren[0];\n\t\t}\n\t} else if (vchildren && vchildren.length || fc != null) {\n\t\t\tinnerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);\n\t\t}\n\n\tdiffAttributes(out, vnode.attributes, props);\n\n\tisSvgMode = prevSvgMode;\n\n\treturn out;\n}\n\nfunction innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {\n\tvar originalChildren = dom.childNodes,\n\t    children = [],\n\t    keyed = {},\n\t    keyedLen = 0,\n\t    min = 0,\n\t    len = originalChildren.length,\n\t    childrenLen = 0,\n\t    vlen = vchildren ? vchildren.length : 0,\n\t    j,\n\t    c,\n\t    f,\n\t    vchild,\n\t    child;\n\n\tif (len !== 0) {\n\t\tfor (var i = 0; i < len; i++) {\n\t\t\tvar _child = originalChildren[i],\n\t\t\t    props = _child['__preactattr_'],\n\t\t\t    key = vlen && props ? _child._component ? _child._component.__key : props.key : null;\n\t\t\tif (key != null) {\n\t\t\t\tkeyedLen++;\n\t\t\t\tkeyed[key] = _child;\n\t\t\t} else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {\n\t\t\t\tchildren[childrenLen++] = _child;\n\t\t\t}\n\t\t}\n\t}\n\n\tif (vlen !== 0) {\n\t\tfor (var i = 0; i < vlen; i++) {\n\t\t\tvchild = vchildren[i];\n\t\t\tchild = null;\n\n\t\t\tvar key = vchild.key;\n\t\t\tif (key != null) {\n\t\t\t\tif (keyedLen && keyed[key] !== undefined) {\n\t\t\t\t\tchild = keyed[key];\n\t\t\t\t\tkeyed[key] = undefined;\n\t\t\t\t\tkeyedLen--;\n\t\t\t\t}\n\t\t\t} else if (min < childrenLen) {\n\t\t\t\t\tfor (j = min; j < childrenLen; j++) {\n\t\t\t\t\t\tif (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {\n\t\t\t\t\t\t\tchild = c;\n\t\t\t\t\t\t\tchildren[j] = undefined;\n\t\t\t\t\t\t\tif (j === childrenLen - 1) childrenLen--;\n\t\t\t\t\t\t\tif (j === min) min++;\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\tchild = idiff(child, vchild, context, mountAll);\n\n\t\t\tf = originalChildren[i];\n\t\t\tif (child && child !== dom && child !== f) {\n\t\t\t\tif (f == null) {\n\t\t\t\t\tdom.appendChild(child);\n\t\t\t\t} else if (child === f.nextSibling) {\n\t\t\t\t\tremoveNode(f);\n\t\t\t\t} else {\n\t\t\t\t\tdom.insertBefore(child, f);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\tif (keyedLen) {\n\t\tfor (var i in keyed) {\n\t\t\tif (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);\n\t\t}\n\t}\n\n\twhile (min <= childrenLen) {\n\t\tif ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);\n\t}\n}\n\nfunction recollectNodeTree(node, unmountOnly) {\n\tvar component = node._component;\n\tif (component) {\n\t\tunmountComponent(component);\n\t} else {\n\t\tif (node['__preactattr_'] != null) applyRef(node['__preactattr_'].ref, null);\n\n\t\tif (unmountOnly === false || node['__preactattr_'] == null) {\n\t\t\tremoveNode(node);\n\t\t}\n\n\t\tremoveChildren(node);\n\t}\n}\n\nfunction removeChildren(node) {\n\tnode = node.lastChild;\n\twhile (node) {\n\t\tvar next = node.previousSibling;\n\t\trecollectNodeTree(node, true);\n\t\tnode = next;\n\t}\n}\n\nfunction diffAttributes(dom, attrs, old) {\n\tvar name;\n\n\tfor (name in old) {\n\t\tif (!(attrs && attrs[name] != null) && old[name] != null) {\n\t\t\tsetAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);\n\t\t}\n\t}\n\n\tfor (name in attrs) {\n\t\tif (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {\n\t\t\tsetAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);\n\t\t}\n\t}\n}\n\nvar recyclerComponents = [];\n\nfunction createComponent(Ctor, props, context) {\n\tvar inst,\n\t    i = recyclerComponents.length;\n\n\tif (Ctor.prototype && Ctor.prototype.render) {\n\t\tinst = new Ctor(props, context);\n\t\tComponent.call(inst, props, context);\n\t} else {\n\t\tinst = new Component(props, context);\n\t\tinst.constructor = Ctor;\n\t\tinst.render = doRender;\n\t}\n\n\twhile (i--) {\n\t\tif (recyclerComponents[i].constructor === Ctor) {\n\t\t\tinst.nextBase = recyclerComponents[i].nextBase;\n\t\t\trecyclerComponents.splice(i, 1);\n\t\t\treturn inst;\n\t\t}\n\t}\n\n\treturn inst;\n}\n\nfunction doRender(props, state, context) {\n\treturn this.constructor(props, context);\n}\n\nfunction setComponentProps(component, props, renderMode, context, mountAll) {\n\tif (component._disable) return;\n\tcomponent._disable = true;\n\n\tcomponent.__ref = props.ref;\n\tcomponent.__key = props.key;\n\tdelete props.ref;\n\tdelete props.key;\n\n\tif (typeof component.constructor.getDerivedStateFromProps === 'undefined') {\n\t\tif (!component.base || mountAll) {\n\t\t\tif (component.componentWillMount) component.componentWillMount();\n\t\t} else if (component.componentWillReceiveProps) {\n\t\t\tcomponent.componentWillReceiveProps(props, context);\n\t\t}\n\t}\n\n\tif (context && context !== component.context) {\n\t\tif (!component.prevContext) component.prevContext = component.context;\n\t\tcomponent.context = context;\n\t}\n\n\tif (!component.prevProps) component.prevProps = component.props;\n\tcomponent.props = props;\n\n\tcomponent._disable = false;\n\n\tif (renderMode !== 0) {\n\t\tif (renderMode === 1 || options.syncComponentUpdates !== false || !component.base) {\n\t\t\trenderComponent(component, 1, mountAll);\n\t\t} else {\n\t\t\tenqueueRender(component);\n\t\t}\n\t}\n\n\tapplyRef(component.__ref, component);\n}\n\nfunction renderComponent(component, renderMode, mountAll, isChild) {\n\tif (component._disable) return;\n\n\tvar props = component.props,\n\t    state = component.state,\n\t    context = component.context,\n\t    previousProps = component.prevProps || props,\n\t    previousState = component.prevState || state,\n\t    previousContext = component.prevContext || context,\n\t    isUpdate = component.base,\n\t    nextBase = component.nextBase,\n\t    initialBase = isUpdate || nextBase,\n\t    initialChildComponent = component._component,\n\t    skip = false,\n\t    snapshot = previousContext,\n\t    rendered,\n\t    inst,\n\t    cbase;\n\n\tif (component.constructor.getDerivedStateFromProps) {\n\t\tstate = extend(extend({}, state), component.constructor.getDerivedStateFromProps(props, state));\n\t\tcomponent.state = state;\n\t}\n\n\tif (isUpdate) {\n\t\tcomponent.props = previousProps;\n\t\tcomponent.state = previousState;\n\t\tcomponent.context = previousContext;\n\t\tif (renderMode !== 2 && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {\n\t\t\tskip = true;\n\t\t} else if (component.componentWillUpdate) {\n\t\t\tcomponent.componentWillUpdate(props, state, context);\n\t\t}\n\t\tcomponent.props = props;\n\t\tcomponent.state = state;\n\t\tcomponent.context = context;\n\t}\n\n\tcomponent.prevProps = component.prevState = component.prevContext = component.nextBase = null;\n\tcomponent._dirty = false;\n\n\tif (!skip) {\n\t\trendered = component.render(props, state, context);\n\n\t\tif (component.getChildContext) {\n\t\t\tcontext = extend(extend({}, context), component.getChildContext());\n\t\t}\n\n\t\tif (isUpdate && component.getSnapshotBeforeUpdate) {\n\t\t\tsnapshot = component.getSnapshotBeforeUpdate(previousProps, previousState);\n\t\t}\n\n\t\tvar childComponent = rendered && rendered.nodeName,\n\t\t    toUnmount,\n\t\t    base;\n\n\t\tif (typeof childComponent === 'function') {\n\n\t\t\tvar childProps = getNodeProps(rendered);\n\t\t\tinst = initialChildComponent;\n\n\t\t\tif (inst && inst.constructor === childComponent && childProps.key == inst.__key) {\n\t\t\t\tsetComponentProps(inst, childProps, 1, context, false);\n\t\t\t} else {\n\t\t\t\ttoUnmount = inst;\n\n\t\t\t\tcomponent._component = inst = createComponent(childComponent, childProps, context);\n\t\t\t\tinst.nextBase = inst.nextBase || nextBase;\n\t\t\t\tinst._parentComponent = component;\n\t\t\t\tsetComponentProps(inst, childProps, 0, context, false);\n\t\t\t\trenderComponent(inst, 1, mountAll, true);\n\t\t\t}\n\n\t\t\tbase = inst.base;\n\t\t} else {\n\t\t\tcbase = initialBase;\n\n\t\t\ttoUnmount = initialChildComponent;\n\t\t\tif (toUnmount) {\n\t\t\t\tcbase = component._component = null;\n\t\t\t}\n\n\t\t\tif (initialBase || renderMode === 1) {\n\t\t\t\tif (cbase) cbase._component = null;\n\t\t\t\tbase = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);\n\t\t\t}\n\t\t}\n\n\t\tif (initialBase && base !== initialBase && inst !== initialChildComponent) {\n\t\t\tvar baseParent = initialBase.parentNode;\n\t\t\tif (baseParent && base !== baseParent) {\n\t\t\t\tbaseParent.replaceChild(base, initialBase);\n\n\t\t\t\tif (!toUnmount) {\n\t\t\t\t\tinitialBase._component = null;\n\t\t\t\t\trecollectNodeTree(initialBase, false);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tif (toUnmount) {\n\t\t\tunmountComponent(toUnmount);\n\t\t}\n\n\t\tcomponent.base = base;\n\t\tif (base && !isChild) {\n\t\t\tvar componentRef = component,\n\t\t\t    t = component;\n\t\t\twhile (t = t._parentComponent) {\n\t\t\t\t(componentRef = t).base = base;\n\t\t\t}\n\t\t\tbase._component = componentRef;\n\t\t\tbase._componentConstructor = componentRef.constructor;\n\t\t}\n\t}\n\n\tif (!isUpdate || mountAll) {\n\t\tmounts.push(component);\n\t} else if (!skip) {\n\n\t\tif (component.componentDidUpdate) {\n\t\t\tcomponent.componentDidUpdate(previousProps, previousState, snapshot);\n\t\t}\n\t\tif (options.afterUpdate) options.afterUpdate(component);\n\t}\n\n\twhile (component._renderCallbacks.length) {\n\t\tcomponent._renderCallbacks.pop().call(component);\n\t}if (!diffLevel && !isChild) flushMounts();\n}\n\nfunction buildComponentFromVNode(dom, vnode, context, mountAll) {\n\tvar c = dom && dom._component,\n\t    originalComponent = c,\n\t    oldDom = dom,\n\t    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,\n\t    isOwner = isDirectOwner,\n\t    props = getNodeProps(vnode);\n\twhile (c && !isOwner && (c = c._parentComponent)) {\n\t\tisOwner = c.constructor === vnode.nodeName;\n\t}\n\n\tif (c && isOwner && (!mountAll || c._component)) {\n\t\tsetComponentProps(c, props, 3, context, mountAll);\n\t\tdom = c.base;\n\t} else {\n\t\tif (originalComponent && !isDirectOwner) {\n\t\t\tunmountComponent(originalComponent);\n\t\t\tdom = oldDom = null;\n\t\t}\n\n\t\tc = createComponent(vnode.nodeName, props, context);\n\t\tif (dom && !c.nextBase) {\n\t\t\tc.nextBase = dom;\n\n\t\t\toldDom = null;\n\t\t}\n\t\tsetComponentProps(c, props, 1, context, mountAll);\n\t\tdom = c.base;\n\n\t\tif (oldDom && dom !== oldDom) {\n\t\t\toldDom._component = null;\n\t\t\trecollectNodeTree(oldDom, false);\n\t\t}\n\t}\n\n\treturn dom;\n}\n\nfunction unmountComponent(component) {\n\tif (options.beforeUnmount) options.beforeUnmount(component);\n\n\tvar base = component.base;\n\n\tcomponent._disable = true;\n\n\tif (component.componentWillUnmount) component.componentWillUnmount();\n\n\tcomponent.base = null;\n\n\tvar inner = component._component;\n\tif (inner) {\n\t\tunmountComponent(inner);\n\t} else if (base) {\n\t\tif (base['__preactattr_'] != null) applyRef(base['__preactattr_'].ref, null);\n\n\t\tcomponent.nextBase = base;\n\n\t\tremoveNode(base);\n\t\trecyclerComponents.push(component);\n\n\t\tremoveChildren(base);\n\t}\n\n\tapplyRef(component.__ref, null);\n}\n\nfunction Component(props, context) {\n\tthis._dirty = true;\n\n\tthis.context = context;\n\n\tthis.props = props;\n\n\tthis.state = this.state || {};\n\n\tthis._renderCallbacks = [];\n}\n\nextend(Component.prototype, {\n\tsetState: function setState(state, callback) {\n\t\tif (!this.prevState) this.prevState = this.state;\n\t\tthis.state = extend(extend({}, this.state), typeof state === 'function' ? state(this.state, this.props) : state);\n\t\tif (callback) this._renderCallbacks.push(callback);\n\t\tenqueueRender(this);\n\t},\n\tforceUpdate: function forceUpdate(callback) {\n\t\tif (callback) this._renderCallbacks.push(callback);\n\t\trenderComponent(this, 2);\n\t},\n\trender: function render() {}\n});\n\nfunction render(vnode, parent, merge) {\n  return diff(merge, vnode, {}, false, parent, false);\n}\n\nfunction createRef() {\n\treturn {};\n}\n\nvar preact = {\n\th: h,\n\tcreateElement: h,\n\tcloneElement: cloneElement,\n\tcreateRef: createRef,\n\tComponent: Component,\n\trender: render,\n\trerender: rerender,\n\toptions: options\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (preact);\n\n//# sourceMappingURL=preact.mjs.map\n\n\n//# sourceURL=webpack:///../node_modules/preact/dist/preact.mjs?");

/***/ }),

/***/ "5ylo":
/*!******************************!*\
  !*** ./pages/Popup/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"oHPx\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ \"4dxh\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ \"eH+l\");\n\n\n\nObject(preact__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(Object(preact__WEBPACK_IMPORTED_MODULE_1__[\"h\"])(_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), document.getElementById('root'));\nconsole.log('hello world!');\n\n//# sourceURL=webpack:///./pages/Popup/index.js?");

/***/ }),

/***/ "eDXL":
/*!*************************!*\
  !*** ./assets/icon.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"6739ca0a664faecf2db6a82afdeedcfa.png\";\n\n//# sourceURL=webpack:///./assets/icon.png?");

/***/ }),

/***/ "eH+l":
/*!****************************!*\
  !*** ./pages/Popup/App.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ \"4dxh\");\n/* harmony import */ var _assets_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/icon.png */ \"eDXL\");\n/* harmony import */ var _assets_icon_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icon_png__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"div\", {\n        className: \"App\"\n      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"div\", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"img\", {\n        src: _assets_icon_png__WEBPACK_IMPORTED_MODULE_1___default.a\n      })), Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"h1\", {\n        style: {\n          fontWeight: 200\n        }\n      }, \"$(PROJECT_NAME)'s Popup Page\"));\n    }\n  }]);\n\n  return App;\n}(preact__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./pages/Popup/App.js?");

/***/ }),

/***/ "oHPx":
/*!*******************************!*\
  !*** ./pages/Popup/index.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./pages/Popup/index.css?");

/***/ })

/******/ });