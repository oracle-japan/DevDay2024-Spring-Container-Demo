define(['exports', 'preact/hooks'], (function(e,s){"use strict";e.useItemFocus=function(e){const t=s.useRef(null);return s.useEffect((()=>{e?.isFocusVisible&&t.current?.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})}),[e]),{focusedItemRef:t}}}));
//# sourceMappingURL=useItemFocus-1f78ff17.js.map
