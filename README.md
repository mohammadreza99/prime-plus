# TODO

### Feature

- [ ] **dialogForm** - add hook support in config (just like angular formly to implement cascade mode). 
  set a valid type for labelPos in models.
- [ ] **toast** - fix preventDuplicate feature.
- [ ] **map** - implement `removeLastMarker` & `removeAllMarkers` buttons. also add an `@Input() multi: boolean` to allow
  choosing multiple marker.
- [ ] **all** - handle rtl direction in dropdowns panel (or etc.) when is appendTo body.

### New

- [ ] **empty** - implement component just like `AntDisign-NG-ZORRRO`.
- [ ] **status** - implement component just like `AntDisign-NG-ZORRRO`.
- [ ] **tree** - implement component.
- [ ] **treeSelect** - implement component.
- [ ] **enableCachingPerApi** - implement interceptor & config.
- [ ] **whiteboard** - implement component.
- [ ] **asyncSwitch** - have loading just like `buttonAsync.component`.
- [ ] **async** - add an async @Input to button, switch, checkbox, dual-switch instead of implementing new component.
- [ ] **datepicker** - implement component.
- [ ] **table** - implement `jalali` and `miladi` renderer, filter and editor. 
  add `templateString` and `templateHTML` support that accept a function returns a string or html template to render in cells. 
  for example if we want display format like `item.date/item.month/item.year` in a cell, we use
  `templateString` and if want to show image url of item, we can use `templateHtml` like below:

  ```
  {
    templateString: (item) => `${item.startDate}/${item.startMonth}/${item.startYear}`
  },
  { 
    templateHtml: (item) => `<img src=${item.imageUrl} />`
  }
  ```
  
