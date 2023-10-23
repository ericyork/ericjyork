// (function(document, history, location) {
//   var HISTORY_SUPPORT = !!(history && history.pushState);
//   var anchorScrolls = {
//     ANCHOR_REGEX: /^#[^ ]+$/,
//     OFFSET_HEIGHT_PX: 100,

//     init: function() {
//       this.scrollToCurrent();
//       window.addEventListener('hashchange', this.scrollToCurrent.bind(this));
//       document.body.addEventListener('click', this.delegateAnchors.bind(this));
//     },

//     getFixedOffset: function() {
//       return this.OFFSET_HEIGHT_PX;
//     },

//     scrollIfAnchor: function(href, pushToHistory) {
//       var match, rect, anchorOffset;

//       if(!this.ANCHOR_REGEX.test(href)) {
//         return false;
//       }

//       match = document.getElementById(href.slice(1));

//       if(match) {
//         rect = match.getBoundingClientRect();
//         anchorOffset = window.pageYOffset + rect.top - this.getFixedOffset();
//         window.scrollTo(window.pageXOffset, anchorOffset);

//         // Add the state to history as-per normal anchor links
//         if(HISTORY_SUPPORT && pushToHistory) {
//           history.pushState({}, document.title, location.pathname + href);
//         }
//       }

//       return !!match;
//     },

//     /**
//      * Attempt to scroll to the current location's hash.
//      */
//     scrollToCurrent: function() {
//       this.scrollIfAnchor(window.location.hash);
//     },
//     /**
//      * If the click event's target was an anchor, fix the scroll position.
//      */
//     delegateAnchors: function(e) {
//       var elem = e.target;

//       if(
//         elem.nodeName === 'A' &&
//         this.scrollIfAnchor(elem.getAttribute('href'), true)
//       ) {
//         e.preventDefault();
//       }
//     }
//   };

//   window.addEventListener(
//     'DOMContentLoaded', anchorScrolls.init.bind(anchorScrolls)
//   );
// })(window.document, window.history, window.location);