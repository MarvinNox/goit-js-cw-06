import{i as p}from"./assets/vendor-iVKk4foX.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const i={taskList:document.querySelector("#task-list"),themeToggle:document.querySelector("#themeToggle"),addBttn:document.querySelector(".header-form-btn"),form:document.querySelector("#task-form"),inputTitle:document.querySelector('input[name="taskName"]'),inputDescr:document.querySelector('input[name="taskDescription"]')};function a(r,t){i.taskList.innerHTML="",i.taskList.insertAdjacentHTML("beforeend",t(r))}function u(r){return r.map(({title:t,description:s})=>`<li class="task-list-item">
        <button class="task-list-item-btn">Delete</button>
        <h3>${t}</h3>
        <p>${s}</p>
      </li>`).join("")}const l="userNotes";function m(r){localStorage.setItem(l,JSON.stringify(r))}function f(){if(localStorage.getItem(l)!==null)return JSON.parse(localStorage.getItem(l))}let n=f()||[];function g(r){r.preventDefault();const t={title:i.form.elements.taskName.value.trim(),description:i.form.elements.taskDescription.value.trim()};if(!t.title||!t.description){p.error({title:"Error",message:"Please enter valid title and descr!"});return}n.push(t),m(n),i.form.reset(),a(n,u)}function y(r){if(r.target.tagName==="BUTTON"){const t=r.target.closest("li");n=n.filter(s=>s.title!==t.children[1].textContent),m(n),a(n,u)}}let L=f()||[];i.form.addEventListener("submit",g);i.taskList.addEventListener("click",y);a(L,u);
//# sourceMappingURL=index.js.map
