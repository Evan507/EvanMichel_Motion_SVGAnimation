import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";


//  Register Pluging
gsap.registerPlugin(DrawSVGPlugin); 
gsap.registerPlugin(MorphSVGPlugin);

const svganim = gsap.timeline ()

svganim
.from(".bubble1", {scale: 0, duration:2.5, ease: "elastic.out(1.5, 0.5)"}, "grow1")
.from(".bubble2", {scale: 0, duration:2.5, ease: "elastic.out(1.25, 0.5)"}, "grow2")
.from(".bubble3", {scale: 0, duration:2.5, ease: "elastic.out(1, 0.5)"}, "grow3")
;