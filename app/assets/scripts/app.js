import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/revealOnScroll';
import StickyHeader from './modules/StickyHeader';
import $ from 'jquery';

var mobile = new MobileMenu();
new RevealOnScroll($('.feature-item'), '85%');
new RevealOnScroll($('.testimonial'), '85%');
var sticky = new StickyHeader();
