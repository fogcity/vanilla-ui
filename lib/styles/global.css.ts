import { globalStyle } from "@vanilla-extract/css";
/*
  删除所有样式“User-Agent-Stylesheet”，除了 'display' 属性
  - “symbol *” 部分是为了解决 Firefox SVG sprite bug 
 */
globalStyle(
  `*:where(:not(iframe, canvas, img, svg, video)
  :not(svg *, symbol *))`,
  {
    all: "unset",
    display: "revert",
  }
);

/* 首选 box-sizing 值 */
globalStyle(`*,*::before,*::after`, {
  boxSizing: "border-box",
});

/* 更正所有浏览器中的行高。
    防止在 iOS 中方向更改后调整字体大小。*/
globalStyle(`html`, {
  lineHeight: "1.15",
  WebkitTextSizeAdjust: "100%",
});

/**
 * 删除所有浏览器中的边距。
 */
globalStyle(`body`, {
  margin: 0,
  padding: 0,
});

/**
 * main在 IE 中一致地渲染元素。
 */
globalStyle(`main`, {
  display: "block",
});

/**
 * 更正Chrome、Firefox 和 Safari 中h1元素section和上下文的字体大小和边距
 */
globalStyle(`h1`, {
  fontSize: "2em",
  margin: "0.67em 0",
});

/**
 * 在 Firefox 中添加正确的框大小，并在 Edge 和 IE 中显示溢出。
 */
globalStyle(`hr`, {
  boxSizing: "content-box",
  height: 0,
  overflow: "visible",
});

/**
 * 更正所有浏览器中字体大小的继承和缩放，更正所有浏览器中的奇数em字体大小。
 */
globalStyle(
  `hr,code,
kbd,
samp`,
  {
    fontFamily: "monospace",
    fontSize: "1em",
  }
);

/* 删除 IE 10 中活动链接的灰色背景 */
globalStyle(`a`, {
  backgroundColor: "transparent",
});

/**
 * 在 Chrome、Edge 和 Safari 中添加正确的字体粗细。
 */
globalStyle(`b,strong`, {
  fontWeight: "bolder",
});

// 在所有浏览器中添加正确的字体大小。
globalStyle(`small`, {
  fontSize: "80%",
});

// 更改所有浏览器中的字体样式，并在 Firefox 和 Safari 中删除边距。
globalStyle(
  `button,
input,
optgroup,
select,
textarea`,
  {
    fontFamily: "inherit",
    fontSize: "100%",
    lineHeight: 1.15,
    margin: 0,
  }
);

/* 防止sub和sup元素影响所有浏览器中的行高。 */
globalStyle(
  `sub,
sup `,
  {
    fontSize: "75%",
    lineHeight: 0,
    position: "relative",
    verticalAlign: "baseline",
  }
);

globalStyle(`sub`, {
  bottom: "-0.25em",
});

globalStyle(`sup`, {
  top: "-0.5em",
});

/**
 * 移除 Firefox 中文本转换的继承。
 */
globalStyle(
  `button,
select`,
  {
    textTransform: "none",
  }
);

/* 更正 iOS 和 Safari 中无法设置可点击类型的样式 */
globalStyle(
  `button,
[type='button'],
[type='reset'],
[type='submit']`,
  {
    WebkitAppearance: "button",
  }
);

/**
 * 移除 Firefox 中的内边框和内边距。
 */
globalStyle(
  `button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner`,
  {
    borderStyle: "none",
    padding: 0,
  }
);

// 更正 Firefox 中的填充
globalStyle(`fieldset`, {
  padding: "0.35em 0.75em 0.625em",
});

// 在 Chrome、Firefox 和 Opera 中添加正确的垂直对齐方式。
globalStyle(`progress`, {
  verticalAlign: "baseline",
});

// 删除 IE 10+ 中的默认垂直滚动条。
globalStyle(`textarea`, {
  overflow: "auto",
});

/**
 * 更正 Edge 和 IE 中的文本换行。fieldset更正IE 中元素的颜色继承。fieldset删除填充，以便开发人员在所有浏览器中将元素归零时不会被抓到。
 */
globalStyle(`legend `, {
  display: "table",
  maxWidth: "100%",
  padding: 0,
  whiteSpace: "normal",
});

/* 删除列表样式（项目符号/数字） */
globalStyle(`ol, ul, menu`, {
  listStyle: "none",
});

/* 图像不能超过它们的容器 */
globalStyle(`img`, {
  borderStyle: "none",
  maxWidth: "100%",
});

/* 删除表格中单元格之间的间距 */
globalStyle(`table`, {
  borderCollapse: "collapse",
});

/* 恢复 Safari 上 textarea 元素的 'white-space' 属性 */
globalStyle(`textarea`, {
  whiteSpace: "revert",
});

/* 允许设置仪表元素样式的最小样式 */
globalStyle(`meter`, {
  WebkitAppearance: "revert",
  appearance: "revert",
});

/* 重置输入占位符的默认文本不透明度 */
globalStyle(`::placeholder`, {
  color: "unset",
});

/* 修复“隐藏”属性的特性。
   显示：还原；恢复为元素而不是属性 */
globalStyle(`:where([hidden])`, {
  display: "none",
});

/* 恢复 Chromium 浏览器中的错误
   - 修复内容可编辑属性将正常工作。*/
globalStyle(`:where([contenteditable])`, {
  listStyle: "none",
});

/* 删除列表样式（项目符号/数字） */
globalStyle(`ol, ul, menu`, {
  listStyle: "none",
});

/* 更正 Chrome 中递增和递减按钮的光标样式。 */
globalStyle(
  `[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button`,
  {
    height: "auto",
  }
);

/* 更正 Chrome 和 Safari 中的奇怪外观。更正 Safari 中的轮廓样式。 */
globalStyle(
  `[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button`,
  {
    WebkitAppearance: "textfield",
    outlineOffset: "-2px",
  }
);

/* 在 macOS 上删除 Chrome 和 Safari 中的内部填充。 */
globalStyle(`[type='search']::-webkit-search-decoration`, {
  WebkitAppearance: "none",
});

/* 更正 iOS 和 Safari 中无法设置可点击类型的样式。将字体属性更改为inherit在 Safari 中。 */
globalStyle(`::-webkit-file-upload-button`, {
  WebkitAppearance: "button",
  font: "inherit",
});

/* 在 Edge、IE 10+ 和 Firefox 中添加正确的显示。 */
globalStyle(`details`, {
  display: "block",
});

/* 在所有浏览器中添加正确的显示。 */
globalStyle(`summary`, {
  display: "list-item",
});

/* 在IE 10 中添加正确的显示。 */
globalStyle(`template`, {
  display: "none",
});
