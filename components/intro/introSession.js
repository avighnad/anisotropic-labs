export const INTRO_STORAGE_KEY = "al:intro-played";
export const INTRO_PENDING_CLASS = "intro-pending";
export const INTRO_HOLD_CLASS = "intro-hold";
export const INTRO_REPLAY_PARAM = "intro";

const MOUNT_FLAG = "__alIntroMounted";
const BOOT_TIMEOUT_MS = 4000;

// Runs inline in <head> before first paint. Decides whether the intro plays so the
// homepage never flashes underneath it. Without JS the overlay stays display:none.
export const INTRO_BOOT_SCRIPT = `(function(){try{
var d=document.documentElement,l=window.location;
if(!/^\\/(index\\.html)?$/.test(l.pathname))return;
var force=new URLSearchParams(l.search).has(${JSON.stringify(INTRO_REPLAY_PARAM)});
if(!force&&window.sessionStorage.getItem(${JSON.stringify(INTRO_STORAGE_KEY)}))return;
window.sessionStorage.setItem(${JSON.stringify(INTRO_STORAGE_KEY)},"1");
d.classList.add(${JSON.stringify(INTRO_PENDING_CLASS)},${JSON.stringify(INTRO_HOLD_CLASS)});
window.setTimeout(function(){if(!window.${MOUNT_FLAG}){d.classList.remove(${JSON.stringify(
  INTRO_PENDING_CLASS
)},${JSON.stringify(INTRO_HOLD_CLASS)});}},${BOOT_TIMEOUT_MS});
}catch(e){}})();`;

export function markIntroMounted() {
  window[MOUNT_FLAG] = true;
}

export function releaseIntroDocument() {
  document.documentElement.classList.remove(INTRO_PENDING_CLASS, INTRO_HOLD_CLASS);
}
