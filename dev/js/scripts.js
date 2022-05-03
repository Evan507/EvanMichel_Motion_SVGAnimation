import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

//  Register Pluging
gsap.registerPlugin(DrawSVGPlugin); 
gsap.registerPlugin(MorphSVGPlugin);

const svganim = gsap.timeline ()
;