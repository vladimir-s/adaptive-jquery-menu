adaptive-jquery-menu
====================

This jQuery plugin allows changing navigation menu style for devices with small screens. It checks screen width and if it lower than the desired value, the plugin replaces menu with a link. Click on this link restores original menu.

## Installation

Download adaptivemenu.jquery.js file.
Include the plugin on a page.

	<script src="adaptivemenu.jquery.js"></script>

Include the jQuery library **before** this plugin.
Add hidden CSS class to you stylesheet

```css
.hidden {
	display: none;
}
```

## Usage

Select a menu and call the `adaptiveMenu()` method.

```javascript
$(function() {
	$('#menuId').adaptiveMenu();
});
```

You can set properties in the `adaptiveMenu()` method. 

```javascript
$(function() {
	$('#menuId').adaptiveMenu({
		'width': 481,
		'text': 'Show menu'
	});
});
```

`width` property defines maximum screen width at which menu will be replaced with a link
`text` link anchor

## How it works

This plugin checks screen width and if it is lower than width value (`481px` by default), it adds hidden CSS class to the menu. Then it inserts a link with anchor from text and `adaptiveMenuTrigger` id attribute. When you click on the link, the plugin removes hidden class from menu and adds it to the link.

## Example

Full example is located in `index.html`, `styles.less` (`styles.css`) and `main.js` files.

## Authors

[Vladimir Statsenko](https://github.com/vladimir-s)