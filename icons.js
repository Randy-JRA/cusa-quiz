// Small inline SVG icon set keeps the quiz crisp and fully offline.
window.icon=function(name,extra=""){
 const paths={
 home:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1z"/>',
 game:'<rect x="3" y="7" width="18" height="13" rx="3"/><path d="M8 13h4m-2-2v4m6-2h.01M18 12h.01"/>',
 map:'<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8z"/>',
 book:'<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 1 4 17.5z"/><path d="M4 16.5A2.5 2.5 0 0 1 6.5 14H20M8 7h7"/>',
 scroll:'<path d="M8 4h12v16H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z"/><path d="M8 4v16m4-11h5m-5 4h5"/>',
 church:'<path d="M3 21h18M5 21V10l7-4 7 4v11M9 21v-6h6v6M12 2v5m-2-3h4"/>',
 person:'<circle cx="12" cy="8" r="3"/><path d="M5 21a7 7 0 0 1 14 0m-7-4v4m-4-5 4 2 4-2"/>',
 globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18m0-18a15 15 0 0 0 0 18"/>',
 puzzle:'<path d="M8 3h3a2 2 0 1 1 4 0h3v6a2 2 0 1 1 0 4v8h-6a2 2 0 1 0-4 0H3v-6a2 2 0 1 1 0-4V3z"/>',
 people:'<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0m1-9a3 3 0 1 0-1-5m3 14a5 5 0 0 0-3-4"/>',
 award:'<circle cx="12" cy="8" r="6"/><path d="m8 13-1 8 5-3 5 3-1-8"/>',
 target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
 compass:'<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8z"/>',
 shuffle:'<path d="m18 14 4 4-4 4m0-20 4 4-4 4M2 18h2a6 6 0 0 0 5-3l6-8a6 6 0 0 1 5-3h2M2 6h2a6 6 0 0 1 5 3m0 6a6 6 0 0 0 5 3h6"/>',
 bolt:'<path d="m13 2-3 9h7L9 22l2-9H5z"/>', brain:'<path d="M12 18V5a3 3 0 0 0-5.8-1A4 4 0 0 0 4 11a4 4 0 0 0 2 7 3 3 0 0 0 6 0m0-13a3 3 0 0 1 5.8-1A4 4 0 0 1 20 11a4 4 0 0 1-2 7 3 3 0 0 1-6 0"/>',
 flame:'<path d="M12 22a7 7 0 0 0 7-7c0-4-3-6-3-10-2 2-3 3-3 5-2-2-3-4-3-7-4 4-6 8-6 12a8 8 0 0 0 8 7z"/>',
 trophy:'<path d="M8 21h8m-4-4v4m0-4a6 6 0 0 0 6-6V3H6v8a6 6 0 0 0 6 6zM6 6H3v3a4 4 0 0 0 4 4m11-7h3v3a4 4 0 0 1-4 4"/>',
 seed:'<path d="M12 21v-8m0 3c-6 0-8-4-8-9 5 0 8 2 8 7m0-1c0-6 3-9 8-9 0 5-2 9-8 9"/>',
 star:'<path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
 light:'<path d="M9 18h6m-5 4h4m-2-20a7 7 0 0 0-4 12.7c.6.4 1 1.2 1 2.3h6c0-1.1.4-1.9 1-2.3A7 7 0 0 0 12 2z"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>', heart:'<path d="M20.8 8.6c0 4.3-8.8 10-8.8 10s-8.8-5.7-8.8-10a4.6 4.6 0 0 1 8.8-1.8 4.6 4.6 0 0 1 8.8 1.8z"/>',
 check:'<path d="m5 12 4 4L19 6"/>', close:'<path d="m6 6 12 12M18 6 6 18"/>'
 };
 return `<svg class="ui-icon ${extra}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]||paths.star}</svg>`;
};
