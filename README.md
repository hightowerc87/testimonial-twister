# testimonial-twister
jQuery plugin to create an animated twisting testimonial, currently utilizing Unslider.js

Demonstrated currently at http://syncoremedical.com/testimonials/

Uses the Unslider.js plugin, but could be modified for any slider utilizing a bullet nav. Unslider creates a UL list inside a div named .unslider-nav. This plugin targets those list items and also listens for the class change, .unslider-active, which is cycled to the list items when they become active

There is some additional CSS3 at work. This involves absolute positioning all of the list items on top of each other, directly in the middle. The plugin will automatically count, index, and rotate the list items based on how many there are. The list items use css :after elements to create the dots, which are then absolute positioned with bottom, pushing them 'upward' at their appropriate rotated angle.
