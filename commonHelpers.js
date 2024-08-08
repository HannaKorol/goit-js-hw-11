import{S as f,i as a}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",m="45296804-0fb55f0e1381bd4cbf585a7a5";function p(n){const o=new URLSearchParams({key:m,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${d}?${o.toString()}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()}).catch(r=>{throw console.error("Image Search Error:",r),r})}const c=document.querySelector(".gallery-list");function h(n){const o=n.map(({webformatURL:r,largeImageURL:s,tags:e,likes:t,views:i,comments:l,downloads:u})=>`
    <li>
    <a href="${s}">
        <img src="${r}" alt="${e}"/>
        </a>
        <div class="text-wrapper">
    <p><b>Likes:</b> ${t}</p>
    <p><b>Views:</b> ${i}</p>
    <p><b>Comments:</b> ${l}</p>
    <p><b>Downloads:</b> ${u}</p>
        </div>
    </li>
    `).join("");c.insertAdjacentHTML("beforeend",o),new f(".gallery a",{captionsData:"alt",captionsDelay:250}).refresh()}function y(){c.innerHTML=""}function g(){document.querySelector(".loader").classList.remove("hidden")}function b(){document.querySelector(".loader").classList.add("hidden")}const L=document.querySelector(".form-search");L.addEventListener("submit",n=>{n.preventDefault();const o=n.currentTarget.elements.query,r=o.value.trim().toLowerCase();if(!r){a.error({message:"Please enter a search query!",position:"topRight"});return}y(),g(),p(r).then(s=>{s.hits.length===0?a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):h(s.hits)}).catch(s=>{a.error({title:"Error",message:s.message})}).finally(()=>{b(),o.value=""})});
//# sourceMappingURL=commonHelpers.js.map
