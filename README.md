# Personal website

 🌐 [https://www.sysanalyst.eu](https://www.sysanalyst.eu)

Built with:
- [Hugo](https://gohugo.io) 
- [Pulp](https://github.com/koirand/pulp) Theme 
-  [pyriand3r/docker-hugo](https://github.com/pyriand3r/docker-hugo)   

### Steps


```
docker pull pyriand3r/hugo-builder
```

```
docker run --rm -it -v ~/sysanalyst.eu:/src -u hugo pyriand3r/hugo-builder hugo new site sysanalyst.eu
```

```
git clone https://github.com/koirand/pulp.git themes/pulp
```

```
docker run --rm -it -v ~/sysanalyst.eu:/src -p 1313:1313 -u hugo pyriand3r/hugo-builder hugo server -w --bind=0.0.0.0 --renderToDisk
```

Render to public:

```
docker run --rm -it -v ~/sysanalyst.eu:/src  -u hugo pyriand3r/hugo-builder hugo server \
-b "https://www.sysanalyst.eu" \
--minify \
--appendPort=false \
--disableLiveReload \
--renderToDisk 
```
