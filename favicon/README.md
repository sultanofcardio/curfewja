# Generate Favicons

Use [faviconDescription.json](faviconDescription.json) to generate
web app icons with [https://realfavicongenerator.net](https://realfavicongenerator.net/)

```shell
# npm i -g cli-real-favicon
mkdir outputDir
real-favicon generate faviconDescription.json faviconData.json outputDir
mv outputDir/site.webmanifest outputDir/manifest.json
```

Move the generated image files to the public folder, then copy-paste
the contents of [`html_code.html`](outputDir/html_code.html) into the head
of [`public/index.html`](../public/index.html)