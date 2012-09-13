# MediaElement.js Plugins

Using [MediaElement.js](http://mediaelementjs.com/) is really nice and easy but some things we needed just weren't there, so we wrote these plugins to fix that. Everything is provided under the [MIT License](http://opensource.org/licenses/mit-license.php).

![Example](https://raw.github.com/hark/mediaelement-plugins/master/example.png)  
![Example Retina](https://raw.github.com/hark/mediaelement-plugins/master/example_retina.png)

## Font Awesome UI Buttons

[Font Awesome](http://fortawesome.github.com/Font-Awesome/) is an awesome pictograph font with all the features you exspect now in MediaElement.js.

It's important that 'fontawesome' come last in the list of features as it injects the icons into the buttons. Supported buttons are Play / Pause, Stop, Mute / Unmute, Fullscreen / Unfullscreen and Loop.

```js
{ features: ['playpause', 'fontawesome'] }
```

```css
/* Start: Play/pause */
.mejs-controls .mejs-play .icon-pause {
	display: none;
}
.mejs-controls .mejs-pause button {
	left: -2px;
}
.mejs-controls .mejs-pause .icon-play {
	display: none;
}
/* End: Play/pause */

/* Start: Mute/Volume */
.mejs-controls .mejs-mute .icon-volume-off {
	display: none;
}
.mejs-controls .mejs-unmute button {
	left: -4px;
}
.mejs-controls .mejs-unmute .icon-volume-up {
	display: none;
}
/* End: Mute/Volume */

/* FontAwesome Buttons */
.mejs-container .mejs-controls i {
	display: block;
	color: #ffffff;
	font-size: 16px;
	-webkit-transition: color 0.3s ease;
	-moz-transition: color 0.3s ease;
	-ms-transition: color 0.3s ease;
	-o-transition: color 0.3s ease;
	transition: color 0.3s ease;
}
.mejs-container .mejs-controls i:hover {
	color: #4497cb;
}
.mejs-container .mejs-controls i:active {
	color: #7abfea;
}
```

## Logo Button

Sometimes it's as simple as meeting a branding requirement. That's it. All it does it drop a logo onto the player. The CSS will need to be customized to match yout theme, most likely.

```js
{
	features: ['playpause', 'logo', 'fontawesome'],
	logo: { text: 'Hark', link: 'http://www.hark.com/' }
}
```

```css
/* Logo */
.mejs-container .mejs-controls .mejs-logo-button {
	text-indent: 100%;
	white-space: nowrap;
	overflow: hidden;
	cursor: pointer
}
.mejs-container .mejs-controls .mejs-logo-button span {
	display: block;
	width: 20px;
	height: 20px;
	background: transparent url(/logo-20px.png) no-repeat;
}
/* Retina */
@media only screen and (-webkit-min-device-pixel-ratio: 1.5), only screen and (-o-min-device-pixel-ratio: 3/2), only screen and (min--moz-device-pixel-ratio: 1.5), only screen and (min-device-pixel-ratio: 1.5){
	.mejs-container .mejs-controls .mejs-logo-button span {
		background: transparent url(/logo-40px.png) no-repeat;
		-webkit-background-size: 20px 20px;
		-moz-background-size: 20px 20px;
		background-size: 20px 20px;
	}
}
```
