import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";


//  Register Pluging
gsap.registerPlugin(DrawSVGPlugin); 
gsap.registerPlugin(MorphSVGPlugin);

const svganim = gsap.timeline ({repeat: -1})

svganim
.from(".bubble1", {scale: 0, duration:2.5, ease: "elastic.out(1.5, 0.5)", transformOrigin:'50% 50%'}, "grow1")
.from(".bubble2", {scale: 0, duration:2.5, ease: "elastic.out(1.25, 0.5)", transformOrigin:'50% 50%'}, "grow2")
.from(".bubble3", {scale: 0, duration:2.5, ease: "elastic.out(1, 0.5)", transformOrigin:'50% 50%'}, "grow3")
.to(".bubble1", {ease: "elastic.out(1.5, 0.5)", transformOrigin:'50% 50%', scale:1.2}, "balloon1")
.to(".bubble1", {opacity: 0, delay: 0, duration: .01}, "gone1")
.from(".pop1", {opacity:0, duration: .02}, "pop1")
.to(".bubble2", {ease: "elastic.out(1.5, 0.5)", transformOrigin:'50% 50%', scale:1.2}, "balloon2")
.to(".bubble2", {opacity: 0, delay: 0, duration: .01}, "gone2")
.from(".pop2", {opacity:0, duration: .02}, "pop2")
.to(".bubble3", {ease: "elastic.out(1.5, 0.5)", transformOrigin:'50% 50%', scale:1.2}, "balloon3")
.to(".bubble3", {opacity: 0, delay: 0, duration: .01}, "gone3")
.from(".pop3", {opacity:0, duration: .02}, "pop3")
.to(".pop1", {opacity:0, duration:1}, "fadeffect")
.to(".pop2", {opacity:0, duration:1}, "fadeffect")
.to(".pop3", {opacity:0, duration:1}, "fadeffect")




;