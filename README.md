# SVG Icon Picker for Umbraco

A picker, for picking icons from an SVG spritesheet.

## Setup

### Install Dependencies

```bash
npm install -g grunt-cli
npm install
```

### Build

```bash
grunt
```

### Watch

```bash
grunt watch
```

### Install in Umbraco

Build the package through Grunt.

```
grunt package
```

Then upload the created zip file in /pkg/umbraco in the local package installer in Umbraco.

## How to use
Pick SvgIconPicker as the editor for your desired icon property.

Type the path to your SVG spritesheet in the configuration.

![](https://raw.github.com/skttl/Umbraco.SvgIconPicker/master/readme_assets/editor-settings.png)

On the document where you put the editor, it works just like the built in media picker mixed with the icon picker.
You can filter icons, by searching the icons id. Select an icon by clicking it.

![](https://raw.github.com/skttl/Umbraco.SvgIconPicker/master/readme_assets/editor.png)

The selected icons id is saved as a string in the property value.

## #h5yr
@warrenbuckley for his Yeoman Umbraco generator https://github.com/warrenbuckley/generator-umbraco
